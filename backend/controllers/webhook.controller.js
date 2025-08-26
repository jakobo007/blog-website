import { Webhook } from "svix";
import userModel from "../models/user.model.js";

export const clerkWebhook =  async (req, res) => {
    const webhook = process.env.CLERK_WEBHOOK_SIGNING_SECRET

    if(!webhook) {
        throw new Error("Webhook secret needed")
    }

    const payload = req.body;
    const headers = req.headers;

    const wh = new Webhook(webhook);
    let event;
    try {
        event = wh.verify(payload, headers);
    } catch (error) {
        return res.status(400).json({ error: "Invalid webhook signature" });
    }

    console.log(event.data)


    if (event.type === "user.created") {
        const newUser = new userModel({
            clerkUserId: event.data.id,
          username: event.data.username || event.data.email_addresses[0].email_address,
          email: event.data.email_addresses[0].email_address,
          img: event.data.image_url,
        })
    
        await newUser.save();
      }

      return res.status(200).json({ message: "Webhook processed successfully" });

}
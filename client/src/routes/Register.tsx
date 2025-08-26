import { SignUp } from '@clerk/clerk-react'

const Register = () => {
  return (
    <div className='flex items-center justify-center'>
      <SignUp signInUrl='/login' />
    </div>
  )
}

export default Register

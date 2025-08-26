import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Link } from 'react-router';
import { FaBars } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";
import { PencilLine } from 'lucide-react';
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)

    const menuOpen = () => {
        setIsOpen(!isOpen)
    }

    const closeMenu = () => {
        setIsOpen(false);
    };
    
  return (
    <nav className="w-full h-16 md:h-20 flex items-center justify-between">


            {/* Logo */}
            <Link to='/'
            className='text-2xl cursor-pointer font-bold'
            onClick={closeMenu}
            >
                Blog
            </Link>

            {/* Mobile Menu Button */}
            <div className='md:hidden'>
                <Button 
                    variant="ghost"
                    size="icon"
                    className='cursor-pointer' 
                    onClick={menuOpen}
                    aria-expanded={isOpen}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <FaXmark className='text-2xl' /> : <FaBars className='text-2xl'/>}
                </Button>
            </div>

            {/* Mobile Menu */}
            <div className={`
                md:hidden fixed top-16 left-0 w-full bg-white shadow-md transition-all duration-300 ease-in-out z-30
                ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}
            `}>
                <div className="flex flex-col py-4 px-6 space-y-2 border-t">
                    
                <Link to='/writeblog' onClick={closeMenu}
                    
                >
                    <Button className='bg-white text-black hover:text-white cursor-pointer border-2 border-black'>
                    <PencilLine />
                    Write

                    </Button>
                </Link>
                    <Link to='/posts' onClick={closeMenu} className="py-2 hover:text-primary transition-colors">
                        Posts
                    </Link>
                    
                    
                    <div className="pt-2 border-t">
                        <SignedOut>
                            <Link to='/register' onClick={closeMenu}>
                                <Button className="w-full">Sign Up</Button>
                            </Link>
                        </SignedOut>
                        
                        <SignedIn>
                            <div className="flex items-center justify-between">
                                <span>Your Account</span>
                                <UserButton afterSignOutUrl="/" />
                            </div>
                        </SignedIn>
                    </div>
                </div>
            </div>

            {/* Desktop */}

            <div className='hidden md:flex items-center gap-8 xl:gap-12 font-medium cursor-pointer'>
                
                <Link to='/writeblog'
                    
                >
                    <Button className='bg-white text-black hover:text-white cursor-pointer border-2 border-black'>
                    <PencilLine />
                    Write

                    </Button>
                </Link>
                <Link to='/posts'>
                    Posts
                </Link>
                

                <SignedOut>
                <Link to='/register'>
                    <Button className='bg-black text-white'>Sign Up</Button>
                </Link>
                </SignedOut>

                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
            
            
        </nav>
  )
}

export default Navbar

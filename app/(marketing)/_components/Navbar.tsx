"use client"

import { ModeToggle } from "@/components/mode-taggle"
import { useScrollTop } from "@/hook/use-scroll-top"
import { cn } from "@/lib/utils"
import Logo from "./logo"
import { useConvexAuth } from "convex/react"
import { SignInButton } from "@clerk/clerk-react"
import { Button } from "@/components/ui/button"

const Navbar = () => {
    const scrolled = useScrollTop()
    const { isAuthenticated, isLoading } = useConvexAuth()

    return (
        <div className={cn(" z-50 bg-background dark:bg-[#1f1f1f] fixed w-full top-0 flex items-center p-5", scrolled && "border-b shadow-sm")} >
            <Logo />
            <div className=" md:ml-auto md:justify-end flex justify-between w-full items-center gap-x-2">
                {isLoading && (
                    <p>Loading....</p>
                )}
                {!isAuthenticated && !isLoading && (
                    <>
                        <SignInButton mode="modal" >
                            <Button variant='ghost' >
                                Log In
                            </Button>
                        </SignInButton>
                        <SignInButton mode="modal" >
                            <Button size='sm' >
                                Get Shamu free
                            </Button>
                        </SignInButton>
                    </>
                )}
                <ModeToggle />
            </div>
        </div>
    )
}

export default Navbar
"use client"

import { useConvexAuth } from "convex/react"
import { SignInButton, UserButton } from "@clerk/clerk-react"
import Link from "next/link"

import { useScrollTop } from "@/hook/use-scroll-top"
import { ModeToggle } from "@/components/mode-taggle"
import { Button } from "@/components/ui/button"
import { Spinner } from "./spinner"
import { cn } from "@/lib/utils"

import Logo from "./logo"

const Navbar = () => {
    const { isAuthenticated, isLoading } = useConvexAuth()
    const scrolled = useScrollTop()

    return (
        <div className={cn(" z-50 bg-background dark:bg-[#1f1f1f] fixed w-full top-0 flex items-center p-5", scrolled && "border-b shadow-sm")} >
            <Logo />
            <div className=" md:ml-auto md:justify-end flex justify-between w-full items-center gap-x-2">
                {isLoading && (
                    <Spinner />
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

                {isAuthenticated && !isLoading && (
                    <>
                        <Button variant='ghost' size='sm' asChild >
                            <Link href='/documents' >
                                Enter Shamu
                            </Link>
                        </Button>
                        <UserButton afterSignOutUrl="/" />
                    </>
                )}


                <ModeToggle />
            </div>
        </div>
    )
}

export default Navbar
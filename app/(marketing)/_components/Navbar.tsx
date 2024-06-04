"use client"

import { ModeToggle } from "@/components/mode-taggle"
import { useScrollTop } from "@/hook/use-scroll-top"
import { cn } from "@/lib/utils"
import Logo from "./logo"

const Navbar = () => {
    const scrolled = useScrollTop()

    return (
        <div className={cn(" z-50 bg-background fixed w-full top-0 flex items-center p-5", scrolled && "border-b shadow-sm")} >
            <Logo />
            <div className=" md:ml-auto md:justify-end flex justify-between w-full items-center gap-x-2">
                <ModeToggle />
            </div>
        </div>
    )
}

export default Navbar
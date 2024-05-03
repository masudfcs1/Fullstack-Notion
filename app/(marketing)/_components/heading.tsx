"use client"

import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import React from 'react'

const Heading = () => {
    return (
        <div className=' max-w-3xl space-y-4 ' >
            <h1 className=' text-3xl sm:text-5xl md:text-6xl font-bold '>
                <span className=' underline'>Shamu:</span> Your hub for creative synergy. Unite, write, and ignite your project’s potential
            </h1>
                <h3>Shamu is connected workspace where better, faster work happens </h3>
                <Button>
                    Enter Shamu
                    <ArrowRight className=' h-4 w-4 ml-2 '/>
                </Button>
        </div>
    )
}

export default Heading
import React from 'react'
import Heading from './_components/heading'
import Footer from './_components/footer'
import Heros from './_components/heros'

const Merketing = () => {
    return (
        <div className=' min-h-full flex flex-col '>
            <div className=' flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10 '>
                <Heading />
                <Heros />
                <Footer/>
            </div>
        </div>
    )
}

export default Merketing
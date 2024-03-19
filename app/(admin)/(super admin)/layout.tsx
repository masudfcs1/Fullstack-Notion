import React from 'react'

const RootLayout = ({ children }: { children:React.ReactNode }) => {
  return (
    <div className=' h-full bg-green-500 p-3'>{children} </div>
  )
}

export default RootLayout
import React from 'react'

export default function Chip({children}:{children: React.ReactNode}){
  return (
    <span className="text-xs px-3 py-1 bg-navy-800 text-offwhite rounded-full">{children}</span>
  )
}

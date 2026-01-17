'use client'
import React from 'react'
import Link from 'next/link'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'gold' | 'outline' | 'navy'
  href?: string
}

export default function Button({variant='navy', href, children, ...rest}: Props){
  const base = 'inline-block text-sm font-medium rounded-full px-4 py-2'
  const cls = variant === 'gold' ? `btn-gold ${base}` : variant === 'outline' ? `btn-outline ${base}` : `bg-navy-800 text-offwhite ${base}`

  if(href){
    return <Link href={href} className={cls} {...(rest as any)}>{children}</Link>
  }

  return <button className={cls} {...rest}>{children}</button>
}

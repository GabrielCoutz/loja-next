import React, { PropsWithChildren } from 'react'

export const List = ({children}: PropsWithChildren) => {
  return (
    <ul className='p-4 container mx-auto mt-6'>{children}</ul>
  )
}

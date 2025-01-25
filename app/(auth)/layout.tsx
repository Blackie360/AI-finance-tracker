import React from 'react'

import { ReactNode } from 'react';

function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className='flex justify-center pt-35'>{children}</div>
  )
}

export default AuthLayout
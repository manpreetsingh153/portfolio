// components/SessionProvider.tsx
'use client'

import { SessionProvider as NextAuthProvider } from 'next-auth/react'
import { ReactNode } from 'react'
import { Session } from 'next-auth'

interface Props {
  children: ReactNode
  session?: Session | null
}

export default function SessionProvider({ children, session }: Props) {
  return <NextAuthProvider session={session}>{children}</NextAuthProvider>
}

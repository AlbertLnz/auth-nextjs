'use client'

import { useSession } from 'next-auth/react' // Remember you must use an AuthProvider for client components to useSession
import { redirect } from 'next/navigation'
import Card from '../components/Card'

export default function ClientPage() {
    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
            redirect('/api/auth/signin?callbackUrl=/')
        }
    })

    return (
        <section className="flex flex-col gap-6">
            <Card user={session?.user} />
        </section>
    )
}
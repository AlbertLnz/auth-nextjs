import { options } from "../api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"
import Card from "../components/Card"
import { redirect } from "next/navigation"

export default async function ServerPage() {
    const session = await getServerSession(options)

    if (!session) {
        redirect('/api/auth/signin?callbackUrl=/server')
    }

    return (
        <section className="flex flex-col gap-6">
            <Card />
        </section>
    )

}
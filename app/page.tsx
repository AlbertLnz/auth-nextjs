import { options } from "./api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"

export default async function Home() {

  const session = await getServerSession(options)

  return (
    <>
      {session ? (
        <h1 className="text-2xl mt-6 ml-4">Hi User, welcome!!</h1>
      ) : (
        <h1 className="text-2xl mt-6 ml-4">You Shall Not Pass!</h1>
      )}
    </>
  )
}

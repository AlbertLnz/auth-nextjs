import Image from "next/image"

type User = {
  name?: string | null | undefined;
  email?: string | null | undefined;
  image?: string | null | undefined;
} | undefined

type Props = {
  user: User,
}

const Card = ({ user }: Props) => {

  const userImage = user?.image || ''

  return (
    <div className="flex flex-col justify-center items-center gap-y-4">

      <p className="mt-4">Card component is only visible to users who have logged in before</p>

      {/* Image for GitHub login */}
      <Image
            className="border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
            src={userImage}
            width={200}
            height={200}
            alt={user?.name ?? "Profile Pic"}
            priority={true}
      />

      <h2>Hi! I&lsquo;m <span className="font-semibold">{user?.name}</span> on GitHub!</h2>
      <p>This is my email: {user?.email}</p>
      
    </div>
  )
}

export default Card

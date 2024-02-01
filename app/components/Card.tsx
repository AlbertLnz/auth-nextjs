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
    <div>
      Card component is only visible to users who have logged in before

      {/* Image for GitHub login */}
      <Image
            className="border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
            src={userImage}
            width={200}
            height={200}
            alt={user?.name ?? "Profile Pic"}
            priority={true}
      />
      
    </div>
  )
}

export default Card

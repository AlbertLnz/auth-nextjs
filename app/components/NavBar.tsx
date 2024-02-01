import Link from "next/link"

export default function Navbar() {
    return (
        <nav className="bg-blue-800 p-4">
            <ul className="flex justify-evenly text-md font-bold">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/api/auth/signin">Sign In</Link></li>
                <li><Link href="/api/auth/signout">Sign Out</Link></li>
                <li><Link href="/server">Server</Link></li>
                <li><Link href="/client">Client</Link></li>
                <li><Link href="/middleware">Middleware</Link></li>
                <li><Link href="/no-middleware">No-Middleware</Link></li>
            </ul>
        </nav>
    )
}
import Link from 'next/link'

export default function CookieHeader(){
    return(
        <header class = "flex justify-between text-3xl bg-green-500 p-4">
        <h1 class = "pl-4">Cookie Stand Admin</h1>
        <Link href ="/overview">
            <button class = "bg-gray-50 p-2 border rounded mr-4 text-sm items-center" href = "/overview"><a>Overview</a></button>
        </Link>
        </header>
    )
}
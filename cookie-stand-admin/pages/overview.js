import Head from 'next/head'
import Link from 'next/link'



export default function Overview() {
    return(
        <div className="box-border min-h-screen bg-green-50">
            <Head>
                <title>Cookie Stand Admin</title>
            </Head>
            <Header title="Cookie Stand Admin"/>
            <main className="h-full text-sm text-center">
            <button className="px-4 py-2 mt-16 bg-gray-300 rounded">
                {/* <Link href="/"> */}
                <a className="flex items-center">
                    Return to Main page
                </a>
                {/* </Link> */}
            </button>
            </main>
        </div>        
    );
}
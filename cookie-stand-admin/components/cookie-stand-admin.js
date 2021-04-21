
import Head from 'next/head'
import CookieHeader from './cookie-stand-header'
import CookieFooter from './cookie-stand-footer'
import CookieTable from './cookie-stand-table'
import CookieForm from './cookie-stand-form'

export default function CookieAdmin(){
    return (
        <div class="min-h-screen box-border bg-green-50">
            <Head>
                <title>Cookie Stand Admin</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <CookieHeader/>

            <main class = "text-center">
                <CookieForm/>
                <CookieTable/>
            </main>
            <CookieFooter/>
        </div>
    );

}
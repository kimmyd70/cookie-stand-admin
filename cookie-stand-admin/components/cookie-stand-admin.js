
import Head from 'next/head'
import { useState, useEffect} from 'react'
import CookieHeader from './cookie-stand-header'
import CookieFooter from './cookie-stand-footer'
import CookieTable from './cookie-stand-table'
import CookieForm from './cookie-stand-form'

export default function CookieAdmin(){

    const [stands, setStands] = useState([]);
    const hourlySales = [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36]
    const totalSales = hourlySales.reduce((acc, hour) => acc = acc + hour, 0)
    const totalLength = stands.length

    function onCreate(event){
        event.preventDefault()
        const stand = {
        location: event.target.location.value,
        minCustomers: event.target.minCustomers.value,
        maxCustomers: event.target.maxCustomers.value, 
        avgCustomers: event.target.avgCustomers.value,
        }
        setStands([...stands, stand])
    }

// -----v3-----
    // useEffect(() => {
    //     if (!data) return;
    //     setStands(data);
    // }, [data])

    // if (error) return <h2>Ruh Roh</h2>
    // if (!data) return <h2>Loading...</h2>

    // async function createHandler(values) {

    //     const newStand = CookieStand.fromValues(values);

    //     newStand.location += '...'; // Add the ... to show loading state

    //     const updatedStands = [newStand, ...cookieStands]

    //     mutate(updatedStands, false);

    //     await postWithToken(token, values);

    //     mutate();

    // }

    // async function deleteHandler(stand) {

    //     const updatedStands = cookieStands.filter(storedStand => storedStand.id !== stand.id);

    //     mutate(updatedStands, false);

    //     await deleteWithToken(stand.id, token);

    //     mutate(async stands => {
    //         return stands.filter(candidate => candidate.id !== stand.id);
    //     });
    // }

    return (
        <div class="min-h-screen box-border bg-green-50">
            <Head>
                <title>Cookie Stand Admin</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <CookieHeader/>

            <main class = "text-center">
                <CookieForm />
                <CookieTable stands = {stands} />
            </main>
            <CookieFooter totalLength= {totalLength} />
        </div>
    );

}
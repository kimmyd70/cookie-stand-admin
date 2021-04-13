import Head from 'next/head'

export default function Home() {
  return (
    <div className="min-h-screen box-border bg-green-50">
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className = "p-3 text-xl bg-green-500">
        <h1>Cookie Stand Admin</h1>
      </header>

      <main className="text-base text-center">
        <h2 className="m-4">Create Cookie Stand</h2>
        {/* <form onSubmit = {createCookieStandHandler} name = "formData" className= "flex-row mx-48 min-w-min p-4 my-5 rounded-md bg-green-300"> */}
        <form  name = "formData" className= "flex-row mx-48 min-w-min p-4 my-5 rounded-md bg-green-300">

          <input name = "create" className="">
          </input>
          <button className ="px-2 py-1 by-gray-500">Create</button>
        </form>
      </main>

      <footer className="p-3 text-sm bg-green-500" >
        <p>&copy; 2021</p>
      </footer>
    </div>
  )
}

import Head from 'next/head'

export default function Home() {
  return (
    <div class="min-h-screen box-border bg-green-50">
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header class = "text-xl bg-green-500">
        <h1>Cookie Stand Admin</h1>
      </header>

      <main class="text-center">
        {/* <form onSubmit = {createCookieStandHandler} name = "formData" className= "flex-row mx-48 min-w-min p-4 my-5 rounded-md bg-green-300"> */}
        <form  name = "formData" class= "flex-row mx-28 p-4 my-5 rounded-md bg-green-300">
          <h2 class="mb-5">Create Cookie Stand</h2>

          <div class="flex mb-5">
            <label for="location" class="pr-4 pt-2 text-xs">Location</label>
            <input name = "location" class="flex-1 bg-gray-200"></input>
          </div>

          <div class="flex items-center gap-x-4 mt-5 text-xs">
              <div class="flex-1">
                <label for="minCustomers" class="">Maximum Customers Per Hour</label>
                <input name="minCustomers" class="w-full"></input>
              </div>
              <div class="flex-1">
                <label for="maxCustomers" class="">Minimum Customers Per Hour</label>
                <input name="maxCustomers" class="w-full"></input>
              </div>
              <div class="flex-1">
                <label for="avgCookies" class="">Average Cookies Per Sale</label>
                <input name="avgCookies" class="w-full"></input>
              </div>
            <button class ="flex-1 pt-4 pb-4 text-xs bg-green-500">Create</button>
          </div>
        </form>
        <h3 class="">Report Table Coming Soon ...</h3>
      </main>

      <footer class="p-3 text-sm bg-green-500" >
        <p>&copy; 2021</p>
      </footer>
    </div>
  )
}

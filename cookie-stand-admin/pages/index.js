import Head from 'next/head'

import { useState } from "react";

export default function Home() {
  const [formInfo, setInfo] = useState("");

  function formHandler(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formJSON = JSON.stringify(Object.fromEntries(formData),null,2);
// Need to parseInt the number fields for proper display
    setInfo(formJSON);
  }
  
  return (
    <div class="min-h-screen box-border bg-green-50">
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header class = "text-xl bg-green-500">
        <h1 class = "pl-4">Cookie Stand Admin</h1>
      </header>

      <main class="text-center">
        <form onSubmit = {formHandler} name = "formData" class= "flex-row mx-28 p-4 my-5 rounded-md bg-green-300">
          <h2 class="mb-5">Create Cookie Stand</h2>

          <div class="flex mb-5">
            <label for="location" class="pr-3 text-xs">Location</label>
            <input name = "location" class="flex-1 pl-2 text-xs bg-gray-200"></input>
          </div>

          <div class="flex items-center gap-x-4 mt-5 text-xs">
              <div class="flex-1">
                <label for="minCustomers" class="">Maximum Customers Per Hour</label>
                <input type ="number" step="0.1" name="minCustomers" class="w-full"></input>
              </div>
              <div class="flex-1">
                <label for="maxCustomers" class="">Minimum Customers Per Hour</label>
                <input type ="number" step="0.1" name="maxCustomers" class="w-full"></input>
              </div>
              <div class="flex-1">
                <label for="avgCookies" class="">Average Cookies Per Sale</label>
                <input type ="number" step="0.1" name="avgCookies" class="w-full"></input>
              </div>
            <button class ="flex-1 pt-3 pb-3 text-xs bg-green-500">Create</button>
          </div>
        </form>
        <h3 class="my-5 text-gray-400">Report Table Coming Soon ...</h3>

        <p className="my-5 text-gray-400">{formInfo}</p>
      </main>

      <footer class="p-3 text-sm bg-green-500" >
        <p>&copy; 2021</p>
      </footer>
    </div>
  )
}

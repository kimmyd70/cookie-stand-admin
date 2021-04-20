import Head from 'next/head'
import Link from 'next/link'


import { useState } from "react";
import { hours } from './data';

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

      <header class = "flex justify-between text-xl bg-green-500 p-4">
        <h1 class = "pl-4">Cookie Stand Admin</h1>
        {/* <link href ="/overview"> */}
          <button class = "bg-gray-50 p-2 border rounded mr-4 text-sm items-center" href = "/overview"><a>Overview</a></button>
        {/* </link> */}
      </header>

      <main class="text-center">
        <form onSubmit = {formHandler} name = "formData" class= "flex-row mx-28 p-4 my-5 rounded-md bg-green-300">
          <h2 class="mb-5">Create Cookie Stand</h2>

          <div class="flex mb-5">
            <label for="location" class="pr-3 text-sm">Location</label>
            <input name = "location" class="flex-1 pl-2 text-sm bg-gray-200"></input>
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
            <button class ="flex-1 rounded-md pt-3 pb-3 text-xs bg-green-500">Create</button>
          </div>
        </form>
        {/* <div><h3 class="my-5 text-gray-400">Report Table Coming Soon ...</h3>

        <p className="my-5 text-gray-400">{formInfo}</p> */}
        <div>
          <ResponseTable />
        </div>
      </main>

      <footer class="p-3 mt-8  bg-green-500" >
        <p>## bring in stand total number</p>
        {/* <p>&copy; 2021</p> */}
      </footer>
    </div>
  );
}

function ResponseTable(props){
  return(
    <table class = "">
      <thead class = "text-center bg-green-500 p-1">
        <tr>
          <th>Location</th>
          {/* pull in hours */}
          {hours.map(hour =>(<th key = {hour}>{hour}</th>))}
          <th>Totals</th>
        </tr>
      </thead>

      <tbody>
        <tr class="text-center border border-green-500 odd:bg-green-200 even:bg-green-300">
          <td class = "">first stand</td>
          <td> hour1</td>
        </tr>
        <tr class="text-center border border-green-500 odd:bg-green-200 even:bg-green-300">
          <td class = "">first stand</td>
          <td> hour1</td>
        </tr>

      </tbody>

      <tfoot class = "font-bold">
        <tr>
          <td class = "bg-green-500 mb-3 p-1">Totals</td>
          <td class = "bg-green-500 mb-3 p-1">NUMBER</td>
          <td class = "bg-green-500 mb-3 p-1">NUMBER</td>

        </tr>
      </tfoot>
    </table>
  );
}

import { useState } from 'react';
// import CookieTable from './cookie-stand-table.js'




export default function CookieForm() {
    // const initVal = {
    //     location: "",
    //     maxCustomers: 0,
    //     minCustomers: 0,
    //     avgCookies: 0,
    // }
    const[values,setValues] = useState([]);
    const [stands, setStands] = useState([]);
    const hourlySales = [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36]
    const hardCodeStand = 'Chicago'


    function onCreate(event){
        event.preventDefault();

        const stand = {
        location: event.target.location.value,
        hourly_sales: hourlySales,
        id: stands.length,        
        };
        setStands([...stands, stand]);
        // setValues([...values, stand.hourly_sales])
        console.log ('stand created')
        console.log({stands})
        console.log({values})
    }


    // function submitHandler(event) {
    //     event.preventDefault();
    //     onCreate(event);    
    //     setValues(values);
    // }



    function inputChangeHandler(event) {
        event.preventDefault();
        let { name, value, type } = event.target;
    
        if (type === "number") {
            value = parseFloat(value);
        }
        // setStands({...stands, [name]: value})
        // setStands({...stands, });

        setValues({ ...values, [name]: value });
    }
    

    return (
        <form onSubmit={onCreate} class="flex-row mx-28 p-4 my-5 rounded-md bg-green-300">
            <h2 class="mb-5">Create Cookie Stand</h2>

            <div class="flex mb-5">
                <label htmlFor="location" class="pr-3">Location</label>
                <input
                    type="text"
                    name="location"
                    id="location"
                    value={values.name}
                    onChange={inputChangeHandler}
                    placeholder="Cookie Stand Location"
                />            
            </div>

            <div class="flex items-center gap-x-4 mt-5 ">
            <div class="flex-1">
                <label htmlFor="minCustomers" class="">Minimum Customers Per Hour</label>
                <input
                    type="number"
                    name="minCustomers"
                    id="minCustomers"
                    // value={minCustomers.value}
                    onChange={inputChangeHandler}
                />                
                </div>
            <div class="flex-1">
                <label htmlFor="maxCustomers" class="">Maximum Customers Per Hour</label>
                <input
                    type="number"
                    name="maxCustomers"
                    id="maxCustomers"
                    // value={values.maxCustomers}
                    onChange={inputChangeHandler}
                />                  
            </div>
            <div class="flex-1">
                <label htmlFor="avgCookies" class="">Average Cookies Per Sale</label>
                <input
                    type="number"
                    step ="0.1"
                    name="avgCookies"
                    id="avgCookies"
                    // value={values.avgCookies}
                    onChange={inputChangeHandler}
                />
            </div>
                <button type = "submit" class="flex-1 rounded-md pt-3 pb-3  bg-green-500">Create</button>
            </div>
        </form>

    );
}
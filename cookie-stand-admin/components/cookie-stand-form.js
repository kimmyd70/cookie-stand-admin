import { useState } from 'react';




export default function CookieForm() {
    const initVal = {
        location: "",
        max: 0,
        min: 0,
        avg: 0,
    }

    const[values,setValues] = useState(initVal);
    const [stands, setStands] = useState([]);

    function onCreate(event){
        // event.preventDefault();
        const stand = {
        location: event.target.location.value,
        minCustomers: event.target.minCustomers.value,
        maxCustomers: event.target.maxCustomers.value, 
        avgCookies: event.target.avgCookies.value,
        };
        setStands([...stands, stand]);

    }


    function submitHandler(event) {
        event.preventDefault();
        onCreate(values);    
        setValues(initVal);
    }



    function inputChangeHandler(event) {
        let { name, value, type } = event.target;
    
        if (type === "number") {
            value = parseFloat(value);
        }
    
        setValues({ ...values, [name]: value });
    }
    

    return (
        <form onSubmit={submitHandler} class="flex-row mx-28 p-4 my-5 rounded-md bg-green-300">
            <h2 class="mb-5">Create Cookie Stand</h2>

            <div class="flex mb-5">
                <label htmlFor="location" class="pr-3">Location</label>
                <input
                    type="text"
                    name="location"
                    id="location"
                    value={values.location}
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
                    value={values.minCustomers}
                    onChange={inputChangeHandler}
                />                
                </div>
            <div class="flex-1">
                <label htmlFor="maxCustomers" class="">Maximum Customers Per Hour</label>
                <input
                    type="number"
                    name="maxCustomers"
                    id="maxCustomers"
                    value={values.maxCustomers}
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
                    value={values.avgCookies}
                    onChange={inputChangeHandler}
                />
            </div>
                <button type = "submit" class="flex-1 rounded-md pt-3 pb-3  bg-green-500">Create</button>
            </div>
        </form>

    );
}
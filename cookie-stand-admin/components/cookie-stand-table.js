import render from 'react'
import { hours } from '../pages/data';


export default function CookieTable({ stands, totalLength}) {
    const hourlySales = [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36]
    const totalSales = hourlySales.reduce((acc, hour) => acc = acc + hour, 0)
    
    if (totalLength == 0){
        return <p className="text-center flex justify-center">No Cookie Stands Available</p>
    }
    
    return (
        <table class="">
            <thead class="text-center bg-green-500 p-1">
                <tr>
                    <th>Location</th>
                    {hours.map(hour => (<th key={hour}>{hour}</th>))}
                    <th>Totals</th>
                </tr>
            </thead>

            {/* <tbody>
                <tr class="text-center border border-green-500 odd:bg-green-200 even:bg-green-300">
                    <td class="">first stand</td>
                    <td> hour1</td>
                </tr>
                <tr class="text-center border border-green-500 odd:bg-green-200 even:bg-green-300">
                    <td class="">first stand</td>
                    <td> hour1</td>
                </tr>

            </tbody> */}

            <tbody>
                {stands.map((stand, i) => {
                    return (
                        <tr key={stand.id} className="text-right border border-green-500 odd:bg-green-200 even:bg-green-300">
                            <th>
                                <div>
                                    <p className="float-left pl-4">{stand.location}</p>
                                    <span className="float-right pr-2" onClick={() => onDelete(stand)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                    </span>
                                </div>
                            </th>
                            {stand.cookiesEachHour.map((amt, i) => (
                                <td key={i}>
                                    {amt}
                                </td>
                            ))}
                            <td>{stand.totalDailyCookies}</td>
                        </tr>
                    )
                })}
            </tbody>

            <tfoot class="font-bold">

                <tr className="text-right bg-green-400">
                    <td >Totals</td>
                        {hourlySales.map(sales => (<td>{sales * totalLength}</td>))}
                    <td>{totalSales * totalLength}</td>                
                </tr>

            </tfoot>
        </table>
    );
}

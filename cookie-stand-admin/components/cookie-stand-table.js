import { hours } from '../pages/data';


export default function CookieTable() {
    return (
        <table class="">
            <thead class="text-center bg-green-500 p-1">
                <tr>
                    <th>Location</th>
                    {/* pull in hours */}
                    {hours.map(hour => (<th key={hour}>{hour}</th>))}
                    <th>Totals</th>
                </tr>
            </thead>

            <tbody>
                <tr class="text-center border border-green-500 odd:bg-green-200 even:bg-green-300">
                    <td class="">first stand</td>
                    <td> hour1</td>
                </tr>
                <tr class="text-center border border-green-500 odd:bg-green-200 even:bg-green-300">
                    <td class="">first stand</td>
                    <td> hour1</td>
                </tr>

            </tbody>

            <tfoot class="font-bold">
                <tr>
                    <td class="bg-green-500 mb-3 p-1">Totals</td>
                    <td class="bg-green-500 mb-3 p-1">NUMBER</td>
                    <td class="bg-green-500 mb-3 p-1">NUMBER</td>

                </tr>
            </tfoot>
        </table>
    );
}

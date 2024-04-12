import { fetchAllCustomers } from "@/app/lib/data";
import CustomersTable from "@/app/ui/customers/table";


export default async function Page() {

    const customers = await fetchAllCustomers()

    return (
        <div className="w-full">
            <div>
                <CustomersTable customers={customers}/>
            </div>
        </div>
    )
}
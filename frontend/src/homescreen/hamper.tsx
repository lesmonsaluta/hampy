import { Button } from "@/components/ui/button"
import HamperTable from "./hamper-table.tsx"

function Hampy() {
    return (
        <>
            {/* hamper */}
            <div className='flex-1 mx-4 overflow-auto bg-gray-100 lg:mx-auto y-2 lg:w-full b max-w-7xl rounded-xl grow'>
                {/* top row */}
                <div className="flex w-full bg-blue-400 items-cenFter max-h-24 h-1/6 rounded-xl">
                {/* add actual white box */}
                    <span className="flex-1 m-4 text-2xl">Hamper</span>
                    <Button className="my-4" variant="destructive">Clear Hamper</Button>
                    <Button className="mx-2 my-4">Fill Hamper</Button>
                </div>
                
                {/* table */}
                <div className="m-4">
                    <HamperTable />
                </div>
            </div>
        </>
    )
}


export default Hampy
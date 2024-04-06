import { Button } from "@/components/ui/button"
import ClosetGrid from "./closet-grid.tsx"

function Closet() {
    

    return (
        <>
            {/* closet */}
            <div className='flex-1 mx-4 my-2 overflow-auto bg-gray-100 lg:mx-auto max-w-7xl rounded-xl grow'>
                {/* top row */}
                <div className="flex items-center w-full bg-blue-400 h-1/6 max-h-24 rounded-xl">
                    
                    {/* add actual white box */}
                    <span className="flex-1 m-4 text-xl">Closet</span>
                    <Button className="m-4">Fill Closet</Button>
                </div>
                
                {/* Grid */}
                <div className="m-4">
                    <ClosetGrid />
                </div>
            </div>
        </>
    )
}

export default Closet
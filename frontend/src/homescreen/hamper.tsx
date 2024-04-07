import { Button } from "@/components/ui/button"
import HamperTable from "./hamper-table.tsx"

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from ".././redux-components/store.ts";

import { flip, clear } from "../redux-components/selectionSlice.ts"


function Hampy() {
    const dispatch = useDispatch<AppDispatch>();
    const select_mode = useSelector((state: RootState) => state.counter.select_mode);
    const selection = useSelector((state: RootState) => state.counter.selected);

    function moveToClosetTriggered() {
        console.log(`Sending ${selection}`)
        dispatch(clear())
    }

    return (
        <>
            {/* hamper */}
            <div className='flex-1 mx-4 overflow-auto bg-gray-100 lg:mx-auto y-2 lg:w-full b max-w-7xl rounded-xl grow'>
                {/* top row */}
                <div className="flex w-full bg-blue-400 items-cenFter max-h-24 h-1/6 rounded-xl">
                {/* add actual white box */}
                    <span className="flex-1 m-4 text-2xl">Hamper</span>
                    <Button className="my-4" onClick={() => dispatch(flip())} variant="destructive">Clear Hamper</Button>

                    {select_mode == true 
                        ? <Button className="my-4" onClick={() => moveToClosetTriggered()}>Send load</Button>
                        : <Button className="mx-2 my-4">Fill Hamper</Button>}

                    {select_mode && <Button className="my-4" >Select all</Button>}
                    {/* onclick here, the idea is all hamper id from the tanstack query will be added to the "selected" state in the slice
                     after such a change, all checkmarks will be read as checked */}
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
import { Button } from "@/components/ui/button"
import HamperTable from "./hamper-table.tsx"

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from ".././redux-components/store.ts";
import { hamperFlip, hamperClear } from "../redux-components/hamperSelectionSlice.ts"

import React from "react";

function Hampy() {
    const dispatch = useDispatch<AppDispatch>();
    const select_mode = useSelector((state: RootState) => state.hamperSelection.hamperSelect_mode);
    const selection = useSelector((state: RootState) => state.hamperSelection.hamperSelected);

    // Essentially sets the "selected" elements to be none, as it is a fresh load
    React.useEffect(() => {
        dispatch(hamperClear())
    }, [])

    function moveToClosetTriggered() {
        console.log(`Sending ${selection}`)
        dispatch(hamperClear())
    }

    return (
        <>
            {/* hamper */}
            <div className='flex-1 mx-4 overflow-auto bg-gray-100 lg:mx-auto y-2 lg:w-full b max-w-7xl rounded-xl grow'>
                {/* top row */}
                <div className="flex w-full bg-blue-400 items-cenFter max-h-24 h-1/6 rounded-xl">
                {/* add actual white box */}
                    <span className="flex-1 m-4 text-2xl">Hamper</span>
                    <Button className="my-4" onClick={() => dispatch(hamperFlip())} variant="destructive">{select_mode == false
                                                                                                        ? "Clear Hamper"
                                                                                                        : "Cancel" }</Button>

                    {select_mode && <Button className="my-4" >Select all</Button>}
                    {select_mode == true 
                        ? <Button className="my-4" onClick={() => moveToClosetTriggered()}>Send load</Button>
                        : <Button className="mx-2 my-4">Fill Hamper</Button>}

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
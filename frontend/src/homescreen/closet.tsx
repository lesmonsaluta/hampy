import { Button } from "@/components/ui/button"
import ClosetGrid from "./closet-grid.tsx"

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from ".././redux-components/store.ts";
import { closetFlip, closetClear } from "../redux-components/closetSelectionSlice.ts";

import React from "react";

function Closet() {
    const dispatch = useDispatch<AppDispatch>();
    const select_mode = useSelector((state: RootState) => state.closetSelection.closetSelect_mode);
    const selection = useSelector((state: RootState) => state.closetSelection.closetSelected);
    
    // Essentially sets the "selected" elements to be none, as it is a fresh load
    React.useEffect(() => {
        dispatch(closetClear())
    }, [])

    function moveToHamperTriggered() {
        console.log(`Sending ${selection}`)
        dispatch(closetClear())
    }


    return (
        <>
            {/* closet */}
            <div className='flex-1 mx-4 my-2 overflow-auto bg-gray-100 lg:mx-auto max-w-7xl rounded-xl grow'>
                {/* top row */}
                <div className="flex items-center w-full bg-blue-400 h-1/6 max-h-24 rounded-xl">

                    {/* add actual white box */}
                    <span className="flex-1 m-4 text-xl">Closet</span>

                    <Button className="my-4" onClick={() => {
                        dispatch(closetFlip());
                        if (select_mode) {
                            dispatch(closetClear());
                        }
                    }} > {select_mode == false
                            ? "Move to Hamper"
                            : "Cancel"}</Button>    

                    {select_mode && <Button className="my-4" >Select all</Button>}
                    {select_mode == true 
                        ? <Button className="my-4" onClick={() => moveToHamperTriggered()}>Send load</Button>
                        : <Button className="mx-2 my-4">Fill Closet</Button>}
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
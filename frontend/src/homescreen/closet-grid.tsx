import {
  Card,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";

import cloth1 from '../assets/BAI.png';
import cloth2 from '../assets/BAI.png';
import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from ".././redux-components/store.ts";
import { closetAppend, closetRemove } from "../redux-components/closetSelectionSlice.ts"

interface DamitItem {
  id : string;
  image: string;
  tags: string[];
  date_added: string;
  selected: boolean;
}

const damits: DamitItem[] = [
  {
    id : "unang_damit",
    image: cloth1,
    tags: ["Black", 'Lacoste'],
    date_added: "Kahapon",
    selected: false,
  },
  {
    id: "pangalawang_damit",
    image: cloth2,
    tags: ["Black", 'Lacoste'],
    date_added: "Kahapon",
    selected: false,
  },
];


function CreateCard(damit: DamitItem) {
  const selection = useSelector((state: RootState) => state.closetSelection.closetSelected);
  const selectMode = useSelector((state: RootState) => state.closetSelection.closetSelect_mode);

  const dispatch = useDispatch<AppDispatch>();

  function dispatchHandler( id  : string) {
    console.log(id)
    if (selection.includes(id)) {
      dispatch(closetRemove(id))
    } else {
      dispatch(closetAppend(id))
    } 
  }

  const isSelected : boolean = (selection.includes(damit.id))

  // the div acting as a button wrapping the card will be disabled and nonclickable
  return (
    <div 
      key={React.useId()} 
      className={`card ${isSelected ? "border-green-500 border-4" : ""}`}
      onClick={ () => selectMode && dispatchHandler(damit.id)}
      role="button" 
    >
      <Card>
        <CardHeader>
            <img src={damit.image} alt="Clothing item" className="rounded-xl"/>
            <CardDescription>{damit.tags.join(', ')}</CardDescription>
        </CardHeader>
      </Card>
    </div>
  )

}


function ClosetGrid() {
  return (
      <>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {damits.map(damit => CreateCard(damit))}
        </div>
      </>
  );
}

export default ClosetGrid;


  // return (
  //     <div 
  //       key={React.useId()} 
  //       className={`card ${isSelected ? "border-green-500 border-4" : ""}`} 
  //       style={{ position: 'relative' }} // Ensure the card container is positioned relatively
  //     >
  //         {/* Overlay invisible button */}
  //         <button
  //           ref={invisibleButtonRef}
  //           onClick={handleButtonCardClick} 
  //           style={{ 
  //             position: 'absolute',
  //             top: 0,
  //             left: 0,
  //             height: '100%',
  //             width: '100%',
  //             opacity: 0, // Make the button invisible
  //             cursor: 'pointer',
  //           }}
  //           aria-hidden="true" // Hide from accessibility tree since the button is invisible
  //         ></button>
          
  //         <CardHeader>
  //             <img src={damit.image} alt="Clothing item" className="rounded-xl"/>
  //             <CardDescription>{damit.tags.join(', ')}</CardDescription>
  //         </CardHeader>
  //     </div>
  // );

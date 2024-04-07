import {
    Table,
    TableBody,
    // TableCaption,
    TableCell,
    // TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

import cloth1 from '../assets/BAI.png'
import cloth2 from '../assets/BAI.png'
import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from ".././redux-components/store.ts";
import { append, remove } from "../redux-components/selectionSlice.ts"

interface DamitItem {
    id: string;
    image: string;
    tags: string[];
    date_added: string;
  }
  
const damits: DamitItem[] = [
    {
      id: "asd",
      image: cloth1,
      tags: ["Black", 'Lacoste'],
      date_added: "Kahapon",
    },
    {
      id: "sda",  
      image: cloth2,
      tags: ["Red", 'Shirt'],
      date_added: "Nung Nakay Pats",
    },
    {
      id: "sad",  
      image: cloth2,
      tags: ["Red", 'Shirt'],
      date_added: "Nung Nakay Pats",
    },
    {
      id: "sdasdsad",  
      image: cloth2,
      tags: ["Red", 'Shirt'],
      date_added: "Nung Nakay Pats",
    },
    {
      id: "vsdasf",  
      image: cloth2,
      tags: ["Red", 'Shirt'],
      date_added: "Nung Nakay Pats",
    },
    {
      id: "dsadsa",  
      image: cloth2,
      tags: ["Red", 'Shirt'],
      date_added: "Nung Nakay Pats",
    }
]

function CreateRow(damit: DamitItem) {
  const selection = useSelector((state: RootState) => state.counter.selected);
  const mode = useSelector((state: RootState) => state.counter.select_mode);

  const dispatch = useDispatch<AppDispatch>();

  function dispatchHandler( id  : string) {
    console.log(id)
    if (selection.includes(id)) {
      dispatch(remove(id))
    } else {
      dispatch(append(id))
    }
  }
    
  return (
      <TableRow key={React.useId()}>
      {mode && <TableCell>
        <input type="checkbox" 
          id={damit.id} 
          onChange={() => dispatchHandler(damit.id)}
          checked={selection.includes(damit.id)}
          
        />
        </TableCell>}
      <TableCell className="font-medium">
          <div className="flex items-center">
              <img src={damit.image} alt="Description" className="w-1/2 mr-2 max-w-24 rounded-xl" /> {/* Adjust the size as needed */}
          </div>
      </TableCell>
      <TableCell className="text-base">{damit.tags}</TableCell>
      <TableCell className="text-base text-right">{damit.date_added}</TableCell>
  </TableRow>
  )
}

function HamperTable() {
  const mode = useSelector((state: RootState) => state.counter.select_mode);
  
  return (
  <>
    <Table className="">
      <TableHeader>
        <TableRow>
          {mode && <TableHead />}
          <TableHead className="w-1/3">Image</TableHead>
          <TableHead>Tags</TableHead>
          <TableHead className="text-right">Date Added</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody >
        {damits.map((damit) => (CreateRow(damit)))}
      </TableBody>
    </Table>
  </>
  )
}

export default HamperTable
  
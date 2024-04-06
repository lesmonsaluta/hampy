import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

import cloth1 from '../assets/BAI.png'
import cloth2 from '../assets/BAI.png'

interface DamitItem {
    image: string;
    tags: string[];
    date_added: string;
  }
  

const damits: DamitItem[] = [
    {
        image: cloth1,
        tags: ["Black", 'Lacoste'],
        date_added: "Kahapon",
    },
    {
        image: cloth2,
        tags: ["Red", 'Shirt'],
        date_added: "Nung Nakay Pats",
    },
    // {
    //     image: cloth2,
    //     tags: ["Red", 'Shirt'],
    //     date_added: "Nung Nakay Pats",
    // },
    // {
    //     image: cloth2,
    //     tags: ["Red", 'Shirt'],
    //     date_added: "Nung Nakay Pats",
    // },
    // {
    //     image: cloth2,
    //     tags: ["Red", 'Shirt'],
    //     date_added: "Nung Nakay Pats",
    // },
    // {
    //     image: cloth2,
    //     tags: ["Red", 'Shirt'],
    //     date_added: "Nung Nakay Pats",
    // }
]

function CreateRow(damit: DamitItem) {
    return (
        <TableRow key={crypto.randomUUID()}>
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
    return (
    <>
      <Table className="">
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
        <TableHeader>
          <TableRow>
            <TableHead className="w-1/3">Image</TableHead>
            <TableHead>Tags</TableHead>
            <TableHead className="text-right">Date Added</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody >
          {damits.map((damit) => (CreateRow(damit)))}
        </TableBody>
        {/* <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter> */}
      </Table>
    </>
    )
  }

export default HamperTable
  
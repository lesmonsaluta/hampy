import {
  Card,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";

import cloth1 from '../assets/BAI.png';
import cloth2 from '../assets/BAI.png';

// Step 1: Define the interface
interface DamitItem {
  image: string;
  tags: string[];
  date_added: string;
  selected: boolean;
}

const damits: DamitItem[] = [
    {
        image: cloth1,
        tags: ["Black", 'Lacoste'],
        date_added: "Kahapon",
        selected: false,
    },
    {
        image: cloth2,
        tags: ["Black", 'Lacoste'],
        date_added: "Kahapon",
        selected: false,
      },
      // {
    //     image: cloth1,
    //     tags: ["Black", 'Lacoste'],
    //     date_added: "Kahapon",
    // },
    // {
    //     image: cloth1,
    //     tags: ["Black", 'Lacoste'],
    //     date_added: "Kahapon",
    // },
];


function CreateCard(damit: DamitItem) {
  return (
      <Card key={crypto.randomUUID()}>
          <CardHeader>
              <img src={damit.image} alt="Clothing item" className="rounded-xl"/>
              <CardDescription>{damit.tags.join(', ')}</CardDescription>
          </CardHeader>
      </Card>
  );
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
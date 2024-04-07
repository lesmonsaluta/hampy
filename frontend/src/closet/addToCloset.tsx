import Header from '../homescreen/header.tsx'
import AddToClosetTagComponent from './addToClosetTagComponent.tsx'


function addToCloset() {
    // get tag preferences from tanstack
    const tags = ['Brand', 'Color', 'Type', 'Purchase Date']

    return (
        <>
            {/* entire page */}
            <div className='flex flex-col justify-between h-screen min-w-full overflow-auto bg-sky-200 lg:p-6'>
                {/* header */}
                <Header />

                {/* white area */}
                <div className='flex-1 justify-center items-align mx-4 overflow-auto bg-gray-100 lg:mx-auto y-2 lg:w-full b max-w-7xl rounded-xl grow mb-8 '>
                    {/* top row */}
                    <div className="flex w-full bg-blue-400 items-center max-h-24 h-1/6 rounded-xl items-center">
                        {/* add actual white box */}
                        <span className="flex-1 m-4 text-2xl ">Add to my closet!</span>
                    </div>

                    {/* dynamically changing, 
                    if portrait, 2x2 image then scrollable rows underneath
                    if landscape, 2x2 image on left, scrollable on right*/}
                    <div>


                        {/* tags area */}
                        <div className='m-4'>
                            {/* rows of tags */}
                            <AddToClosetTagComponent tags={tags}/>
                        </div>
                    </div>
                
                </div>
            </div>
        </>

    )
}

export default addToCloset
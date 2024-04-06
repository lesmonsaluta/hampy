import Header from './homescreen/header.tsx'
import Closet from './homescreen/closet.tsx'

function FullCloset() {
    return (
    <>
    <div className='flex flex-col justify-between h-screen min-w-full overflow-auto bg-sky-200'>
    <Header />
    <Closet />
    </div>
    </>
    )
}

export default FullCloset
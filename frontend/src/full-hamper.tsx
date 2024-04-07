import Header from './homescreen/header.tsx'
import Hamper from './homescreen/hamper.tsx'

function FullHamper() {
    return (
    <>
        <div className='flex flex-col justify-between h-screen min-w-full overflow-auto bg-sky-200'>
        <Header />
        <Hamper />
        </div>
    </>
    )
}

export default FullHamper
import Header from './homescreen/header.tsx'
import Hampy from './homescreen/hamper.tsx'
import Closet from './homescreen/closet.tsx'

function HomeScreen() {
    return (
    <>
      {/* whole page */}
        <div className='flex flex-col justify-between h-screen min-w-full overflow-auto bg-sky-200 lg:p-6'>
          <Header />
          <Hampy />
          <Closet />
        </div>
    </>
    )
}

export default HomeScreen
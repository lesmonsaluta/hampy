import Header from './homescreen/header.tsx'
import Hampy from './homescreen/hamper.tsx'
import Closet from './homescreen/closet.tsx'
import './App.css'

function App() {
  return (
    <>
      {/* whole page */}
      <div className='flex flex-col justify-between h-screen min-w-full overflow-auto bg-sky-300'>
        
        <Header />
        
        <Hampy />

        <Closet />
      
        <div className='bg-white footer'>
          <p>Footer</p>
        </div>
        
      </div>

    </>
  )
}


export default App


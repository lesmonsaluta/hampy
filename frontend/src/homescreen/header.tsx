import hampyLogo from '../assets/hampy.png'
import pfp from '../assets/BAI.png'

function Header() {
    return (
        <>
            {/* header */}
            <div className='flex items-center justify-between p-2 m-2 h-28'>
                {/* logo element */}
                <div className='w-8/12 h-full m-2 rounded-xl '>
                  <img src={hampyLogo} alt='Hampy Logo' className="h-full shrink-0 logo rounded-2xl"/>
                </div>
                <img src={pfp} alt="Profile Picture" className="m-2 rounded-full outline outline-4 outline-white h-5/6"/>
            </div>
        </>
    )
}

export default Header
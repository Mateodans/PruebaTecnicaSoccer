import Tapbar from "../Tapbar/Tapbar"

function Navbar() {
  return (
    <>
      <div className='p-4 border-b border-zinc-800'>
          <p className="my-4 md:pl-2">Match Report</p>
      </div>
      <Tapbar/>
    </>
  )
}

export default Navbar
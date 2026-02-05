import React from 'react'
import { Link } from 'react-router-dom'

const NavComp = () => {
  return (
    <div>
        {/*<h2>Ths is Nav Component</h2>*/}
        <Link to="myimages" className='btn btn-primary btn-sm'>MyImages</Link>{" "}<br/>
        <Link to="virtualdom" className='btn btn-primary btn-sm'>VirtualDOMComp</Link>{" "}<br/>
        <Link to="myimages" className='btn btn-primary btn-sm'>MyImages</Link>{" "}
        

      
    </div>
  )
}

export default NavComp

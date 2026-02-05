import React from 'react'
import { Outlet } from 'react-router-dom';
import NavComp from './NavComp';


const DashboardComp = () => {
  return (
    <div className="container">
        {/*<h2>This is Dashboard Component</h2>*/}
        <div className="card border-primary">
            <div className="card-header border-primary">
               <NavComp/>
            </div>
            <div className="card-body borer-primary">
                <Outlet/>
            </div>
            <div className="card-footer border-primary">
                card footer
            </div>
            
        </div>
        <Outlet/>
      
    </div>
  )
}

export default DashboardComp;

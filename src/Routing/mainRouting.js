import { createBrowserRouter } from "react-router-dom";
import MyImagesComp from "../component/MyImagesComp";
import PageNotFoundComp from "../layout/PageNotFoundComp";
import HooksComp from '../ReactHooks/HooksComp';
import UseEffectComp from "../ReactHooks/UseEffectComp";
import UseStateComp from "../ReactHooks/UseStateComp";
import DashboardComp from "../layout/DashboardComp";
import VirtualDOMComp from "../component/VirtualDOMComp";

const router = createBrowserRouter([

    {path:"dashboard",element:<DashboardComp/>,children:[
        {path:"myimages",element:<MyImagesComp/>},
        {path:"virtualdom",element:<VirtualDOMComp/>}
        
    ]},
    //2.default routing
    {path:"", element:<MyImagesComp/>},
    
    
    //1. Naming routing
    {path:"myimages", element:<MyImagesComp/>},
    
    
    //3. parameterize routing
    {path:"condren/:", element:<MyImagesComp/>},
    //5. wild card routing
    {path:'+', element:<PageNotFoundComp/>},  
    //4. child routing
    {path:"hooks",element:<HooksComp/>,children:[
        {path:"usestate",element:<UseStateComp/>},
        {path:"useeffect",element:<UseEffectComp/>}
    ]} 
]);

export default router;
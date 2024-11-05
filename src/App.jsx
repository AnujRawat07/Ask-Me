import React from 'react'
import SideBar from './Components/SideBar/SideBar'
import Main from './Components/Main/Main'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Language from './Components/Language/Language'
import { useTranslation } from 'react-i18next';



const MainWithSidebar = () => ( <div style={{ display: 'flex' }}> 
{/* <SideBar /> */}
 <Main />
  </div> );


const router=createBrowserRouter([
  {
    path:"/",
    element: <MainWithSidebar />,
  },
  {
    path:'/language',
    element:<Language/>
  }
]);

const App = () => {
  
  return (
<>
<RouterProvider router={router}/>
</>
  )
}

export default App;
import React from 'react'
import Nav from './components/Nav'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Body from './components/Body'
import Watch from './components/Watch'
import Feed from './components/Feed'
const appRouter= createBrowserRouter([
  {
    path: '/',
    element: <Body/>,
    children:[
      {
        path:'/',
        element:<Feed/>
      }
      ,{
        path:'/watch',
        element:<Watch/>
      }
    ]
  }
])
function App() {
  return (
    <div className=''>
      <Nav/>
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default App
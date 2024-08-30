import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import JSON from "../data/data.json";
import { Root } from './components/Root'
import { Table } from './components/Table'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        path: "",
        element: <Table className="table possessions"  data={JSON[1].data.possessions} />
      },
      {
        path: "flux",
        element: <Table className="table flux" data={JSON[1].data.flux} />
      }
    ]
  } 
])


function App() {
  
  return <RouterProvider router={router} />
}

export default App
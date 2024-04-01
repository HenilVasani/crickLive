import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import Fixtures from './components/Fixtures'
   import Stars from './components/Stars'
 import Rank from './components/Rank'
 import Series from './components/Series'
 import About from './components/About'
// import LiveScoreBoard from './Home.jsx'
import Open from './components/Open.jsx'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Home from './components/Home.jsx'
import '../src/index.css'
import WomenTeams from './components/rankings/women/teams';
import WomenBat from './components/rankings/women/bat';
import WomenBall from './components/rankings/women/ball';
import WomenAllRound from './components/rankings/women/allround';
import MenTeams from './components/rankings/men/teams';
import MenBat from './components/rankings/men/bat';
import MenBall from './components/rankings/men/ball';
import MenAllRound from './components/rankings/men/allround';

const router = createBrowserRouter([
  {
    path:'',
    element:<App />,
    children:[
      {
        path:'/',
        element:<Home />
      },
      {
        path:'/rank',
        element:<Rank />
      },
      {
        path:'/star',
        element:<Stars />
      },
      {
        path:'/fixtures',
        element:<Fixtures />
      },
      {
        path:'/series',
        element:<Series />
      },
      {
        path:'/about',
        element:<About />
      },
      {
        path: '/rankings/women/teams',
        element: <WomenTeams />,
      },
      {
        path: '/rankings/women/bat',
        element: <WomenBat />,
      },
      {
        path: '/rankings/women/ball',
        element: <WomenBall />,
      },
      {
        path: '/rankings/women/allround',
        element: <WomenAllRound />,
      },
      {
        path: '/rankings/men/teams',
        element: <MenTeams />,
      },
      {
        path: '/rankings/men/bat',
        element: <MenBat />,
      },
      {
        path: '/rankings/men/ball',
        element: <MenBall />,
      },
      {
        path: '/rankings/men/allround',
        element: <MenAllRound />,
      },
      {
        path: '/rankings/:category/:tableName',
        element: <Rank />,
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
    
  </React.StrictMode>,
)

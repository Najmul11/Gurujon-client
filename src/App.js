// import './App.css';
import { router } from './routes/Routes';
import {RouterProvider} from "react-router-dom"
import { createContext, useState } from 'react';

export const DarkContext=createContext()

function App() {
  const [darkMode, setDarkMode]=useState(false)
  const darkmode={darkMode, setDarkMode}
  return (
      <DarkContext.Provider value={darkmode}>
        <div className={darkMode ? 'dark' :""}>
          <RouterProvider router={router}></RouterProvider>
        </div>
      </DarkContext.Provider>
  );
}

export default App;

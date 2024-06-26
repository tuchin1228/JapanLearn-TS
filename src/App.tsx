import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from "./Pages/Home";
import VerbWord from "./Pages/VerbWord";
import VerbWordTable from "./Pages/VerbWordTable";
import CountWord from "./Pages/CountWord";
import CountWordTable from "./Pages/CountWordTable";
import TimeWord from "./Pages/TimeWord";
import TimeWordTable from "./Pages/TimeWordTable";
import NounWord from "./Pages/NounWord";
import NounWordTable from "./Pages/NounWordTable";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <div className="App max-w-5xl mx-auto px-2">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/VerbWord" element={<VerbWord />}></Route>
          <Route path="/VerbWordTable" element={<VerbWordTable />}></Route>
          <Route path="/CountWord" element={<CountWord />}></Route>
          <Route path="/CountWordTable" element={<CountWordTable />}></Route>
          <Route path="/TimeWord" element={<TimeWord />}></Route>
          <Route path="/TimeWordTable" element={<TimeWordTable />}></Route>
          <Route path="/NounWord" element={<NounWord />}></Route>
          <Route path="/NounWordTable" element={<NounWordTable />}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App

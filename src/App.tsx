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
import NewWord from "./Pages/NewWord";
import NewWordTable from "./Pages/NewWordTable";
import N4Word from "./Pages/N4Word";
import N4WordTable from "./Pages/N4WordTable";
import N3Word from "./Pages/N3Word";
import N3WordTable from "./Pages/N3WordTable";
import { Routes, Route } from "react-router-dom";

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
          <Route path="/NewWord" element={<NewWord />}></Route>
          <Route path="/NewWordTable" element={<NewWordTable />}></Route>
          <Route path="/N4Word" element={<N4Word />}></Route>
          <Route path="/N4WordTable" element={<N4WordTable />}></Route>
          <Route path="/N3Word" element={<N3Word />}></Route>
          <Route path="/N3WordTable" element={<N3WordTable />}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App

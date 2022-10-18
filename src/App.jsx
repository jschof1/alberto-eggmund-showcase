import React from 'react';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,

} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/EverythingElse';
import Animation from './pages/Animation';
import LargeAnimation from './pages/LargeAnimation';

function App() {
  return (
    <Router>
      <div className="p-20 text-blue-500">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/everythingelse" element={<About />} />
          <Route path="/animation" element={<Animation />} />
          <Route path="/largeAnimation" element={<LargeAnimation />} />
        </Routes>
      </div>
      {/* <Routes>
        <Route path="/:id"  element={<Param />} />
      </Routes> */}
    </Router>
  );
}

// function Param() {
//   let { id } = useParams();

//   return (
//     // i could add the egg loader here
//     <div>
//       <h3>ID: {id} </h3>
//     </div>
//   );
// }

export default App;

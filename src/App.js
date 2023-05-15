import './css/style.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./components/header";
import Home from "./pages";
import Results from "./pages/results";
import Collection from "./pages/collection";
import Description from "./pages/description";
import Insert from "./pages/insert";
import About from "./pages/about";
import Footer from "./components/footer";

function App() {
  return (
    <Router basename='/students/dev4/build'>
      <Header />
      <Routes >
        <Route path='/' element={<Home />}/>
        <Route path='/collection/' element={<Collection />}/>
        <Route path='/piece/:id' element={<Description />}/>
        <Route path='/add-yours' element={<Insert />} />
        <Route path='/search-results' element={<Results />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

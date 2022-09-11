// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


// PAGES
import Edit from "./Pages/Edit";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";

// COMPONENTS
import NavBar from "./Components/NavBar";
import { Container } from "./Components/styles/Container.styled";

function App() {
  return (
    <Container className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/activities" element={<Index />} />
            <Route path="/activity/new" element={<New />} />
            <Route exact path="/activity/:key" element={<Show />} />
            <Route path="/activity/:key/edit" element={<Edit />} />
          </Routes>
        </main>
      </Router>
    </Container>
  );
}

export default App;

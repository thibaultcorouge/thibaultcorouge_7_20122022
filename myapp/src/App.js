import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Header";
import Housing from "./pages/Housing";
import Footer from "./components/Footer";
import Error from "./pages/Error.jsx";

function App() {
  return (
    <div className="App">
      {/* Render the Header component */}
      <Header />
      <main>
        {/* Declare routes for the app using the `Routes` component */}
        <Routes>
          {/* Define the Home page as the root path */}
          <Route path="/" element={<Home />} />
          {/* Define the About page */}
          <Route path="/about" element={<About />} />
          {/* Define the Housing page with a dynamic id parameter */}
          <Route path="/housing/:id" element={<Housing />} />
          {/* Catch-all route in case no other route matches */}
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      {/* Render the Footer component */}
      <Footer />
    </div>
  );
}

export default App;

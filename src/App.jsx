import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";

const App = () => {
  return (
    <div className="app">
      <header>
        <Navbar />
      </header>
      <main>
        <Home />
      </main>
      <footer></footer>
    </div>
  );
};

export default App;

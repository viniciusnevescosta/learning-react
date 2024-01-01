import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";

const App = () => {
  return (
    <div className="flex flex-col min-h-full">
      <header>
        <Navbar />
      </header>
      <main className="flex flex-1 py-12 px-48">
        <Home />
      </main>
      <footer></footer>
    </div>
  );
};

export default App;

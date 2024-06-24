import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services";

function App() {
  return (
    <div className="bg-slate-50 font-inter">
      <div className="flex h-screen w-full flex-col">
        <Navbar />
        <Hero />
      </div>
      <Services />
    </div>
  );
}

export default App;

import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services";

function App() {
  return (
    <div className="font-inter h-full w-full overflow-x-hidden bg-slate-50">
      <div className="flex h-screen w-full flex-col">
        <Navbar />
        <Hero />
      </div>
      <Services />
    </div>
  );
}

export default App;

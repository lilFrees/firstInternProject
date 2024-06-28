import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Presentation from "./components/Presentation/Presentation";
import Services from "./components/Services/Services";
import CompanyHeader from "./components/Companies/CompanyHeader";
import CompanyList from "./components/Companies/CompanyList";
import Testimonial from "./components/Testimonial/Testimonial";
import Studies from "./components/Studies/Studies";
import Teams from "./components/Teams/Teams";
import Design from "./components/Design/Design";
import TechStack from "./components/TechStack/TechStack";
import Process from "./components/Process/Process";
import Blog from "./components/Blog/Blog";

function App() {
  return (
    <div className="bg-slate-50 font-inter">
      <div className="flex h-screen w-full flex-col">
        <Navbar />
        <Hero />
      </div>
      <Services />
      <Presentation />
      <CompanyHeader />
      <CompanyList />
      <Testimonial />
      <Studies />
      <Teams />
      <Design />
      <TechStack />
      <Process />
      <Blog />
    </div>
  );
}

export default App;

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ValueProp from './components/ValueProp';
import Categories from './components/Categories';
import Portfolio from './components/Portfolio';
import BrandsMarquee from './components/BrandsMarquee';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Offer from './components/Offer';
import SportsProject from './components/SportsProject';


function App() {
  return (
    <div className="min-h-screen bg-soft-linen-50 overflow-x-hidden flex flex-col" id="top">
      <Navbar />
      <main>
        <Hero />
        <ValueProp />
        <Categories />
        <Portfolio />
        <BrandsMarquee />
        <SportsProject />
        <Testimonials />
        <About />
        <Offer />
      </main>

      <footer className="bg-gunmetal-950 text-gunmetal-500 py-8 text-center text-sm border-t border-gunmetal-900">
        <p>&copy; {new Date().getFullYear()} Natalier Júnior. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;

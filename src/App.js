import './App.css';
import Hero from './components/Hero/Hero';
import Programs from './components/programs/programs';
import Reasons from './components/Reasons/reasons';
import Plans from './components/plans/plan'
import Testimonial from './components/Testimonials/Testimonial';
import Join from './components/Join/join';
import Footer from './components/Footer/footer';
function App() {
  return (
    <div className="App">
        <Hero/>  
        <Programs/>
        <Reasons/>
        <Plans/>
        <Testimonial/>
        <Join/>
        <Footer/>
    </div>
  );
}

export default App;

import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';

function App() {
  return (
    <div className="App">
      <a href="#nav-bar">
        <img
          src={`${process.env.PUBLIC_URL}/img/scroll-up.png`}
          class="scroll-button"
        />
      </a>
      <NavBar />
      <main className="main-content">
        <HeroSection />
        <ProjectsSection />
        <Footer />
      </main>
    </div>
  );
}

export default App;

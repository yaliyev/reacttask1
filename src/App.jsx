import Header from './components/Header/header';
import Slider from './components/Main/slider';
import About from './components/Main/about';
import Contact from './components/Main/contact';
import Footer from './components/Footer/footer';
import Students from './components/Main/students';
function App() {
  

  return (
    <>
      <Header />

      <main>
        <Slider />
        <Students />
        <About />
        <Contact />

      </main>

      <Footer />
    </>
  )
}

export default App

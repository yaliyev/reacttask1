import Header from './components/Header/header';
import Slider from './components/Main/slider';
import About from './components/Main/about';
import Contact from './components/Main/contact';
import Footer from './components/Footer/footer';
function App() {
  

  return (
    <>
      <Header />

      <main>
        <Slider />
        <About />
        <Contact />

      </main>

      <Footer />
    </>
  )
}

export default App

import styles from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/hero/hero";
import About from "./components/About/About"
import Experience from "./components/Experience/Experience";
import {Contact} from "./components/Contact/Contact"
import Study from "./components/Study/Study"
function App() {
  

  return (
    <>
    <div className={styles.App}>
      <Navbar/>
      <Hero/>
      <About/>
      <Experience/>
      <Study/>
      <Contact/>
      
    </div>
      
    </>
  )
}

export default App;

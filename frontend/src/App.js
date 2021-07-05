import React,{useState, useEffect} from "react";
import './App.css';
import Cover from "./components/Cover/Cover";
import Reserva from "./components/Footer/Reserva";
import Navbar from "./components/Navbar/Navbar";


function App() {

  const [scrollHeigth, setScrollHeigth] = useState(0);

  const handleScroll = () =>{
    const position = window.pageYOffset;
    setScrollHeigth(position)
  }

  useEffect(()=>{
    window.addEventListener("scroll", handleScroll)
  }, [scrollHeigth]);

  return (
    <div className="App">
      <Navbar isScrolling={scrollHeigth}/>
      <Cover/>
      <Reserva/>
    </div>
  );
}

export default App;

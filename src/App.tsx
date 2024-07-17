import "./App.css";
import { Ban,Zap,ShieldAlert ,Library   } from 'lucide-react';

import Aletr from "./Components/Alert/Alert";

function App() {
  return (
    <>
      <Aletr
      icon={<Ban size={18} />}
        type="alert-wrong"
        title={"Some thing is wrong"}
        descreption="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sint possimus minima, magnam sunt id ullam, necessitatibus quam aperiam distinctio, odit sapiente quaerat? Voluptatem mollitia recusandae consequuntur nulla consectetur totam error accusantium animi veniam ducimus accusamus in explicabo illum, rerum maxime nesciunt commodi tenetur quis reiciendis debitis officiis. Dicta, pariatur!"
      />
       <Aletr
      icon={<Zap size={18} />}
        type="alert-success"
        title={"Success"}
        descreption="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sint possimus minima, magnam sunt id ullam, necessitatibus quam aperiam distinctio, odit sapiente quaerat? Voluptatem mollitia recusandae consequuntur nulla consectetur totam error accusantium animi veniam ducimus accusamus in explicabo illum, rerum maxime nesciunt commodi tenetur quis reiciendis debitis officiis. Dicta, pariatur!"
      />
       <Aletr
      icon={<Library  size={18} />}
        type="alert-info"
        title={"Information"}
        descreption="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sint possimus minima, magnam sunt id ullam, necessitatibus quam aperiam distinctio, odit sapiente quaerat? Voluptatem mollitia recusandae consequuntur nulla consectetur totam error accusantium animi veniam ducimus accusamus in explicabo illum, rerum maxime nesciunt commodi tenetur quis reiciendis debitis officiis. Dicta, pariatur!"
      />
       <Aletr
      icon={<ShieldAlert  size={18} />}
        type="alert-waring"
        title={"Waring"}
        descreption="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sint possimus minima, magnam sunt id ullam, necessitatibus quam aperiam distinctio, odit sapiente quaerat? Voluptatem mollitia recusandae consequuntur nulla consectetur totam error accusantium animi veniam ducimus accusamus in explicabo illum, rerum maxime nesciunt commodi tenetur quis reiciendis debitis officiis. Dicta, pariatur!"
      >
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, veniam?</p>
        <a href="#">Lorem, ipsum.</a>


      </Aletr>
     
     
    </>
  );
}

export default App;

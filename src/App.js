import React from 'react';
//import { ReactDOM } from 'react';
import './App.css';
//Hay que importar useState from React
import {useState} from "react";
//useState se importa entre corchetes porque su libreria por defecto no es react, para importar algo en concreto de un sitio
//que no es el suyo por defecto se mete entre corchetes. Sino no compila
import html2canvas from 'html2canvas';

function App() {

const [linea1, setlinea1] = useState('');
const [linea2, setlinea2] = useState('');
const [imagen, setimagen]= useState('');
//esto se llama crear un estado, dentro del parentesis se le
//pasa valor pro defecto a useState(). 
//esta declarando dos constantes y les va a pasar los valores mediante el usetate.
//el primer valor a linea1 y el segundo a setlinea1

const onChangeLinea1 = function (evento) {
  
  setlinea1(evento.target.value)
  //Modifica el valor de linea 1 con cada valor del evento tarjeteado y renderiza

}

const onChangeLinea2 = function (evento) {
  
  setlinea2(evento.target.value)
  //Modifica el valor de linea 2 con cada valor del evento tarjeteado y renderiza

}

const onChangeImagen = function (evento) {
  
  setimagen(evento.target.value)
  //Modifica el valor de linea 1 con cada valor del evento tarjeteado y renderiza

}

const onClickExportar = function (evento) {
  
 alert("Exportar")
 html2canvas(document.querySelector("#meme")).then(canvas => {
 
  var img = canvas.toDataURL("image/png");
  var link = document.createElement('a');
  link.download = 'meme.png';
  link.href = img;
  link.click();


});
  //Modifica el valor de linea 1 con cada valor del evento tarjeteado y renderiza

}

//onchangelinea1 cuando se cambia un valor del input, llama a setlinea1 que recibe el valor
//del evento tarjeteado y volvemos a "linea 11" donde vemos que linea1 y setlinea1
//ambos reciben el mismo valor, al pasarle un valor a setlinea1, se lo pasamos a linea1
//y por eso abajo se muestra. 

  return (
    <div className="App">
      <p>Select picker de memes</p>
      <select onChange={onChangeImagen} >
        <option value="arthas2"  >ARTHAS</option>
        <option value="arthasCure" >ARTHAS2</option>
        <option value="ChuckNorris" >CHUCK NORRIS</option>
        <option value="denatrhius" >Denatrhius</option>
        <option value="iamamage">I am a mage</option>
        <option value="mohakgrenade" >Mr T</option>
        <option value="OzzyOsbourne" >Ozzy Prince of Darness</option>
        <option value="ScaredGenn" >Scared Genn</option>
        <option value="sylvanas" >Evil Sylvanas</option>
      

      </select>

      <p>Input text -Primera linea</p>

      <input type="text" onChange={onChangeLinea1}  placeholder="linea 1" />
      

      <p>Input text- Segunda linea</p>

      <input type="text" onChange={onChangeLinea2}  placeholder="linea 2"/>

      <p>boton exportar</p>

      <button onClick={onClickExportar} >Exportar MEME</button>
      <br />
      <br />
      

        
               <div id='meme'>
          <span className='linea1'>{linea1}</span> 
          <span className='linea2'>{linea2}</span>  
          <img className='imagen' src={"/img/" + imagen + ".png"} alt='seleciona una imagen'></img>
        
     
      </div>


   
    </div>
  );
}

export default App;

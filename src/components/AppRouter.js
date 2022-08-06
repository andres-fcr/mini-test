import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Final from './Final';
import Historial from './Historial';
import Questions from './Questions';
import Welcome from './Welcome';

const AppRouter = () => {

   const [data, setData] = useState();
   const [nivel, setNivel] = useState(1);
   const [aleatoria, setAleatoria] = useState();
   const [puntajeFinal, setPuntajeFinal] = useState();
   const [userName, setUserName] = useState({
      name: "Anonimo"
   })
   const [datosUsuario, setDatosUsuario] = useState()

   const getData = async (nivel) => {
      const url = `https://mini-test-db.herokuapp.com/Nivel${nivel}`;
      const resp = await fetch(url);
      const data = resp.json();
      return data;
   };

   
   
   useEffect(() => {
      const traerDatos = async () => {
         const datos = await getData(nivel);
         setData(datos);
         setAleatoria(al(datos))
      };
      traerDatos();
   }, [nivel]);

   console.log(data);

   const obtenerDatos = () => {
      const puntajes = localStorage.getItem("puntajes");
      setDatosUsuario(JSON.parse(puntajes))
   };

   const al = (datos) => {
      const res = datos[Math.floor(Math.random() * datos.length)]
      return res
   }
   useEffect(() => {
      obtenerDatos()
   }, [])

   console.log(aleatoria);

   return (
      <div>
         <BrowserRouter>
            <Routes>
               <Route path='/' element={<Welcome
                  setUserName={setUserName}
               />} />
               <Route path="/test" element={<Questions
                  aleatoria={aleatoria}
                  data={data}
                  setNivel={setNivel}
                  setPuntajeFinal={setPuntajeFinal}
               />} />
               <Route path="/final" element={<Final
                  puntajeFinal={puntajeFinal}
                  userName={userName}
               />} />
               <Route path="/historial" element={<Historial
                  datosUsuario={datosUsuario}
               />} />
            </Routes>
         </BrowserRouter>
      </div>
   )
}

export default AppRouter
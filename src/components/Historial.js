import React from 'react'
import { Button, Card } from 'react-bootstrap'

const Historial = ({ datosUsuario }) => {

   const { nombre, puntajeFinal } = datosUsuario
   console.log(datosUsuario);

   return (
      <div>
         <Card bg="dark" style={{ width: "50rem" }} className="text-center mt-5">
            <Card.Body className="col">
               <Card.Header className="text-warning fs-3 ">
                  Ultimo Puntaje
               </Card.Header>

               <div className="row mb-3">
                  <Card.Text className="text-white my-5 col mx-3 fs-5">
                     <img
                        height={100}
                        src="./pngegg.png"
                        alt=""
                     />
                     <br />
                     <h1>{nombre}</h1>
                     <span>obtuvo un puntaje de:</span>
                     <h1 className="text-warning">
                        {puntajeFinal}
                     </h1>
                  </Card.Text>
               </div>
               <Button
                  type="button"
                  className="row mb-3"
                  variant="danger"
                  onClick={() => window.location.href = "/"}
               >
                  Inicio
               </Button>
            </Card.Body>
         </Card>
      </div>
   )
}

export default Historial
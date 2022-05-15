import React, { useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Final = ({ puntajeFinal, userName }) => {

	const navigate = useNavigate()
	const nombre = userName.name
	const dataUser = { nombre, puntajeFinal }
	console.log(dataUser);


	useEffect(() => {
		const guardarDatos = (dataUser) => {
			const a = [JSON.parse(localStorage.getItem("puntajes"))] || []
			console.log(a);
			const b = a.push(dataUser)
			console.log(b);
			localStorage.setItem("puntajes", JSON.stringify(dataUser));
		};
		guardarDatos(dataUser)
	}, [])

	return (
		<div>
			<Card bg="dark" style={{ width: "50rem" }} className="text-center mt-5">
				<Card.Body className="col">
					<Card.Header className="text-white fs-3">
						Final!
					</Card.Header>

					<div className="row mb-3">
						<Card.Text className="text-white my-5 col mx-3">
							<img
								height={300}
								src="./pngegg.png"
								alt="winner"
							/>
						</Card.Text>
						<div className="col d-grid gap-4 mt-4 me-5">
							<h1 className="text-white">
								Tu puntaje final es:
							</h1>
							<h1 className="text-warning">
								{puntajeFinal}
							</h1>
							<Button
								className="row"
								variant="danger"
								onClick={() => navigate("/historial")}
							>
								Puntuaciones
							</Button>
							<Button
								className="row"
								variant="warning"
								onClick={() => window.location.href = "/"}
							>
								Intentar de nuevo
							</Button>
						</div>
					</div>
				</Card.Body>
			</Card>
		</div>
	);
};

export default Final;

import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Questions = ({ setNivel, setPuntajeFinal, aleatoria }) => {

	const [numero, setNumero] = useState(1);
	const [puntuacion, setPuntuacion] = useState(0);
	const { opciones, pregunta, puntos } = aleatoria;



	const navigate = useNavigate()

	useEffect(() => {
		const final = () => {
			if (numero === 6) {
				navigate("/final")
			}
		}
		final()
	}, [numero])


	const setCorrecto = () => {
		setPuntuacion((prev) => prev + puntos);
		setNumero(numero + 1);
		setNivel((prev) => prev + 1);
		setPuntajeFinal(puntuacion);
	};

	const setIncorrecto = () => {
		Swal.fire({
			title: 'Has fallado! :(',
			text: "Pero puedes volver a intentarlo",
			icon: 'warning',
			showCancelButton: false,
			confirmButtonColor: '#3085d6',
			confirmButtonText: 'Haciendo clic acá!'
		}).then((result) => {
			if (result.isConfirmed) {
				window.location.href = "/"
			}
		})
	}

	const setRetirada = () => {
		setPuntajeFinal(puntuacion);
		navigate("/final")
	};

	const setRespuesta = (correct) => {
		correct ? setCorrecto() : setIncorrecto();
	};

	if (!aleatoria) {
		return (
			<Card bg="dark" style={{ width: "50rem" }} className="text-center mt-5">
				<div class="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
			</Card>
		)
	}

	return (
		<div>
			<Card bg="dark" style={{ width: "50rem" }} className="text-center mt-5">
				<Card.Header className="text-warning">
					Puntuacion: {puntuacion}
				</Card.Header>
				<Card.Body className="col">
					<Card.Title className="text-white fs-4">
						Pregunta {numero} de 5
					</Card.Title>
					<Card.Text className="text-white fs-3 my-5">
						{pregunta}
					</Card.Text>
					<div className="d-grid gap-2 mt-3">
						{opciones.map((opcion, i) => (
							<Button
								key={i}
								variant="light"
								size="lg"
								onClick={() => setRespuesta(opcion.correct)}
							>
								{opcion.respuesta}
							</Button>
						))}
						<Button
							className="mt-4"
							variant="danger"
							onClick={() => setRetirada()}
						>
							Retirarme (tu puntaje se
							guardará)
						</Button>
					</div>
				</Card.Body>
			</Card>
		</div>
	);
};

export default Questions;

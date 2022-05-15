import React from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Welcome = ({ setUserName }) => {

	const navigate = useNavigate()

	const handleChange = ({ target }) => {
		setUserName({ [target.name]: target.value })
	}
	const handleSubmit = (e) => {
		e.preventDefault()
	}

	return (
		<Card bg="dark" style={{ width: "50rem" }} className="text-center mt-5">
			<Card.Body className="col">
				<Card.Header className="text-warning fs-3 ">
					Test Tecnologia
				</Card.Header>

				<div className="row mb-3">
					<Card.Text className="text-white my-5 col mx-3 fs-5">
						<img
							height={200}
							src="./kisspng-flat-design-vector-graphics-test-portable-network-omniupdate-blog-5cceb205d29998.1784496715570498618626.png"
							alt=""
						/>
						<br />
						Ponte a prueba con este test
						tecnologico, ganarás respondiendo
						correctamente todas las preguntas.
					</Card.Text>
					<div className="col d-grid gap-4 mt-5 mx-5 my-5">
						<Form onSubmit={handleSubmit} >
							<Form.Group md="4" controlId="validationCustom01">
								<Form.Label
									className="text-light fs-3"
								>Nombre jugador</Form.Label>
								<Form.Control
									required
									onChange={handleChange}
									name="name"
									type="text"
									placeholder="Nombre"
								/>
							</Form.Group>
							<div
								className="d-grid col-10 mx-auto mt-3"
							>
							<Button
								type="submit"
								className="row mt-2"
								variant="warning"
								onClick={() => navigate("test")}
							>
								Empezar
							</Button>

							</div>
						</Form>
						<div
							className="d-grid col-10 mx-auto"
						>
							<Button
								type="button"
								className="row my-5"
								variant="danger"
								onClick={() => navigate("historial")}
							>
								Puntajes
							</Button>
						</div>
					</div>
				</div>
			</Card.Body>
		</Card>
	);
};

export default Welcome;

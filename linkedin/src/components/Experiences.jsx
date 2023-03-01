/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchExp } from "../redux/actions";
import { HiPlus, HiOutlinePencil } from "react-icons/hi";
import { BsFillInfoSquareFill } from "react-icons/bs";
import { Row, Button, Modal, Form } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";

const Experiences = () => {
  ///fetch
  const dispatch = useDispatch();
  const experiences = useSelector((state) => state.contentExp[0]);

  useEffect(() => {
    dispatch(fetchExp("experiences"));
  }, []);

  ///fetch

  const [lgShow, setLgShow] = useState(false);

  const handleShow = () => setLgShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        <HiOutlinePencil />
      </Button>

      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Nome*</Form.Label>
            <Form.Control type="text" autoFocus />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Cognome*</Form.Label>
            <Form.Control type="text" autoFocus />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Nome aggiuntivo</Form.Label>
            <Form.Control type="text" autoFocus />
          </Form.Group>
          <p>Pronuncia del nome</p>
          <p>
            <BsFillInfoSquareFill />
            Può essere aggiunta solo usando la nostra app per dispositivi mobili{" "}
          </p>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Inserisci pronomi personalizzati</Form.Label>
            <Form.Control type="text" autoFocus />
            <Form.Label>
              Indica i pronomi di genere che vuoi che gli altri usino per
              riferirsi a te
            </Form.Label>
          </Form.Group>
          <p>
            Scopri di più sui <strong>pronomi di genere.</strong>
          </p>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Sommario*</Form.Label>
            <Form.Control type="text" autoFocus />
          </Form.Group>
          <h4>Posizione attuale</h4>
          <Link>
            <p>
              <HiPlus /> Aggiungi posizione lavorativa
            </p>
          </Link>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Settore*</Form.Label>
            <Form.Control type="text" autoFocus />
            <Form.Label>
              Scopri di più sulle <strong>opzioni relative al settore</strong>
            </Form.Label>
          </Form.Group>
          <h4>Formazione</h4>
          <Link>
            <p>
              <HiPlus /> Aggiungi un nuovo grado di formazione
            </p>
          </Link>
          <h4>Località</h4>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Paese/Area geografica </Form.Label>
            <Form.Control type="text" autoFocus />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>CAP </Form.Label>
            <Form.Control type="text" autoFocus />
          </Form.Group>
          <h4>Informazioni di contatto</h4>
          <p>Aggiungi o modifica il tuo profilo URL, indirizzo email e altro</p>
          <Link>Modifica le informazioni di contatto</Link>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary" className="rounded-pill">
            Salva
          </Button>
        </Modal.Footer>
      </Modal>

      <div
        className="border rounded border-light-subtle px-4"
        style={{ backgroundColor: "white" }}
      >
        <div className="d-flex justify-content-between">
          <div>
            <h3 className="fs-5 my-3">Esperienza</h3>
          </div>
          <div className="d-flex align-items-center">
            <HiPlus className="fs-3 me-4" />
            <HiOutlinePencil className="fs-4" />
          </div>
        </div>

        <Row className="d-flex text-start">
          <div className="border-bottom">
            {/*<div>
              <img src={experiences?.image} alt="" />
            </div>*/}
            <h3 className="fs-6">{experiences?.role}</h3>
            <p className="fs-6 m-0">{experiences?.company}</p>
            <p className="fs-6 m-0">{experiences?.description}</p>
            <p className="m-0">{experiences?.startDate}</p>
            <p>{experiences?.area}</p>
          </div>
        </Row>
        <Row className="d-flex text-start">
          <div>
            <h3 className="fs-6 mt-2">{experiences?.role}</h3>
            <p className="fs-6 m-0">{experiences?.company}</p>
            <p className="fs-6 m-0">{experiences?.description}</p>
            <p className="m-0">{experiences?.startDate}</p>
            <p>{experiences?.area}</p>
          </div>
        </Row>
      </div>
    </>
  );
};

export default Experiences;

import './Card.css';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import { Button, Dropdown, InputGroup, SplitButton} from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import axios from 'axios';


export function Homecard() {
    const [show, setShow] = useState(false);
const [form , setForm] = useState("");
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);


const URL = "http://localhost:8080/games";
const [game,setGame] = useState<any>(null);



useEffect(() => {
  const promise =  axios.get(URL)
  promise.then((response) => {
    console.log(response);       
      setGame(response.data);
    });
  }, []);


  // res.setHeader("Content-Type", "application/json;charset=utf-8"); // Opening this comment will cause problems
    return (
        <div style={{width : "40%"}}>
        <div className="solution_cards_box">
          <div className="solution_card">
            <div className="hover_color_bubble"></div>
            <div className="solu_title">
              <h3>Team 1 - Team 2</h3>
              <p>Competition Description</p>
            </div>
            <div className="solu_description">
                <div  className='check-box-container'>
                    <div className="form-check" style={{display : "flex", flexDirection : "row"}}>
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Team 1 Cote
                        </label>
                        <input className="form-check-input" type="checkbox" value="" id="cote1"/>
                    </div>
                    <div className="form-check" style={{display : "flex", flexDirection : "row", marginLeft : "150px"}}>
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Null Cote
                        </label>
                        <input className="form-check-input" type="checkbox" value="" id="cote2"/>
                    </div>
                    <div className="form-check" style={{display : "flex", flexDirection : "row", marginLeft : "120px"}}>
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Team 2 Cote
                        </label>
                        <input className="form-check-input" type="checkbox" value="" id="cote3"/>
                    </div>
                </div> <br />
                <div>
                    <h6> Time + Date Diffuse at STADIUM</h6>
                </div>
              <br />
              <button type="button" className="button" onClick={handleShow}>Miser</button>
            </div>
          </div>
          </div>
          <div>
          <Modal show={show} onHide={handleClose} style={{zIndex : "3000"}}>
              <Modal.Header closeButton>
                <Modal.Title>Create Account</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <div className='course-type-container'>
                    <h6>Name</h6>
                    <div className='course'>
                      <InputGroup className="mb-3">
                        <Form.Control aria-label="Text input with dropdown button"  placeholder='Ecrivez votre nom ici'/>
                      </InputGroup>
                    </div>
                  </div> <br />
				  <div className='course-type-container'>
                    <h6>Last name</h6>
                    <div className='course'>
                      <InputGroup className="mb-3">
                        <Form.Control aria-label="Text input with dropdown button"  placeholder='Ecrivez votre prénom ici'/>
                      </InputGroup>
                    </div>
                  </div> <br />
				  <div className='course-type-container'>
                    <h6>Username</h6>
                    <div className='course'>
                      <InputGroup className="mb-3">
                        <Form.Control aria-label="Text input with dropdown button"  placeholder='Veillez donner un username'/>
                      </InputGroup>
                    </div>
                  </div> <br />
				  <div className='course-type-container'>
                    <h6>Number phone</h6>
                    <div className='course'>
                      <InputGroup className="mb-3">
                        <Form.Control aria-label="Text input with dropdown button"  placeholder='Veuillez écrire votre numéro de téléphone'/>
                      </InputGroup>
                    </div>
                  </div> <br />
				  <div className='course-type-container'>
                    <h6>Password</h6>
                    <div className='course'>
                      <InputGroup className="mb-3">
                        <Form.Control aria-label="Text input with dropdown button"  placeholder='Veuillez écrire votre mot de passe'/>
                      </InputGroup>
                    </div>
                  </div>
                  <div>
                    <p>Aviez-vous déjà une compte? <Link to='/signin'><b>Connectez-Vous</b></Link></p>
                  </div>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Link to='/presence'>
                <Button variant="warning">
                  S'inscrire
                </Button>
                </Link>
              </Modal.Footer>
            </Modal>
          </div>
          </div>
    )
}
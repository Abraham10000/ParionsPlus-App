import { Button } from 'react-bootstrap';

import React, { useState } from 'react';
import { Dropdown, InputGroup, SplitButton} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';


export function Navbar() {
	const [show, setShow] = useState(false);
	const [form , setForm] = useState("");
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	
    return (
<div>
    <nav className="navbar navbar-expand-lg ftco_navbar ftco-navbar-light" id="ftco-navbar"  style={{width : "100%"}}>
		<div className="container">
		    <a className="navbar-brand" href="index.html">Parions Plus</a>
		    <Link to='/'><button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
		        <span className="fa fa-bars"></span> Menu
		    </button></Link>
		    <div style={{display : "flex", flexDirection : "row"}} id="ftco-nav">
				<div>
				<ul className="navbar-nav ml-auto">
					<li className="nav-item"><a style={{color : "#FFC107"}} href="#" className="nav-link">Menu</a></li>
		        	<li className="nav-item"><a href="#" className="nav-link" onClick={handleShow}>Match</a></li>
              <li className="nav-item"><a href="#" className="nav-link" onClick={handleShow}>Parier</a></li>
		        </ul>
				</div>
				<Button variant="warning" size='sm' style={{width : "100px", height : "50px",marginTop : "5px", marginLeft : "50px"}}
				onClick={handleShow}>
                  		S'inscrire
            	</Button>
              <Link to='/signin'><Button variant="outline-warning" size='sm' style={{width : "100px", height : "50px",marginTop : "5px", marginLeft : "10px",marginRight : "0px"}}>
                  		Se Connecter 
            	</Button></Link>
		    </div>
		</div>
	</nav>
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
                        <Form.Control aria-label="Text input with dropdown button"  placeholder='Ecrivez votre pr??nom ici'/>
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
                        <Form.Control aria-label="Text input with dropdown button"  placeholder='Veuillez ??crire votre num??ro de t??l??phone'/>
                      </InputGroup>
                    </div>
                  </div> <br />
				  <div className='course-type-container'>
                    <h6>Password</h6>
                    <div className='course'>
                      <InputGroup className="mb-3">
                        <Form.Control aria-label="Text input with dropdown button"  placeholder='Veuillez ??crire votre mot de passe'/>
                      </InputGroup>
                    </div>
                  </div>
                  <div>
                    <p>Aviez-vous d??j?? une compte? <Link to='/signin'><b>Connectez-Vous</b></Link></p>
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
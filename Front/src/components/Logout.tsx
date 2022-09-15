

import { Button } from 'react-bootstrap';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';


export function Logout() {
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
					<li  className="nav-item"><a href="#" className="nav-link"><Link style={{color : "white"}} to='/match'>Menu</Link> </a></li>
		        	<li className="nav-item"><a href="#" className="nav-link"><Link style={{color : "white"}} to='/match'>Match</Link></a></li>
		        	<li className="nav-item"><a href="#" className="nav-link"><Link style={{color : "white"}} to='/pari'>Pari</Link></a></li>
		        </ul>
				</div>
              <Link to='/'><Button variant="outline-warning" size='sm' style={{width : "100px", height : "50px",marginTop : "5px", marginLeft : "10px",marginRight : "0px"}}>
                  		Logout
            	</Button></Link>
		    </div>
		</div>
	</nav>
	<div>
	</div>
</div>
    )
}
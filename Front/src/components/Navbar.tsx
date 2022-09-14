import { Button } from 'react-bootstrap';
import image from '../images/img-1.jpg'
import image2 from '../images/img-2.jpg';
import image3 from '../images/img-3.jpg';



export function Navbar() {
    return (
<div>
    <nav className="navbar navbar-expand-lg ftco_navbar ftco-navbar-light" id="ftco-navbar"  style={{width : "100%"}}>
		<div className="container">
		    <a className="navbar-brand" href="index.html">Parions Plus</a>
		    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
		        <span className="fa fa-bars"></span> Menu
		    </button>
		    <div style={{display : "flex", flexDirection : "row"}} id="ftco-nav">
				<div>
				<ul className="navbar-nav ml-auto">
					<li className="nav-item"><a href="#" className="nav-link">Menu</a></li>
		        	<li className="nav-item"><a href="#" className="nav-link">Match</a></li>
		        	<li className="nav-item"><a href="#" className="nav-link">Pari</a></li>
		        </ul>
				</div>
				<Button variant="warning" size='sm' style={{width : "100px", height : "50px",marginTop : "5px", marginLeft : "50px"}}>
                  		S'inscrire
            	</Button>
				<Button variant="outline-warning" size='sm' style={{width : "100px", height : "50px",marginTop : "5px", marginLeft : "10px",marginRight : "0px"}}>
                  		Se Connecter
            	</Button>
		    </div>
		</div>
	</nav>
</div>
    )
}
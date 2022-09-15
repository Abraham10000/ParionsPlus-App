import { Card } from "./Card";
import { Homecard } from "./HomeCard";
import { Navbar } from "./Navbar";



export function Body() {
    return (
<div >
    <div className="body-container">
        <div style={{position : "fixed", width : "100vw", zIndex : "2000"}}>
        <Navbar/>
        </div> <br /> <br /> <br />
        <div style={{display : "flex", flexWrap: "wrap", justifyContent : "center" }}>
        <Homecard/>
        <Homecard/>
        <Homecard/>
        <Homecard/>
        <Homecard/>
        </div>
    </div> 
</div>
    )
}
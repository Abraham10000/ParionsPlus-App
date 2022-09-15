import { Body } from "./Body";
import { Card } from "./Card";
import { Logout } from "./Logout";
import { Navbar } from "./Navbar";
import { PariCard } from "./PariCard";


export function Pari() {
    return(
        <div >
            <div style={{position : "fixed", width : "100vw", zIndex : "2000"}}>
                <Logout/>
            </div><br /> <br /> <br />
            <div style={{display : "flex", flexWrap: "wrap", justifyContent : "center" }}>
            <PariCard/>
            <PariCard/>
            <PariCard/>
            <PariCard/>
            </div>
        </div>
    )
}
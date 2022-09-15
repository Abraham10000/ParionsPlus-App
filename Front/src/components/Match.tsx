import { Body } from "./Body";
import { Card } from "./Card";
import { Logout } from "./Logout";
import { Navbar } from "./Navbar";


export function Match() {
    return(
        <div >
            <div style={{position : "fixed", width : "100vw", zIndex : "2000"}}>
                <Logout/>
            </div><br /> <br /> <br />
            <div style={{display : "flex", flexWrap: "wrap", justifyContent : "center" }}>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            </div>
        </div>
    )
}
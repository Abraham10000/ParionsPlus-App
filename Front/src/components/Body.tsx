import { Card } from "./Card";
import { Navbar } from "./Navbar";



export function Body() {
    return (
<div >
    <div style={{border : "1px solid black" , width : "1000px" , borderRadius : "0.5%" , marginLeft : "180px"}} >
        <Navbar/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
    </div> 
</div>
    )
}
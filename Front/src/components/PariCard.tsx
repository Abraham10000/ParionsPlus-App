import './Card.css';

export function PariCard() {
    return (
        <div style={{width : "40%"}}>
        <div className="solution_cards_box">
          <div className="solution_card">
            <div className="hover_color_bubble"></div>
            <div className="solu_title">
              <h3>Game Id</h3>
              <p>Competition Description</p>
            </div> <br />
            <div className="solu_description">    
                <div style={{display : "flex", flexDirection : "row"}}>
                <div style={{marginLeft : "10px"}}>
                    <h6>BET STAKE</h6>
                </div>        
                <div style={{marginLeft : "90px"}}>
                    <h6> STAKE DATE</h6>
                </div> 
                <div style={{marginLeft : "90px"}}>
                    <h6> STATUS</h6>
                </div> 
                </div>       
               <br /> 
              <br />
              <button type="button" className="button">Annuler</button>
            </div>
          </div>
          </div>
          </div>
    )
}
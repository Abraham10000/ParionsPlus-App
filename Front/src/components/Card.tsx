import './Card.css';

export function Card() {
    return (
        <div>
            
<div className="section_our_solution">
  <div className="row">
    <div className="col-lg-12 col-md-12 col-sm-12">
      <div className="our_solution_category">
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
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    </div>
                    <div className="form-check" style={{display : "flex", flexDirection : "row", marginLeft : "150px"}}>
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Null Cote
                        </label>
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    </div>
                    <div className="form-check" style={{display : "flex", flexDirection : "row", marginLeft : "120px"}}>
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Team 2 Cote
                        </label>
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    </div>
                </div> <br />
                <div>
                    <h6> Time + Date Diffuse at STADIUM</h6>
                </div>
              <br />
              <button type="button" className="button">Miser</button>
            </div>
          </div>
          </div>
          </div>
          </div>  
</div>
        </div>

        </div>
    )
}
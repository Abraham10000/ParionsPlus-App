import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Card.css';

export function Card() {
    type Example = {
        game : Object[];
    } 

    const URL = "http://localhost:8080/games";
    const [game,setGame] = useState<any>(null);

    useEffect(() => {
      const promise =  axios.get(URL);
      promise.then((response) => {
        console.log(response);       
          setGame(response.data);
        });
      }, []);

      if(!game) return null;


    return (
        <div style={{width : "40%"}}>
        <div className="solution_cards_box">
          <div className="solution_card">
            <div className="hover_color_bubble"></div>
            <div className="solu_title">
              <h3>{game.team_home.team_name} - Team 2</h3>
              <p>AYAAAAA</p>
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
    )
}
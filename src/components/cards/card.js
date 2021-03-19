//import React, { useState } from 'react';
//import './card.css';

const Card = (props) => {

    return <div className="card">
                 <div className="card-body">
                    <div className="image card-img-top">
                        <img src={props.imgURL ? props.imgURL : ''} alt={props.imgURL ? props.title : 'sorry no image'} />
                    </div>

                      <h4>{props.title ? props.title : 'Title Lorem Ipsum'}</h4>
                 
                    <p>
                     Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                    </p>
                </div>

             
           </div>
           
    }
    
  
export default Card;


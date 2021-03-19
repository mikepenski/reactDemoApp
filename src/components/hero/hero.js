//import React, { useState } from 'react';

const Hero = (props) => {

    return <section className={ props.class ? "hero hero-section " + props.class: 'hero hero-section ' }>

                <div className="container position-relative">
                    <div className="inner">

                    {props.title ? <div className="h3 title">{props.title}</div> : '' }
                     <img src={props.imgURL ? props.imgURL : ''} alt={props.imgURL ? '' : 'sorry no image'} />

                    </div>
                </div>

            </section>
           
    }
  
export default Hero;



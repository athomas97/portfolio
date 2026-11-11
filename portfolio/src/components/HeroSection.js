import React from 'react';
import { TECHSTACK } from '../constants';

function HeroSection() {
    return (
        <div className="home-container">
            <div id="about-container">
                <div id="about-text-container">
                    <div>
                        <h1 id="hi-im-text">HI IM </h1>
                        <h1 id="ally-text">ALLY,</h1>
                    </div>
                    <p>
                        A Canada-based web developer combining a background in 
                        Computer Information Systems and Motion Graphics to build 
                        visually engaging, user-focused websites
                    </p>
                </div>
                <div>
                    <div className='tech-stack'>
                        {TECHSTACK.map((technology) => (
                            <div className="technology-card" key={technology.name}>
                                <img src={technology.image} alt="" />
                                <p>{technology.name}</p>
                            </div>
                        ))}
                    </div>
                    <div id="roles-container">
                        <div className="web-developer">WEB DESIGNER</div>   
                        <div className="ux">UX DESIGNER</div>
                        <div className="video-editor">VIDEO EDITOR</div>                                         
                    </div>
                </div>
            </div>
            <div id="about-img-container">
                <img
                    src={`${process.env.PUBLIC_URL}/img/ally.jpg`}
                    alt="Ally"
                />
            </div>
        </div>
    );
}

export default HeroSection;

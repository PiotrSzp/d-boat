import React from "react";
import ceo from "../../assets/img/history.jpg"

function About(props) {
    console.log(props);
    return (
        <section className='about-section'>
            <article className="about-team">
                <section className="team-photo">
                    <div className="white-back"/>
                    <div className="dark-back"/>
                    <img className='photo' src={ceo} alt=""/>
                </section>
                <section className="team-content">
                    <div className="white-back">
                        <h1 className="team-title">{props.content.title}</h1>
                        <div className="team-line"/>
                        <p className="team-first">{props.content.first}</p>
                    </div>
                    <div className="dark-back">
                        <p className="team-sec">
                            {props.content.text}
                        </p>
                    </div>
                </section>
            </article>
        </section>
    )

}

export default About

import React from "react";
import ceo from "../../assets/img/history.jpg"

function About(props) {
    console.log(props);
    return (
        <section className='about-section'>
            <article className="about-team">
                <img className='team-photo' src={ceo} alt=""/>
                <section className="team-content">
                    <h1 className="team-title">{props.content.title}</h1>
                    <div className="team-line"></div>
                    <p className="team-describe">
                        {props.content.first}
                        <br/>
                        <br/>
                        {props.content.text}
                    </p>
                </section>
            </article>
        </section>
    )

}

export default About

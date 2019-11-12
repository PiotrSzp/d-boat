import React from "react";
import logo from "../../assets/img/logo.svg"
import ceo from "../../assets/img/CEO.jpg"

function About() {

    return (
        <section className='about-section'>
            <article className="about-team">
                <img className='team-photo' src={ceo} alt=""/>
                <section className="team-content">
                    <h1 className="team-title">Our team</h1>
                    <div className="team-line"></div>
                    <p className="team-describe">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto asperiores consectetur cum debitis dolore eius, eligendi ipsa labore nulla numquam perferendis ratione recusandae sint, veniam. Cumque facilis nostrum temporibus?</p>
                </section>
            </article>
        </section>
    )

}

export default About

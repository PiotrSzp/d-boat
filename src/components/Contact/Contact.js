import React, {Component} from 'react';
import axios from 'axios';
import SocialIcons from "../SocialIcons";


class ContactForm extends Component {
    state = {
        name: '',
        email: '',
        message: '',
        boat: '',
        city: '',
        country: '',
        model: ''
    };

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const {name, email, message, city, boat, country, model} = this.state;
        (async function send() {
            const form = await axios.post('/api/form', {
                name,
                email,
                message,
                city,
                boat,
                country,
                model
            });
        })();
        this.setState({
            name: '',
            email: '',
            message: '',
            boat: '',
            city: '',
            country: '',
            model: ''
        })
    };

    render() {
        return (
            <main className='form-container'>
                <section className="contact-info">
                    <div className="filter">
                        <div className="info-container">
                            <div className="mail">
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"
                                     fill="none" stroke="#F3F3F3" strokeWidth="1" strokeLinecap="round"
                                     strokeLinejoin="round">
                                    <path
                                        d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                    <polyline points="22,6 12,13 2,6"></polyline>
                                </svg>
                                <p className="contact-email">info@d-boats.com</p>
                            </div>
                            <div className="phone">
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"
                                     fill="none" stroke="#F3F3F3" strokeWidth="1" strokeLinecap="round"
                                     strokeLinejoin="round">
                                    <path
                                        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                </svg>
                                <p className="contact-phone">+ 48 511 199 909</p>
                            </div>
                            <div className="address">
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"
                                     fill="none" stroke="#F3F3F3" strokeWidth="1" strokeLinecap="round"
                                     strokeLinejoin="round">
                                    <circle cx="12" cy="10" r="3"/>
                                    <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z"/>
                                </svg>
                                <p className="contact-address">
                                    ul. Weteranów 100
                                    <br/>
                                    05-250 Radzymin
                                </p>
                            </div>
                        </div>
                        <SocialIcons/>
                    </div>
                </section>
                <section className="contact-form-container">
                    <h1 className="contact-title">
                        Contact Us
                        <div className="contact-hr"/>
                    </h1>
                    <form className='contact-form' onSubmit={this.handleSubmit} id="contact-form" method="POST">
                        <div className="row">
                            <div className="one-row">
                                <label htmlFor="name">{this.props.language.form.name}</label>
                                <input autoComplete="off" onChange={this.handleChange} value={this.state.name} type="text"
                                       className="form-control"
                                       name='name' id="name"/>
                            </div>
                            <div className="one-row">
                                <label htmlFor="exampleInputEmail1">{this.props.language.form.email}</label>
                                <input  autoComplete="off" onChange={this.handleChange} value={this.state.email} type="email"
                                       className="form-control"
                                       name='email' id="email"
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="one-row">
                                <label htmlFor="country">{this.props.language.form.country}</label>
                                <input  autoComplete="off" onChange={this.handleChange} value={this.state.country} type="text"
                                       className="form-control"
                                       name='country' id="country"/>
                            </div>
                            <div className="one-row">
                                <label htmlFor="city">{this.props.language.form.city}</label>
                                <input  autoComplete="off" onChange={this.handleChange} value={this.state.city} type="text"
                                       className="form-control"
                                       name='city' id="city"/>
                            </div>
                        </div>
                        {/*<div className="row">*/}
                        {/*    <div className="one-row">*/}
                        {/*        <label htmlFor="boat">{this.props.language.form.boat}</label>*/}
                        {/*        <select onChange={this.handleChange} value={this.state.boat} className="form-control"*/}
                        {/*                name='boat' id="boat">*/}
                        {/*            <option disabled selected value=''>{this.props.select === 'pl' ? '-- wybierz opcję -- ' : '-- select an option -- '} </option>*/}
                        {/*            <option value={this.props.select === 'pl'? 'Tak' : 'Yes'}>{this.props.select === 'pl' ? 'Tak' : 'Yes'}</option>*/}
                        {/*            <option  value={this.props.select === 'pl'? 'Nie' : 'No'}>{this.props.select === 'pl' ? 'Nie' : 'No'}</option>*/}
                        {/*        </select>*/}
                        {/*    </div>*/}
                        {/*    {this.state.boat==='Yes' || this.state.boat==='Tak'?<div className="one-row">*/}
                        {/*        <label htmlFor="model">{this.props.language.form.model}</label>*/}
                        {/*        <input  autoComplete="off" onChange={this.handleChange} value={this.props.model} type="text"*/}
                        {/*               className="form-control"*/}
                        {/*               name='model' id="model"/>*/}
                        {/*    </div>:null}*/}
                        {/*</div>*/}

                        <div className="row">
                            <div className="one-row message">
                                <label htmlFor="message">{this.props.language.form.message}</label>
                                <textarea onChange={this.handleChange} value={this.state.message}
                                          className="form-control"
                                          rows="5"
                                          name='message' id="message"/>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary">{this.props.language.form.button}</button>
                    </form>
                </section>
            </main>
        )
    }
}

export default ContactForm

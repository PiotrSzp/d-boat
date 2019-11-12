import React, {Component} from 'react';
import axios from 'axios';
import copy from "../../copy";

const polish = copy.Polski;
const english = copy.English;

class ContactForm extends Component {
    state = {
        name: '',
        email: '',
        message: '',
        boat: '',
        city: '',
        country: '',
        language: english
    };

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const {name, email, message, city, boat, country} = this.state;
        // (async function send() {
        //     const form = await axios.post('/api/form', {
        //         name,
        //         email,
        //         message,
        //         city,
        //         boat,
        //         country
        //     });
        // })();
        this.setState({
            name: '',
            email: '',
            message: '',
            boat: '',
            city: '',
            country: '',
        })
    };


    render() {
        return (
            <main className='form-container'>
                <section className="contact-info">
                    <div className="filter">
                    <p className="contact-address">Address</p>
                    <p className="contact-phone">Phone</p>
                    <p className="contact-email">Mail</p>
                    </div>
                </section>
                <form className='contact-form' onSubmit={this.handleSubmit} id="contact-form" method="POST">
                    <div className="row">
                        <div className="one-row">
                            <label htmlFor="name">{this.state.language.form.name}</label>
                            <input onChange={this.handleChange} value={this.state.name} type="text" className="form-control"
                                   name='name' id="name"/>
                        </div>
                        <div className="one-row">
                            <label htmlFor="exampleInputEmail1">{this.state.language.form.email}</label>
                            <input onChange={this.handleChange} value={this.state.email} type="email"
                                   className="form-control"
                                   name='email' id="email"
                                   />
                        </div>
                    </div>
                    <div className="row">
                        <div className="one-row">
                            <label htmlFor="country">{this.state.language.form.country}</label>
                            <input onChange={this.handleChange} value={this.state.country} type="text"
                                   className="form-control"
                                   name='country' id="country"/>
                        </div>
                        <div className="one-row">
                            <label htmlFor="city">{this.state.language.form.city}</label>
                            <input onChange={this.handleChange} value={this.state.city} type="text" className="form-control"
                                   name='city' id="city"/>
                        </div>
                    </div>
                    <label htmlFor="message">{this.state.language.form.boat}</label>
                    <input onChange={this.handleChange} value={this.state.boat} type="text" className="form-control"
                           name='boat' id="boat"/>

                    <label htmlFor="message">{this.state.language.form.message}</label>
                    <textarea onChange={this.handleChange} value={this.state.message} className="form-control" rows="5"
                              name='message' id="message"/>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </main>
        )
    }
}

export default ContactForm

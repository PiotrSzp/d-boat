import React, {Component} from 'react';
import axios from 'axios';

class ContactForm extends Component {
    state = {
        name: '',
        email: '',
        message: ''
    };
    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        const {name, email, message} = this.state;
        const form = await axios.post('/api/form', {
            name,
            email,
            message
        })
    };


    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit} id="contact-form" method="POST">
                    <label htmlFor="name">Name</label>
                    <input onChange={this.handleChange} value={this.state.name} type="text" className="form-control"
                           name='name' id="name"/>

                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input onChange={this.handleChange} value={this.state.email} type="email" className="form-control"
                           name='email' id="email" aria-describedby="emailHelp"/>

                    <label htmlFor="message">Message</label>
                    <textarea onChange={this.handleChange} value={this.state.message} className="form-control" rows="5"
                              name='message' id="message"/>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </>
        )
    }
}

export default ContactForm

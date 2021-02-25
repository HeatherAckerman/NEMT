import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import "../CreateUserModal/CreateUserModal.css"

class CreateUser extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            email: '',
            redirectTo: null
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit(event) {
        console.log(this.state.name)
        event.preventDefault()
        axios.post('/createuser', {
            name: this.state.name,
            email: this.state.email
        })
            .then(response => {
                console.log(response)
                if (!response.data.errmsg) {
                    console.log('Data saved')
                    alert("You'll receive an email as soon as the site is updated. Thank you!")
                    this.setState({ //redirect to Home Page
                        redirectTo: '/'
                    })
                    window.location.reload();
                } else {
                    console.log('There was an error. Please try again.')
                }
            }).catch(error => {
                console.log('signup error: ')
                console.log(error)

            })
    }


    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
            return (
                <div>
                    <form >
                        <div>
                            <input
                                type="text"
                                className="modalInput"
                                name="name"
                                placeholder="Name"
                                value={this.state.name}
                                onChange={this.handleChange}
                            />
                        </div>
                        <br></br>
                        <div>
                            <input
                                className="modalInput"
                                placeholder="Email"
                                name="email"
                                type="text"
                                value={this.state.Email}
                                onChange={this.handleChange}
                            />
                        </div>
                        <br></br>
                        <div>
                            <button
                                onClick={this.handleSubmit}
                                type="submit"
                                className="modalBtn"
                            >Submit
							</button>
                        </div>
                    </form>
                </div>

            )
        }
    }
}

export default CreateUser;
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

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

		//request to server to add a new username/password
		axios.post('/user/', {
			name: this.state.name,
			email: this.state.email
		})
			.then(response => {
				console.log(response)
				if (!response.data.errmsg) {
					console.log('Data saved')
					alert("I'll send you an email as soon as the site is updated. Thank you!")
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
								style={{ fontSize: "60%", width: "80%", border: "solid 1px #C8C8C8" }}
								type="text"
								id="name"
								name="name"
								placeholder="Name"
								value={this.state.name}
								onChange={this.handleChange}
							/>
						</div>
						<br></br>
						<div>
							<input
								style={{ fontSize: "60%", width: "80%", border: "solid 1px #C8C8C8" }}
								placeholder="Email"
								type="Email"
								name="Email"
								value={this.state.Email}
								onChange={this.handleChange}
							/>
						</div>
						<br></br>
						<div>
							<button
								onClick={this.handleSubmit}
								type="submit"
								style={{ background: "#fdd835", color: "rgb(45,49,66)", padding: "5px 5px", border: "#fdd835", borderRadius: "4px", fontSize: "50%" }}
							><strong>Submit</strong>
							</button>

						</div>
					</form>
				</div>

			)
		}
	}
}

export default CreateUser;
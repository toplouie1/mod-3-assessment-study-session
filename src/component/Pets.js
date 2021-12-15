import React, { Component } from "react";
import "../App.css";

export default class Pets extends Component {
	constructor() {
		super();
		this.state = {
			pets: [],
		};
	}
	fetchPets = () => {
		fetch("https://pursuit-veterinarian.herokuapp.com/api/pets")
			.then((res) => res.json())
			.then((data) => {
				this.setState({
					pets: data,
				});
			});
	};
	componentDidMount = () => {
		this.fetchPets();
	};

	render() {
		let petsToDisplay = this.state.pets.map((each) => {
			return (
				<div>
					<div>Name : {each.name}</div>
					<h3>kind : {each.kind}</h3>
					<h3>Breed : {each.breed}</h3>
					<br />
				</div>
			);
		});

		return (
			<div>
				<h1>All Pets </h1>
				<div className="petsContainer">{petsToDisplay}</div>
			</div>
		);
	}
}

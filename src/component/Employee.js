import React, { Component } from "react";
import "../App.css";

export default class Employee extends Component {
	constructor() {
		super();
		this.state = {
			employees: [],
			currentEmployee: null,
		};
	}

	fetchEmployees = () => {
		fetch("https://pursuit-veterinarian.herokuapp.com/api/employees")
			.then((res) => res.json())
			.then((data) => {
				this.setState({
					employees: data,
				});
			});
	};

	componentDidMount = () => {
		this.fetchEmployees();
	};
	handleDropdownChange = (e) => {
		this.setState({
			currentEmployee: e.target.value,
		});
	};

	render() {
		let mappingOver = this.state.employees.map((each) => {
			return <option>{each.firstName}</option>;
		});
		let clickedSelect = this.state.employees.find((each) => {
			return each.firstName === this.state.currentEmployee;
		});
		return (
			<div>
				<h1>This is the Employee page </h1>
				<select onChange={this.handleDropdownChange}>
					<option>Select an Employee</option>
					{mappingOver}
				</select>
				<h1>{clickedSelect?.firstName}</h1>
			</div>
		);
	}
}

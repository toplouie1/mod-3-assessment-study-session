import React from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Employee from "./component/Employee";
import Pets from "./component/Pets";
import { Switch, Route } from "react-router-dom";

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<Navbar />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/employee" component={Employee} />
					<Route path="/pets" component={Pets} />
				</Switch>
			</div>
		);
	}
}

export default App;

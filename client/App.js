import React from "react"
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom"
import Home from "./Home"
import About from "./About"

export default function App() {
	return (
		<div style={{ border: "1px dotted #000", padding: "1em" }}>
			<h2>Javascript & React rendered Area</h2>
			<p>To make things more realistic, we have a react app running as well.</p>
			<Router>
				<div>
					<nav>
						<ul>
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>
								<Link to="/about">About</Link>
							</li>
						</ul>
					</nav>
					<Switch>
						<Route path="/" exact>
							<Home />
						</Route>
						<Route path="/about" exact>
							<About />
						</Route>
					</Switch>
				</div>
			</Router>
		</div>
	);
}
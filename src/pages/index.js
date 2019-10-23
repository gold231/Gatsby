import React from "react"
import Header from "./components/header"
import "../styles/my.css"
import "../styles/bootstrap.css"
export default () => (
	<div>
		<Header />
		<div id="content">
			<h1 className="demo">DEMOCRATIZING SCIENCE</h1> 
			<h1 className="with"> WITH DATA </h1>
			<p className="assem">At Assemble, we build fast,secure, and accessible<br />solutions for data tranfer,exchange, and sharing</p>
			
		</div>
	</div>
)
import React from "react"
import "../../styles/my.css"
import "../../styles/bootstrap.css"
export default () =>( 

	<div id="nav">
		<div className="col-md-3">
			Assembles
		</div>
		<div className="col-md-9">
			<ul >
				<li><button className="signup">Sign Up</button></li>
				<li><button className="login">Log In</button></li>
				<li className="dropdown">
					<a href="">About Us</a>
					<ul className="dropdown-content">
						<li><a href="">Learn More</a></li>	
						<li><a href="">Pricing</a></li>
						<li><a href="">Partners</a></li>
						<li><a href="">Our Story</a></li>
						<li><a href="">Our Vision</a></li>
					</ul>
				</li>
				<li><a href="">Features</a></li>
				<li><a href="">Plans</a>
					
				</li>
			</ul>
		</div>
	</div>
)
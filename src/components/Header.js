import React from "react";
import {Link} from "react-router-dom";
import HeaderBase from "../styles/header-base.js";

export default function Header() {
	return (
		<HeaderBase>
			<h1>Header</h1>
			<nav>
				<ul>
					<li><Link to="/"> Home </Link></li>
					<li><Link to="/profile"> Profile </Link></li>
				</ul>
			</nav>
		</HeaderBase>
	)
}

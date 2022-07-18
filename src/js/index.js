//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";
import Card from "./component/card";

//import your own components
import Home from "./component/home.jsx";

//render your react application
let counter = 0;
setInterval(function () {
	const six = Math.floor(counter / 100000);
	const five = Math.floor(counter / 10000);
	const four = Math.floor(counter / 1000);
	const three = Math.floor(counter / 100);
	const two = Math.floor(counter / 10);
	const one = Math.floor(counter / 1);
	counter++;
	ReactDOM.render(
		<Card
			PossSix={six}
			PossFive={five}
			PossFour={four}
			PossThree={three}
			PossTwo={two}
			PossOne={one}
		/>,
		document.querySelector("#app")
	);
}, 1000);

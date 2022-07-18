import React from "react";

//include images into your bundle
import Card from "./card";
/* const [timer, setTimer] = useState(0); */
let counter = 0;
setInterval(function () {
	const possFour = Math.floor(counter / 1000);
	counter++;
});
//create your first component

const Home = () => {
	return (
		<div className="d-flex mt-5">
			<Card />
		</div>
	);
};

export default Home;

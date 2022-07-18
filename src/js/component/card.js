import React from "react";
import PropTypes from "prop-types";

function Card(props) {
	return (
		<div className="container p-2">
			<div className="clock d-flex container justify-content-center p-5">
				<i className="far fa-clock p-2 border"></i>
				<div className="six p-2 border">{props.PossSix % 10}</div>
				<div className="five p-2 border">{props.PossFive % 10}</div>
				<div className="four p-2 border">{props.PossFour % 10}</div>
				<div className="three p-2 border">{props.PossThree % 10}</div>
				<div className="two p-2 border">{props.PossTwo % 10}</div>
				<div className="one p-2 border">{props.PossOne % 10}</div>
			</div>
		</div>
	);
}
Card.proptypes = {
	PossSix: PropTypes.number,
	PossFive: PropTypes.number,
	PossFour: PropTypes.number,
	PossThree: PropTypes.number,
	PossTwo: PropTypes.number,
	PossOne: PropTypes.number,
};

export default Card;

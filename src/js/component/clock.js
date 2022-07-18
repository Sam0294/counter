import React, { useState, useEffect } from "react";

const Clock = () => {
	return (
		<div className="col d-flex d-flex container justify-content-center">
			<div className="card bg-dark text-white ">
				<div className="card-body text-center ">
					<h1 className="card-text">
						<i className="far fa-clock"></i>
					</h1>
				</div>
			</div>
		</div>
	);
};
export default Clock;

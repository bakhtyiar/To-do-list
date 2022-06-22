// import React from "react";
import PropTypes from "prop-types";
// import { ulStyles } from './ToDoListStyles.js';
import  './ToDoList.css'

export default function ToDoList(props) {
	return (
		<ul /*style={ulStyles}*/>
			{props.list.map((item) => {
				return (
					<li key={item.id}>
						<h6>
							{item.id}
						</h6>
						<p>
							{item.body}
						</p>
					</li>
				);
			})}
		</ul>
	);
}
ToDoList.propTypes = {
	list: PropTypes.array,
};
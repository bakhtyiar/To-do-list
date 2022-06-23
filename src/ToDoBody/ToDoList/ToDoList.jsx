// import React from "react";
import PropTypes from "prop-types";
// import { ulStyles } from './ToDoListStyles.js';
import "./ToDoList.css";
import ToDoListItem from "./ToDoListItem/ToDoListItem.jsx";

export default function ToDoList(props) {
	return (
		<ul /*style={ulStyles}*/>
			{props.list.map((item) => {
				return (<ToDoListItem
					checkTask={props.checkTask}
					removeTask={props.removeTask}
					key={item.id}
					id={item.id}
					body={item.body}
					checked={item.checked}
				/>)
			})}
		</ul>
	);
}
ToDoList.propTypes = {
	list: PropTypes.array,
	removeTask: PropTypes.function,
	checkTask: PropTypes.function,
};

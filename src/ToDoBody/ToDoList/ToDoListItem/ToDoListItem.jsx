import { useState } from "react";
import PropTypes from "prop-types";
import "./ToDoListItem.css";

export default function ToDoListItem(props) {
	const [checked, setChecked] = useState(false);
	
	const removeTask = (id) => {
		props.removeTask(id);
	};

	const checkTask = (id) => {
		const nextState = checked === true ? false : true;
		setChecked(nextState);
		props.checkTask(id);
	};
	
	let liContentClassNames = [];
	if (checked === true) {
		liContentClassNames = ["to-do-list-item__content--checked"];
	} else {
		liContentClassNames = [];
	}

	return (
		<li key={props.id} className="to-do-list-item">
			<input type="checkbox" onClick={() => checkTask(props.id)} />
			<h6>{props.id}</h6>
			<p className={liContentClassNames}>{props.body}</p>
			<button type="button" onClick={() => removeTask(props.id)}>
				&#10006;
			</button>
		</li>
	);
}
ToDoListItem.propTypes = {
	id: PropTypes.number,
	body: PropTypes.string,
	removeTask: PropTypes.func,
	checkTask: PropTypes.func,
};

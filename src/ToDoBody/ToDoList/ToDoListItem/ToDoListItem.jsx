import { useState } from "react";
import PropTypes from "prop-types";
// import "./ToDoListItem.css";
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button'


export default function ToDoListItem(props) {
	const [checked, setChecked] = useState(props.checked);
	
	const removeTask = (id) => {
		props.removeTask(id);
	};

	const checkTask = (id) => {
		const nextState = checked === true ? false : true;
		setChecked(nextState);
		props.checkTask(id, nextState);
	};
	
	let checkedProp = {};
	if (props.checked === true) 
		checkedProp = {
			"checked": "checked",
		};
	else
		checkedProp = {};

	let contentStyles = {
		...styles["p"], 
		...styles["content"]
	};
	if (props.checked === true)
		contentStyles = {
			...styles["p"], 
			...styles["content"],
			...styles["content--checked"],
		};
	else 
		contentStyles = {
			...styles["p"], 
			...styles["content"],
		};



	return (
		<li key={props.id} style={styles["li"]}>
			<Checkbox 
				{...checkedProp} 
				onClick={() => checkTask(props.id)}
				ariaLabel="Check task"
				style={styles[".input"]}
			/>
			<h6 style={styles["h6"]}>
				{props.id}
			</h6>
			<p style={contentStyles}>
				{props.body}
			</p>
			<Button 
				ariaLabel="Delete task" 
				type="button" 
				onClick={() => removeTask(props.id)}
				style={styles[""]}
			>
				&#10006;
			</Button>
		</li>
	);
}

ToDoListItem.propTypes = {
	id: PropTypes.number,
	body: PropTypes.string,
	checked: PropTypes.bool,
	removeTask: PropTypes.func,
	checkTask: PropTypes.func,
};

const styles = {
	"li": {
		"minWidth": "300px",
		"maxWidth": "720px",
		"width": "100%",
		"display": "flex",
		"flexDirection": "row",
		"alignItems": "center",
		"padding": "16px",
		"marginTop": "16px",
		"border": "1px solid lightgray",
		"borderRadius": "8px",
		"marginRight": "0",
	},
	"checkbox": {
		"margin": "0",
	},
	"h6": {
		"margin": "0",
		"fontSize": "medium",
		"fontWeight": "400"
	},
	"p": {
		"margin": "0",
		"width": "100%",
	},
	"content": {
		"color": "black",
	},
	"content--checked": {
		"color": "lightGray",
		"text-decoration": "line-through",
	},
}
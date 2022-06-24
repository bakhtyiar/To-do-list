import { useState } from "react";
import PropTypes from "prop-types";
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

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
				style={styles["checkbox"]}
			/>
			<p style={contentStyles}>
				{props.body}
			</p>
			<IconButton 
				ariaLabel="Delete task" 
				type="button" 
				onClick={() => removeTask(props.id)}
			>
				<CloseIcon sx={{"fontSize": "medium"}}/>
			</IconButton>
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
		"alignItems": "flexStart",
		"padding": "16px 16px 16px 8px",
		"marginTop": "16px",
		"border": "1px solid lightgray",
		"borderRadius": "8px",
		"marginRight": "0",
	},
	"checkbox": {
		"marginRight": "8px",
	},
	"p": {
		"margin": "0",
		"width": "calc(100% - 74px)",
		"word-wrap": "break-word",
	},
	"content": {
		"color": "black",
	},
	"content--checked": {
		"color": "lightGray",
		"text-decoration": "line-through",
	},
}
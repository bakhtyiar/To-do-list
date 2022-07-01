import PropTypes from "prop-types";
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import "./ToDoListItem.css";
import TextField from '@mui/material/TextField';
import { useRef, useState, useEffect } from "react";

export default function ToDoListItem(props) {
	const [isEditing, setIsEditing] = useState(false);
	const textFieldRef = useRef();
	const pRef = useRef();
	useEffect(() => {
		textFieldRef.current.focus();
	}, [isEditing]);
	
	const removeTask = (id) => {
		props.removeTask(id);
	};

	const checkTask = (id) => {
		props.checkTask(id);
	};

	const updateTask = (e) => {
		props.updateTask(props.id, e.target.value);
		textFieldRef.current.blur();
		setIsEditing(false);
	};

	const handleKeyDown = (e) => {
		if (e.key === 'Enter') {
			updateTask(e);
		}
	};

	const handleBlur = (e) => {
		updateTask(e);
	};

	const startEditing = () => {
		setIsEditing(true);
	};

	return (
		<li 
			index={props.index}
			className="task-item__li"
			ref={props.providedOut.innerRef} 
			{...props.providedOut.draggableProps} 
		>
			<div 
				className="task-item__drag-icon" 
				{...props.providedOut.dragHandleProps}
			>
				<DragIndicatorIcon sx={{"fontSize": "medium"}}/>
			</div>
			<Checkbox
				checked={props.checked}
				onClick={() => checkTask(props.id)}
				aria-label="Check task"
				className="task-item__checkbox"
			/>
			<TextField
				style={{
					"display": isEditing ? "block" : "none",
				}}
				multiline
				fullWidth
				className="task-item__text-field"
				defaultValue={props.body}
				variant="standard"
				onKeyDown={handleKeyDown}
				onBlur={handleBlur}
				inputRef={textFieldRef}
			/>
			<p 
				style={{
					"textDecoration": props.checked ? "line-through" : "none",
					"color": props.checked ? "lightGray" : "initial",
					"display": isEditing ? "none" : "block",
				}}
				className="task-item__p"
				onClick={startEditing}
				aria-hidden="true"
				ref={pRef}
			>
				{props.body}
			</p>
			<IconButton 
				aria-label="Delete task" 
				type="button" 
				onClick={() => removeTask(props.id)}
				className="task-item__close-button"
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
	updateTask: PropTypes.func,
	providedOut: PropTypes.object,
	index: PropTypes.number,
};

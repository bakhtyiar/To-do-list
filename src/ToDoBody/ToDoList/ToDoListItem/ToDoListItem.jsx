import PropTypes from "prop-types";
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import "./ToDoListItem.css";

export default function ToDoListItem(props) {
	const styles = {
		"p": {
			...props.checked === true ? {
				"color": "lightGray",
				"textDecoration": "line-through",
			} : {},
		},
	};

	const removeTask = (id) => {
		props.removeTask(id);
	};

	const checkTask = (id) => {
		props.checkTask(id);
	};
	
	return (
		<li 
			index={props.index}
			style={styles["li"]}
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
				style={styles["checkbox"]}
				className="task-item__checkbox"
			/>
			<p style={styles["p"]} className="task-item__p">
				{props.body}
			</p>
			<IconButton 
				aria-label="Delete task" 
				type="button" 
				onClick={() => removeTask(props.id)}
				style={styles["close-button"]}
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
	providedOut: PropTypes.object,
	index: PropTypes.number,
};

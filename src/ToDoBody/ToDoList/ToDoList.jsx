import PropTypes from "prop-types";
import ToDoListItem from "./ToDoListItem/ToDoListItem.jsx";
import { Draggable } from 'react-beautiful-dnd';

export default function ToDoList(props) {
	const styles = {
		"ul": {
			"list-style-type": "none",
			"padding-left": "0px",
		}
		
	}
	return (
		<ul 
			style={styles["ul"]}
			{...props.providedOut.droppableProps} 
			ref={props.providedOut.innerRef} 
		>
			{props.list.map((item, index) => {
				return (
					<Draggable 
						key={item.id.toString()} 
						draggableId={item.id.toString()} 
						index={index}
					>
					{(provided) => (
						<ToDoListItem
							checkTask={props.checkTask}
							removeTask={props.removeTask}
							id={item.id}
							index={index}
							body={item.body}
							checked={item.checked}
							providedOut={provided}
						/>
					)}
					</Draggable>
				)
			})}
			{props.providedOut.placeholder}
		</ul>
	);
}

ToDoList.propTypes = {
	list: PropTypes.array,
	removeTask: PropTypes.func,
	checkTask: PropTypes.func,
	providedOut: PropTypes.object,
};
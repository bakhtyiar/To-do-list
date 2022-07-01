import { useState, useEffect } from "react";
import ToDoControls from "./ToDoControls/ToDoControls.jsx";
import ToDoList from "./ToDoList/ToDoList.jsx";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

export default function ToDoBody() {
	const [list, setList] = useState(() => {
		const saved = localStorage.getItem("ToDoBodyList");
		const initialValue = JSON.parse(saved);
		return (
			initialValue || [
				{
					id: 1,
					body: "My first task",
					checked: false,
				},
			]
		);
	});

	useEffect(() => {
		localStorage.setItem("ToDoBodyList", JSON.stringify(list));
	}, [list]);

	const addTask = (e) => {
		setList([
			...list,
			{
				id: getMaxId(list) + 1,
				body: e,
				checked: false,
			},
		]);
	};

	const removeTask = (id) => {
		const newList = list.filter((item) => item.id !== id);
		setList(newList);
	};

	const checkTask = (id) => {
		const index = list.findIndex((item) => item.id === id);
		const nextState = list[index]["checked"] === true ? false : true;
		const newList = list.slice();
		newList[index]["checked"] = nextState;
		setList(newList);
	};

	const updateTask = (id, newText) => {
		const index = list.findIndex((item) => item.id === id);
		let newList = list.slice();
		newList[index]["body"] = newText;
		setList(newList);
	};

	const dragTask = (result) => {
		if (!result.destination) return;

		const items = Array.from(list);
		const [reorderedItem] = items.splice(result.source.index, 1);
		items.splice(result.destination.index, 0, reorderedItem);

		setList(items);
	};

	return (
		<>
			<ToDoControls addTask={addTask} />
			<DragDropContext onDragEnd={dragTask}>
				<Droppable droppableId="taskList">
					{(provided) => (
						<ToDoList
							list={list}
							checkTask={checkTask}
							updateTask={updateTask}
							removeTask={removeTask}
							providedOut={provided}
						/>
					)}
				</Droppable>
			</DragDropContext>
		</>
	);
}

const getMaxId = (list) => {
	let ids = [];
	list.forEach((item) => {
		ids.push(item.id);
	});
	return Math.max(...ids);
};

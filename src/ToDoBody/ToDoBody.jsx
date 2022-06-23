import { useState, useEffect } from "react";
import ToDoControls from "./ToDoControls/ToDoControls.jsx";
import ToDoList from "./ToDoList/ToDoList.jsx";

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

	const checkTask = (id, nextState) => {
		const index = list.findIndex( (item) => item.id === id);
		const newList = list.slice();
		newList[index].checked = nextState;
		setList(newList);
	};

	return (
		<section>
			<ToDoControls addTask={addTask} />
			<ToDoList list={list} checkTask={checkTask} removeTask={removeTask} />
		</section>
	);
}


const getMaxId = (list) => {
	let ids = [];
	list.forEach(item => {
		console.log(`item == ${item.id}`);
		ids.push(item.id);
	});
	console.log(`LIST FIND MAX ${ids}`);
	return (Math.max(...ids));
}
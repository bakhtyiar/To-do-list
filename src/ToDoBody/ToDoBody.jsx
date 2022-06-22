import { useState } from "react";
import ToDoControls from "./ToDoControls/ToDoControls.jsx";
import ToDoList from "./ToDoList/ToDoList.jsx";

export default function ToDoBody() {
	const [list, setList] = useState([
		{
			"id": 1,
			"body": "My first task",
		},
	]);

	const handleClick = (e) => {
		console.log(`Handling click in ToDoBody`);
		// console.log(e.target.value);
		console.log(`LIST:`);
		console.log(list);
		setList([...list,
			{
				"id": list.length + 1,
				"body": e,
			}
		]);
	};
	return (
		<section>
			<ToDoControls handleClick={handleClick} />
			<ToDoList list={list} />
		</section>
	);
}

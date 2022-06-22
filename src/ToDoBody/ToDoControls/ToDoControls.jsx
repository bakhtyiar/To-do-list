import { useState, useEffect } from "react";
import PropTypes from "prop-types";

export default function ToDoControls(props) {
	const [inputText, setInputText] = useState(() => {
		const saved = localStorage.getItem("ToDoControlsInputText");
		const initialValue = JSON.parse(saved);
		return initialValue || "";
	});
	useEffect(() => {
		localStorage.setItem("ToDoControlsInputText", JSON.stringify(inputText));
	}, [inputText]);
	const handleChange = (e) => {
		setInputText(e.target.value);
	};
	const addTask = (e) => {
		e.preventDefault();
		props.addTask(inputText);
		setInputText("");
	};
	return (
		<form>
			<label>
				<h3>Write what you have to do:</h3>
				<input
					type="text"
					placeholder="Do dishes..."
					value={inputText}
					onChange={handleChange}
				/>
			</label>
			<button type="submit" onClick={addTask}>
				Add task
			</button>
		</form>
	);
}
ToDoControls.propTypes = {
	addTask: PropTypes.func.isRequired,
};

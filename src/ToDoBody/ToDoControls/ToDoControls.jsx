import { useState } from "react";
import PropTypes from "prop-types";

export default function ToDoControls(props) {
	const [inputText, setInputText] = useState("");
	const handleChange = (e) => {
		setInputText(e.target.value);
	};
	const handleClick = (e) => {
		e.preventDefault();
		props.handleClick(inputText);
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
			<button type="submit" onClick={handleClick}>Add task</button>
		</form>
	);
}
ToDoControls.propTypes = {
	handleClick: PropTypes.func.isRequired,
};

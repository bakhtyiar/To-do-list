import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

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
			<label htmlFor="to-do-control-filled-search">
				<h3>Write what you have to do:</h3>
			</label>
			<Box sx={styles["controls"]}>
				<TextField
					id="to-do-control-filled-search"
					label="I will ..."
					type="search"
					variant="outlined" 
					value={inputText}
					onChange={handleChange}
					style={styles["textfield"]}
				/>
				<Button 
					variant="contained" 
					type="submit" 
					onClick={addTask}
					style={styles["button"]}
				>
					Add task
				</Button>
			</Box>
		</form>
	);
}
ToDoControls.propTypes = {
	addTask: PropTypes.func.isRequired,
};
const styles = {
	"controls": {
		"display": "flex",
		"alignItems": "stretch",
	},
	"textfield": {
		"marginRight": "8px",
		"width": "100%",
	},
	"button": {
		"minWidth": "fit-content",
	},
}
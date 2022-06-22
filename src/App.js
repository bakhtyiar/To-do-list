// import logo from "./logo.svg";
// import React from "react";
import "./App.css";
import Header from "./Header/Header.jsx";
import ToDoBody from "./ToDoBody/ToDoBody.jsx";

function App() {
	return (
		<article className="App">
			<Header />
			<ToDoBody />
		</article>
	);
}

export default App;

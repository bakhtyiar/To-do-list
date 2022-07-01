import "./App.css";
import Header from "./Header/Header.jsx";
import ToDoBody from "./ToDoBody/ToDoBody.jsx";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

function App() {
	return (
		<article className="App">
			<CssBaseline />
			<Container fixed>
				<Box
					component="div"
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<Header />
					<ToDoBody />
				</Box>
			</Container>
		</article>
	);
}

export default App;

import "./App.css";
import SettingControls from "./SettingControls/SettingControls.jsx";
import Header from "./Header/Header.jsx";
import ToDoBody from "./ToDoBody/ToDoBody.jsx";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { ThemeProvider, createTheme } from "@mui/material/styles";
// import useMediaQuery from "@mui/material/useMediaQuery";
import { useState, useMemo, createContext } from "react";

export const ColorModeContext = createContext({
	toggleColorMode: () => {},
	theme: "light",
});

function App() {
	// const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
	const [mode, setMode] = useState("light");
	const colorMode = useMemo(
		() => ({
			// The dark mode switch would invoke this method
			toggleColorMode: () => {
				setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
			},
			theme: mode,
		}),
		[mode]
	);
	const theme = useMemo(
		() =>
			createTheme({
				palette: {
					mode,
				},
			}),
		[mode]
	);

	return (
		<article className="App">
			<ColorModeContext.Provider value={colorMode}>
				<ThemeProvider theme={theme}>
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
							<SettingControls
								toggleColorMode={colorMode.toggleColorMode}
								theme={mode}
							/>
							<Header />
							<ToDoBody />
						</Box>
					</Container>
				</ThemeProvider>
			</ColorModeContext.Provider>
		</article>
	);
}

export default App;

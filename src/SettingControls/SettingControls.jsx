import PropTypes from "prop-types";
import Switch from "@mui/material/Switch";

const SettingControls = (props) => {
	const handleChange = () => {
		props.toggleColorMode();
	};

	return (
		<div>
			Dark
			<Switch
				checked={props.theme === "light" ? true : false}
				onChange={handleChange}
				inputProps={{ "aria-label": "switch-theme" }}
			/>
			Light
		</div>
	);
};

SettingControls.propTypes = {
	theme: PropTypes.string.isRequired,
	toggleColorMode: PropTypes.func,
};

export default SettingControls;

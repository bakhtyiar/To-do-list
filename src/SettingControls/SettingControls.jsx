import PropTypes from "prop-types";
import Switch from "@mui/material/Switch";

const SettingControls = (props) => {
	const handleChange = () => {
		props.toggleColorMode();
	};

	return (
		<div>
			<Switch
				checked={props.theme === "light" ? true : false}
				onChange={handleChange}
				inputProps={{ "aria-label": "switch-theme" }}
			/>
		</div>
	);
};

SettingControls.propTypes = {
	theme: PropTypes.string.isRequired,
	toggleColorMode: PropTypes.func,
};

export default SettingControls;

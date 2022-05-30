import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import styles from "./styles.module.scss";
import { purple } from "@mui/material/colors";

const RadioInput = ({
	name,
	handleInputState,
	label,
	options,
	required,
	...rest
}) => {
	const handleChange = ({ currentTarget: input }) => {
		handleInputState(input.name, input.value);
	};

	return (
		<div className={styles.container}>
			<p>{label}</p>
			<RadioGroup {...rest} row name={name} onChange={handleChange}>
				{options.map((option, index) => (
					<FormControlLabel
						key={index}
						value={option}
						control={
							<Radio
								disableRipple
								style={{ color: "purple" , transform: "scale(2)" }}
								required={required}
							/>
						}
						label={option}
						className={styles.radio_input}
					/>
				))}
			</RadioGroup>
		</div>
	);
};

export default RadioInput;

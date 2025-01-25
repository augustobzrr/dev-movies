import { ButtonRed, ButtonWhite } from "./styles";

function Button({ children, red }) {
	return (
		<>
			{" "}
			{red ? (
				<ButtonRed type="button">{children}</ButtonRed>
			) : (
				<ButtonWhite type="button">{children}</ButtonWhite>
			)}
		</>
	);
}

export default Button;

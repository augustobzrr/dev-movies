import { ButtonRed, ButtonWhite } from "./styles";

function Button({ children, red, ...rest }) {
	return (
		<>
			{" "}
			{red ? (
				<ButtonRed {...rest} type="button">{children}</ButtonRed>
			) : (
				<ButtonWhite {...rest} type="button">{children}</ButtonWhite>
			)}
		</>
	);
}

export default Button;

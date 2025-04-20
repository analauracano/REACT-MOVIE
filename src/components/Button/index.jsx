import { ButtonPrimary, ButtonSecond } from "./styles";

function Button({ children, red, ...rest }) {
  return (
    <>
      {red ? (
        <ButtonPrimary {...rest}>{children}</ButtonPrimary>
      ) : (
        <ButtonSecond {...rest}>{children}</ButtonSecond>
      )}
    </>
  );
}

export default Button;

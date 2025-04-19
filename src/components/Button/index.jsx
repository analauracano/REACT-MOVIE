import { ButtonPrimary, ButtonSecond } from "./styles";

function Button({ children, red }) {
  return (
    <>
      {red ? (
        <ButtonPrimary>{children}</ButtonPrimary>
      ) : (
        <ButtonSecond>{children}</ButtonSecond>
      )}
    </>
  );
}

export default Button;

import type { FC, HTMLAttributes } from "react";
import { Button } from "./Button";

interface Props extends HTMLAttributes<HTMLInputElement>{
  isAction?: boolean;
  placeholder?: string;
  btnText?: string;
}

export const TextField: FC<Props> = function TextField({
  placeholder = "Подсказка",
  isAction = false,
  btnText = "Найти",
  ...props
}) {
  return (
    <div className="input-container">
      <input type={ props.typeof || "text" } placeholder={placeholder} className="search" {...props}/>
      {isAction && <Button text={btnText} mode="orange" />}
    </div>
  );
};

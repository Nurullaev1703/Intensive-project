import type { FC, HTMLAttributes } from "react";

type ButtonType = "default" | "secondary" | "orange" | "blue" | "info"

interface Props extends HTMLAttributes<HTMLInputElement>{
    mode?: ButtonType,
    text: string
}
export const Button: FC<Props> = function Button({ mode = "default", text, ...props }) {

    return <input type="button" value={text} className={`btn ${mode}`} {...props} />
    
};
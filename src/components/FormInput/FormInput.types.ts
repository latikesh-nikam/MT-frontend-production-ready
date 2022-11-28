import { FieldErrorsImpl } from "react-hook-form";

export interface IFormInputProps{
    name:string,
    label:string,
    errors:Partial<FieldErrorsImpl<{
        [x: string]: any;
    }>>,
    type:"text" | "number" | "password"
}
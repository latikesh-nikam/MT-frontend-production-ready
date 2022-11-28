import { FieldErrorsImpl } from "react-hook-form";

export interface IDatePickerProps {
    name:string;
    label:string;
    errors:Partial<FieldErrorsImpl<{
        [x: string]: any;
    }>>,
}
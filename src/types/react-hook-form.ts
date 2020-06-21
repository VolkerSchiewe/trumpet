import {DeepPartial, FieldElement, ValidationOptions} from "react-hook-form/dist/types";

export type register = (validationOptions: ValidationOptions) => (ref: Element | null) => void;
export type setValue<FormValues> = (namesWithValue: Partial<FormValues>[], shouldValidate?: boolean) => void;

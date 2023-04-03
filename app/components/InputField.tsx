import React from "react";

interface InputFieldProps {
    type: string;
    name: string;
    label: string;
    withMarginTop?: boolean;
}

export default function InputField({
    type,
    name,
    withMarginTop = false,
    label,
}: InputFieldProps) {
    return (
        <>
            <label
                htmlFor={name}
                className={`text-3xl font-bold ${
                    withMarginTop && "sm:mt-10 mt-5"
                }`}
            >
                {`${label}:`}
            </label>
            <input
                type={type}
                name={name}
                className="border rounded border-black p-2"
            />
        </>
    );
}

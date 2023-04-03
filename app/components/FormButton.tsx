import React from "react";

interface FormButtonProps {
    text: string;
}

export default function FormButton({ text }: FormButtonProps) {
    return (
        <button
            type="submit"
            className="bg-green rounded text-white p-4 text-2xl w-40 font-bold"
        >
            {text}
        </button>
    );
}

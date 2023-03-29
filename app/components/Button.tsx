import React from "react";

interface props {
    haveMargin: boolean;
    text: string;
    handleClick: () => void;
}
export default function Button({ haveMargin, handleClick, text }: props) {
    return (
        <button
            onClick={handleClick}
            className={`bg-green text-white p-3 text-center rounded-lg w-60 text-2xl ${
                haveMargin && "mr-2"
            }`}
        >
            {text}
        </button>
    );
}

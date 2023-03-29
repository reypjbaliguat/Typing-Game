"use client";

import { Dispatch, RefObject, SetStateAction } from "react";

interface TextInputProps {
    componentTextValue: string;
    setComponentTextValue: Dispatch<SetStateAction<string>>;
    content: String;
    playing: Boolean;
    textAreaRef: RefObject<HTMLTextAreaElement>;
}

export default function TextInput({
    componentTextValue,
    setComponentTextValue,
    playing,
    textAreaRef,
}: TextInputProps) {
    return (
        <textarea
            ref={textAreaRef}
            className={`transition-all rounded-lg w-full border-2 resize-none sm:p-16 p-5 text-3xl sm:mb-10 mb-5 ${
                playing
                    ? "border-green outline-green"
                    : "border-black outline-black"
            } `}
            placeholder="Type here ..."
            value={componentTextValue}
            disabled={!playing}
            onChange={(e) => {
                setComponentTextValue(e.target.value);
            }}
        />
    );
}

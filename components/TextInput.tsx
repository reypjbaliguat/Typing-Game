"use client";

import { AppDispatch, RootState } from "@/store/store";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetTime, setValue, setWordPerMinute } from "../features/text";

export default function TextInput() {
    const [componentTextValue, setComponentTextValue] = useState("");
    const { text } = useSelector((state: RootState) => state.text);
    const dispatch = useDispatch<AppDispatch>();
    const textAreaRef = useRef<HTMLTextAreaElement>(null);
    const { content, playing } = text;
    useEffect(() => {
        dispatch(setValue(componentTextValue));
    }, [componentTextValue, dispatch]);

    useEffect(() => {
        if (playing) {
            textAreaRef.current?.focus();
            dispatch(setWordPerMinute(0));
            // dispatch(resetTime());
        }
    }, [playing, dispatch]);

    useEffect(() => {
        setComponentTextValue("");
    }, [content]);

    return (
        <textarea
            ref={textAreaRef}
            className={`rounded-lg w-full border-2 resize-none sm:p-16 p-5 text-3xl sm:mb-10 mb-5 ${
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

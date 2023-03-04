"use client";

import { AppDispatch, RootState } from "@/store/store";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setValue } from "../features/text";

export default function TextInput() {
    const [componentTextValue, setComponentTextValue] = useState("");
    const { text } = useSelector((state: RootState) => state.text);
    const dispatch = useDispatch<AppDispatch>();
    const { status, content, value } = text;

    useEffect(() => {
        dispatch(setValue(componentTextValue));
    }, [componentTextValue, dispatch]);
    return (
        <textarea
            className="rounded-lg w-full border resize-none sm:p-16 p-5 text-3xl sm:mb-10 mb-5"
            placeholder="Type here..."
            value={componentTextValue}
            onChange={(e) => setComponentTextValue(e.target.value)}
        />
    );
}

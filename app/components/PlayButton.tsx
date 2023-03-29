"use client";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/store/store";
import { setPlaying, fetchText } from "@/features/text";
import Button from "./Button";

export default function PlayButton() {
    const dispatch = useDispatch<AppDispatch>();
    const { text } = useSelector((state: RootState) => state.text);
    const { playing, time } = text;

    const fetchNewContent = async () => {
        const promise = dispatch(fetchText());
        return () => {
            promise.abort();
        };
    };

    const handlePlay = () => {
        dispatch(setPlaying(true));
    };

    return (
        <div className="flex justify-center">
            {!playing && (
                <Button
                    haveMargin={true}
                    handleClick={fetchNewContent}
                    text={"New Content"}
                />
            )}
            {!playing && (
                <Button
                    haveMargin={false}
                    handleClick={handlePlay}
                    text={"Play"}
                />
            )}
            {playing && <p className="text-5xl"> {time}</p>}
        </div>
    );
}

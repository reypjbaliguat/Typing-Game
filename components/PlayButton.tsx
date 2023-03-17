"use client";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { setPlaying, fetchText } from "@/features/text";

export default function PlayButton() {
    const dispatch = useDispatch<AppDispatch>();
    const { text } = useSelector((state: RootState) => state.text);
    const { playing, time } = text;

    const fetchNewContent = async () => {
        dispatch(fetchText());
    };

    return (
        <div className="flex justify-center">
            {!playing && (
                <button
                    onClick={fetchNewContent}
                    className={`bg-green text-white mr-2 p-3 text-center rounded-lg w-60 text-2xl `}
                >
                    New Content
                </button>
            )}
            {!playing && (
                <button
                    onClick={() => {
                        dispatch(setPlaying(true));
                    }}
                    className={`bg-green text-white p-3 text-center rounded-lg w-60 text-2xl `}
                >
                    Play
                </button>
            )}
            {playing && <p className="text-5xl"> {time}</p>}
        </div>
    );
}

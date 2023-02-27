"use client";

import React, { useState } from "react";
import { useSelector } from "react-redux";

export default function PlayButton() {
    const [playing, setPlaying] = useState(false);
    const stat = useSelector((state) => state.icon);
    console.log(stat);
    const play = () => {
        setPlaying(true);
    };
    return (
        <div className="flex justify-center">
            <button
                onClick={play}
                className={`bg-green text-white p-3 text-center rounded-lg w-40 text-2xl ${
                    !playing && "animate-pulse"
                }`}
            >
                Play
            </button>
        </div>
    );
}

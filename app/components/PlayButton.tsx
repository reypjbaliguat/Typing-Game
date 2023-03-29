"use client";

import React from "react";
import Button from "./Button";

interface PlayButtonProps {
    handlePlay: () => void;
    fetchNewContent: () => void;
    playing: Boolean;
    time: number;
}

export default function PlayButton({
    handlePlay,
    fetchNewContent,
    playing,
    time,
}: PlayButtonProps) {
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

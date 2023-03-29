"use client";
import React from "react";
import Letters from "./Letters";
import Loading from "./Loading";

interface TextContainerProps {
    status: String;
    textValue: string[];
    letterArr: string[];
}
const TextContainer = ({
    status,
    textValue,
    letterArr,
}: TextContainerProps) => {
    return (
        <div className="flex sm:basis-3/5 sm:my-10 my-5 border border-black sm:p-16 p-5 rounded-lg">
            {status === "loading" ? (
                <Loading />
            ) : (
                <Letters textValue={textValue} letterArr={letterArr} />
            )}
        </div>
    );
};

export default TextContainer;

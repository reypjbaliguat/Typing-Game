"use client";
import React, { useEffect, useState } from "react";
import fetchHook from "../CustomHooks/fetchHook";
import Loading from "../components/Loading";

const TextContainer = () => {
    const { data, loading, refetch } = fetchHook(
        "https://api.quotable.io/random"
    );
    const { content } = data;

    return (
        <div className="flex sm:basis-3/5 sm:my-10 my-5 border border-black sm:p-16 p-5 rounded-lg">
            {loading ? <Loading /> : <h1 className="text-4xl"> {content} </h1>}
        </div>
    );
};

export default TextContainer;

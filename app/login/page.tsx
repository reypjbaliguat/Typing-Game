"use client";
import React from "react";
import LoginForm from "./components/LoginForm";
import LoginHeader from "./components/LoginHeader";

export default function Login() {
    return (
        <div className="flex basis-full justify-center">
            <div className="basis-3/5 flex-wrap">
                <LoginHeader />
                <LoginForm />
            </div>
        </div>
    );
}

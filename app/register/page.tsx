import React from "react";
import RegisterHeader from "./components/RegisterHeader";
import RegisterForm from "./components/RegisterForm";

export default function Register() {
    return (
        <div className="flex basis-full justify-center">
            <div className="basis-3/5 flex-wrap">
                <RegisterHeader />
                <RegisterForm />
            </div>
        </div>
    );
}

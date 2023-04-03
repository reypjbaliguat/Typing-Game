"use client";
import DivWithFlexCol from "@/app/components/DivWithFlexCol";
import DivWithMarginTop5 from "@/app/components/DivWithMarginTop5";
import FormButton from "@/app/components/FormButton";
import FormButtonContainer from "@/app/components/FormButtonContainer";
import FormContainer from "@/app/components/FormContainer";
import InputField from "@/app/components/InputField";
import Link from "next/link";
import React from "react";

export default function RegisterForm() {
    const handleSubmit = () => {
        alert("submitted");
    };
    return (
        <FormContainer handleSubmit={handleSubmit}>
            <DivWithFlexCol>
                <InputField
                    name={"username"}
                    type={"text"}
                    label={"Username"}
                />
                <InputField
                    name={"email"}
                    type={"email"}
                    label={"Email"}
                    withMarginTop={true}
                />
                <InputField
                    name={"password"}
                    type={"password"}
                    label={"Password"}
                    withMarginTop={true}
                />
            </DivWithFlexCol>
            <FormButtonContainer>
                <FormButton text={"Register"} />
            </FormButtonContainer>
            <DivWithMarginTop5>
                <Link href="/login" className="text-green font-bold">
                    Already have account?
                </Link>
            </DivWithMarginTop5>
            <DivWithMarginTop5>
                <Link href="/" className="text-green font-bold">
                    Play without saving?
                </Link>
            </DivWithMarginTop5>
        </FormContainer>
    );
}

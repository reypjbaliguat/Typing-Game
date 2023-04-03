import DivWithMarginTop5 from "@/app/components/DivWithMarginTop5";
import FormButton from "@/app/components/FormButton";
import InputField from "@/app/components/InputField";
import Link from "next/link";
import React from "react";
import DivWithFlexCol from "@/app/components/DivWithFlexCol";
import FormButtonContainer from "@/app/components/FormButtonContainer";
import FormContainer from "@/app/components/FormContainer";

export default function LoginForm() {
    const handleSubmit = () => {
        alert("hey fucker");
    };
    return (
        <FormContainer handleSubmit={handleSubmit}>
            <DivWithFlexCol>
                <InputField name={"email"} type={"email"} label={"Email"} />
                <InputField
                    name={"password"}
                    type={"password"}
                    label={"Password"}
                    withMarginTop={true}
                />
            </DivWithFlexCol>
            <FormButtonContainer>
                <FormButton text={"Login"} />
            </FormButtonContainer>
            <DivWithMarginTop5>
                <Link href="/register" className="text-green font-bold">
                    Need account?
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

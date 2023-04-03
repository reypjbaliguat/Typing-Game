import React from "react";

interface FormContainerProps {
    children: React.ReactNode;
    handleSubmit: () => void;
}

export default function FormContainer({
    children,
    handleSubmit,
}: FormContainerProps) {
    return <form onSubmit={handleSubmit}>{children}</form>;
}

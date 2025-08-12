import { Link } from "@tanstack/react-router";
import Container from "@components/ui/Container";
import Title from "@components/ui/Title";
import { Undo2 } from "lucide-react";

export default function UnderConstruction({ children }: { children?: React.ReactNode }) {
    return (
        <Container className="w-full h-screen flex flex-col items-center justify-center gap-10">
            {children}
            <Title heading="h1" as="h1" className="text-center">
                Under Building
            </Title>
            <Link to="/" className="flex items-center text-center font-bold underline">Back to home <Undo2 /></Link>
        </Container>
    )
}
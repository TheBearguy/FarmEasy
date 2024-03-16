import { useEffect } from 'react'
import { useNavigate } from "react-router";
import { Button } from "@components/common/button";
import { Typography } from "@components/common/typography";
import { Section } from "@components/common/containers";

export default function NotFound() {
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "404 | Not Found";
    }, []);

    return (
        <Section className="flex min-h-screen flex-col items-center justify-center gap-0">
            <Typography variant={"h1"}>404</Typography>
            <Typography variant={"p"}>Page not found</Typography>
            <Button
                onClick={() => navigate("/")}
                className="bg-black mt-4 rounded-md px-4 py-2 text-white">
                Go back
            </Button>
        </Section>
    );
}

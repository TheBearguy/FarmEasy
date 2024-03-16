import image from "/assets/login.webp";

import LoginForm  from "@components/core/auth/login-form";
import { Typography } from "@components/common/typography";
import { Box, Main, Section, Wrapper } from "@/components/ui/common/containers";

export const Login = () => {
    return (
        <Main className="bg-rich-black-900 flex items-center justify-center px-5 py-10 lg:px-20">
            <Section className="lg:gap-15 grid items-center gap-10 max-md:grid-rows-1 md:grid-cols-2">
                <Box className="mx-auto">
                    <Typography
                        variant="h3"
                        className="text-rich-black-5 text-3xl font-semibold leading-9"
                    >
                        Welcome to ImpactAura !
                        <br />
                        Here every action counts towards a better world...
                    </Typography>

                    <Typography
                        variant="p"
                        className="mt-4 text-lg leading-6 [&>*]:block"
                    >
                        <Wrapper className="text-rich-black-100">
                            Empower your impact journey with every step you
                            take🤎
                        </Wrapper>
                        <Wrapper className="font-edu-Sa text-pure-blue-100 font-bold italic">
                            Drive change, one step at a time 💪🏻
                        </Wrapper>
                    </Typography>

                    <LoginForm />
                </Box>
                <Box className="relative mx-auto select-none object-cover">
                    <img
                        src={image}
                        alt="Students"
                        loading="lazy"
                        className="aspect-square"
                    />
                </Box>
            </Section>
        </Main>
    );
};

export default Login;

import image from "/assets/signup.jpeg";

import SignUpForm from "@components/core/auth/signup-form";
import { Typography } from "@components/common/typography";
import { Box, Main, Section, Wrapper } from "@/components/ui/common/containers";

export const SignUp = () => {
    return (
        <Main className="bg-orange-300 text-black flex items-center justify-center px-5 lg:px-20">
            <Section className="lg:gap-15 grid items-center gap-10 max-md:grid-rows-1 md:grid-cols-2">
                <Box className="mx-auto">
                    <SignUpForm />
                </Box>

                <Box className="relative mx-auto select-none object-cover">
                    <Typography
                        variant="h3"
                        className="text-rich-black-900 text-3xl md:text-5xl font-semibold leading-9"
                    >
                        Join FarmEasy today!
                    </Typography>
                    <Typography
                        variant="p"
                        className="mt-4 text-lg leading-6 [&>*]:block"
                    >
                        <Wrapper className="text-rich-black-800">
                            Start your journey towards a brighter tomorrow✨
                        </Wrapper>
                        <Wrapper className="font-edu-sa text-pure-blue-100 font-bold italic"></Wrapper>
                    </Typography>

                    <img
                        src={image}
                        alt="Students"
                        loading="lazy"
                        className="aspect-square mt-5 md:mt-10 rounded-3xl"
                    />
                </Box>
            </Section>
        </Main>
    );
};

export default SignUp;

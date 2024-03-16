import image from "/assets/signup.webp";

import SignUpForm from "@components/core/auth/signup-form";
import { Typography } from "@components/common/typography";
import { Box, Main, Section, Wrapper } from "@/components/ui/common/containers";

export const SignUp = () => {
    return (
        <Main className="bg-rich-black-900 flex items-center justify-center px-5 py-10 lg:px-20">
            <Section className="lg:gap-15 grid items-center gap-10 max-md:grid-rows-1 md:grid-cols-2">
                <Box className="mx-auto">
                    <Typography
                        variant="h3"
                        className="text-rich-black-5 text-3xl font-semibold leading-9"
                    >
                        Elevate your impact. Join ImpactAura today!
                    </Typography>

                    <Typography
                        variant="p"
                        className="mt-4 text-lg leading-6 [&>*]:block"
                    >
                        <Wrapper className="text-rich-black-100">
                            Start your journey towards a brighter tomorrow✨
                        </Wrapper>
                        <Wrapper className="font-edu-sa text-pure-blue-100 font-bold italic">
                            Let's build a better world together🌎
                        </Wrapper>
                    </Typography>

                    <SignUpForm />
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

export default SignUp;

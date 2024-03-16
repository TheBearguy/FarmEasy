import { useNavigate } from "react-router-dom";

function Hero() {
    const navigate = useNavigate();

    return (
        <div className="-mt-[50px] md:my-[100px]">
            <div className="absolute top-[100px] w-[200px] h-[160px] -z-10 inset-0 md:w-[500px]"></div>

            <div className="flex flex-col justify-center mt-20 container mx-auto p-6 font-black md:items-center">
                <h1 className="text-[40px] text-left mb-6 leading-[1.2] md:text-[4.5rem] md:leading-snug md:items-center md:text-center md:-mt-14 ">
                    TO GIVE YOU BACK THE <br />{" "}
                    <span className="text-lavender font-sans">CONTROL</span> OF
                    YOUR{" "}
                    <span className="text-lavender font-sans">CREATION</span>
                </h1>

                <p className="mb-8 text-left text-sm font-medium md:max-w-xl md:text-center md:text-lg ">
                    Choose your musical style and start to lay down, record and
                    share your mix in most secured way possible !!
                </p>

                <div className="pt-5 flex flex-col md:flex-row gap-3 md:gap-5 md:py-10">
                    <button
                        onClick={() => navigate("/signup")}
                        className="md:text-[20px] md:py-4 md:px-8 py-2 px-4 bg-gradient-to-r from-rt-normal-purple-1100 via-pink-400 to-rt-alpha-pink-1100 rounded-xl text-slate-200 hover:bg-dark_purple active:bg-light_purple"
                    >
                        Get Started
                    </button>
                    <button
                        onClick={() => navigate("/artist")}
                        className="md:text-[20px] md:py-4 md:px-4 py-2 px-4 border-2 border-solid border-slate-200 bg-gray-900 text-white rounded-xl bg-light_gray"
                    >
                        Explore more &rarr;
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Hero;

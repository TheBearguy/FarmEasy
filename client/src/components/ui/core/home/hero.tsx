import { useNavigate } from "react-router-dom";

function Hero() {
    const navigate = useNavigate();

    return (
        <div className="-mt-[50px] md:my-[100px]">

            <div className="flex flex-col justify-center mt-2 container mx-auto p-6 font-black md:items-center">
                <h1 className="text-[40px] text-left mb-6 leading-[1.2] md:text-[4.5rem] md:leading-snug md:items-center md:text-center md:-mt-14 ">
                    TO GIVE YOU BACK THE <br />{" "}
                    <span className="text-lavender font-sans">RIGHT</span> YOU{" "}
                    <span className="text-lavender font-sans">DESERVE!</span>
                </h1>

                <p className="mb-8 text-left text-sm font-medium md:max-w-xl md:text-center md:text-lg ">
                    Farmers helping farmers. Buy, sell, connect. Find what you <br />
                    need, share what you have.{" "}
                </p>

                <div className="pt-5 flex flex-col md:flex-row gap-3 md:gap-5 md:py-10">
                    <button
                        onClick={() => navigate("/signup")}
                        className="md:text-[20px] md:py-4 md:px-8 py-2 px-4 bg-gradient-to-r from-rt-normal-green-1100 via-pink-400 to-rt-white-1100 rounded-xl text-black hover:bg-dark_purple active:bg-light_purple hover:border-2 hover:border-black border border-black"
                    >
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Hero;

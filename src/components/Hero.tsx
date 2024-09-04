import cat from "../assets/cat.gif";
import colorful from "../assets/colorful.jpg";
import "@dotlottie/player-component";
export default function Hero() {
  return (
    <>
      <div
        className="hero min-h-screen "
        style={{
          backgroundImage: `url(${colorful})`,
          // "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div>
            <div className="flex flex-wrap justify-center items-end">
              <h1 className="mx-5 sm:mx-5 text-5xl font-bold mb-1">
                Welcome to Mewtopia.
              </h1>
              <span className="inline-block relative top-6">
                <img className="w-24" src={cat} alt="" />
              </span>
            </div>

            <hr className="my-0 mb-2" />
            <p className="mb-5 font-serif">THE UTOPIA FOR MEWS</p>
            <button
              className="btn border-none mt-2 text-white text-lg ring ring-base-300 bg-transparent font-bold
            transition-all duration-400
            hover:bg-gradient-to-bl hover:from-transparent hover:via-teal-400 hover:via-40% hover:to-blue-400 hover:to-100%
            "
            >
              Explore Now!
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

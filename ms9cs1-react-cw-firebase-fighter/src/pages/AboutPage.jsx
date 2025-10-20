import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const AboutPage = () => {
  const [date, setDate] = useState(new Date());

  console.log(date);

  const handleNotify = () => {
    toast.success("🎉 You’ll be notified when the About Us page is ready!", {
      position: "top-center",
      autoClose: 3000,
      theme: "colored",
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="flex flex-col justify-center items-center bg-gradient-to-br from-purple-300 via-purple-500 to-purple-300 min-h-screen text-center">
      <h1 className="drop-shadow-lg font-bold text-white text-5xl md:text-6xl animate-bounce">
        🚀 About Us page is Coming Soon
      </h1>

      <h2 className="my-5 font-bold text-white text-3xl">
        {date.toLocaleTimeString()}
      </h2>

      <p className="mt-5 text-white/90 text-lg animate-pulse">
        Stay tuned! We’re crafting something amazing for you ✨
      </p>

      <div className="mt-10">
        <button
          onClick={handleNotify}
          className="btn-outline animate-[pulse_2s_infinite] btn btn-accent"
        >
          Notify Me
        </button>
      </div>

      <div className="bottom-6 absolute text-white text-sm animate-pulse">
        Developed by <span className="font-bold">Utsho 💎</span>
      </div>
    </div>
  );
};

export default AboutPage;

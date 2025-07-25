import { useState } from "react";

function Projects (){
    const [hover, setHover] = useState(false);
    return (
        <div className="flex justify-center items-center flex-col gap-60 2xl:mt-0 mt-30" id="projects">
            <span className="w-[250px] bg-black/95 outline-1 outline-white/50 p-3 rounded-2xl h-screen" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                <img src="/media/img/lootly-smartphone-img.png" className={`w-full ${hover ? "hidden" : ""}`} alt="" />
                <video src="/media/video/smartphone-lootly-video.mp4" className={`w-full ${hover ? "" : "hidden"}`} autoPlay={hover} loop muted></video>
            </span>
            <span className="w-[250px] bg-black/95 outline-1 outline-white/50 p-3 rounded-2xl h-screen" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                <img src="/media/img/lootly-smartphone-img.png" className={`w-full ${hover ? "hidden" : ""}`} alt="" />
                <video src="/media/video/smartphone-lootly-video.mp4" className={`w-full ${hover ? "" : "hidden"}`} autoPlay={hover} loop muted></video>
            </span>
        </div>
    )
}

export default Projects
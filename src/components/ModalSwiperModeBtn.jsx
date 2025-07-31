import { MdPhoneAndroid, MdDesktopWindows } from "react-icons/md";

const ModalSwiperModeBtn = ({galleryDeskMode, setGalleryDeskMode}) => {
    const changeMode = () => {
        if (galleryDeskMode) {
            setGalleryDeskMode(false);
        } else {
            setGalleryDeskMode(true);
        }
    }
    return (
        <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" className="sr-only peer" onChange={changeMode} checked={!galleryDeskMode}/>
        <div className="group peer ring-0 bg-neutral-900 rounded-full outline-none duration-300 after:duration-300 w-20 h-8 shadow-md peer-checked:bg-white peer-focus:outline-none
            after:content-[''] after:rounded-full after:absolute 
            after:bg-white peer-checked:after:bg-neutral-900 after:outline-none after:h-6 after:w-6 
            after:top-1 after:left-1 peer-checked:after:translate-x-12 peer-hover:after:scale-95">
            
            <MdDesktopWindows className="absolute top-1 left-[44px] text-white w-6 h-6 transition-colors duration-300 peer-checked:text-neutral-900" />

            <MdPhoneAndroid className="absolute top-1 left-1 text-neutral-900 w-6 h-6 transition-colors duration-300" />
            
        </div>
        </label>
    );
};

export default ModalSwiperModeBtn;



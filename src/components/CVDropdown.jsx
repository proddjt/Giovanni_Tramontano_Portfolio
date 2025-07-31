import { useState, useEffect } from 'react';
import { FaFileDownload } from 'react-icons/fa';
import { useTranslation } from "react-i18next";
import Flag from "react-world-flags"

const CVDropdown = () => {
  const [open, setOpen] = useState(false);

  const toggleDropdown = () => setOpen(!open);

  const handleClickOutside = (e) => {
    if (!e.target.closest('#cvDropdownButton')) {
      setOpen(false);
    }
  };

  const { t } = useTranslation();
  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left">
      <button
        id="cvDropdownButton"
        onClick={toggleDropdown}
        className="card__btn flex justify-center items-center gap-1"
      >
        <FaFileDownload /> {t("download_cv")}
      </button>

      {open && (
        <div className="absolute mt-2 w-40 bg-white border rounded shadow-lg z-10 text-sm">
          <a
            href="/media/cv_tramontano_it.pdf"
            download
            className="flex items-center gap-1 px-4 py-2 text-gray-800 hover:bg-gray-100 font-commit"
          >
            <Flag code="IT" height="30" width="24"/> Italiano
          </a>
          <a
            href="/media/cv_tramontano_eng.pdf"
            download
            className="flex items-center gap-1 px-4 py-2 text-gray-800 hover:bg-gray-100 font-commit"
          >
            <Flag code="US" height="30" width="24"/>
            English
          </a>
        </div>
      )}
    </div>
  );
};

export default CVDropdown;

import { useAppContext } from "@/context/app/app-context";

const ChangeTheme = () => {
  const { language, changeLanguage } = useAppContext();
  return (
    <>
      <button
        onClick={() => changeLanguage("fa")}
        className={`${
          language === "fa" && "text-yellow-400"
        } hover:text-white anm-g`}
      >
        فارسی
      </button>
      <hr className="h-[0.099rem] w-4 border-0 bg-slate-700 rotate-90" />
      <button
        onClick={() => changeLanguage("en")}
        className={`${
          language === "en" && "text-yellow-400"
        } hover:text-white anm-g`}
      >
        English
      </button>
    </>
  );
};

export default ChangeTheme;

import { AppReducerType } from "@/types/appContext";
import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";
import appReducer from "./app-reducer";
import { useTranslation } from "react-i18next";

interface AppContextType extends AppReducerType {
  changeLanguage: (language: string) => void;
}

const initialState: AppReducerType = {
  language: localStorage.getItem("lng") || "fa",
  changeLanguage: () => {},
};
const AppContext = createContext<AppContextType | undefined>(undefined);

const AppProvider = ({ children }: PropsWithChildren) => {
  const { i18n } = useTranslation();
  const [state, dispatch] = useReducer(appReducer, initialState);
  const changeLanguage = (language: string) => {
    dispatch({ type: "CHANGE_LANGUAGE", payload: language });
  };
  useEffect(() => {
    i18n.changeLanguage(state.language);
    localStorage.setItem("lng", state.language);
    const documentElem = document.documentElement;
    documentElem.setAttribute("dir", state.language === "fa" ? "rtl" : "ltr");
    documentElem.setAttribute("lang", state.language === "fa" ? "fa" : "en");
  },[state.language]);
  return (
    <AppContext.Provider value={{ ...state, changeLanguage }}>
      {children}
    </AppContext.Provider>
  );
};
const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("your Context has problem");
  } else {
    return context;
  }
};

export { AppProvider, useAppContext };

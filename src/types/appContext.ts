export type AppReducerType = {
  language: string;
  changeLanguage: (language: string) => void;
};

export type AppReducerActionType ={
    payload : string,
    type:string
}
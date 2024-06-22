type TitleBoxType = {
  children: string;
  sideText?: string;
  className?: string;
};
const TitleBox = ({ children, sideText, className }: TitleBoxType) => {
  return (
    <h3 className={`${className} font-extrabold text-[23px]`}>
      {children}{" "}
      {sideText && <span className="text-yellow-400">{sideText}</span>}
    </h3>
  );
};

export default TitleBox;

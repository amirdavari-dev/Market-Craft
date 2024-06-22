import { ReactNode } from "react";

type GuideLayoutType = {
  children: ReactNode;
  title: string;
};
const GuideLayout = ({ children, title }: GuideLayoutType) => {
  return (
    <div>
      <div>
        <h4 className="text-center">{title}</h4>
      </div>
      <div className="flex flex-col items-center gap-y-2 px-5">
        {children}
      </div>
    </div>
  );
};

export default GuideLayout;

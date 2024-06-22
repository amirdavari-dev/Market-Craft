import { LuPhone } from "react-icons/lu";
import { GrLocation } from "react-icons/gr";
import { HiOutlineMail } from "react-icons/hi";
import { ReactNode } from "react";
type ContactInfoType = {
  children: ReactNode;
  desc: string;
  icon: "phone" | "location" | "email";
};
const ContactInfo = ({ children, desc, icon }: ContactInfoType) => {

  return (
    <div className="col-span-1 text-start px-8 text-sm">
      <div className="grid grid-rows-3 grid-flow-col gap-x-4 gap-y-2">
        <div className="row-span-3 flex justify-end items-start">
          {icon === "phone" ? (
            <LuPhone size={20} className="text-white" />
          ) : icon === "location" ? (
            <GrLocation size={20} className="text-white" />
          ) : icon === "email" ? (
            <HiOutlineMail size={20} className="text-white" />
          ) : (
            ""
          )}
        </div>
        <div className="col-span-12">
          <h5>{children}</h5>
        </div>
        <div className="row-span-1 col-span-12">
          <p>{desc}</p>
        </div>
      </div>
      {/* <div className="w-full grid grid-rows-12 grid-flow-col gap-2">
        <div className="row-span-1">
        </div>
        <div className="col-span-1">amir</div>
        <div className="row-span-2 col-span-2"> ali</div>
      </div> */}
    </div>
  );
};

export default ContactInfo;

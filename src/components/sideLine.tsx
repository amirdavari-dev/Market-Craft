const SideLine = ({ position ,changePosition =false }: { position?: number, changePosition? : boolean }) => {
  return (
    <div
      className={`z-30 flex flex-col items-center gap-y-2 absolute ${changePosition ? `top-[${position}%]` : "top-[20%]"} right-10 translate-x-0 translate-y-[50%]`}
    >
      <hr className="h-32 w-[0.099rem] border-0 bg-gradient-to-b from-yellow-200 to-white" />
      <hr className="h-10 w-[0.099rem] border-0 bg-gradient-to-b from-yellow-200 to-white" />
    </div>
  );
};

export default SideLine;

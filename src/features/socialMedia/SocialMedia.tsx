import cover from "@/assets/images/insta.png";
const SocialMedia = () => {
  return (
    <div className="col-span-4 px-5 flex justify-center items-center">
      <div className="py-3 px-4">
        <div>
          <a className="w-[362px] h-[433px] min-w-[362px] min-h-[433px] max-w-[362px] max-h-[433px]" href="#">
            <img className="w-full h-full" src={cover} alt="" />
          </a>  
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;

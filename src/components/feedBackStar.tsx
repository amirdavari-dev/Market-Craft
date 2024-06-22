import { IoIosStar } from "react-icons/io";
type FeedBackStarType = {
  countStar: number;
};
const FeedBackStar = ({ countStar }: FeedBackStarType) => {
  const starValues = Array.from({ length: countStar }, (_, index) => {
    index + 1;
  });
  const overStar = Array.from(
    { length: 5 - starValues.length },
    (_, index) => index + 1
  );
  return (
    <>
      {overStar.map((item) => {
        return (
          <span key={item}>
            <IoIosStar className="text-slate-300" />
          </span>
        );
      })}
      {starValues.map(() => {
        return (
          <span>
            <IoIosStar className="text-yellow-400" />
          </span>
        );
      })}
    </>
  );
};

export default FeedBackStar;

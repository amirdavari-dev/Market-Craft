import CourseCard from "./courseCard";

const CourseLayout = () => {
  return (
    <div className="grid grid-cols-12 gap-y-3 py-3 text-white font-thin">
      <CourseCard />
      <CourseCard />
      <CourseCard />
    </div>
  );
};

export default CourseLayout;

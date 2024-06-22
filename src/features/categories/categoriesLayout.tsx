import Category from "./category";

const CategoriesLayout = () => {
  return (
    <div className="grid grid-cols-12 gap-y-3 py-3 text-white font-thin">
      <Category />
      <Category />
      <Category />
    </div>
  );
};

export default CategoriesLayout;

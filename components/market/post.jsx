export default ({ name, image }) => {
  return (
    <div className="flex flex-col items-center cursor-pointer">
      <div className="p-1 bg-[#fff] rounded-full border-2 border-violet-700 flex justify-center items-center m-3">
        <div className="h-[65px] w-[65px]">
          <img
            src={image}
            alt={`${name}-image`}
            className="h-full w-full rounded-full"
          />
        </div>
      </div>
      <h5 className="text-sm -mt-2">{name}</h5>
    </div>
  );
};

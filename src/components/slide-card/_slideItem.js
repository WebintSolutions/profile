import {
  CheckIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid";

const SlideItemComponent = ({
  imgSrc,
  title,
  desc,
  handleOnClick = () => {},
  btnColorClass="btn-warning",
  borderColor = "border-gray-100",
  bgColor = "bg-white",
  status = "Solved!",
}) => {
  return (
    <>
      <article className={`rounded-xl border-2 ${borderColor} ${bgColor} mt-4`}>
        <div className="flex items-start gap-4 p-4 sm:p-6 lg:p-8">
          <a href="#" className="block shrink-0">
            <img
              alt="Speaker"
              src={imgSrc}
              className="h-16 w-16 rounded-lg object-cover"
            />
          </a>

          <div className="text-left">
            <h3 className="font-medium sm:text-lg">
              <a href="#" className="hover:underline">
                {title}
              </a>
            </h3>

            <p className="line-clamp-2 text-sm text-gray-700">{desc}</p>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex justify-start w-full p-2">
            <button className={`btn ${btnColorClass} btn-sm btn-circle m-1 text-white`} onClick={() => handleOnClick(false)}>
              <ChevronLeftIcon className="h-3 w-3" />
            </button>
            <button className={`btn ${btnColorClass} btn-sm btn-circle m-1 text-white`} onClick={() => handleOnClick(true)}>
              <ChevronRightIcon className="h-3 w-3" />
            </button>
          </div>
          <strong className={`inline-flex items-center rounded-tl-xl min-w-max rounded-br-xl ${btnColorClass} py-3.5 px-6 text-white`}>
            <CheckIcon className="h-4 w-4" />
            <span className="text-[10px] font-medium sm:text-xs">{status}</span>
          </strong>
        </div>
      </article>
    </>
  );
};

export default SlideItemComponent;

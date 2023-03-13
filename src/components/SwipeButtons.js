import { AiOutlineReload } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { BsStarFill } from "react-icons/bs";
import { AiFillHeart, AiFillThunderbolt } from "react-icons/ai";

export default function SwipeButtons() {
  return (
    <div className="fixed bottom-[10vh] flex w-full justify-evenly">
      <div className="h-12 w-12 bg-white rounded-full px-3 py-3 shadow-lg border flex justify-center items-center">
        <AiOutlineReload color="#8E8358" />
      </div>
      <div className="h-12 w-12 bg-white rounded-full px-3 py-3 shadow-lg border flex justify-center items-center">
        <IoMdClose color="#5A2328" />
      </div>
      <div className="h-12 w-12 bg-white rounded-full px-3 py-3 shadow-lg border flex justify-center items-center">
        <BsStarFill color="#7A9B76" />
      </div>
      <div className="h-12 w-12 bg-white rounded-full px-3 py-3 shadow-lg border flex justify-center items-center">
        <AiFillHeart color="#942911" />
      </div>
      <div className="h-12 w-12 bg-white rounded-full px-3 py-3 shadow-lg border flex justify-center items-center">
        <AiFillThunderbolt color="#985F99" />
      </div>
    </div>
  );
}

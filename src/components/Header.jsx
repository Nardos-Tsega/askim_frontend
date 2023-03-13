import { BsFillPersonFill, BsFillChatLeftFill } from "react-icons/bs";
export default function Header() {
  return (
    <div className="h-12 max-w-5xl container mx-auto py-4  flex justify-between items-center">
      <div>
        <BsFillPersonFill />
      </div>
      <h1 className="font-bold font-script text-4xl">askim</h1>
      <div>
        <BsFillChatLeftFill />
      </div>
    </div>
  );
}

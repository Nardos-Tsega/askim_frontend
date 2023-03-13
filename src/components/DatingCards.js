import { useState } from "react";
import DatingCard from "react-tinder-card";

export default function DatingCards() {
  const [people, setPeople] = useState([
    {
      name: "Random Guy",
      imgUrl:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    },
    {
      name: "Another Guy",
      imgUrl:
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    },
    {
      name: "Random Girl",
      imgUrl:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    },
    {
      name: "Another Girl",
      imgUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    },
  ]);

  const swiped = (direction, nameToDelete) => {
    console.log("receiving " + nameToDelete);
  };
  const outOfFrame = (name) => {
    console.log(name + " left the screen!!");
  };

  return (
    <div className="flex flex-col items-center justify-center mt-[10vh]">
      <div className="w-full h-full flex justify-center mt-[25vh] items-center">
        {people.map((person) => (
          <DatingCard
            className="absolute"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.imgUrl})` }}
              className="relative bg-white w-[480px] p-20px max-w-[85vw] h-[60vh] shadow-md rounded-2xl bg-cover"
            >
              <h3 className="absolute bottom-0 m-6 text-xl text-white">
                {person.name}
              </h3>
            </div>
          </DatingCard>
        ))}
      </div>
    </div>
  );
}

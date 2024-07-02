import { useRef } from "react";
import { TeamProps } from "../../interfaces/TeamProps";
import Ball from "../UI/Ball";

function Team({ team }: { team: TeamProps }) {
  const ref = useRef(null);
  return (
    <div
      className={
        "flex gap-16 " + (team.order === "reverse" && "flex-row-reverse")
      }
      ref={ref}
    >
      <div className="flex h-min basis-1/2 flex-col gap-8">
        <h4 className="text-3xl font-semibold">
          Build the right team to scale
        </h4>
        <p className="text-lg">
          Finding the right talent is not easy. We help you find the talent that
          suits your needs, follows your processes, and sticks with you long
          term (not the case with freelancers)
        </p>
        <p className="text-lg">
          Our{" "}
          <span className="bg-gradient-to-r from-pink-700 to-purple-900 bg-clip-text text-transparent">
            delivery model
          </span>{" "}
          helps you cut costs and deliver within budget.
        </p>
        <div className="flex gap-5">
          <div className="w-1 bg-gradient-to-b from-pink-600 to-purple-900"></div>
          <div className="bg-gradient-to-tr from-pink-600 to-purple-900 bg-clip-text text-[16px] text-sm italic text-transparent">
            "Simform is quick to identify larger problem with the Software so we
            decided to expand our scope to build new modules"
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="h-10 w-10 overflow-hidden rounded-full">
            <img
              src={team.ceoImage}
              alt="CEO 1"
              className="block h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-1">
            <div className="text-[16px] font-semibold">Jeewa Markram</div>
            <div className="text-[13px] text-gray-700">CEO</div>
          </div>
        </div>
      </div>
      <div className="relative h-[26rem] w-full basis-1/2 shadow-sm">
        <Ball
          className="-left-5 bottom-10 z-10"
          divRef={ref}
          animatePos="top"
        />
        <Ball
          className="-right-5 -top-10 z-10 from-orange-400 to-amber-400"
          divRef={ref}
          animatePos="top"
        />

        <img
          src={team.teamImage}
          className="relative z-20 block h-full w-full rounded-xl object-cover"
        />
      </div>
    </div>
  );
}

export default Team;

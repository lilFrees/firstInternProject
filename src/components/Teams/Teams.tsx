import Line from "../UI/Line";
import Team from "./Team";
import team1 from "../../assets/teams/team1.png";
import team2 from "../../assets/teams/team2.png";
import team3 from "../../assets/teams/team3.png";

import ceo1 from "../../assets/teams/ceo1.png";
import ceo2 from "../../assets/teams/ceo2.png";
import ceo3 from "../../assets/teams/ceo3.png";
import { TeamProps } from "../../interfaces/TeamProps";

const teams: TeamProps[] = [
  {
    id: 1,
    teamImage: team1,
    ceoImage: ceo1,
  },
  {
    id: 2,
    teamImage: team2,
    ceoImage: ceo2,
    order: "reverse",
  },
  {
    id: 3,
    teamImage: team3,
    ceoImage: ceo3,
  },
];

function Teams() {
  return (
    <div className="mx-auto flex max-w-[1145px] flex-col gap-12 px-2 py-14">
      <div className="flex flex-col items-center gap-4 text-center">
        <Line />
        <h2 className="text-4xl">
          <span>Way of building</span>
          <br />
          <span className="mt-4 block font-bold">Great Software</span>
        </h2>
      </div>
      <div className="flex flex-col gap-20">
        {teams.map((team) => (
          <Team team={team} key={team.id} />
        ))}
      </div>
    </div>
  );
}

export default Teams;

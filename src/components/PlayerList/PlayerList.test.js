import React from "react";
import PlayerList from "./PlayerList";
import renderer from "react-test-renderer";

describe("PlayerList spec", () => {
  const mockPlayers = [
    {
      id: 0,
      name: "LeBron James",
      team: "LOS ANGELES LAKERS",
      position: "SF",
      starred: true
    },
    {
      id: 1,
      name: "Kevin Duran",
      team: "GOLDEN STATE WARRIORS",
      position: "SF",
      starred: false
    },
    {
      id: 2,
      name: "Anthony Davis",
      team: "NEW ORLEANS PELICANS",
      position: "PF",
      starred: false
    },
    {
      id: 3,
      name: "Stephen Curry",
      team: "GOLDEN STATE WARRIORS",
      position: "PG",
      starred: false
    },
    {
      id: 4,
      name: "James Harden",
      team: "HOUSTON ROCKETS",
      position: "SG",
      starred: false
    },
    {
      id: 5,
      name: "Kawhi Leonard",
      team: "TORONTO RAPTORS",
      position: "SF",
      starred: false
    }
  ];
  it("render PlayerList with Data correctly", () => {
    const wrapper = renderer
      .create(<PlayerList players={mockPlayers} actions={{}} currentPage={1} />)
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  it("render PlayerList without Data correctly", () => {
    const wrapper = renderer
      .create(<PlayerList players={[]} actions={{}} currentPage={1} />)
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});

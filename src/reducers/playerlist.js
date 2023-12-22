import * as types from "../constants/ActionTypes";

const initialState = {
  // 这里相当于是数据库
  playersById: [
    {
      name: "LeBron James",
      team: "LOS ANGELES LAKERS",
      position: "SF",
      starred: true,
    },
    {
      name: "Kevin Duran",
      team: "GOLDEN STATE WARRIORS",
      position: "SF",
      starred: false,
    },
    {
      name: "Anthony Davis",
      team: "NEW ORLEANS PELICANS",
      position: "PF",
      starred: false,
    },
    {
      name: "Stephen Curry",
      team: "GOLDEN STATE WARRIORS",
      position: "PG",
      starred: false,
    },
    {
      name: "James Harden",
      team: "HOUSTON ROCKETS",
      position: "SG",
      starred: false,
    },
    {
      name: "Kawhi Leonard",
      team: "TORONTO RAPTORS",
      position: "SF",
      starred: false,
    },
  ],
  total: 6,
  // 这里是给前端显示的数据
  showPlayersById: [],
};

export default function players(state = initialState, action) {
  switch (action.type) {
    case types.ADD_PLAYER:
      const { playerInfo } = action;
      return {
        ...state,
        playersById: [
          {
            name: playerInfo.name,
            team: playerInfo.team,
            position: playerInfo.position,
          },
          ...state.playersById,
        ],
      };
    case types.DELETE_PLAYER:
      return {
        ...state,
        playersById: state.playersById.filter(
          (item, index) => index !== action.id
        ),
      };
    case types.STAR_PLAYER:
      let players = [...state.playersById];
      let player = players.find((item, index) => index === action.id);
      player.starred = !player.starred;
      return {
        ...state,
        playersById: players,
      };

    case types.GET_LATEST_PLAYER_LIST:
      const { page, pageSize, keyword } = action;
      // 先根据 keyword 去过滤数据
      const data =
        state.playersById.filter((player) =>
          player?.name?.toLowerCase()?.includes(keyword?.toLowerCase())
        ) || [];

      // 计算切片的起始和结束索引
      const startIndex = (page - 1) * pageSize;
      const endIndex = startIndex + pageSize;

      // 获取对应页码的数据切片
      const updatedPlayers = data.slice(startIndex, endIndex);

      // 这里是给前端返回的数据
      return {
        ...state,
        showPlayersById: updatedPlayers,
        total: data?.length || 0,
      };

    default:
      return state;
  }
}

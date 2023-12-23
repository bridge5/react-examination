import * as types from "../constants/ActionTypes";

const initialState = {
  // 这里相当于是数据库
  playersById: [
    {
      id: 1,
      name: "LeBron James",
      team: "LOS ANGELES LAKERS",
      position: "SF",
      starred: true,
    },
    {
      id: 2,
      name: "Kevin Duran",
      team: "GOLDEN STATE WARRIORS",
      position: "SF",
      starred: false,
    },
    {
      id: 3,
      name: "Anthony Davis",
      team: "NEW ORLEANS PELICANS",
      position: "PF",
      starred: false,
    },
    {
      id: 4,
      name: "Stephen Curry",
      team: "GOLDEN STATE WARRIORS",
      position: "PG",
      starred: false,
    },
    {
      id: 5,
      name: "James Harden",
      team: "HOUSTON ROCKETS",
      position: "SG",
      starred: false,
    },
    {
      id: 6,
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
    // 添加
    case types.ADD_PLAYER:
      const { playerInfo } = action;

      // 将时间戳作为默认id
      var id = new Date().getTime();

      return {
        ...state,
        playersById: [
          {
            id,
            name: playerInfo.name,
            team: playerInfo.team,
            position: playerInfo.position,
            starred: false,
          },
          ...state.playersById,
        ],
      };

    // 删除
    case types.DELETE_PLAYER:
      return {
        ...state,
        playersById: state.playersById.filter(
          (item) => item?.id !== action?.id
        ),
      };

    // 收藏
    case types.STAR_PLAYER:
      try {
        const { id } = action;
        let clonePlayers = JSON.parse(JSON.stringify(state.playersById));
        let player = clonePlayers.find((item) => item?.id === id);
        player.starred = !player.starred;
        return {
          ...state,
          playersById: clonePlayers,
        };
      } catch (error) {
        console.error(error);
      }

    // 获取数据列表
    case types.GET_LATEST_PLAYER_LIST:
      const { page, pageSize, keyword, position, team } = action;
      // 先根据查询条件去过滤数据
      const data =
        state.playersById.filter(
          (player) =>
            player?.name?.toLowerCase()?.includes(keyword?.toLowerCase()) &&
            player?.position?.includes(position) &&
            player?.team?.includes(team)
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

export default {
  namespace: 'HomeModel',
  state: {
    players: [
      {
        playerName: 'LeBron James',
        team: 'LOS ANGELES LAKERS',
        position: 'SF',
        starred: true,
      },
      {
        playerName: 'Kevin Duran',
        team: 'GOLDEN STATE WARRIORS',
        position: 'SF',
        starred: false,
      },
      {
        playerName: 'Anthony Davis',
        team: 'NEW ORLEANS PELICANS',
        position: 'PF',
        starred: false,
      },
      {
        playerName: 'Stephen Curry',
        team: 'GOLDEN STATE WARRIORS',
        position: 'PG',
        starred: false,
      },
      {
        playerName: 'James Harden',
        team: 'HOUSTON ROCKETS',
        position: 'SG',
        starred: false,
      },
      {
        playerName: 'Kawhi Leonard',
        team: 'TORONTO RAPTORS',
        position: 'SF',
        starred: false,
      },
    ],
  },
  effects: {
    * addPlayer({ payload }, { put }) {
      yield put({
        type: 'addPlayerState',
        payload,
      });
    },
    * setLocalPlayer({ payload }, { put }) {
      yield put({
        type: 'setLocalPlayerState',
        payload,
      });
    },
    *toggleStarPlayer({ payload }, { put }) {
      yield put({
        type: 'toggleStarPlayerState',
        payload,
      });
    },
    *deletePlayer({ payload }, { put }) {
      yield put({
        type: 'deletePlayerState',
        payload,
      });
    },
  },
  reducers: {
    addPlayerState(state, { payload }) {
      let { players: originPlayers } = state;
      const players = JSON.parse(JSON.stringify(originPlayers));
      players.push(payload);
      localStorage.setItem('players', JSON.stringify(players));
      return { ...state, players };
    },
    setLocalPlayerState(state, { payload: players }) {
      return { ...state, players };
    },
    toggleStarPlayerState(state, { payload: { playerIndex } }) {
      const players = JSON.parse(JSON.stringify(state.players));
      players[playerIndex].starred = !players[playerIndex].starred;
      localStorage.setItem('players', JSON.stringify(players));
      return { ...state, players };
    },
    deletePlayerState(state, { payload: { playerIndex } }) {
      const players = JSON.parse(JSON.stringify(state.players));
      players.splice(playerIndex, 1);
      localStorage.setItem('players', JSON.stringify(players));
      return { ...state, players };
    },
  },
};

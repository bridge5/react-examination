import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  useMount,
  useUpdateDebounceEffect,
  useUpdateEffect,
  useStorageState,
} from "../hooks";

import {
  PlayerList,
  AddPlayerInput,
  Pagination,
  SearchContent,
} from "../components";

import {
  addPlayer,
  deletePlayer,
  starPlayer,
  getLatestPlayerData,
} from "../actions/PlayersActions";

import { PAGE_SIZE } from "../constants";

import styles from "./PlayerListApp.module.css";

const PlayerListApp = () => {
  const dispatch = useDispatch();

  const { showPlayersById, total } = useSelector((state) => state?.playerlist);

  // 当前的筛选参数，这里可以防止刷新搜索条件丢失，后期甚至可以做到通过 url 中的参数来定位搜索条件
  const [filterParams, setFilterParams] = useStorageState("filterParams", {
    page: 1,
    pageSize: PAGE_SIZE,
    keyword: "",
    position: "",
    team: "",
  });

  // 获取最新的球员列表
  const getPlayerDataList = (params = filterParams) => {
    dispatch(getLatestPlayerData(params));
  };

  // 添加球员
  const handleAddPlayer = (playerInfo) => {
    dispatch(addPlayer(playerInfo));
  };

  // 删除球员
  const handleDeletePlayer = (playerId) => {
    dispatch(deletePlayer(playerId));
  };

  // 收藏球员
  const handleStarPlayer = (playerId) => {
    dispatch(starPlayer(playerId));
  };

  // 初始渲染时，请求列表数据
  useMount(() => {
    getPlayerDataList(filterParams);
  });

  // 这里关注点分离，当改变条件时，各自做好各自的 setFilterParams就行，
  // 忽略首次渲染，当改变这些条件时，需要重置分页
  useUpdateEffect(() => {
    setFilterParams({ ...filterParams, page: 1 });
  }, [
    filterParams?.pageSize,
    filterParams?.keyword,
    filterParams?.position,
    filterParams?.team,
  ]);

  // 忽略首次渲染，当这些参数改变时，重新请求数据（该 hook 有防抖的功能）
  useUpdateDebounceEffect(
    () => {
      getPlayerDataList(filterParams);
    },
    [
      filterParams?.page,
      filterParams?.pageSize,
      filterParams?.keyword,
      filterParams?.position,
      filterParams?.team,
    ],
    300
  );

  // TODO：这里由于没有安装redux-thunk，导致所有的action都是同步的，无法模拟异步的情况
  // 因此在这里做了特殊处理，对删除场景时，如果点击删除了该页的最后一项数据，那么需要重置到前一页
  // useEffect(() => {
  //   if (showPlayersById?.length === 0 && filterParams?.page > 1) {
  //     setFilterParams({ ...filterParams, page: filterParams?.page - 1 });
  //   }
  // }, [showPlayersById]);

  return (
    <div className={styles.playerListApp}>
      <h1>NBA Players</h1>

      <AddPlayerInput
        handleAddPlayer={handleAddPlayer}
        // 添加成功之后的回调函数
        addPlayerSuccessCallback={() => getPlayerDataList(filterParams)}
      />
      <div
        style={{
          background: "#ddd",
          height: "2px",
          width: "100%",
          margin: "20px 0",
        }}
      />
      <SearchContent
        filterParams={filterParams}
        setFilterParams={setFilterParams}
      />
      <div
        style={{
          background: "#ddd",
          height: "2px",
          width: "100%",
          margin: "20px 0",
        }}
      />
      <PlayerList
        players={showPlayersById || []}
        // 删除、收藏、以及成功后的回调
        handleDeletePlayer={handleDeletePlayer}
        handleStarPlayer={handleStarPlayer}
        successCallback={() => getPlayerDataList(filterParams)}
      />
      <Pagination
        current={filterParams?.page}
        pageSize={filterParams?.pageSize}
        total={total}
        hideSinglePage={true}
        onChange={(newPage) =>
          setFilterParams({ ...filterParams, page: newPage })
        }
      />
    </div>
  );
};

export default PlayerListApp;

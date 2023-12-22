import React from "react";
import { connect } from "react-redux";

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

import styles from "./PlayerListApp.css";

// 每页显示的条目数
export const PAGE_SIZE = 5;

const PlayerListApp = ({ showPlayersById, total, ...rest }) => {
  // 当前的筛选参数，这里可以防止刷新搜索条件丢失，后期甚至可以做到通过 url 中的参数来定位搜索条件
  const [filterParams, setFilterParams] = useStorageState("filterParams", {
    page: 1,
    pageSize: PAGE_SIZE,
    keyword: "",
  });

  // 这里是接口定义
  const actions = {
    addPlayer: rest.addPlayer,
    deletePlayer: rest.deletePlayer,
    starPlayer: rest.starPlayer,
    getLatestPlayerData: (params = filterParams) =>
      rest.getLatestPlayerData(params),
  };

  // 初始渲染时，请求列表数据
  useMount(() => {
    actions.getLatestPlayerData(filterParams);
  });

  // 当改变 pageSize、keyword 时，需要重置分页
  useUpdateEffect(() => {
    setFilterParams({ ...filterParams, page: 1 });
  }, [filterParams?.keyword, filterParams?.pageSize]);

  // 使用防抖的hook，当这些参数改变时，重新请求数据
  useUpdateDebounceEffect(
    () => {
      // 当搜索条件改变的时候，重置页码，并重新请求数据
      actions.getLatestPlayerData(filterParams);
    },
    [filterParams?.keyword, filterParams?.page, filterParams?.pageSize],
    300
  );

  return (
    <div className={styles.playerListApp}>
      <h1>NBA Players</h1>

      <AddPlayerInput
        addPlayer={actions.addPlayer}
        // 添加成功之后的回调函数
        addPlayerSuccessCallback={() =>
          actions.getLatestPlayerData(filterParams)
        }
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
      <PlayerList players={showPlayersById || []} actions={actions} />
      <Pagination
        current={filterParams?.page}
        pageSize={filterParams?.pageSize}
        total={total}
        onChange={(newPage) =>
          setFilterParams({ ...filterParams, page: newPage })
        }
      />
    </div>
  );
};

const mapStateToProps = (store) => {
  return store?.playerlist;
};

export default connect(mapStateToProps, {
  addPlayer,
  deletePlayer,
  starPlayer,
  getLatestPlayerData,
})(PlayerListApp);

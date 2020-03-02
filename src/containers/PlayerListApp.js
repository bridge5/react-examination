import React, { useState, useEffect, useCallback } from "react";
import styles from "./PlayerListApp.css";
import { connect } from "react-redux";

import { addPlayer, deletePlayer, starPlayer } from "../actions/PlayersActions";
import { PlayerList, AddPlayerInput } from "../components";
import ReactPaginate from "react-paginate";
import classnames from "classnames";

const PAGE_SIZE = 5;
function PlayerListApp(props) {
  const {
    playerlist: { playersById = [] }
  } = props;
  const actions = {
    addPlayer: props.addPlayer,
    deletePlayer: props.deletePlayer,
    starPlayer: props.starPlayer
  };
  const [activePage, changeActivePage] = useState(0);
  const [listGroup, changeListGroup] = useState([]);
  const [totalPage, changeTotalPage] = useState(0);
  const [noData, changeNoData] = useState(false);
  const [filterParams, changeFilterParams] = useState({
    position: 'none'
  });

  useEffect(() => {
    let listData = playersById;
    if (filterParams.position !== 'none') listData = listData.filter(i => {
      return i.position === filterParams.position
    });
    const totalPage = Math.ceil(listData.length / PAGE_SIZE);
    const listGroup = listData.reduce(
      (pre, current, currentIndex) => {
        const currentGroup = (currentIndex / PAGE_SIZE) | 0;
        pre[currentGroup].push(current);
        return pre;
      },
      Array(totalPage)
        .fill(0)
        .map(_ => [])
    );
    changeListGroup(listGroup);
    changeTotalPage(totalPage);
  }, [playersById, filterParams]);

  useEffect(() => {
    if (!listGroup[activePage] && activePage !== 0) {
      changeActivePage(activePage - 1);
    }
    changeNoData(!listGroup[activePage]);
  }, [listGroup, activePage]);

  const handlePageClick = useCallback(({ selected }) => {
    changeActivePage(selected);
  }, []);
  return (
    <div className={styles.playerListApp}>
      <h1>NBA Players</h1>
      <div className="filterBox">
        <span>filter: </span>
        <select
          name="position"
          value={filterParams.position}
          placeholder="select filter player"
          className={classnames("form-control")}
          onChange={(e) => {
            changeFilterParams({
              position: e.target.value
            });
          }}
        >
          <option value="none"></option>
          <option value="SF">SF</option>
          <option value="PG">PG</option>
        </select>
      </div>
      <AddPlayerInput addPlayer={actions.addPlayer} />
      {noData ? (
        <div className="noData">The list have no value. You can add the player you liked.</div>
      ) : (
          <>
            <PlayerList players={listGroup[activePage] || []} actions={actions} />
            <ReactPaginate
              previousLabel={"previous"}
              nextLabel={"next"}
              initialPage={0}
              onPageChange={handlePageClick}
              containerClassName={"pagination"}
              pageCount={totalPage}
              activeClassName={"active"}
              pageRangeDisplayed={10}
            />
          </>
        )}
    </div>
  );
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, {
  addPlayer,
  deletePlayer,
  starPlayer
})(PlayerListApp);

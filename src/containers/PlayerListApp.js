import React, { useState, useEffect, useCallback } from "react";
import styles from "./PlayerListApp.css";
import { connect } from "react-redux";

import { addPlayer, deletePlayer, starPlayer } from "../actions/PlayersActions";
import { PlayerList, AddPlayerInput } from "../components";
import ReactPaginate from "react-paginate";

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

  useEffect(() => {
    const totalPage = Math.ceil(playersById.length / PAGE_SIZE);
    const listGroup = playersById.reduce(
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
  }, [playersById]);

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

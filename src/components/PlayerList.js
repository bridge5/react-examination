import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./PlayerList.css";
import PlayerListItem from "./PlayerListItem";
import { Pagination } from "antd";
import { connect } from "react-redux";

export const PlayerList = props => {
  const { players, visible } = props;
  const [current, setCurrent] = useState(1);
  const [data, setData] = useState([]);
  const total = players.length;

  useEffect(() => {
    setData(players.slice((current - 1) * 5, current * 5));
  }, [players, current]);

  useEffect(() => {
    setCurrent(1);
  }, [visible]);

  const onChange = value => {
    setCurrent(value);
  };
  return (
    <>
      <ul className={styles.playerList}>
        {data.map((player, index) => {
          return (
            <PlayerListItem
              key={index}
              id={index}
              name={player.name}
              team={player.team}
              position={player.position}
              starred={player.starred}
              {...props.actions}
            />
          );
        })}
      </ul>
      <Pagination
        showQuickJumper
        defaultCurrent={1}
        current={current}
        pageSize={5}
        total={total}
        onChange={onChange}
      />
    </>
  );
};

PlayerList.propTypes = {
  players: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProp = state => {
  return {
    visible: state.playerlist.visible
  };
};
export default connect(mapStateToProp)(PlayerList);

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './PlayerList.css';
import PlayerListItem from './PlayerListItem';
import { Pagination, Select } from 'antd';

const { Option } = Select;
class PlayerList extends Component {

  state = {
    current: 1,
    arr: [], //页面列表数据
    allArr: [], //符号select所选全量数据
    type: 'all'
  }

  componentDidMount() {
    const { players } = this.props;
    let arr = [...players];
    if(players && players.length > 5) {
      arr.length = 5
    }
    this.setState({
      arr,
      allArr: [...players]
    })
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.players !== this.props.players) {
      let arr = this.getArr(nextProps.players);
      this.setState({
        arr
      })
    }
  }

  getArr = (data) => {
    const { current, type } = this.state;
    let arr = [...data];
    if (type === 'star') arr = arr.filter(i => i.starred === true)
    else if (type === 'noStar') arr = arr.filter(i => i.starred === false)
    this.state.allArr = [...arr]
    return arr.splice((current-1) * 5, 5)
  }

  handleChange = (page) => {
    const { players } = this.props;
    this.state.current = page
    this.setState({
      arr: this.getArr(players)
    })
  }

  handleSelect = (value) => {
    const { players } = this.props;
    console.log(value)
    this.state.type = value
    this.setState({
      arr: this.getArr(players)
    })
  }

  render() {
    const { current, arr, type, allArr } = this.state;
    return (
      <div>
        <Select style={{width: '100px'}} value={type} onChange={this.handleSelect}>
          <Option value="all">all</Option>
          <Option value="star">star</Option>
          <Option value="noStar">noStar</Option>
        </Select>
         <ul className={styles.playerList}>
          {arr.map((player, index) => {
            return (
              <PlayerListItem
                key={index}
                id={player.name + player.team}
                name={player.name}
                team={player.team}
                position={player.position}
                starred={player.starred}
                {...this.props.actions}
              />
            );
          })}
        </ul>
        <div>
          <Pagination 
            onChange={this.handleChange}
            total={allArr.length}
            current={current}
            pageSize={5}
          />
        </div>
      </div>
    );
  }
}

PlayerList.propTypes = {
  players: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

export default PlayerList;

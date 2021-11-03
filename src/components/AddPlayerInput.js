import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './AddPlayerInput.css';

class AddPlayerInput extends Component {
  render() {
    return (
      <input
        type="text"
        autoFocus={true}
        className={classnames('form-control', styles.addPlayerInput)}
        placeholder="Type the name of a player"
        value={this.state.name}
        onChange={this.handleChange.bind(this)}
        onKeyDown={this.handleSubmit.bind(this)}
      />
    );
  }

  constructor(props, context) {
    super(props, context);
    this.state = {
      name: this.props.name || '',
    };
  }

  handleChange(e) {
    this.setState({ name: e.target.value });
  }

  handleSubmit(e) {
    const name = e.target.value.trim();
    const {playersByIdList} =this.props
    if (e.which === 13) {
      // 应为通过名称来匹配删除，所以名称不可重复
      if(playersByIdList.some((item,index)=>item.name===name)){
        return alert('名称不可重复')
      }
      this.props.addPlayer(name);
      this.setState({ name: '' });
    }
  }
}

AddPlayerInput.propTypes = {
  addPlayer: PropTypes.func.isRequired,
  playersByIdList: PropTypes.array.isRequired,

};

export default AddPlayerInput;

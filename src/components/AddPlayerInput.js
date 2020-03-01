import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './AddPlayerInput.css';

const strLen = (str) => {
  // 把双字节字符转化成两个*，便于计算长度
  return str.replace(/[^\x00-\xff]/g, '**').length;
};


class AddPlayerInput extends Component {
  render() {
    return (
    <div className="add_player_input">
      <input
        type="text"
        autoFocus={true}
        className={classnames('form-control', styles.addPlayerInput)}
        placeholder="Type the name of a player"
        value={this.state.name}
        onChange={this.handleChange.bind(this)}
        onKeyDown={this.handleSubmit.bind(this)}
      />
      <button onClick={this.handleBtnClick.bind(this)}>添加</button>
    </div>
    );
  }

  constructor(props, context) {
    super(props, context);
    this.state = {
      name: this.props.name || '',
    };
  }

  handleChange(e) {
    const text = e.target.value;
    if (strLen(text) > 20) {
      alert('输入内容不能超过10个中文字符, 20个英文字符');
      return false;
    }
    this.setState({ name: text });
  }

  handleSubmit(e) {
    const name = e.target.value.trim();
    if (e.which === 13) {
      this.props.addPlayer(name);
      this.setState({ name: '' });
    }
  }

  handleBtnClick(){
    if (this.state.name === '') {
      alert('输入不能为空');
      return false;
    };
    this.props.addPlayer(this.state.name);
    this.setState({ name: '' });
  }

}

AddPlayerInput.propTypes = {
  addPlayer: PropTypes.func.isRequired,
};

export default AddPlayerInput;

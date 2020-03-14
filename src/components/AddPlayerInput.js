import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './AddPlayerInput.css';

class AddPlayerInput extends Component {
  render() {
    return (
      <div className='select-container'>
        <input
          type="text"
          autoFocus={true}
          className={classnames('form-control', styles.addPlayerInput)}
          placeholder="Type the name of a player"
          value={this.state.name}
          onChange={this.handleChange.bind(this)}
          onKeyDown={this.handleSubmit.bind(this)}
        />
        <select className={classnames('form-control', styles.addPlayerInput)} id="" onChange={this.handleChangePosition.bind(this)}>
          <option value="">please select position</option>
          <option value="PG">PG</option>
          <option value="SG">SG</option>
          <option value="SF">SF</option>
          <option value="PF">PF</option>
          <option value="C">C</option>
        </select>
        <button onClick={() => this.handleSubmitToAdd()} className={classnames('form-control', styles.addPlayerInput)}>
          ADD
        </button>
      </div>
      
    );
  }

  constructor(props, context) {
    super(props, context);
    this.state = {
      name: this.props.name || '',
      position: this.props.position || ''
    };
  }

  handleSubmitToAdd = () => {
    const { name, position } = this.state
    if (name === '' || position === '') {
      alert('please input name or position')
      return
    }
    this.props.addPlayer(name, position);
    this.setState({ name: '', position: '' });

  }

  handleChangePosition = (e) => {
    console.log(e.target.value)
    this.setState({
      position: e.target.value
    })
  }

  handleChange(e) {
    this.setState({ name: e.target.value });
  }

  handleSubmit(e) {
    const name = e.target.value.trim();
    const { position } = this.state
    if (e.which === 13) {
      if (name === '' || position === '') {
        alert('please input name or position')
        return
      }
      this.props.addPlayer(name, position);
      this.setState({ name: '', position: '' });
    }
  }
}

AddPlayerInput.propTypes = {
  addPlayer: PropTypes.func.isRequired,
};

export default AddPlayerInput;

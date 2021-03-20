import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './AddPlayerInput.css';
const ROLES = ['SF', 'PF', 'PG', 'SG', 'C'];
class AddPlayerInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name || '',
      role: 'SF'
    };
  }

  render() {
    const { name } = this.state;
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        textAlign: 'center'
      }}>
        <input
          type="text"
          autoFocus={true}
          className={classnames('form-control', styles.addPlayerInput)}
          placeholder="Type the name of a player"
          value={name}
          onChange={this.handleChange.bind(this)}
          style={{minWidth: 200}}
        />
        <select style={{margin: '0 5px'}} onChange={e => this.select(e.target.value)} defaultValue=''>
          <option value='' disabled>Select Position</option>
          {
            ROLES.map(item => <option value={item} key={item}>{item}</option>)
          }
        </select>
        <button onClick={this.handleSubmit}>ADD</button>
      </div>
    );
  }

  handleChange(e) {
    this.setState({ name: e.target.value.trim() });
  }

  handleSubmit = () => {
    const { name, position } = this.state;
    if (!name || !position) {
      alert(!name ? 'Please enter a name': 'Please select a position');
      return;
    }
    this.props.addPlayer({name, position});
    this.setState({ name: '' });
    this.props.restList();
  }

  select = (position) => {
    this.setState({ position: position || 'SF'});
  }
}

AddPlayerInput.propTypes = {
  addPlayer: PropTypes.func.isRequired,
};

export default AddPlayerInput;

import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './AddPlayerInputGroup.module.css'

const playerTypes = [
  'PG',
  // 'SG',
  'SF',
  // 'PF',
  // 'C'
]

class AddPlayerInputGroup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      position: 'PG'
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleTypeChoose = this.handleTypeChoose.bind(this)
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.name !== this.state.name || nextState.position !== this.state.position
  }
  

  handleChange(e) {
    this.setState({
      name: e.target.value
    })
  }

  handleSubmit(e) {
    const { name, position } = this.state
    if (e.which === 13 && name.trim().length) {
      this.props.addPlayer({ name: name.trim(), position })
      this.setState({
        name: ''
      })
    }
  }

  handleTypeChoose(type) {
    this.setState({
      position: type
    })
  }

  render() {
    const { name, position } = this.state
    return (
      <div>
        <div className="input-group">
          <div className="input-group-btn">
            <button
              type="button"
              className={classnames("btn btn-default dropdown-toggle", styles.inputBtn)}
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {position}
              <span className="caret"></span>
            </button>
            <ul className="dropdown-menu">
              {
                playerTypes.map((type, index) => <li key={index}><a href="/#" onClick={() => this.handleTypeChoose(type)}>{type}</a></li>)
              }
            </ul>
          </div>
          <input
            type="text"
            className={ classnames("form-control", styles.rightInput) }
            aria-label="..."
            autoFocus
            value={name}
            onChange={this.handleChange}
            onKeyDown={this.handleSubmit}
          />
        </div>
      </div>
    )
  }
}

AddPlayerInputGroup.propTypes = {
  addPlayer: PropTypes.func.isRequired,
};

export default AddPlayerInputGroup;

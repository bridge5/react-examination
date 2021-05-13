import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class PaginationItem extends Component {

  onChange = () => {
    const {current, index, item, length} = this.props
    // console.log(item === '...', length, index)
    let val = item
    if (item === '...' && index === 1) {
      console.log('点击...  -3')
      val = current - 3
    } else if (item === '...' && index === length-2) {
      console.log('点击...  +3')
      val = current + 3
    }
    this.props.handle(val)
  }

  render() {
    const {current, item} = this.props
    return (
      <li
        className={current === item ? 'current' : ''}
        onClick={this.onChange}
      >
        { this.props.render() }
      </li>
    )
  }
}

PaginationItem.propTypes = {
  current: PropTypes.number,
  onChange: PropTypes.func,
}

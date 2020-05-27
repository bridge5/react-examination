import React, { Component } from 'react';
class AddPositionRadio extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      currentValue: this.props.startPosition || 'SF'
    }
  }
  
  handleChange = position => {
    this.setState({
      currentValue: position
    }, () => {
      this.props.onpositionchange(position)
    })
  }

  render() {
    const currentValue = this.state.currentValue
    return (
      <div>
        <label>
          <input
            type="radio"
            name='position'
            value="SF"
            checked={currentValue === 'SF'}
            onChange={() => {
              this.handleChange('SF')
            }}
          />SF</label>
        <label>
          <input
            type="radio"
            name='position'
            value="PG"
            checked={currentValue === 'PG'}
            onChange={() => {
              this.handleChange('PG')
            }}
          />PG</label>
      </div>
    )
  }
}

export default AddPositionRadio;

import React, { Component } from 'react';
import {styles} from './PositionSelect.css'

class PositionSelect extends Component {
  render() {
    const {
        positionList
      } = this.props;
    return (<select className="positionOption" onChange={this.onSelectChange.bind(this)}>
        {
            positionList.map((v,index)=>{
                return <option key={index} value={index}>{v.position}</option>
            })
        }
    </select>)
  }

   onSelectChange(e){
     this.props.onSelectChange(e.target.value.trim());
   }
}

export default PositionSelect;
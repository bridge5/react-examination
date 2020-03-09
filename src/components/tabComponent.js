import React, {Component} from 'react';

export default class TabComponent extends Component {
    render() {
        let data = this.props.playersById.map(item => item.position);
        let list = [...new Set(data)]
        return (
            <div>
                {list.map((item,index)=>{
                    return   <button key={index} onClick={this.handSwitch.bind(this, item)}>{item}</button>
                })}
                <button onClick={this.handSwitch.bind(this, '')}>All</button>
            </div>
        );
    }

    handSwitch(key) {
        const {
            switchStatus = () => {
            }
        } = this.props;
        switchStatus(key);
    }
}

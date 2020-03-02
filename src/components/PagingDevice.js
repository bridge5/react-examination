import React, { Component } from 'react';
import PropTypes from 'prop-types';

function sum (props) {
    let len = props.players.length;
    let n = 5; //显示5个
    let lineNum = len % 5 === 0 ? len / 5 : Math.floor( (len / 5) + 1 );
    let newArr = [];
    for (let i = 0; i < lineNum; i++) {
        let temp = props.players.slice(i*n, i*n+n);
        newArr.push(temp);
    }
    return newArr.map((item, index) => {
        return (
            <li 
                key={index} // css样式不生效，这里只能用内联来代替了
                style = {{float: 'left' ,width: '35px' ,height: '35px' ,border: '1px solid red' ,textAlign: 'center' ,
                            lineHeight: '35px' ,listStyle: 'none', marginRight: '5px',cursor: 'pointer' }}
                onClick={ () => {
                    props.changePagin(index)
                } }
            >{index + 1}</li>
        )
    })
}

class PagingDevice extends Component {
    render() {
        return (
            <ul>
                { sum (this.props) }
            </ul>
        );
    }
}

PagingDevice.propTypes = {
    players: PropTypes.array.isRequired,
    changePagin: PropTypes.func.isRequired,
};


export  default PagingDevice

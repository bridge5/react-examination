import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Computer.css';

class Computer extends Component {
    constructor(props){
        super(props);
        this.state={
            size:8
        }

    }
    componentDidMount(){
        var size = this.state.size,len = size * size,sizeGird = 50,row = 0,col = 0,min = 0,max = size - 1, arr = [], bgArr = [],arr=[];
        var oUl = document.getElementById('ul1');
        var aLi = oUl.getElementsByTagName('li');
        for(var i=0;i<len;i++){
            //aLi[ row * size + col ].innerHTML = i;
            arr.push( aLi[ row * size + col ] );
            if( row == min && col < max ){
                col = col + 1;
            }
            else if( col == max && row < max ){
                row = row + 1;
            }
            else if( row == max && col > min ){
                col = col - 1;
            }
            else if( col == min && row > min ){
                row = row - 1;
            }
            if( row - 1 == min && col == min ){
                min = min + 1;
                max = max - 1;
            }
        }
        for(var i=0;i<aLi.length;i++){
            if(i%5==0){
                var bgImage = 'url(./img/'+ ( Math.floor(Math.random()*11+1) ) +'.jpg)';
                arr[i].style.backgroundImage = bgImage;
                bgArr.push([i,bgImage]);
            }
        }

        run();
        setInterval(run,100000000);

        function run(){

            for(var i=0;i<aLi.length;i++){
                aLi[i].style.backgroundImage = '';
                aLi[i].className = '';
            }

            for(var i=0;i<bgArr.length;i++){

                bgArr[i][0] = bgArr[i][0] + 1;

                if(arr[ bgArr[i][0] ]){
                    arr[ bgArr[i][0] ].style.backgroundImage = bgArr[i][1];
                    arr[ bgArr[i][0] ].className = 'active';
                    arr[ bgArr[i][0] ].style.animationDelay = -Math.random()*2 + 's';
                    arr[ bgArr[i][0] ].style.webkitAnimationDelay = -Math.random()*2 + 's';
                }
                else{
                    bgArr.pop();
                    var bgImage = 'url(./img/'+ ( Math.floor(Math.random()*11+1) ) +'.jpg)';
                    bgArr.unshift([0,bgImage]);
                }

            }

        }
    }

    render() {
        var size = this.state.size,len = size * size,sizeGird = 50,row = 0,col = 0,min = 0,max = size - 1, arr = [], bgArr = [],arr=[];
        for(let i=0;i<len;i++){
            arr.push(i)
        }
        return (
            <ul id='ul1' style={{width: size * (sizeGird + 1) + 'px'}}>
                {
                    arr.map((val,i)=>{
                        return <li style={{width:sizeGird+'px',height:sizeGird+'px'}} key={i}></li>
                    })
                }
            </ul>
        );
    }
}



export default Computer;
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Pagination.css';

class Pagination extends Component {
    render() {
        const {page,size,total,onChange}=this.props;
        let arr=[],pageNum=total%size?Math.floor(total/size)+1:total/size;
        for(let i=0;i<pageNum;i++){
            arr.push(i)
        }
        if(pageNum<=1){
            return ''
        }
        return (
            <ul className='pagination clearfix'>
                {
                    arr.map((val,i)=>{
                        return(
                            <li onClick={()=>onChange(i,size)} key={i} className={page==i?'paginationLi active':'paginationLi'}>{i+1}</li>
                        )
                    })
                }
            </ul>
        );
    }
}

Pagination.propTypes = {
    page: PropTypes.number||0,
    size:PropTypes.number||1,
    position: PropTypes.string||'bottom',
};

export default Pagination;
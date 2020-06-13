import React, { Component } from 'react';
import styles from './PageList.css';
import classNames from 'classnames'

class PageList extends Component {
  render() {
    let totalPageList = [];
    for(let i = 0;i < this.props.totalPageNumber;i++){
      totalPageList.push({pageId:i+1});
    }
    return (
      <ul className="pageList">
        {
            totalPageList.map((v,index)=>{
            return <li onClick={()=>this.props.changePage(index)} className={classNames("pageBtnAction",{"active": this.props.curPageNumber === index})} key={index}><span>{v.pageId}</span></li>
            })
        }
      </ul>
    );
  }
}

export default PageList;
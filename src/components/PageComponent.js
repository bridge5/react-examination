import React, { Component } from 'react';
import Pagination from 'rc-pagination';
import styles from './PageComponent.css';
class PageComponent extends Component{
  state = {
    current: 1,//当前页数
    pageSize:0,//单页请求的列表数
  };

  onChange = page => {
    console.log('page',page);
    this.setState({
      current: page,
      pageSize:5
    });
  };

  render(){
    return(
      <Pagination 
         className={styles.PageComponent} 
         defaultPageSize={5}
         onChange={this.onChange}
         current={this.state.current}
         total={this.props.players.length}
      />
    )
  }
}
export default PageComponent;
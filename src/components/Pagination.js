import React, { Component } from 'react';
import { connect } from 'react-redux';
import { currentPlayer } from '../actions/PlayersActions';
// import PropTypes from 'prop-types';
import './Pagination.css';

class Pagination extends Component {
  state = {
    totalNum: 0,
    currentPage: 1,
    totalPage: 0,
    pageBtnList: [],
    pageSize: 5,
    sizeList: [5, 6, 7]
  }
  previousPage = () => {
    this.setState(state => {
      let currentPage = state.currentPage > 1 ? state.currentPage - 1 : state.currentPage;
      this.props.dispatch(currentPlayer(currentPage, state.pageSize));
      return { currentPage };
    });
  }
  nextPage = () => {
    this.setState(state => {
      let currentPage = state.currentPage < state.totalPage ? state.currentPage + 1 : state.currentPage;
      this.props.dispatch(currentPlayer(currentPage, state.pageSize));
      return { currentPage }
    });
  }
  pageBtnClick = (btnNum) => {
    this.props.dispatch(currentPlayer(btnNum, this.state.pageSize));
    this.setState({currentPage: btnNum});
  }
  pageSizeChangeHandle = (e) => {
    let pageSize = +e.target.value;
    this.props.dispatch(currentPlayer(this.state.currentPage, pageSize));
    this.setState({pageSize});
  }
  setPagination = (playerlist = { playersById: [] }) => {
    const { playersById, init_currentPage, init_pageSize} = playerlist;
    let currentPage = init_currentPage || this.state.currentPage;
    let pageSize = init_pageSize || this.state.pageSize;
    let totalNum = playersById.length;
    let totalPage = Math.ceil(playersById.length / pageSize);
    let pageBtnList = [];
    if (totalPage > 5) {
      if (currentPage < 4) {
        pageBtnList = [1, 2, 3, 4, 5];
      } else {
        pageBtnList = [currentPage -2, currentPage - 1, currentPage, currentPage + 1, currentPage + 2];
      }
    } else {
      for (let i = 1; i <= totalPage; i++) {
        pageBtnList.push(i);
      }
    }
    this.setState({
      currentPage,
      pageSize,
      totalNum,
      totalPage,
      pageBtnList
    });
  }
  // calculateCurrentPlayers = () => {
  //   console.log(666);
  //   let {currentPage, pageSize} = this.state;
  //   let startIndex = (currentPage - 1) * pageSize;
  //   let len = this.props.playerlist.playersById.length;
  //   let endIndex = len > startIndex + pageSize ? startIndex + pageSize - 1 : len - 1;
  //   console.log(currentPlayer(startIndex, endIndex));
  //   this.props.dispatch(currentPlayer(startIndex, endIndex));
  // }
  componentDidMount () {
    this.setPagination(this.props.playerlist);
  }
  componentWillReceiveProps (props) {
    console.log(666, props);
    this.setPagination(props.playerlist);
  }
  render() {
    const { totalNum, totalPage, pageBtnList, sizeList, currentPage } = this.state;
    return (
      <div className="pagination" style={{display: totalNum > 5 ? 'block' : 'none'}}>
          <div className="totals">
            <span className="total-num">{`total ${totalNum} nums,`}</span>
            <span className="total-page">{`total ${totalPage} pages`}</span>
          </div>
          <div className="pre">
            <button type="button" onClick={this.previousPage}>previous page</button>
          </div>
          <div className="bd">
            <ul>
              {
                pageBtnList.map((item, index) => (
                  <li key={index} className={currentPage - 1 === index ? 'current-page' : ''} onClick={() => this.pageBtnClick(item)}>{item}</li>
                ))
              }
            </ul>
          </div>
          <div className="next">
            <button type="button" onClick={this.nextPage}>next page</button>
          </div>
          <div className="page-size">
            <select name="pageSize" onChange={this.pageSizeChangeHandle}>
              {
                sizeList.map((sizeItem, sizeIndex) => (
                  <option value={sizeItem} key={sizeIndex}>{sizeItem}</option>
                ))
              }
            </select>
          </div>
      </div>
    );
  }
}

// Pagination.propTypes = {
//   currentPage: PropTypes.number.isRequired,
//   totalNum: PropTypes.number.isRequired
// };

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return dispatch;
}

export default connect(mapStateToProps, null)(Pagination);

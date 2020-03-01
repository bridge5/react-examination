import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import { jumpPage } from '../actions/PlayersActions';

export class Pagination extends Component {
  render() {
    const { total, pageNum } = this.props
    return (
      <Fragment>
        <nav aria-label="Page navigation">
          <ul className="pagination">
            <li onClick={(event) => this.jumpPage(event, pageNum - 1)}>
              <a href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            {Array.from({ length: total }).map((v, i) => {
              return (
                <li key={i}><a href="#" onClick={(event) => this.jumpPage(event, i + 1)}>{i + 1}</a></li>
              )
            })}
            <li onClick={(event) => this.jumpPage(event, pageNum + 1)}>
              <a href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </Fragment>
    );
  }
  jumpPage = (event, pageNum) => {
    event.preventDefault()
    const {total}=this.props
    if(pageNum > total){
      this.props.jumpPage(total)
    }else if(pageNum < 1){
      this.props.jumpPage(1)
    }else{
      this.props.jumpPage(pageNum)
    }
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(
  mapStateToProps,
  {
    jumpPage,
  },
)(Pagination);

import React, { Component } from 'react'
import PaginationItem from './PaginationItem'
import PropTypes from 'prop-types'
import './Pagination.css'

export default class Pagination extends Component {

  state = {
    current: 1,
  }

  static getDerivedStateFromProps(props) {
    const { defaultCurrent = 1, pageSize = 2, total, list } = props
    const index = (props.current - 1) * pageSize
    const pages = Math.ceil(total / pageSize)
    let current = props.current ? props.current : defaultCurrent
    // console.log(current, pages)
    let showPages = [...Array(pages).keys()]

    let prev = current - 1,
    cur = current,
    next = current + 1

    if (pages > 7) { // 超出7页, 显示...
      showPages = [...Array(6).keys()].slice(2, 5)
      if (current <= 3) {
        showPages.splice(2, 1, '...')
        showPages = [1, ...showPages, pages]
      } else if (current >= pages - 2) {
        showPages = [1, '...', pages -2, pages -1 , pages]
      } else {
        showPages = [1, '...', prev, cur, next, '...', pages]
      }
      // console.log(showPages)
    } else { //正常显示
      showPages = showPages.map(item => item + 1)
    }

    // 判断用户是否删除了最后一页的所有数据
    if (current - (total / pageSize) === 1) {
      current = current - 1
      props.onChange(current)
    }

    return {
      current: current,
      pages: pages,
      list: list.slice(index, index+pageSize), // 当前页显示的 playerlist
      showPages: showPages,
    }
  }

  // 跳转到某页
  onChange = (currentPage) => {
    // console.log(currentPage)
    if (currentPage >= this.state.pages) {
      currentPage = this.state.pages
    } else if (currentPage <= 1) {
      currentPage = 1
    }
    this.props.onChange(currentPage)
  }
  // 输入页数, 跳转某页
  handleQuickJumper = (e) => {
    if (e.keyCode === 13) {
      this.onChange(e.target.value*1)
      e.target.value = ''
    }
  }

  // 选择pageSize
  selectPageSize = (e) => {
    console.log(e.target.value)
    this.props.changePageSize(e.target.value*1)
  }

  render() {
    const { total = 0 } = this.props
    const {list, current, showPages} = this.state
    // console.log(this.props, this.state)
    return (
      <div>
        {this.props.render && this.props.render(list)}

        <div className="pagination">
          <ul>
            <PaginationItem
              current={current}
              handle={() => { this.onChange(current - 1) }}
              render={() => 'pre'}
            />
            {showPages.map((item, index) => {
              return (
                <PaginationItem
                  key={index}
                  index={index}
                  length={showPages.length}
                  item={item}
                  current={current}
                  handle={this.onChange}
                  render={() => item}
                />
              )
            })}
            <PaginationItem
              current={current}
              handle={() => { this.onChange(current + 1) }}
              render={() => 'next'}
            />
          </ul>
          <div className="show-total">
            total: {total || 0}
            <select onChange={this.selectPageSize}>
              <option value={1}>1条/页</option>
              <option value={5}>5条/页</option>
              <option value={10}>10条/页</option>
            </select>
            {this.props.showJumper && (<div>go<input type="text" onKeyUp={this.handleQuickJumper} /></div>)}
          </div>
        </div>
      </div>
    )
  }
}

Pagination.propTypes = {
  current: PropTypes.number,
  defaultCurrent: PropTypes.number,
  total: PropTypes.number,
  onChange: PropTypes.func,
  pageSize: PropTypes.number,
}
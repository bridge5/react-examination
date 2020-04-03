import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

class PageController extends Component {
  decrement = e => {
    const { page, setPage } = this.props
    if (page <= 1) {
      e.preventDefault()
      return false
    } else {
      setPage(page - 1)
    }
  }

  increment = e => {
    const { page, setPage, total, pageSize } = this.props
    if (page < Math.ceil(total / pageSize)) {
      setPage(page + 1)
    } else {
      e.preventDefault()
      return false
    }
  }

  pageActive = index => {
    if (index + 1 === this.props.page) {
      return false
    } else {
      this.props.setPage(index + 1)
    }
  }

  render() {
    const { total, pageSize, page } = this.props
    const pages = new Array(Math.ceil(total / pageSize)).fill('')
    return (
      <>
        {
          total > 0
            ?
            (<nav aria-label="Page navigation">
              <div className="text-center">
                <ul className="pagination">
                  <li
                    className={classnames('', page === 1 && 'disabled')}
                    onClick={this.decrement}
                  >
                    <a href="/#" aria-label="Previous">
                      <span aria-hidden="true">&laquo;</span>
                    </a>
                  </li>
                  {
                    pages.length && pages.map((ps, index) => (
                      <li
                        key={index}
                        className={(page === index + 1) ? 'active' : ''}
                        onClick={() => this.pageActive(index)}
                      >
                        <a href="/#">{index + 1}</a>
                      </li>
                    ))
                  }
                  <li
                    onClick={this.increment}
                    className={classnames('', (total && page === pages.length) && 'disabled')}
                  >
                    <a href="/#" aria-label="Next">
                      <span aria-hidden="true">&raquo;</span>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>)
            :
            null
        }
      </>
    )
  }
}

PageController.propTypes = {
  total: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
};

export default PageController;

import React, { PureComponent } from 'react';
import styles from './Pagination.css';
import classnames from 'classnames';
import PropTypes from 'prop-types';

class Pagination extends PureComponent {
  render() {
    const { pageSize, total } = this.props;
    const { currentPage } = this.state;
    const totalPage = Math.ceil(total/pageSize);
    const pagers = this.getPagers();
    return (
      <div className={styles.pagination}>
        <button type="button"
         data-test="btn-prev"
         className={classnames(styles['btn-prev'], {
          [styles.disabled]: (currentPage <= 1)
         })}
         onClick={this.prev}>
          &lt;
        </button>
        <ul className={styles.pagers}
         onClick={(e) => this.handlePagerClick(e)}>
           {pagers.map((pager) => {
             return (
              <li key={pager.key}
               data-test={pager.className === 'pager' ? `pager-${pager.key}` : pager.className}
               className={classnames(pager.className, {
                [styles.active]: (parseInt(currentPage) === parseInt(pager.val))
               })}
             >{pager.val}</li>
             );
           })}
        </ul>
        <button type="button"
         data-test="btn-next"
         className={classnames(styles['btn-next'], {
          [styles.disabled]: (currentPage === totalPage)
         })}
         onClick={this.next}>
          &gt;
        </button>
      </div>      
    )
  }
  constructor(props) {
    super(props);
    this.state = {
      currentPage: this.props.currentPage || 1,
    };
    this.prev = this.prev.bind(this);
    this.next = this.next.bind(this);
    this.handlePagerClick = this.handlePagerClick.bind(this);
  }
  componentDidUpdate(prevProps, prevState) {
    if(this.state.currentPage !== prevState.currentPage) {
      this.props.onCurrentChange(this.state.currentPage);
      this.getPagers();
    }
  }
  getPagers() {
    const { pageSize, total } = this.props;
    const { currentPage } = this.state;
    const totalPage = Math.ceil(total/pageSize);
    /* when present pagers more than 7, show '...'to hide rest */
    const PRESENT_PAGER_COUNT = 7;    
    let showPrevMore = false, 
        showNextMore = false;
    const pagers = [];

    if(totalPage > PRESENT_PAGER_COUNT) {
      if(currentPage > PRESENT_PAGER_COUNT - 2) {
        showPrevMore = true;
      }
      if(currentPage < totalPage - 2) {
        showNextMore = true;
      }
    }
 
    if(showPrevMore && !showNextMore) {
      pagers.push({ key: 'prev-more', className: 'prev-more', val: '...' });
      for(let i = (totalPage - PRESENT_PAGER_COUNT + 2); i < totalPage; i++) {
        pagers.push({ key: i, className: 'pager', val: i });
      }
    } else if(!showPrevMore && showNextMore) {
      for(let i = 2; i < PRESENT_PAGER_COUNT; i++) {
        pagers.push({ key: i, className: 'pager', val: i });
      }
      pagers.push({ key: 'next-more', className: 'next-more', val: '...' });
    } else if(showPrevMore && showNextMore) {
      pagers.push({ key: 'prev-more', className: 'prev-more', val: '...' });
      const OFFSET = Math.floor(PRESENT_PAGER_COUNT / 2) -1;
      for(let i = (currentPage - OFFSET); i < (currentPage + OFFSET + 1); i++) {
        pagers.push({ key: i, className: 'pager', val: i });
      }
      pagers.push({ key: 'next-more', className: 'next-more', val: '...' });
    }else {
      for (let i = 2; i < totalPage; i++) {
        pagers.push({ key: i, className: 'pager', val: i });
      }
    }
    pagers.unshift({ key: 1, className: 'pager', val: 1 });
    if(totalPage > 1) {
      pagers.push({ key: totalPage, className: 'pager', val: totalPage });
    }
    return pagers;
  }
  prev() { 
    if(this.state.currentPage <= 1) return;
    this.setState(({currentPage}) => { 
      return { currentPage: currentPage - 1 } 
    });
  }
  next() {
    if(this.state.currentPage === this.props.totalPage) return;
    this.setState(({currentPage}) => { 
      return { currentPage: currentPage + 1 } 
    });
  }
  handlePagerClick(e) {
    const { tagName, textContent, className } = e.target;
    if(tagName === 'LI') {
      let selectPage = parseInt(textContent);
      const { pageSize, total } = this.props;
      const { currentPage } = this.state;
      const totalPage = Math.ceil(total/pageSize);

      if(className.indexOf('prev-more') > -1) {
        selectPage = currentPage - 5;
      } else if(className.indexOf('next-more') > -1) {
        selectPage = currentPage + 5;
      }
      if(!isNaN(selectPage)) {
        if(selectPage < 1) { selectPage = 1 } 
        if(selectPage > totalPage) { selectPage = totalPage }
      }
      this.setState({
        currentPage: selectPage
      });
    }
  }
}
Pagination.propTypes = {
  pageSize: PropTypes.number,
  currentPage: PropTypes.number,
  total: PropTypes.number,
  onCurrentChange: PropTypes.func
}
Pagination.defaultProps = {
  pageSize: 5,
  currentPage: 1
}

export default Pagination;
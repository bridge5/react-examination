import React,{ Component } from 'react'
import PropTypes from 'prop-types';
import './index.css'
const propTypes = {
    items: PropTypes.array.isRequired,
    initialPage: PropTypes.number    
}

const defaultProps = {
    initialPage: 1
}

class Pagination extends Component {
    constructor(props) {
        super(props);
        this.state = { pager: {} };
    }

    componentWillMount() {
        if (this.props.items && this.props.items.length) {
            this.setPage(this.props.initialPage);
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.items !== prevProps.items) {
            this.setPage(this.props.initialPage);
        }
    }

    setPage(page) {
        var items = this.props.items;
        var pager = this.state.pager;

        if (page < 1 || page > pager.totalPages) {
            return;
        }

        pager = this.getPager(items.length, page);

        // 截取出当前页的列表
        var pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);

        this.setState({ pager: pager });

        this.props.setPage(pageOfItems);
    }

    getPager(totalItems, currentPage=1, pageSize=5) {
        var totalPages = Math.ceil(totalItems / pageSize);

        var startPage, endPage;
        if (totalPages <= 10) {
            startPage = 1;
            endPage = totalPages;
        } else {
            // 超过10页时
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            } else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            } else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }

        // 计算出开始结束的索引值
        var startIndex = (currentPage - 1) * pageSize;
        var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

        // 得到分页数组
        var pages = [...Array((endPage + 1) - startPage).keys()].map(i => startPage + i);

        // 返回分页属性对象
        return {
            totalItems,
            currentPage,
            pageSize,
            totalPages,
            startPage,
            endPage,
            startIndex,
            endIndex,
            pages
        };
    }

    render() {
        var pager = this.state.pager;

        if (!pager.pages || pager.pages.length <= 1) {
            // 只有1页时不显示
            return null;
        }

        return (
            <ul className="pagination">
                <li className={pager.currentPage === 1 ? 'disabled' : ''}>
                    <span onClick={() => this.setPage(1)}>第一页</span>
                </li>
                <li className={pager.currentPage === 1 ? 'disabled' : ''}>
                    <span onClick={() => this.setPage(pager.currentPage - 1)}>
                        <i className='fa fa-angle-left'/>
                    </span>
                </li>
                {pager.pages.map((page, index) =>
                    <li key={index} className={pager.currentPage === page ? 'active' : ''}>
                        <span onClick={() => this.setPage(page)}>{page}</span>
                    </li>
                )}
                <li className={pager.currentPage === pager.totalPages ? 'disabled' : ''}>
                    <span onClick={() => this.setPage(pager.currentPage + 1)}>
                        <i className='fa fa-angle-right'/>
                    </span>
                </li>
                <li className={pager.currentPage === pager.totalPages ? 'disabled' : ''}>
                    <span onClick={() => this.setPage(pager.totalPages)}>最后一页</span>
                </li>
            </ul>
        );
    }
}

Pagination.propTypes = propTypes;
Pagination.defaultProps = defaultProps;


export default Pagination
import React from 'react';

import './Pagination.scss';

/**
 * @export 分页器
 */

class Pagination extends React.Component {
    static defaultProps = {

    }

    constructor(props) {
        super(props)
        this.state = {
            ...props
        }
    }

    componentWillReceiveProps(nextProps) {
        // this.state = {
        //     ...nextProps
        // }
        this.setState({
            ...nextProps
        })
    }

    changePage(nextPage) {
        var { maxPage } = this.state.paginationConf;
        if (nextPage > 0 && nextPage < (maxPage + 1)) {
            this.props.changePage(nextPage);
        }
        // this.setState({
        //     paginationConf: Object.assign({}, this.state.paginationConf, {curPage: nextPage})
        // })
    }

    generateLess10(paginationConf) {
        var maxPage = paginationConf.maxPage,
            curPage = paginationConf.curPage,
            pagination = [];

        //test
        // maxPage = 9; curPage = 4;

        for (var i = 0; i < maxPage; i++) {
            var className = " ";
            if ((i + 1) === curPage) {
                className += "on";
            }
            var item = <a key={i} className={className} onClick={this.changePage.bind(this, i + 1)}>{i + 1}</a>
            pagination.push(item)
        }
        return pagination;
    }

    generateLarge10less6(paginationConf) {
        var maxPage = paginationConf.maxPage,
            curPage = paginationConf.curPage,
            pagination = [];

        //test
        // maxPage = 10; curPage = 2;

        for (var i = 0; i < maxPage; i++) {
            var className = " ";
            if ((i + 1) === curPage) {
                className += "on";
            }
            if (i > 5)
                break;
            var item = <a key={i} className={className} onClick={this.changePage.bind(this, i + 1)}>{i + 1}</a>
            pagination.push(item)
        }
        if (maxPage > 6) {
            var defaultItem = <a className={" disable "}>...</a>
            var lastItem = <a className={" " + (paginationConf.curPage === maxPage ? "on" : "")} onClick={this.changePage.bind(this, maxPage)}>{maxPage}</a>
            pagination.push([defaultItem, lastItem]);
        }
        return pagination;
    }

    generateLarge10between(paginationConf) {
        var maxPage = paginationConf.maxPage,
            curPage = paginationConf.curPage,
            pagination = [];

        //test
        // maxPage = 10; curPage = 5;
        var firstItem = <a className={" "} onClick={this.changePage.bind(this, 1)} >1</a>;
        var defaultItem = <a className={" disable "}>...</a>;
        var lastItem = <a className={" "} onClick={this.changePage.bind(this, maxPage)} >{maxPage}</a>;
        pagination.push([firstItem, defaultItem]);
        for (var i = curPage - 2; i < curPage + 3; i++) {
            var className = " ";
            if (i === curPage) {
                className += "on";
            }
            var item = <a key={i} className={className} onClick={this.changePage.bind(this, i)}>{i}</a>
            pagination.push(item)
        }
        pagination.push([defaultItem, lastItem]);
        return pagination;
    }

    generateLarge10after(paginationConf) {
        var maxPage = paginationConf.maxPage,
            curPage = paginationConf.curPage,
            pagination = [];
        //test
        // maxPage = 10; curPage = 6;
        var firstItem = <a className={" "} onClick={this.changePage.bind(this, 1)} >1</a>;
        var defaultItem = <a className={" disable "}>...</a>;
        pagination.push([firstItem, defaultItem]);
        for (var i = maxPage - 5; i < maxPage; i++) {
            var className = " ";
            if ((i + 1) === curPage) {
                className += "on";
            }
            var item = <a key={i} className={className} onClick={this.changePage.bind(this, i + 1)}>{i + 1}</a>
            pagination.push(item)
        }
        return pagination;
    }

    generatePagination() {
        var { paginationConf } = this.state;
        var curPage = paginationConf.curPage;

        var maxPage = paginationConf.maxPage;
        // var maxPage = 10;
        // curPage = 6;
        // var pagination = [];
        /*
            1 2 3 4 5 6 7 8 9
            1 2 3 4 5 6 …… maxPage
            1 …… 3 4 5 6 7 …… maxPage
            1 …… maxPage-5 maxPage-4 maxPage-3 maxPage-2 maxPage-1 maxPage
        */

        if (maxPage < 10) {
            return this.generateLess10(paginationConf);
        } else if (maxPage >= 10 && curPage < 5) {
            return this.generateLarge10less6(paginationConf);
        } else if (maxPage >= 10 && curPage >= 5 && maxPage - curPage >= 4) {
            return this.generateLarge10between(paginationConf);
        } else {
            return this.generateLarge10after(paginationConf);
        }
    }

    render() {
        var { curPage, maxPage } = this.state.paginationConf;
        return (
            maxPage && maxPage != 1 ? <div className="pagination-wrapper">
                <ul>
                    {
                        maxPage > 10 &&
                        <li className="page-pre">
                            <a className={"page " + (curPage === "1" ? "off" : "")} onClick={this.changePage.bind(this, curPage - 1)}>上一页</a>
                        </li>
                    }

                    <li className={"page-count " + (maxPage > 10 ? "" : "alone")}>
                        {
                            this.generatePagination()
                        }
                    </li>
                    {
                        maxPage > 10 &&
                        <li className="page-after">
                            <a className={"page " + (curPage === maxPage ? "off" : "")} onClick={this.changePage.bind(this, curPage + 1)} > 下一页</a>
                        </li>
                    }
                </ul>
            </div>
                :
                null
        )
    }
}

export default Pagination;
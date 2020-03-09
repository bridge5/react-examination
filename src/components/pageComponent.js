import React from 'react';
import PropTypes from 'prop-types'
import './pageComponent.css'


let pageComponentId = 0;

export default class PageComponent extends React.Component {
    static props = {
        pageSize: PropTypes.number.isRequired,
        total: PropTypes.number.isRequired,
        pageIndex: PropTypes.number.isRequired,
        pageOnChange: PropTypes.func.isRequired
    };

    totalPage() { //总页数
        let total = this.props.total, size = this.props.pageSize;
        let sum = 0;
        if (total % size > 0) {
            sum = Number.parseInt(total / size) + 1
        } else {
            sum = Number.parseInt(total / size);
        }
        return sum;
    }

    pageList() {

        let index = this.props.pageIndex,
            total = this.props.total,
            size = this.props.pageSize;
        let sum = this.totalPage(); //计算总页数
        if (total === 0) {
            return [];
        }

        //页面上最多显示5个页码，其中一个必定包括当前页码
        let cnt = 4;
        let array = [];//存放页码数组
        if (index === 1) { //
            array.push({name: 1})
        } else {
            //当前页面应该放中间，左右两边各两个相邻页码
            let y = 2;
            //（sum-index）为大于当前页数的页码个数，若小于2，则重新计算当前页码左右两边显示的页码数
            if (sum - index < y) {
                y = 4 - sum + index;
            }
            //最前面的 ...
            if (index >= 4) {
                array.push({name: null});
            }
            //y为左边应该显示的页码个数
            for (let i = index - y; i < index; i++) {
                if (i <= 0) {
                    continue;
                }
                array.push({name: i});
                cnt--;
            }
            //当前页
            array.push({name: index})
        }
        //cnt大于0说明右边还可放置cnt个页码
        for (let i = index; cnt > 0; i++) {
            if (i + 1 <= sum) {
                array.push({name: i + 1});
                cnt--;
            } else {
                break;
            }
        }
        //右边可放置个数为0了，但右边仍有页码没有显示
        //最后面的 ...
        if (cnt === 0 && index + 2 < sum) {
            array.push({name: null})
        }
        return array;
    }


    next() {
        //下一页
        this.change(this.props.pageIndex + 1, this.props.pageSize)
    }

    //上一页
    prev() {
        this.change(this.props.pageIndex - 1, this.props.pageSize)
    }

    //首页
    home() {
        this.change(1, this.props.pageSize)
    }

    //末页
    nextAll() {
        this.change(this.totalPage(), this.props.pageSize)
    }

    //跳转到第几页
    toIndex(index) {

        if (index !== null) {
            this.change(index, this.props.pageSize)
        }
    }


    //触发回调
    change(index, size) {
        if (index === this.props.pageIndex && size === this.props.pageSize) {
            return false
        }
        this.props.pageOnChange(index,size);
    }

    render() {
        const {pageIndex, total} = this.props;
        let pageList = this.pageList();//页码条数
        let totalPage = this.totalPage();//总页数
        return (
            <div>
                <div>
                    <ul className='my-page'>
                        <li>共{total}条数据</li>
                        {(pageIndex > 0 && total !== 0) ? <li><button onClick={this.home.bind(this)}>首页</button></li> : null}
                        {(pageIndex>1 && total!==0)?<li><button onClick={this.prev.bind(this)}>上一页</button></li>:null}
                        {pageList.map(item => {
                            if (item.name) {
                                return <li key={pageComponentId++}><button className={item.name===pageIndex?'active':''} onClick={this.toIndex.bind(this,item.name)}>{item.name}</button></li>
                            } else {
                                return <li key={pageComponentId++}>...</li>
                            }
                        })}
                        {pageIndex<totalPage?<li><button onClick={this.next.bind(this)}>下一页</button></li>:null}
                        {(pageIndex < totalPage) ? <li><button onClick={this.nextAll.bind(this)}>末页</button></li> : null}
                    </ul>
                </div>
            </div>
        )
    }
}


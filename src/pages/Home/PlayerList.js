import React, { Component } from 'react';
import { Table, Row, Col } from 'antd';
import { StarOutlined, StarFilled, DeleteOutlined } from '@ant-design/icons';
import styles from './styles.scss';
import { connect } from 'dva';

@connect(({ HomeModel }) => ({ HomeModel }))
class PlayerList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: 1,
      pageSize: 5,
    };

    this.columns = [{
      title: 'Name',
      dataIndex: 'playerName',
    }, {
      title: 'Team',
      dataIndex: 'team'
    }, {
      title: 'Position',
      dataIndex: 'position'
    }, {
      title: 'Operate',
      dataIndex: 'Operate',
      render:(text, record, index) => this.renderOperate(text, record, index)
    }]
  }

  renderOperate(text, record, index) {
    return (
      <Row>
        <Col span={12}>
          <div className={styles.pointer} onClick={() => this.toggleStarPlayer(index)}>
            {
              record.starred ? <StarFilled/> : <StarOutlined/>
            }
          </div>
        </Col>
        <Col span={12}>
          <div className={styles.pointer} onClick={() => this.deletePlayer(index)}>
            <DeleteOutlined />
          </div>
        </Col>
      </Row>
    )
  }

  toggleStarPlayer(index) {
    this.props.dispatch({
      type: 'HomeModel/toggleStarPlayer',
      payload: {
        playerIndex: (this.state.currentPage - 1) * this.state.pageSize + index
      }
    })
  }

  async deletePlayer(index) {
    await this.props.dispatch({
      type: 'HomeModel/deletePlayer',
      payload: {
        playerIndex: (this.state.currentPage - 1) * this.state.pageSize + index
      }
    });
    const { players } = this.props.HomeModel;
    if ((this.state.currentPage - 1) * this.state.pageSize >= players.length) {
      this.setState((state) => {
        return { currentPage: state.currentPage - 1 };
      })
    }
  }

  changePage(index) {
    this.setState({
      currentPage: index,
    })
  }

  render() {
    const { pageSize, currentPage } = this.state;
    const { players } = this.props.HomeModel;
    return (
      <div>
        <Table dataSource={players} columns={this.columns} rowKey="playerName" pagination={{ defaultCurrent: 1, pageSize, current: currentPage, onChange: (page) => this.changePage(page) }}/>
      </div>
    )
  }
}

export default PlayerList;

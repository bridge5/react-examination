import React, { Component } from 'react';
import { Row, Col, Input, Select, Button, Popover, message } from 'antd';
import { connect } from 'dva';
import styles from './styles.scss';

@connect(({ HomeModel }) => ({ HomeModel }))
class AddPlayer extends Component {
  state = {
    playerName: '',
    team: '',
    position: '',
  };

  componentDidMount() {
    const storedPlayersData = localStorage.getItem('players');
    if (storedPlayersData) {
      this.props.dispatch({
        type: 'HomeModel/setLocalPlayer',
        payload: JSON.parse(storedPlayersData),
      })
    }
  }

  changePlayerName(e) {
    this.setState({
      playerName: e.target.value
    })
  }

  changePlayerTeam(e) {
    this.setState({
      team: e.target.value
    })
  }

  changePlayerSelect(value) {
    this.setState({
      position: value
    })
  }

  checkSameName() {
    const { players } = this.props.HomeModel;
    for(let i in players) {
      if (players[i].playerName === this.state.playerName) {
        message.error('Can\'t add same player');
        return false;
      }
    }
    return true;
  }

  doAddPlayer() {
    if (!this.state.playerName || !this.state.team || !this.state.position) {
      message.error('Please complete the form first');
      return;
    }
    if (!this.checkSameName()) {
      return false;
    }
    this.props.dispatch({
      type: 'HomeModel/addPlayer',
      payload: {
        playerName: this.state.playerName,
        team: this.state.team,
        position: this.state.position,
        starred: false,
      }
    }).then(() => {
      message.success('Add Completed');
    })
  }

  render() {
    return (
      <div className={`${styles.floatWrapper} ${styles.mb10}`}>
        <div className={styles.rightFloat}>
          <Popover overlayClassName={styles.popoverContentWrapper} content={
            <div className={styles.popoverContent}>
              <Row>
                <Col span={5}>
                  <span className={styles.label}>Name</span>
                </Col>
                <Col span={19}>
                  <Input placeholder="Type the name of the player" allowClear={true} onChange={this.changePlayerName.bind(this)} value={this.state.playerName} />
                </Col>
              </Row>
              <Row>
                <Col span={5}>
                  <span className={styles.label}>Team</span>
                </Col>
                <Col span={19}>
                  <Input placeholder="Type the team of the player" allowClear={true} onChange={this.changePlayerTeam.bind(this)} value={this.state.team} />
                </Col>
              </Row>
              <Row>
                <Col span={5}>
                  <span className={styles.label}>Position</span>
                </Col>
                <Col span={19}>
                  <Select placeholder="Select the position of the player" onChange={this.changePlayerSelect.bind(this)} style={{ width: '100%' }}>
                    <Select.Option value="SF">SF</Select.Option>
                    <Select.Option value="SG">SG</Select.Option>
                    <Select.Option value="PF">PF</Select.Option>
                    <Select.Option value="PG">PG</Select.Option>
                  </Select>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <Button type="primary" style={{ width: '100%' }} onClick={this.doAddPlayer.bind(this)}>Confirm</Button>
                </Col>
              </Row>
            </div>} trigger="click">
            <Button type="primary">Add player</Button>
          </Popover>
        </div>
      </div>
    )
  }
}

export default AddPlayer;

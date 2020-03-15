import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Pagination } from 'antd';

class Paginations extends Component {

    state = {
        currentPage: 1,
    };
    
    onChange = page => {
        const {setCurrentPage} = this.props
        setCurrentPage(page)
        this.setState({
            currentPage: page,
        });
    };

  render() {
      const {playersById} = this.props
      const dataLength = playersById.length
    return (
      <div>
         { 
            dataLength>5 ? 
                <Pagination 
                    pageSize={5} 
                    current={this.state.currentPage} 
                    onChange={this.onChange} 
                    total={dataLength}
                /> : null
        }
      </div>
    );
  }
}

Paginations.propTypes = {
    setCurrentPage: PropTypes.func.isRequired,
};

export default Paginations;

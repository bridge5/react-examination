/**
 * 分页器，按照 antd 的用法来写的
 */

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./Pagination.css"; // 根据需要调整样式导入

/**
 * current：当前页数
 * pageSize：每页条数
 * total：总数
 * onChange：改变页码的回调
 * hideSinglePage：一页时是否隐藏
 */
const Pagination = ({
  current = 1,
  pageSize = 5,
  total,
  onChange,
  hideSinglePage = false,
}) => {
  // 使用状态钩子来追踪当前页码
  const [currentPage, setCurrentPage] = useState(current);

  // 计算总页数
  const totalPages = Math.ceil(total / pageSize);

  // 处理页码变化的函数
  const handlePageChange = (newPage) => {
    // 确保新页码在有效范围内，并且与当前页码不同
    if (newPage >= 1 && newPage <= totalPages && newPage !== currentPage) {
      setCurrentPage(newPage);
      // 调用传入的 onChange 回调函数处理页码变化
      onChange(newPage);
    }
  };

  // 渲染页码按钮
  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          className={currentPage === i ? "active" : ""}
          style={{ width: 34 }}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  // 当传入的 current 发生变化时更新当前页码
  useEffect(() => {
    setCurrentPage(current);
  }, [current]);

  // 只有一页时是否隐藏分页器
  if (hideSinglePage && totalPages === 1) {
    return <></>;
  }

  return (
    <div className="pagination-container">
      <span>{pageSize}条/页</span>
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        上一页
      </button>

      {renderPageNumbers()}

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        下一页
      </button>
      <span>共: {total}条</span>
    </div>
  );
};

// 定义组件的属性类型
Pagination.propTypes = {
  current: PropTypes.number,
  pageSize: PropTypes.number,
  total: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Pagination;

import React from "react";
import classNames from "classnames";
// eslint-disable-next-line no-unused-vars
import styles from "./index.css";

function PageList(props) {
  const { total, changePage, current } = props;
  const totalPageList = [];
  for (let i = 0; i < total; i += 1) {
    totalPageList.push({ pageId: i + 1 });
  }
  return (
    <ul className="pageList">
      {totalPageList.map((val, index) => {
        return (
          // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
          <li
            key={index}
            onClick={() => changePage(index)}
            className={classNames("btnAction", {
              active: current === index
            })}
          >
            <span>{val.pageId}</span>
          </li>
        );
      })}
    </ul>
  );
}

export default PageList;

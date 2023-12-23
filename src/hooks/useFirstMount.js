/**
 * 判断是否是第一次渲染
 */

import { useRef } from "react";

export function useFirstMount() {
  const isFirst = useRef(true);

  //如果是初次渲染
  if (isFirst.current) {
    isFirst.current = false;

    return true;
  }

  return isFirst.current;
}

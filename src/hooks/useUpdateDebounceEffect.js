/**
 * 忽略首次渲染、防抖
 */

import { useEffect, useRef, useCallback } from "react";

export const useUpdateDebounceEffect = (callback, dependencies, delay) => {
  const isFirstRender = useRef(true);

  // 使用 useCallback 确保在依赖项变化时返回新的回调
  const debouncedCallback = useCallback(callback, dependencies);

  useEffect(() => {
    // 首次渲染时不执行回调
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    // 设置一个定时器
    const timer = setTimeout(() => {
      // 当定时器触发时执行回调
      debouncedCallback();
    }, delay);

    // 在每次 effect 运行之前清除上一个定时器
    return () => clearTimeout(timer);

    // 在依赖项或延迟改变时重新运行 effect
  }, [debouncedCallback, delay]);
};

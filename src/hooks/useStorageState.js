/**
 * 用为缓存的hook，可以像setState一样使用
 */
import { useState } from "react";

// 保存值到本地存储或会话存储
const valueToStorageFun = ({ type, key, value }) => {
  if (typeof window !== "undefined") {
    switch (type) {
      case "localStorage":
        window.localStorage.setItem(key, JSON.stringify(value));
        break;
      case "sessionStorage":
        window.sessionStorage.setItem(key, JSON.stringify(value));
        break;
      default:
        window.localStorage.setItem(key, JSON.stringify(value));
    }
  }
};

// 自定义 Hook，用于在组件中处理具有本地存储/会话存储支持的状态
export function useStorageState(key, initialValue, options) {
  const { priority = "local", type = "localStorage" } = {
    priority: "local",
    type: "localStorage",
    ...options,
  };

  // 使用 useState 初始化状态值
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }
    try {
      // 根据类型判断从何处读取数据
      let item;
      switch (type) {
        case "localStorage":
          item = window.localStorage.getItem(key);
          break;
        case "sessionStorage":
          item = window.sessionStorage.getItem(key);
          break;
        default:
          item = window.localStorage.getItem(key);
      }

      // 解析 state 并按优先级进行处理
      if (item) {
        switch (priority) {
          case "local":
            return JSON.parse(item);
          case "initialValue":
            valueToStorageFun({ key, type, value: initialValue });
            return initialValue;
          default:
            return JSON.parse(item);
        }
      } else {
        return initialValue;
      }
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  // 定义 setValue 函数，用于更新状态值并同步到存储中
  const setValue = (value) => {
    try {
      // 和 useState 保持相同用法，支持函数和默认值
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      // 保存 state
      setStoredValue(valueToStore);
      // 同步到 storage 中
      valueToStorageFun({ key, type, value: valueToStore });
    } catch (error) {
      console.log(error);
    }
  };

  // 返回状态值和更新函数
  return [storedValue, setValue];
}

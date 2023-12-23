import { render, screen } from "@testing-library/react";
import { useFirstMount } from "./useFirstMount";

// 在这里定义一个简单的组件，用于测试 useFirstMount
function ComponentToTest() {
  const isFirstMount = useFirstMount();

  // 渲染时，将 isFirstMount 值显示在页面上
  return <div>{isFirstMount.toString()}</div>;
}

test("useFirstMount returns true on first render", () => {
  // 渲染组件
  render(<ComponentToTest />);

  // 在初次渲染时，useFirstMount 应该返回 true
  expect(useFirstMount()).toBe(true);
});

test("useFirstMount returns false on subsequent renders", () => {
  // 渲染组件
  render(<ComponentToTest />);

  // 初次渲染后，useFirstMount 应该返回 false
  expect(useFirstMount()).toBe(false);
});

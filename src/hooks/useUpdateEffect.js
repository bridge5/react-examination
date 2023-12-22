import { useEffect } from "react";
import { useFirstMount } from "./useFirstMount";

export const useUpdateEffect = (effect, deps) => {
  const isFirstMount = useFirstMount(); //判断是否是初次渲染

  useEffect(() => {
    if (!isFirstMount) {
      return effect(); //二次渲染才执行
    }
  }, deps);
};

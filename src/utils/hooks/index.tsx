import { EffectCallback, useRef, useState, useEffect, useCallback } from "react";

export const useThrottle = <T,>(value: T, ms: number = 200) => {
  const [state, setState] = useState<T>(value);
  const timeout = useRef<any>(null);
  const nextValue = useRef(null) as any;
  const hasNextValue = useRef(0) as any;

  useEffect(() => {
    if (!timeout.current) {
      setState(value);
      const timeoutCallback = () => {
        if (hasNextValue.current) {
          hasNextValue.current = false;
          setState(nextValue.current);
          timeout.current = setTimeout(timeoutCallback, ms);
        } else {
          timeout.current = null;
        }
      };
      timeout.current = setTimeout(timeoutCallback, ms);
    } else {
      nextValue.current = value;
      hasNextValue.current = true;
    }
  }, [value, hasNextValue, ms, nextValue]);

  useUnmount(() => {
    clearTimeout(timeout.current);
  });

  return state;
};

export const useUnmount = (fn: () => void | undefined) => {
  useEffectOnce(() => fn);
};
export const useEffectOnce = (effect: EffectCallback) => {
  useEffect(effect, []);
};

export const useDelayNextChildren = (children: React.ReactNode, delay: number) => {
  const [finalChildren, setFinalChildren] = useState(null);

  const { reset } = useTimeout(() => {
    setFinalChildren(children);
  }, delay);

  useEffect(() => {
    reset();
  }, [reset, children]);

  return finalChildren || null;
};

export const useTimeout = (callback: () => void, delay: number) => {
  // save id in a ref
  const timeoutId = useRef(null);

  // save callback as a ref so we can update the timeout callback without resetting the clock
  const savedCallback = useRef(null);
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // clear the timeout and start a new one, updating the timeoutId ref
  const reset = useCallback(() => {
    clearTimeout(timeoutId.current);

    const id = setTimeout(savedCallback.current, delay);
    timeoutId.current = id;
  }, [delay]);

  useEffect(() => {
    if (delay !== null) {
      reset();

      return () => clearTimeout(timeoutId.current);
    }
  }, [delay, reset]);

  return { reset };
};

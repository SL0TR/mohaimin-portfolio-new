import { useEffect, useRef } from "react";
import Typed, { TypedOptions } from "typed.js";

type UseTypedProps = {
  strings: string[];
} & Partial<TypedOptions>;

function useTyped({ strings, ...typedOptions }: UseTypedProps) {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings,
      typeSpeed: 80,
      fadeOut: true,
      loop: true,
      ...typedOptions,
    });

    return () => {
      typed.destroy();
    };
  }, [strings, typedOptions]);

  return el;
}

export default useTyped;

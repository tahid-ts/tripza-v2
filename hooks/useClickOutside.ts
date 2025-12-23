import { RefObject, useEffect } from "react";

type ClickOutsideRef<T extends HTMLElement = HTMLElement> = RefObject<T | null>;

function useClickOutside<T extends HTMLElement = HTMLElement>(
  ref: ClickOutsideRef<T> | ClickOutsideRef<T>[],
  handler: (event: MouseEvent | TouchEvent) => void
): void;

function useClickOutside<T extends HTMLElement = HTMLElement>(
  ref: ClickOutsideRef<T> | ClickOutsideRef<T>[],
  handler: (event: MouseEvent | TouchEvent) => void
) {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      const refs = Array.isArray(ref) ? ref : [ref];
      const clickedInside = refs.some((r) => {
        return r.current && r.current.contains(event.target as Node);
      });
      if (!clickedInside) {
        handler(event);
      }
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

export default useClickOutside;

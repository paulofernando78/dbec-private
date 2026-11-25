import { useEffect, useRef, useState } from "react";

/**
 * Acompanha a altura de um elemento enquanto ele muda de tamanho.
 *
 * Usado para a lista empilhada no mobile ter exatamente a mesma altura do
 * formulário, como ela já tem no layout lado a lado.
 */
export function useElementHeight<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const update = () => setHeight(element.getBoundingClientRect().height);

    update();

    const observer = new ResizeObserver(update);
    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return [ref, height] as const;
}

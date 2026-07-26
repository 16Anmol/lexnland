"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mx = 0,
      my = 0,
      rx = 0,
      ry = 0;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = `${mx}px`;
        dotRef.current.style.top = `${my}px`;
      }
    };

    const loop = () => {
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;
      if (ringRef.current) {
        ringRef.current.style.left = `${rx}px`;
        ringRef.current.style.top = `${ry}px`;
      }
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(loop);

    const hoverables = () =>
      document.querySelectorAll(
        "a, button, .cursor-hover, input, textarea"
      );

    const addHover = () => ringRef.current?.classList.add("hover");
    const removeHover = () => ringRef.current?.classList.remove("hover");

    const attach = () => {
      hoverables().forEach((el) => {
        el.addEventListener("mouseenter", addHover);
        el.addEventListener("mouseleave", removeHover);
      });
    };
    attach();
    // Re-attach periodically since content mounts client-side across sections
    const interval = setInterval(attach, 1500);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="cursor-dot hidden md:block w-[7px] h-[7px] bg-wine"
      />
      <div
        ref={ringRef}
        className="cursor-ring hidden md:block w-[38px] h-[38px] border border-wine/50 transition-[width,height,border-color,background] duration-300 [&.hover]:w-16 [&.hover]:h-16 [&.hover]:bg-wine/10 [&.hover]:border-wine"
      />
    </>
  );
}

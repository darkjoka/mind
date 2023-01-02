"use client";
import React, { useEffect, useRef } from "react";

export default function BackDrop() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    if (canvasRef.current) {
      const canvasContext = canvasRef.current.getContext("2d");
      canvasRef.current.width = innerWidth;
      canvasRef.current.height = innerHeight;

      if (canvasContext) {
        for (let row = 5; row < window.innerWidth; row += 20) {
          for (let column = 5; column < window.innerHeight; column += 20) {
            canvasContext.beginPath();
            canvasContext.fillStyle = "rgba(220,220,220,.7)";
            canvasContext.arc(row, column, 2, 0, Math.PI * 2, false);
            canvasContext.fill();
          }
        }
      }
    }
  }, []);

  return <canvas ref={canvasRef} className=""></canvas>;
}

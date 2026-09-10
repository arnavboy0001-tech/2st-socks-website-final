import { useEffect, useRef, useState } from "react";

export function Interactive3DSock() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const mouseX = e.clientX - centerX;
      const mouseY = e.clientY - centerY;

      // Calculate rotation based on mouse position (max ±20 degrees for more dramatic effect)
      const rotateY = (mouseX / (window.innerWidth / 2)) * 20;
      const rotateX = -(mouseY / (window.innerHeight / 2)) * 20;

      // Calculate mouse position percentage for glow effect
      const xPercent = (e.clientX / window.innerWidth) * 100;
      const yPercent = (e.clientY / window.innerHeight) * 100;

      setRotation({ x: rotateX, y: rotateY });
      setMousePos({ x: xPercent, y: yPercent });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 flex items-center justify-center"
      style={{ perspective: "1200px" }}
    >
      {/* Dynamic glow that follows mouse */}
      <div
        className="absolute h-[600px] w-[600px] rounded-full opacity-30 blur-[100px] transition-all duration-500 ease-out lg:h-[800px] lg:w-[800px]"
        style={{
          background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(194, 65, 12, 0.4) 0%, rgba(234, 88, 12, 0.2) 50%, transparent 70%)`,
        }}
      />

      <div
        className="relative transition-transform duration-500 ease-out"
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) translateZ(50px)`,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Shadow layer for depth */}
        <div
          className="absolute inset-0 opacity-40 blur-2xl"
          style={{
            background: "radial-gradient(ellipse at center, rgba(194, 65, 12, 0.3) 0%, transparent 70%)",
            transform: "translateZ(-50px) scale(1.1)",
          }}
        />

        {/* Main 3D sock image */}
        <img
          src="https://image.qwenlm.ai/generated-images/a49e9e08-5748-4b6e-9e90-9c2dac4534cb/_result.png"
          alt="3D Interactive Sock"
          className="h-[500px] w-[500px] object-contain opacity-40 lg:h-[700px] lg:w-[700px]"
          style={{
            filter: "drop-shadow(0 30px 80px rgba(194, 65, 12, 0.4)) drop-shadow(0 10px 30px rgba(234, 88, 12, 0.3))",
            transform: "translateZ(0px)",
          }}
        />

        {/* Floating particles at different depths */}
        <div className="absolute inset-0" style={{ transformStyle: "preserve-3d" }}>
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${4 + i * 2}px`,
                height: `${4 + i * 2}px`,
                top: `${15 + i * 10}%`,
                left: `${10 + i * 10}%`,
                background: i % 2 === 0 ? "rgba(251, 191, 36, 0.5)" : "rgba(194, 65, 12, 0.4)",
                animation: `float-y ${4 + i * 0.7}s ease-in-out infinite`,
                animationDelay: `${i * 0.4}s`,
                transform: `translateZ(${i * 15 - 30}px)`,
                boxShadow: "0 0 20px rgba(251, 191, 36, 0.3)",
              }}
            />
          ))}
        </div>

        {/* Light reflection effect */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: `linear-gradient(${45 + rotation.y * 2}deg, transparent 30%, rgba(255, 255, 255, 0.3) 50%, transparent 70%)`,
            transform: "translateZ(10px)",
          }}
        />
      </div>
    </div>
  );
}

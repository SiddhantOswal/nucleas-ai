"use client"

import createGlobe, { COBEOptions } from "cobe"
import { useCallback, useEffect, useRef } from "react"

import { cn } from "@/lib/utils"

const GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 0,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [1, 1, 1],
  markerColor: [251 / 255, 100 / 255, 21 / 255],
  glowColor: [1, 1, 1],
  markers: [
    { location: [14.5995, 120.9842], size: 0.03 },
    { location: [19.076, 72.8777], size: 0.1 },
    { location: [23.8103, 90.4125], size: 0.05 },
    { location: [30.0444, 31.2357], size: 0.07 },
    { location: [39.9042, 116.4074], size: 0.08 },
    { location: [-23.5505, -46.6333], size: 0.1 },
    { location: [19.4326, -99.1332], size: 0.1 },
    { location: [40.7128, -74.006], size: 0.1 },
    { location: [34.6937, 135.5022], size: 0.05 },
    { location: [41.0082, 28.9784], size: 0.06 },
  ],
}

export function Globe({
  className,
  config = GLOBE_CONFIG,
}: {
  className?: string
  config?: COBEOptions
}) {
  const phi = useRef(0)
  const width = useRef(0)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const pointerInteracting = useRef<number | null>(null)
  const pointerInteractionMovement = useRef(0)
  const velocity = useRef(0)
  const lastPointerX = useRef(0)
  const globeInstance = useRef<any>(null)

  const updatePointerInteraction = (value: number | null, clientX?: number) => {
    pointerInteracting.current = value
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab"
    }
    if (value !== null && typeof clientX === "number") {
      lastPointerX.current = clientX
    }
  }

  const onPointerMove = (clientX: number) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - lastPointerX.current
      lastPointerX.current = clientX
      phi.current += delta / 200
      velocity.current = delta / 200
    }
  }

  // Memoize onRender so it doesn't get recreated on every render
  const onRender = useCallback(
    (state: Record<string, any>) => {
      if (!pointerInteracting.current) {
        phi.current += 0.005 + velocity.current
        // Apply friction for inertia
        velocity.current *= 0.95
        if (Math.abs(velocity.current) < 0.00001) velocity.current = 0
      }
      state.phi = phi.current
      state.width = width.current * 2
      state.height = width.current * 2
    },
    [],
  )

  // Only update width ref on resize
  const onResize = useCallback(() => {
    if (canvasRef.current) {
      width.current = canvasRef.current.offsetWidth
    }
  }, [])

  useEffect(() => {
    window.addEventListener("resize", onResize)
    onResize()
    // Create globe only once
    globeInstance.current = createGlobe(canvasRef.current!, {
      ...config,
      width: width.current * 2,
      height: width.current * 2,
      onRender,
    })
    setTimeout(() => (canvasRef.current!.style.opacity = "1"))
    return () => {
      globeInstance.current && globeInstance.current.destroy()
      window.removeEventListener("resize", onResize)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div
      className={cn(
        "absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[600px]",
        className,
      )}
    >
      <canvas
        className={cn(
          "size-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]",
        )}
        ref={canvasRef}
        onPointerDown={(e) => updatePointerInteraction(e.clientX, e.clientX)}
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => onPointerMove(e.clientX)}
        onTouchMove={(e) => e.touches[0] && onPointerMove(e.touches[0].clientX)}
      />
    </div>
  )
}

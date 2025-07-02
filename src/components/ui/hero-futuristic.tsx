'use client';

import { Canvas, extend, useFrame, useThree } from '@react-three/fiber';
import { useMemo, useRef, useState, useEffect } from 'react';
import * as THREE from 'three';
import { Mesh } from 'three';

extend(THREE as any);

const WIDTH = 300;
const HEIGHT = 300;

const Scene = () => {
  // Texture logic removed for now
  // const [rawMap, depthMap] = useTexture([TEXTUREMAP.src, DEPTHMAP.src]);
  const meshRef = useRef<Mesh>(null);
  const [visible, setVisible] = useState(false);

  // useEffect(() => {
  //   if (rawMap && depthMap) {
  //     setVisible(true);
  //   }
  // }, [rawMap, depthMap]);

  // const material = useMemo(() => {
  //   return new THREE.MeshBasicMaterial({
  //     map: rawMap,
  //     transparent: true,
  //     opacity: 0.8,
  //   });
  // }, [rawMap]);

  // const [w, h] = useAspect(WIDTH, HEIGHT);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = Math.sin(clock.getElapsedTime() * 0.3) * 0.1;
      if (meshRef.current.material && 'opacity' in meshRef.current.material) {
        (meshRef.current.material as any).opacity = visible ? 0.8 : 0;
      }
    }
  });

  // const scaleFactor = 0.40;
  // return (
  //   <mesh ref={meshRef} scale={[w * scaleFactor, h * scaleFactor, 1]} material={material}>
  //     <planeGeometry />
  //   </mesh>
  // );
  return null;
};

export const HeroFuturistic = () => {
  const titleWords = 'NucleasAI CDP'.split(' ');
  const subtitle = 'The nucleus of your customer data universe.';
  const [visibleWords, setVisibleWords] = useState(0);
  const [subtitleVisible, setSubtitleVisible] = useState(false);
  const [delays, setDelays] = useState<number[]>([]);
  const [subtitleDelay, setSubtitleDelay] = useState(0);

  useEffect(() => {
    setDelays(titleWords.map(() => Math.random() * 0.07));
    setSubtitleDelay(Math.random() * 0.1);
  }, [titleWords.length]);

  useEffect(() => {
    if (visibleWords < titleWords.length) {
      const timeout = setTimeout(() => setVisibleWords(visibleWords + 1), 600);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => setSubtitleVisible(true), 800);
      return () => clearTimeout(timeout);
    }
  }, [visibleWords, titleWords.length]);

  return (
    <div className="h-screen relative overflow-hidden bg-black">
      <div className="h-screen uppercase items-center w-full absolute z-10 pointer-events-none px-10 flex justify-center flex-col">
        <div className="text-4xl md:text-6xl xl:text-7xl 2xl:text-8xl font-extrabold">
          <div className="flex space-x-2 lg:space-x-6 overflow-hidden">
            {titleWords.map((word, index) => (
              <div
                key={index}
                className={`${index < visibleWords ? 'fade-in' : ''} bg-gradient-to-r from-pink-400 via-orange-400 to-red-400 bg-clip-text text-transparent`}
                style={{ 
                  animationDelay: `${index * 0.13 + (delays[index] || 0)}s`, 
                  opacity: index < visibleWords ? undefined : 0 
                }}
              >
                {word}
              </div>
            ))}
          </div>
        </div>
        <div className="text-lg md:text-2xl xl:text-3xl 2xl:text-4xl mt-4 overflow-hidden text-purple-300 font-bold">
          <div
            className={subtitleVisible ? 'fade-in-subtitle' : ''}
            style={{ 
              animationDelay: `${titleWords.length * 0.13 + 0.2 + subtitleDelay}s`, 
              opacity: subtitleVisible ? undefined : 0 
            }}
          >
            {subtitle}
          </div>
        </div>
      </div>

      <button
        className="explore-btn absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 opacity-0"
        style={{ animationDelay: '2.2s' }}
      >
        <span className="text-white font-medium">Scroll to explore</span>
        <span className="explore-arrow ml-2">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="arrow-svg">
            <path d="M11 5V17" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            <path d="M6 12L11 17L16 12" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </span>
      </button>
    </div>
  );
};

export default HeroFuturistic;

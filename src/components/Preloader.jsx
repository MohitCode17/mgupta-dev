import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import gsap from "gsap";

const Preloader = ({ onComplete }) => {
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = window.innerWidth < 768 ? 6 : 4;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Core (glowing sphere)
    const coreGeometry = new THREE.SphereGeometry(0.5, 64, 64);
    const coreMaterial = new THREE.MeshBasicMaterial({ color: 0xffaa00 });
    const core = new THREE.Mesh(coreGeometry, coreMaterial);
    scene.add(core);

    // Orbiting rings
    const orbitCount = 5;
    const orbitingElements = [];
    for (let i = 0; i < orbitCount; i++) {
      const orbitGeometry = new THREE.RingGeometry(
        0.7 + i * 0.3,
        0.72 + i * 0.3,
        64
      );
      const orbitMaterial = new THREE.MeshBasicMaterial({
        color: new THREE.Color(`hsl(${Math.random() * 360}, 100%, 50%)`),
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.7,
      });
      const ring = new THREE.Mesh(orbitGeometry, orbitMaterial);
      ring.rotation.x = Math.random() * Math.PI;
      ring.rotation.y = Math.random() * Math.PI;
      scene.add(ring);
      orbitingElements.push(ring);
    }

    // Animate
    const animate = () => {
      requestAnimationFrame(animate);
      orbitingElements.forEach((ring, idx) => {
        ring.rotation.y += 0.01 + idx * 0.002;
        ring.rotation.x += 0.005;
      });
      core.rotation.y += 0.005;
      renderer.render(scene, camera);
    };
    animate();

    // Resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // Loading simulation
    gsap.to(
      {},
      {
        duration: 3,
        onUpdate: function () {
          setProgress(Math.floor(this.progress() * 100));
        },
        onComplete: () => {
          // Core expansion and fade
          gsap.to(core.scale, {
            x: 5,
            y: 5,
            z: 5,
            duration: 1,
            ease: "power3.inOut",
          });
          gsap.to(core.material, { opacity: 0, duration: 1, delay: 0.2 });

          // Orbiting elements explode outward
          orbitingElements.forEach((ring) => {
            gsap.to(ring.position, {
              x: (Math.random() - 0.5) * 10,
              y: (Math.random() - 0.5) * 10,
              z: (Math.random() - 0.5) * 10,
              duration: 1,
              ease: "power4.out",
            });
            gsap.to(ring.material, { opacity: 0, duration: 1 });
          });

          // Fade out loader container
          gsap.to(containerRef.current, {
            opacity: 0,
            duration: 0.5,
            delay: 1,
            onComplete,
          });
        },
      }
    );

    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
    };
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed top-0 left-0 w-full h-screen bg-black z-[9999] flex items-center justify-center"
    >
      <p className="absolute text-white text-4xl sm:text-3xl xs:text-2xl font-bold tracking-widest">
        {progress}%
      </p>
    </div>
  );
};

export default Preloader;

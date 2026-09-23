'use client';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Background3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    
    const W = window.innerWidth;
    const H = window.innerHeight;
    
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(W, H);
    renderer.setClearColor(0, 0);
    
    const scene = new THREE.Scene();
    const cam = new THREE.PerspectiveCamera(50, W / H, 0.1, 100);
    cam.position.z = 6;

    // Grid points
    const pts: number[] = [];
    const cols = 100, rows = 70;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        pts.push((c / (cols - 1) - 0.5) * 80, (r / (rows - 1) - 0.5) * 56, (Math.random() - 0.5) * 0.8);
      }
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(pts, 3));
    const mat = new THREE.PointsMaterial({ color: 0xFF3D00, size: 0.06, transparent: true, opacity: 0.35 });
    const mesh = new THREE.Points(geo, mat);
    
    // Group for the grid so we can rotate everything together
    const gridGroup = new THREE.Group();
    gridGroup.add(mesh);

    // Grid lines
    const lineMat = new THREE.LineBasicMaterial({ color: 0xFF3D00, transparent: true, opacity: 0.07 });
    
    // Horizontal lines
    for (let r = 0; r < rows; r++) {
      const lineGeo = new THREE.BufferGeometry();
      const v: number[] = [];
      for (let c = 0; c < cols; c++) {
        const i = (r * cols + c) * 3;
        v.push(pts[i], pts[i + 1], pts[i + 2]);
      }
      lineGeo.setAttribute('position', new THREE.Float32BufferAttribute(v, 3));
      gridGroup.add(new THREE.Line(lineGeo, lineMat));
    }
    
    // Vertical lines
    for (let c = 0; c < cols; c++) {
      const lineGeo = new THREE.BufferGeometry();
      const v: number[] = [];
      for (let r = 0; r < rows; r++) {
        const i = (r * cols + c) * 3;
        v.push(pts[i], pts[i + 1], pts[i + 2]);
      }
      lineGeo.setAttribute('position', new THREE.Float32BufferAttribute(v, 3));
      gridGroup.add(new THREE.Line(lineGeo, lineMat));
    }

    scene.add(gridGroup);

    // Blob (Orb)
    const bGeo = new THREE.SphereGeometry(1.2, 80, 80);
    const bPos = bGeo.attributes.position as THREE.BufferAttribute;
    const bOrig = new Float32Array(bPos.array);
    const bMat = new THREE.MeshPhongMaterial({
      color: 0xFF3D00,
      emissive: 0xFF6B35,
      emissiveIntensity: 0.15,
      shininess: 80,
      transparent: true,
      opacity: 0.08
    });
    const blob = new THREE.Mesh(bGeo, bMat);
    blob.position.set(3, -1, -1);
    scene.add(blob);

    // Lights
    const aLight = new THREE.AmbientLight(0xffffff, 0.2);
    scene.add(aLight);
    const pL = new THREE.PointLight(0xFF3D00, 2, 14);
    pL.position.set(3, 2, 3);
    scene.add(pL);

    function noise(x: number, y: number, z: number) {
      return Math.sin(x * 1.6 + z * 0.7) * Math.cos(y * 1.4 + z * 1.1) * 0.5;
    }

    let t = 0;
    let mx = 0;
    let my = 0;

    const onMouseMove = (e: MouseEvent) => {
      mx = (e.clientX / window.innerWidth - 0.5) * 2;
      my = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    document.addEventListener('mousemove', onMouseMove);

    let rafId: number;
    const animate = () => {
      rafId = requestAnimationFrame(animate);
      t += 0.003;
      
      gridGroup.rotation.z = t * 0.03;
      gridGroup.rotation.x = my * 0.04;
      gridGroup.rotation.y = mx * 0.03 + t * 0.015;

      for (let i = 0; i < bPos.count; i++) {
        const ox = bOrig[i * 3];
        const oy = bOrig[i * 3 + 1];
        const oz = bOrig[i * 3 + 2];
        const l = Math.sqrt(ox * ox + oy * oy + oz * oz);
        const d = noise(ox / l * 2 + t, oy / l * 2 + t * 0.9, oz / l * 2 + t * 0.7) * 0.3;
        bPos.setXYZ(i, ox + (ox / l) * d, oy + (oy / l) * d, oz + (oz / l) * d);
      }
      bPos.needsUpdate = true;
      bGeo.computeVertexNormals();
      
      blob.rotation.y = t * 0.2;
      blob.rotation.x = t * 0.1;
      
      pL.position.x += (mx * 3 - pL.position.x) * 0.04;
      pL.position.y += (my * 3 - pL.position.y) * 0.04;
      
      renderer.render(scene, cam);
    };
    animate();

    const onResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      cam.aspect = window.innerWidth / window.innerHeight;
      cam.updateProjectionMatrix();
    };
    window.addEventListener('resize', onResize);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(rafId);
      
      // Cleanup
      geo.dispose();
      mat.dispose();
      lineMat.dispose();
      
      // Dispose grid group children
      gridGroup.children.forEach(child => {
        if (child instanceof THREE.Line) {
          child.geometry.dispose();
        }
      });
      
      bGeo.dispose();
      bMat.dispose();
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} id="glCanvas" style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none', opacity: 0.55 }} />;
}

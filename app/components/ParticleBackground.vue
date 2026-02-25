<template>
  <div ref="containerRef" class="fixed inset-0 pointer-events-none" />
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'
import * as THREE from 'three'

const containerRef = ref<HTMLElement | null>(null)

let scene: THREE.Scene
let camera: THREE.PerspectiveCamera
let renderer: THREE.WebGLRenderer
let animationId: number
let mouse = { x: 0, y: 0 }

onMounted(() => {
  if (!containerRef.value) return

  scene = new THREE.Scene()

  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    2000
  )
  camera.position.z = 200

  renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

  // 🌅 Elegant "Your Name" inspired gradient background
  const canvas = renderer.domElement
  const context = canvas.getContext('2d')
  if (context) {
    const gradient = context.createLinearGradient(0, 0, 0, window.innerHeight)
    gradient.addColorStop(0, '#fad5d5')      // soft pink top
    gradient.addColorStop(0.25, '#e8c4f0')   // soft lavender
    gradient.addColorStop(0.5, '#d4e8f7')    // light blue
    gradient.addColorStop(0.75, '#f5e6d3')   // soft peach
    gradient.addColorStop(1, '#e8f0f5')      // pale blue bottom
  }
  renderer.setClearColor(0xfad5d5, 1) // soft pink base with transition

  containerRef.value.appendChild(renderer.domElement)

  // =============================
  // ✨ ELEGANT LIGHT PARTICLES (Kimi no Nawa Vibes)
  // =============================
  // Enhanced soft stars for bokeh effect
  const starCount = 2000
  const starPositions = new Float32Array(starCount * 3)
  const starSizes = new Float32Array(starCount)

  for (let i = 0; i < starCount; i++) {
    const i3 = i * 3
    starPositions[i3] = (Math.random() - 0.5) * 2500
    starPositions[i3 + 1] = Math.random() * 1000 - 300
    starPositions[i3 + 2] = (Math.random() - 0.5) * 1000
    starSizes[i] = Math.random() * 3 + 0.5 // varied sizes for bokeh
  }

  const starGeometry = new THREE.BufferGeometry()
  starGeometry.setAttribute(
    'position',
    new THREE.BufferAttribute(starPositions, 3)
  )
  starGeometry.setAttribute(
    'size',
    new THREE.BufferAttribute(starSizes, 1)
  )

  const starMaterial = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 2,
    transparent: true,
    opacity: 0.5,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    sizeAttenuation: true,
  })

  const stars = new THREE.Points(starGeometry, starMaterial)
  scene.add(stars)

  // =============================
  // 🌈 ELEGANT NEBULA GLOW (Soft Pastel Colors)
  // =============================
  const palette = [
    new THREE.Color(0xffc0d9), // soft pink
    new THREE.Color(0xe8c4f0), // lavender
    new THREE.Color(0xd4dff7), // light blue
    new THREE.Color(0xf5dcc4), // soft peach
    new THREE.Color(0xd9e8e8), // pale mint
    new THREE.Color(0xf0dce8), // soft mauve
  ]

  const cloudCount = 800
  const cloudPositions = new Float32Array(cloudCount * 3)
  const cloudColors = new Float32Array(cloudCount * 3)

  for (let i = 0; i < cloudCount; i++) {
    const i3 = i * 3

    cloudPositions[i3] = (Math.random() - 0.5) * 1600
    cloudPositions[i3 + 1] = (Math.random() - 0.5) * 800
    cloudPositions[i3 + 2] = (Math.random() - 0.5) * 800

    const baseColor = palette[Math.floor(Math.random() * palette.length)]!
    const color = baseColor.clone()

    cloudColors[i3] = color.r
    cloudColors[i3 + 1] = color.g
    cloudColors[i3 + 2] = color.b
  }

  const cloudGeometry = new THREE.BufferGeometry()
  cloudGeometry.setAttribute(
    'position',
    new THREE.BufferAttribute(cloudPositions, 3)
  )
  cloudGeometry.setAttribute(
    'color',
    new THREE.BufferAttribute(cloudColors, 3)
  )

  const cloudMaterial = new THREE.PointsMaterial({
    size: 12,
    vertexColors: true,
    transparent: true,
    opacity: 0.25,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    sizeAttenuation: true,
  })

  const clouds = new THREE.Points(cloudGeometry, cloudMaterial)
  scene.add(clouds)

  // =============================
  // 🖱 Mouse Parallax
  // =============================
  const handleMouseMove = (e: MouseEvent) => {
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1
    mouse.y = -(e.clientY / window.innerHeight) * 2 + 1
  }

  window.addEventListener('mousemove', handleMouseMove)

  // =============================
  // 🎬 Elegant Animation (Subtle & Smooth)
  // =============================
  const animate = () => {
    animationId = requestAnimationFrame(animate)

    // Very subtle rotation for depth perception
    stars.rotation.y += 0.00003
    clouds.rotation.y += 0.00015

    // Smooth parallax following mouse
    stars.position.x += (mouse.x * 20 - stars.position.x) * 0.005
    stars.position.y += (mouse.y * 15 - stars.position.y) * 0.005

    clouds.position.x += (mouse.x * 8 - clouds.position.x) * 0.01
    clouds.position.y += (mouse.y * 5 - clouds.position.y) * 0.01

    renderer.render(scene, camera)
  }

  animate()

  const handleResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
  }

  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  cancelAnimationFrame(animationId)
  renderer?.dispose()
})
</script>
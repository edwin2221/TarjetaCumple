import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';

// Crear la escena
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffff00); // Fondo amarillo puro

// Crear la cámara
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 1, 6);

// Crear el renderizador
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Controles de cámara
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

// Agregar luz
const light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(5, 5, 5);
scene.add(light);

// Cargar fuente y agregar texto 3D
const fontLoader = new FontLoader();
fontLoader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', function (font) {
    
    const textMaterial = new THREE.MeshStandardMaterial({ color: 0x000000 }); // Letras negras

    // Texto "¡Feliz Cumpleaños!"
    const textGeo1 = new TextGeometry('¡Feliz Cumpleaños!', {
        font: font,
        size: 0.5,
        height: 0.1,
    });

    const textMesh1 = new THREE.Mesh(textGeo1, textMaterial);
    textMesh1.position.set(-2.5, 1.5, 0);
    scene.add(textMesh1);

    // Texto con el nombre
    const textGeo2 = new TextGeometry('Arturo Augusto', {
        font: font,
        size: 0.4,
        height: 0.1,
    });

    const textMesh2 = new THREE.Mesh(textGeo2, textMaterial);
    textMesh2.position.set(-2, 0.8, 0);
    scene.add(textMesh2);

    const textGeo3 = new TextGeometry('Maradiaga Vilches', {
        font: font,
        size: 0.4,
        height: 0.1,
    });

    const textMesh3 = new THREE.Mesh(textGeo3, textMaterial);
    textMesh3.position.set(-2.3, 0.3, 0);
    scene.add(textMesh3);

    // Mensaje bonito
    const messageGeo = new TextGeometry('Que este día sea', {
        font: font,
        size: 0.3,
        height: 0.1,
    });

    const messageMesh = new THREE.Mesh(messageGeo, textMaterial);
    messageMesh.position.set(-1.5, -0.5, 0);
    scene.add(messageMesh);

    const messageGeo2 = new TextGeometry('tan especial como tú.', {
        font: font,
        size: 0.3,
        height: 0.1,
    });

    const messageMesh2 = new THREE.Mesh(messageGeo2, textMaterial);
    messageMesh2.position.set(-1.8, -1, 0);
    scene.add(messageMesh2);
});

// Animación
function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}

animate();

// Ajustar el renderizador si cambia el tamaño de la ventana
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});

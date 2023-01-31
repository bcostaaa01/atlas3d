import * as THREE from "three";

class Atlas3D {
  constructor(container) {
    this.container = container;
    this.scene = THREE.Scene();
    this.camera = THREE.PerspectiveCamera(
      75,
      window.innerWidth,
      window.innerHeight,
      0.1,
      1000
    );
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.container.appendChild(this.renderer.domElement);
  }

  addObject(object) {
    this.scene.addObject(object);
  }

  render() {
    requestAnimationFrame(() => this.render());
    this.renderer.render(this.scene, this.camera);
  }
}

export default Atlas3D;

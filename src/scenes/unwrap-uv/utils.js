import * as THREE from "three";
const findNormalizedObjectScale = (scaleVec3, targetObject) => {
  const geometry = new THREE.BoxGeometry(...scaleVec3.toArray());
  const material = new THREE.Material();
  const cube = new THREE.Mesh(geometry, material);

  const size = new THREE.Vector3();
  const scalingBox = new THREE.Box3().setFromObject(targetObject);
  scalingBox.setFromObject(targetObject).getSize(size);

  const scalingVec = new THREE.Vector3(...cube.scale.toArray()).divide(size);
  const scaleValue = Math.min(
    scalingVec.x,
    Math.min(scalingVec.y, scalingVec.z)
  );
  return scaleValue;
};

const findNormalizedObjectPos = (targetObject) => {
  const bbox = new THREE.Box3().setFromObject(targetObject);
  const center = new THREE.Vector3();
  bbox.getCenter(center);
  return center;
};

export const normalizeObjectView = (obj) => {
  const scaleVec3 = new THREE.Vector3(1, 1, 1);
  obj.scale.setScalar(findNormalizedObjectScale(scaleVec3, obj));
  obj.position.sub(findNormalizedObjectPos(obj));
};

export const duplicateSceneWithSource = (scene) => {
  const newScene = new THREE.Scene();
  newScene.add(new THREE.AmbientLight(0xffffff, 1));
  newScene.add(new THREE.DirectionalLight(0xffffff, 1));
  scene.traverse((obj) => {
    obj.name === "sourceImage" && newScene.add(obj.clone());
  });
  return newScene;
};

export const createOrthoCamera = () => {
  const cam = new THREE.OrthographicCamera(-0.5, 0.5, 0.5, -0.5, 0.01, 10);
  cam.position.set(0, 0, 1);
  cam.lookAt(0, 0, 0);
  return cam;
};

export const updateSceneMaterial = (scene, shaderMaterial) => {
  scene.traverse((obj) => {
    if (obj.name === "sourceImage") {
      if (obj instanceof THREE.Mesh) {
        obj.material = shaderMaterial;
        obj.material.needsUpdate = true;
      }
      obj.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.material = shaderMaterial;
          child.material.needsUpdate = true;
        }
      });
    }
  });
};

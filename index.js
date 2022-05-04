window.addEventListener('DOMContentLoaded', init);

console.log(window.innerHeight);

function init(){
	const width = window.innerWidth;
	const height = window.innerHeight-50;

	const renderer = new THREE.WebGLRenderer({
		canvas: document.querySelector('#myCanvas')
	});

	renderer.setSize(width, height);
	renderer.setPixelRatio(window.devicePixelRatio);

	const scene = new THREE.Scene();

///////////////////////////////////////////////
	let aspect = width/height;
	/////////////////////////////////////////////

	const camera = new THREE.PerspectiveCamera(45, aspect, 1, 10000);
	camera.position.set(0, 0, +1000);

	const geometry = new THREE.BoxGeometry(100, 100, 100);
	const material = new THREE.MeshStandardMaterial({
		color: 0x0000ff
	});
	const box = new THREE.Mesh(geometry, material);
	scene.add(box);

	const light = new THREE.DirectionalLight(0xffffff);
	light.intensity=2;
	light.position.set(1, 1, 1);
	scene.add(light);

	tick();

	function tick(){
		requestAnimationFrame(tick);

		box.rotation.x += 0.01;
		box.rotation.y += 0.01;

		renderer.render(scene, camera);
	}
}


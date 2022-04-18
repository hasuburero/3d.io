function init(){
	window.addEventListener("DOMContentLoaded", init);
	const renderer = new THREE.WebGLRenderer({
		canvas: document.querySelector(#myCanvas)
	});

	renderer.setSize(width, height);
	renderer.setPixelRatio(window.devicePixelRatio);

}


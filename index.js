async function start() {
    const constraints = {video: true, audio: false};
    const stream = await navigator.mediaDevices.getUserMedia(constraints);

    const videoElement = document.querySelector('video#localVideo');
    videoElement.srcObject = stream;
}

start();


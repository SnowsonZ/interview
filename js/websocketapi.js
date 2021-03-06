var host = "http://www.reddit.com/r/reactjs.json";
try {
    socket = new WebSocket(host);

    socket.onopen = function (openEvent) {
        document.getElementById("serverStatus").innerHTML =
            'WebSocket Status:: Socket Open';
    };

    socket.onmessage = function (messageEvent) {

        if (messageEvent.data instanceof Blob) {
            var destinationCanvas = document.getElementById('destination');
            var destinationContext = destinationCanvas.getContext('2d');
            var image = new Image();
            image.onload = function () {
                destinationContext.clearRect(0, 0,
                    destinationCanvas.width, destinationCanvas.height);
                destinationContext.drawImage(image, 0, 0);
            }
            image.src = URL.createObjectURL(messageEvent.data);
        } else {
            document.getElementById("serverResponse").innerHTML =
                'Server Reply:: ' + messageEvent.data;
        }
    };

    socket.onerror = function (errorEvent) {
        document.getElementById("serverStatus").innerHTML =
            'WebSocket Status:: Error was reported';
    };

    socket.onclose = function (closeEvent) {
        document.getElementById("serverStatus").innerHTML =
            'WebSocket Status:: Socket Closed';
    };
} catch (exception) {
    if (window.console) console.log(exception);
}

function sendTextMessage() {

    if (socket.readyState != WebSocket.OPEN) return;

    var e = document.getElementById("textmessage");
    socket.send(e.value);
}

function sendBinaryMessage() {
    if (socket.readyState != WebSocket.OPEN) return;

    var sourceCanvas = document.getElementById('source');

    socket.send(sourceCanvas.msToBlob());
}
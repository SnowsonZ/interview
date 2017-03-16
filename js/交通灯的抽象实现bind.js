function poll(...fnList) {
    let currentIndex = 0;

    return function () {
        let fn = fnList[currentIndex++ % fnList.length];
        return fn.apply(null);
    }
}

function setState(state) {
    console.log(state);
}

var changePoll = poll(setState.bind(null, 'red'),
    setState.bind(null, 'yellow'),
    setState.bind(null, 'green'));
window.setInterval(changePoll, 2000);
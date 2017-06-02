function onLoad() {
    // kickoff
    traverse(document.querySelector('.root'));
}

const traverse = (ndRoot) => {
    const queue = [ndRoot];

    while (queue.length) {
        const node = queue.shift();

        printInfo(node);

        if (!node.children.length) {
            continue;
        }

        Array.from(node.children).forEach(x => queue.push(x));
    }
};

const printInfo = (node) => {
    console.log(node.tagName, `.${node.className}`);
};
function onLoad() {
    // kickoff
    // traverse(document.querySelector('.root'));
    devideSearch(document.querySelector('.root'));
}

//广度优先搜索
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

//深度优先搜索
const devideSearch = (nodeRoot) => {
    const nodes = [nodeRoot];

    while(nodes.length) {
        const node = nodes.shift();

        printInfo(node);
        if(node.children.length) {
            for(var item of node.children) {
                if(item.children.length) {
                    devideSearch(item);
                }else {
                    printInfo(item);
                }
            }
        }
    }
}
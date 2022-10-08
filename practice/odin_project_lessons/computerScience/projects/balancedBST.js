// Function to print out the tree in a nice way provided by the odin project.
const prettyPrint = (node, prefix = '', isLeft = true) => {
    if (node.rightChild !== null) {
        prettyPrint(node.rightChild, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
    if (node.leftChild !== null) {
        prettyPrint(node.leftChild, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
}

function cleanArray(array) {
    array.sort((a, b) => {
        return a - b
    })
    // remove duplicates
    return array.filter((item,
        index) => array.indexOf(item) === index);
}

function minValue(root) {
    let minv = root.data;
    while (root.leftChild != null) {
        minv = root.leftChild.data;
        root = root.leftChild;
    }
    return minv;
}

class Node {
    data = null
    leftChild = null
    rightChild = null

    constructor(data) {
        this.data = data;
    }
}

class Tree {
    root = null

    constructor(array) {
        this.array = cleanArray(array);
    }

    buildTree(array, start, end) {
        if (start > end) {
            return null;
        }

        const midPoint = (Math.floor((start + end) / 2));

        let node = new Node(array[midPoint]);

        node.leftChild = this.buildTree(array, start, midPoint - 1);
        node.rightChild = this.buildTree(array, midPoint + 1, end)

        this.root = node
        return node
    }

    insert(root, value) {
        // if the root is empty create node using the value and return it as the root

        if (root && value === root.data) return 'No duplicate values please'
        if (!root) {
            root = new Node(value);
            return root;
        }

        // if node is less than root left side = call insert on the left side
        if (value < root.data) {
            root.leftChild = this.insert(root.leftChild, value);
        }
        // else if node is greater than root right side = call insert on the right side
        else {
            root.rightChild = this.insert(root.rightChild, value);
        }

        // return the node - test if you need to do this
        return root;
    }

    removeNode(value) {
        root = this.deleteNode(root, value)
    }

    deleteNode(root, value) {
        // if the value is a leaf then just remove it
        if (root === null) {
            return root;
        }

        if (value < root.data) {
            root.leftChild = this.deleteNode(root.leftChild, value)
        } else if (value > root.data) {
            root.rightChild = this.deleteNode(root.rightChild, value)
        }

        else {

            if (root.leftChild == null) {
                return root.rightChild;
            } else if (root.rightChild == null) {
                return root.leftChild;
            }

            root.data = minValue(root.rightChild)

            root.rightChild = this.deleteNode(root.rightChild, root.data)
        }

        return root
    }

    find(root, value) {
        let currentRoot = root;
        while (currentRoot.data) {
            if (value === currentRoot.data) {
                return currentRoot;
            } else if (value < currentRoot.data) {
                currentRoot = currentRoot.leftChild;
            } else if (value > currentRoot.data) {
                currentRoot = currentRoot.rightChild;
            }
        }
    }

    levelOrder() {

    }

    inOrder() {

    }

    preOrder() {

    }

    postOrder() {

    }

    height() {

    }

    depth() {

    }

    isBalanced() {

    }

    rebalance() {

    }
}

const pine = new Tree([5, 6, 6, 9, 10, 3, 9, 10, 1]);

let root = pine.buildTree(pine.array, 0, pine.array.length);
console.log(pine.insert(pine.root, 4));
console.log(pine.insert(pine.root, 2));

pine.removeNode(2)
prettyPrint(pine.root)
console.log(pine.find(pine.root, 3))
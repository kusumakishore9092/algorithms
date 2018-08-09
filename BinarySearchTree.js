class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    let newNode = new Node(data);
    if(this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if(newNode.data < node.data) {
      if(node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode)
      }
    } else {
      if(node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode)
      }
    }
  }

  delete(data) {
    this.root = this.deleteNode(this.root, data)
  }

  deleteNode(node, data) {
    if(node === null) {
      return null;
    }

    if(data < node.data) {
      node.left = this.deleteNode(node.left, data)
      return node;
    }
    else if (data > node.data) {
      node.right = this.deleteNode(node.right, data)
      return node;
    } else {
      if(node.left === null && node.right === null) {
        node = null;
        return node;
      }
      else if(node.left === null) {
        node = node.right;
        return node;
      }
      else if(node.right === null) {
        node = node.left;
        return node;
      } else {
        let newRoot = this.findMinNode(node.right)
        node.data = newRoot.data;
        node.right = this.deleteNode(node.right, newNode.data)
        return node;
      }
    }
  }

  findMinNode(node) {
    if(node.left === null) {
      return node;
    }

    return this.indMinNode(node.left)
  }


  inorder(node) {
    if(node !== null) {
      this.inorder(node.left)
      console.log(node.data)
      this.inorder(node.right)
    }
  }

  findRoot() {
    return this.root;
  }
}


let BST = new BinarySearchTree();
BST.insert(10)
BST.insert(11)
BST.insert(8)
BST.insert(7)
BST.insert(22)
BST.insert(13)
BST.delete(13)
const arr = BST.inorder(BST.findRoot())

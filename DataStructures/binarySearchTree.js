class Node {
   constructor(value) {
      this.value = value
      this.left = null
      this.right = null
   }
}

class BST {
   constructor(value) {
      let newNode = new Node(value)
      this.root = newNode
   }

   // add insert method
   insert(value) {
   let newNode = new Node(value)
   if(!this.root) {
      this.root = newNode
      return this
   }
   let temp = this.root
   while(true) {
      if(newNode.value === temp.value) return undefined
      if(newNode.value < temp.value) {
         if(temp.left === null) {
            temp.left = newNode
            return this
         }
         temp = temp.left
      } else {
         if(temp.right === null) {
            temp.right = newNode
            return this
         }
         temp = temp.right
      }
   }
}

// add contains method
contains(value){
   if(!this.root) return `empty tree`;
   let temp = this.root;

   while(temp){
      if(value === temp.value){
         // temp = temp.left;
         return `found`;
      } else if(value < temp.value){
         temp = temp.left;
      } else {
         temp = temp.right;
      }
      
   }
   return `not found`;
}

}

let newTree = new BST(47)

newTree.insert(21);
newTree.insert(76);
newTree.insert(18);
newTree.insert(27);
newTree.insert(52);
newTree.insert(82);






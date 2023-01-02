class Node{
    constructor(data){
        this.data = data;
        this.leftVal = null;
        this.rightVal = null;
    }
}


class Tree{
    constructor(array){
         this.array = [...removeDuplicates(mergeSort(array))];
         this.root = this.buildTree(this.array, 0, this.array.length -1);
         this.preorderData= [];
         this.postOrderData= [];
         this.inorderData = [];
    }

    buildTree(array,start,end){
        if( start > end ) return null;
        let mid = parseInt((start + end) / 2);
        let root = new Node(array[mid]);

        root.leftVal = this.buildTree(array,start, mid-1);
        root.rightVal = this.buildTree(array,start,mid+1);

        return root;
    }


    insert(value,root = this.root){
        if ( root == null){
            return (root = new Node(value));
        }
        if(root.data<value){
            root.rightVal = this.insert(value,root.rightVal)
        }else{
            root.leftVal = this.insert(value,root.leftVal)
        }
        return root;
    }

    traverse(root,array){
        if( array !== undefined) array.push(root.data);
        if(root.leftVal !==null){
            this.traverse(root.leftPart,array);
        }

        if(root.rightVal !== null){
            this.traverse(root.leftVal,array);
        }
        return array;
    }

    find(value, root = this.root){
        if(root == null) return false;
        if(root.data == value) return root;
        if(root.data > value){
            return this.find(value,root.leftVal);
        }else if(root.data < value){
            return this.find(value,root.rightVal);
        }

        return root;
    }


    delete(value, root = this.root){
        if(root == null) return root

        if(root.data > value){
            root.leftVal = this.delete(value, root.leftVal);
        }else if(root.data < value){
            root.rightVal = this.delete(value,root.rightVal);
        } else{
            if(root.leftVal == null){
                return root.rightVal;
            } else if (root.rightVal == null){
                return root.leftVal;
            }
            root.data = minValue(root);
            right.rightVal = this.delete(root.rightVal, root.data);
        }
        return root;
    }



    levelOrder(root){
        const queue = [];
        const result = [];

        if( root == null) return;

        queue.push(root);
        while (queue.length >0){
            let current = queue.shift(root);
            result.push(current.data);

            if(current.leftVal !== null) queue.push(current.leftVal);
            if(current.rightVal !== null) queue.push(current.rightVal);
        }

        return result
    }



    inorder(root){
        if(root == null) return;

        if(root.leftVal !== null){
            this.inorder(root.leftVal);
        }

        if(root.data !== undefined){
            this.inorderData.push(root.data);
        }

        

        if(root.rightVal !== null){
            this.inorder(root.rightVal);
        }

    }

    preorder(root){
        if(root == null) return;

        if(root.data !== undefined){
            this.preorderData.push(root.data);
        }

        if(root.leftVal !== null){
            this.preorder(root.leftVal);
        }

        if(root.rightVal !== null){
            this.preorder(root.rightVal);
        }

    }


    postorder(root){
        if (root == null) return;

        if (root.leftVal !== null) {
          this.postorder(root.leftVal);
        }
    
        if (root.rightVal !== null) {
          this.postorder(root.rightVal);
        }
    
        if (root.data !== undefined) this.postorderData.push(root.data);

    }


    height(root){
        if(root==null){
            return -1
        } else{
            let left = this.height(root.lefVal);
            let right = this.height(root.rightVal);

            return Math.max(left,right) +1;
        }


    }


    depth(node,root = this.root){
        let depth = -1;
        if(node == null) return depth;

        if(
            root == node ||
            (depth = this.depth(node, root.leftVal)) >= 0 ||

            (depth = this.depth(node, root.rightVal) >= 0)
        ){
            return depth + 1;
        }
        return depth;
    }


    isbalanced(root){
        if (root == null) return false;

        let leftHalf = root.leftVal;
        let rightHalf = root.rightVal;

        if(Math.abs(this.height(leftHalf)- this.height(rightHalf)) >1){
            return false;
        } else {
            return true;
        }

    }



    rebalance(){
        if (this.isBalanced(this.root)) return this.root;

        let rebalancedNewTreeArray = [];
        rebalancedNewTreeArray = this.traverse(this.root, rebalancedNewTreeArray);

        let balancedTree = new Tree(rebalancedNewTreeArray);
        return balancedTree.root;
        
    }

}

function minValue(root){
let min = root.data;
while(root != null){
    min = root.data;
    root = root.leftVal;

}
return min;
    }


function mergeSort(array){
    if(array.length == 1) return array;

    const newArray = [];

    const leftVal = mergeSort(array.slice(0,newArray.length/2))
    const rightVal = mergeSort(array.slice(newArray.length/2));

    while(leftVal.length && rightVal.length){
        if(leftVal[0] < rightVal[0]){
            newArray.push(leftVal.shift());
        }else{
            newArray.push(rightVal.shift());
        }
    }

    return [...newArray,...leftVal,...rightVal]
}


function removeDuplicates(array){
    return[...new Set(array)];
}

export {Tree};
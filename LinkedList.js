class Node{

    constructor(value){
        this.value = value;
        this.nextNode = null;




}}

class Linkedlist{


       constructor(value){
        this.head = value;
        this.head.nextNode = null;

       }




       append(value){
        const newNode = new Node(value);
        let temp = this.head;

        while(temp.nextNode!=null){
          temp = temp.nextNode;
        }
        temp.nextNode = newNode;
        

       }

       prepend(value){
        const newHead = new Node(value);
        newHead.nextNode = this.head
        this.head = newHead;
       }





       size(){
        let count = 0;
        let temp = this.head;

        while (temp != null){
            temp = temp.nextNode;
            count++
        }
        return count
       }


       head(){
        return this.head.value
       }


       tail(){
        let temp = this.head
    while(temp.nextNode != null){
            temp = temp.nextNode;
        }

        return temp.value;

       }


       at(index){
        let init = 1;
        let temp = this.head
        while(temp.nextNode != null && init !== index ){
          temp = temp.nextNode;
          init++;
        }

        return temp.value;

        
       }


       pop(){
        let temp = this.head
        
        while(temp.nextNode.nextNode != null){
            temp = temp.nextNode;
        }

        temp.nextNode = null;
       }


       contains(value){

        let temp = this.head
     
        while(temp != null &&  temp.value !== value){
            temp = temp.nextNode;

        }
        return temp == null ? false : true;

       }


       find(value){
        let temp = this.head
        let index = 0;
        while(temp != null ){
            if(temp.value == value) return index;
            index++
            temp = temp.nextNode

        }

        return null


       }


       toString(){
        let temp = this.head
        let string = " ";

        while(temp!=null){
            console.log(temp.value);
            string += `(${temp.value}) -> `;
            temp=temp.nextNode;
        }

        string += "(null)";

        return string

   
       }


       insertAt(value, index){
        let temp = this.head
        let tempNext;
        let count = 1;
        let newNode = new Node(value);

        if(index === 0){
            newNode.nextNode = temp;
            this.head = newNode;
            return;
        }

        while(temp != null){
            if(count == index){
                tempNext = temp.nextNode;
                temp.nextNode = newNode;
                newNode.nextNode = tempNext;
                return;
            }

            count++
            temp = temp.nextNode;
        }
       }

       removeAt(index){
        if(index === 0){
            const valueofRemoved = this.head.value;
            this.head = this.head.nextNode;
            return valueofRemoved;

        }
        const nodeBeforeRemovedOne = this.at(index - 1);
        const valueofRemoved = nodeBeforeRemovedOne.newNode.value;
        nodeBeforeRemovedOne.nextNode = nodeBeforeRemovedOne.nextNode.nextNode;

        return valueofRemoved;
       }
    



}

export {Linkedlist,Node};

//https://github.com/lnicepei
const gameBoard = () => {

   let board = buildBoard()
    
    
    function buildBoard() {
        let board = new Map()
        for (let i = 0; i < 8; i++) {
            for (let x = 0; x < 8; x++) {
                board.set(i + '' +  x, adjEdge(i, x))
                   
            }
        }
        return board
    }

    function adjEdge(row, col) {
        
        let edgeArr = []
        
        if (row <= 5) {
            if (col <= 6) {
            edgeArr.push((row + 2) +''+ (col + 1))
            }
            if (col >= 1 ){
            edgeArr.push((row + 2) + '' + (col - 1))
            }
        }
        if (row >= 2) {
            if (col <= 6) {
             edgeArr.push((row - 2) + '' + (col + 1))
            }
            if (col >= 1 ){
                edgeArr.push((row - 2) + '' + (col - 1))
                }
        }
        if (col <= 5) {
            if (row <= 6) {
            edgeArr.push((row + 1) +'' + (col + 2) )
            }
            if (row >= 1 ){
            edgeArr.push((row - 1) +'' + (col + 2))
            }
        }
        
        if (col >= 2) {
            if (row <= 6) {
            edgeArr.push((row + 1) +''+ (col - 2))
            }
            if (row >= 1 ){
            edgeArr.push((row - 1)+ '' + (col - 2))
        }
        }
        
        return edgeArr

 

    }

    return {board}

}


const Knight = (start, finish) => {

    let board = gameBoard().board
    let found = false

    let visited = [start]

    let queue = LinkedList()
    

    function buildQueue(x){
    


        // create next moves nodes.        
        let nextNodes = board.get(x) 
        console.log(nextNodes)
        for (let i in nextNodes) {
            //check if finish is found
            if (nextNodes[i] === finish) {
                found = true
            }
            
            //add nodes to queue
            queue.prepend(nextNodes[i], start)
            
            
        } 
    }
        

        
        
        
    

    
    

    return {board, visited, queue, buildQueue }


}

const LinkedList = () => {
    let head = null;
    let size = 0;

    const append = (value) => {
        if (head === null) {
            prepend(value);
        } else {
            if(head.nextNode === null){
                head.nextNode = Node(value);
                size++
            } else{
                let current = head.nextNode ;
                while (current.nextNode !== null) {
                current = current.nextNode;
                }
                current.nextNode = Node(value);
                size++;
            }
            
        }

    }

    const prepend = (value, prev) => {

        if (head=== null) {
        head = Node(value)
        size++
        }  else {
            newHead = Node(value, null, prev);
            newHead.nextNode = head;
            head = newHead;
    }
    }

    const getSize = () => {
        return size
    }

    const getHead = ()=> {
        return head;
    }

    const getTail = () => {
        if (size === 0) {
            return null
        } else if (size === 1) {
            return head;
        } else {
            let current = head.nextNode ;
                while (current.nextNode !== null) {
                current = current.nextNode;
                }
                return current
        }
    }

    const at = (index) => {

        let current = head;
        let x = index
        for (let i = 0; i < x; i++) {
            current = current.nextNode
        }
        return current;

    }

    const pop = () => {
        
        let pop = at(size - 2)
        pop.nextNode = null
        size --;

    }

    const contains = (value) => {
        let current = head;
        for (let i = 0; i < size; i++) {
            if (value == current.value) {
                return true
            }
            current = current.nextNode
        }
        return false
    }

    const find = (value) => {
        let current = head;
        let index = 0
        for (let i = 0; i < size; i++) {
            if (value == current.value) {
                return index 
            }
            current = current.nextNode
            index++
        }
        return false
    }

    const toString = () => {
        let string = ''
        let current = head;
        string += '( ' + current.value + ' )'
        for (let i = 1; i < size; i++) {
            current = current.nextNode
            
            string += ' => ( ' + current.value + ' )'

        }
        string += ' => null '
        return string
    }

    const insertAt = (value, index) => {

        let insert = at(index)
        let previous = at(index - 1)
        previous.nextNode = Node(value, insert)
        size++;

    }

    const removeAt = (index) => {

        let remove = at(index)
        let previous = at(index - 1)
        previous.nextNode = remove.nextNode
        size--;

    }


    return {append, prepend, getSize, getHead, getTail, at, pop, contains, find, toString, insertAt, removeAt}
};

const Node = (x, y, i) => {
    let value = x || null;
    let nextNode = y|| null;
    let prev = i || null;
    let visited = false;


   return {value, nextNode, prev}
};

let x =  gameBoard();



let knight = Knight()
knight.buildQueue('00')
console.log(knight.queue.pop)


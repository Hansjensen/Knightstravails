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


const Knight = () => {

    let board = gameBoard().board
    let visited = []
    let queue = LinkedList()

    

    function buildQueue(x){
        

     
        // create next moves nodes.        
        let nextNodes = board.get(x) 
       
        for (let i in nextNodes) {
            // check if already visited
            const result = visited.find(({ value }) => value == nextNodes[i]);
        
            if(typeof result != 'object') {
        
            queue.prepend(nextNodes[i], x)   //add nodes to queueue
           
            }
        } 
        occupyVisited(queue.getTail())
       

    } 

    function occupyVisited(x) {
       
        let node = {
            value: x.value,
            prev: x.prev
        }

        visited.push(node)

    }
    

    return {board, visited, queue, buildQueue }


}

function knightMoves(start, finish) {

    knight = Knight(start, finish)
    knight.queue.prepend(start)
    knight.buildQueue(start, finish)

    // while the finishing spot has not been found
     while (!knight.queue.contains(finish)) {
        knight.queue.pop();
        let nextBuild = knight.queue.getTail()
        knight.buildQueue(nextBuild.value, finish)
     }
    
     const index = knight.queue.find(finish);
     const at = knight.queue.at(index);
     let path = buildPath(at, knight.visited)

      finishScript(path);
     
     
    
     

}

function buildPath(x, y) {
    let path = [x.value]
    
    
    while (x.prev) {
        let prev = y.find(({ value }) => value == x.prev);
        x = prev
        path.push(x.value)
    }

    return path
    
    
}

function finishScript(x) {
    
    let moves = x.length
    let array = []
    for (let i = 0; moves > i; i++) {
       
        let pre = x.pop()
        let split = pre.split('')
        array.push(split)
        

    }
    console.log("You made it in " + moves + " moves! => ")
    console.log(array)
    


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
        head = Node(value, null, prev)
        size++
        }  else {
            newHead = Node(value, null, prev);
            newHead.nextNode = head;
            head = newHead;
            size++
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



console.log(knightMoves('00', '55'))



const gameBoard = () => {

   let board = buildBoard()
    
    
    function buildBoard() {
        let board = new Map()
        for (let i = 0; i < 8; i++) {
            for (let x = 0; x < 8; x++) {
                board.set(JSON.stringify([x, i]), adjEdge(x, i))
               
            }
        }
        return board
    }

    function adjEdge(row, col) {
        
        let edgeArr = []
        
        if (row <= 5) {
            if (col <= 6) {
            edgeArr.push([row + 2, col + 1])
            }
            if (col >= 1 ){
            edgeArr.push([row + 2, col - 1])
            }
        }
        if (row >= 2) {
            if (col <= 6) {
             edgeArr.push([row - 2, col + 1])
            }
            if (col >= 1 ){
                edgeArr.push([row - 2, col - 1])
                }
        }
        if (col <= 5) {
            if (row <= 6) {
            edgeArr.push([col + 2, row + 1])
            }
            if (row >= 1 ){
            edgeArr.push([col + 2, row - 1])
            }
        }
        
        if (col >= 2) {
            if (row <= 6) {
            edgeArr.push([col - 2, row + 1])
            }
            if (row >= 1 ){
            edgeArr.push([col - 2, row - 1])
            }
        }
        
        return edgeArr

 

    }

    return {board}
}



let x =  gameBoard();

let check = x.board.get(JSON.stringify([1, 1]) )
console.log(x.board.get(JSON.stringify(check[1])))

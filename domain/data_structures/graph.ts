import { vertices } from '../../types/graph'

//simplistic graph implementation
//no method to remove link or traverse the graph as this is not needed.
//search algorithms will be added seperately. 
class graphNode{
    target:boolean = false
    start:boolean = false
    links:vertices
    cellID:number

    constructor(links:vertices, ID:number){
        this.links=links
        this.cellID = ID
    }

    
    setStart = (change:boolean):void => {this.start = change}
    setTarget = (change:boolean):void => {this.target = change}
    
}

class graph{
    graph: Map<number, graphNode> = new Map()

    addNode = (ID:number):void => {
        const vertices:vertices = calculateVertices(ID)
        const node = new graphNode(vertices,ID)
        this.graph.set(ID, node)
    }
}

export const calculateVertices = (ID:number):vertices => {

    //temp function with return type
    //will be improved when the method to create the graph is created.
    return [
        {
            linkTo: ID-1,
            weight:0
        },
        {
            linkTo:ID+1,
            weight:0
        }
    ]
}

export default {}
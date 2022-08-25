import { vertices } from '../../types/graph'

//simplistic graph implementation
//no method to remove link or traverse the graph as this is not needed.
//search algorithms will be added seperately. 
class graphNode{
    target:boolean = false
    start:boolean = false
    links:vertices
    cellID:string

    constructor(links:vertices, ID:string){
        this.links=links
        this.cellID = ID
    }

    
    setStart = (change:boolean):void => {this.start = change}
    setTarget = (change:boolean):void => {this.target = change}
    
}

class graph{
    graph: Map<string, graphNode> = new Map()
    start:string = ''
    target:string = ''

    addNode = (ID:string):void => {
        const vertices:vertices = this.calculateVertices(ID)
        const node = new graphNode(vertices,ID)
        this.graph.set(ID, node)
    }

    private calculateVertices = (ID:string):vertices => {

        //temp function with return type
        //will be improved when the method to create the graph is created.
        return [

        ]
    }

    createGraph = ():void => {
        for(let i = 0; i<10;i++)
            for(let j = 0; j<20; j++)
                this.addNode(i.toString().concat(j.toString()))
    }

    getNode = (ID:string):graphNode | undefined => this.graph.get(ID)
    setStart = (ID:string, change:boolean):void => {
        this.graph.get(ID)?.setStart(change)
        this.start = ID
    }
    setTarget = (ID:string, change:boolean):void => {
        this.graph.get(ID)?.setTarget(change)
        this.target = ID
    }


}

export default graph
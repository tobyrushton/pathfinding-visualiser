import React, { useState, useEffect, useCallback } from "react"
import styles from '../styles/grid.module.css'
import { GridItemProps } from "../types/grid"
import graph from '../domain/data_structures/graph'

const GridItem: React.FC<GridItemProps> = ({ row, column, colour }) => {
    return (
        <div 
            id={row.toString().concat(column.toString())}
            className={styles.gridItem}
            style={{
                gridRow:(row+1).toString(),
                gridColumn: (column+1).toString() + ' / ' + (column+1).toString(),
                backgroundColor:colour
            }}
            onClick={()=> console.log(colour)}
        />
    )
}

const Grid: React.FC = () => {

    //component was not rerendering so implemented this solution to force a rerender from https://blog.logrocket.com/how-when-to-force-react-component-re-render/
    const [, updateState] = useState<{}>();
    const forceUpdate = useCallback(() => updateState({}), []);

    //temporary store of graph in Grid component state until proper state management is implemented.
    const [ grid, setGrid ] = useState<graph>(new graph())

    useEffect(()=>{
        grid.createGraph()

        forceUpdate()
    },[])


    return (
        <div className={styles.grid}>
            {
                Array.from(grid.graph.keys()).map(( ID ) =>
                    <GridItem 
                        key={'cell'.concat(ID)}
                        column={+ID.slice(1,3)}
                        row={+ID.slice(0,1)}
                        colour={
                            grid.getNode(ID)?.target ? 'red' :
                            grid.getNode(ID)?.start ? 'black' : 'white'
                        }
                    />
                )
                
            }
        </div>
    )
}

const changeColour = (ID:string, colour: string):void | null => {
    const cell = document.getElementById(ID)
    const cellStyle = cell?.style
    cellStyle?.backgroundColor !== undefined ? cellStyle.backgroundColor = colour : null;
}

export default Grid

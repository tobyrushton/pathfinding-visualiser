import React, { useState, useEffect, useCallback } from "react"
import styles from '../styles/grid.module.css'
import { GridItemProps, colours } from "../types/grid"
import graph from '../domain/data_structures/graph'

const GridItem: React.FC<GridItemProps> = ({ row, column, ID, details:{start, target}, setStart, setTarget, forceRender }) => {
    const [colour , setColour ] = useState<colours>('white')

    return (
        <div 
            id={ID} 
            className={styles.gridItem}
            style={{
                gridRow:(row+1).toString(),
                gridColumn: (column+1).toString() + ' / ' + (column+1).toString(),
                backgroundColor:colour
            }}
            onClick={() => {
                console.log(start)
                if(start === '') {
                    setStart(ID, true)
                    setColour('black')
                    forceRender()
                }
                else if(target === '') {
                    setTarget(ID, true)
                    setColour('red')
                    forceRender()
                }
                else return
            }}
        />
    )
}

const Grid: React.FC = () => {

    //component was not rerendering so implemented this solution to force a rerender from https://blog.logrocket.com/how-when-to-force-react-component-re-render/
    const [, updateState] = useState<{}>();
    const forceUpdate = useCallback(() => updateState({}), []);

    //temporary store of graph in Grid component state until proper state management is implemented.
    const [ grid ] = useState<graph>(new graph())

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
                        ID={ID}
                        column={+ID.slice(1,3)}
                        row={+ID.slice(0,1)}
                        details={{
                            target: grid.target,
                            start: grid.start
                        }}
                        setStart={grid.setStart}
                        setTarget={grid.setTarget}
                        forceRender={forceUpdate}
                    />
                )
                
            }
        </div>
    )
}

export default Grid

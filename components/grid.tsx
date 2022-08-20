import React from "react"
import styles from '../styles/grid.module.css'
import { GridItemProps } from "../types/grid"

const GridItem: React.FC<GridItemProps> = ({ row, column}) => {
    return (
        <div 
            className={styles.gridItem}
            style={{
                gridRow:(row+1).toString(),
                gridColumn: (column+1).toString() + ' / ' + (column+1).toString()
            }}
        />
    )
}

const Grid: React.FC = () => {
    return (
        <div className={styles.grid}>
            {
                new Array(10).fill('').map((val,row) => 
                    new Array(20).fill('').map((val,column) => 
                        <GridItem 
                            key={'cell'.concat(row.toString()).concat(column.toString())}
                            column={column}
                            row={row}
                        />
                    )
                )
            }
        </div>
    )
}

export default Grid

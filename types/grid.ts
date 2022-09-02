export interface GridItemProps {
    column:number,
    row:number,
    ID:string,
    details: {
        target:string,
        start:string
    },
    setStart: (ID:string, change:boolean) => void,
    setTarget: (ID:string, change:boolean) => void,
    forceRender: () => void

}

export type colours = 'white' | 'black' | 'red'
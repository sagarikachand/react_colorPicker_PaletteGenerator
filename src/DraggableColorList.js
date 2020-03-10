import React from 'react';
import DraggableColorBox from './DraggableColorBox'
import   {SortableContainer} from 'react-sortable-hoc'

 const DraggableColorList=({colors,removeColor})=> {
    return(
        
        <div style={{height:"100%"}}>
            {
                colors.map((c,i) => {
                  return <DraggableColorBox 
                  index={i}
                  key={c.name}
                  color={c.color} 
                  name={c.name} 
                  handleClick={()=>removeColor(c.name)} />
                })
              }
        </div>
    )
}

export default SortableContainer(DraggableColorList);
import React from 'react';
import { withStyles } from '@material-ui/styles'
import DeleteIcon from '@material-ui/icons/Delete'
import styles from './styles/MiniPaletteStyles'

const MiniPalette = (props) => {
    const { classes ,paletteName , emoji ,colors,id} = props;
    const miniColorBoxes= colors.map( c =>{
        return <div key={c.color} className={classes.miniColor}  style={{background:c.color}}></div>

    })

    const handleDelete= (e) =>{
       e.stopPropagation()
       props.handleDelete(id)
    }
    return (
        <div className={classes.root} onClick={props.handleClick}>
            <div className={classes.delete} >
                <DeleteIcon className={classes.deleteIcon} 
                 style={{"transform":"all 0.3s ease-in-out"}}
                 onClick={handleDelete}/>
            </div>
            <div className={classes.colors}>
                 {miniColorBoxes} 
            </div>
            <h5 className={classes.title}>{paletteName} <span className={classes.emoji}>{emoji}</span></h5>
        </div>
    )
};

export default withStyles(styles)(MiniPalette);
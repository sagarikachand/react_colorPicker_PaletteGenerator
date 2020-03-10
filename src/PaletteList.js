import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import MiniPalette from './MiniPalette';
import { withStyles } from '@material-ui/styles'
import styles from './styles/PaletteListStyles'

class PaletteList extends Component {
    state = {}

    goToPalette = (id) => {
        console.log(id)
        this.props.history.push(`/palette/${id}`)
    }
    render() {
        const { paletteList, classes, handleDelete } = this.props
        return (
            <div className={classes.root}>
                <div className={classes.container}>
                    <nav className={classes.nav}>
                        <h1>React colors</h1>
                        <Link to="/palette/new">Create Palette</Link>
                    </nav>
                    <div className={classes.palettes}>
                        {paletteList.map(palette =>
                            //  <Link to={`/palette/${palette.id}`} key={palette.id}>
                            <MiniPalette 
                            handleClick={() => this.goToPalette(palette.id)} 
                            handleDelete={handleDelete}
                            paletteName={palette.paletteName} 
                            emoji={palette.emoji} 
                            colors={palette.colors} 
                            id={palette.id}/>
                            // </Link>
                        )
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(PaletteList);
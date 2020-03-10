import React,{Component} from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
import {Link} from 'react-router-dom'
import {withStyles} from '@material-ui/styles'
import styles from './styles/SingleColorPaletteStyles'



class SingleColorPalette extends Component {
    constructor(props){
        super(props);
        this._shades = this.gatherShades(this.props.palette , this.props.colorId)
        this.state={
            colorFormat: "hex"
        }
    }

    gatherShades =(palette, colorToFilterBy) =>{
        //return all shades of given color
        let shades=[]
        let allColors=palette.colors

        for(let key in allColors){
            shades= shades.concat(
                allColors[key].filter(color => color.id=== colorToFilterBy)
            )
        }
        //Returning from 1 onwards, omitting level 50
          return shades.slice(1);
    }

    changeColorFormat = (e) => {

        this.setState({
            colorFormat: e.target.value
        })
    }
  
    render() {
        const {classes} = this.props
        const {colorFormat }= this.state
        const {emoji , paletteName ,id}= this.props.palette
        console.log(this._shades)
        const colorBoxes= this._shades.map( c =>{
          return  <ColorBox key={c.name}
                       background={c[colorFormat]}
                       name={c.name}
                       showingFullPalette={false}
                      />
        })
        return (
            <div className={classes.Palette}>
             <Navbar  onChangeLevel={this.changeLevel}
                      colorFormat={colorFormat} 
                      onChangeColorFormat={this.changeColorFormat}
                      showingAllColors={false} />
                <div className={classes.PaletteColors}>
                    {colorBoxes}
                    <div className={classes.goBack}>
                        <Link to={`/palette/${id}`} className="back-button">GO BACK</Link>
                    </div>
                </div>
              
                <PaletteFooter   emoji={emoji} paletteName={paletteName} />
            </div>
            
        );
    }
}

export default  (withStyles)(styles) (SingleColorPalette);
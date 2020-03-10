import chroma from 'chroma-js'
import sizes from './sizes'

export default {
    ColorBox:{
      width:"20%",
      height: props=> props.showingFullPalette ? "25%" :"50%" ,
      margin:"0 auto",
      display: "inline-block",
      position: "relative",
      cursor: "pointer",
      marginBottom: "-3.7px",
      "&:hover button":{
        opacity:1,
        transition: "0.5s"
      },
      [sizes.down("lg")]:{
         width:"25%",
         height: props=> props.showingFullPalette ? "20%" :"33.333%" ,
        
      },
      [sizes.down("md")]:{
        width:"50%",
        height: props=> props.showingFullPalette ? "10%" :"20%" ,
       
     },
      [sizes.down("xs")]:{
        width:"100%",
        height: props=> props.showingFullPalette ? "5%" :"10%" ,
     }
    },
    copyText:{
        color:props=> chroma(props.background).luminance() >= 0.07 ? "black" :"white"
    },
    colorName:{
        color: props =>chroma(props.background).luminance() <= 0.08 ?"white" :"black"
    },
  
    seeMore:{
      color: props =>chroma(props.background).luminance() >= 0.07 ? "black" :"white",
      background: "rgba(225,225,225,0.3)",
      position: "absolute",
      border:"none",
      right: "0",
      bottom: "0",
      width: "60px",
      height: "30px",
      textAlign: "center",
      lineHeight: "30px",
      textTransform: "uppercase",
    },
  
    copyButton:{
      color:props =>chroma(props.background).luminance() >= 0.07 ? "black" :"white",
      width:"100px",
      height: "30px",
      position: "absolute",
      display: "inline-block",
      top:"50%",
      left:"50%",
      marginLeft: "-50px",
      marginTop: "-15px",
      outline: "none",
      background: "rgba(225,225,225,0.3)",
      fontSize: "1rem",
      lineHeight: "30px",
      textAlign:"center",
      textTransform: "uppercase",
      border:"none",
      textDecoration: "none",
      opacity:0
    },
    boxContent:{
      position: "absolute",
      padding: "10px",
      width:"150px",
      left:"0px",
      bottom: "0px",
      color: "black",
      letterSpacing: "1px",
      textTransform: "uppercase",
      fontSize: "12px",
    },
    copyOverlay:{
     
      height: "100%",
      width:"100%",
      zIndex: "0",
      opacity: "0",
      transition:  "transform 0.6s ease-in-out",
      transform: "scale(0.1)"
  },
   showOverlay:{
      position: "absolute",
      opacity: "1",
      transform: "scale(50)",
      zIndex: "10",
   },
   copyMessage:{
      position: "fixed",
      top: "0",
      bottom: "0",
      left:"0",
      right: "0",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "4rem",
      transform:"scale(0.1)",
      opacity: "0",
      color: "white",
      flexDirection: "column",
      "& h1":{
          fontWeight: "400",
          textShadow: "1px 2px black",
          background: "rgba(225,225,225,0.2)",
          width: "100%",
          textAlign: "center",
          marginBottom: "0",
          padding: "1rem",
          textTransform: "uppercase",
          [sizes.down("xs")]:{
            fontSize:"5rem"
          }
      },
      "& p":{
          fontSize: "2rem",
          fontWeight: "100"
      }
   },
   showMessage:{
      opacity: "1",
      transform: "scale(1)",
      zIndex: "25",
      transitionDelay: "0.3",
   }
   
  }
import chroma from 'chroma-js'
import sizes from './sizes'
export default {
    root: {
        height: "20%",
        width: "25%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-3.5px",
        "&:hover svg":{
                transform:"scale(1.5)",
                
             },
         [sizes.down("md")]:{
             width:"50%",
             height:"10%"
         } ,
         [sizes.down("sm")]:{
            width:"100%",
            
        }     
    },
    boxContent: {
        position: "absolute",
        width: "100%",
        left: "0px",
        bottom: "0px",
        padding: "10px",
        color:props=> chroma(props.color).luminance() >= 0.07 ? "rgba(0,0,0,0.5)" :"white",
        letterSpacing: "1px",
        textTransform: "uppercase",
        fontSize: "12px",
        display: "flex",
        justifyContent: "space-between"
    },
    deleteIcon:{
       transition: "all 0.3s ease-in-out"
    }
}
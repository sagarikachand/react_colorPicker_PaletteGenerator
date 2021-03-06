export default {
    root: {
        background: "blue",
        height:"auto",
        minHeight: "100vh",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center"
    },
    container: {
        width: "50%",
        display:"flex",
        alignItems: "flex-start",
        flexDirection:"column",
        flexWrap:"wrap"

    }, 
    nav: {
        width: "100%",
        display:"flex",
        justifyContent: "space-between",
        color:"white",
        alignItems:"center",
        "& a":{
            color:"white"
        }

    },
    palettes: {
        boxSizing :"border-box",
        width:"100%",
        display:"grid",
        gridTemplateColumns:"repeat(3,30%)",
        gridGap:"5%"
    }
   
}
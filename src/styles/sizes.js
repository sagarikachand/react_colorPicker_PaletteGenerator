export default{
    up(){

    },
    down(size){
        console.log("sizes called")
        const sizes={
            xs:"575.98px",
            sm:"767.98px",
            md:"991.98px",
            lg:"1199.98px"
        }

        return `@media (max-width: ${sizes[size]})`

    }
}
import React from "react"
import  Container  from "@material-ui/core/Container"
import { useParams } from "react-router-dom"
import DetailProductMain from "../../components/DetailProduct/DetailProductMain";
export default function DetailProduct(){
    const {id}=useParams();
  
    return (
        <React.Fragment>
<Container maxWidth="xl">
        <DetailProductMain id={id}/>
</Container>
        </React.Fragment>
    )
}
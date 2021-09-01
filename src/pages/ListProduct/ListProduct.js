import React from 'react'
import { Container } from '@material-ui/core'

import  ListProductComponent  from '../../components/ListProductComponent/ListProductComponent'
export function ListProduct(props){
   
    return(
        <Container maxWidth={"xl"}>
            <ListProductComponent/>
        </Container>
    )
}
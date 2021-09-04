import React from 'react'
import { Container } from '@material-ui/core'

import  ListProductComponent  from '../../components/List Product/ListProduct'
export function ListProduct(props){
   
    return(
        <Container maxWidth={"xl"}>
            <ListProductComponent/>
        </Container>
    )
}
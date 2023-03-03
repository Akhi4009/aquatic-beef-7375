import { Box, Stack } from '@chakra-ui/react'
import React from 'react'

import PaymentTab from '../component/akhilesh/Payment/Tab'
import {useSelector} from "react-redux"
import Address from './Address'





export const Payment = () => {
  const isLoading=useSelector(store=>store.cartReducer.isLoading)
 

 
  return (
    <>
   
    <Stack w="90%" m="auto" direction={{base:"column-reverse",md:"row"}} gap={{base:"5",md:'0'}} justifyContent="center" alignItems="center">
    <Box w={{base:"100%"}} m="auto" >
    <PaymentTab/>
    </Box>
   <Box>
   <Address/>
   </Box>
    
    
    </Stack>
    </>
  )
}

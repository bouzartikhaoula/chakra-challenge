import { Box ,Text, Heading } from '@chakra-ui/react'
import Pricing from './Pricing'
const Header = () => {
  return (
    <>
    <Box as='section' color="#F7FAFC" bg="#6B46C1"  pt="90px" pb="130px" px="32px" textAlign='center'>
    <Heading fontWeight="800" fontSize='48px' >Simple pricing for your business</Heading>
   <Text fontWeight="500" fontSize="24px" pb="16" >Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
 
    </Box>  <Pricing/>
    </>
  )
}

export default Header
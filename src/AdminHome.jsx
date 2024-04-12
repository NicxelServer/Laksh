import React from 'react';
import { ChakraProvider, Box, Grid, GridItem, Heading, Text, Radio, RadioGroup,Input, Button, IconButton, Container, Flex, FormControl, FormLabel, Image } from '@chakra-ui/react';
import { LockIcon, EmailIcon } from '@chakra-ui/icons';
import { FaSun, FaMoon, FaUndo } from "react-icons/fa";
import { Link } from 'react-router-dom';
import signInLogo from './assets/img/signInLogo.png';
import logo from './assets/img/logo.png';


const AdminLoginPage = () => {
  return (
    <ChakraProvider>
      <Box minHeight="100vh" bgGradient="linear(to-b, blue.200, purple.500)">

        
         {/* --------------------------------------------------------------- */}



       






{/* -----------------------Header------------------------------------------------------------------- */}

      <Box py={4} color="black">
  <Container maxW="container.lg">
    <Flex alignItems="center" justifyContent="flex-end" ml={1080}>
    
        <Link href="/dashboard">
        <Heading
          size="lg"
          p={1}
          bg=""
          color="black"
          borderRadius="full"
          _hover={{
            bg: "gray.200",
            cursor: "pointer",
            transform: "scale(1.05)",
            transition: "all 0.3s ease",
          }}
          mt={5}
          mb={-5} // Add margin-bottom
        >
          <Image src={signInLogo} alt="Image Alt Text" boxSize="30px" mr={1} />
          <Text fontSize="10px">Admin</Text>
        </Heading>
      </Link>
    </Flex>
  </Container>
</Box>



      
       



        {/* Main Content */}
        <Flex>
          {/* Left Menu */}
          <GridItem colSpan={0}mt={-90} bg="gray.100" mb={-4} p={50} borderRadius="md" h={550} width={200}>
          <Image src={logo} alt="Logo" boxSize="70px" borderRadius='5%' mt={-19} mx={3} mb={4} />
  <Heading size="md" mb={2}></Heading> {/* Increase mb value here */}
  <Box p={1} pl={0} textAlign="left"> {/* Added textAlign="left" */}
  <Box
  mb={5}
  mt={0}
  bg="blue.100"
  borderRadius="md"
  style={{ 
    marginLeft: "-50px", 
    marginRight: "-53px", 
    paddingLeft: "20px",  // Adjust padding to maintain text alignment
    transition: "all 0.3s ease"
  }}
  _hover={{
    bg: "blue.200",
    cursor: "pointer",
    transform: "scale(1.05)",
  }}
>
  <Text p={1}>Dashboard</Text>
</Box>

    <Box
      mb={5}
      bg="gray.100"
      borderRadius="md"
      style={{ 
        marginLeft: "-50px", 
        marginRight: "-53px", 
        paddingLeft: "20px",  // Adjust padding to maintain text alignment
        transition: "all 0.3s ease"
      }}
      _hover={{
        bg: "blue.200",
        cursor: "pointer",
        transform: "scale(1.05)",
        transition: "all 0.3s ease",
         
      }}
    >
      <Text p={1}>Seller Tool</Text>
    </Box>
    
    <Box
  mb={5}
  bg="blue.100"
  borderRadius="md"
  style={{ 
    marginLeft: "-50px", 
    marginRight: "-53px", 
    paddingLeft: "20px",  // Adjust padding to maintain text alignment
    transition: "all 0.3s ease"
  }}
  _hover={{
    bg: "blue.200",
    cursor: "pointer",
    transform: "scale(1.05)",
  }}
>
  <Text p={1}>Product</Text>
</Box>

<Box
      mb={5}
      bg="gray.100"
      borderRadius="md"
      style={{ 
        marginLeft: "-50px", 
        marginRight: "-53px", 
        paddingLeft: "20px",  // Adjust padding to maintain text alignment
        transition: "all 0.3s ease"
      }}
      _hover={{
        bg: "blue.200",
        cursor: "pointer",
        transform: "scale(1.05)",
        transition: "all 0.3s ease",
      }}
    >
      <Text p={1}>BuyLead</Text>
    </Box>

     <Box
  mb={10}
  bg="blue.100"
  borderRadius="md"
  style={{ 
    marginLeft: "-50px", 
    marginRight: "-53px", 
    paddingLeft: "20px",  // Adjust padding to maintain text alignment
    transition: "all 0.3s ease"
  }}
  _hover={{
    bg: "blue.200",
    cursor: "pointer",
    transform: "scale(1.05)",
  }}
>
  <Text p={1}>Settings</Text>
</Box>

<Box
      mb={5}
      mt={-5}
      bg="gray.100"
      borderRadius="md"
      style={{ 
        marginLeft: "-50px", 
        marginRight: "-53px", 
        paddingLeft: "20px",  // Adjust padding to maintain text alignment
        transition: "all 0.3s ease"
      }}
      _hover={{
        bg: "blue.200",
        cursor: "pointer",
        transform: "scale(1.05)",
        transition: "all 0.3s ease",
      }}
    >
      <Text p={1}>Buyer</Text>
    </Box>

    
   


  </Box>
</GridItem>


      {/* ------CARDS--------------------------------------------------------------------------- */}
       
      <Container maxW="container.lg" py={3} style={{ color: "black" }}>
      <Heading
        as="h1"
        mb={6}
        bg="blue.100"
        border="2px solid transparent" // Set border with initial color
        borderColor="gray.400" // Set initial border color
        _hover={{
          bg: "gray.100",
          cursor: "pointer",
          transform: "scale(1.05)",
          transition: "all 0.3s ease",
        }}
        p={0}
      >
        
      </Heading>
      
      {/* Cards Section */}
      <Flex flexWrap="wrap" justifyContent="space-between">
        {/* Card 1 */}
        <Box flex="0 0 23%" mb={4}>
          
  <Box
    bg="white"
    boxShadow="md"
    borderRadius="md"
    p={4}
    _hover={{
      bg: "teal.100", // Change background color on hover
      cursor: "pointer", // Change cursor on hover
      transform: "scale(1.05)", // Scale up on hover
      transition: "all 0.3s ease", // Add smooth transition
    }}
    onClick={() => {
      // Handle click event
      console.log("Card clicked");
    }}
  >
    <Heading as="h5" fontSize="sm" mb={2}>
      Category 1
    </Heading>
    <Heading as="h2" fontSize="xl" mb={2}>
      5
    </Heading>
    {/* Add additional content here, e.g., icons */}
    {/* <Icon as={FaChevronRight} boxSize={6} /> */}
  </Box>
</Box>



        {/* Card 2 */}
        <Box flex="0 0 23%" mb={4}>
  <Box
    bg="white"
    boxShadow="md"
    borderRadius="md"
    p={4}
    _hover={{
      bg: "teal.100", // Change background color on hover
      cursor: "pointer", // Change cursor on hover
      transform: "scale(1.05)", // Scale up on hover
      transition: "all 0.3s ease", // Add smooth transition
    }}
    onClick={() => {
      // Handle click event
      console.log("Card clicked");
    }}
  >
    <Heading as="h5" fontSize="sm" mb={2}>
      Category 2
    </Heading>
    <Heading as="h2" fontSize="xl" mb={2}>
      22
    </Heading>
    {/* Add additional content here, e.g., icons */}
    {/* <Icon as={FaChevronRight} boxSize={6} /> */}
  </Box>
</Box>


        {/* Card 3 */}
        <Box flex="0 0 23%" mb={4}>
  <Box
    bg="white"
    boxShadow="md"
    borderRadius="md"
    p={4}
    _hover={{
      bg: "teal.100", // Change background color on hover
      cursor: "pointer", // Change cursor on hover
      transform: "scale(1.05)", // Scale up on hover
      transition: "all 0.3s ease", // Add smooth transition
    }}
    onClick={() => {
      // Handle click event
      console.log("Card clicked");
    }}
  >
    <Heading as="h5" fontSize="sm" mb={2}>
      Category 3
    </Heading>
    <Heading as="h2" fontSize="xl" mb={2}>
      40
    </Heading>
    {/* Add additional content here, e.g., icons */}
    {/* <Icon as={FaChevronRight} boxSize={6} /> */}
  </Box>
</Box>


        {/* Card 4 */}
        <Box flex="0 0 23%" mb={4}>
  <Box
    bg="white"
    boxShadow="md"
    borderRadius="md"
    p={4}
    _hover={{
      bg: "teal.100", // Change background color on hover
      cursor: "pointer", // Change cursor on hover
      transform: "scale(1.05)", // Scale up on hover
      transition: "all 0.3s ease", // Add smooth transition
    }}
    onClick={() => {
      // Handle click event
      console.log("Card clicked");
    }}
  >
    <Heading as="h5" fontSize="sm" mb={2}>
      Category 4
    </Heading>
    <Heading as="h2" fontSize="xl" mb={2}>
      50
    </Heading>
    {/* Add additional content here, e.g., icons */}
    {/* <Icon as={FaChevronRight} boxSize={6} /> */}
  </Box>
</Box>

      </Flex>
    </Container>
        {/* --------------------------------------------------------------------------------- */}
        </Flex>

        {/* Footer */}
        <Box py={4} bg="gray" color="black" mt={4}>
          <Container maxW="container.lg">
            <Flex justifyContent="center">
              <Text>© 2024 Nixcel Software Pvt.Ltd All rights reserved.</Text>
            </Flex>
          </Container>
        </Box>
      </Box>
    </ChakraProvider>
  );
};

export default AdminLoginPage;


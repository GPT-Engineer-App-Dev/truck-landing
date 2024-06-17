import { Container, Text, VStack, Box, Heading, Button, Image, Flex } from "@chakra-ui/react";
import { FaTruck, FaInfoCircle, FaPhone } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.xl" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" p={4}>
      <VStack spacing={8} width="100%">
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>Welcome to TruckLand</Heading>
          <Text fontSize="lg">Your one-stop solution for all trucking needs</Text>
        </Box>
        <Image src="/images/truck-hero.jpg" alt="Truck Hero Image" borderRadius="md" boxShadow="lg" />
        <Flex justifyContent="space-around" width="100%" mt={8}>
          <Button leftIcon={<FaTruck />} colorScheme="teal" size="lg">Our Trucks</Button>
          <Button leftIcon={<FaInfoCircle />} colorScheme="teal" size="lg">About Us</Button>
          <Button leftIcon={<FaPhone />} colorScheme="teal" size="lg">Contact</Button>
        </Flex>
      </VStack>
    </Container>
  );
};

export default Index;
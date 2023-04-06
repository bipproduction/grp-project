import { Box, Button, Text, TextInput, Space, Anchor, NavLink, Container, Center } from "@mantine/core";


const Login = () => {
  return (
    <>
      <Center  my={100}>
        <Box bg={'gray.2'} h={500} w={500}>
        <Text>Login Form</Text>
        <Space h={10}/>
        <Anchor href="../../dashboard">login</Anchor>
        </Box>
      </Center>
    </>
  );
};

export default Login;

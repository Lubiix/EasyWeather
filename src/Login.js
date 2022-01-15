import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Heading,
  Input,
  useColorMode,
} from "@chakra-ui/react";

function Login() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box p="1%">
      <header>
        <Box display="flex" justifyContent="space-between">
          <Box></Box>
          <Box>
            <Heading>Easy Weather</Heading>
          </Box>
          <Box>
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? "Dark Mode" : "Light Mode"}
            </Button>
          </Box>
        </Box>
      </header>
      <FormControl py="5px" px="15%">
        <FormLabel htmlFor="email">Username</FormLabel>
        <Input id="username" type="username" placeholder="Username" />
      </FormControl>
      <FormControl py="5px" px="15%">
        <FormLabel htmlFor="email">Email address</FormLabel>
        <Input id="email" type="email" placeholder="username@email.com" />
        {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
      </FormControl>
    </Box>
  );
}

export default Login;

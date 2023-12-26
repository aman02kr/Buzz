import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useHistory } from "react-router";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";
import { white } from "colors";

function Homepage() {
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) history.push("/chats");
  }, [history]);

  return (
    <Container maxW="xl"fontFamily="Work sans" centerContent>
    <Box
      d="flex"
      justifyContent="center"
      p={3}
      bg="transparent"
      w="100%"
      m="40px 0 15px 0"
      
    >
      <Text fontSize="4xl"  color="white" > {/* Set the text color to white */}
        BUZZ
      </Text>
    </Box>
    <Box w="100%" p={4} bg="blackAlpha.600" color="white" borderRadius="md"> {/* Change the background color to light gray */}
      <Tabs isFitted variant="rounded" >
        <TabList mb="2em">
          <Tab>Login</Tab>
          <Tab>Sign Up</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Login/>
          </TabPanel>
          <TabPanel>
            <Signup/>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  </Container>
);
}

export default Homepage;

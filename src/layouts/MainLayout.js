import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Flex, View, Heading, Button, Text, ThemeProvider, createTheme } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { MdMenu } from 'react-icons/md'; // Importing MdMenu icon from Material Design icons
import { getCurrentUser } from '@aws-amplify/auth';


// Define custom theme
const theme = createTheme({
  name: 'custom-theme',
  tokens: {
    colors: {
      brand: {
        primary: { value: '#3AB1AA' }, // Replace with your desired color
      },
    },
  },
});

const MainLayout = ({ children }) => {
  const [email, setEmail] = useState('');
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Toggle drawer for mobile menu
  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await getCurrentUser();
        setEmail(user?.signInDetails?.loginId); // Extract the email
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchUser();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <View style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        {/* AppBar */}
        <Flex
          as="header"
          justifyContent="space-between"
          alignItems="center"
          padding="1rem"
          backgroundColor="var(--amplify-colors-brand-primary)"
        >
          <Heading level={3} color="white" margin="0">
            My Word
          </Heading>

          <Flex gap="1rem" alignItems="center">
            {/* Desktop Menu */}
            <Button as={Link} to="/phrases" variation="link" color="white">
              Train Me
            </Button>
            <Button as={Link} to="/vocabulary" variation="link" color="white">
              Archives
            </Button>
            <Button as={Link} to="/vocabulary" variation="link" color="white">
            Hello: {email}
            </Button>

            {/* Mobile Hamburger Menu */}
            {/* <Button onClick={() => toggleDrawer(true)} aria-label="Open menu" variation="link">
              <MdMenu color="white" size="24" />
            </Button> */}
          </Flex>
        </Flex>

        {/* Custom Sidebar for Mobile Menu */}
        {drawerOpen && (
          <View
            position="fixed"
            top="0"
            right="0"
            width="250px"
            height="100%"
            backgroundColor="white"
            boxShadow="rgba(0, 0, 0, 0.3) 0px 0px 10px"
            zIndex="1000"
            padding="1rem"
          >
            <Button onClick={() => toggleDrawer(false)} variation="link" ariaLabel="Close menu">
              <Text color="black">Close</Text>
            </Button>
            <Button as={Link} to="/phrases" onClick={() => toggleDrawer(false)} fullWidth marginTop="1rem">
              Phrases
            </Button>
            <Button as={Link} to="/vocabulary" onClick={() => toggleDrawer(false)} fullWidth marginTop="1rem">
              Vocabulary
            </Button>
          </View>
        )}

        {/* Main Content Area */}
        <View
          style={{
            flexGrow: 1,
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            background: 'rgb(232 236 239)',
          }}
        >
          <View maxWidth="100%" paddingTop="20px" paddingBottom="20px">
            {children}
          </View>
        </View>
      </View>
    </ThemeProvider>
  );
};

export default MainLayout;

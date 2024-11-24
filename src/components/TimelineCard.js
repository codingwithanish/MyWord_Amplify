import React from 'react';
import { Accordion, Text, Flex, View, Button, useTheme } from '@aws-amplify/ui-react';
import { useNavigate } from 'react-router-dom';
import { FaUtensils, FaLaptop, FaBed, FaRedo } from 'react-icons/fa'; // Replace icons with react-icons

const iconMap = {
  FastfoodIcon: <FaUtensils />,
  LaptopMacIcon: <FaLaptop />,
  HotelIcon: <FaBed />,
  RepeatIcon: <FaRedo />
};

const TimelineCard = ({ title, timelineData }) => {
  const navigate = useNavigate();
  console.log("reached timeline card");
  console.log(timelineData);
  const { tokens } = useTheme(); // Access the theme tokens


  const handleRedirect = (category, subcategory) => {
    navigate(`/showcards?category=${category}&subcategory=${subcategory}`);
  };

  return (
    <Accordion.Container value={["item-1"]}>
      <Accordion.Item value="item-1">
      <Accordion.Trigger
          style={{
            borderRadius: '8px', // Rounded corners
            padding: '12px', // Add padding for spacing
            fontSize: '1.5rem', // Larger font size
            fontWeight: 'bold', // Bold text
            color: 'rgb(249 251 255)', // Cream color for text
            backgroundColor:  tokens.colors.brand.primary, // Subtle background
            transition: 'all 0.3s ease', // Smooth hover effect
          }}
        >
          {title}
        </Accordion.Trigger>
        <Accordion.Content>
          {timelineData.map((item, index) => (
            <Flex
              key={index}
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              marginBottom="1rem"
              gap="1rem"
            >
              {/* Left Content: 70% */}
              <View
                onClick={() => handleRedirect(item.category, item.subcategory)}
                style={{ cursor: 'pointer', flex: '10' }} // 70% width
              >
                <Text fontSize="1rem" fontWeight="bold">
                  {item.title}
                </Text>
                <Text fontSize="0.875rem" color="gray.700">
                  {item.description}
                </Text>
              </View>

              {/* Right Content: 30% */}
              {/* <View style={{ flex: '3', textAlign: 'right' }}>
                <Button
                  size="small"
                  variation="primary"
                  onClick={() => handleRedirect(item.category, item.subcategory)}
                  style={{
                    display: 'block',
                    '@media (max-width: 768px)': { display: 'none' } // Hide button on small screens
                  }}
                >
                  {item.cards} Cards
                </Button>
              </View> */}
            </Flex>
          ))}
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Container>
  );
};

export default TimelineCard;

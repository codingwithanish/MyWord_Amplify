import React, {useState} from 'react';
import { Accordion, Text, Divider, Flex, View, useTheme } from '@aws-amplify/ui-react';
import { FaCircle, FaStar, FaArchive, FaRobot } from 'react-icons/fa'; // Import icons


const SummaryCard = ({ phraseData }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { tokens } = useTheme(); // Access the theme tokens
   // Function to handle Accordion change
   const handleAccordionChange = (expanded) => {
    console.log(`Accordion is ${expanded ? 'expanded' : 'collapsed'}`);
    setIsExpanded(expanded);

    if (expanded) {
      // Custom logic when expanded
      console.log('Fetching additional data or performing other actions.');
    }
  };
  // Convert `examples` string to JSON array if it is a string
  const examples = typeof phraseData.examples === 'string' ? JSON.parse(phraseData.examples) : phraseData.examples;
  // Functions for icon clicks
  const handleStarClick = () => {
    console.log('Star icon clicked!');
    // Add your functionality here
  };

  const handleArchiveClick = () => {
    console.log('Archive icon clicked!');
    // Add your functionality here
  };

  const handleAIClick = () => {
    console.log('AI icon clicked!');
    // Add your functionality here
  };

  return (
    <Accordion.Container
      onChange={(value) => handleAccordionChange(value.includes('Accordion-item'))} // Check if the specific item is expanded
    >
      <Accordion.Item value="Accordion-item">
        <Accordion.Trigger
         style={{
          borderRadius: '8px', // Rounded corners
          padding: '12px', // Add padding for spacing
          fontSize: '1.3rem', // Larger font size
          transition: 'all 0.3s ease', // Smooth hover effect
        }}>
        {phraseData.name}
          <Accordion.Icon />
        </Accordion.Trigger>
        <Accordion.Content>
        <View padding="1rem">
          {/* Summary Section */}
          {phraseData.summary && (
            <>
              <Text fontWeight="bold" textTransform="uppercase" marginBottom="4px" fontSize="0.875rem">
                Summary
              </Text>
              <Text fontSize="1rem" marginBottom="8px">
                {phraseData.summary}
              </Text>
              <Divider margin="10px 0" backgroundColor="#1976d2" />
            </>
          )}

          {/* Examples Section */}
          {examples && examples.length > 0 && (
            <>
              <Text fontWeight="bold" textTransform="uppercase" marginBottom="4px" fontSize="0.875rem">
                Examples
              </Text>
              <View as="ul" style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                {examples.map((example, exIndex) => (
                  <Flex as="li" key={exIndex} alignItems="flex-start" marginBottom="4px">
                    <FaCircle size="0.5rem" style={{ marginRight: '10px', marginTop: '3px' }} />
                    <Text fontStyle="italic" fontSize="0.875rem">
                      {example.example}
                    </Text>
                  </Flex>
                ))}
              </View>
              <Divider margin="10px 0" backgroundColor="#1976d2" />
            </>
          )}

          {/* Code Section */}
          {phraseData.code && (
            <>
              <Text fontWeight="bold" textTransform="uppercase" marginBottom="4px" fontSize="0.875rem">
                Code Example
              </Text>
              <Text fontSize="0.875rem" marginBottom="8px">
                {phraseData.code}
              </Text>
              <Divider margin="10px 0" backgroundColor="#1976d2" />
            </>
          )}
          {/* Footer with Icons */}
          {/* Footer with Icons and Descriptions */}
          <Flex justifyContent="space-around" marginTop="1rem">
              {/* Star Icon */}
              <Flex direction="column" alignItems="center">
                <FaStar
                  size="1.5rem"
                  style={{ cursor: 'pointer', color: '#f4c542' }}
                  onClick={handleStarClick}
                />
                <Text fontSize="0.75rem" marginTop="0.5rem">
                  Mark as Favorite
                </Text>
              </Flex>

              {/* Archive Icon */}
              <Flex direction="column" alignItems="center">
                <FaArchive
                  size="1.5rem"
                  style={{ cursor: 'pointer', color: '#1976d2' }}
                  onClick={handleArchiveClick}
                />
                <Text fontSize="0.75rem" marginTop="0.5rem">
                  Archive
                </Text>
              </Flex>

              {/* AI Icon */}
              <Flex direction="column" alignItems="center">
                <FaRobot
                  size="1.5rem"
                  style={{ cursor: 'pointer', color: '#4caf50' }}
                  onClick={handleAIClick}
                />
                <Text fontSize="0.75rem" marginTop="0.5rem">
                  AI Analysis
                </Text>
              </Flex>
            </Flex>
        </View>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Container>
    // <Accordion>
    //   <Accordion.Item title={<Text fontSize="1.25rem" fontWeight="bold">{phraseData.name}</Text>}>
    
    //   </Accordion.Item>
    // </Accordion>
  );
};

export default SummaryCard;

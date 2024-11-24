import { generateClient } from 'aws-amplify/api';
import { listTimelines,listCardsummaries } from "../graphql/queries";
/**
 * @type {import('aws-amplify/data').Client<import('../amplify/data/resource').Schema>}
 */
const client = generateClient();

// Now you should be able to make CRUDL operations with the
// Data client
const fetchAllCardSummary = async (category, subcategory) => {
  console.log('category: '+ category)
  console.log('subcategory: '+ subcategory)
  try {
   // Fetch timeline data using GraphQL client
   const allCardResponse = await client.graphql({
    query: listCardsummaries,
    variables: {
      filter: {
        category: {
          eq: category // Replace "desiredCategory" with the category value you want to filter by
        },
        subcategory: {
          contains: subcategory // Replace "desiredSubcategory" with the subcategory value you want to filter by
        }
      }
    }  
  });
  const allCardResp = allCardResponse.data.listCardsummaries.items;
  console.log(allCardResp)
  return { data: allCardResp, error: null };
} catch (error) {
  return { data: null, error };
}
};

const fetchAllTimeline = async () => {
  try {
    // Fetch timeline data using GraphQL client
    const timelineResponse = await client.graphql({
      query: listTimelines,
    });

    // Extract the timeline items from the response
    const timelineData = timelineResponse.data.listTimelines.items;

    // Group the timeline items by category
    const groupedByCategory = timelineData.reduce((acc, item) => {
      try {
        // Parse the `icon` field from string to JSON
        item.icon = JSON.parse(item.icon);
      } catch (error) {
        console.error(`Error parsing icon for item with ID: ${item.id}`, error);
        // Handle parsing error by assigning null or skipping
        item.icon = null;
      }

      // Group items under their respective category
      const category = item.category;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(item);
      return acc;
    }, {});

    // Return the result object
    return { data: groupedByCategory, error: null };
  } catch (error) {
    // Log and return the error object
    console.error("Error fetching timeline data:", error);
    return { data: null, error };
  }
}

export { fetchAllTimeline, fetchAllCardSummary };
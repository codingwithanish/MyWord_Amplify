import React, { useState, useEffect } from 'react';
import { Flex, View, Heading, Grid } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import MainLayout from '../layouts/MainLayout';
import SummaryCard from '../components/SummaryCard';
import { fetchAllCardSummary } from '../api/dataService';
import { useSearchParams } from 'react-router-dom';

const ShowCardPage = () => {
  const [cards, setCards] = useState([]);
  const [error, setError] = useState(null);
  const [searchParams] = useSearchParams();

  const category = searchParams.get('category'); // "grammar"
  const subcategory = searchParams.get('subcategory'); // "modifiers-descriptors"

  useEffect(() => {
    const getCardDetails = async () => {
      try {
        const { data, errors } = await fetchAllCardSummary(category, subcategory);

        if (errors) {
          setError(errors);
        } else {
          setCards(data);
        }
      } catch (err) {
        setError(err);
      }
    };

    getCardDetails();
  }, []);

  return (
    <MainLayout>
      <View padding="2rem">
        <Grid templateColumns={{ base: "1fr", medium: "repeat(2, 1fr)", large: "repeat(3, 1fr)" }} gap="1rem">
          {cards.map((phraseData, index) => (
            <View key={index}>
              <SummaryCard phraseData={phraseData} />
            </View>
          ))}
        </Grid>
      </View>
    </MainLayout>
  );
};

export default ShowCardPage;

import React, { useState, useEffect } from 'react';
import { Flex, View, Heading, Grid } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import TimelineCard from '../components/TimelineCard';
import MainLayout from '../layouts/MainLayout';
import { fetchAllTimeline } from '../api/dataService';

const Timeline = () => {
  const [timelineData, setTimelineData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getTimelineData = async () => {
      try {
        const { data, errors } = await fetchAllTimeline();

        if (errors) {
          setError(errors);
        } else {
          setTimelineData(data);
        }
      } catch (err) {
        setError(err);
      }
    };

    getTimelineData();
  }, []);

  return (
    <MainLayout>
      <View padding="2rem">
        <Grid templateColumns={{ base: "1fr", medium: "repeat(2, 1fr)", large: "repeat(3, 1fr)" }} gap="1rem">
          <View>
            <TimelineCard title="Grammar" timelineData={timelineData?.grammar || []} />
          </View>
          <View>
            <TimelineCard title="Vocabulary" timelineData={timelineData?.vocabulary || []} />
          </View>
          <View>
            <TimelineCard title="Phrases" timelineData={timelineData?.phrases || []} />
          </View>
        </Grid>
      </View>
    </MainLayout>
  );
};

export default Timeline;

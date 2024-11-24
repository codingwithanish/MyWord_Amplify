/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCardsummary = /* GraphQL */ `
  query GetCardsummary($id: String!) {
    getCardsummary(id: $id) {
      id
      category
      subcategory
      name
      summary
      examples
      __typename
    }
  }
`;
export const listCardsummaries = /* GraphQL */ `
  query ListCardsummaries(
    $filter: TableCardsummaryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCardsummaries(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        category
        subcategory
        name
        summary
        examples
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getTimeline = /* GraphQL */ `
  query GetTimeline($id: String!) {
    getTimeline(id: $id) {
      id
      title
      description
      cards
      category
      subcategory
      icon
      __typename
    }
  }
`;
export const listTimelines = /* GraphQL */ `
  query ListTimelines(
    $filter: TableTimelineFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTimelines(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        cards
        category
        subcategory
        icon
        __typename
      }
      nextToken
      __typename
    }
  }
`;

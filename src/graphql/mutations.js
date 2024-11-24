/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCardsummary = /* GraphQL */ `
  mutation CreateCardsummary($input: CreateCardsummaryInput!) {
    createCardsummary(input: $input) {
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
export const deleteCardsummary = /* GraphQL */ `
  mutation DeleteCardsummary($input: DeleteCardsummaryInput!) {
    deleteCardsummary(input: $input) {
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
export const createTimeline = /* GraphQL */ `
  mutation CreateTimeline($input: CreateTimelineInput!) {
    createTimeline(input: $input) {
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
export const deleteTimeline = /* GraphQL */ `
  mutation DeleteTimeline($input: DeleteTimelineInput!) {
    deleteTimeline(input: $input) {
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

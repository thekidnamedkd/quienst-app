/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAmigos = /* GraphQL */ `
  query GetAmigos($id: ID!) {
    getAmigos(id: $id) {
      id
      name
      age
      description
      location
      job
      createdAt
      updatedAt
    }
  }
`;
export const listAmigoss = /* GraphQL */ `
  query ListAmigoss(
    $filter: ModelAmigosFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAmigoss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        age
        description
        location
        job
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

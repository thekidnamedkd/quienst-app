/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAmigos = /* GraphQL */ `
  query GetAmigos($id: ID!) {
    getAmigos(id: $id) {
      id
      nombre
      edad
      paradero
      trabajo
      descripcion
      createdAt
      updatedAt
    }
  }
`;
export const listAmigos = /* GraphQL */ `
  query ListAmigos(
    $filter: ModelAmigosFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAmigos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        nombre
        edad
        paradero
        trabajo
        descripcion
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

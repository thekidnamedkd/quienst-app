/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAmigo = /* GraphQL */ `
  query GetAmigo($id: ID!) {
    getAmigo(id: $id) {
      id
      nombre
      edad
      paradero
      trabajo
      descripcion
      image
      createdAt
      updatedAt
    }
  }
`;
export const listAmigos = /* GraphQL */ `
  query ListAmigos(
    $filter: ModelAmigoFilterInput
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
        image
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

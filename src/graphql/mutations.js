/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAmigo = /* GraphQL */ `
  mutation CreateAmigos(
    $input: CreateAmigosInput!
    $condition: ModelAmigosConditionInput
  ) {
    createAmigos(input: $input, condition: $condition) {
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
export const updateAmigo = /* GraphQL */ `
  mutation UpdateAmigos(
    $input: UpdateAmigosInput!
    $condition: ModelAmigosConditionInput
  ) {
    updateAmigos(input: $input, condition: $condition) {
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
export const deleteAmigo = /* GraphQL */ `
  mutation DeleteAmigos(
    $input: DeleteAmigosInput!
    $condition: ModelAmigosConditionInput
  ) {
    deleteAmigos(input: $input, condition: $condition) {
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

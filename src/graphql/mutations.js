/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAmigo = /* GraphQL */ `
  mutation CreateAmigo(
    $input: CreateAmigoInput!
    $condition: ModelAmigoConditionInput
  ) {
    createAmigo(input: $input, condition: $condition) {
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
export const updateAmigo = /* GraphQL */ `
  mutation UpdateAmigo(
    $input: UpdateAmigoInput!
    $condition: ModelAmigoConditionInput
  ) {
    updateAmigo(input: $input, condition: $condition) {
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
export const deleteAmigo = /* GraphQL */ `
  mutation DeleteAmigo(
    $input: DeleteAmigoInput!
    $condition: ModelAmigoConditionInput
  ) {
    deleteAmigo(input: $input, condition: $condition) {
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

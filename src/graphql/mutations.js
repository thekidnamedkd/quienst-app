/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAmigos = /* GraphQL */ `
  mutation CreateAmigos(
    $input: CreateAmigosInput!
    $condition: ModelAmigosConditionInput
  ) {
    createAmigos(input: $input, condition: $condition) {
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
export const updateAmigos = /* GraphQL */ `
  mutation UpdateAmigos(
    $input: UpdateAmigosInput!
    $condition: ModelAmigosConditionInput
  ) {
    updateAmigos(input: $input, condition: $condition) {
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
export const deleteAmigos = /* GraphQL */ `
  mutation DeleteAmigos(
    $input: DeleteAmigosInput!
    $condition: ModelAmigosConditionInput
  ) {
    deleteAmigos(input: $input, condition: $condition) {
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

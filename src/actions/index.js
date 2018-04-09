export const EXAMPLE_CASE = 'EXAMPLE_CASE';

export function exampleAction(element){
  return {
    type: EXAMPLE_CASE,
    payload: element
  };
}

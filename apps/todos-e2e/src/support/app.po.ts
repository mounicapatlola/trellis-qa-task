
export const getGreeting = () => cy.get('h1');
export const getInputField = () => cy.get('.input-container input');
export const getAddButton = () => cy.get('.input-container button');
export const getItems = () => cy.get('.todo-item p');
export const getCompletedItems = () => cy.get('.todo-item p.completed');

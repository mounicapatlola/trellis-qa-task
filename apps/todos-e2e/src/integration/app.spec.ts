import { getGreeting } from '../support/app.po';
import { getInputField } from '../support/app.po';
import { getAddButton } from '../support/app.po';
import { getItems } from '../support/app.po';
import { getCompletedItems } from '../support/app.po';

const baseUrl = 'http://localhost:4200'
const todoItem1 = 'Todo 1'
const todoItem2 = 'Todo 2'
const todoItem3 = 'Todo 3'
const todoItem4 = 'Todo 4'

describe("Todos", function(){
  beforeEach(() => cy.visit(baseUrl));

  it("Home Page", function(){
    getGreeting().contains('Todos').should('be.visible')
  })

  it("Add Item", function(){
    getInputField().type(todoItem1)
    getAddButton().click()
    getItems().contains(todoItem1).should('be.visible')
  })

  it("Mark Item Complete", function(){
    getInputField().type(todoItem2)
    getAddButton().click()
    getItems().contains(todoItem2).click()
    getCompletedItems().contains(todoItem2).should('be.visible')
    getItems().contains(todoItem2).next().click()
  })

  it("Delete Item", function(){
    getInputField().type(todoItem3)
    getAddButton().click()
    getItems().contains(todoItem3).should('be.visible')
    getItems().contains(todoItem3).next().click()
    getItems().contains(todoItem3).should('not.exist')
  })

  it("Add, Mark Complete, Delete Item", function(){
    getInputField().type(todoItem4)
    getAddButton().click()
    getItems().contains(todoItem4).should('be.visible')
    getItems().contains(todoItem4).click()
    getCompletedItems().contains(todoItem4).should('be.visible')
    getItems().contains(todoItem4).next().click()
    getItems().contains(todoItem4).should('not.exist')
  })
});

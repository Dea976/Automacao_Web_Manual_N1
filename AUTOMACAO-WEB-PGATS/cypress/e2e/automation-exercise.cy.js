/// <reference types="cypress" />


import cadastro from '../pages/cadastro'

import Login from '../pages/Login';

import Menu from '../pages/Menu';

import { faker } from '@faker-js/faker'


describe('Automation Exercise', () => {
  
beforeEach(() => {
  cy.visit('/');  

});
  it('Test case 01 Cadastrar usuario', () => {
    
    Menu.irParaLoginCadastro()

    Cadastro
    .preencherFormulario()
    .verificarSeCadastroFoiConcluido() 


     });  



it('Test case 02: Login User with correct email and password', () => {
  
   Menu.irParaLoginCadastro()
   
   login.preencherLogin('tester-And431265296@gmail.com', '123456')

   cy.get('i.fa-user').parente().should('contain', 'Tester QA')

});

it('Test case 03: Login User with incorrect email and password ', () => {

  Menu.irParaLoginCadastro()
  
  login.preencherLogin('tester-12390@gmail.com', '54321')

  cy.get('.login-form form p').should('contain', 'Your email or password is incorrect!')

}); 

it('Test case 04: Logout User ', () => {
  
  cy.contains('Signup').click()
  
  login.preencherLogin('tester-12390@gmail.com' , '54321')
  
  cy.get('i.fa-user').parent().should('contain', 'Tester QA')

  cy.contains('logout').click()

  cy.url().should('contain', 'login') 


});  

it('Test case 05: Register User with existing email ', () => {
    
    
    Menu.irParaLoginCadastro()

    cadastro.iniciarCadastro('tester-12390@gmail.com')

    cy.get('.signup-form form p')
      .should('be.visible')
      .and('contain', 'Email Address already exist!')

});  

it('Test case 06: Contact Us Form ', () => {
    
    Menu.irParaLoginCadastro()
    cy.contains('Contact us').click()

    cy.get('.contact-form h2')
      .should('be.visible')
      .and('have.text', 'Get In Touch')

     
    cy.get('[data-qa="name"]').type('Tester')
    cy.get('[data-qa="email"]').type('tester-qa@mail.com')
    cy.get('[data-qa="subject"]').type('Test Automation')
    cy.get('[data-qa="message"]').type('Learning Test Automation')

    cy.get('input[name="upload_file"]')

    cy.get('[data-qa="submit-button"]').click()  

    cy.fixture('')
    cy.get('input[name="upload_file"]').selectFile()

    cy.get('[data-qa="submit-button"]').click()

    cy.fixture('example.json').as('arquivo')
    cy.get('input[name="upload_file"]').selectFile('@arquivo')

    cy.get('[data-qa="submit-button"]').click()

    cy.get('.status').should('have.text'), 'Success! Your details have been submitted successfuly.'
   

});  

it('Test case 08: Verify All Products and product detail page ', () => {
    
    Menu.irParaProdutos()
    Menu.irPara(Menu, Menu.PRODUTOS)
  

    cy.url().should('be.visible').and('contain', 'All Products')
    
    cy.get('.single-products')
      .should('be.visible')
      .and('have.length.at.least', 1)
      .first()
      .parente()
      .contains('View Product')
      .click()
    
    cy.get('.product-information > h2').should('be.visible')
    
    cy.get('.product-information p').should('be.visible').and ('have.length', 4)
    
    cy.get('.product-information span span').should('be.visible')
    

});  

it('Test case 09: Search Product ', () => {
    
    Menu.irParaLoginCadastro()
    
    cy.url().should('contain', 'products')
    cy.get('.title').should('be.visible').and('contain', 'All Products')
    
    cy.get('input#seach_product').type('Shirt')
    cy.get('button#submit_search').click()
    
    cy.get('.title').should('be.visible').and('contain', 'Searched Products')
    
    cy.get('.single-products')
      .should('be.visible')
      .and('have.lenght.at.least', 1) 


});  

it('Test case 10: Verify Subscription in home page ', () => {
    
    cy.get('input#subscribe_email')
      .scrollIntoView()
      .type('tester-qa@mail.com')
   
    cy.get('button#subscribe').click()
   
    cy.contains('You have been successfully subscribed!').should('be.visible')
   
   

});

it('Test case 15: Place Order: Register before Checkout ', () => {
  cadastro.preencherFormulario()
     
  cy.get('b').should('contain', nome)
  cy.contains("Add to cart").click()
  cy.contains("View Cart").click()
  cy.get('.btn-default.check_out').should('be.visible')
  cy.get('.btn-default.check_out').click()
  cy.get(':nth-child(2) > .heading').should('have.text', 'Address Details')
  cy.get(':nth-child(4) > heading').should('have.text', 'Review Your Order')
  cy.get('.form-control').type ('378 98562-8781')
  cy.get('.btn-default.check_out').click()
  cy.get('[data-qa="name-on-card"]').type(faker.person.fullName())
  cy.get('[data-qa="card-number"]').type(faker.finance.creditCardNumber())
  cy.get('[data-qa="cvc"]').type(faker.finance.creditCardCVV())
  cy.get('[data-qa="expiry-month"]').type(12)
  cy.get('[data-qa="expiry-year"]').type(2035)
  cy.get('[data-qa="order-placed"]').should('be.visible')
  cy.get('[href *="delete"]').click()
  cy.get('b').should('contain', 'Account Deleted!')
  cy.get('[data-qa="continue-button"]').click()
    
});  


});    




















class Cadastro{

  iniciarCadastro(usuario){

    cy.get('[data-qa="signup-name"]').type(Tester QA)
    cy.get('[data-qa="signup-email"]').type(`tester-${timestamp}@gmail.com`)
    cy.contains('button', 'Signup').click()

    return this

  }

    / verificarSeCadastroFoiConcluido() {
      cy.get('i.fa-user').parent().should('contain', signUpName)
     
      return this
  
  
  
       }  
   
    
}

export default new Cadastro()


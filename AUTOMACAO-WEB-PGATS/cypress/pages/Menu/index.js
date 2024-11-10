class Menu{

   import cadastro from '../cadastro';
   
   irParaProdutos({

     cy.contains('Products').click()
      
      }
     
    irParaLoginCadastro(){
        cy.contains('Signup').click()

        return cadastro
      }

    Menus={
      PRODUTOS: 'Products'
    }
        
    irPara(menu){
       cy.contains(menu)
    }
          
      
      
}

export default new Menu()


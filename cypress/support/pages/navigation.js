class navigation
{
    click_contact(){
        cy.get('a').contains('Contact').click();
        
    }

    click_home(){
        cy.get('a').contains('Home').click();
    }
    click_shop(){
        cy.get('a').contains('Shop').click(); 
    }
    click_cart(){
        cy.get('a').contains('Cart').click();
    }
}
export default  navigation
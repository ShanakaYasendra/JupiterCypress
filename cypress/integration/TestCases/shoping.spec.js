import cartpage from '../../support/pages/cartpage';
import Navbar from '../../support/pages/navigation'
import shoppage from '../../support/pages/shoppage';

describe('select item from the list',()=>{

    const navbar= new Navbar();
    const shopping= new shoppage();
    const cart= new cartpage();
   


    it("Buy 3 Items", ()=>{
        cy.visit("http://jupiter.cloud.planittesting.com/");
       navbar.click_shop();
       shopping.get_shoppingItem('Funny Cow').should('be.visible');
       shopping.click_buy('Funny Cow');
       shopping.click_buy('Funny Cow');
       shopping.get_shoppingItem('Bunny').should('be.visible');
       shopping.click_buy('Bunny');
       shopping.get_cart_count();
       shopping.get_cart_count().should('contain.text',3);
       
    })
    it('check in the Cart',()=>{
        navbar.click_cart();
       cy.wait(1000)
       cart.get_cartitem().should('contain.text','Funny Cow');
       cart.get_cartitem().should('contain.text','Bunny');
       
    });




})
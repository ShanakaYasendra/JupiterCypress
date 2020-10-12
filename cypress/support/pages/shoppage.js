class shoppage{
    get_shoppingItem(item){
    return cy.get('h4').contains(item).siblings('p').children('a');
    }

    get_cart_count(){
        return cy.get('[class="cart-count ng-binding"]');
        
    }
    click_buy(item){
     this.get_shoppingItem(item).click();
    }


}
export default shoppage
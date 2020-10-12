
class contactpage{

    get_forename(){
       return cy.get('#forename');
    }

    get_surname(){
        return cy.get('#surname');
    }
    get_email(){
        return cy.get('#email');
    }
    get_tel(){
        return cy.get('#telephone');
    }
    get_message(){
        return cy.get('#message');
    }
    get_submit(){
        return cy.get('[class="btn-contact btn btn-primary"]');
    }
    get_error(id){
        return cy.get('#'+id+'-err');
    }
get_progressbar(){
    return cy.get('.bar');
}

    enter_forename(forename)
    {
        this.get_forename().type(forename)
    }
    enter_surname(surname)
    {
        this.get_surname().type(surname)
    }
    enter_email(email){
        this.get_email().type(email);
    }
    enter_telephone(tel)
    {
        this.get_tel().type(tel);
    }
    enter_message(message){
        this.get_message().type(message);
    }
    click_submit(){
        this.get_submit().click();
    }

    
}


export default contactpage

/// <reference types="cypress" />

import navigation from '../../support/pages/navigation'

import contactpage from '../../support/pages/contactpage';





describe ("Contact Page Test",()=>{

    const navBar= new navigation();
    const contact= new contactpage();
    beforeEach("setup",()=>{
        cy.visit("http://jupiter.cloud.planittesting.com/");
        navBar.click_contact();

    })

    it("Check Mandaetory Fields",()=>{

        navBar.click_contact();
     contact.click_submit();
        contact.get_error('message').should('contain','Message is required');
        contact.get_error('forename').should('contain','Forename is required');
        contact.get_error('email').should('contain','Email is required');

    }) 

 it("Check Invalid Data",()=>{
     
        contact.enter_forename('Jhon');
        contact.enter_email('abc');
        contact.get_error('email').should('contain','Please enter a valid email');
        contact.enter_telephone('abc')
        contact.get_error('telephone').should('contain.text','Please enter a valid telephone number');
        contact.enter_message('hello');

    }); 

    it("Is Error Present",()=>{
        contact.enter_forename('Jhon');
        contact.get_error('message').should('not.be.enabled');
        contact.enter_email('Jhon@hh.com');
        contact.get_error('email').should('not.be.enabled');
        contact.enter_message('Jhon@hh.com');
        contact.get_error('message').should('not.be.enabled');
        contact.enter_telephone('1234');
        contact.get_error('telephone').should('not.be.enabled');
    }) 

    it("Valid Submit",()=>{
        contact.enter_forename('Jhon');
        contact.enter_email('Jhon@hh.com');
        contact.enter_message('Jhon@hh.com');
        contact.enter_telephone('1234');
        contact.enter_surname('smith');
        contact.click_submit();
        contact.get_progressbar().should('be.visible');
        
 
        cy.get('[class="alert alert-success"]');

                cy.get('[class="alert alert-success"]').should('contain','we appreciate your feedback')

       
        

    })

  




});



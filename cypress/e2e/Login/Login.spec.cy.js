
import loginPage from './loginPage';

describe('Login Page Tests', () => {
    beforeEach(() => {
        loginPage.visit();
    });

    it('should display the login page', () => {
        cy.title().should('eq', 'Account Login');
        loginPage.elements.emailInput().should('be.visible');
        loginPage.elements.passwordInput().should('be.visible');
        loginPage.elements.loginButton().should('be.visible');
    });

    it('should login successfully with valid credentials', () => {
        loginPage.login('Josh2@gmail.com', 'Password1');
        cy.url().should('include', 'account/account');
        // Adjust the success message selector if needed
        cy.get('h2:nth-child(1)').should('have.text','My Account');
    });

    it('should show an error message for invalid credentials', () => {
        loginPage.login('invalid_email@example.com', 'invalidPassword');
        cy.url().should('include', 'account/login');
        cy.get('.alert-danger')
            .should('be.visible')
            .and('contain', 'Warning: No match for E-Mail Address and/or Password.');
    });

    it('should require email and password fields to be filled', () => {
        loginPage.elements.loginButton().click();
        cy.get('.alert-danger')
            .should('be.visible')
            .and('contain', 'Warning: No match for E-Mail Address and/or Password.');
    });
});

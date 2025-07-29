

class LoginPage {
    elements = {
        emailInput: () => cy.get('#input-email'),
        passwordInput: () => cy.get('#input-password'),
        loginButton: () => cy.get('input[type="submit"]'),
    }

    visit() {
        cy.visit('https://tutorialsninja.com/demo/index.php?route=account/login');
    }

    login(email, password) {
        this.elements.emailInput().type(email);
        this.elements.passwordInput().type(password);
        this.elements.loginButton().click();
    }

}

export default new LoginPage();

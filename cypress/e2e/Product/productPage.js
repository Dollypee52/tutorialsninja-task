class ProductPage {
    elements = {
        productImage: () => cy.get('div.product-thumb div.image img'),
        productTitle: () => cy.get('div.product-thumb div.caption h4 a'),
        productDescription: () => cy.get('div.product-thumb div.caption p'),
        productPrice: () => cy.get('div.product-thumb div.caption p.price'),
        addToCartButton: () => cy.get('div.product-thumb div.button-group button:nth-child(1)'),
        addToWishlistButton: () => cy.get('div.product-thumb div.button-group button:nth-child(2)'),
        compareButton: () => cy.get('div.product-thumb div.button-group button:nth-child(3)'),
        successAlert: () => cy.get('.alert-success'),
    }

    // Navigate to product search result
    visit() {
        cy.visit('https://tutorialsninja.com/demo/index.php?route=product/search&search=iphone');
    }

    // Assertions
    verifyProductImageVisible() {
        this.elements.productImage().should('be.visible');
    }

    verifyProductTitle(expected = 'iPhone') {
        this.elements.productTitle().should('have.text', expected);
    }

    verifyProductDescriptionContains(text = 'iPhone is a revolutionary new mobile phone') {
        this.elements.productDescription().should('contain', text);
    }

    verifyProductPrice(expected = '$123.20') {
        this.elements.productPrice().should('contain', expected);
    }

    // Actions
    addToCart() {
        this.elements.addToCartButton().click();
    }

    addToWishlist() {
        this.elements.addToWishlistButton().click();
    }

    compareProduct() {
        this.elements.compareButton().click();
    }

    // Shared success alert validation
    verifySuccessAlertContains(message) {
        this.elements.successAlert().should('contain', message);
    }
}

export default new ProductPage();

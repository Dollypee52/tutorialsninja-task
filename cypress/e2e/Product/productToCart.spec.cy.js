// cypress/e2e/product/productToCart.spec.js

import productPage from './productPage';
import CartPage from '../cart/cartPage';

describe('Product to Cart Integration Test', () => {
    const cartPage = new CartPage();

    beforeEach(() => {
        productPage.visit();
    });

    it('should add product to cart and verify in cart page', () => {
        // Step 1: Add to cart
        productPage.addToCart();
        productPage.verifySuccessAlertContains('Success: You have added iPhone to your shopping cart!');

        // Step 2: View Cart
        cartPage.viewCart();
        cy.url().should('include', 'checkout/cart');

        // Step 3: Validate cart item details
        cartPage.getItemDetails().then(item => {
            expect(item.name.trim()).to.equal('iPhone');
            expect(item.quantity.trim()).to.equal('x 1');
            expect(item.price.trim()).to.equal('$123.20');
        });

        // Step 4: Validate cart summary
        cartPage.getCartSummary().then(summary => {
            expect(summary.subTotal.trim()).to.equal('$101.00');
            expect(summary.ecoTax.trim()).to.equal('$2.00');
            expect(summary.vat.trim()).to.equal('$20.20');
            expect(summary.total.trim()).to.equal('$123.20');
        });
    });
});

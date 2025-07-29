import CartPage from '../Cart/cartPage';

describe('Cart Page Tests', () => {
    beforeEach(() => {
        cy.visit('https://tutorialsninja.com/demo/index.php?route=checkout/cart');
    });

    it('should remove an item from the cart', () => {
        CartPage.removeFirstItem();
        CartPage.verifyCartIsEmpty();
    });

    it('should update the item count after removing an item', () => {
        CartPage.removeFirstItem();
        CartPage.verifyItemRemovedFromSummary();
    });

    it('should show an alert after removing an item', () => {
        CartPage.removeFirstItem();
        CartPage.verifyAlertMessageVisible();
    });
});

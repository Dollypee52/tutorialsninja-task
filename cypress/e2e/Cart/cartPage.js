class CartPage {
    // Element selectors
    get cartItems() {
        return 'ul.dropdown-menu.pull-right li table.table-striped tbody tr';
    }

    get itemName() {
        return 'td.text-left a';
    }

    get itemQuantity() {
        return 'td.text-right:nth-child(3)';
    }

    get itemPrice() {
        return 'td.text-right:nth-child(4)';
    }

    get removeButton() {
        return 'td.text-center button.btn-danger';
    }

    get subTotal() {
        return 'table.table-bordered tbody tr:nth-child(1) td.text-right:nth-child(2)';
    }

    get ecoTax() {
        return 'table.table-bordered tbody tr:nth-child(2) td.text-right:nth-child(2)';
    }

    get vat() {
        return 'table.table-bordered tbody tr:nth-child(3) td.text-right:nth-child(2)';
    }

    get total() {
        return 'table.table-bordered tbody tr:nth-child(4) td.text-right:nth-child(2)';
    }

    get viewCartButton() {
        return 'p.text-right a[href*="checkout/cart"]';
    }

    get checkoutButton() {
        return 'p.text-right a[href*="checkout/checkout"]';
    }

    get removeItemButton() {
        return 'button[data-original-title="Remove"]';
    }

    get alertMessage() {
        return '.alert';
    }

    get cartTotalSummary() {
        return '.cart-total';
    }

    get emptyCartMessage() {
        return '#content p';
    }

    // Actions
    removeItem() {
        cy.get(this.removeButton).click();
    }

    removeFirstItem() {
        cy.get(this.removeItemButton, { timeout: 10000 }).should('be.visible').first().click();
    }
    

    getItemDetails() {
        return cy.get(this.itemName).first().invoke('text').then(name => {
            return cy.get(this.itemQuantity).first().invoke('text').then(quantity => {
                const formattedQuantity = quantity.replace(/^x(\d+)$/, 'x $1'); // Ensure spacing
                return cy.get(this.itemPrice).first().invoke('text').then(price => {
                    return { name, quantity: formattedQuantity, price };
                });
            });
        });
    }

    getCartSummary() {
        return cy.get(this.subTotal).first().invoke('text').then(subTotal => {
            return cy.get(this.ecoTax).first().invoke('text').then(ecoTax => {
                return cy.get(this.vat).first().invoke('text').then(vat => {
                    return cy.get(this.total).first().invoke('text').then(total => {
                        return {
                            subTotal,
                            ecoTax,
                            vat,
                            total
                        };
                    });
                });
            });
        });
    }

    viewCart() {
        cy.get('#cart button').click(); // Expand cart dropdown
        cy.get(this.viewCartButton).should('be.visible').click();
    }

    checkout() {
        cy.get(this.checkoutButton).click();
    }

    verifyCartIsEmpty() {
        cy.get(this.emptyCartMessage).should('contain', 'Your shopping cart is empty!');
    }

    verifyAlertMessageVisible() {
        cy.get(this.alertMessage).should('be.visible');
    }

    verifyItemRemovedFromSummary() {
        cy.get(this.cartTotalSummary).should('not.contain', '1 item');
    }
}

export default new CartPage();

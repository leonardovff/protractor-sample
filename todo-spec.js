
describe('teste de operadora', function() {
    it('tim teste', function() {
        browser.waitForAngularEnabled(false);
        browser.get('https://www.qualoperadora.net/');

        element(by.css('#telefone')).sendKeys('82999201870');
        element(by.css('#consultar')).click();
        expect(element(by.css('.dados')).getText()).toEqual('TIM - Celular');
    });
    it('tim teste', function() {
        browser.waitForAngularEnabled(false);
        browser.get('https://www.qualoperadora.net/');

        element(by.css('#telefone')).sendKeys('82989207070');
        element(by.css('#consultar')).click();
        expect(element(by.css('.dados')).getText()).toEqual('OI - Celular');
    });
});
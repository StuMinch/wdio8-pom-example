class CurrencyScreen {
    get shopInUsd() {
      return $('~SHOP IN USD ($)');
    }
  
    get updateCurrency() {
      return $(
        `-ios class chain:**/XCUIElementTypeButton[\`label == "UPDATE CURRENCY"\`]`
      );
    }
  }
  
  export default new CurrencyScreen();  
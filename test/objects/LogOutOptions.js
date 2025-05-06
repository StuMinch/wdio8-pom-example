class LogOutOptions {
    get logOutByLabel() {
      return $(`-ios class chain:**/XCUIElementTypeButton[label == "Log Out"][1]`)
    }
  
    get logOutByXpath() {
      return $('(//XCUIElementTypeButton[@name="Log Out"])[2]')
    }
  }
  
  export default new LogOutOptions();  
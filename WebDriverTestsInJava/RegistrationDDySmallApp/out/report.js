$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ddysmall-login.feature");
formatter.feature({
  "line": 2,
  "name": "DDySmall Login Page",
  "description": "",
  "id": "ddysmall-login-page",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "A user  login to the application",
  "description": "",
  "id": "ddysmall-login-page;a-user--login-to-the-application",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "an open browser with http://localhost:3000/sign_in",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "user input \u003cemail\u003e into Email field",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user input \u003cpassword\u003e into Password field",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user click  submit button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user is redirected to http://localhost:3000",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user click sign out button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user close the  browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "ddysmall-login-page;a-user--login-to-the-application;",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 20,
      "id": "ddysmall-login-page;a-user--login-to-the-application;;1"
    },
    {
      "cells": [
        "maggy.pp@gmail.com",
        "gosiap79"
      ],
      "line": 21,
      "id": "ddysmall-login-page;a-user--login-to-the-application;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 21,
  "name": "A user  login to the application",
  "description": "",
  "id": "ddysmall-login-page;a-user--login-to-the-application;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "an open browser with http://localhost:3000/sign_in",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "user input maggy.pp@gmail.com into Email field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user input gosiap79 into Password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user click  submit button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user is redirected to http://localhost:3000",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user click sign out button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user close the  browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginDdySmall.browser_with_ddySmall_open()"
});
formatter.result({
  "duration": 5502757102,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "maggy.pp@gmail.com",
      "offset": 11
    }
  ],
  "location": "LoginDdySmall.user_input_e_mail_into_email_input(String)"
});
formatter.result({
  "duration": 362974758,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "gosiap79",
      "offset": 11
    }
  ],
  "location": "LoginDdySmall.user_input_password_into_password_input(String)"
});
formatter.result({
  "duration": 145800279,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "LoginDdySmall.user_click_sign_out_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});
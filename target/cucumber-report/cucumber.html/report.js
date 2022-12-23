$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("buy.feature");
formatter.feature({
  "line": 1,
  "name": "Search functionality",
  "description": "As a user I want to search functionality",
  "id": "search-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click ‘Search Cars’ link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to ‘new and used car search’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select make \"\u003cmake\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select model \"\u003cmodel\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select location \"\u003clocation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select price \"\u003cprice\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see the make \"\u003cmake\u003e\" in results",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;",
  "rows": [
    {
      "cells": [
        "make",
        "model",
        "location",
        "price"
      ],
      "line": 16,
      "id": "search-functionality;search-the-buy-car-with-model;;1"
    },
    {
      "cells": [
        "Honda",
        "Accord",
        "NSW - Sydney",
        "$20,000"
      ],
      "line": 17,
      "id": "search-functionality;search-the-buy-car-with-model;;2"
    },
    {
      "cells": [
        "BMW",
        "Any Model",
        "ACT - All",
        "$10,000"
      ],
      "line": 18,
      "id": "search-functionality;search-the-buy-car-with-model;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 14673743900,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click ‘Search Cars’ link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to ‘new and used car search’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select make \"Honda\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select model \"Accord\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select location \"NSW - Sydney\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select price \"$20,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see the make \"Honda\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuyCars.iAmOnHomepage()"
});
formatter.result({
  "duration": 487105000,
  "status": "passed"
});
formatter.match({
  "location": "BuyCars.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 945508400,
  "status": "passed"
});
formatter.match({
  "location": "BuyCars.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 3462925200,
  "status": "passed"
});
formatter.match({
  "location": "BuyCars.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 47300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Honda",
      "offset": 15
    }
  ],
  "location": "BuyCars.iSelectMake(String)"
});
formatter.result({
  "duration": 803868600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Accord",
      "offset": 16
    }
  ],
  "location": "BuyCars.iSelectModel(String)"
});
formatter.result({
  "duration": 2144776900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - Sydney",
      "offset": 19
    }
  ],
  "location": "BuyCars.iSelectLocation(String)"
});
formatter.result({
  "duration": 225856300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$20,000",
      "offset": 16
    }
  ],
  "location": "BuyCars.iSelectPrice(String)"
});
formatter.result({
  "duration": 172893500,
  "status": "passed"
});
formatter.match({
  "location": "BuyCars.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 5361179600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Honda",
      "offset": 23
    }
  ],
  "location": "BuyCars.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 111177300,
  "status": "passed"
});
formatter.after({
  "duration": 1207743500,
  "status": "passed"
});
formatter.before({
  "duration": 9517568600,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click ‘Search Cars’ link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to ‘new and used car search’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select make \"BMW\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select model \"Any Model\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select location \"ACT - All\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select price \"$10,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see the make \"BMW\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuyCars.iAmOnHomepage()"
});
formatter.result({
  "duration": 64200,
  "status": "passed"
});
formatter.match({
  "location": "BuyCars.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 1087056200,
  "status": "passed"
});
formatter.match({
  "location": "BuyCars.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 3213448500,
  "status": "passed"
});
formatter.match({
  "location": "BuyCars.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 60300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BMW",
      "offset": 15
    }
  ],
  "location": "BuyCars.iSelectMake(String)"
});
formatter.result({
  "duration": 763809300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Any Model",
      "offset": 16
    }
  ],
  "location": "BuyCars.iSelectModel(String)"
});
formatter.result({
  "duration": 2139188500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ACT - All",
      "offset": 19
    }
  ],
  "location": "BuyCars.iSelectLocation(String)"
});
formatter.result({
  "duration": 165623100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$10,000",
      "offset": 16
    }
  ],
  "location": "BuyCars.iSelectPrice(String)"
});
formatter.result({
  "duration": 222309300,
  "status": "passed"
});
formatter.match({
  "location": "BuyCars.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 4539180900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BMW",
      "offset": 23
    }
  ],
  "location": "BuyCars.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 90627300,
  "status": "passed"
});
formatter.after({
  "duration": 1136064600,
  "status": "passed"
});
formatter.uri("finddealers.feature");
formatter.feature({
  "line": 1,
  "name": "Find the dealers and verify",
  "description": "As a user I want to search functionality",
  "id": "find-the-dealers-and-verify",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Find the dealers and verify the dealers are in list",
  "description": "",
  "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-list",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click ‘Find a Dealer’",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to ‘car-dealers’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I should see the dealer names \"\u003cdealersName\u003e\" are display on page",
  "keyword": "And "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-list;",
  "rows": [
    {
      "cells": [
        "dealersName"
      ],
      "line": 11,
      "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-list;;1"
    },
    {
      "cells": [
        "3 Point Motors Epping"
      ],
      "line": 12,
      "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-list;;2"
    },
    {
      "cells": [
        "4WD Specialist Group"
      ],
      "line": 13,
      "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-list;;3"
    },
    {
      "cells": [
        "5 Star Auto"
      ],
      "line": 14,
      "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-list;;4"
    },
    {
      "cells": [
        "A \u0026 M Car Sales Pty Ltd"
      ],
      "line": 15,
      "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-list;;5"
    },
    {
      "cells": [
        "A1 MOTORS COMPANY"
      ],
      "line": 16,
      "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-list;;6"
    },
    {
      "cells": [
        "ANDREA MOTORI SERVICE"
      ],
      "line": 17,
      "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-list;;7"
    },
    {
      "cells": [
        "Oxford Motors"
      ],
      "line": 18,
      "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-list;;8"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6614836800,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Find the dealers and verify the dealers are in list",
  "description": "",
  "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-list;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click ‘Find a Dealer’",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to ‘car-dealers’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I should see the dealer names \"3 Point Motors Epping\" are display on page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "location": "BuyCars.iAmOnHomepage()"
});
formatter.result({
  "duration": 54600,
  "status": "passed"
});
formatter.match({
  "location": "BuyCars.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 1062478500,
  "status": "passed"
});
formatter.match({
  "location": "FindDealer.iClickFindADealer()"
});
formatter.result({
  "duration": 1224140900,
  "status": "passed"
});
formatter.match({
  "location": "FindDealer.iNavigateToCarDealersPage()"
});
formatter.result({
  "duration": 37600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3 Point Motors Epping",
      "offset": 31
    }
  ],
  "location": "FindDealer.iShouldSeeTheDealerNamesAreDisplayOnPage(String)"
});
formatter.result({
  "duration": 1922076100,
  "status": "passed"
});
formatter.after({
  "duration": 987584500,
  "status": "passed"
});
formatter.before({
  "duration": 6729558700,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Find the dealers and verify the dealers are in list",
  "description": "",
  "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-list;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click ‘Find a Dealer’",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to ‘car-dealers’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I should see the dealer names \"4WD Specialist Group\" are display on page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "location": "BuyCars.iAmOnHomepage()"
});
formatter.result({
  "duration": 48500,
  "status": "passed"
});
formatter.match({
  "location": "BuyCars.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 1484213900,
  "status": "passed"
});
formatter.match({
  "location": "FindDealer.iClickFindADealer()"
});
formatter.result({
  "duration": 2537303400,
  "status": "passed"
});
formatter.match({
  "location": "FindDealer.iNavigateToCarDealersPage()"
});
formatter.result({
  "duration": 50800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4WD Specialist Group",
      "offset": 31
    }
  ],
  "location": "FindDealer.iShouldSeeTheDealerNamesAreDisplayOnPage(String)"
});
formatter.result({
  "duration": 520515800,
  "status": "passed"
});
formatter.after({
  "duration": 960091600,
  "status": "passed"
});
formatter.before({
  "duration": 6597053800,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Find the dealers and verify the dealers are in list",
  "description": "",
  "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-list;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click ‘Find a Dealer’",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to ‘car-dealers’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I should see the dealer names \"5 Star Auto\" are display on page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "location": "BuyCars.iAmOnHomepage()"
});
formatter.result({
  "duration": 113500,
  "status": "passed"
});
formatter.match({
  "location": "BuyCars.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 1075055100,
  "status": "passed"
});
formatter.match({
  "location": "FindDealer.iClickFindADealer()"
});
formatter.result({
  "duration": 953670700,
  "status": "passed"
});
formatter.match({
  "location": "FindDealer.iNavigateToCarDealersPage()"
});
formatter.result({
  "duration": 53100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5 Star Auto",
      "offset": 31
    }
  ],
  "location": "FindDealer.iShouldSeeTheDealerNamesAreDisplayOnPage(String)"
});
formatter.result({
  "duration": 2587426400,
  "status": "passed"
});
formatter.after({
  "duration": 970252300,
  "status": "passed"
});
formatter.before({
  "duration": 181823312400,
  "error_message": "org.openqa.selenium.TimeoutException: java.util.concurrent.TimeoutException\nBuild info: version: \u00274.6.0\u0027, revision: \u002779f1c02ae20\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [ceb921423c03e954649787153d1d50ba, get {url\u003dhttps://www.carsguide.com.au/}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 108.0.5359.125, chrome: {chromedriverVersion: 108.0.5359.71 (1e0e3868ee06..., userDataDir: C:\\Users\\pansu\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:56216}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:56216/devtoo..., se:cdpVersion: 108.0.5359.125, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: ceb921423c03e954649787153d1d50ba\r\n\tat org.openqa.selenium.remote.http.netty.NettyHttpHandler.makeCall(NettyHttpHandler.java:65)\r\n\tat org.openqa.selenium.remote.http.AddSeleniumUserAgent.lambda$apply$0(AddSeleniumUserAgent.java:42)\r\n\tat org.openqa.selenium.remote.http.Filter.lambda$andFinally$1(Filter.java:56)\r\n\tat org.openqa.selenium.remote.http.netty.NettyHttpHandler.execute(NettyHttpHandler.java:49)\r\n\tat org.openqa.selenium.remote.http.AddSeleniumUserAgent.lambda$apply$0(AddSeleniumUserAgent.java:42)\r\n\tat org.openqa.selenium.remote.http.Filter.lambda$andFinally$1(Filter.java:56)\r\n\tat org.openqa.selenium.remote.http.netty.NettyClient.execute(NettyClient.java:99)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:181)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:541)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:310)\r\n\tat au.com.carsguide.browserfactory.ManageBrowser.selectBrowser(ManageBrowser.java:36)\r\n\tat au.com.carsguide.Hooks.setUp(Hooks.java:16)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\nCaused by: java.util.concurrent.TimeoutException\r\n\tat java.util.concurrent.CompletableFuture.timedGet(CompletableFuture.java:1771)\r\n\tat java.util.concurrent.CompletableFuture.get(CompletableFuture.java:1915)\r\n\tat org.asynchttpclient.netty.NettyResponseFuture.get(NettyResponseFuture.java:206)\r\n\tat org.openqa.selenium.remote.http.netty.NettyHttpHandler.makeCall(NettyHttpHandler.java:59)\r\n\t... 70 more\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 15,
  "name": "Find the dealers and verify the dealers are in list",
  "description": "",
  "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-list;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click ‘Find a Dealer’",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to ‘car-dealers’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I should see the dealer names \"A \u0026 M Car Sales Pty Ltd\" are display on page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "location": "BuyCars.iAmOnHomepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BuyCars.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FindDealer.iClickFindADealer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FindDealer.iNavigateToCarDealersPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "A \u0026 M Car Sales Pty Ltd",
      "offset": 31
    }
  ],
  "location": "FindDealer.iShouldSeeTheDealerNamesAreDisplayOnPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 121808092700,
  "status": "passed"
});
formatter.before({
  "duration": 5498683200,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Find the dealers and verify the dealers are in list",
  "description": "",
  "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-list;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click ‘Find a Dealer’",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to ‘car-dealers’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I should see the dealer names \"A1 MOTORS COMPANY\" are display on page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "location": "BuyCars.iAmOnHomepage()"
});
formatter.result({
  "duration": 54600,
  "status": "passed"
});
formatter.match({
  "location": "BuyCars.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 958025300,
  "status": "passed"
});
formatter.match({
  "location": "FindDealer.iClickFindADealer()"
});
formatter.result({
  "duration": 598624700,
  "status": "passed"
});
formatter.match({
  "location": "FindDealer.iNavigateToCarDealersPage()"
});
formatter.result({
  "duration": 31800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A1 MOTORS COMPANY",
      "offset": 31
    }
  ],
  "location": "FindDealer.iShouldSeeTheDealerNamesAreDisplayOnPage(String)"
});
formatter.result({
  "duration": 1983135800,
  "status": "passed"
});
formatter.after({
  "duration": 1024735100,
  "status": "passed"
});
formatter.before({
  "duration": 8100865300,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Find the dealers and verify the dealers are in list",
  "description": "",
  "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-list;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click ‘Find a Dealer’",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to ‘car-dealers’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I should see the dealer names \"ANDREA MOTORI SERVICE\" are display on page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "location": "BuyCars.iAmOnHomepage()"
});
formatter.result({
  "duration": 57800,
  "status": "passed"
});
formatter.match({
  "location": "BuyCars.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 949543100,
  "status": "passed"
});
formatter.match({
  "location": "FindDealer.iClickFindADealer()"
});
formatter.result({
  "duration": 2332845200,
  "status": "passed"
});
formatter.match({
  "location": "FindDealer.iNavigateToCarDealersPage()"
});
formatter.result({
  "duration": 29400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ANDREA MOTORI SERVICE",
      "offset": 31
    }
  ],
  "location": "FindDealer.iShouldSeeTheDealerNamesAreDisplayOnPage(String)"
});
formatter.result({
  "duration": 560167800,
  "status": "passed"
});
formatter.after({
  "duration": 1016919700,
  "status": "passed"
});
formatter.before({
  "duration": 7195825600,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Find the dealers and verify the dealers are in list",
  "description": "",
  "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-list;;8",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click ‘Find a Dealer’",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to ‘car-dealers’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I should see the dealer names \"Oxford Motors\" are display on page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "location": "BuyCars.iAmOnHomepage()"
});
formatter.result({
  "duration": 69500,
  "status": "passed"
});
formatter.match({
  "location": "BuyCars.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 1247828900,
  "status": "passed"
});
formatter.match({
  "location": "FindDealer.iClickFindADealer()"
});
formatter.result({
  "duration": 3082735500,
  "status": "passed"
});
formatter.match({
  "location": "FindDealer.iNavigateToCarDealersPage()"
});
formatter.result({
  "duration": 58600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Oxford Motors",
      "offset": 31
    }
  ],
  "location": "FindDealer.iShouldSeeTheDealerNamesAreDisplayOnPage(String)"
});
formatter.result({
  "duration": 546117400,
  "status": "passed"
});
formatter.after({
  "duration": 1040971600,
  "status": "passed"
});
formatter.uri("usedCars.feature");
formatter.feature({
  "line": 1,
  "name": "Search usedcars",
  "description": "As a user I want to search usedcars",
  "id": "search-usedcars",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-usedcars;search-the-used-car-with-model",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click ‘Used’ link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to ‘Used Cars For Sale’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select make \"\u003cmake\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select model \"\u003cmodel\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select location \"\u003clocation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select price \"\u003cprice\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see the make \"\u003cmake\u003e\" in results",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "search-usedcars;search-the-used-car-with-model;",
  "rows": [
    {
      "cells": [
        "make",
        "model",
        "location",
        "price"
      ],
      "line": 16,
      "id": "search-usedcars;search-the-used-car-with-model;;1"
    },
    {
      "cells": [
        "Alfa Romeo",
        "Any Model",
        "NSW - Central Coast",
        "$60,000"
      ],
      "line": 17,
      "id": "search-usedcars;search-the-used-car-with-model;;2"
    },
    {
      "cells": [
        "Audi",
        "A1",
        "NSW - Far North Coast",
        "$80,000"
      ],
      "line": 18,
      "id": "search-usedcars;search-the-used-car-with-model;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7161952400,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-usedcars;search-the-used-car-with-model;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click ‘Used’ link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to ‘Used Cars For Sale’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select make \"Alfa Romeo\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select model \"Any Model\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select location \"NSW - Central Coast\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select price \"$60,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see the make \"Alfa Romeo\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuyCars.iAmOnHomepage()"
});
formatter.result({
  "duration": 33000,
  "status": "passed"
});
formatter.match({
  "location": "BuyCars.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 739455200,
  "status": "passed"
});
formatter.match({
  "location": "UsedCars.iClickUsedLink()"
});
formatter.result({
  "duration": 730803200,
  "status": "passed"
});
formatter.match({
  "location": "UsedCars.iNavigateToUsedCarsForSalePage()"
});
formatter.result({
  "duration": 42600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Alfa Romeo",
      "offset": 15
    }
  ],
  "location": "BuyCars.iSelectMake(String)"
});
formatter.result({
  "duration": 2777954100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Any Model",
      "offset": 16
    }
  ],
  "location": "BuyCars.iSelectModel(String)"
});
formatter.result({
  "duration": 2103892700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - Central Coast",
      "offset": 19
    }
  ],
  "location": "BuyCars.iSelectLocation(String)"
});
formatter.result({
  "duration": 156161000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$60,000",
      "offset": 16
    }
  ],
  "location": "BuyCars.iSelectPrice(String)"
});
formatter.result({
  "duration": 181300200,
  "status": "passed"
});
formatter.match({
  "location": "BuyCars.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 3703904500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Alfa Romeo",
      "offset": 23
    }
  ],
  "location": "BuyCars.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 106349900,
  "status": "passed"
});
formatter.after({
  "duration": 1010665900,
  "status": "passed"
});
formatter.before({
  "duration": 6897411200,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-usedcars;search-the-used-car-with-model;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click ‘Used’ link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to ‘Used Cars For Sale’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select make \"Audi\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select model \"A1\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select location \"NSW - Far North Coast\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select price \"$80,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see the make \"Audi\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuyCars.iAmOnHomepage()"
});
formatter.result({
  "duration": 50300,
  "status": "passed"
});
formatter.match({
  "location": "BuyCars.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 1431564800,
  "status": "passed"
});
formatter.match({
  "location": "UsedCars.iClickUsedLink()"
});
formatter.result({
  "duration": 3667285600,
  "status": "passed"
});
formatter.match({
  "location": "UsedCars.iNavigateToUsedCarsForSalePage()"
});
formatter.result({
  "duration": 52500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Audi",
      "offset": 15
    }
  ],
  "location": "BuyCars.iSelectMake(String)"
});
formatter.result({
  "duration": 420759900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A1",
      "offset": 16
    }
  ],
  "location": "BuyCars.iSelectModel(String)"
});
formatter.result({
  "duration": 2166923500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - Far North Coast",
      "offset": 19
    }
  ],
  "location": "BuyCars.iSelectLocation(String)"
});
formatter.result({
  "duration": 219889000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$80,000",
      "offset": 16
    }
  ],
  "location": "BuyCars.iSelectPrice(String)"
});
formatter.result({
  "duration": 237210400,
  "status": "passed"
});
formatter.match({
  "location": "BuyCars.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 3674127100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Audi",
      "offset": 23
    }
  ],
  "location": "BuyCars.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 517057100,
  "status": "passed"
});
formatter.after({
  "duration": 1078612000,
  "status": "passed"
});
});
var app = angular.module('reportingApp', []);

app.controller('ScreenshotReportController', function ($scope) {
    $scope.searchSettings = Object.assign({
        description: '',
        allselected: true,
        passed: true,
        failed: true,
        pending: true,
        withLog: true
    }, {}); // enable customisation of search settings on first page hit

    var initialColumnSettings = undefined; // enable customisation of visible columns on first page hit
    if (initialColumnSettings) {
        if (initialColumnSettings.displayTime !== undefined) {
            // initial settings have be inverted because the html bindings are inverted (e.g. !ctrl.displayTime)
            this.displayTime = !initialColumnSettings.displayTime;
        }
        if (initialColumnSettings.displayBrowser !== undefined) {
            this.displayBrowser = !initialColumnSettings.displayBrowser; // same as above
        }
        if (initialColumnSettings.displaySessionId !== undefined) {
            this.displaySessionId = !initialColumnSettings.displaySessionId; // same as above
        }
        if (initialColumnSettings.displayOS !== undefined) {
            this.displayOS = !initialColumnSettings.displayOS; // same as above
        }
        if (initialColumnSettings.inlineScreenshots !== undefined) {
            this.inlineScreenshots = initialColumnSettings.inlineScreenshots; // this setting does not have to be inverted
        }

    }


    $scope.inlineScreenshots = false;
    this.showSmartStackTraceHighlight = true;

    this.chooseAllTypes = function () {
        var value = true;
        $scope.searchSettings.allselected = !$scope.searchSettings.allselected;
        if (!$scope.searchSettings.allselected) {
            value = false;
        }

        $scope.searchSettings.passed = value;
        $scope.searchSettings.failed = value;
        $scope.searchSettings.pending = value;
        $scope.searchSettings.withLog = value;
    };

    this.isValueAnArray = function (val) {
        return isValueAnArray(val);
    };

    this.getParent = function (str) {
        var arr = str.split('|');
        str = "";
        for (var i = arr.length - 2; i > 0; i--) {
            str += arr[i] + " > ";
        }
        return str.slice(0, -3);
    };

    this.getSpec = function (str) {
        return getSpec(str);
    };


    this.getShortDescription = function (str) {
        return str.split('|')[0];
    };

    this.convertTimestamp = function (timestamp) {
        var d = new Date(timestamp),
            yyyy = d.getFullYear(),
            mm = ('0' + (d.getMonth() + 1)).slice(-2),
            dd = ('0' + d.getDate()).slice(-2),
            hh = d.getHours(),
            h = hh,
            min = ('0' + d.getMinutes()).slice(-2),
            ampm = 'AM',
            time;

        if (hh > 12) {
            h = hh - 12;
            ampm = 'PM';
        } else if (hh === 12) {
            h = 12;
            ampm = 'PM';
        } else if (hh === 0) {
            h = 12;
        }

        // ie: 2013-02-18, 8:35 AM
        time = yyyy + '-' + mm + '-' + dd + ', ' + h + ':' + min + ' ' + ampm;

        return time;
    };


    this.round = function (number, roundVal) {
        return (parseFloat(number) / 1000).toFixed(roundVal);
    };


    this.passCount = function () {
        var passCount = 0;
        for (var i in this.results) {
            var result = this.results[i];
            if (result.passed) {
                passCount++;
            }
        }
        return passCount;
    };


    this.pendingCount = function () {
        var pendingCount = 0;
        for (var i in this.results) {
            var result = this.results[i];
            if (result.pending) {
                pendingCount++;
            }
        }
        return pendingCount;
    };


    this.failCount = function () {
        var failCount = 0;
        for (var i in this.results) {
            var result = this.results[i];
            if (!result.passed && !result.pending) {
                failCount++;
            }
        }
        return failCount;
    };

    this.passPerc = function () {
        return (this.passCount() / this.totalCount()) * 100;
    };
    this.pendingPerc = function () {
        return (this.pendingCount() / this.totalCount()) * 100;
    };
    this.failPerc = function () {
        return (this.failCount() / this.totalCount()) * 100;
    };
    this.totalCount = function () {
        return this.passCount() + this.failCount() + this.pendingCount();
    };

    this.applySmartHighlight = function (line) {
        if (this.showSmartStackTraceHighlight) {
            if (line.indexOf('node_modules') > -1) {
                return 'greyout';
            }
            if (line.indexOf('  at ') === -1) {
                return '';
            }

            return 'highlight';
        }
        return true;
    };


    var results = [
    {
        "description": "Test Case ID. SF001 - Store Finder link should be displayed|Marshalls Webpage - Store Finder Link - Testing Suite",
        "passed": false,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 9047,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": [
            "Failed: Cannot read property 'click' of undefined",
            "Failed: Cannot read property 'isDisplayed' of undefined"
        ],
        "trace": [
            "TypeError: Cannot read property 'click' of undefined\n    at UserContext.<anonymous> (/Users/yasarozen/Desktop/MarshallsProjectFramework 2/MarshallsProject /Tests/StoreFinder1.spec.js:22:39)\n    at /usr/local/lib/node_modules/protractor/node_modules/jasminewd2/index.js:112:25\n    at new ManagedPromise (/usr/local/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1077:7)\n    at ControlFlow.promise (/usr/local/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2505:12)\n    at schedulerExecute (/usr/local/lib/node_modules/protractor/node_modules/jasminewd2/index.js:95:18)\n    at TaskQueue.execute_ (/usr/local/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/local/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\n    at asyncRun (/usr/local/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2974:25)\n    at /usr/local/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:668:7\n    at process._tickCallback (internal/process/next_tick.js:68:7)\nFrom: Task: Run beforeAll in control flow\n    at UserContext.<anonymous> (/usr/local/lib/node_modules/protractor/node_modules/jasminewd2/index.js:94:19)\n    at attempt (/usr/local/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4297:26)\n    at QueueRunner.run (/usr/local/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4217:20)\n    at QueueRunner.execute (/usr/local/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4199:10)\n    at queueRunnerFactory (/usr/local/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:909:35)\n    at UserContext.fn (/usr/local/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:5325:13)\n    at attempt (/usr/local/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4297:26)\n    at QueueRunner.run (/usr/local/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4217:20)\n    at QueueRunner.execute (/usr/local/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4199:10)\n    at queueRunnerFactory (/usr/local/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:909:35)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (/Users/yasarozen/Desktop/MarshallsProjectFramework 2/MarshallsProject /Tests/StoreFinder1.spec.js:14:9)\n    at addSpecsToSuite (/usr/local/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1107:25)\n    at Env.describe (/usr/local/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1074:7)\n    at describe (/usr/local/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4399:18)\n    at Object.<anonymous> (/Users/yasarozen/Desktop/MarshallsProjectFramework 2/MarshallsProject /Tests/StoreFinder1.spec.js:12:1)\n    at Module._compile (internal/modules/cjs/loader.js:689:30)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:700:10)\n    at Module.load (internal/modules/cjs/loader.js:599:32)\n    at tryModuleLoad (internal/modules/cjs/loader.js:538:12)",
            "TypeError: Cannot read property 'isDisplayed' of undefined\n    at UserContext.<anonymous> (/Users/yasarozen/Desktop/MarshallsProjectFramework 2/MarshallsProject /Tests/StoreFinder1.spec.js:28:46)\n    at /usr/local/lib/node_modules/protractor/node_modules/jasminewd2/index.js:112:25\n    at new ManagedPromise (/usr/local/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1077:7)\n    at ControlFlow.promise (/usr/local/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2505:12)\n    at schedulerExecute (/usr/local/lib/node_modules/protractor/node_modules/jasminewd2/index.js:95:18)\n    at TaskQueue.execute_ (/usr/local/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/local/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\n    at asyncRun (/usr/local/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2974:25)\n    at /usr/local/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:668:7\n    at process._tickCallback (internal/process/next_tick.js:68:7)\nFrom: Task: Run it(\"Test Case ID. SF001 - Store Finder link should be displayed\") in control flow\n    at UserContext.<anonymous> (/usr/local/lib/node_modules/protractor/node_modules/jasminewd2/index.js:94:19)\n    at attempt (/usr/local/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4297:26)\n    at QueueRunner.run (/usr/local/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4217:20)\n    at runNext (/usr/local/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4257:20)\n    at /usr/local/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4264:13\n    at /usr/local/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4172:9\n    at /usr/local/lib/node_modules/protractor/node_modules/jasminewd2/index.js:64:48\n    at ControlFlow.emit (/usr/local/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/events.js:62:21)\n    at ControlFlow.shutdown_ (/usr/local/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2674:10)\n    at shutdownTask_.MicroTask (/usr/local/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (/Users/yasarozen/Desktop/MarshallsProjectFramework 2/MarshallsProject /Tests/StoreFinder1.spec.js:26:9)\n    at addSpecsToSuite (/usr/local/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1107:25)\n    at Env.describe (/usr/local/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1074:7)\n    at describe (/usr/local/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4399:18)\n    at Object.<anonymous> (/Users/yasarozen/Desktop/MarshallsProjectFramework 2/MarshallsProject /Tests/StoreFinder1.spec.js:12:1)\n    at Module._compile (internal/modules/cjs/loader.js:689:30)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:700:10)\n    at Module.load (internal/modules/cjs/loader.js:599:32)\n    at tryModuleLoad (internal/modules/cjs/loader.js:538:12)"
        ],
        "browserLogs": [],
        "screenShotFile": "images/00e000bb-0023-00b5-009f-0012002f0071.png",
        "timestamp": 1540569488992,
        "duration": 6
    },
    {
        "description": "Test Case ID. SF002 - Store Finder link should be clickable|Marshalls Webpage - Store Finder Link - Testing Suite",
        "passed": false,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 9047,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": [
            "Failed: Cannot read property 'click' of undefined",
            "Failed: Cannot read property 'click' of undefined"
        ],
        "trace": [
            "TypeError: Cannot read property 'click' of undefined\n    at UserContext.<anonymous> (/Users/yasarozen/Desktop/MarshallsProjectFramework 2/MarshallsProject /Tests/StoreFinder1.spec.js:22:39)\n    at /usr/local/lib/node_modules/protractor/node_modules/jasminewd2/index.js:112:25\n    at new ManagedPromise (/usr/local/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1077:7)\n    at ControlFlow.promise (/usr/local/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2505:12)\n    at schedulerExecute (/usr/local/lib/node_modules/protractor/node_modules/jasminewd2/index.js:95:18)\n    at TaskQueue.execute_ (/usr/local/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/local/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\n    at asyncRun (/usr/local/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2974:25)\n    at /usr/local/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:668:7\n    at process._tickCallback (internal/process/next_tick.js:68:7)\nFrom: Task: Run beforeAll in control flow\n    at UserContext.<anonymous> (/usr/local/lib/node_modules/protractor/node_modules/jasminewd2/index.js:94:19)\n    at attempt (/usr/local/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4297:26)\n    at QueueRunner.run (/usr/local/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4217:20)\n    at QueueRunner.execute (/usr/local/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4199:10)\n    at queueRunnerFactory (/usr/local/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:909:35)\n    at UserContext.fn (/usr/local/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:5325:13)\n    at attempt (/usr/local/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4297:26)\n    at QueueRunner.run (/usr/local/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4217:20)\n    at QueueRunner.execute (/usr/local/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4199:10)\n    at queueRunnerFactory (/usr/local/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:909:35)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (/Users/yasarozen/Desktop/MarshallsProjectFramework 2/MarshallsProject /Tests/StoreFinder1.spec.js:14:9)\n    at addSpecsToSuite (/usr/local/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1107:25)\n    at Env.describe (/usr/local/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1074:7)\n    at describe (/usr/local/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4399:18)\n    at Object.<anonymous> (/Users/yasarozen/Desktop/MarshallsProjectFramework 2/MarshallsProject /Tests/StoreFinder1.spec.js:12:1)\n    at Module._compile (internal/modules/cjs/loader.js:689:30)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:700:10)\n    at Module.load (internal/modules/cjs/loader.js:599:32)\n    at tryModuleLoad (internal/modules/cjs/loader.js:538:12)",
            "TypeError: Cannot read property 'click' of undefined\n    at UserContext.<anonymous> (/Users/yasarozen/Desktop/MarshallsProjectFramework 2/MarshallsProject /Tests/StoreFinder1.spec.js:33:39)\n    at /usr/local/lib/node_modules/protractor/node_modules/jasminewd2/index.js:112:25\n    at new ManagedPromise (/usr/local/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1077:7)\n    at ControlFlow.promise (/usr/local/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2505:12)\n    at schedulerExecute (/usr/local/lib/node_modules/protractor/node_modules/jasminewd2/index.js:95:18)\n    at TaskQueue.execute_ (/usr/local/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/local/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\n    at asyncRun (/usr/local/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2974:25)\n    at /usr/local/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:668:7\n    at process._tickCallback (internal/process/next_tick.js:68:7)\nFrom: Task: Run it(\"Test Case ID. SF002 - Store Finder link should be clickable\") in control flow\n    at UserContext.<anonymous> (/usr/local/lib/node_modules/protractor/node_modules/jasminewd2/index.js:94:19)\n    at attempt (/usr/local/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4297:26)\n    at QueueRunner.run (/usr/local/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4217:20)\n    at runNext (/usr/local/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4257:20)\n    at /usr/local/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4264:13\n    at /usr/local/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4172:9\n    at /usr/local/lib/node_modules/protractor/node_modules/jasminewd2/index.js:64:48\n    at ControlFlow.emit (/usr/local/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/events.js:62:21)\n    at ControlFlow.shutdown_ (/usr/local/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2674:10)\n    at shutdownTask_.MicroTask (/usr/local/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (/Users/yasarozen/Desktop/MarshallsProjectFramework 2/MarshallsProject /Tests/StoreFinder1.spec.js:31:9)\n    at addSpecsToSuite (/usr/local/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1107:25)\n    at Env.describe (/usr/local/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1074:7)\n    at describe (/usr/local/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4399:18)\n    at Object.<anonymous> (/Users/yasarozen/Desktop/MarshallsProjectFramework 2/MarshallsProject /Tests/StoreFinder1.spec.js:12:1)\n    at Module._compile (internal/modules/cjs/loader.js:689:30)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:700:10)\n    at Module.load (internal/modules/cjs/loader.js:599:32)\n    at tryModuleLoad (internal/modules/cjs/loader.js:538:12)"
        ],
        "browserLogs": [],
        "screenShotFile": "images/00a00041-008c-001c-0066-00630086005d.png",
        "timestamp": 1540569489541,
        "duration": 2
    },
    {
        "description": "Test Case ID. SF003 - Make sure the texts, input boxes, sign up button, and privacy policy link are displayed|Marshalls Webpage - Store Finder Link - Testing Suite",
        "passed": false,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 9047,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": [
            "Failed: Cannot read property 'click' of undefined",
            "Failed: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\""
        ],
        "trace": [
            "TypeError: Cannot read property 'click' of undefined\n    at UserContext.<anonymous> (/Users/yasarozen/Desktop/MarshallsProjectFramework 2/MarshallsProject /Tests/StoreFinder1.spec.js:22:39)\n    at /usr/local/lib/node_modules/protractor/node_modules/jasminewd2/index.js:112:25\n    at new ManagedPromise (/usr/local/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1077:7)\n    at ControlFlow.promise (/usr/local/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2505:12)\n    at schedulerExecute (/usr/local/lib/node_modules/protractor/node_modules/jasminewd2/index.js:95:18)\n    at TaskQueue.execute_ (/usr/local/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/local/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\n    at asyncRun (/usr/local/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2974:25)\n    at /usr/local/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:668:7\n    at process._tickCallback (internal/process/next_tick.js:68:7)\nFrom: Task: Run beforeAll in control flow\n    at UserContext.<anonymous> (/usr/local/lib/node_modules/protractor/node_modules/jasminewd2/index.js:94:19)\n    at attempt (/usr/local/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4297:26)\n    at QueueRunner.run (/usr/local/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4217:20)\n    at QueueRunner.execute (/usr/local/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4199:10)\n    at queueRunnerFactory (/usr/local/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:909:35)\n    at UserContext.fn (/usr/local/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:5325:13)\n    at attempt (/usr/local/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4297:26)\n    at QueueRunner.run (/usr/local/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4217:20)\n    at QueueRunner.execute (/usr/local/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4199:10)\n    at queueRunnerFactory (/usr/local/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:909:35)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (/Users/yasarozen/Desktop/MarshallsProjectFramework 2/MarshallsProject /Tests/StoreFinder1.spec.js:14:9)\n    at addSpecsToSuite (/usr/local/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1107:25)\n    at Env.describe (/usr/local/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1074:7)\n    at describe (/usr/local/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4399:18)\n    at Object.<anonymous> (/Users/yasarozen/Desktop/MarshallsProjectFramework 2/MarshallsProject /Tests/StoreFinder1.spec.js:12:1)\n    at Module._compile (internal/modules/cjs/loader.js:689:30)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:700:10)\n    at Module.load (internal/modules/cjs/loader.js:599:32)\n    at tryModuleLoad (internal/modules/cjs/loader.js:538:12)",
            "Error: Error while waiting for Protractor to sync with the page: \"both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.  See http://git.io/v4gXM for details\"\n    at runWaitForAngularScript.then (/usr/local/lib/node_modules/protractor/built/browser.js:463:23)\n    at ManagedPromise.invokeCallback_ (/usr/local/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1376:14)\n    at TaskQueue.execute_ (/usr/local/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/local/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\n    at asyncRun (/usr/local/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2927:27)\n    at /usr/local/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:668:7\n    at process._tickCallback (internal/process/next_tick.js:68:7)Error\n    at ElementArrayFinder.applyAction_ (/usr/local/lib/node_modules/protractor/built/element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as getText] (/usr/local/lib/node_modules/protractor/built/element.js:91:29)\n    at ElementFinder.(anonymous function).args [as getText] (/usr/local/lib/node_modules/protractor/built/element.js:831:22)\n    at UserContext.<anonymous> (/Users/yasarozen/Desktop/MarshallsProjectFramework 2/MarshallsProject /Tests/StoreFinder1.spec.js:40:48)\n    at /usr/local/lib/node_modules/protractor/node_modules/jasminewd2/index.js:112:25\n    at new ManagedPromise (/usr/local/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1077:7)\n    at ControlFlow.promise (/usr/local/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2505:12)\n    at schedulerExecute (/usr/local/lib/node_modules/protractor/node_modules/jasminewd2/index.js:95:18)\n    at TaskQueue.execute_ (/usr/local/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3084:14)\n    at TaskQueue.executeNext_ (/usr/local/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:3067:27)\nFrom: Task: Run it(\"Test Case ID. SF003 - Make sure the texts, input boxes, sign up button, and privacy policy link are displayed\") in control flow\n    at UserContext.<anonymous> (/usr/local/lib/node_modules/protractor/node_modules/jasminewd2/index.js:94:19)\n    at attempt (/usr/local/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4297:26)\n    at QueueRunner.run (/usr/local/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4217:20)\n    at runNext (/usr/local/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4257:20)\n    at /usr/local/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4264:13\n    at /usr/local/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4172:9\n    at /usr/local/lib/node_modules/protractor/node_modules/jasminewd2/index.js:64:48\n    at ControlFlow.emit (/usr/local/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/events.js:62:21)\n    at ControlFlow.shutdown_ (/usr/local/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2674:10)\n    at shutdownTask_.MicroTask (/usr/local/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (/Users/yasarozen/Desktop/MarshallsProjectFramework 2/MarshallsProject /Tests/StoreFinder1.spec.js:38:9)\n    at addSpecsToSuite (/usr/local/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1107:25)\n    at Env.describe (/usr/local/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1074:7)\n    at describe (/usr/local/lib/node_modules/protractor/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:4399:18)\n    at Object.<anonymous> (/Users/yasarozen/Desktop/MarshallsProjectFramework 2/MarshallsProject /Tests/StoreFinder1.spec.js:12:1)\n    at Module._compile (internal/modules/cjs/loader.js:689:30)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:700:10)\n    at Module.load (internal/modules/cjs/loader.js:599:32)\n    at tryModuleLoad (internal/modules/cjs/loader.js:538:12)"
        ],
        "browserLogs": [],
        "screenShotFile": "images/00b200ac-0099-002a-00b0-009b00da0082.png",
        "timestamp": 1540569490013,
        "duration": 16
    }
];

    this.sortSpecs = function () {
        this.results = results.sort(function sortFunction(a, b) {
    if (a.sessionId < b.sessionId) return -1;else if (a.sessionId > b.sessionId) return 1;

    if (a.timestamp < b.timestamp) return -1;else if (a.timestamp > b.timestamp) return 1;

    return 0;
});
    };

    this.sortSpecs();
});

app.filter('bySearchSettings', function () {
    return function (items, searchSettings) {
        var filtered = [];
        var prevItem = null;

        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            item.displaySpecName = false;

            countLogMessages(item);

            var hasLog = searchSettings.withLog && item.browserLogs && item.browserLogs.length > 0;
            if (searchSettings.description === '' ||
                (item.description && item.description.toLowerCase().indexOf(searchSettings.description.toLowerCase()) > -1)) {

                if (searchSettings.passed && item.passed || hasLog) {
                    checkIfShouldDisplaySpecName(prevItem, item);
                    filtered.push(item);
                    prevItem = item;
                } else if (searchSettings.failed && !item.passed && !item.pending || hasLog) {
                    checkIfShouldDisplaySpecName(prevItem, item);
                    filtered.push(item);
                    prevItem = item;
                } else if (searchSettings.pending && item.pending || hasLog) {
                    checkIfShouldDisplaySpecName(prevItem, item);
                    filtered.push(item);
                    prevItem = item;
                }

            }
        }

        return filtered;
    };
});

var isValueAnArray = function (val) {
    return Array.isArray(val);
};

var checkIfShouldDisplaySpecName = function (prevItem, item) {
    if (!prevItem) {
        item.displaySpecName = true;
        return;
    }

    if (getSpec(item.description) != getSpec(prevItem.description)) {
        item.displaySpecName = true;
        return;
    }
};

var getSpec = function (str) {
    var describes = str.split('|');
    return describes[describes.length - 1];
};

var countLogMessages = function (item) {
    if ((!item.logWarnings || !item.logErrors) && item.browserLogs && item.browserLogs.length > 0) {
        item.logWarnings = 0;
        item.logErrors = 0;
        for (var logNumber = 0; logNumber < item.browserLogs.length; logNumber++) {
            var logEntry = item.browserLogs[logNumber];
            if (logEntry.level === 'SEVERE') {
                item.logErrors++;
            }
            if (logEntry.level === 'WARNING') {
                item.logWarnings++;
            }
        }
    }
};

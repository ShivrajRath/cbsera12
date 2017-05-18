define("enum", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Result;
    (function (Result) {
        Result[Result["PASS"] = 0] = "PASS";
        Result[Result["COMP"] = 1] = "COMP";
        Result[Result["FAIL"] = 2] = "FAIL";
        Result[Result["ABST"] = 3] = "ABST";
    })(Result = exports.Result || (exports.Result = {}));
});
define("utility", ["require", "exports", "enum"], function (require, exports, enum_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function remWhiteSpace(str) {
        return str.replace(/\W/g, '');
    }
    exports.remWhiteSpace = remWhiteSpace;
    function remNewLine(str) {
        return str.replace(/\n/g, '');
    }
    exports.remNewLine = remNewLine;
    function resultStringSplit(str) {
        return str.match(/\d{6,9}.*?(PASS|COMP|FAIL|ABST)/gi);
    }
    exports.resultStringSplit = resultStringSplit;
    function getRoll(str) {
        return parseInt((str.match(/(\d{6,9})/)[1]).trim(), 10);
    }
    exports.getRoll = getRoll;
    function getName(str) {
        return str.match(/\d{6,9}(.*?)\d/)[1].trim();
    }
    exports.getName = getName;
    function getResult(str) {
        var result = enum_1.Result[str.match(/.*\s(.*?)$/)[1].toUpperCase()];
        return result;
    }
    exports.getResult = getResult;
});
define("Student", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Student = (function () {
        function Student(obj) {
            this.name = obj.name;
            this.roll = obj.roll;
            this.result = obj.result;
        }
        return Student;
    }());
    exports.Student = Student;
});
define("app", ["require", "exports", "utility", "Student"], function (require, exports, utility, Student_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var $elAnalyze = document.getElementById('btn-analyze');
    var $textInput = document.getElementById('text-input');
    var studentArr = [];
    $elAnalyze.addEventListener('click', function () {
        try {
            var textAreaContent = utility.remNewLine($textInput.value);
            var resultStrArr = utility.resultStringSplit(textAreaContent);
            extractDataModels(resultStrArr);
        }
        catch (ex) {
            alert('Something went wrong. Please retry');
            console.log(ex.message);
        }
    });
    function extractDataModels(resultStrArr) {
        resultStrArr.forEach(function (resStr) {
            studentArr.push(new Student_1.Student({
                name: utility.getName(resStr),
                roll: utility.getRoll(resStr),
                result: utility.getResult(resStr)
            }));
        });
    }
});
//# sourceMappingURL=tsc.js.map
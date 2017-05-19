define("Constant", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Constant = {
        PASS: 'PASS',
        COMP: 'COMP',
        FAIL: 'FAIL',
        ABST: 'ABST',
        NA: 'NA',
        PASS_MARK: 32
    };
});
define("Student", ["require", "exports", "Constant"], function (require, exports, Constant_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Student = (function () {
        function Student(roll) {
            this.gradeArr = [];
            this.roll = roll;
        }
        Student.prototype.setName = function (name) {
            this.name = name;
        };
        Student.prototype.getName = function () {
            return this.name;
        };
        Student.prototype.setResult = function (result) {
            this.result = result;
        };
        Student.prototype.getResult = function () {
            return this.result;
        };
        Student.prototype.setGradeArr = function (gradeArr) {
            this.gradeArr = gradeArr;
        };
        Student.prototype.getGradeArr = function () {
            return this.gradeArr;
        };
        Student.prototype.getRoll = function () {
            return this.roll;
        };
        Student.prototype.isAbst = function () {
            return this.result === Constant_1.Constant.ABST;
        };
        return Student;
    }());
    exports.Student = Student;
});
define("utility", ["require", "exports", "Constant"], function (require, exports, Constant_2) {
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
    function remExtraSpaces(str) {
        return str.replace(/\s+/g, ' ').trim();
    }
    exports.remExtraSpaces = remExtraSpaces;
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
        return (str.match(/.*\s(.*?)$/)[1]).toUpperCase();
    }
    exports.getResult = getResult;
    function getGradeArr(str, student) {
        var marksStr = remExtraSpaces(str.match(new RegExp(student.getName() + '(.*)' + student.getResult()))[1]);
        var marksArr = marksStr.split(' ');
        var gradeArr = [];
        function addAbstSubject(code) {
            if (!!parseInt(code)) {
                gradeArr.push({
                    code: parseInt(code, 10),
                    marks: 0,
                    grade: Constant_2.Constant.NA,
                    isAbst: true
                });
            }
        }
        if (student.isAbst()) {
            marksArr.forEach(function (el) {
                addAbstSubject(el);
            });
        }
        else {
            var abaStr = str.match(/\d+\sABA/gi);
            if (abaStr) {
                var abaArr = abaStr.join(' ').split(' ');
                abaArr.forEach(function (el) {
                    addAbstSubject(el);
                    marksArr.splice(marksArr.indexOf(el), 1);
                });
            }
            for (var i = 0; i < marksArr.length; i = i + 3) {
                if (parseInt(marksArr[i]) && parseInt(marksArr[i + 1])) {
                    gradeArr.push({
                        code: parseInt(marksArr[i], 10),
                        marks: parseInt(marksArr[i + 1], 10),
                        grade: marksArr[i + 2],
                        isAbst: false
                    });
                }
            }
        }
        return gradeArr;
    }
    exports.getGradeArr = getGradeArr;
});
define("Subject", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Subject = (function () {
        function Subject(code) {
            this.totalAppeared = 0;
            this.totalPassed = 0;
            this.r0to32 = 0;
            this.r33to44 = 0;
            this.r45to59 = 0;
            this.r60to74 = 0;
            this.r75to89 = 0;
            this.r90to100 = 0;
            this.code = code;
        }
        Subject.prototype.getCode = function () {
            return this.code;
        };
        Subject.prototype.incrementTotalAppeared = function () {
            ++this.totalAppeared;
        };
        Subject.prototype.incrementTotalPassed = function (grade) {
            if (!grade.match(/E|F/)) {
                ++this.totalPassed;
            }
        };
        Subject.prototype.incrementMarkRange = function (marks) {
            if (marks > 89) {
                ++this.r90to100;
            }
            else if (marks > 74) {
                ++this.r75to89;
            }
            else if (marks > 59) {
                ++this.r60to74;
            }
            else if (marks > 44) {
                ++this.r45to59;
            }
            else if (marks > 32) {
                ++this.r33to44;
            }
            else {
                ++this.r0to32;
            }
        };
        return Subject;
    }());
    exports.Subject = Subject;
});
define("Collection", ["require", "exports", "Student", "Subject"], function (require, exports, Student_1, Subject_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Collection = (function () {
        function Collection() {
            this.studentCollection = [];
            this.subjectCollection = [];
        }
        Collection.getInstance = function () {
            return this._instance || (this._instance = new this());
        };
        Collection.prototype.getSubject = function (code) {
            var subject = this.subjectCollection.filter(function (subject) {
                return subject.getCode() === code;
            })[0];
            if (!(subject instanceof Subject_1.Subject)) {
                subject = new Subject_1.Subject(code);
                this.subjectCollection.push(subject);
            }
            return subject;
        };
        Collection.prototype.getStudent = function (roll) {
            var student = this.studentCollection.filter(function (student) {
                return student.getRoll() === roll;
            })[0];
            if (!(student instanceof Student_1.Student)) {
                student = new Student_1.Student(roll);
                this.studentCollection.push(student);
            }
            return student;
        };
        Collection.prototype.clear = function () {
            this.subjectCollection = [];
            this.studentCollection = [];
        };
        return Collection;
    }());
    exports.Collection = Collection;
});
define("app", ["require", "exports", "utility", "Collection"], function (require, exports, utility, Collection_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var collection = Collection_1.Collection.getInstance();
    var $elAnalyze = document.getElementById('btn-analyze');
    var $textInput = document.getElementById('text-input');
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
        resultStrArr.forEach(function (resultStr) {
            var student = collection.getStudent(utility.getRoll(resultStr));
            student.setName(utility.getName(resultStr));
            student.setResult(utility.getResult(resultStr));
            student.setGradeArr(utility.getGradeArr(resultStr, student));
            extractSubjectModel(student.getGradeArr());
        });
    }
    function extractSubjectModel(gradeArr) {
        var subject;
        gradeArr.forEach(function (gradeObj) {
            subject = collection.getSubject(gradeObj.code);
            if (!gradeObj.isAbst) {
                subject.incrementTotalAppeared();
                subject.incrementTotalPassed(gradeObj.grade);
                subject.incrementMarkRange(gradeObj.marks);
            }
        });
    }
});
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
    var Grades;
    (function (Grades) {
        Grades[Grades["A"] = 0] = "A";
        Grades[Grades["A1"] = 1] = "A1";
        Grades[Grades["A2"] = 2] = "A2";
        Grades[Grades["B"] = 3] = "B";
        Grades[Grades["B1"] = 4] = "B1";
        Grades[Grades["B2"] = 5] = "B2";
        Grades[Grades["C"] = 6] = "C";
        Grades[Grades["C1"] = 7] = "C1";
        Grades[Grades["C2"] = 8] = "C2";
        Grades[Grades["D"] = 9] = "D";
        Grades[Grades["D1"] = 10] = "D1";
        Grades[Grades["D2"] = 11] = "D2";
        Grades[Grades["E"] = 12] = "E";
        Grades[Grades["E1"] = 13] = "E1";
        Grades[Grades["E2"] = 14] = "E2";
        Grades[Grades["F"] = 15] = "F";
        Grades[Grades["NA"] = 16] = "NA";
    })(Grades = exports.Grades || (exports.Grades = {}));
});
//# sourceMappingURL=tsc.js.map
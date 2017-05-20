define("Constant", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Constant = {
        PASS: 'PASS',
        COMP: 'COMP',
        FAIL: 'FAIL',
        ABST: 'ABST',
        NA: 'NA',
        PASS_MARK: 32,
        GRADES: ['A', 'A1', 'A2', 'B', 'B1', 'B2', 'C', 'C1', 'C2', 'D', 'D1', 'D2', 'E']
    };
    exports.SubjectNameConstant = {
        101: 'FUNCTIONAL ENGLISH',
        1: 'ENGLISH ELECTIVE',
        2: 'HINDI ELECTIVE',
        3: 'URDU ELECTIVE',
        104: 'PUNJABI',
        105: 'BENGALI',
        106: 'TAMIL',
        107: 'TELUGU',
        108: 'SINDHI',
        109: 'MARATHI',
        110: 'GUJARATI',
        111: 'MANIPURI',
        112: 'MALAYALAM',
        113: 'ODIA',
        114: 'ASSAMESE',
        115: 'KANNADA',
        116: 'ARABIC',
        117: 'TIBETAN',
        118: 'FRENCH',
        119: 'PORTUGUESE',
        120: 'GERMAN',
        121: 'RUSSIAN',
        22: 'SANSKRIT ELECTIVE',
        123: 'PERSIAN',
        124: 'NEPALI',
        125: 'LIMBOO',
        126: 'LEPCHA',
        27: 'HISTORY',
        28: 'POLITICAL SCIENCE',
        29: 'GEOGRAPHY',
        30: 'ECONOMICS',
        31: 'MUSIC CARNATIC (VOCAL)',
        32: 'MUSIC CARNATIC (INSTRUMENT MELODIC)',
        33: 'MUSIC CARNATIC (INSTRUMENT PERCUSSION)',
        34: 'MUSIC HINDUSTANI (VOCAL)',
        35: 'MUSIC HINDUSTANI (INSTRUMENT MELODIC)',
        36: 'MUSIC HINDUSTANI (INSTRUMENT PERCUSSION)',
        37: 'PSYCHOLOGY',
        39: 'SOCIOLOGY',
        40: 'PHILOSOPHY',
        41: 'MATHEMATICS',
        42: 'PHYSICS',
        43: 'CHEMISTRY',
        44: 'BIOLOGY',
        45: 'BIOTECHNOLOGY',
        46: 'ENGINEERING GRPHICS',
        48: 'PHYSICAL EDUCATION',
        49: 'PAINTING',
        50: 'GRAPHICS',
        51: 'SCULPTURE',
        52: 'APPLIED ART/COMMERCIAL ART',
        53: 'FASHION STUDIES',
        54: 'BUSINESS STUDIES',
        55: 'ACCOUNTANCY',
        56: 'DANCE-KATHAK',
        57: 'DANCE-BHARATNATYAM',
        58: 'DANCE-KUCHIPUDI',
        59: 'DANCE-ODISSI',
        60: 'DANCE-MANIPURI',
        61: 'DANCE-KATHAKALI',
        62: 'DANCE-MOHINIYATTAM',
        64: 'HOME SCIENCE',
        65: 'INFORMATICS PRACTICE',
        66: 'ENTREPRENEURSHIP',
        67: 'MULTIMEDIA & WEB TECHNOLOGY',
        68: 'AGRICULTURE',
        69: 'CREATIVE WRITING & TRANSLATION STUDIES',
        70: 'HERITAGE CRAFTS',
        71: 'GRAPHIC DESIGN',
        72: 'MASS MEDIA STUDIES',
        73: 'KNOWLEDGE TRADITIONS AND PRACTICES OF INDIA',
        74: 'LEGAL STUDIES',
        75: 'HUMAN RIGHTS AND GENDER STUDIES',
        76: 'N.C.C. (NATIONAL CADET CORPS)',
        78: 'THEATRE STUDIES',
        83: 'COMPUTER SCIENCE',
        192: 'BODO',
        193: 'TANGKHUL',
        194: 'JAPANESE',
        195: 'BHUTIA',
        196: 'SPANISH',
        197: 'KASHMIRI',
        198: 'MIZO',
        199: 'BHASA MELAYU',
        301: 'ENGLISH CORE',
        302: 'HINDI CORE',
        303: 'URDU CORE',
        322: 'SANSKRIT CORE',
        604: 'OFFICE PROCEDURE & PRACTICE',
        605: 'SECRETARIAL PRACTICE & ACCOUNTING',
        606: 'OFFICE COMMUNICATION',
        607: 'TYPOGRAPHY & COMPUTER APPLICATION (ENGLISH)',
        608: 'SHORTHAND ENGLISH',
        609: 'TYPOGRAPHY & COMPUTER APPLICATION (HINDI)',
        610: 'SHORTHAND HINDI',
        611: 'FINANCIAL ACCOUNTING',
        612: 'ELEMENT COST ACCOUNTANCY &AUDITING',
        613: 'MARKETING',
        614: 'SALESMANSHIP',
        615: 'CONSUMER BEHAVIOUR & PROTECTION',
        617: 'STOREKEEPING',
        618: 'STORE ACCOUNTING',
        619: 'CASH MANAGEMENT & HOUSE KEEPING',
        620: 'LENDING OPERATIONS',
        621: 'MANAGEMENT OF BANK OFFICE',
        622: 'ENGINEERING SCIENCE',
        623: 'ELECTRIC MACHINES',
        624: 'ELECTRICAL APPLICANCES',
        625: 'APPLIED PHYSICS',
        626: 'MECHANICAL ENGINEERING',
        627: 'AUTO ENGINEERING',
        628: 'AUTOSHOP REPAIRING & PRACTICE',
        629: 'CIVIL ENGINEERING',
        630: 'FABRICATION TECHNOLOGY-II',
        631: 'FABRICATION TECHNOLOGY-III',
        632: 'AIR CONDITIONING & REFRIGERATION – III',
        633: 'AIR CONDITIONING & REFRIGERATION – IV',
        634: 'ELECTRONIC DEVICES & CIRCUITS',
        635: 'RADIO ENGINEERING & AUDIO SYSTEM',
        636: 'TV & VIDEO SYSTEMS',
        637: 'ELECTRICAL ENGINEERING',
        639: 'MILK & MILK PRODUCTS',
        640: 'MILK PRODUCT TRANSPORT & MILK CO-OPERATIVES',
        641: 'DAIRY PLANT INSTRUMENTATION',
        642: 'VEGETABLE CULTURE',
        643: 'FLORICULTURE',
        644: 'POST HARVESTING TECHNOLOGY & PRESERVATION',
        654: 'BEAUTY THERAPY & HAIR DESIGNING –II',
        655: 'COSMETIC CHEMISTRY',
        656: 'YOGA ANATOMY & PHYSIOLOGY',
        657: 'BIOLOGY-OPTHALMIC',
        658: 'OPTICS',
        659: 'OPHTHALMIC TECHNOLOGY',
        660: 'LABORATORY MEDICINE (CLINICAL PATH., HEOM. & HISTO)',
        661: 'CLINICAL BIO-CHEMISTRY',
        662: 'MICROBIOLOGY',
        663: 'FUNDAMENTAL OF NURSING II',
        664: 'COMMUNITY HEALTH NURSING – II',
        665: 'MATERNITY & CHILD HEALTH NURSING - II',
        666: 'RADIATION PHYSICS',
        667: 'RADIOGRAPHY-I (GENERAL)',
        668: 'RADIOGRAPHY-II (SPECIAL)',
        675: 'ADVANCE FOOD PREPARATION',
        676: 'MEAL PLANNING & SERVICE',
        677: 'ESTABLISHMENT & MANAGEMENT OF FOOD SERVICE UNIT',
        684: 'TEXTILE SCIENCE',
        685: 'DESIGNING & PATTERN MAKING',
        686: 'CLOTHING CONSTRUCTION',
        687: 'BASIC DESIGN',
        688: 'DYEING & PRINTING',
        690: 'FOOD PREPARATION – II',
        691: 'ACCOMMODATION SERVICE',
        692: 'FOOD & BEVERAGES SERVICES – II',
        693: 'INDIA-TOURIST DESTINATION',
        694: 'TRAVEL TRADE MANAGEMENT',
        695: 'TOUR MANAGEMENT & MANPOWER PLANNING',
        696: 'FOOD SCIENCE & HYGIENE',
        697: 'BAKERY SCIENCE',
        698: 'CONFECTIONERY',
        699: 'I T SYSTEMS',
        700: 'BUSINESS DATA PROCESSING',
        701: 'DTP CAD & MULTIMEDIA',
        702: 'LIBRARY ADMINISTRATION & MANAGEMENT',
        703: 'CLASSIFICATION & CATALOGUING',
        704: 'REFERENCE SERVICES',
        705: 'PRINCIPLE & PRACTICE OF LIFE INSURANCE',
        706: 'COMPUTER & LIFE INSURANCE ADMINISTRATION',
        712: 'TRANSPORTATION SYSTEM & MANAGEMENT',
        716: 'POULTRY NUTRITION & PHYSIOLOGY',
        717: 'POULTRY PRODUCTS TECHNOLOGY',
        718: 'POULTRY DISEASES & THEIR CONTROL',
        723: 'INTRODUCTION TO FINANCIAL MARKETS-2-XII',
        724: 'BUSINESS PROCESS OUTSOURCING SKILLS-XII',
        728: 'HEALTH EDUCATION & PUBLIC RELATIONS – XII',
        729: 'BASIC CONCEPTS OF HEALTH DISEASE & MEDICAL',
        730: 'FIRST AID & EMERGENCY MEDICAL CARE-XII',
        731: 'CHILD HEALTH NURSING',
        732: 'MIDWIFERY',
        733: 'HEALTH CENTRE MANAGEMENT',
        734: 'FOOD PRODUCTION – III',
        735: 'FOOD PRODUCTIO -IV',
        736: 'FOOD SERVICE – II',
        737: 'FOOD & BEVERAGE:COST AND CONTROL',
        738: 'UNDERSTANDING THE EVOLUTION AND FORMS OF MASS',
        739: 'THE CREATIVE & COMMERCIAL PROCESS IN MASS MEDIA – II',
        740: 'GEOSPATIAL TECHNOLOGY - II'
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
        Student.prototype.getGradeObj = function (code) {
            return this.gradeArr.filter(function (gradeObj) { return gradeObj.code === code; })[0] || {
                marks: '-',
                grade: '-'
            };
        };
        Student.prototype.getMarks = function (code) {
            return this.getGradeObj(code).marks;
        };
        Student.prototype.getGrade = function (code) {
            return this.getGradeObj(code).grade;
        };
        Student.prototype.getPercentage = function () {
            return parseFloat(((this.getTotalMarks() / (this.gradeArr.filter(function (gradeObj) { return !gradeObj.isAbst; }).length * 100)) * 100).toFixed(2)) || 0;
        };
        Student.prototype.getTotalMarks = function () {
            var totalMarks = 0;
            this.gradeArr.forEach(function (gradeObj) {
                totalMarks += gradeObj.marks;
            });
            return totalMarks;
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
    function setTable(id, html) {
        document.getElementById(id).getElementsByTagName('table')[0].innerHTML = html;
    }
    exports.setTable = setTable;
    function sortStudentByPercentage(studentArr) {
        return studentArr.sort(function (studentA, studentB) {
            return studentB.getPercentage() - studentA.getPercentage();
        });
    }
    exports.sortStudentByPercentage = sortStudentByPercentage;
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
                    grade: Constant_2.Constant.ABST,
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
            var abaArr = marksStr.match(/\d+\sABA/gi);
            if (abaArr) {
                abaArr = abaArr.join(' ').split(' ');
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
define("Subject", ["require", "exports", "Constant"], function (require, exports, Constant_3) {
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
            this.gradeObj = {};
            this.code = code;
            this.name = Constant_3.SubjectNameConstant[code];
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
        Subject.prototype.incrementGradeCount = function (grade) {
            if (this.gradeObj[grade]) {
                ++this.gradeObj[grade];
            }
            else {
                this.gradeObj[grade] = 1;
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
        Collection.prototype.getAllSubjectCodes = function () {
            return this.subjectCollection.map(function (subject) { return subject.getCode(); });
        };
        Collection.prototype.clear = function () {
            this.subjectCollection = [];
            this.studentCollection = [];
        };
        return Collection;
    }());
    exports.Collection = Collection;
});
define("app", ["require", "exports", "utility", "Collection", "Constant"], function (require, exports, utility, Collection_1, Constant_4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var collection = Collection_1.Collection.getInstance();
    var $elAnalyze = document.getElementById('btn-analyze');
    var $textInput = document.getElementById('text-input');
    $elAnalyze.addEventListener('click', function () {
        try {
            collection.clear();
            var textAreaContent = utility.remNewLine($textInput.value);
            var resultStrArr = utility.resultStringSplit(textAreaContent);
            extractDataModels(resultStrArr);
            displayTables();
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
                subject.incrementGradeCount(gradeObj.grade);
            }
        });
    }
    function displayTables() {
        document.getElementById('resultTables').classList.remove('hide');
        displaySubjectTable();
        displayStudentTable();
    }
    function displaySubjectTable() {
        var table = '<tbody><tr>';
        ['Code', 'Subject', 'Appeared', 'Passed']
            .concat(Constant_4.Constant.GRADES)
            .concat(['0-33', '33-44', '45-59', '60-74', '75-89', '90-100'])
            .forEach(function (el) {
            table += "<th> " + el + " </th>";
        });
        table += '</tr>';
        collection.subjectCollection.forEach(function (subject) {
            table += '<tr>' +
                ("<td> " + subject.code + " </td>") +
                ("<td> " + subject.name + " </td>") +
                ("<td> " + subject.totalAppeared + " </td>") +
                ("<td> " + subject.totalPassed + " </td>");
            Constant_4.Constant.GRADES.forEach(function (grade) {
                table += "<td> " + (subject.gradeObj[grade] || '0') + " </td>";
            });
            table += "<td> " + subject.r0to32 + " </td>" +
                ("<td> " + subject.r33to44 + " </td>") +
                ("<td> " + subject.r45to59 + " </td>") +
                ("<td> " + subject.r60to74 + " </td>") +
                ("<td> " + subject.r75to89 + " </td>") +
                ("<td> " + subject.r90to100 + " </td>") +
                '</tr>';
        });
        table += '</tbody>';
        utility.setTable('subjectTable', table);
    }
    function displayStudentTable() {
        var table = '<tbody><tr>';
        ['Roll', 'Name']
            .concat(collection.getAllSubjectCodes().join(' Grade ').split(' '))
            .concat(['Grade', 'Total', '%', 'Result'])
            .forEach(function (el) {
            table += "<th> " + el + " </th>";
        });
        utility.sortStudentByPercentage(collection.studentCollection).forEach(function (student) {
            table += '<tr>' +
                ("<td> " + student.getRoll() + " </td>") +
                ("<td> " + student.getName() + " </td>");
            collection.getAllSubjectCodes().forEach(function (code) {
                table += "<td> " + student.getMarks(code) + " </td>" +
                    ("<td> " + student.getGrade(code) + " </td>");
            });
            table += "<td> " + student.getTotalMarks() + " </td>" +
                ("<td> " + (student.getPercentage() || ' - ') + " </td>") +
                ("<td> " + student.getResult() + " </td>") +
                '</tr>';
        });
        table += '</tbody>';
        utility.setTable('studentTable', table);
    }
});
//# sourceMappingURL=tsc.js.map
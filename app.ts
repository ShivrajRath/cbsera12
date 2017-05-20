import utility = require('./utility');

import {
    Collection
} from 'Collection';

import {
    Subject
} from 'Subject';

import {
    Grade,
    Student
} from 'Student';

import {
    Constant
} from 'Constant';

let collection = Collection.getInstance();

/****** Variables ******/

let $elAnalyze = document.getElementById('btn-analyze');
let $textInput = ( < HTMLInputElement > document.getElementById('text-input'));

/**
 * On click of start analysis
 */
$elAnalyze.addEventListener('click', function () {
    try {
        collection.clear();
        let textAreaContent = utility.remNewLine($textInput.value);
        let resultStrArr = utility.resultStringSplit(textAreaContent);
        extractDataModels(resultStrArr);
        displayTables();
    } catch (ex) {
        alert('Something went wrong. Please retry');
        console.log(ex.message);
    }
});

/**
 * Extracts Student and Subject Data Model
 * @param resultStrArr Result str arr
 */
function extractDataModels(resultStrArr: any) {

    resultStrArr.forEach((resultStr: string) => {
        /**
         * Creates a student object
         */
        let student = collection.getStudent(utility.getRoll(resultStr));

        student.setName(utility.getName(resultStr));
        student.setResult(utility.getResult(resultStr));
        student.setGradeArr(utility.getGradeArr(resultStr, student));

        extractSubjectModel(student.getGradeArr());
    });
}

/**
 * Extracts the subject model from a student's grade array
 */
function extractSubjectModel(gradeArr: Array < Grade > ) {
    let subject: Subject;
    gradeArr.forEach(gradeObj => {
        subject = collection.getSubject(gradeObj.code);
        if (!gradeObj.isAbst) {
            subject.incrementTotalAppeared();
            subject.incrementTotalPassed(gradeObj.grade);
            subject.incrementMarkRange(gradeObj.marks);
            subject.incrementGradeCount(gradeObj.grade);
        }
    });
}

/**
 * Displays tables
 */
function displayTables() {
    document.getElementById('resultTables').classList.remove('hide');
    displaySchoolTable();
    displaySubjectTable();
    displayStudentTable();

    // Scroll to the result location
    location.href = '#';
    location.href = '#resultTables';
}

/**
 * Displays school's result
 */
function displaySchoolTable() {
    let table = '<tbody><tr>';
    ['Appeared', 'Passed', 'Fail and Comp', 'Abst', 'Pass %']
    .concat(['0-32.9', '33-44.9', '45-59.9', '60-74.9', '75-89.9', '90-100'])
        .concat(Constant.GRADES)
        .concat(['Grade count', 'NxW', 'PI', 'Mean'])
        .forEach(el => {
            table += `<th> ${el} </th>`;
        });
    table += '</tr>' +
        `<td> ${collection.getTotalAppearedStudents()} </td>` +
        `<td> ${collection.getTotalPassedStudents()} </td>` +
        `<td> ${collection.getTotalFailAndCompStudents()} </td>` +
        `<td> ${collection.getTotalAbsentStudents()} </td>` +
        `<td> ${collection.getPassPercentage()} </td>` +
        `<td> ${collection.getPercentageRangeStudentCount(0, 32.9)} </td>` +
        `<td> ${collection.getPercentageRangeStudentCount(33, 44.9)} </td>` +
        `<td> ${collection.getPercentageRangeStudentCount(45, 59.9)} </td>` +
        `<td> ${collection.getPercentageRangeStudentCount(60, 74.9)} </td>` +
        `<td> ${collection.getPercentageRangeStudentCount(75, 89.9)} </td>` +
        `<td> ${collection.getPercentageRangeStudentCount(90, 100)} </td>` +
        '</tbody>';

    utility.setTable('schoolTable', table);
}

/**
 * Displays subject table
 */
function displaySubjectTable() {
    let table = '<tbody><tr>';
    ['Code', 'Subject', 'Appeared', 'Passed', '%']
    .concat(Constant.GRADES)
        .concat(['0-33', '33-44', '45-59', '60-74', '75-89', '90-100'])
        .concat(['NxW', 'PI', 'Mean'])
        .forEach(el => {
            table += `<th> ${el} </th>`;
        });
    table += '</tr>';

    utility.sortSubjectByPassPercentage(collection.subjectCollection).forEach(subject => {
        table += '<tr>' +
            `<td> ${subject.code} </td>` +
            `<td> ${subject.name} </td>` +
            `<td> ${subject.totalAppeared} </td>` +
            `<td> ${subject.totalPassed} </td>` +
            `<td> ${subject.getPassPercentage()} </td>`;

        Constant.GRADES.forEach(grade => {
            table += `<td> ${subject.gradeObj[grade] || '0'} </td>`;
        });

        table += `<td> ${subject.r0to32} </td>` +
            `<td> ${subject.r33to44} </td>` +
            `<td> ${subject.r45to59} </td>` +
            `<td> ${subject.r60to74} </td>` +
            `<td> ${subject.r75to89} </td>` +
            `<td> ${subject.r90to100} </td>` +
            `<td> ${subject.getNxW()} </td>` +
            `<td> ${subject.getPI()} </td>` +
            `<td> ${subject.getMean()} </td>` +
            '</tr>';
    });

    table += '</tbody>';

    utility.setTable('subjectTable', table);
}

/**
 * Displays student table
 */
function displayStudentTable() {
    let table = '<tbody><tr>';

    ['Roll', 'Name']
    .concat(collection.getAllSubjectCodes().join(' Grade ').split(' '))
        .concat(['Grade', 'Total', '%', 'Result'])
        .forEach(el => {
            table += `<th> ${el} </th>`;
        });

    utility.sortStudentByPercentage(collection.studentCollection).forEach(student => {
        table += '<tr>' +
            `<td> ${student.getRoll()} </td>` +
            `<td> ${student.getName()} </td>`;

        collection.getAllSubjectCodes().forEach(code => {
            table += `<td> ${student.getMarks(code)} </td>` +
                `<td> ${student.getGrade(code)} </td>`;
        });

        table += `<td> ${student.getTotalMarks()} </td>` +
            `<td> ${student.getPercentage() || ' - '} </td>` +
            `<td> ${student.getResult()} </td>` +
            '</tr>';
    });

    table += '</tbody>';
    utility.setTable('studentTable', table);
}
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

let collection = Collection.getInstance();

/****** Variables ******/

let $elAnalyze = document.getElementById('btn-analyze');
let $textInput = ( < HTMLInputElement > document.getElementById('text-input'));

/**
 * On click of start analysis
 */
$elAnalyze.addEventListener('click', function () {
    try {
        let textAreaContent = utility.remNewLine($textInput.value);
        let resultStrArr = utility.resultStringSplit(textAreaContent);
        extractDataModels(resultStrArr);
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
            // subject.incrementGradeCount(gradeObj.grade);
        }
    });
}
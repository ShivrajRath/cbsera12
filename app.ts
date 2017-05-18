import utility = require('./utility');
import {
    Collection
} from 'Collection';
import {
    Student
} from 'Student';

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
    /**
     * Creates a student object
     */
    let student = new Student(utility.getRoll(resultStrArr));

    student.setName(utility.getName(resultStrArr));
    student.setResult(utility.getResult(resultStrArr));
    student.setGradeArr(utility.getGradeArr(resultStrArr, student))
}
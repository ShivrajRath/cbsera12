/*********************************
 * Utility methods
 *********************************/

import {
    Grade,
    Student
} from 'Student';

import {
    Constant
} from 'Constant';

/**
 * Removes the white space
 */
export function remWhiteSpace(str: string): string {
    return str.replace(/\W/g, '');
}

/**
 * Removes the new line characters
 * @param str Input string
 */
export function remNewLine(str: string): string {
    return str.replace(/\n/g, '');
}

/**
 * Removes extra space into one space
 */
export function remExtraSpaces(str: string): string {
    return str.replace(/\s+/g, ' ').trim();
}

/**
 * Gets a table element inside an ID
 */
export function setTable(id: string, html: string) {
    document.getElementById(id).getElementsByTagName('table')[0].innerHTML = html;
}

/**
 * sort Student array by percentage
 */
export function sortStudentByPercentage(studentArr: Array < Student > ) {
    return studentArr.sort((studentA, studentB) => {
        return studentB.getPercentage() - studentA.getPercentage();
    });
}

/**
 * Splits the content into array of result string
 * @param str Input text content
 */
export function resultStringSplit(str: string) {
    return str.match(/\d{6,9}.*?(PASS|COMP|FAIL|ABST)/gi);
}

/**
 * Returns the roll number of student
 */
export function getRoll(str: string): number {
    return parseInt((str.match(/(\d{6,9})/)[1]).trim(), 10);
}

/**
 * Returns the roll number of student
 */
export function getName(str: string) {
    return str.match(/\d{6,9}(.*?)\d/)[1].trim();
}

/**
 * Result Enum returned
 */
export function getResult(str: string): string {
    return (str.match(/.*\s(.*?)$/)[1]).toUpperCase();
}

/**
 * Parses the string to extract the marks details
 */
export function getGradeArr(str: string, student: Student): Array < Grade > {

    // Gets the marks string: Examples
    // 301 095   A1 041 065   B2 042 075   B1 043 042FP E  044 057FP E               A2 A2 A2
    // 301  ABA     042 029FT E  043 030FT E  083 028FT E  041  ABA                  B1 B1 B2
    // 301          042          043          044          041
    // Number of subjects is not fixed and we shouldn't assume the subject code

    /**
     * Logic
     * If the person is ABST, just take the code and assign NA to marks and grade
     * If the person is having ABA, then take 'NA' for the subject
     * Trim all the subjects with ABA and take the new string
     */


    let marksStr = remExtraSpaces(str.match(new RegExp(student.getName() + '(.*)' + student.getResult()))[1]);

    // Iterate the string to fetch Subject, marks and grade
    let marksArr = marksStr.split(' ');

    let gradeArr: Array < Grade > = [];

    function addAbstSubject(code: any) {
        if (!!parseInt(code)) {
            gradeArr.push({
                code: parseInt(code, 10),
                marks: 0,
                grade: Constant.ABST,
                isAbst: true
            });
        }
    }

    // Abst scenario
    if (student.isAbst()) {
        marksArr.forEach(el => {
            addAbstSubject(el);
        });
    } else {

        // Subject absent case
        let abaArr = marksStr.match(/\d+\sABA/gi);
        if (abaArr) {
            abaArr = abaArr.join(' ').split(' ');
            abaArr.forEach(el => {
                addAbstSubject(el);

                // Remove the el from the array
                marksArr.splice(marksArr.indexOf(el), 1);
            });
        }

        // On the remaining subjects
        for (let i = 0; i < marksArr.length; i = i + 3) {
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
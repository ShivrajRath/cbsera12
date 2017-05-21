/**
 * Collection class, container for student and subject collection
 * http://stackoverflow.com/questions/30174078/how-to-define-singleton-in-typescript
 */

import {
    Student
} from 'Student';

import {
    Subject
} from 'Subject';

import {
    Constant
} from 'Constant';

export class Collection {
    private static _instance: Collection;

    studentCollection: Array < Student > = [];
    subjectCollection: Array < Subject > = [];

    private constructor() {
        // Does nothing
    }

    public static getInstance() {
        return this._instance || (this._instance = new this());
    }

    /**
     * Returns the instance of a subject or creates a new subject
     * @param code Subject code
     */
    getSubject(code: number): Subject {
        let subject = this.subjectCollection.filter(subject => {
            return subject.getCode() === code;
        })[0];

        if (!(subject instanceof Subject)) {
            subject = new Subject(code);
            this.subjectCollection.push(subject);
        }

        return subject;
    }

    /**
     * Returns the instance of a student or creates a new subject
     * @param code Subject code
     */
    getStudent(roll: number): Student {
        let student = this.studentCollection.filter(student => {
            return student.getRoll() === roll;
        })[0];

        if (!(student instanceof Student)) {
            student = new Student(roll);
            this.studentCollection.push(student);
        }

        return student;
    }

    /**
     * Returns all the subject codes
     */
    getAllSubjectCodes() {
        return this.subjectCollection.map(subject => subject.getCode());
    }

    getTotalAppearedStudents() {
        return this.studentCollection.filter(student => student.result !== 'ABST').length;
    }

    getTotalPassedStudents() {
        return this.studentCollection.filter(student => student.result === 'PASS').length;
    }

    getTotalFailAndCompStudents() {
        return this.studentCollection.filter(student => student.result.match(/FAIL|COMP/gi)).length;
    }

    getTotalAbsentStudents() {
        return this.studentCollection.filter(student => student.result === 'ABST').length;
    }

    getPassPercentage() {
        return parseFloat(((this.getTotalPassedStudents() / this.getTotalAppearedStudents()) * 100).toFixed(2));
    }

    getPercentageRangeStudentCount(min: number, max: number) {
        return this.studentCollection.filter(student => {
            return student.getPercentage() >= min && student.getPercentage() <= max;
        }).length;
    }

    getTotalGradesArray() {
        let gradeObj: any = {};

        Constant.GRADES.forEach(grade => {
            gradeObj[grade] = 0;
        });

        gradeObj.totalMarks = 0;

        this.subjectCollection.forEach(subject => {
            Object.keys(subject.gradeObj).forEach(key => {
                gradeObj[key] += subject.gradeObj[key];
                gradeObj.totalMarks += subject.gradeObj[key];
            });
        });

        return Object.keys(gradeObj).map(key => gradeObj[key]);
    }

    getTotalNxW() {
        return this.subjectCollection.reduce((acc, subject) => {
            return acc + subject.getNxW();
        }, 0);
    }

    getTotalMark() {
        return this.subjectCollection.reduce((acc, subject) => {
            return acc + subject.getTotalMarks();
        }, 0);
    }

    getTotalMean() {
        return parseFloat((this.getTotalMark() / this.getTotalAppearedStudents()).toFixed(2));
    }

    getTotalPI() {
        return parseFloat(((this.getTotalNxW() * 100) / (this.getTotalAppearedStudents() * 40)).toFixed(2));
    }

    /**
     * Clears the collections
     */
    clear() {
        this.subjectCollection = [];
        this.studentCollection = [];
    }
}
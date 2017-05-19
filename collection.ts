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
     * Clears the collections
     */
    clear() {
        this.subjectCollection = [];
        this.studentCollection = [];
    }
}
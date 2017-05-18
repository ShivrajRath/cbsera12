/**
 * Collection class, container for student and subject collection
 * http://stackoverflow.com/questions/30174078/how-to-define-singleton-in-typescript
 */

import {Student} from 'Student';
import {Subject} from 'Subject';

export class Collection
{
    private static _instance: Collection;

    studentCollection : Array<Student> = [];
    subjectCollection : Array<Subject> = [];

    private constructor()
    {
        // Does nothing
    }

    public static getInstance()
    {
        // Do you need arguments? Make it a regular method instead.
        return this._instance || (this._instance = new this());
    }

    /**
     * Returns the instance of a subject or creates a new subject
     * @param code Subject code
     */
    getSubject(code: number) : Subject{
        let subject = this.subjectCollection.filter(subject => {
            subject.getCode() === code;
        })[0];

        if(!(subject instanceof Subject)){
            subject = new Subject(code);
        }

        return subject;
    }
}

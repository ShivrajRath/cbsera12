import {
    Collection
} from 'Collection';

import {
    Constant
} from 'Constant'

let collection = Collection.getInstance();

export interface Grade {
    sub: number,
        grade: string,
        marks: number
}

/**
 * Student Class
 */
export class Student {
    name: string;
    roll: number;
    result: string;
    private percentage: number;
    gradeArr: Array < Grade > = [];

    /**
     * Creates a student instance
     * @param roll Roll number of student
     */
    constructor(roll: number) {
        this.roll = roll;
        collection.studentCollection.push(this);
    }

    setName(name: string) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    setResult(result: string) {
        this.result = result;
    }

    getResult() {
        return this.result;
    }

    setGradeArr(gradeArr: Array < Grade > ) {
        this.gradeArr = gradeArr;
    }

    isAbst() {
        return this.result === Constant.ABST;
    }

}
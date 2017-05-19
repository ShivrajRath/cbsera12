import {
    Constant
} from 'Constant';

export interface Grade {
    code: number;
    marks: number;
    grade: string;
    isAbst: boolean;
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

    getGradeArr() {
        return this.gradeArr;
    }

    getRoll() {
        return this.roll;
    }

    isAbst() {
        return this.result === Constant.ABST;
    }

}
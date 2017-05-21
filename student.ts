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

    getGradeObj(code: number) {
        return this.gradeArr.filter(gradeObj => gradeObj.code === code)[0] || {
            marks: '-',
            grade: '-'
        };
    }

    getMarks(code: number) {
        return this.getGradeObj(code).marks;
    }

    getGrade(code: number): string {
        return this.getGradeObj(code).grade;
    }

    getPercentage(): number {
        return parseFloat(((this.getTotalMarks() / (this.gradeArr.filter(gradeObj => !gradeObj.isAbst).length * 100)) * 100).toFixed(2)) || 0;
    }

    getTotalMarks() {
        // let totalMarks = 0;
        // this.gradeArr.forEach(gradeObj => {
        //     totalMarks += gradeObj.marks;
        // });
        // return totalMarks;

        return this.gradeArr.reduce((acc, gradeObj) => {
            return acc + gradeObj.marks;
        }, 0);

    }

    isAbst() {
        return this.result === Constant.ABST;
    }

}
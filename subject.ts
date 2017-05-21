import {
    Constant,
    SubjectNameConstant
} from 'Constant';
/**
 * Subject Class
 */
export class Subject {
    name: string;
    code: number;
    totalAppeared: number = 0;
    totalPassed: number = 0;
    private totalMarks: number = 0;
    r0to32: number = 0;
    r33to44: number = 0;
    r45to59: number = 0;
    r60to74: number = 0;
    r75to89: number = 0;
    r90to100: number = 0;
    gradeObj: any = {};

    /**
     * Pushes the subject to the collection
     * @param code Code is the primary key for the subject
     */
    constructor(code: number) {
        this.code = code;
        this.name = ( < any > SubjectNameConstant)[code];
    }

    /**
     * Returns the subject code
     */
    getCode() {
        return this.code;
    }

    /**
     * Adds total appeared
     */
    incrementTotalAppeared() {
        ++this.totalAppeared;
    }

    /**
     * Increments total passed
     */
    incrementTotalPassed(grade: string) {
        if (!grade.match(/E|F/)) {
            ++this.totalPassed;
        }
    }

    /**
     * Increments the count of a particular grade for a subject
     * @param grade Grade string
     */
    incrementGradeCount(grade: string) {
        if (this.gradeObj[grade]) {
            ++this.gradeObj[grade];
        } else {
            this.gradeObj[grade] = 1;
        }
    }

    /**
     * Sets the marks into proper range
     */
    incrementMarkRange(marks: number) {
        this.totalMarks += marks;
        if (marks > 89) {
            ++this.r90to100;
        } else if (marks > 74) {
            ++this.r75to89;
        } else if (marks > 59) {
            ++this.r60to74;
        } else if (marks > 44) {
            ++this.r45to59;
        } else if (marks > 32) {
            ++this.r33to44;
        } else {
            ++this.r0to32;
        }
    }

    getPassPercentage() {
        return parseFloat(((this.totalPassed / this.totalAppeared) * 100).toFixed(2)) || 0;
    }

    getGradeCount(grade: string) {
        return this.gradeObj[grade] || 0;
    }

    getNxW() {
        return this.getGradeCount('A1') * 8 + this.getGradeCount('A2') * 7 +
            this.getGradeCount('B1') * 6 + this.getGradeCount('B2') * 5 +
            this.getGradeCount('C1') * 4 + this.getGradeCount('C2') * 3 +
            this.getGradeCount('D1') * 2 + this.getGradeCount('D2') * 1 +
            this.getGradeCount('E') * 0;
    }

    getPI() {
        return parseFloat(((this.getNxW() * 100) / (this.totalAppeared * Constant.maxPoint))
            .toFixed(2));
    }

    getTotalMarks() {
        return this.totalMarks;
    }

    getMean() {
        return parseFloat((this.totalMarks / this.totalAppeared).toFixed(2));
    }
}
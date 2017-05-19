import {
    Constant
} from 'Constant';
/**
 * Subject Class
 */
export class Subject {
    name: string;
    code: number;
    totalAppeared: number = 0;
    totalPassed: number = 0;
    r0to32: number = 0;
    r33to44: number = 0;
    r45to59: number = 0;
    r60to74: number = 0;
    r75to89: number = 0;
    r90to100: number = 0;
    gradeObj: object = {};

    /**
     * Pushes the subject to the collection
     * @param code Code is the primary key for the subject
     */
    constructor(code: number) {
        this.code = code;
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

    // incrementGradeCount(grade: string){
    //     if(this.gradeObj[grade]){
    //         ++this.gradeObj[grade];
    //     }
    // }

    /**
     * Sets the marks into proper range
     */
    incrementMarkRange(marks: number) {
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
}
import {
    Collection
} from 'Collection';

let collection = Collection.getInstance();

/**
 * Subject Class
 */
export class Subject {
    name: string;
    code: number;
    totalAppeared: number = 0;
    totalPassed: number = 0;
    r33to44_9: number = 0;
    r45to59_9: number = 0;
    r60to74_9: number = 0;
    r75to89_9: number = 0;
    r90to100: number = 0;

    /**
     * Pushes the subject to the collection
     * @param code Code is the primary key for the subject
     */
    constructor(code: number) {
        this.code = code;
        collection.subjectCollection.push(this);
    }

    /**
     * Returns the subject code
     */
    getCode() {
        return this.code;
    }
}
export class Education {
    id?: number;
    education: string;
    institution: string;

    constructor(education:string, institution:string) {
        this.education = education;
        this.institution = institution;
    }
}

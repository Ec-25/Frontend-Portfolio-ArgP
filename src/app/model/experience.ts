export class Experience {
    id?: number;
    experience: string;
    description: string;

    constructor(experience:string, descripcion:string) {
        this.experience = experience;
        this.description = descripcion
    }
}

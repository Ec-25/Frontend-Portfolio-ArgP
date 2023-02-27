export class person {
    id?: number;
    name: string;
    title: string;
    labels: string;
    photo: string;
    about: string;

    constructor(name:string, title:string, labels:string, photo:string, about:string) {
        this.name = name;
        this.title = title;
        this.labels = labels;
        this.photo = photo;
        this.about = about;
    }
}
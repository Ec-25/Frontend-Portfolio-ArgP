export class person {
    id?: number;
    name: String;
    title: String;
    labels: String;
    photo: String;

    constructor(name:String, title:String, labels:String, photo:String) {
        this.name = name;
        this.title = title;
        this.labels = labels;
        this.photo = photo;
    }
}
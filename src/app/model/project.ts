export class Project {
    id?: number;
    icon: string;
    project: string;
    text: string;
    link_gh: string;
    link_page: string;

    constructor(icon:string, project:string, text:string, link_gh:string, link_page:string) {
        this.icon = icon;
        this.project = project;
        this.text = text;
        this.link_gh = link_gh;
        this.link_page = link_page;
    }
}

export class Category {
  public id:number;
  public name:string;
  public url:string|undefined;

  constructor(id: number , name: string ,url?: string) {
    this.id = id;
    this.name = name;
    this.url = url;
  }
}

export interface cours{
    nom:string,
    volume:number
}
export class etudiant {
    nom:string;
    age:number;
    info(){
        console.log("nom: "+this.nom+" age "+this.age );
    }
    constructor(nom:string){}
    constructor1(nom:string){}
}
export class Statistique {
   id: string;
   titre: string;
   valeur: string;
   
   appreciation: Appreciation;

   constructor(id:string, titre:string, valeur:string, appreciation:Appreciation){
      this.id = id;
      this.titre = titre;
      this.valeur = valeur;
      this.appreciation = appreciation;
   }
}

export enum Appreciation{
   SUCCESS,
   WARNING,
   DANGER,
};
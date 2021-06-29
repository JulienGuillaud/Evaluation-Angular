export class Statistique {
   identifiant: string;
   titre: string;
   valeur: string;
   
   appreciation: Appreciation;

   constructor(identifiant:string, titre:string, valeur:string, appreciation:Appreciation){
      this.identifiant = identifiant;
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
export interface Product{
    id:number;
    name:string;
   price:number;
   oPrice:number;
   imageUrl:string;
   rating:number,
   category:Category;

}

export enum Category{
    Electric="Electric",
    Furniture="Furniture",
    Fresh="Fresh",
    Fashion="Fashion",
    Health="Health",
    Mobile="Mobile",
    Beauty="Beauty",
    Kitchen="Kitchen",
    Sports="Sports",
    Books="Books"
}
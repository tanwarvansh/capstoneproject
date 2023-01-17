import { Injectable } from "@angular/core";
import { InMemoryDbService, RequestInfo } from "angular-in-memory-web-api";
import { Observable } from "rxjs";
import { Category, Product } from "../products/product";


@Injectable({
    providedIn:'root'
})
export class DBService implements InMemoryDbService{
    createDb() {
        const products:Product[]=[
            {
                id:1,
                name:'Samsung Galaxy S22 5G (Green, 8GB, 128GB Storage) with No Cost EMI/Additional Exchange Offers',
                price:39000,
                oPrice:38999,
                imageUrl:'../../assets/SamsungGalaxys215g.jpg',
                rating:4.2,
                category:Category.Mobile
            },
            {
                id:2,
                name:'Hexagon Furnitures Junglewood Textured 4 Door Wardrobe with Mirror',
                price:29000,
                oPrice:38999,
                imageUrl:'../../assets/Alimrah.webp',
                rating:4.2,
                category:Category.Mobile
            },
            {
            id:3,
                name:'HEERA MOTI CORPORATION Whibla Low Height King Size Bed with Side Tables Without Storage(Finish:- Black & White)',
                price:39000,
                oPrice:38999,
                imageUrl:'../../assets/bed.jpeg',
                rating:4.2,
                category:Category.Electric
            },
            {
                id:4,
                name:'Amazon Brand - Solimo Medusa Engineered Wood Wardrobe With Mirror wenge finish , 4 Doors',
                price:39000,
                oPrice:38999,
                imageUrl:'../../assets/AmazonBrandAlmirah.jpg',
                rating:4.2,
                category:Category.Electric
            },
            {
                id:5,
                name:'OPPO Reno8 5G (Shimmer Gold, 128 GB)  (8 GB RAM)',
                price:29900,
                oPrice:38999,
                imageUrl:'../../assets/oppophone.webp',
                rating:4.3,
                category:Category.Mobile
            },{
                id:6,
                name:'OnePlus Nord CE 2 Lite 5G (Blue Tide, 128 GB)  (6 GB RAM)',
                price:19870,
                oPrice:19870,
                imageUrl:'../../assets/onePlus.webp',
                rating:4.3,
                category:Category.Mobile
            },{
                id:7,
                name:'Lifelong Chaze by Milind Soman SX 20 CZBC2704 27.5T with Dual Disc 27.5 T Mountain/Hardtail Cycle  (Single Speed, Black)',
                price:8499,
                oPrice:14499,
                imageUrl:'../../assets/cycleSport.webp',
                rating:4.2,
                category:Category.Sports
            },{
                id:8,
                name:'Dr Ortho Orthopaedic Back Support (Backrest) - High Density Memory Foam Back Support  (Black)',
                price:1423,
                oPrice:1498,
                imageUrl:'../../assets/support.webp',
                rating:4.2,
                category:Category.Sports
            }
    ]

    return {products};
        
    }
    
}
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";


@Injectable({
    providedIn:'root'
})
export class HelperService{

    private filterStage=new BehaviorSubject('Filter is neccessay');
    currentFilterStage=this.filterStage.asObservable();



    updatefilterStage(fil:string){
        this.filterStage.next(fil);
    }

}
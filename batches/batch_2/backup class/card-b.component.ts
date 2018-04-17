import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  SimpleChange
} from "@angular/core";
import { Props } from './../../apex/common/props'
@Component({
  selector: "card-b",
  template: `
          <div class="card-wrapper">
              <ng-template ngFor let-icard [ngForOf]="cardList" let-i="index">
              <div class="index-content">                
                  <a href="blog-ici.html">
                      <div class="col-md-4">
                          <div class="card">
                              <img alt="placeholder" [src]="icard.image" class="img-responsive">
                              <h3>{{icard.name}}</h3>
                              <p>{{icard.description}}</p>
                          </div>
                      </div>
                  </a>
               </div>
              </ng-template>
          </div>
   `,
  styles: [
    `
      .index-content a:hover{
        color:black;
        text-decoration:none;
    }
    .index-content{
        // margin-bottom:20px;
        // padding:50px 0px;
        
    }
    .index-content .row{
        margin-top:20px;
    }
    .index-content a{
        color: black;
    }
    .index-content .card{
        background-color: #FFFFFF;
        padding:0;
        -webkit-border-radius: 4px;
        -moz-border-radius: 4px;
        border-radius:4px;
        box-shadow: 0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12), 0 2px 4px -1px rgba(0,0,0,0.3);
    
    }
    .index-content .card:hover{
        box-shadow: 0 16px 24px 2px rgba(0,0,0,0.14), 0 6px 30px 5px rgba(0,0,0,0.12), 0 8px 10px -5px rgba(0,0,0,0.3);
        color:black;
    }
    .index-content .card img{
        width:100%;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
    }
    .index-content .card h4{
        margin:20px;
    }
    .index-content .card p{
        margin:20px;
        opacity: 0.65;
    }
    .index-content .blue-button{
        width: 100px;
        -webkit-transition: background-color 1s , color 1s; /* For Safari 3.1 to 6.0 */
        transition: background-color 1s , color 1s;
        min-height: 20px;
        background-color: #002E5B;
        color: #ffffff;
        border-radius: 4px;
        text-align: center;
        font-weight: lighter;
        margin: 0px 20px 15px 20px;
        padding: 5px 0px;
        display: inline-block;
    }
    @media (max-width: 768px) {
    
        .index-content .col-lg-4 {
            margin-top: 20px;
        }
    }
   `
  ]
})
export class CardBComponent {
  public imageHost = Props.IMAGE_HOST;
  @Output() outputEvent: EventEmitter<any> = new EventEmitter<any>();

  @Input() inputData: any;
  cardList: any;
  ngOnChanges(changes: { [key: string]: SimpleChange }) {
    if (changes.hasOwnProperty("inputData")) {
      this.cardList = JSON.parse(JSON.stringify(this.inputData));
      console.log(this.cardList)
      if (this.cardList) {
        this.doService(this.cardList);
      }
    }
  }
  doService(cardList: any[]) {
    this.cardList = cardList;
  }
}

'use strict';

/* jshint esversion: 10 */
import html from "./modules/components/utils.js"

class MySite{
    constructor(appID){
        this.appContainerID = appID || "myMain";
        this.appData = new Map();
        this.appData.set("/", new Map());
    }
    AddRoute(parentRoute, routeName, data) {
        this.appData.get(parentRoute).set(routeName, data);
    }
    OnRoute(route) {
        console.log(`${route}`);
        document.getElementById(this.appContainerID).innerHTML = this.appData.get("/").get(route)?.Render() || this.NotFound();
    }
    NotFound() {
        return html`<section><div>Not found :( 404</div></section>`
    };
}
//#region Home Render
class Home {
  constructor(objData){
      this.data = objData;
  }
  //#region loops
  A(bet) {
    console.log(bet);
    
    return html`
    <img src="${bet.img}" alt="${bet.alt}" title="${bet.title}">`;
  }
  C(Teb) {
    console.log(Teb);
    
    return html`
    <img src="${Teb.img}" alt="${Teb.alt}" title="${Teb.title}">`;
  }
  Trail(TrData){
    return html`
    <source src="${TrData.trailer}" type="${TrData.type}">`;
  }
  Tol(bor){
      return html`
      <div class="${bor.divClass}">
          <h2>${bor.UseDate}</h2>
          <h3>${bor.tolbor}</h3>
          <h3>${bor.bagts}</h3>
          <h3>${bor.Tohooromj}</h3>
          <button>${bor.Avah}</button>
        </div>
      `
  }
  //#endregion


    Render() {
      let NewRendered = "";
      for (let b of this.data.NewImgs) {
        NewRendered+=this.A(b);
      }
      let ViewRendered = "";
      for (let d of this.data.ViewImgs) {
        ViewRendered+=this.C(d);
      }
      let TraileRender = "";
      for(let tr of this.data.trailer){
          TraileRender+=this.Trail(tr);
      }
      let Tohoormj="";
      for(let toh of this.data.piece){
          Tohoormj+=this.Tol(toh);
      }
      return html`
    <style>
    @import "https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital@1&display=swap";
@import "https://fonts.googleapis.com/css2?family=Oswald&family=Train+One&display=swap";
.MovieImg{width:80%;text-align:center}
#Big-slide{text-align:center}
.stars-left-1{display:inline-block;float:right;margin-top:12%}
.stars-right-1{display:inline-block;float:left;margin-top:12%}
.stars-left-2{display:inline-block;float:right;margin-top:12%}
.stars-right-2{display:inline-block;float:left;margin-top:12%}
div{display:inline-block}
main button{border:rgba(0,0,0,0);background-color:rgba(0,0,0,0);color:#fff;cursor:pointer}
@media only screen and (min-width: 1278px) {
.Big-Next{margin-left:33%;cursor:pointer;position:absolute;top:250px;width:auto;font-weight:700;font-size:72px}
.Big-Prev{margin-left:-36.5%;position:absolute;top:250px;width:auto;font-weight:700;font-size:72px}
.News h2{margin-top:1%;margin-bottom:.5%;padding-left:10%;font-family:'Roboto Condensed',sans-serif;font-size:27px}
.News button{font-size:40px}
.stars-left-1{margin-right:4.5%}
.stars-right-1{margin-left:3.5%}
.stars-left-2{margin-right:4.5%}
.stars-right-2{margin-left:3.5%;margin-right:1%}
.view,.Smallslide{text-align:center}
.Smallslide img{margin-right:6px;margin-left:6px;width:20%;height:auto}
.trailer{padding-left:35%}
.trailer h3{font-size:30px;margin-left:6%;margin-bottom:1%;width:10%;text-align:center;border-bottom:2px solid}
.table{text-align:center;margin-left:5%;margin-bottom:14%;width:90%}
.piece_price1,.piece_price2,.piece_price3{border:2px solid;margin-left:0 auto auto 6%;display:inline-block;width:25%}
.table h1{margin-bottom:1%;font-family:'Oswald',sans-serif;margin-left:35%;margin-right:35%;border-bottom:3px solid;font-size:36px}
.table h2{margin:auto;border-bottom:2px solid}
.table h3{margin:auto;border-bottom:2px solid}
.table button{color:#fff;background-color:#000}
}
@media only screen and (min-width: 760px) and (max-width:1278px) {
.text{margin-left:14%;color:#fff;top:6%;font-size:25px;position:absolute;width:auto;border-bottom:2px solid}
.Big-Next{margin-left:34%;background-color:rgba(0,0,0,0);color:#fff;cursor:pointer;position:absolute;top:180px;width:auto;font-weight:700;font-size:32px}
.Big-Prev{margin-left:-38.5%;background-color:rgba(0,0,0,0);color:#fff;cursor:pointer;position:absolute;top:180px;width:auto;font-weight:700;font-size:32px}
.News button{font-size:30px}
.stars-left-1{margin-right:4.5%}
.stars-right-1{margin-left:3.5%;margin-right:1%}
.stars-left-2{margin-right:4.5%}
.stars-right-2{margin-left:3.5%;margin-right:1%}
.News h2{margin-top:1%;margin-bottom:.5%;padding-left:12%;font-family:'Roboto Condensed',sans-serif;font-size:20px}
.view,.Smallslide{text-align:center}
.Smallslide img{margin-right:4px;margin-left:4px;width:18%;height:auto}
.trailer{padding-left:35%}
.trailer h3{font-size:25px;margin-left:2px;margin-bottom:1%;width:20%;text-align:center;border-bottom:2px solid}
video{width:90%;height:90%}
.piece_price1,.piece_price2,.piece_price3{border:2px solid;margin-left:0 auto auto 6%;display:inline-block;width:25%}
.table{text-align:center;margin-left:5%;margin-bottom:20%;width:90%}
.table h1{margin-bottom:1%;font-family:'Oswald',sans-serif;margin-left:30%;margin-right:30%;border-bottom:3px solid;font-size:30px}
.table h2{margin:auto;border-bottom:2px solid}
.table h3{margin:auto;border-bottom:2px solid}
.table button{color:#fff;background-color:#000}
}
@media only screen and (min-width: 319px) and (max-width:760px) {
.Big-Next{margin-left:30%;background-color:rgba(0,0,0,0);color:#fff;cursor:pointer;position:absolute;top:100px;width:auto;font-weight:700;font-size:24px}
.Big-Prev{margin-left:-36.5%;background-color:rgba(0,0,0,0);color:#fff;cursor:pointer;position:absolute;top:100px;width:auto;font-weight:700;font-size:24px}
.News button{font-size:14px}
.stars-left-1{margin-right:2%}
.stars-right-1{margin-left:1.5%}
.stars-left-2{margin-right:2%}
.stars-right-2{margin-left:1.5%}
.News h2{margin-top:1%;margin-bottom:.5%;padding-left:12%;font-family:'Roboto Condensed',sans-serif;font-size:20px}
.view,.Smallslide{text-align:center}
.Smallslide img{margin-right:4px;margin-left:4px;width:18%;height:auto}
.trailer h3{font-size:15px;margin-left:2px;margin-bottom:1%;width:15%;font-family:'Roboto Condensed',sans-serif;font-size:20px;text-align:center;border-bottom:2px solid}
video{width:100%;height:90%}
.piece_price1,.piece_price2,.piece_price3{border:2px solid;margin-left:0 auto auto 6%;display:inline-block;width:25%}
.table{text-align:center;margin-left:5%;margin-bottom:40%;width:90%}
.table h1{margin-bottom:1%;margin-left:20%;margin-right:20%;font-family:'Oswald',sans-serif;border-bottom:3px solid;font-size:20px}
.table h2{margin:auto;border-bottom:2px solid}
.table h3{margin:auto;border-bottom:2px solid;font-size:12px}
.table button{color:#fff;background-color:#000}
}
    </style>
      <div id="Big-slide">
        <div class="mySlides" style="display: block;">
          <img class="MovieImg" src="${this.data.Big.img1}" alt="dragon">
        </div>
        <div class="mySlides" style="text-align: center; display: none;">
          <img class="MovieImg" src="${this.data.Big.img2}" alt="Нийслэл">
        </div>
        <div class="mySlides" style="text-align: center; display: none;">
          <img class="MovieImg" src="${this.data.Big.img3}" alt="Буцаж">
        </div>
        <button class="Big-Prev" >${this.data.prev}</button>
        <button class="Big-Next">${this.data.next}</button>
      </div>
      <section class="News">
      
      <h2>${this.data.New}</h2>
      <div class="Smallslide" style="display: block;">
          <button class="stars-right-1">${this.data.prev}</button>
          <button class="stars-left-1">${this.data.next}</button>
            <div class="Smallslide" style="display: block;">
              <a href="LookTv-KinoMedeelel.html">
              ${NewRendered}
              </a>
            </div>
      </div>
      <div class="Smallslide" style="text-align: center; display: none;">
          <a href="LookTv-KinoMedeelel.html">
          ${NewRendered}
          </a>
        </div> 
      </section>
      <section class="News">
      <h2>${this.data.View}</h2>
      <button class="stars-right-2" >❮</button>
      <button class="stars-left-2">❯</button>
          <div class="Smallslide" style="display: block;">
            <a href="LookTv-KinoMedeelel.html">
            ${ViewRendered}
            </a>
          </div>
          <div class="Smallslide" style="text-align: center; display: none;">
            <a href="LookTv-KinoMedeelel.html">
            ${ViewRendered}
            </a>
          </div>
      </section>
      <section class="trailer">
        <h3>${this.data.Title}</h3>
        <video width="750" height="400" controls autoplay muted>
            ${TraileRender}
        </video>
      </section>
      <section class="table">
        <h1>${this.data.Tolbor}</h1>
        ${Tohoormj}
      </section>
      `
  }
}
//#endregion
//#region Багц Render
class Bagst {
    constructor(objData){
        this.data = objData;
    }

    Render(){

        return html`<h1>${this.data.bag}</h1>`

    }
}
//#endregion

//#region Sale Render
class Sale {
    constructor(objData){
        this.data = objData;
    }
    Render(){
        return html`
        <h1>${this.data.sal}</h1>`
    }
}
//#endregion

//#region Turees Render
class Turees {
    constructor(objData){
        this.data = objData;
    }
    Render(){
        return html`<h1>${this.data.tur}</h1>`
    }
}
//#endregion
//#region TV Render
class Tv {
    constructor(objData){
        this.data = objData;
    }
    Render(){
        return html`"<img src="${this.data.tvs}">`
    }
}
//#endregion 

const myMain = new MySite("myMain");
//#region Create HomePage
const homeDataObj = {
  Big:{
          img1: "WIMG/image1.jpg", 
          img2: "WIMG/image2.jpg",
          img3: "WIMG/image3.jpg"
         },
  prev: "❮",
  next: "❯",
  New:"Шинээр нэмэгдсэн кино",
  NewImgs:[
    {img:"HIMG/Hit/1.jpg", alt:"Movie1", title:"Movie1"},
    {img:"HIMG/Hit/2.jpg", alt:"Movie2", title:"Movie2"},
    {img:"HIMG/Hit/3.jpg", alt:"Movie3", title:"Movie3"},
    {img:"HIMG/Hit/4.jpg", alt:"Movie4", title:"Movie4"}
  ],
  View:"Үзсэн кинонууд",
  ViewImgs:[
    {img:"HIMG/Hit/3.jpg", alt:"Movie1",title:"Movie1"},
    {img:"HIMG/Olon-angit/2.jpg",alt:"Movie1",title:"Movie2"},
    {img:"HIMG/Hit/4.jpg", alt:"Movie3",title:"Movie3"},
    {img:"HIMG/Hit/1.jpg", alt:"Movie4",title:"Movie4"}
  ],
  Title:"Trailer",
  trailer:[
      {trailer:"Movie/GODZILLAVSKONGTrailer.mp4",type:"video/mp4"},
      {trailer:"Movie/GODZILLAVSKONGTrailer.ogg",type:"video/ogg"}
  ],
  Tolbor:"Төлбөрийн мэдээлэл",
  piece:[
      {UseDate:"1 сар", tolbor:"4000",Bagts:"Багц", Tohooromj:"төхөөрөмж",Avah:"авах",divClass:"piece_price2"},
      {UseDate:"3 сар", tolbor:"12000",Bagts:"Багц", Tohooromj:"төхөөрөмж",Avah:"авах",divClass:"piece_price2"},
      {UseDate:"6 сар", tolbor:"20000",Bagts:"Багц", Tohooromj:"төхөөрөмж",Avah:"авах",divClass:"piece_price2"}
  ]
}
//#endregion
//#region Create Bagts
const bagstDataObj = {
    "bag": "bbbbbbbbbbbbbbbbbbbbbbbbbb"
};
//#endregion

//#region Create Sale
const saleDataObj = {
    "sal": "ccccccccccccccccccccccccc"
};
//#endregion
//#region Create Turees
const tureesDataObj = {
    "tur": "ddddddddddddddddddddddddd"
};
//#endregion

//#region Create Tv
const tvDataObj = {
    "tvs": "HIMG/Anime/1.jpg"
};
//#endregion
const home = new Home(homeDataObj);
const bagts = new Bagst(bagstDataObj);
const sale = new Sale(saleDataObj);
const turees = new Turees(tureesDataObj);
const tv = new Tv(tvDataObj);

//Route list
myMain.AddRoute("/","/home", home);
myMain.AddRoute("/", "/Bagts", bagts);
myMain.AddRoute("/", "/Sale", sale);
myMain.AddRoute("/", "/Turees", turees);
myMain.AddRoute("/", "/Tv", tv);

[...document.getElementsByClassName("main-links")].forEach(element => {
    
    element.addEventListener("click", e => {
        e.preventDefault();
        history.pushState(null, "", e.target.href);
        //myMain.OnRoute(e.target.href);
    }
    )
});

window.addEventListener("popstate", e => {
    console.log("navigation occured");
    myMain.OnRoute(document.location.pathname);
});

history.pushState = function()
{
    History.prototype.pushState.apply(history, arguments);
    myMain.OnRoute(document.location.pathname);
}

//myMain.OnRoute(location.pathname);
//myMain.OnRoute("/");
//myMain.OnRoute("/Bagts");
//myMain.OnRoute("/Sale");
//myMain.OnRoute("/Turees");
//myMain.OnRoute("/Tv");
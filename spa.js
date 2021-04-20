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
          <h3>${bor.Bagts}</h3>
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
.Big-Next{margin-left:33%;cursor:pointer;position:absolute;top:48%;width:auto;font-weight:700;font-size:72px}
.Big-Prev{margin-left:-36.5%;position:absolute;top:48%;width:auto;font-weight:700;font-size:72px}
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
        this.data.bagst=new Array();
    }

    renderIMG(IMGS){
      return html`<img src="${IMGS.img}" alt="${IMGS.alt}" title="${IMGS.alt}">`
    }
    Render(){
      const imgs1 = this.data.bagts[0].imgs;
      const imgs2 = this.data.bagts[1].imgs;
      const imgs3 = this.data.bagts[2].imgs;
      const imgs4 = this.data.bagts[3].imgs;
      const imgs5 = this.data.bagts[4].imgs;
      let A = "",B="",C="",D="",E="";
      for(let a of imgs1){
        A+=this.renderIMG(a)
      }
      for(let b of imgs2){
        B+=this.renderIMG(b)
      }
      for(let c of imgs3){
        C+=this.renderIMG(c)
      }
      for(let d of imgs4){
        D+=this.renderIMG(d)
      }
      for(let e of imgs5){
        E+=this.renderIMG(e)
      }
      return html `
      <style>
      @import "https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:wght@300&display=swap";
main button {
    border:rgba(0,0,0,0);
    background-color:rgba(0,0,0,0);
    color:#fff;
    cursor:pointer;
    }
@media only screen and (min-width: 1178px) {
main {
margin:7% 8% 15%;
text-align:center;
font-family:'Open Sans Condensed',sans-serif;
font-size:20px;
}

H1 {
margin-left:7%;
border-bottom:solid;
}

.HIT-Movie h1 {
width:10%;
}

.Anime-Movie h1 {
width:8%;
}

.HBO-Movie h1 {
width:18%;
}

.Huuhed h1 {
width:18%;
}

.Russian h1 {
width:18%;
}

section img {
width:20%;
margin-right:1%;
margin-left:1%;
}

section button {
font-size:30px;
font-weight:700;
}

.Next1 {
display:inline-block;
float:right;
margin-top:10%;
}

.Prev1 {
display:inline-block;
float:left;
margin-top:10%;
}

.Next2 {
display:inline-block;
float:right;
margin-top:10%;
}

.Prev2 {
display:inline-block;
float:left;
margin-top:10%;
}

.Next3 {
display:inline-block;
float:right;
margin-top:10%;
}

.Prev3 {
display:inline-block;
float:left;
margin-top:10%;
}

.Next4 {
display:inline-block;
float:right;
margin-top:10%;
}

.Prev4 {
display:inline-block;
float:left;
margin-top:10%;
}

.Next5 {
display:inline-block;
float:right;
margin-top:10%;
}

.Prev5 {
display:inline-block;
float:left;
margin-top:10%;
}
}

@media only screen and (min-width: 766px) and (max-width: 1178px) {
main {
margin:7% 8% 15% 12%;
text-align:center;
font-family:'Open Sans Condensed',sans-serif;
font-size:20px;
}

H1 {
margin-left:10%;
border-bottom:solid;
}

.HIT-Movie h1 {
width:14%;
}

.Anime-Movie h1 {
width:10%;
}

.HBO-Movie h1 {
width:28%;
}

.Huuhed h1 {
width:25%;
}

.Russian h1 {
width:30%;
}

section img {
width:18%;
margin-right:1%;
margin-left:1%;
}

section button {
font-size:25px;
font-weight:700;
}

.Next1 {
display:inline-block;
float:right;
margin-top:10%;
}

.Prev1 {
display:inline-block;
float:left;
margin-top:10%;
}

.Next2 {
display:inline-block;
float:right;
margin-top:10%;
}

.Prev2 {
display:inline-block;
float:left;
margin-top:10%;
}

.Next3 {
display:inline-block;
float:right;
margin-top:10%;
}

.Prev3 {
display:inline-block;
float:left;
margin-top:10%;
}

.Next4 {
display:inline-block;
float:right;
margin-top:10%;
}

.Prev4 {
display:inline-block;
float:left;
margin-top:10%;
}

.Next5 {
display:inline-block;
float:right;
margin-top:10%;
}

.Prev5 {
display:inline-block;
float:left;
margin-top:10%;
}
}

@media only screen and (min-width:300px) and (max-width:760px) {
.Prev1,.Next1,.Prev2,.Next2,.Prev3,.Next3,.Prev4,.Next4,.Prev5,.Next5 {
display:none;
}

main {
text-align:center;
font-family:'Open Sans Condensed',sans-serif;
font-size:15px;
margin:20% 2% 40%;
}

main img {
width:60%;
}

h1 {
border-bottom:solid;
width:60%;
margin-left:auto;
margin-right:auto;
margin-bottom:.1%;
text-align:left;
}
}
      </style>
      <section class="HIT-Movie">
        <h1>${this.data.bagts[0].title}</h1>
        <a href="LookTv-KinoMedeelel.html">
        ${A}
        </a>
        <button class="Prev1">❮</button>
        <button class="Next1">❯</button>
      </section>
      <section class="Anime-Movie">
        <h1>${this.data.bagts[1].title}</h1>
        <a href="LookTv-KinoMedeelel.html">
          ${B}
        </a>
        <button class="Prev2">❮</button>
        <button class="Next2">❯</button>
      </section>
      <section class="HBO-Movie">
        <h1>${this.data.bagts[2].title}</h1>
        <a href="LookTv-KinoMedeelel.html">
          ${C}
        </a>
        <button class="Prev3">❮</button>
        <button class="Next3">❯</button>
      </section>
      <section class="Huuhed">
        <h1>${this.data.bagts[3].title}</h1>
        <a href="LookTv-KinoMedeelel.html">
          ${D}
        </a>
        <button class="Prev4">❮</button>
        <button class="Next4">❯</button>
      </section>
      <section class="Russian">
        <h1>${this.data.bagts[4].title}</h1>
        <a href="LookTv-KinoMedeelel.html">
          ${E}
        </a>
        <button class="Prev5">❮</button>
        <button class="Next5">❯</button>
      </section>
      `
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
    Round(rounds){
      return html`
      <div>
          <img src="${rounds.src}" alt="${rounds.name}" title="${rounds.name}">
          <p class="NM"><b>Нэр:</b> ${rounds.name}</p>
          <p class="ST" style="font-family: 'Russo One', sans-serif;font-size: 15px;"><b>Эхлэх:</b> ${rounds.start}</p>
          <p class="DU" style="font-family: 'Russo One', sans-serif;font-size: 15px;"><b>Дуусах:</b> ${rounds.end}</p>
          <form action="Төлбөр_төлөх.html">
            <button class="due">${rounds.due}</button>
          </form>
        </div>
      `
    }
    Render(){
      let a="",b="",c="";
      const round1 = this.data.round[0].information;
      const round2 = this.data.round[1].information;
      const round3 = this.data.round[2].information
      for(let A of round1){
        a+=this.Round(A)
      }
      for(let B of round2){
        b+=this.Round(B)
      }
      for(let C of round3){
        c+=this.Round(C)
      }
        return html`
        <style>
        @import url('https://fonts.googleapis.com/css2?family=Russo+One&display=swap');
div{
    display: inline-block;
}

.NM, .ST, .DU{border: 2px cadetblue solid; 
margin: 0% auto 0% auto;
}
.NM b{
    font-family: 'Russo One', sans-serif;
}
.NM{
  font-weight:bolder
}
.ST b{
    font-family: 'Russo One', sans-serif;
    color: blue;
}
.DU b{
    font-family: 'Russo One', sans-serif;
    color: red;
}
.due{
    font-family: 'Russo One', sans-serif;
    color: white;
    background-color: black;
    border: black;
    margin-bottom:5%;
    margin-top:2%;
    transition: border,background-color, color 3s ease-out;
}
.due:hover{
    background-color: white;
    color: black;
    border: white;
}
@media only screen and (min-width:1260px){
    main{
        margin-top: 5%;
        text-align: center;
        margin-bottom: 14%;
    }
    main img{
        width: 220px;
        height: auto;
    }
}
@media only screen and (min-width:760px) and (max-width:1260px)
{
    main{
    margin-top: 5%;
    text-align: center;
    margin-bottom: 20%;
}
    main img{
        width: 180px;
        height: auto;
    }
    .viewdate2{
        display: none;
    }
    .NM, .ST, .DU{
        font-size: 70%;
    }
}
@media only screen and (min-width:320px) and (max-width:760px)
{
    main{
    margin-top: 6%;
    text-align: center;
    margin-bottom: 30%;
}
    main img{
        width: 140px;
        height: auto;
    }
    .viewdate2{
        width:60%;
        height:60%
        
    }
    .NM, .ST, .DU{
        font-size: 70%;
    }
}
        </style>
        <div class="round1">
        ${a}
        </div>
        <div class="round2">
        ${b}
        </div>
        <div class="round3">
        ${c}
        </div>
        `
    }
}
//#endregion
//#region TV Render
class Tv {
    constructor(objData){
        this.data = objData;
    }
    TvRender(ren){
      return html`
      <a href="#">
        <img src="${ren.src}" alt="${ren.name}" title="${ren.name}">
        <p class="name">${ren.name}</p>
      </a>
      `
    }
    DateRender(DateRen){
      return`
      <p class="date-title">${DateRen.Dates}&nbsp;&nbsp;--&nbsp;&nbsp;<b>${DateRen.Sedev}</b></p>`
    }
    Render(){
      //television
      const Tv1=this.data.Tvs[0].tv,Tv2=this.data.Tvs[1].tv,Tv3=this.data.Tvs[2].tv, Tv4=this.data.Tvs[3].tv, Tv5=this.data.Tvs[4].tv,Tv6=this.data.Tvs[5].tv,Tv7=this.data.Tvs[6].tv;
      let A="",B="",C="",D="",E="",F="",G="";
      for(let a of Tv1){
        A+=this.TvRender(a);
      }
      for(let a of Tv2){
        B+=this.TvRender(a)
      }
      for(let a of Tv3){
        C+=this.TvRender(a)
      }
      for(let a of Tv4){
        D+=this.TvRender(a)
      }
      for(let a of Tv5){
        E+=this.TvRender(a)
      }
      for(let a of Tv6){
        F+=this.TvRender(a)
      }
      for(let a of Tv7){
        G+=this.TvRender(a)
      }
      //timeArray
      const I = this.data.time_percentage;
      let Time="";
      for(let b of I){
        Time+=this.DateRender(b)
      }
        return html`
        <style>
            @import "https://fonts.googleapis.com/css2?family=PT+Sans+Caption&display=swap";
        
            main {
            margin-top:6%;
            height:720px
            }

            #Movie_title {
            font-family:'PT Sans Caption',sans-serif;
            font-size:28px;
            width:fit-content;
            margin-left:57px;
            margin-bottom:.4%;
            border-bottom:4px #000 solid
            }

            .Movie_aside {
            top:10%;
            border:5px #6368736b solid;
            width:20%;
            background-image:var(--default-color);
            height:500px;
            overflow-y:scroll;
            overflow-x:hidden
            }

            .Chapt_Tv {
            width:100%;
            text-align:center
            }

            .h2_title {
            font-family:'PT Sans Caption',sans-serif;
            width:fit-content;
            display:inline-block
            }

            .fas {
            color:#33333c8c;
            width:20px;
            transition:color,width 2s
            }

            .fas:hover {
            color:#000;
            width:28px
            }

            .fa-chevron-circle-up {
            }

            .fa-chevron-circle-down {
            display:none
            }

            .Chapt_Tv>a {
            display:block
            }

            .Chapt_Tv>a>img {
            width:120px;
            transition:width
            }

            .Chapt_Tv>a>img:hover {
            width:130px
            }

            .Chapt_Tv>a>p {
            width:39%;
            margin-right:2%;
            margin-top:8%;
            font-family:'PT Sans Caption',sans-serif;
            font-weight:bolder;
            font-size:14px;
            text-align:left;
            float:right
            }

            .Televisiz_epir {
            display:inline-block;
            position:absolute;
            top:0;
            margin-left:25%
            }

            .Tv_title {
            margin-top:100px;
            width:95%
            }

            .Tv_title img {
            width:100px;
            margin-top:2%;
            margin-left:50px
            }

            .active_date {
            display:inline-block;
            float:right;
            width:140px;
            text-align:center;
            margin-top:5%;
            margin-right:5%;
            border-bottom:5px #3cfc3c solid;
            border-top:5px #0d6bf8 solid;
            border-left:5px #ff21da solid;
            border-right:5px #d9ff00 solid
            }

            .dialog-date {
            display:inline-block;
            position:absolute;
            top:10%;
            right:2%;
            border:5px #6368736b solid;
            width:20%;
            background-image:var(--default-color);
            height:500px;
            overflow-y:scroll;
            overflow-x:hidden;
            text-align:center
            }

            .fa-chevron-circle-left {
            margin-left:10%
            }

            .Month_day {
            display:inline-block;
            width:fit-content;
            font-family:'PT Sans Caption',sans-serif;
            font-size:16px;
            font-weight:bolder;
            border-bottom:5px red solid
            }

            .fa-chevron-circle-right {
            }

            .Kino_huviari {
            width:100%;
            margin-right:5%
            }

            .date-title {
            font-weight:bolder;
            text-align: left;
            padding-left: 8%;
            }

            /*Tab page*/
            @media only screen and (min-width:767px) and (max-width:1279px) {
            main {
            margin-top:10%
            }

            .h2_title {
            font-size:16px
            }

            .Chapt_Tv>a {
            display:block
            }

            .Chapt_Tv>a>img {
            width:100px
            }

            .Chapt_Tv>a>img:hover {
            width:110px
            }

            .Chapt_Tv>a>p {
            display:none
            }

            .Televisiz_epir {
            display:inline-block;
            position:absolute;
            top:0;
            width:60%;
            text-align:center
            }

            video {
            width:500px;
            height:300px
            }

            .Tv_title {
            margin-top:100px;
            width:95%
            }

            .Tv_title img {
            width:80px;
            margin-top:2%;
            margin-left:10px
            }

            .active_date {
            width:120px
            }

            .dialog-date {
            float:right;
            top:50%;
            margin-right:6%;
            width:65%;
            height:300px
            }

            .Month_day {
            font-size:18px;
            border-bottom:2px red solid
            }

            .Kino_huviari {
            display:inline-block
            }

            .date-title {
            width:220px;
            border:2px blue solid;
            display:inline-block;
            margin:0;
            text-align:left
            }
            }

            @media only screen and (max-width:767px) {
            main {
            height:400px
            }

            #Movie_title {
            margin-top:520px
            }

            .Movie_aside {
            width:85%;
            height:216px
            }

            .h2_title {
            margin:0;
            border-bottom:solid
            }

            .Chapt_Tv>a>img {
            width:100px
            }

            .Chapt_Tv>a>img:hover {
            width:110px
            }

            .Televisiz_epir {
            margin:auto
            }

            .Tv_title {
            margin-top:38px
            }

            video {
            width:300px;
            height:220px
            }

            .Tv_title img {
            width:80px
            }

            .active_date {
            display:none
            }

            .dialog-date {
            top:55%;
            margin-right:12%;
            width:80%;
            height:150px
            }

            .Month_day {
            border-bottom:3px red solid
            }

            .Kino_huviari {
            width:100%;
            margin-right:5%
            }
            }
        </style>
        <h1 id="Movie_title">${this.data.title}</h1>
        <section class="Movie_aside">
        <div class="${this.data.Tvs[0].class}">
          <h2 class="h2_title undsen">${this.data.Tvs[0].title}</h2>
          <i class="fas fa-chevron-circle-up"></i>
          <i class="fas fa-chevron-circle-down"></i><br>
          ${A}
        </div>
        <div class="${this.data.Tvs[1].class}">
          <h2 class="h2_title bagts">${this.data.Tvs[1].title}</h2>
          <i class="fas fa-chevron-circle-up"></i>
          <i class="fas fa-chevron-circle-down"></i>
          ${B}
        </div>
        
        <div class="${this.data.Tvs[2].class}">
          <h2 class="h2_title gerbul">${this.data.Tvs[2].title}</h2>
          <i class="fas fa-chevron-circle-up"></i>
          <i class="fas fa-chevron-circle-down"></i><br>
             ${C}
        </div>
        <div class="${this.data.Tvs[3].class}">
          <h2 class="h2_title HBO">${this.data.Tvs[3].title}</h2>
          <i class="fas fa-chevron-circle-up"></i>
          <i class="fas fa-chevron-circle-down"></i><br>
          ${D}
        </div>
        <div class="${this.data.Tvs[4].class}">
          <h2 class="h2_title ent">${this.data.Tvs[4].title}</h2>
          <i class="fas fa-chevron-circle-up"></i>
          <i class="fas fa-chevron-circle-down"></i><br>
          ${E}
        </div>
        <div class="${this.data.Tvs[5].class}">
          <h2 class="h2_title sport">${this.data.Tvs[5].title}</h2>
          <i class="fas fa-chevron-circle-up"></i>
          <i class="fas fa-chevron-circle-down"></i><br>
          ${F}
        </div>
        <div class="${this.data.Tvs[6].class}">
          <h2 class="h2_title traffic">${this.data.Tvs[6].title}</h2>
          <i class="fas fa-chevron-circle-up"></i>
          <i class="fas fa-chevron-circle-down"></i>
          ${G}
        </div>
        </section>
          <div class="Televisiz_epir">
            <div class="Tv_title">
              <img src="${this.data.Tvs[0].tv[0].src}" alt="${this.data.Tvs[0].tv[0].name}" title="${this.data.Tvs[0].tv[0].name}">
              <h2 class="active_date">12:00:01</h2>
            </div>
              <video width="660" height="380" controls="" autoplay="" muted="">
                <source src="${this.data.EPIR[0].src}" type="video/mp4">
              </video>
          </div>
          <div class="dialog-date">
          <i class="fas fa-chevron-circle-left"></i>
           <p class="Month_day">${this.data.month}-March-${this.data.day}</p>
           <i class="fas fa-chevron-circle-right"></i>
           <div class="Kino_huviari">
              ${Time}
           </div>
         </div>
        `
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
  "bagts":[
    {"title":"Хит кино",
      "imgs":[
        {"img":"HIMG/Hit/1.jpg","alt":"image-1"},
        {"img":"HIMG/Hit/2.jpg","alt":"image-2"},
        {"img":"HIMG/Hit/3.jpg","alt":"image-3"},
        {"img":"HIMG/Hit/4.jpg","alt":"image-4"}
      ]
    },
    {"title":"Аниме",
        "imgs":[
          {"img":"HIMG/Anime/1.jpg","alt":"image-1"},
          {"img":"HIMG/Anime/2.jpg","alt":"image-2"},
          {"img":"HIMG/Anime/3.jpg","alt":"image-3"},
          {"img":"HIMG/Anime/4.jpg","alt":"image-4"}
        ]
      },
        {"title":"HBO олон ангит",
        "imgs":[
          {"img":"HIMG/Olon-angit/1.jpg","alt":"image-1"},
          {"img":"HIMG/Olon-angit/2.jpg","alt":"image-2"},
          {"img":"HIMG/Olon-angit/3.jpg","alt":"image-3"},
          {"img":"HIMG/Olon-angit/4.jpg","alt":"image-4"}
        ]
      },
        {"title":"Хүүхдийн Кино",
        "imgs":[
          {"img":"HIMG/Child/1.jpg","alt":"image-1"},
          {"img":"HIMG/Child/2.jpg","alt":"image-2"},
          {"img":"HIMG/Child/3.jpg","alt":"image-3"},
          {"img":"HIMG/Child/4.jpg","alt":"image-4"}
        ]
      },
        {"title":"Орос-Европ багц",
        "imgs":[
          {"img":"HIMG/Oros-Europe/1.jpg","alt":"image-1"},
          {"img":"HIMG/Oros-Europe/2.jpg","alt":"image-2"},
          {"img":"HIMG/Oros-Europe/3.jpg","alt":"image-3"},
          {"img":"HIMG/Oros-Europe/4.jpg","alt":"image-4"}
        ]
      }
  ]
};
//#endregion

//#region Create Sale
const saleDataObj = {
    "sal": "ccccccccccccccccccccccccc"
};
//#endregion
//#region Create Turees
const tureesDataObj = {
    "round":[
      {
        "information":[
          {"src":"HIMG/Child/1.jpg","name":"Трансформ","start":"2021/08/08 23:59:59","end":"2021/09/08 23:59:59","due":"Сунгах"},
          {"src":"HIMG/Child/2.jpg","name":"Пороро","start":"2021/08/08 23:59:59","end":"2021/09/08 23:59:59","due":"Сунгах"},
          {"src":"HIMG/Child/6.jpg","name":"Таяо","start":"2021/08/08 23:59:59","end":"2021/09/08 23:59:59","due":"Сунгах"},
          {"src":"HIMG/Child/4.jpg","name":"Ноён Стони","start":"2021/08/08 23:59:59","end":"2021/09/08 23:59:59","due":"Сунгах"},
          {"src":"HIMG/Child/5.jpg","name":"Мөнх-Тунх","start":"2021/08/08 23:59:59","end":"2021/09/08 23:59:59","due":"Сунгах"}
        ]
      },
      {
        "information":[
          {"src":"HIMG/Anime/1.jpg","name":"My Hero","start":"2021/08/08 23:59:59","end":"2021/09/08 23:59:59","due":"Сунгах"},
          {"src":"HIMG/Anime/2.jpg","name":"Япон хүүхэлдэй","start":"2021/08/08 23:59:59","end":"2021/09/08 23:59:59","due":"Сунгах"},
          {"src":"HIMG/Anime/3.jpg","name":"MMO Junkie","start":"2021/08/08 23:59:59","end":"2021/09/08 23:59:59","due":"Сунгах"},
          {"src":"HIMG/Anime/4.jpg","name":"Orange","start":"2021/08/08 23:59:59","end":"2021/09/08 23:59:59","due":"Сунгах"},
          {"src":"HIMG/Anime/5.jpg","name":"Ноён Стони","start":"2021/08/08 23:59:59","end":"2021/09/08 23:59:59","due":"Сунгах"}
        ]
      },
      {
        "information":[
          {"src":"HIMG/Hit/1.jpg","name":"Явуулын гуанз","start":"2021/08/08 23:59:59","end":"2021/09/08 23:59:59","due":"Сунгах"},
          {"src":"HIMG/Hit/2.jpg","name":"Залуу тулаанч","start":"2021/08/08 23:59:59","end":"2021/09/08 23:59:59","due":"Сунгах"},
          {"src":"HIMG/Hit/3.jpg","name":"Цагдаагийн түүх","start":"2021/08/08 23:59:59","end":"2021/09/08 23:59:59","due":"Сунгах"},
          {"src":"HIMG/Hit/4.jpg","name":"Цагдаагийн түүх3","start":"2021/08/08 23:59:59","end":"2021/09/08 23:59:59","due":"Сунгах"},
          {"src":"HIMG/Hit/5.jpg","name":"Үхлийн тоглоом","start":"2021/08/08 23:59:59","end":"2021/09/08 23:59:59","due":"Сунгах"}
        ]
      }
    ]
};
//#endregion

//#region Create Tv
const tvDataObj = {
    title:"Кино суваг",
    Tvs:[
      {class:"Chapt_Tv dialog-National-channel",title:"Үндсэн сувгууд",
      tv:[
        {src:"tv-img/national-channel/1.png",name:"MNB"},
        {src:"tv-img/national-channel/2.png",name:"MNB2"}
      ]},
      {class:"Chapt_Tv dialog-National-package",title:"Үндсэн багц",
      tv:[
        {src:"tv-img/national-package/2.png",name:"TV9"},
        {src:"tv-img/national-package/3.png",name:"ETV"},
        {src:"tv-img/national-package/4.png",name:"Eagle Tv"},
        {src:"tv-img/national-package/6.png",name:"MNBA-sports"},
        {src:"tv-img/national-package/7.png",name:"TV-25"},
        {src:"tv-img/national-package/8.png",name:"UBS-tv"},
        {src:"tv-img/national-package/9.png",name:"TV5"},
        {src:"tv-img/national-package/10.png",name:"VTV"},
        {src:"tv-img/national-package/12.png",name:"Suld-TV"},
        {src:"tv-img/national-package/13.png",name:"NTV"},
        {src:"tv-img/national-package/14.png",name:"OTV"},
        {src:"tv-img/national-package/15.png",name:"C1"},
        {src:"tv-img/national-package/16.png",name:"Channel 11 HD"},
        {src:"tv-img/national-package/17.png",name:"Dream box HD"},
        {src:"tv-img/national-package/18.png",name:"Education TV"},
        {src:"tv-img/national-package/19.png",name:"MNC"},
        {src:"tv-img/national-package/20.png",name:"Royal TV"},
        {src:"tv-img/national-package/21.png",name:"SPS National"},
        {src:"tv-img/national-package/22.png",name:"Star HD"},
        {src:"tv-img/national-package/23.png",name:"SBN TV"},
        {src:"tv-img/national-package/24.png",name:"Bloomberg TV mongolia"},
        {src:"tv-img/national-package/25.png",name:"Эх орон"},
        {src:"tv-img/national-package/26.png",name:"Seven TV"},
        {src:"tv-img/national-package/27.png",name:"Luxe TV"},
        {src:"tv-img/national-package/29.png",name:"УИХ чуулган"},
        {src:"tv-img/national-package/30.png",name:"TV6"},
        {src:"tv-img/national-package/31.jpg",name:"KBS"},
        {src:"tv-img/national-package/32.png",name:"Discoury Science"},
        {src:"tv-img/national-package/33.png",name:"History HD"},
        {src:"tv-img/national-package/34.png",name:"LIFETIME"},
        {src:"tv-img/national-package/35.png",name:"HGTV"},
        {src:"tv-img/national-package/36.png",name:"TRACE HD"},
        {src:"tv-img/national-package/37.png",name:"EURO sport HD"},
        {src:"tv-img/national-package/38.png",name:"DMAX HD"},
        {src:"tv-img/national-package/39.png",name:"Trace Sport Stars"},
        {src:"tv-img/national-package/40.png",name:"CN HD"},
        {src:"tv-img/national-package/41.png",name:"Nickelodeon"},
      ]},
      {class:"Chapt_Tv dialog-National-family-package",title:"Гэр бүл багц",
      tv:[
        {src:"tv-img/family-package/1.png",name:"Natoinal Geographic"},
        {src:"tv-img/family-package/2.png",name:"Asian Food Channel HD"},
        {src:"tv-img/family-package/3.png",name:"MTV Asia HD"},
        {src:"tv-img/family-package/4.png",name:"BBC Lifestyle HD"},
        {src:"tv-img/family-package/5.png",name:"Cbeebies HD"}
      ]},
      {class:"Chapt_Tv dialog-National-HBO-channel",title:"HBO сувгууд",
      tv:[
        {src:"tv-img/HBO-channel/1.png",name:"HBO"},
        {src:"tv-img/HBO-channel/2.png",name:"HBO Signature"},
        {src:"tv-img/HBO-channel/3.png",name:"HBO Hits"},
        {src:"tv-img/HBO-channel/4.png",name:"HBO Family"},
        {src:"tv-img/HBO-channel/5.png",name:"Cinemax"}
      ]},
      {class:"Chapt_Tv dialog-entetainment-package",title:"Энтертайнмент Багц",
      tv:[
        {src:"tv-img/entertainment-package/1.png",name:"Blue Ant Entertainment"},
        {src:"tv-img/entertainment-package/2.png",name:"Blue Ant Extreme"},
        {src:"tv-img/entertainment-package/3.png",name:"BBC Earth HD"},
        {src:"tv-img/entertainment-package/4.png",name:"Outdoor"},
        {src:"tv-img/entertainment-package/5.png",name:"MTV Live"}
      ]},
      {class:"Chapt_Tv diaiog-sport-package",title:"Спорт багц",
      tv:[
        {src:"tv-img/sport-package/1.png", name:"SPS World"},
        {src:"tv-img/sport-package/2.png", name:"SPS Prime"},
        {src:"tv-img/sport-package/3.png", name:"SPS Classic"},
        {src:"tv-img/sport-package/4.png", name:"SPS Fight"}
      ]},
      {class:"Chapt_Tv dialog-Traffic-channel",title:"Traffic-channel",
      tv:[
        {src:"tv-img/traffic-channel/1.png",name:"traffic-channel1"},
        {src:"tv-img/traffic-channel/1.png",name:"traffic-channel2"},
        {src:"tv-img/traffic-channel/1.png",name:"traffic-channel3"},
        {src:"tv-img/traffic-channel/1.png",name:"traffic-channel4"},
        {src:"tv-img/traffic-channel/1.png",name:"traffic-channel5"},
        {src:"tv-img/traffic-channel/1.png",name:"traffic-channel6"},
        {src:"tv-img/traffic-channel/1.png",name:"traffic-channel7"}
      ]},
    ],

    EPIR:[
      {src:"Video/Robocon.mp4"}
    ],
    month:"12", day:"11",
    time_percentage:[
      {Dates:"08:00:00",Sedev:"Өглөөний хөтөлбөр"},
      {Dates:"09:00:00",Sedev:"Хүүхдийн кино"},
      {Dates:"10:00:00",Sedev:"Мэдээ"},
      {Dates:"11:00:00",Sedev:"Теле хичээл"},
      {Dates:"12:00:00",Sedev:"Өдрийн мэндчилгээ"},
      {Dates:"13:00:00",Sedev:"Хүүхдийн кино"},
      {Dates:"14:00:00",Sedev:"Ая дууны мэндчилгээ"},
      {Dates:"15:00:00",Sedev:"Мэдээ"},
      {Dates:"16:00:00",Sedev:"Давталт /УСК/"},
      {Dates:"17:00:00",Sedev:"Зар сурталчилгаа"},
      {Dates:"18:00:00",Sedev:"ОАК"},
      {Dates:"19:00:00",Sedev:"Мэдээ"},
      {Dates:"20:00:00",Sedev:"Зар сурталчилгаа"},
      {Dates:"21:00:00",Sedev:"Нэвтрүүлэг"},
      {Dates:"22:00:00",Sedev:"УСК"},
      {Dates:"23:00:00",Sedev:"Дууны цаг"}
    ]
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
myMain.OnRoute(location.pathname);
myMain.OnRoute("/home");
//myMain.OnRoute("/Bagts");
//myMain.OnRoute("/Sale");
//myMain.OnRoute("/Turees");
//myMain.OnRoute("/Tv");

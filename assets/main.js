(function(){
"use strict";
var WA="https://wa.me/916359693055?text=";
var b=document.querySelector(".burger"),m=document.getElementById("menu");
if(b&&m){b.addEventListener("click",function(){var o=m.classList.toggle("open");b.setAttribute("aria-expanded",o)});
 m.addEventListener("click",function(ev){if(ev.target.closest("a")){m.classList.remove("open");b.setAttribute("aria-expanded","false");var d=m.querySelector("details");if(d)d.open=false}})}
document.addEventListener("keydown",function(ev){if(ev.key==="Escape"){if(m)m.classList.remove("open");var d=document.querySelector(".msol");if(d)d.open=false}});
document.addEventListener("click",function(ev){var d=document.querySelector(".msol");if(d&&d.open&&!ev.target.closest(".msol"))d.open=false});
document.querySelectorAll("[data-gap]").forEach(function(f){
 var a=f.querySelector("[data-go]"),prod=f.getAttribute("data-gap");
 function vals(n){return [].slice.call(f.querySelectorAll('input[name="'+n+'"]:checked')).map(function(i){return i.value})}
 function upd(){var g=vals("gap"),s=vals("sys"),note=f.querySelector('[name="note"]').value.trim(),nm=f.querySelector('[name="nm"]').value.trim();
  var t="Hello Infooware, I would like to discuss "+prod+" for my business.";
  if(g.length)t+="\nGaps we see today: "+g.join("; ");
  if(s.length)t+="\nSystems we use: "+s.join(", ");
  if(note)t+="\nMore context: "+note;
  if(nm)t+="\nName and company: "+nm;
  a.href=WA+encodeURIComponent(t)}
 f.addEventListener("input",upd);f.addEventListener("change",upd);f.addEventListener("submit",function(ev){ev.preventDefault()});upd()});
var cf=document.getElementById("cform");
if(cf){var go=document.getElementById("c-go");function cu(){var g=function(id){return document.getElementById(id).value.trim()};
 var t="Hello Infooware,\nName: "+(g("c-name")||"-")+"\nCompany: "+(g("c-co")||"-")+"\nSolution: "+(g("c-sol")||"Not sure yet")+"\nRegion: "+g("c-reg")+"\nWhat we want to improve: "+(g("c-msg")||"-");go.href=WA+encodeURIComponent(t)}
 cf.addEventListener("input",cu);cf.addEventListener("change",cu);cf.addEventListener("submit",function(ev){ev.preventDefault()});cu()}
})();

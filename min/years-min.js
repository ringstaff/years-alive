$(document).ready(function(){function r(r){var a=[];r||(r=1);for(var t=0;r>t;t++){var e=2e3,o=1900,n=Math.floor(Math.random()*(e-o+1))+o,h=Math.floor(Math.random()*(e-n+1))+n;a.push({birthYear:n,deathYear:h})}return a}var a=100,t=r(a),e={};t.forEach(function(r){for(var a=r.birthYear;a<=r.deathYear;a++)e[a]||(e[a]=0),e[a]++});var o=[];for(var n in e)o.push([n,e[n]]);o.sort(function(r,a){return r[1]-a[1]});for(var h=o[o.length-1][1],f=o.length-1,i="";o[f][1]===h;)i&&(i+=", "),i+=o[f][0],f--;$("#holder").text("Year(s) with most people alive ( "+h+" people ): "+i)});
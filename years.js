$(document).ready( function() {

  function generatePeople(number) {

    console.log('generate people');
    //list of people to return
    var people = [];

    //generate 1 person if no value given
    if(!number) {
      number = 1;
    }

    for(var i = 0; i < number; i++) {
      var max = 2000;
      var min = 1900;

      var birth = Math.floor(Math.random() * (max - min + 1)) + min;
      var death = Math.floor(Math.random() * (max - birth + 1)) + birth;

      people.push({
        birthYear: birth,
        deathYear: death
      });
    }


    return people;
  }

  var peopleNumber = 10;
  var peeps = generatePeople(peopleNumber);

  /*
  * dictionary to hold all years from 1900-2000 in first column
  * number of people alive in second column

  */


  var allYears = {};

  var tempList = [];

  peeps.forEach(function(person) {

    for(var year = person.birthYear; year <= person.deathYear; year++) {

      //init value to 0 if undefined
      if(!allYears[year]) {
        allYears[year] = 0;
      }

      allYears[year]++;
    }

  });

  var sortable = [];

  for(var year in allYears) {
    sortable.push([year, allYears[year]]);
  }

  sortable.sort(function(a, b) {
    return a[1] - b[1];
  });

  var mostAlive = sortable[sortable.length - 1][1];
  var j = sortable.length - 1;

  var yearsText = "";
  while(sortable[j][1] === mostAlive) {
    yearsText += " " + sortable[j][0];
    j--;
  }

  $('#holder').text("Year(s) with most (" + mostAlive + ") alive: " + yearsText);
});

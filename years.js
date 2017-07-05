$(document).ready( function() {

  /**
  * function which generates a list of people with birth and death years
  * @param {Number} n - number of people to generate
  * @return {Array} array of objects containing birthYear and deathYear values
  */
  function generatePeople(number) {
    //list of people to return
    var people = [];

    //generate 1 person if no value given
    if(!number) {
      number = 1;
    }

    for(var i = 0; i < number; i++) {
      var max = 2000;
      var min = 1900;

      //pick random birth and death years
      var birth = Math.floor(Math.random() * (max - min + 1)) + min;
      var death = Math.floor(Math.random() * (max - birth + 1)) + birth;

      people.push({
        birthYear: birth,
        deathYear: death
      });
    }

    return people;
  }

  var peopleNumber = 100;
  var peeps = generatePeople(peopleNumber);

  /*
  * object to hold number of people alive by year
  *
  * key: year
  * value: number of people alive
  */
  var allYears = {};

  //iterate through all people
  peeps.forEach(function(person) {
    //for each year this person is alive, increment that year
    for(var year = person.birthYear; year <= person.deathYear; year++) {
      //init value to 0 if undefined
      if(!allYears[year]) {
        allYears[year] = 0;
      }

      //increment value for this year
      allYears[year]++;
    }
  });

  //array to hold copy of sorted allYears
  var sortable = [];

  for(var year in allYears) {
    sortable.push([year, allYears[year]]);
  }

  //sort array by second column (people alive)
  sortable.sort(function(a, b) {
    return a[1] - b[1];
  });

  //most people alive value will be last in the array after sorting
  var mostAlive = sortable[sortable.length - 1][1];
  var pointer = sortable.length - 1;
  var yearsText = "";

  //get every year which had the most people alive
  while(sortable[pointer][1] === mostAlive) {
    //format if multiple years
    if(yearsText) {
      yearsText += ", ";
    }
    
    yearsText += sortable[pointer][0];
    pointer--;
  }

  $('#holder').text("Year(s) with most people alive ( " + mostAlive + " people ): " + yearsText);
});

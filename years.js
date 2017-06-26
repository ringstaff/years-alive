
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

    var birth = Math.floor(Math.random() * (max - min +1)) + min;
    var death = Math.floor(Math.random() * (max - min +1)) + min;
    
    people.push({
      birth: birth,
      death: death
    });
  }

  
  return people;
}

var peeps = generatePeople(10);

var aliveByYear = [];

//dictionary to hold all years from 1900-2000 in first column
//number of people alive in second column
var allYears = [][0];


peeps.forEach(function(person) {

  for(var year = person.birthYear; year <= person.deathYear; year++) {
    allYears[year]++;
  }
  
});

var text  = '';

for(var year = 1900; year <= 2000; year++) {
  text += ' ' + allYears[year] + ' ';
}

$('#list').text("heeeeeeeey");

$('#list').remove();


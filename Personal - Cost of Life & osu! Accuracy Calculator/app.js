var main = function() {

  function displayMoney() {
    $('.resultGrocery').text('$' + ($('.textGrocery').val() *100 *4).toFixed(2));  
    $('.resultEatingOut').text('$' + ($('.textEatingOut').val() *20 *4).toFixed(2));    
    $('.resultMedicine').text('$' + ($('.textMedicine').val() *1).toFixed(2));
    $('.resultSnacks').text('$' + ($('.textSnacks').val() *5 *4).toFixed(2));
    $('.resultAlcohol').text('$' + ($('.textAlcohol').val() *10 *4).toFixed(2));    

    $('.resultLaundry').text('$' + ($('.textLaundry').val() *2 *4).toFixed(2));
    $('.resultTransportation').text('$' + ($('.textTransportation').val() *5 *4).toFixed(2));
    $('.resultPersonal').text('$' + ($('.textPersonal').val() *20 *4).toFixed(2));

    $('.resultUtility').text('$' + ($('.textUtility').val() *4).toFixed(2));
    $('.resultPhone').text('$' + ($('.textPhone').val() *4).toFixed(2));
    $('.resultInternet').text('$' + ($('.textInternet').val() *4).toFixed(2));
    $('.resultMembership').text('$' + ($('.textMembership').val() *4).toFixed(2));

    $('.resultCost').text('$' + ($('.textCost').val() *1).toFixed(2));
    $('.resultMaintenance').text('$' + ($('.textMaintenance').val() *1).toFixed(2));
    $('.resultFurnitures').text('$' + ($('.textFurnitures').val() *1).toFixed(2));
    $('.resultAppliances').text('$' + ($('.textAppliances').val() *1).toFixed(2));

    $('.resultRegular').text('$' + (4 /$('.textRegular').val() *30 *$('.copiesRegular').val()).toFixed(2));
    $('.resultSpecial').text('$' + (4 /$('.textSpecial').val() *60 *$('.copiesSpecial').val()).toFixed(2));

    $('.resultMovies').text('$' + ($('.textMovies').val() /3 *15).toFixed(2));
    $('.resultAmusement').text('$' + ($('.textAmusement').val() /3 *40).toFixed(2));
    $('.resultTravel').text('$' + ($('.textTravel').val() /3 *1000).toFixed(2));
    $('.resultFestivals').text('$' + ($('.textFestivals').val() /3 *25).toFixed(2));
    $('.resultMuseums').text('$' + ($('.textMuseums').val() /3 *15).toFixed(2));
    $('.resultSports').text('$' + ($('.textSports').val() /3 *80).toFixed(2));

    $('.resultPens').text('$' + (4 /$('.textPens').val() *3 *$('.copiesPens').val()).toFixed(2));
    $('.resultTextbooks').text('$' + (4 /$('.textTextbooks').val() *80 *$('.copiesTextbooks').val()).toFixed(2));
    $('.resultNotebooks').text('$' + (4 /$('.textNotebooks').val() *3 *$('.copiesNotebooks').val()).toFixed(2));
    $('.resultCalculator').text('$' + (4 /$('.textCalculator').val() *10 *$('.copiesCalculator').val()).toFixed(2));
    $('.resultBinders').text('$' + (4 /$('.textBinders').val() *8 *$('.copiesBinders').val()).toFixed(2));
    $('.resultPaper').text('$' + (4 /$('.textPaper').val() *2 *$('.copiesPaper').val()).toFixed(2));

    $('.resultDentist').text('$' + ($('.textDentist').val() *2 /3).toFixed(2));
    $('.resultOptometrist').text('$' + ($('.textOptometrist').val() *1 /3).toFixed(2));

    var sum = 0; 

    var sumArray = [$('.textGrocery').val() *100 *4
      , $('.textEatingOut').val() *20 *4
      , $('.textMedicine').val() *1
      , $('.textSnacks').val() *5 *4
      , $('.textAlcohol').val() *10 *4

      , $('.textLaundry').val() *2 *4
      , $('.textTransportation').val() *5 *4
      , $('.textPersonal').val() *20 *4

      , $('.textUtility').val() *4
      , $('.textPhone').val() *4
      , $('.textInternet').val() *4
      , $('.textMembership').val() *4

      , $('.textCost').val() *1
      , $('.textMaintenance').val() *1
      , $('.textFurnitures').val() *1
      , $('.textAppliances').val() *1

      , 4 /$('.textRegular').val() *30 *$('.copiesRegular').val()
      , 4 /$('.textSpecial').val() *60 *$('.copiesSpecial').val()

      , $('.textMovies').val() /3 *15
      , $('.textAmusement').val() /3 *40
      , $('.textTravel').val() /3 *1000
      , $('.textFestivals').val() /3 *25
      , $('.textMuseums').val() /3 *15
      , $('.textSports').val() /3 *80

      , 4 /$('.textPens').val() *3 *$('.copiesPens').val()
      , 4 /$('.textTextbooks').val() *80 *$('.copiesTextbooks').val()
      , 4 /$('.textNotebooks').val() *3 *$('.copiesNotebooks').val()
      , 4 /$('.textCalculator').val() *10 *$('.copiesCalculator').val()
      , 4 /$('.textBinders').val() *8 *$('.copiesBinders').val()
      , 4 /$('.textPaper').val() *2 *$('.copiesPaper').val()

      , $('.textDentist').val() *2 /3
      , $('.textOptometrist').val() *1 /3];

    for (var i = 0; i < sumArray.length; i++) {
      if (isNaN(sumArray[i]) ===  false) {
        sum = sum + sumArray[i];
      }
    }
    
    sum = sum.toFixed(2);

    $('.total').text('Total cost of life for 4 months: $' + sum);
  }

  function displayAcc() {
    var totalObjects = $('.textCircles').val() *1 + $('.textSliders').val() *1 + $('.textSpinners').val() *1;
    var accObjects = $('.text300').val() *1 + $('.text100').val()*1 + $('.text50').val() *1 + $('.textX').val() *1;
    var accCount = $('.text300').val() *6 + $('.text100').val() *2 + $('.text50').val() *1;
    var accuracy = (accCount / (totalObjects *6) * 100);
    var accuracyFixed = accuracy.toFixed(2);

    if ($('.text300').val() * 1 === totalObjects * 1) {
      var grade = 'SS';
    } 
    else if (($('.text300').val() / totalObjects * 100) > 90 && $('.text50').val() / totalObjects * 100 < 1 && $('.textX').val() < 1) {
      var grade = 'S';
    }
    else if ((($('.text300').val() / totalObjects * 100) > 80 && $('.textX').val() < 1) || ($('.text300').val() / totalObjects * 100) > 90) {
      var grade = 'A';
    }
    else if ((($('.text300').val() / totalObjects * 100) > 70 && $('.textX').val() < 1) || ($('.text300').val() / totalObjects * 100) > 80) {
      var grade = 'B';
    }
    else if (($('.text300').val() / totalObjects * 100) > 60) {
      var grade = 'C';
    }
    else {
      var grade = 'D';
    }

    if (accObjects > totalObjects) {
      $('.accResultNum').text('You clicked more than given?');
      $('.accImage').attr('width', 270);
      $('.accImage').attr('height', 270);
      var grade = 'Error';
    }
    else if (accObjects < totalObjects) {
      $('.accResultNum').text('You clicked less than given?');
      $('.accImage').attr('width', 270);
      $('.accImage').attr('height', 270);
      var grade = 'Error';
    }
    else {
      $('.accResultNum').text(accuracyFixed + '%');      
      $('.accImage').attr('width', 270);
      $('.accImage').attr('height', 351);
    }

    $('.accImage').attr('src', grade + '.png');
  }

  $('.userInputDiv').keyup(function () {
    displayMoney();    
  });

  $('.calculateAcc').click(function () {
    displayAcc();
  });

}

$(document).ready(main);
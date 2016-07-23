    var csu = 0;
    var cityId = 0;
    var monthsThisYear = 11;
    var residentsCount = 0;
    var residentsTotal = 0;
    var cityName = "";
  $( function() {
    $("input[name=url]").autocomplete({
        source: data,
        minLength: 3,
        select: function (event, ui) {
          
          csu = ui.item.csu;
          residentsTotal = ui.item.total;
          residentsCount = residentsTotal;
          cityName = ui.item.label;
          calculate();
        }
    }).data("autocomplete")._renderItem = function(ul, item) {
        return $("<li>").data("item.autocomplete", item).append("<a>" + item + "</a>").appendTo(ul);
        document.getElementById("price").innerHTML = item.id;
    };

});


// get city ID
function readCityId() {
  cityId = document.getElementById("orderInList").selectedIndex;
  csu = data[cityId]['csu'];
  //document.getElementById("votes").innerHTML = cityId;
  calculate();
}

// calculate how many months to be paid
function readMonths() {
  monthsThisYear = document.getElementById("dateOfSignup").selectedIndex;
  monthsThisYear = 12 - monthsThisYear - 1;
  //document.getElementById("ccc").innerHTML = monthsThisYear;
  calculate();
}

// calculate final results
function calculate() {
  var isRecounted = 0;
  var showInfo = 0;
  if (monthsThisYear != -1) {
    if ( cityName.search("Brno-") != -1) {
      isRecounted = 1;
      if (residentsTotal/2 == residentsCount/2) {
        residentsTotal /= 2;
      }
    } else if (cityName.search("Praha") != -1 || cityName.search("Opava") != -1 || cityName.search("Pardubice") != -1 ||
            cityName.search("Plzeň") != -1 || cityName.search("Ústí nad Labem") != -1) {
      isRecounted = 1;
    } 

    if (cityName == "Brno") {
      showInfo = 1;
    }

    if (isRecounted == 0) {
      document.getElementById("residents").innerHTML = Math.ceil(residentsTotal);
    } else {
      var text = "";

      if (showInfo == 1) {
        text = Math.ceil(residentsTotal) + ' (Přepočet z celkových ' + residentsCount + ' obyvatel. <strong>Pozor! Nesníženo</strong> o možný souběh členství statutárního města a MČ.)';
      } else {
        text = Math.ceil(residentsTotal) + ' (Přepočet z celkových ' + residentsCount + ' obyvatel.)';
      }
      document.getElementById("residents").innerHTML = text;
    }
    document.getElementById("votes").innerHTML = Math.round(Math.sqrt(residentsTotal));
    if (csu == 582786 || csu == 550973 || csu == 599735 || csu == 561380 || csu == 596230 || csu == 539597 || csu == 500143 || csu == 539139) {
      document.getElementById("price").innerHTML = Math.round(residentsTotal * 1.5) + ' Kč (zakládající člen. Vklad = celoroční příspěvek).';
    } else {
      document.getElementById("price").innerHTML = Math.round((residentsTotal * 1.5) / 12 * monthsThisYear) + ' Kč';
    }
    document.getElementById("priceNextYear").innerHTML = Math.round((residentsTotal * 1.5));
  }
}
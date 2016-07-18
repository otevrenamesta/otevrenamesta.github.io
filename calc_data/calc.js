    var csu = 0;
    var cityId = 0;
    var monthsThisYear = 11;
    var residentsTotal = 0;
    var cityName = "";
  $( function() {
    $("input[name=url]").autocomplete({
        source: data,
        minLength: 3,
        select: function (event, ui) {
          
          csu = ui.item.csu;
          residentsTotal = ui.item.total;
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
  if (monthsThisYear != -1) {
    if ( cityName.search("Brno-") != -1) {
      residentsTotal /= 2;
    }

    document.getElementById("residents").innerHTML = residentsTotal;
    document.getElementById("votes").innerHTML = Math.round(Math.sqrt(residentsTotal));
    if (csu == 582786 || csu == 550973 || csu == 599735 || csu == 561380 || csu == 595462 || csu == 539597 || csu == 500143) {
      document.getElementById("price").innerHTML = (residentsTotal * 1.5);
    } else {
      document.getElementById("price").innerHTML = (residentsTotal * 1.5) / 12 * monthsThisYear;
    }
    document.getElementById("priceNextYear").innerHTML = (residentsTotal * 1.5);
  }
}
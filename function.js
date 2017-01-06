function processData(allText) {
    var record_num = 3;  // or however many elements there are in each row
    var allTextLines = allText.split(/\r\n|\n/);
    var table = [];

    for (i=0; i< allTextLines.length; i++) {
    	var row = allTextLines[i].split(',');
    	table.push(row);
    }
    return table   
}


function findName(table,id) {
	for (i= 0; i< table.length; i++) {
		if (table[i][1].slice(1,-1) === id) {
			return table[i][0].slice(1,-1)
		}
	}
}

function findClass(table,id) {
	for (i= 0; i< table.length; i++) {
		if (table[i][1].slice(1,-1) === id) {
			return table[i][2].slice(1,-1)
		}
	}
}

var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

var HttpClient = function() {
    this.get = function(aUrl, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function() { 
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                aCallback(anHttpRequest.responseText);
        }

        anHttpRequest.open( "GET", aUrl, true );            
        anHttpRequest.send( null );
    }
};

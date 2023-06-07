
// Used for setInterval at $(".buttonHighlight").on("click", ...)
let timer;

// For comparisons of priceData between API-fetches
let previousDataTemplate = {};

//Set darkTheme | brightTheme
currentTheme = "brightTheme";

$(document).ready(function() {
    
    /*$.get("avalanche.html", function(avalancheHTML) {
        $(".avalanche_container").html(avalancheHTML);
    })*/
    $(".themeSensitive").addClass(currentTheme);
    $(".button").addClass("brightThemeButtonHighlight");
    $(".modal").hide();
    getOracles();
    
})

function getOracles() {
  oracleData = [
	  {
		"name": "01node",
		"address": "0xCF4Be57aA078Dc7568C631BE7A73adc1cdA992F8",
		"imagePath": "/01node.png"
	  },
	  {
		"address": "0x5a8216a9c47ee2e8df1c874252fdee467215c25b",
		"imagePath": "/alphachain.png",
		"name": "Alpha Chain"
	  },
	  {
		"address": "0x57cd4848b12469618b689163f507817940acca02",
		"imagePath": "/blockdeamon.png",
		"name": "Blockdaemon"
	  },
	  {
		"address": "0x7663c5790e1ebf04197245d541279d13f3c2f362",
		"imagePath": "/blocksizecapital.png",
		"name": "Blocksize Capital"
	  },
	  {
		"address": "0xc74ce67bfc623c803d48afc74a09a6ff6b599003",
		"imagePath": "/chainlayer.png",
		"name": "Chainlayer"
	  },
	  {
		"address": "0xb976d01275b809333e3efd76d1d31fe9264466d0",
		"imagePath": "/dextrac.png",
		"name": "DexTrac"
	  },
	  {
		"address": "0x5565b5362ff9f468ba2f144f38b87187c9a010a8",
		"imagePath": "/easy2stake.png",
		"name": "Easy 2 stake"
	  },
	  {
		"address": "0x218b5a7861dbf368d09a84e0dbff6c6ddbf99db8",
		"imagePath": "/fiews.png",
		"name": "Fiews"
	  },
	  {
		"address": "0xedbed9f5dea03dd0ec484577c41502af68b7c46a",
		"imagePath": "/figmentnetworks.png",
		"name": "Figment Networks"
	  },
	  {
		"address": "0x2a4a7afa40a9d03b425752fb4cfd5f0ff5b3964c",
		"imagePath": "/frameworkVentures.png",
		"name": "Framework Ventures"
	  },
	  {
		"address": "0x982fa4d5f5c8c0063493abe58967ca3b7639f10f",
		"imagePath": "/infinitystones.png",
		"name": "Infinity Stones"
	  },
	  {
		"address": "0xf16e77a989529aa4c58318acee8a1548df3fccc1",
		"imagePath": "/kytzu.png",
		"name": "Kytzu"
	  },
	  {
		"address": "0x3c4ad65f5b4884397e1f09596c7ac7f8f95b3ff3",
		"imagePath": "/linkforest.png",
		"name": "LinkForest"
	  },
	  {
		"address": "0xcc29be4ca92d4ecc43c8451fba94c200b83991f6",
		"imagePath": "/linkpool.png",
		"name": "LinkPool"
	  },
	  {
		"address": "0x686bec83b59f8b23a6129f03550a3aad245a543c",
		"imagePath": "/linkriver.png",
		"name": "LinkRiver"
	  },
	  {
		"address": "0xf34ac04a28f7cb5324a167c96b24ade9c742b44f",
		"imagePath": "/mycelium.png",
		"name": "Mycelium"
	  },
	  {
		"address": "0x9cfab1513ffa293e7023159b3c7a4c984b6a3480",
		"imagePath": "/newRoadNetwork.png",
		"name": "Newroad Network"
	  },
	  {
		"address": "0x632f869a26ab4da58e2da476ee74800f2bae060a",
		"imagePath": "/northwestnodes.png",
		"name": "NorthWest Nodes"
	  },
	  {
		"address": "0xf07131f578a5f708ae2ccb9faf98458099e0ffb4",
		"imagePath": "/omniscience.png",
		"name": "Omniscience"
	  },
	  {
		"address": "0x8f3ab0e87b70a57bd4980111a99a1b2c4b8334f4",
		"imagePath": "/p2porg.png",
		"name": "P2P.org"
	  },
	  {
		"address": "0x8b1d49a93a84b5da0917a1ed42d8a3e191c28524",
		"imagePath": "/prophet.png",
		"name": "Prophet"
	  },
	  {
		"address": "0x61317c73d0225b2e37140fb9664d607b450613c6",
		"imagePath": "/symplyvc.png",
		"name": "Simply VC"
	  },
	  {
		"address": "0x7bfb89db2d7217c57c3ad3d4b55826efd17dc2e9",
		"imagePath": "/snz.png",
		"name": "SNZPool"
	  },
	  {
		"address": "0xfa0e4f48a369bb3ecbcee0b5119379ea8d1bcf29",
		"imagePath": "/stakefish.png",
		"name": "stake.fish"
	  },
	  {
		"address": "0x43793ee58e0a3d920e3e4a115a9fa07dc4b09715",
		"imagePath": "/stakingfacilities.png",
		"name": "Staking Facilities"
	  },
	  {
		"address": "0x0312ea121df0a323ff535b753172736cc9d53d13",
		"imagePath": "/syncnode.png",
		"name": "SyncNode"
	  },
	  {
		"address": "0xddeb598fe902a13cc523aaff5240e9988edce170",
		"imagePath": "/telekom.png",
		"name": "T-Systems"
	  },
	  {
		"address": "0xc4b732fd121f2f3783a9ac2a6c62fd535fd13fda",
		"imagePath": "/validationCloud.png",
		"name": "Validation Cloud"
	  },
	  {
		"address": "0x5a6fcc02d8c50ea58a22115a7c4608b723030016",
		"imagePath": "/wetez.png",
		"name": "Wetez"
	  }
	  ];
  

	  // Open the oracleDataTable-tag with two empty headers. 
	  // We don't need to put text into the <th> because data is self-explanatory
  	fields =  "<table class='oraclesTable'>",
                " <th></th>",
                " <th></th>";
           
  	oracleData.forEach(element => {
    fields += ["<tr>",
            ` <td class='tableLeftAligned ${currentTheme}'>${element.name}</td>`,
            "   <td>",
            `     <a target="_blank" href="https://etherscan.io/address/${element.address}">${element.address}`,
            "   </td>",
            " </tr>"].join("\n");
  });
  
    fields += "</table>"
    //$("#oraclesContainer").html(fields);
	$(".ethDataResponseField").html(fields);
    
}
  
// A not quite D.R.Y. way of a darkTheme/brightTheme-switching. Refactor this:
  $(".themeSwitchButton").on("click", function() {
    currentTheme = currentTheme === "brightTheme" ? "darkTheme" : "brightTheme";

    if(currentTheme === "darkTheme") {
      $(".themeSwitchButton").html(`<i class='fa fa-moon-o' aria-hidden='true'></i>`);
      $(".themeSensitive").removeClass("brightTheme");
      $(".themeSensitive").addClass("darkTheme");
      $(".button").addClass("darkThemeButtonHighlight");
      $(".button").removeClass("brightThemeButtonHighlight");
      
    } else  {
      $(".themeSwitchButton").html(`<i class='fa fa-sun-o' aria-hidden='true'></i>`);
      $(".themeSensitive").removeClass("darkTheme");
      $(".themeSensitive").addClass("brightTheme");
      $(".button").removeClass("darkThemeButtonHighlight");
      $(".button").addClass("brightThemeButtonHighlight");      
    }
  })


  function createTableRow(key_of_pricedata, value_of_pricetata) {
	
    let cssClass = "dataEntry";
    previousValue = previousDataTemplate[key_of_pricedata]
    if(!isNaN(value_of_pricetata) && value_of_pricetata > previousValue) {
      cssClass = "greenFade";
    } else if(!isNaN(value_of_pricetata) && value_of_pricetata < previousValue) {
      cssClass = "redFade";
    }  else {
        cssClass = "whiteFade";
    }
    
    previousDataTemplate[key_of_pricedata] = value_of_pricetata;
    return [
      "<tr>",
        `<td class="${cssClass} ${currentTheme} tableKey">${key_of_pricedata}</td>`,
        `<td class="${cssClass} ${currentTheme} tableValue">${value_of_pricetata}</td>`,
      "</tr>"].join("\n")
    
  }

  function fetchPriceData() {
    $(".modalTitle").html(currencySymbol);
    fields = [
		"<div class='priceDataWrapper'>",
      		`<table class='priceTable ${currentTheme}'>`,
      		" <th></th>",
      		" <th></th>"
    ].join("\n")

    $.ajax({
      url: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${currencySymbol}&tsyms=USD`,
      complete: function (result) {
        JSONResponse = JSON.parse(result.responseText);
        priceData = JSONResponse.RAW[currencySymbol].USD;
        count = 0
        jQuery.each(priceData, function(i,j) {
			// limit the verbosity by adding a hardcap for the number of table rows.
			// TODO: make the table scrollable
			if (count++ <= 35) {
          		fields += createTableRow(i,j);
			}
        })

        fields += "</table>" // Enclosing .priceTable
		fields += "</div>"; // Enclosing .priceDataWrapper
        $(".ethDataResponseField").html(fields);
        
        }, error: function(error) {
          console.error(error);
        }
    });
  }
  
  $(".buttonHighlight").on("click", function() {
    currencySymbol = $(this).attr('id');
    fetchPriceData(currencySymbol);
    
    $(".modal").show();
    timer = setInterval(fetchPriceData, 2000);
})

function fetchTop24() {
  let winnersHTML = `<div class='FlowContainer themeSensitive ${currentTheme}'>`;

  $.ajax({
    url: `https://min-api.cryptocompare.com/data/top/totalvolfull?limit=33&tsym=USD`,
    complete: function(result) {
      winners = JSON.parse(result.responseText).Data;
      
      jQuery.each(winners, function(counter) {
        winnersHTML += [
          `<div class="winnerButtonContainer">`,
          ` <div class="winnerButton">${winners[counter].CoinInfo.Name}</div>`,
          ` <div class="winnerButtonMeta">${winners[counter].DISPLAY.USD.VOLUMEDAY}</div>`,
          `</div>`
        ].join("\n");
      });

      winnersHTML += "</div>";
      $(".ethDataResponseField").html(winnersHTML);
    }
  })
}

$(".toplist24h").on("click", function() {
  fetchTop24();
  $(".modalTitle").html("<h1>Winners 24h</h1>");
  $(".modal").show();
});

$(".closeButton").on("click", function() {
  $(".modal").hide();
  $(".ethDataResponseField").html("");
  clearInterval(timer);
  previousDataTemplate = {};
  cssClass = "";
})    

  function ethToWei(value) { return (value * 1e18).toFixed(18) }
  function weiToGwei(value) { return (value / 1e9).toFixed(18) }
  function gweiToWei(value) { return (value * 1e9).toFixed(18)}
  function weiToEth(value) { return (value / 1e18).toFixed(18); }
  function decToHex(value) { return value.toString(16); }
  function hexToDec(value) {
    if (value.includes("0x")) {
        hexvalue = value.split("0x")[1]
          return parseInt(hexvalue , 16);
    } else { return parseInt(value, 16); }
  }


  function convert(from) {
    const Input = document.getElementById(from);
    const Amount = parseFloat(Input.value);
  
    if (from === "eth") {
        document.getElementById('wei').value = ethToWei(Amount);
        document.getElementById('gwei').value = weiToGwei(ethToWei(Amount));
    } else if (from === "wei") {
      document.getElementById('eth').value = weiToEth(Amount);
      document.getElementById('gwei').value = weiToGwei(Amount);
    } else if (from === "gwei") {
      document.getElementById('eth').value = gweiToWei(weiToEth(Amount));
      document.getElementById('wei').value = weiToEth(Amount);
    }
	else if (from === "decimal") {
      document.getElementById('hex').value = "0x" + decToHex(Amount);
    } else if (from === "hex") {
      data = document.getElementById('hex').value;
      const decAmount = hexToDec(data);
      document.getElementById('decimal').value = decAmount;
  }
  }

  
  //<h1>Toplist by 24H Volume Full Data</h1>
  //https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD

  //Latest News Articles
  //https://min-api.cryptocompare.com/data/v2/news/?lang=EN

  //Instrument Latest Tick
  //https://data-api.cryptocompare.com/futures/v1/latest/tick?market=kraken&instruments=BTC-USD-INVERSE-PERPETUAL

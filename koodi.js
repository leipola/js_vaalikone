var ehdokkaat = [
	{
		laji: "puhis",
		nimi: "Ehdokas Yksi",
		lyhenne: "E1",
		perustelut: ["ehdottomasti kaksi", "ehdottomasti kaksi", "ehdottomasti kolme", "ehdottomasti kolme", "ehdottomasti kolme"],
		vastaukset: [2, 2, 3, 3, 3],
		osumaprosentti: 0,
	},
	{
		laji: "varapuhis",
		nimi: "Ehdokas Kaksi",
		lyhenne: "E2",
		perustelut: ["sanon kolme", "sanon kolme", "sanon kolme", "sanon kolme", "sanon kolme"],
		vastaukset: [3, 3, 3, 3, 3],
		osumaprosentti: 0,
	},
	{
		laji: "puolsiht",
		nimi: "Ehdokas Kolme",
		lyhenne: "E3",
		perustelut: ["sanon viisi", "kolmonen sanoo viisi", "tietenkin neljä", "tietenkin neljä", "tietenkin neljä"],
		vastaukset: [5, 5, 4, 4, 4],
		osumaprosentti: 0,
	},
];

var vaitteet = [
	"Väite yksi",
	"Väite kaksi",
	"Väite kolme",
	"Väite neljä",
	"Väite viisi"
];

var vaiteWrap = document.querySelector('.vaiteWrap');

for(var i = 0; i < vaitteet.length; i++){
	var vaiteElem = document.createElement('p');
	vaiteElem.className = 'vaalikoneVaite';
	vaiteElem.innerHTML = vaitteet[i];
	vaiteWrap.appendChild(vaiteElem);
	
	var seliteElem = document.createElement('div');
	var koodia = '<div class="vaalikoneSelite">Täysin<br />eri<br />mieltä</div><div class="vaalikoneSelite">Jokseenkin<br />eri<br />mieltä</div><div class="vaalikoneSelite">En osaa<br />tai halua<br />sanoa</div><div class="vaalikoneSelite">Jokseenkin<br />samaa<br />mieltä</div><div class="vaalikoneSelite">Täysin<br />samaa<br />mieltä</div>';
	seliteElem.innerHTML = koodia;
	vaiteWrap.appendChild(seliteElem);
	
	var napitElem = document.createElement('div');
	koodia = '<input type="radio" name="q'+i+'" id="q'+i+'o1" class="opt1" value="1" required /><label class="val1" for="q'+i+'o1"><div class="vaalikoneNappi vaalikoneYksi">– –</div></label><input type="radio" name="q'+i+'" id="q'+i+'o2" class="opt2" value="2" /><label class="val2" for="q'+i+'o2"><div class="vaalikoneNappi vaalikoneKaksi">–</div></label><input type="radio" name="q'+i+'" id="q'+i+'o3" class="opt3" value="3" checked /><label class="val3" for="q'+i+'o3"><div class="vaalikoneNappi vaalikoneKolme">?</div></label><input type="radio" name="q'+i+'" id="q'+i+'o4" class="opt4" value="4" /><label class="val4" for="q'+i+'o4"><div class="vaalikoneNappi vaalikoneNelja">+</div></label><input type="radio" name="q'+i+'" id="q'+i+'o5" class="opt5" value="5" /><label class="val5" for="q'+i+'o5"><div class="vaalikoneNappi vaalikoneViisi">++</div></label>';
	napitElem.innerHTML = koodia;
	vaiteWrap.appendChild(napitElem);
	
	var vastauksetElem = document.createElement('div');
	vastauksetElem.className = 'vaalikoneVastaukset';

	var seliteTeksti = "<br />";

	for(var x = 0; x < 5; x++){
		seliteTeksti = seliteTeksti+'<div class="vaalikoneVastBox" id="vast'+i+'opt'+x+'">';
		for(var y = 0; y < ehdokkaat.length; y++) {
			if (x+1 == ehdokkaat[y].vastaukset[i]) {
				seliteTeksti = seliteTeksti+'<div class="vaalikoneVastPallo">'+ehdokkaat[y].lyhenne+'<div class="vaalikoneTark vaalikoneTark'+x+'"><b>'+ehdokkaat[y].nimi+':</b>'+ehdokkaat[y].perustelut[i]+'</div></div>';
			}
		}
		seliteTeksti = seliteTeksti+'</div>';
	}
	vastauksetElem.innerHTML = seliteTeksti;
	vaiteWrap.appendChild(vastauksetElem);

	var putsElem = document.createElement('div');
	koodia = '<div id="clear"></div><br /><br />';
	putsElem.innerHTML = koodia;
	vaiteWrap.appendChild(putsElem);
};

var arvo;
var vastaus;
var ehdokkaanNimi;
var harmaa;
    
function laske() {

	var valinnat = new Array();

	for(var i = 0; i < ehdokkaat.length; i++) {
		ehdokkaat[i].osumaprosentti = 0;
	};

	for (var i = 0; i < document.getElementsByClassName("vaalikoneVastaukset").length; i++) {
		document.getElementsByClassName("vaalikoneVastaukset")[i].style.display = 'block';
	};

	for(var i = 0; i < vaitteet.length; i++){
    var kysNum = 'q'+i;
		var vastaus = document.getElementsByName(kysNum);
    for(var x = 0; x < vastaus.length; x++){
			if(vastaus[x].checked) {
			arvo=x+1;
			}	
		}
	valinnat.push(arvo);
	};

	koodia = '<h1>Tulos</h1>';

	for(var i = 0; i < ehdokkaat.length; i++) {
		for(var x = 0; x < valinnat.length; x++) {
			ehdokkaat[i].osumaprosentti = ehdokkaat[i].osumaprosentti + (4-Math.abs(ehdokkaat[i].vastaukset[x]-valinnat[x]));
		}
		ehdokkaat[i].osumaprosentti = Math.round((ehdokkaat[i].osumaprosentti/vaitteet.length)*25);
		koodia = koodia+'<br />'+ehdokkaat[i].nimi+" "+ehdokkaat[i].osumaprosentti+"%";
	};
	var tulosWrap = document.querySelector('.tulosWrap');
	tulosWrap.innerHTML = koodia;
		
};
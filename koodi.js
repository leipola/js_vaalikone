var ehdokkaat = [
	{
		laji: "pj",
		nimi: "Lasse Leipola",
		lyhenne: "LL",
		//kuva: "http://www.vihrealanka.fi/galleriat/pjkone_kari.jpg",
		perustelut: ["ykkönen on kakko", "ykskakkonen", "kolmonen", "nelonen", "vitonen"],
		vastaukset: [2, 2, 2, 2, 2],
		osumaprosentti: 0,
	},
	{
		laji: "vpj",
		nimi: "Sammeli H",
		lyhenne: "SH",
		//kuva: "http://www.vihrealanka.fi/galleriat/pjkone_kari.jpg",
		perustelut: ["kaks on kolm", "kakkolmnen", "kolmonen", "nelonen", "vitonen"],
		vastaukset: [3, 3, 3, 3, 3],
		osumaprosentti: 0,
	},
	{
		laji: "ps",
		nimi: "Jenni L",
		lyhenne: "JL",
		//kuva: "http://www.vihrealanka.fi/galleriat/pjkone_kari.jpg",
		perustelut: ["kolm on nelj", "kolnel", "kolmonen", "nelonen", "vitonen"],
		vastaukset: [4, 4, 4, 4, 4],
		osumaprosentti: 0,
	},
];

var vaitteet = [
	"Kysymys yksi?",
	"Kysymys kaksi?",
	"Kysymys kolme?",
	"Kysymys neljä?",
	"Kysymys viisi?"
];

var vaiteWrap = document.querySelector('.vaiteWrap');

for(var i = 0; i < vaitteet.length; i++){
	var vaiteElem = document.createElement('p');
	vaiteElem.className = 'pjVaite';
	vaiteElem.innerHTML = vaitteet[i];
	vaiteWrap.appendChild(vaiteElem);
	
	var seliteElem = document.createElement('div');
	var koodia = '<div class="pjSelite">Täysin<br />eri<br />mieltä</div><div class="pjSelite">Jokseenkin<br />eri<br />mieltä</div><div class="pjSelite">En osaa<br />tai halua<br />sanoa</div><div class="pjSelite">Jokseenkin<br />samaa<br />mieltä</div><div class="pjSelite">Täysin<br />samaa<br />mieltä</div>';
	seliteElem.innerHTML = koodia;
	vaiteWrap.appendChild(seliteElem);
	
	var napitElem = document.createElement('div');
	koodia = '<input type="radio" name="q'+i+'" id="q'+i+'o1" class="opt1 pjOpts" value="1" required /><label class="val1" for="q'+i+'o1"><div class="pjNappi pjYksi">– –</div></label><input type="radio" name="q'+i+'" id="q'+i+'o2" class="opt2 pjOpts" value="2" /><label class="val2" for="q'+i+'o2"><div class="pjNappi pjKaksi">–</div></label><input type="radio" name="q'+i+'" id="q'+i+'o3" class="opt3 pjOpts" value="3" checked /><label class="val3" for="q'+i+'o3"><div class="pjNappi pjKolme">?</div></label><input type="radio" name="q'+i+'" id="q'+i+'o4" class="opt4 pjOpts" value="4" /><label class="val4" for="q'+i+'o4"><div class="pjNappi pjNelja">+</div></label><input type="radio" name="q'+i+'" id="q'+i+'o5" class="opt5 pjOpts" value="5" /><label class="val5" for="q'+i+'o5"><div class="pjNappi pjViisi">++</div></label>';
	napitElem.innerHTML = koodia;
	vaiteWrap.appendChild(napitElem);
	
	var vastauksetElem = document.createElement('div');
	vastauksetElem.className = 'pjVastaukset';

	var seliteTeksti = "<br />";

	for(var x = 0; x < 5; x++){
		seliteTeksti = seliteTeksti+'<div class="pjVastBox" id="vast'+i+'opt'+x+'">';
		console.log(x);
		for(var y = 0; y < ehdokkaat.length; y++) {
			if (x+1 == ehdokkaat[y].vastaukset[i]) {
				seliteTeksti = seliteTeksti+'<div class="pjVastPallo">'+ehdokkaat[y].lyhenne+'<div class="pjTark pjTark'+x+'"><b>'+ehdokkaat[y].nimi+':</b>'+ehdokkaat[y].perustelut[i]+'</div></div>';
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

for (var i = 0; i < document.getElementsByClassName("pjVastaukset").length; i++) {
	document.getElementsByClassName("pjVastaukset")[i].style.display = 'block';
};

/*for(var i = 0; i < ehdokkaat.length; i++){
	for(var x = 0; x < ehdokkaat[i].vastaukset.length; x++){
		console.log("vast"+x+"opt"+ehdokkaat[i].vastaukset[x]);
		document.getElementById("vast1opt2").innerHTML = "jee";
		/*var vastausSelite = document.createElement('div');
		vastausSelite.className = 'pjVastPallo';
		console.log(ehdokkaat[i].perustelut);
		vastausSelite.innerHTML = "testiteksti";
		var wrap = document.querySelector("#vast1opt2");
		console.log(vastausSelite);
		.appendChild(vastausSelite);
	}
}

<div class="pjVastaukset">
<div class="pjVastBox"> </div>
<div class="pjVastBox"><div class="pjVastPallo">TA<div class="pjTark pjTark4"><b>Touko Aalto:</b> Suomi ei ole EU:n jäsenenä ollut puolueeton enää vuosikymmeniin. Suomi on osa sekä läntistä poliittista yhteisöä, EU:ta, että yhä selkeämmin osa myös läntistä turvallisuuspoliittista rakennetta. Toimimme myös NATO:n rauhankumppanina. En kannata kuitenkaan Suomen NATO-jäsenyyttä, koska en näe sen vahvistavan Suomen kokonaisturvallisuustilannetta. Pikemminkin se loisi lisää jännitteitä Suomen ja Venäjän välille ja on vaikeaa nähdä tilannetta, jossa yksikään NATO-maa lähettäisi maajoukkojaan Suomen ja Venäjän väliselle rajalle pahimman sattuessa. Liittoutuminen voisi olla mahdollista pohjoismaiden kesken. Olisimme Ruotsille luonteva partneri sekä pohjoisessa että kansainvälisissä operaatioissa. Myös EU:n yhteisen puolustuksen kehittämisessä tulee olla mukana vaikka suhtaudun myös siihen varauksella. Kuten vastauksesta huomaa, kysymys ei ole lainkaan simppeli ja arvioin jatkuvasti erilaisten vaihtoehtojen hyviä ja huonoja puolia. Keskustelua on syytä käydä laajasti puolueen sisällä.</div></div><div class="pjVastPallo">KM<div class="pjTark pjTark4"><b>Krista Mikkonen:</b> Ruotsin kanssa yhteistyötä tulee syventää, mahdollisesti aina liittoutumaan saakka.</div></div><div class="pjVastPallo">OP<div class="pjTark pjTark4"><b>Olli-Poika Parviainen:</b> Suomi ei ole nytkään liittoutumaton. Sen sijaan meillä ei ole turvatakuita koska emme ole NATOn jäsen. Suhtaudun NATO-jäsenyyteen varsin varauksellisesti.</div></div></div>
<div class="pjVastBox"> </div>
<div class="pjVastBox"><div class="pjVastPallo">MF<div class="pjTark pjTark2"><b>Mika Flöjt:</b> "Liittoutumattomuus" on tähän asti toiminut. Yleistä asevelvollisuutta laajentaisin maailmanpoliittisen tilanteen takia myös naisiin, mutta he ja osa meihistä voisivat valita myös siviilikriisinhallinnan tai niiden yhdistelmän. Tässä maailmanpoliittisessa tilanteessa puolustysyhteistyön syventäminen eri muodossa Ruotsin ja Isäntämaasopimuksen "raameissa" taitaa olla ainut tie. Suomen valtion tärkein tehtävä on pyrkiä liennyttää, liennyttää ja liennyttää suurvaltojen ristiriitaisuuksia sekä auttaa ratkaisemaan Syyrian ja Pohjois-Korean kriisejä kulisseissa.</div></div><div class="pjVastPallo">EK<div class="pjTark pjTark2"><b>Emma Kari:</b> Suomella on oltava jatkossakin mahdollisuus liittoutua. Kysymys on siitä, kenne kanssa liittoudutaan ja millaisin ehdoin. Itse suhtautuisin hyvin myönteisesti askeleisiin kohti Euroopan yhteistä puolustusta, mutta en nykyisellään pidä Naton jäsenyyttä järkevänä ratkaisuna.</div></div><div class="pjVastPallo">MO<div class="pjTark pjTark2"><b>Maria Ohisalo:</b> Suomen on kehitettävä puolustustaan osana Euroopan unionia (eikä Suomi tässä mielessä ole mitenkään täysin liittoutumaton) ja tehtävä esim. hankintoja yhdessä muiden Pohjoismaiden kanssa. Suomen ja myös puolustusvoimien on myös kyettävä vastaamaan uudenlaisiin uhkiin kyberturvattomuuden lisääntymisestä köyhyyden ja ilmastonmuutoksen torjuntaan. Jos liittoutumisella tässä viitataan Natoon, pitää asiasta käydä laajaa kansalaiskeskustelua hyödyt ja haitat punniten ja mahdollisesti järjestää kansanäänestys.</div></div></div>
<div class="pjVastBox"> </div>
</div>
*/

var arvo;
var vastaus;
var ehdokkaanNimi;
var harmaa;
	
var vastaukset = new Array();
    
function laske() {
	for(var i = 0; i < vaitteet.length; i++){
    var kysNum = 'q'+i;
		var vastaus = document.getElementsByName(kysNum);
    for(var x = 0; x < vastaus.length; x++){
			if(vastaus[x].checked) {
			arvo=x;
			}	
		}
	vastaukset.push(arvo);
	};

	/*document.getElementById("pjEhdKuva1").style.display = 'none';
	document.getElementById("pjEhdKuva2").style.display = 'none';
	document.getElementById("pjEhdKuva3").style.display = 'none';
	document.getElementById("pjEhdKuva4").style.display = 'none';
	document.getElementById("pjEhdKuva5").style.display = 'none';
	document.getElementById("pjEhdKuva6").style.display = 'none';
	document.getElementById("pjEhdKuvaX").style.display = 'none';
	document.getElementById("pjEhdKuvaY").style.display = 'none';*/
	
	for(var i = 0; i < ehdokkaat.length; i++) {
		for(var x = 0; x < vastaukset.length; x++) {
			ehdokkaat[i].osumaprosentti = ehdokkaat[i].osumaprosentti + (5-Math.abs(ehdokkaat[i].vastaukset[x]-vastaukset[x]));
		}
		console.log("ehdokas"+i+" raaka="+ehdokkaat[i].osumaprosentti);
		console.log("ehdokas"+i+" jalo="+Math.round(ehdokkaat[i].osumaprosentti/vaitteet.length*20));
	}
		
		/*if (harmaa == 20) {
			ehdokkaanNimi = "\”Hei! Ei kukaan voi olla noin harmaa!\”";
			document.getElementById("pjEhdKuvaY").style.display = 'block';
		} else if (ehd1 > ehd2 && ehd1 > ehd3 && ehd1 > ehd4 && ehd1 > ehd5 && ehd1 > ehd6) {
			ehdokkaanNimi = "Touko Aalto";
			document.getElementById("pjEhdKuva1").style.display = 'block';
		} else if (ehd2 > ehd1 && ehd2 > ehd3 && ehd2 > ehd4 && ehd2 > ehd5 && ehd2 > ehd6) {
			ehdokkaanNimi = "Mika Flöjt";
			document.getElementById("pjEhdKuva2").style.display = 'block';
		} else if (ehd3 > ehd1 && ehd3 > ehd2 && ehd3 > ehd4 && ehd3 > ehd5 && ehd3 > ehd6) {
			ehdokkaanNimi = "Emma Kari";
			document.getElementById("pjEhdKuva3").style.display = 'block';
		} else if (ehd4 > ehd1 && ehd4 > ehd2 && ehd4 > ehd3 && ehd4 > ehd5 && ehd4 > ehd6) {
			ehdokkaanNimi = "Krista Mikkonen";
			document.getElementById("pjEhdKuva4").style.display = 'block';
		} else if (ehd5 > ehd1 && ehd5 > ehd2 && ehd5 > ehd3 && ehd5 > ehd4 && ehd5 > ehd6) {
			ehdokkaanNimi = "Maria Ohisalo";
			document.getElementById("pjEhdKuva5").style.display = 'block';
		} else if (ehd6 > ehd1 && ehd6 > ehd2 && ehd6 > ehd3 && ehd6 > ehd4 && ehd6 > ehd5) {
			ehdokkaanNimi = "Olli-Poika Parviainen";
			document.getElementById("pjEhdKuva6").style.display = 'block';
		} else {
			ehdokkaanNimi = "Voi ei, tuli tasapeli!";
			document.getElementById("pjEhdKuvaX").style.display = 'block';
		}
		
		document.getElementsByClassName("ehdokasNimi")[0].innerHTML = ehdokkaanNimi;
		
		document.getElementById("pjList1").innerHTML = "Touko Aalto: " + ehd1 + "%";
		document.getElementById("pjList2").innerHTML = "Mika Flöjt: " + ehd2 + "%";
		document.getElementById("pjList3").innerHTML = "Emma Kari: " + ehd3 + "%";
		document.getElementById("pjList4").innerHTML = "Krista Mikkonen: " + ehd4 + "%";
		document.getElementById("pjList5").innerHTML = "Maria Ohisalo: " + ehd5 + "%";
		document.getElementById("pjList6").innerHTML = "Olli-Poika Parviainen: " + ehd6 + "%";	
		document.getElementsByClassName("ehdokasBoksi")[0].style.display = 'block';

		for (var i = 0; i < document.getElementsByClassName("pjVastaukset").length; i++) {
			document.getElementsByClassName("pjVastaukset")[i].style.display = 'block';
		};

		document.getElementById("pjAlku").scrollIntoView();

		document.getElementById('jakoNappi').onclick = function() {
			FB.ui({
				method: 'share',
				display: 'popup',
				quote: 'Tein Langan vaalikoneen ja tulos oli ' + ehdokkaanNimi + '!',
				href: 'http://www.vihrealanka.fi/pjkone/',
  }, function(response){});
}*/
		
	};
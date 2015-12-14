---
layout:       default
title:        Poslanci PČR
description:  adresář poslanců
permalink:    /testLada/
id:           autocircles
---

<script src="https://cdn.jsdelivr.net/clipboard.js/1.5.3/clipboard.min.js"></script>

<style>
.flag { display: inline-block; width: 21px; padding: 19px 0 0 0; height: 0px; vertical-align: middle; background-image: url(/media/vote-flags.png); overflow: hidden;  }
.flag.ano { background-position: 0px -19px; }
.flag.zdržel_se { background-position: 0px -38px; }
.flag.ne { background-position: 0px -57px; }
.flag.nepřihlášen { background-position: 0px -76px; }
.flag.omluven { background-position: 0px -95px; }

.rekonstrukce { display: inline-block; width: 20px; padding: 20px 0 0 0; height: 0px; vertical-align: middle; background-image: url(/media/rekonstrukce_statu_sign.png); overflow: hidden;  }
.rekonstrukce.ano { background-position: 0px -20px; }
.rekonstrukce.ne { background-position: 0px -40px; }

.hgs_rotate{
    -webkit-transform: rotate(-90deg);
    -moz-transform: rotate(-90deg);
    -o-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    white-space: nowrap;
    line-height: 180%;
    float:left;
    width:auto;
}

caption {text-align: left;}

/* tr:nth-child(2n+1){background:#eee;}
tr:nth-child(2n){background:#ddd;}
*/
</style>

<script>
function rotateHeadCell(tableId) {
    'use strict';
    var aRows = document.getElementById(tableId).rows, padding = 4;
    [].every.call(aRows, function (row) {
        if (row.cells[0].tagName !== 'TH') {
            return false;
        }
        rotateCell(row);
        return true;
    });
    function rotateCell(row) {
        var maxw = -1;
        [].forEach.call(row.cells, function (cell) {       
            var w,dd;
            if (!cell.hasAttribute("data-rotate")) {
                cell.vAlign = 'bottom';
                return;
            }
            cell.vAlign = 'middle';
            cell.innerHTML = '<div class=hgs_rotate>' + cell.innerHTML + '</div>';
            w = cell.firstChild.clientWidth;
            if (w > maxw) {
                maxw = w;
                cell.style.height = maxw + padding + 'px';
            }
            dd = cell.firstChild;
            dd.style.width = cell.firstChild.clientHeight + 'px';
            dd.style.top = (cell.clientHeight - dd.clientHeight - padding) / 2 + 'px';
            dd.style.left = '0px';
            dd.style.position = 'relative';
        });             
    }
}

function addEvent(obj, ev, fu) {
	if (obj.addEventListener) {
	    obj.addEventListener(ev, fu, false);
	} else {
	    var eev = 'on' + ev;
	    obj.attachEvent(eev, fu);
	}
	}
	addEvent(window, 'load', function() {
	rotateHeadCell('verticalTab');
});
</script>

<table>
<caption>Legenda</caption>
<tbody>
<tr><td>hlasování</td><td><span class="flag ano"></span> - ano<br><span class="flag ne"></span> - ne<br><span class="flag zdržel_se"></span> - zdržel se<br><span class="flag omluven"></span> - omluven<br><span class="flag nepřihlášen"></span> - nepřihlášen</td></tr>
<tr><td>podpis <a href="http://www.rekonstrukcestatu.cz/na-stazeni/rest_prohlaseni_o_podpore.pdf">Prohlášení</a> o podpoře<br><a href="http://www.rekonstrukcestatu.cz/">Rekonstrukce státu</a> (RS)</td><td><span class="rekonstrukce"></span> - ???<br><span class="rekonstrukce ano"></span> - podepsáno<br><span class="rekonstrukce ne"></span> - nepodepsáno</td></tr>
<tr><td>ikony</td><td><img src="http://zenorocha.github.io/clipboard.js/assets/images/clippy.svg" width="21" class='notcircle'> - zkopíruje e-mailovou adresu do Clipboardu</td></tr>
  </tbody>
</table>

### Zpravodajové zákona o registru smluv

<table id="verticalTab">
  <thead>
    <tr>
      <th>strana</th>
      <td data-rotate>
	<a href="http://www.psp.cz/eknih/2013ps/stenprot/031schuz/s031198.htm#h141">postoupit Senátu</a> - <a href="http://www.psp.cz/sqw/hlasy.sqw?g=61427&l=cz">schváleno</a><br>
	<a href="http://www.psp.cz/eknih/2013ps/stenprot/036schuz/s036010.htm#h18">vyčkat dopadové studie</a> - <a href="http://www.psp.cz/sqw/hlasy.sqw?g=61823&l=cz">zamítnuto</a><br>
	<a href="http://www.psp.cz/eknih/2013ps/stenprot/036schuz/s036019.htm#h19">přijmout senátní verzi</a> - <a href="http://www.psp.cz/sqw/hlasy.sqw?g=61824&l=cz">zamítnuto</a><br>
	<a href="http://www.psp.cz/eknih/2013ps/stenprot/036schuz/s036020.htm#h20">přijmout původní verzi</a> - <a href="http://www.psp.cz/sqw/hlasy.sqw?g=61825&l=cz">schváleno</a><br>
	<a href="http://www.rekonstrukcestatu.cz/na-stazeni/rest_prohlaseni_o_podpore.pdf">podpora Rekonstrkce státu</a> - <a href="http://www.rekonstrukcestatu.cz/cs/seznam-politiku">podpis</a>
      </td>
      <th>poslanec</th>
    </tr>
  </thead>
  <tbody>
	<tr><td>ANO</td><td><span class="flag ano">ano</span> <span class="flag ne">ne</span> <span class="flag ne">ne</span> <span class="flag ano">ano</span> <span class="rekonstrukce ano">ano</span></td><td><img src='http://www.psp.cz/eknih/cdrom/2013ps/eknih/2013ps/poslanci/small/s6165.jpg' style='height:40px' class='notcircle'> <a href='http://www.psp.cz/sqw/detail.sqw?id=6165' target='_blank'>Mgr. Radek Vondráček</a>   <a href='mailto:vondracekr@psp.cz'><img src='http://cdn3.iconfinder.com/data/icons/peelicons-vol-1/50/Mail-24.png' class='notcircle'></a>  </td></tr>
	<tr><td>ČSSD</td><td><span class="flag ano">ano</span> <span class="flag ne">ne</span> <span class="flag zdržel_se">zdržel_se</span> <span class="flag ano">ano</span> <span class="rekonstrukce ano">ano</span></td><td><img src='http://www.psp.cz/eknih/cdrom/2013ps/eknih/2013ps/poslanci/small/s5926.jpg' style='height:40px' class='notcircle'> <a href='http://www.psp.cz/sqw/detail.sqw?id=5926' target='_blank'>JUDr. Jan Chvojka</a>   <a href='mailto:chvojkaj@psp.cz'><img src='http://cdn3.iconfinder.com/data/icons/peelicons-vol-1/50/Mail-24.png' class='notcircle'></a>  <a href='https://www.facebook.com/JanChvojkaFanclub' target='_blank'><img src='http://cdn3.iconfinder.com/data/icons/peelicons-vol-1/50/Facebook-24.png' class='notcircle'></a></td></tr>
	<tr><td>KDU-ČSL</td><td><span class="flag ano">ano</span> <span class="flag omluven">omluven</span> <span class="flag omluven">omluven</span> <span class="flag omluven">omluven</span> <span class="rekonstrukce "></span></td><td><img src='http://www.psp.cz/eknih/cdrom/2013ps/eknih/2013ps/poslanci/small/s6222.jpg' style='height:40px' class='notcircle'> <a href='http://www.psp.cz/sqw/detail.sqw?id=6222' target='_blank'>Mgr. Jiří Mihola Ph.D.</a>   <a href='mailto:miholaj@psp.cz'><img src='http://cdn3.iconfinder.com/data/icons/peelicons-vol-1/50/Mail-24.png' class='notcircle'></a> <a href='http://www.jirimihola.cz/' target='_blank'><img src='http://cdn3.iconfinder.com/data/icons/peelicons-vol-1/50/Dribbble-24.png' class='notcircle'></a> </td></tr>
	<tr><td>KDU-ČSL</td><td><span class="flag ano">ano</span> <span class="flag ne">ne</span> <span class="flag ne">ne</span> <span class="flag ano">ano</span> <span class="rekonstrukce "></span></td><td><img src='http://www.psp.cz/eknih/cdrom/2013ps/eknih/2013ps/poslanci/small/s6170.jpg' style='height:40px' class='notcircle'> <a href='http://www.psp.cz/sqw/detail.sqw?id=6170' target='_blank'>Ing. Josef Uhlík</a>   <a href='mailto:uhlikj@psp.cz'><img src='http://cdn3.iconfinder.com/data/icons/peelicons-vol-1/50/Mail-24.png' class='notcircle'></a>  </td></tr>
	<tr><td>KSČM</td><td><span class="flag zdržel_se">zdržel_se</span> <span class="flag ano">ano</span> <span class="flag ano">ano</span> <span class="flag ne">ne</span> <span class="rekonstrukce ano">ano</span></td><td><img src='http://www.psp.cz/eknih/cdrom/2013ps/eknih/2013ps/poslanci/small/s5934.jpg' style='height:40px' class='notcircle'> <a href='http://www.psp.cz/sqw/detail.sqw?id=5934' target='_blank'>Bc. Jan Klán</a>   <a href='mailto:klanj@psp.cz'><img src='http://cdn3.iconfinder.com/data/icons/peelicons-vol-1/50/Mail-24.png' class='notcircle'></a>  <a href='https://www.facebook.com/profile.php?id=1160567314' target='_blank'><img src='http://cdn3.iconfinder.com/data/icons/peelicons-vol-1/50/Facebook-24.png' class='notcircle'></a></td></tr>
	<tr><td>ODS</td><td><span class="flag ano">ano</span> <span class="flag nepřihlášen">nepřihlášen</span> <span class="flag ne">ne</span> <span class="flag ano">ano</span> <span class="rekonstrukce ano">ano</span></td><td><img src='http://www.psp.cz/eknih/cdrom/2013ps/eknih/2013ps/poslanci/small/s5969.jpg' style='height:40px' class='notcircle'> <a href='http://www.psp.cz/sqw/detail.sqw?id=5969' target='_blank'>Ing. Zbyněk Stanjura</a>   <a href='mailto:stanjuraz@psp.cz'><img src='http://cdn3.iconfinder.com/data/icons/peelicons-vol-1/50/Mail-24.png' class='notcircle'></a> <a href='http://www.stanjura.eu/' target='_blank'><img src='http://cdn3.iconfinder.com/data/icons/peelicons-vol-1/50/Dribbble-24.png' class='notcircle'></a> </td></tr>
	<tr><td>Úsvit</td><td><span class="flag ano">ano</span> <span class="flag ne">ne</span> <span class="flag ne">ne</span> <span class="flag ano">ano</span> <span class="rekonstrukce "></span></td><td><img src='http://www.psp.cz/eknih/cdrom/2013ps/eknih/2013ps/poslanci/small/s6186.jpg' style='height:40px' class='notcircle'> <a href='http://www.psp.cz/sqw/detail.sqw?id=6186' target='_blank'>Marek Černoch</a>   <a href='mailto:cernochm@psp.cz'><img src='http://cdn3.iconfinder.com/data/icons/peelicons-vol-1/50/Mail-24.png' class='notcircle'></a>  </td></tr>
  </tbody>
</table>

### PS PČR dle krajů

kraj | strana | hlasování a RS | poslanec
--- | --- | --- | ---
Hlavní město Praha | ANO | <span class="flag ano">ano</span> <span class="flag ne">ne</span> <span class="flag ne">ne</span> <span class="flag ano">ano</span> <span class="rekonstrukce "></span> | <img src='http://www.psp.cz/eknih/cdrom/2013ps/eknih/2013ps/poslanci/small/s6150.jpg' style='height:40px' class='notcircle'> <a href='http://www.psp.cz/sqw/detail.sqw?id=6150' target='_blank'>Ing. Andrej Babiš</a>   <a href='mailto:babisa@psp.cz'><img src='http://cdn3.iconfinder.com/data/icons/peelicons-vol-1/50/Mail-24.png' class='notcircle'></a>  
Hlavní město Praha | ANO<span class="flag ano">ano</span> <span class="flag ne">ne</span> <span class="flag ne">ne</span> <span class="flag ano">ano</span> <span class="rekonstrukce "></span><img src='http://www.psp.cz/eknih/cdrom/2013ps/eknih/2013ps/poslanci/small/s6150.jpg' style='height:40px' class='notcircle'> <a href='http://www.psp.cz/sqw/detail.sqw?id=6150' target='_blank'>Ing. Andrej Babiš</a>   <a href='mailto:babisa@psp.cz'><img src='http://cdn3.iconfinder.com/data/icons/peelicons-vol-1/50/Mail-24.png' class='notcircle'></a>
Hlavní město Praha | ANO<span class="flag ano">ano</span> <span class="flag ne">ne</span> <span class="flag ne">ne</span> <span class="flag ano">ano</span> <span class="rekonstrukce "></span><img src='http://www.psp.cz/eknih/cdrom/2013ps/eknih/2013ps/poslanci/small/s6150.jpg' style='height:40px' class='notcircle'> <a href='http://www.psp.cz/sqw/detail.sqw?id=6150' target='_blank'>Ing. Andrej Babiš</a>   <a href='mailto:babisa@psp.cz'><img src='http://cdn3.iconfinder.com/data/icons/peelicons-vol-1/50/Mail-24.png' class='notcircle'></a>


Hlavní město Praha | ANO | <img src='http://www.psp.cz/eknih/cdrom/2013ps/eknih/2013ps/poslanci/small/s6150.jpg' height='33' style='height:33px' class='notcircle'> <a href='http://www.psp.cz/sqw/detail.sqw?id=6150' target='_blank'>Ing. Andrej Babiš</a>   <a href='mailto:babisa@psp.cz'><img src='http://cdn3.iconfinder.com/data/icons/peelicons-vol-1/50/Mail-24.png' class='notcircle'></a> / <img src="http://zenorocha.github.io/clipboard.js/assets/images/clippy.svg" alt="Zkopírovat do schránky" width="21" class="notcircle" data-clipboard-text="babisa@psp.cz"><span class="flag ano">ano</span> <span class="flag zdržel_se">zdržel_se</span>
Hlavní město Praha | ANO | <img src='http://www.psp.cz/eknih/cdrom/2013ps/eknih/2013ps/poslanci/small/s6192.jpg' height='33' style='height:33px' class='notcircle'> <a href='http://www.psp.cz/sqw/detail.sqw?id=6192' target='_blank'>PhDr. Ing. Matěj Fichtner MBA</a>   <a href='mailto:fichtnerm@psp.cz'><img src='http://cdn3.iconfinder.com/data/icons/peelicons-vol-1/50/Mail-24.png' class='notcircle'></a> / <img src="http://zenorocha.github.io/clipboard.js/assets/images/clippy.svg" alt="Zkopírovat do schránky" width="21" class="notcircle" data-clipboard-text="fichtnerm@psp.cz">  <a href='https://www.facebook.com/pages/Mat%C4%9Bj-Fichtner/184667901611350' target='_blank'><img src='http://cdn3.iconfinder.com/data/icons/peelicons-vol-1/50/Facebook-24.png' class='notcircle'></a> 
Hlavní město Praha | ANO | <img src='http://www.psp.cz/eknih/cdrom/2013ps/eknih/2013ps/poslanci/small/s6196.jpg' height='33' style='height:33px' class='notcircle'> <a href='http://www.psp.cz/sqw/detail.sqw?id=6196' target='_blank'>Bc. Jiří Holeček</a>   <a href='mailto:holecekj@psp.cz'><img src='http://cdn3.iconfinder.com/data/icons/peelicons-vol-1/50/Mail-24.png' class='notcircle'></a> / <img src="http://zenorocha.github.io/clipboard.js/assets/images/clippy.svg" alt="Zkopírovat do schránky" width="21" class="notcircle" data-clipboard-text="holecekj@psp.cz">   
Hlavní město Praha | ANO | <img src='http://www.psp.cz/eknih/cdrom/2013ps/eknih/2013ps/poslanci/small/s6168.jpg' height='33' style='height:33px' class='notcircle'> <a href='http://www.psp.cz/sqw/detail.sqw?id=6168' target='_blank'>prof. JUDr. Helena Válková CSc.</a>   <a href='mailto:valkovah@psp.cz'><img src='http://cdn3.iconfinder.com/data/icons/peelicons-vol-1/50/Mail-24.png' class='notcircle'></a> / <img src="http://zenorocha.github.io/clipboard.js/assets/images/clippy.svg" alt="Zkopírovat do schránky" width="21" class="notcircle" data-clipboard-text="valkovah@psp.cz">   
Hlavní město Praha | ANO | <img src='http://www.psp.cz/eknih/cdrom/2013ps/eknih/2013ps/poslanci/small/s5718.jpg' height='33' style='height:33px' class='notcircle'> <a href='http://www.psp.cz/sqw/detail.sqw?id=5718' target='_blank'>prof. RNDr. Jiří Zlatuška CSc.</a>   <a href='mailto:zlatuskaj@psp.cz'><img src='http://cdn3.iconfinder.com/data/icons/peelicons-vol-1/50/Mail-24.png' class='notcircle'></a> / <img src="http://zenorocha.github.io/clipboard.js/assets/images/clippy.svg" alt="Zkopírovat do schránky" width="21" class="notcircle" data-clipboard-text="zlatuskaj@psp.cz">   
Hlavní město Praha | ČSSD | <img src='http://www.psp.cz/eknih/cdrom/2013ps/eknih/2013ps/poslanci/small/s467.jpg' height='33' style='height:33px' class='notcircle'> <a href='http://www.psp.cz/sqw/detail.sqw?id=467' target='_blank'>Bc. František Adámek</a>   <a href='mailto:adamekf@psp.cz'><img src='http://cdn3.iconfinder.com/data/icons/peelicons-vol-1/50/Mail-24.png' class='notcircle'></a> / <img src="http://zenorocha.github.io/clipboard.js/assets/images/clippy.svg" alt="Zkopírovat do schránky" width="21" class="notcircle" data-clipboard-text="adamekf@psp.cz">  <a href='https://www.facebook.com/frantisek.adamek.1?fref=ts' target='_blank'><img src='http://cdn3.iconfinder.com/data/icons/peelicons-vol-1/50/Facebook-24.png' class='notcircle'></a> 
Hlavní město Praha | ČSSD | <img src='http://www.psp.cz/eknih/cdrom/2013ps/eknih/2013ps/poslanci/small/s5433.jpg' height='33' style='height:33px' class='notcircle'> <a href='http://www.psp.cz/sqw/detail.sqw?id=5433' target='_blank'>MUDr. Jiří Koskuba</a>   <a href='mailto:koskubaj@psp.cz'><img src='http://cdn3.iconfinder.com/data/icons/peelicons-vol-1/50/Mail-24.png' class='notcircle'></a> / <img src="http://zenorocha.github.io/clipboard.js/assets/images/clippy.svg" alt="Zkopírovat do schránky" width="21" class="notcircle" data-clipboard-text="koskubaj@psp.cz">   
Hlavní město Praha | ČSSD | <img src='http://www.psp.cz/eknih/cdrom/2013ps/eknih/2013ps/poslanci/small/s6238.jpg' height='33' style='height:33px' class='notcircle'> <a href='http://www.psp.cz/sqw/detail.sqw?id=6238' target='_blank'>JUDr. Štěpán Stupčuk</a>   <a href='mailto:stupcuks@psp.cz'><img src='http://cdn3.iconfinder.com/data/icons/peelicons-vol-1/50/Mail-24.png' class='notcircle'></a> / <img src="http://zenorocha.github.io/clipboard.js/assets/images/clippy.svg" alt="Zkopírovat do schránky" width="21" class="notcircle" data-clipboard-text="stupcuks@psp.cz">  <a href='https://www.facebook.com/stepan.stupcuk?fref=ts' target='_blank'><img src='http://cdn3.iconfinder.com/data/icons/peelicons-vol-1/50/Facebook-24.png' class='notcircle'></a> 
Hlavní město Praha | ČSSD | <img src='http://www.psp.cz/eknih/cdrom/2013ps/eknih/2013ps/poslanci/small/s6157.jpg' height='33' style='height:33px' class='notcircle'> <a href='http://www.psp.cz/sqw/detail.sqw?id=6157' target='_blank'>Jaroslav Zavadil</a>   <a href='mailto:zavadilj@psp.cz'><img src='http://cdn3.iconfinder.com/data/icons/peelicons-vol-1/50/Mail-24.png' class='notcircle'></a> / <img src="http://zenorocha.github.io/clipboard.js/assets/images/clippy.svg" alt="Zkopírovat do schránky" width="21" class="notcircle" data-clipboard-text="zavadilj@psp.cz">

<script>
    var clipboard = new Clipboard('.notcircle');
    clipboard.on('success', function(e) {
        console.log(e);
    });
    clipboard.on('error', function(e) {
        console.log(e);
    });
</script>

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const searchService_1 = __importDefault(require("../searchService"));
const cheerio_1 = __importDefault(require("cheerio"));
const fs_1 = __importDefault(require("fs"));
const Video_1 = __importDefault(require("../../entities/Video"));
/*
</script> <div class="thrcol mt10 aft"> <div class="thr-lcol"> <div class="container categoriesbar"> <div class="c-title"> <div class="c-medtitle-output"> <select class="change_select select_cats"> <option value="straight" selected>Straight</option> <option value="gay">Gays</option> <option value="trans">Shemale</option> </select> <h2 class="c-mt-output">Categories</h2> </form> </div> </div><!-- c-title --> <div class="c-content"> <ul class="catbar-list"> <li> <a href="/4k" title="4K" data-log="menuclick"> <span class="total">571</span> <span class="title">4K</span> </a> </li> <li> <a href="/amateur" title="Amateur" data-log="menuclick"> <span class="total">173777</span> <span class="title">Amateur</span> </a> </li> <li> <a href="/anal" title="Anal" data-log="menuclick"> <span class="total">32929</span> <span class="title">Anal</span> </a> </li> <li> <a href="/asian" title="Asian" data-log="menuclick"> <span class="total">41537</span> <span class="title">Asian</span> </a> </li> <li> <a href="/bbw" title="BBW" data-log="menuclick"> <span class="total">15069</span> <span class="title">BBW</span> </a> </li> <li> <a href="/babe" title="Babe" data-log="menuclick"> <span class="total">50782</span> <span class="title">Babe</span> </a> </li> <li> <a href="/blonde" title="Blonde" data-log="menuclick"> <span class="total">86647</span> <span class="title">Blonde</span> </a> </li> <li> <a href="/blowjob" title="Blowjob" data-log="menuclick"> <span class="total">139180</span> <span class="title">Blowjob</span> </a> </li> <li> <a href="/brunette" title="Brunette" data-log="menuclick"> <span class="total">131662</span> <span class="title">Brunette</span> </a> </li> <li> <a href="/cumshot" title="Cumshot" data-log="menuclick"> <span class="total">29161</span> <span class="title">Cumshot</span> </a> </li> <li> <a href="/fetish" title="Fetish" data-log="menuclick"> <span class="total">20469</span> <span class="title">Fetish</span> </a> </li> <li> <a href="/hardcore" title="Hardcore" data-log="menuclick"> <span class="total">151943</span> <span class="title">Hardcore</span> </a> </li> <li> <a href="/hd" title="Hd" data-log="menuclick"> <span class="total">86284</span> <span class="title">Hd</span> </a> </li> <li> <a href="/interracial" title="Interracial" data-log="menuclick"> <span class="total">39537</span> <span class="title">Interracial</span> </a> </li> <li> <a href="/lesbian" title="Lesbian" data-log="menuclick"> <span class="total">23841</span> <span class="title">Lesbian</span> </a> </li> <li> <a href="/masturbation" title="Masturbation" data-log="menuclick"> <span class="total">67091</span> <span class="title">Masturbation</span> </a> </li> <li> <a href="/mature" title="Mature" data-log="menuclick"> <span class="total">17928</span> <span class="title">Mature</span> </a> </li> <li> <a href="/milf" title="Milf" data-log="menuclick"> <span class="total">60404</span> <span class="title">Milf</span> </a> </li> <li> <a href="/nylon" title="Nylon" data-log="menuclick"> <span class="total">2894</span> <span class="title">Nylon</span> </a> </li> <li> <a href="/outdoor" title="Outdoor" data-log="menuclick"> <span class="total">14762</span> <span class="title">Outdoor</span> </a> </li> <li> <a href="/pornstar" title="Pornstar" data-log="menuclick"> <span class="total">12279</span> <span class="title">Pornstar</span> </a> </li> <li> <a href="/teen" title="Teen (18+)" data-log="menuclick"> <span class="total">60571</span> <span class="title">Teen (18+)</span> </a> </li> <li> <a href="/threesome" title="Threesome" data-log="menuclick"> <span class="total">24673</span> <span class="title">Threesome</span> </a> </li> <li> <a href="/toys" title="Toys" data-log="menuclick"> <span class="total">45067</span> <span class="title">Toys</span> </a> </li> </ul> <div class="wr-l-allcategories"> <a href="/categories" class="l-allcategories">All Categories</a> </div> </div><!-- c-content --> </div> </div><!-- thr-lcol --> <div class="thr-other indentleft"> <div class="container"> <div class="c-title"> <div class="c-medtitle-output"> <div class="c-medtitle-output-wr"> <h2 class="c-mt-output"> angel-lima videos </h2> </div> </div> </div><!-- c-title --> <div class="c-content"> <div class="videos"> <div class="th-video"> <div class="th-wr-video wrap-better-content"> <ins> <a href="/video/1193032/angel-lima-e-big-bambu-fodendo-gostoso-angel-lima" class="cover"> <img rotator = "off" id="rotate_1193032_" src="https://e1.yptpsn.com/media/videos/tmb/1193032/235_132/11.jpg?1" alt="Angel Lima E Big Bambu Fodendo Gostoso - Angel lima" _url_scheme="https" _size="235_132" _server="e1.yptpsn.com" class="tmb_img" data-webm="https://e8.yptpsn.com/media/videos/tmb/1193032/1193032.mp4" /> <span class="data"> <span class="rate"><span>77%</span></span> <span class="time">17:00</span> <span class="other-data"> <span class="sponsor"></span> <span class="date">332 days ago</span> </span> </span> </a> </ins> <a class="title" href="/video/1193032/angel-lima-e-big-bambu-fodendo-gostoso-angel-lima"> Angel Lima E Big Bambu Fodendo Gostoso - Angel lima </a> </div> </div> <div class="th-video"> <div class="th-wr-video wrap-better-content"> <ins> <a href="/video/979745/angel-lima-brazilian-bubble-butt-angel-lima-assfucked" class="cover"> <img rotator = "off" id="rotate_979745_" src="https://e2.yptpsn.com/media/videos/tmb/979745/235_132/15.jpg?1" alt="Angel Lima - Brazilian bubble butt Angel Lima assfucked," _url_scheme="https" _size="235_132" _server="e2.yptpsn.com" class="tmb_img" data-webm="https://e8.yptpsn.com/media/videos/tmb/979745/979745.mp4" /> <span class="hd"></span> <span class="data"> <span class="rate"><span>70%</span></span> <span class="time">13:36</span> <span class="other-data"> <span class="sponsor"></span> <span class="date">731 days ago</span> </span> </span> </a> </ins> <a class="title" href="/video/979745/angel-lima-brazilian-bubble-butt-angel-lima-assfucked"> Angel Lima - Brazilian bubble butt Angel Lima assfucked, </a> </div> </div> <div class="th-video"> <div class="th-wr-video wrap-better-content"> <ins> <a href="/video/1382943/angel-lima-e-elisa-sanches-na-cobrinha-pra-duas-putas" class="cover"> <img rotator = "off" id="rotate_1382943_" src="https://e3.yptpsn.com/media/videos/tmb/1382943/235_132/10.jpg?1" alt="Angel Lima E Elisa Sanches,,Na Cobrinha Pra Duas Putas" _url_scheme="https" _size="235_132" _server="e3.yptpsn.com" class="tmb_img" data-webm="https://e8.yptpsn.com/media/videos/tmb/1382943/1382943.mp4" /> <span class="hd"></span> <span class="data"> <span class="rate"><span>0%</span></span> <span class="time">15:00</span> <span class="other-data"> <span class="sponsor"></span> <span class="date">7 days ago</span> </span> </span> </a> </ins> <a class="title" href="/video/1382943/angel-lima-e-elisa-sanches-na-cobrinha-pra-duas-putas"> Angel Lima E Elisa Sanches,,Na Cobrinha Pra Duas Putas </a> </div> </div> <div class="th-video"> <div class="th-wr-video wrap-better-content"> <ins> <a href="/video/1235760/monica-santhiago-aka-monicasanthiagoxxx-me-and-angel-lima" class="cover"> <img rotator = "off" id="rotate_1235760_" src="https://e4.yptpsn.com/media/videos/tmb/1235760/235_132/2.jpg?1" alt="Monica Santhiago aka Monicasanthiagoxxx Me and Angel Lima" _url_scheme="https" _size="235_132" _server="e4.yptpsn.com" class="tmb_img" data-webm="https://e8.yptpsn.com/media/videos/tmb/1235760/1235760.mp4" /> <span class="data"> <span class="rate"><span>50%</span></span> <span class="time">13:44</span> <span class="other-data"> <span class="sponsor"></span> <span class="date">247 days ago</span> </span> </span> </a> </ins> <a class="title" href="/video/1235760/monica-santhiago-aka-monicasanthiagoxxx-me-and-angel-lima"> Monica Santhiago aka Monicasanthiagoxxx Me and Angel Lima </a> </div> </div> <div class="th-video"> <div class="th-wr-video wrap-better-content"> <ins> <a href="/video/1111086/angel-lima-blacl-lefis" class="cover"> <img rotator = "off" id="rotate_1111086_" src="https://e5.yptpsn.com/media/videos/tmb/1111086/235_132/3.jpg?1" alt="Angel Lima - blacl lefis" _url_scheme="https" _size="235_132" _server="e5.yptpsn.com" class="tmb_img" data-webm="https://e8.yptpsn.com/media/videos/tmb/1111086/1111086.mp4" /> <span class="data"> <span class="rate"><span>0%</span></span> <span class="time">10:08</span> <span class="other-data"> <span class="sponsor"></span> <span class="date">497 days ago</span> </span> </span> </a> </ins> <a class="title" href="/video/1111086/angel-lima-blacl-lefis"> Angel Lima - blacl lefis </a> </div> </div> <div class="th-video"> <div class="th-wr-video wrap-better-content"> <ins> <a href="/video/1054509/angel-lima-facesitting-bunda-grande" class="cover"> <img rotator = "off" id="rotate_1054509_" src="https://e6.yptpsn.com/media/videos/tmb/1054509/235_132/18.jpg?1" alt="Angel Lima Facesitting Bunda Grande" _url_scheme="https" _size="235_132" _server="e6.yptpsn.com" class="tmb_img" data-webm="https://e8.yptpsn.com/media/videos/tmb/1054509/1054509.mp4" /> <span class="hd"></span> <span class="data"> <span class="rate"><span>50%</span></span> <span class="time">21:58</span> <span class="other-data"> <span class="sponsor"></span> <span class="date">614 days ago</span> </span> </span> </a> </ins> <a class="title" href="/video/1054509/angel-lima-facesitting-bunda-grande"> Angel Lima Facesitting Bunda Grande </a> </div> </div> </div><!-- videos --> </div><!-- c-content --> </div> </div><!-- thr-other --> </div> <div class="container mt10"> <div class="c-title"> <div class="c-medtitle-output"> <h2 class="c-mt-output">Advertisement</h2> </div> </div> </div> <div class="container mt10 spots c-content" style="margin-top:5px;height: 257px;"> <style> .mn-thumb__label-title { color: #727272; font-size: 13px; } .mn-thumb__label-title-link { color: #727272 !important; } .mn-thumb__label-brand { display: none; } .mn-container-title { display: none; } .mn-thumb__holder, .mn-thumb__img, .mn-thumb { max-width: 235px; } .twinrd-adv .twinrd-item { float: left; margin: 0 0 1% 1%; width: 24.25%; overflow: hidden; height: auto; position: relative; } .twinrd-adv .twinrd-item:first-child { margin-left: 0; } .twinrd-adv .twinrd-item iframe { width: 100% !important; } </style> <script type="text/javascript" src="https://t.bopako.com/redirect/?spot_id=512&ct=straight"></script> </div> <div class="container mt10"> <div class="c-title"> <h2 class="c-mt-output">Categories</h2> </div> <div class="c-content categories-bottom"> <div class="catb-lists"> <ul class="catb-list"> <li> <a href="/3d" title="3D"> <span class="total">1410</span> <span class="title">3D </span> </a> </li> <li> <a href="/4k" title="4K"> <span class="total">571</span> <span class="title">4K </span> </a> </li> <li> <a href="/amateur" title="Amateur"> <span class="total">173777</span> <span class="title">Amateur </span> </a> </li> <li> <a href="/anal" title="Anal"> <span class="total">32929</span> <span class="title">Anal </span> </a> </li> <li> <a href="/asian" title="Asian"> <span class="total">41537</span> <span class="title">Asian </span> </a> </li> <li> <a href="/ass" title="Ass"> <span class="total">30728</span> <span class="title">Ass </span> </a> </li> <li> <a href="/asslick" title="Asslick"> <span class="total">2121</span> <span class="title">Asslick </span> </a> </li> <li> <a href="/bbw" title="BBW"> <span class="total">15069</span> <span class="title">BBW </span> </a> </li> <li> <a href="/bdsm" title="BDSM"> <span class="total">6479</span> <span class="title">BDSM </span> </a> </li> <li> <a href="/babe" title="Babe"> <span class="total">50782</span> <span class="title">Babe </span> </a> </li> <li> <a href="/beach" title="Beach"> <span class="total">1776</span> <span class="title">Beach </span> </a> </li> <li> <a href="/big-boobs" title="Big Boobs"> <span class="total">77290</span> <span class="title">Big Boobs </span> </a> </li> <li> <a href="/big-cocks" title="Big Cocks"> <span class="total">43696</span> <span class="title">Big Cocks </span> </a> </li> <li> <a href="/bisexual" title="Bisexual"> <span class="total">861</span> <span class="title">Bisexual </span> </a> </li> <li> <a href="/black-and-ebony" title="Black And Ebony"> <span class="total">19895</span> <span class="title">Black And Ebony </span> </a> </li> <li> <a href="/blonde" title="Blonde"> <span class="total">86647</span> <span class="title">Blonde </span> </a> </li> <li> <a href="/blowjob" title="Blowjob"> <span class="total">139180</span> <span class="title">Blowjob </span> </a> </li> <li> <a href="/brazilian" title="Brazilian"> <span class="total">1509</span> <span class="title">Brazilian </span> </a> </li> </ul><ul class="catb-list"> <li> <a href="/british" title="British"> <span class="total">1660</span> <span class="title">British </span> </a> </li> <li> <a href="/brunette" title="Brunette"> <span class="total">131662</span> <span class="title">Brunette </span> </a> </li> <li> <a href="/bukkake" title="Bukkake"> <span class="total">712</span> <span class="title">Bukkake </span> </a> </li> <li> <a href="/cfnm" title="CFNM"> <span class="total">826</span> <span class="title">CFNM </span> </a> </li> <li> <a href="/casting" title="Casting"> <span class="total">1148</span> <span class="title">Casting </span> </a> </li> <li> <a href="/celebrity" title="Celebrity"> <span class="total">139</span> <span class="title">Celebrity </span> </a> </li> <li> <a href="/chinese" title="Chinese"> <span class="total">1541</span> <span class="title">Chinese </span> </a> </li> <li> <a href="/close-up" title="Close-up"> <span class="total">15684</span> <span class="title">Close-up </span> </a> </li> <li> <a href="/college" title="College"> <span class="total">7293</span> <span class="title">College </span> </a> </li> <li> <a href="/creampie" title="Creampie"> <span class="total">5058</span> <span class="title">Creampie </span> </a> </li> <li> <a href="/cuckold" title="Cuckold"> <span class="total">4412</span> <span class="title">Cuckold </span> </a> </li> <li> <a href="/cumshot" title="Cumshot"> <span class="total">29161</span> <span class="title">Cumshot </span> </a> </li> <li> <a href="/czech" title="Czech"> <span class="total">691</span> <span class="title">Czech </span> </a> </li> <li> <a href="/doggystyle" title="Doggystyle"> <span class="total">31465</span> <span class="title">Doggystyle </span> </a> </li> <li> <a href="/double-penetration" title="Double Penetration"> <span class="total">6154</span> <span class="title">Double Penetration </span> </a> </li> <li> <a href="/erotic" title="Erotic"> <span class="total">1057</span> <span class="title">Erotic </span> </a> </li> <li> <a href="/european" title="European"> <span class="total">13961</span> <span class="title">European </span> </a> </li> <li> <a href="/facial" title="Facial"> <span class="total">8204</span> <span class="title">Facial </span> </a> </li> </ul><ul class="catb-list"> <li> <a href="/fat" title="Fat"> <span class="total">6506</span> <span class="title">Fat </span> </a> </li> <li> <a href="/femdom" title="Femdom"> <span class="total">3546</span> <span class="title">Femdom </span> </a> </li> <li> <a href="/fetish" title="Fetish"> <span class="total">20469</span> <span class="title">Fetish </span> </a> </li> <li> <a href="/fingering" title="Fingering"> <span class="total">33227</span> <span class="title">Fingering </span> </a> </li> <li> <a href="/first-time" title="First time"> <span class="total">253</span> <span class="title">First time </span> </a> </li> <li> <a href="/fisting" title="Fisting"> <span class="total">1890</span> <span class="title">Fisting </span> </a> </li> <li> <a href="/foot-fetish" title="Foot Fetish"> <span class="total">4170</span> <span class="title">Foot Fetish </span> </a> </li> <li> <a href="/french" title="French"> <span class="total">2820</span> <span class="title">French </span> </a> </li> <li> <a href="/funny" title="Funny"> <span class="total">261</span> <span class="title">Funny </span> </a> </li> <li> <a href="/gangbang" title="Gangbang"> <span class="total">10999</span> <span class="title">Gangbang </span> </a> </li> <li> <a href="/gaping" title="Gaping"> <span class="total">2266</span> <span class="title">Gaping </span> </a> </li> <li> <a href="/german" title="German"> <span class="total">7168</span> <span class="title">German </span> </a> </li> <li> <a href="/glory-hole" title="Glory hole"> <span class="total">818</span> <span class="title">Glory hole </span> </a> </li> <li> <a href="/granny" title="Granny"> <span class="total">2352</span> <span class="title">Granny </span> </a> </li> <li> <a href="/group-sex" title="Group Sex"> <span class="total">13092</span> <span class="title">Group Sex </span> </a> </li> <li> <a href="/hairy" title="Hairy"> <span class="total">12421</span> <span class="title">Hairy </span> </a> </li> <li> <a href="/handjob" title="Handjob"> <span class="total">36511</span> <span class="title">Handjob </span> </a> </li> <li> <a href="/hardcore" title="Hardcore"> <span class="total">151943</span> <span class="title">Hardcore </span> </a> </li> </ul><ul class="catb-list"> <li> <a href="/hd" title="Hd"> <span class="total">86284</span> <span class="title">Hd </span> </a> </li> <li> <a href="/hentai" title="Hentai"> <span class="total">925</span> <span class="title">Hentai </span> </a> </li> <li> <a href="/hidden-cams" title="Hidden Cams"> <span class="total">3749</span> <span class="title">Hidden Cams </span> </a> </li> <li> <a href="/indian" title="Indian"> <span class="total">2702</span> <span class="title">Indian </span> </a> </li> <li> <a href="/interracial" title="Interracial"> <span class="total">39537</span> <span class="title">Interracial </span> </a> </li> <li> <a href="/italian" title="Italian"> <span class="total">1327</span> <span class="title">Italian </span> </a> </li> <li> <a href="/japanese" title="Japanese"> <span class="total">24022</span> <span class="title">Japanese </span> </a> </li> <li> <a href="/korean" title="Korean"> <span class="total">897</span> <span class="title">Korean </span> </a> </li> <li> <a href="/latex" title="Latex"> <span class="total">2153</span> <span class="title">Latex </span> </a> </li> <li> <a href="/latin" title="Latin"> <span class="total">9256</span> <span class="title">Latin </span> </a> </li> <li> <a href="/lesbian" title="Lesbian"> <span class="total">23841</span> <span class="title">Lesbian </span> </a> </li> <li> <a href="/lick" title="Lick"> <span class="total">18809</span> <span class="title">Lick </span> </a> </li> <li> <a href="/lingerie" title="Lingerie"> <span class="total">16803</span> <span class="title">Lingerie </span> </a> </li> <li> <a href="/massage" title="Massage"> <span class="total">1672</span> <span class="title">Massage </span> </a> </li> <li> <a href="/masturbation" title="Masturbation"> <span class="total">67091</span> <span class="title">Masturbation </span> </a> </li> <li> <a href="/mature" title="Mature"> <span class="total">17928</span> <span class="title">Mature </span> </a> </li> <li> <a href="/milf" title="Milf"> <span class="total">60404</span> <span class="title">Milf </span> </a> </li> <li> <a href="/nipples" title="Nipples"> <span class="total">7890</span> <span class="title">Nipples </span> </a> </li> </ul><ul class="catb-list"> <li> <a href="/nylon" title="Nylon"> <span class="total">2894</span> <span class="title">Nylon </span> </a> </li> <li> <a href="/old-young" title="Old+Young (18+)"> <span class="total">2577</span> <span class="title">Old+Young (18+) </span> </a> </li> <li> <a href="/outdoor" title="Outdoor"> <span class="total">14762</span> <span class="title">Outdoor </span> </a> </li> <li> <a href="/pov" title="POV"> <span class="total">38406</span> <span class="title">POV </span> </a> </li> <li> <a href="/panties" title="Panties"> <span class="total">6256</span> <span class="title">Panties </span> </a> </li> <li> <a href="/pornstar" title="Pornstar"> <span class="total">12279</span> <span class="title">Pornstar </span> </a> </li> <li> <a href="/public" title="Public"> <span class="total">2646</span> <span class="title">Public </span> </a> </li> <li> <a href="/reality" title="Reality"> <span class="total">4941</span> <span class="title">Reality </span> </a> </li> <li> <a href="/redhead" title="Redhead"> <span class="total">13070</span> <span class="title">Redhead </span> </a> </li> <li> <a href="/russian" title="Russian"> <span class="total">3932</span> <span class="title">Russian </span> </a> </li> <li> <a href="/shower" title="Shower"> <span class="total">2833</span> <span class="title">Shower </span> </a> </li> <li> <a href="/small-cocks" title="Small Cocks"> <span class="total">359</span> <span class="title">Small Cocks </span> </a> </li> <li> <a href="/small-tits" title="Small Tits"> <span class="total">28343</span> <span class="title">Small Tits </span> </a> </li> <li> <a href="/softcore" title="Softcore"> <span class="total">16895</span> <span class="title">Softcore </span> </a> </li> <li> <a href="/solo" title="Solo"> <span class="total">63055</span> <span class="title">Solo </span> </a> </li> <li> <a href="/spanking" title="Spanking"> <span class="total">1582</span> <span class="title">Spanking </span> </a> </li> <li> <a href="/squirting" title="Squirting"> <span class="total">2816</span> <span class="title">Squirting </span> </a> </li> <li> <a href="/stockings" title="Stockings"> <span class="total">24088</span> <span class="title">Stockings </span> </a> </li> </ul><ul class="catb-list"> <li> <a href="/strapon" title="Strapon"> <span class="total">2425</span> <span class="title">Strapon </span> </a> </li> <li> <a href="/striptease" title="Striptease"> <span class="total">2859</span> <span class="title">Striptease </span> </a> </li> <li> <a href="/swingers" title="Swingers"> <span class="total">1110</span> <span class="title">Swingers </span> </a> </li> <li> <a href="/teen" title="Teen (18+)"> <span class="total">60571</span> <span class="title">Teen (18+) </span> </a> </li> <li> <a href="/thai" title="Thai"> <span class="total">2152</span> <span class="title">Thai </span> </a> </li> <li> <a href="/threesome" title="Threesome"> <span class="total">24673</span> <span class="title">Threesome </span> </a> </li> <li> <a href="/titjob" title="Titjob"> <span class="total">1942</span> <span class="title">Titjob </span> </a> </li> <li> <a href="/toys" title="Toys"> <span class="total">45067</span> <span class="title">Toys </span> </a> </li> <li> <a href="/uniform" title="Uniform"> <span class="total">1651</span> <span class="title">Uniform </span> </a> </li> <li> <a href="/upskirt" title="Upskirt"> <span class="total">673</span> <span class="title">Upskirt </span> </a> </li> <li> <a href="/vintage" title="Vintage"> <span class="total">1923</span> <span class="title">Vintage </span> </a> </li> <li> <a href="/voyeur" title="Voyeur"> <span class="total">6388</span> <span class="title">Voyeur </span> </a> </li> <li> <a href="/webcam" title="Webcam"> <span class="total">56167</span> <span class="title">Webcam </span> </a> </li> </ul> </div> <div class="wr-allcategories"> <a href="/categories" class="l-allcategories"><span>All Categories</span></a> </div> </div> </div> <div class="footer"> <div class="rta"> <a href="http://rtalabel.org/?content=validate&rating=RTA-5042-1996-1400-1577-RTA" target="_blank" rel="nofollow"><img src="https://e8.yptpsn.com/templates/yeptube/images/rta_verified.gif" alt="RTA Verified" rel="nofollow" width="88" height="31" border="0" /></a> </div> <div class="f-content"> <span class="copyright">&copy; 2013 - 2024 YEPTUBE.COM ALL RIGHTS RESERVED</span> <ul class="f-list"> <li><a href="/static/dmca">DMCA INFO</a></li> <li><a href="/static/terms">TERMS</a></li> <li><a href="/static/privacy">PRIVACY POLICY</a></li> <li><a href="/static/2257">18 U.S.C. 2257</a></li> <li><a href="/feedback">FEEDBACK</a></li> <li><a href="http://tubeprofit.com/">WEBMASTERS PROGRAM</a></li> <li><a href="/static/advertise">Advertise</a></li> </ul> </div> </div> </div> <!-- WRAPPER --> </div> <!-- W1 --> <div id="popupForm" style="display: none;"></div> <div id="formOverlay" style="display: none;">&nbsp;</div> <script type="text/javascript" src="https://e8.yptpsn.com/templates/base_master/js/history_api.js?v=17.99"></script> <script type="text/javascript">
*/
class YepTubeService extends searchService_1.default {
    constructor() {
        super('https://www.yeptube.com/search/videos');
    }
    search(query) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryFormatted = query.split(' ').join('+');
            const url = `${this.baseURL}/${queryFormatted}`;
            const data = yield (yield fetch(url)).text();
            fs_1.default.writeFileSync('yeptube.html', data);
            const $ = cheerio_1.default.load(data, { xmlMode: true });
            //the content is inside a script tag, and inside the script tag there is a class video
            //the filter it's not working, it's returning 0
            const videos = $('ins');
            console.log(videos);
            videos.each((_, element) => {
                const title = $(element).find('a').attr('title') || '';
                const url = this.baseURL.replace('search/videos', '') + $(element).find('a').attr('href') || '';
                const thumbnail = $(element).find('img').attr('src') || '';
                const duration = $(element).find('span.time').text() || '';
                this.addVideo(new Video_1.default(title, url, [], '', duration, thumbnail));
            });
            return this.getVideos();
        });
    }
}
exports.default = YepTubeService;

function disha_() {
    patroload();
}
function patroload() {
    document.getElementById("disha-content").innerHTML = dishaHTML;
    document.getElementById("nakshatra-pada-content").innerHTML = nkshpadaHTML;
    document.getElementById("subh-content").innerHTML = subhHTML;
}

const dishaHTML = `
<div class="col-lg-12">
                    <table class="table table-sm table-bordered text-middle text-center devanagari-text">
                        <tbody>
                            <tr class="bg-danger fs-5 text-light rounded-2">
                                <th colspan="3">वार, नक्षत्र, शुला शाहीत योगिनी चक्रम</th>
                            </tr>
                            <tr>
                                <td>
                                    बुध, शुक्र
                                    <br>
                                    ईशान
                                    <i class="bi bi-arrow-up-left p-2 ">NE</i>
                                    <br>
                                    ८|३०
                                </td>
                                <td>
                                    सोम, शनि
                                    <br>
                                    पुर्व
                                    <i class="bi bi-arrow-up p-2 ">E</i>
                                    <br>
                                    १(ज्येष्ठा) ९
                                </td>
                                <td>
                                    सोम, विही
                                    <br>
                                    आग्नेय
                                    <i class="bi bi-arrow-up-right p-2 ">SE</i>
                                    <br>
                                    ३|११
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    मङ्गल, बुध
                                    <br>
                                    उत्तर
                                    <i class="bi bi-arrow-left p-2 ">N</i>
                                    <br>
                                    २(उ. फा.)१०
                                </td>
                                <td class="si-om fs-1">
                                    ç
                                </td>
                                <td>
                                    बृहस्पति
                                    <br>
                                    दक्षिण
                                    <i class="bi bi-arrow-right p-2 ">S</i>
                                    <br>
                                    ५(घ. श. पू. उ. रे)१३
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    मङ्गल
                                    <br>
                                    वायव्य
                                    <i class="bi bi-arrow-down-left p-2 ">NW</i>
                                    <br>
                                    ७|१५
                                </td>
                                <td>
                                    आइत, शुक्र
                                    <br>
                                    पश्चिम
                                    <i class="bi bi-arrow-down p-2 ">W</i>
                                    <br>
                                    ६(रोहिणी) १४
                                </td>
                                <td>
                                    आइत, शुक्र
                                    <br>
                                    नैऋत्य
                                    <i class="bi bi-arrow-down-right p-2 ">SW</i>
                                    <br>
                                    ४|१२
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                `;

const nkshpadaHTML = `
<!-- Nakshatra -->
            <div class="col-lg-12 table-responsive">
                <table class="table table-sm table-bordered text-center align-middle devanagari-text">
                    <tbody>
                        <tr>
                            <th class="bg-dark text-light">ग्रह / Planet</th>
                            <th class="bg-dark text-light">पद १ / Pada 1</th>
                            <th class="bg-dark text-light">पद २ / Pada 2</th>
                            <th class="bg-dark text-light">पद ३ / Pada 3</th>
                            <th class="bg-dark text-light">पद ४ / Pada 4</th>
                            <th class="bg-dark text-light">पद १ / Pada 1</th>
                            <th class="bg-dark text-light">पद २ / Pada 2</th>
                            <th class="bg-dark text-light">पद ३ / Pada 3</th>
                            <th class="bg-dark text-light">पद ४ / Pada 4</th>
                            <th class="bg-dark text-light">पद १ / Pada 1</th>
                            <th class="bg-dark text-light">पद २ / Pada 2</th>
                            <th class="bg-dark text-light">पद ३ / Pada 3</th>
                            <th class="bg-dark text-light">पद ४ / Pada 4</th>
                            <th class="bg-dark text-light"></th>
                        </tr>
                        <tr>
                            <td></td>
                            <td colspan="12">नक्षत्र / Nakshyatra</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td rowspan="2">सूर्य / Sun</td>
                            <td colspan="4">उत्तराषाढा / Uttar Ashada</td>
                            <td colspan="4">कृत्तिका / Krittika</td>
                            <td colspan="4">उत्तर फाल्गुनी / Uttar Phalguni</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>राजा</td>
                            <td>मित्र-विरोधी</td>
                            <td>मानीने</td>
                            <td>धर्मात्मा</td>
                            <td>तेजस्वी</td>
                            <td>शास्त्रज्ञ</td>
                            <td>ऐश्वर्यशाली</td>
                            <td>दीर्घायु, धेरै पुत्र</td>
                            <td>पण्डित</td>
                            <td>राजा</td>
                            <td>विजयी</td>
                            <td>धर्मात्मा</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td rowspan="2">चन्द्र / Moon</td>
                            <td colspan="4">श्रवण / Shravan</td>
                            <td colspan="4">रोहिणी / Rohini</td>
                            <td colspan="4">हस्त / Hasta</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>श्रेष्ठमानी</td>
                            <td>श्रेष्ठगुणी</td>
                            <td>विद्वान</td>
                            <td>धर्मात्मा</td>
                            <td>शौभाग्यशाली</td>
                            <td>पीडायुक्त</td>
                            <td>डरपोक</td>
                            <td>सत्यवादी</td>
                            <td>शूर-वीर</td>
                            <td>विवादी</td>
                            <td>धन-धान्य-सम्पन्न</td>
                            <td>श्रीमान्</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td rowspan="2">मंगल / Mars</td>
                            <td colspan="4">धनिष्ठा / Dhanistha</td>
                            <td colspan="4">चित्रा / Chitra</td>
                            <td colspan="4">मृगशिरा / Mrigashira</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>धेरै आयु</td>
                            <td>पीडायुक्त</td>
                            <td>डरपोक</td>
                            <td>श्रेष्ठ स्त्री वाला</td>
                            <td>चोर</td>
                            <td>चित्रकार</td>
                            <td>पर-स्त्री-गामी</td>
                            <td>पण्डित</td>
                            <td>राजा</td>
                            <td>चोर</td>
                            <td>भोगी</td>
                            <td>धन-धान्य-सम्पन्न</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td rowspan="2">बुध / Mercury</td>
                            <td colspan="4">ज्येष्ठा / Jyestha</td>
                            <td colspan="4">रेवती / Revati</td>
                            <td colspan="4">अश्लेषा / Ashlesha</td>
                            <td>गण्डान्तो</td>
                        </tr>
                        <tr>
                            <td>क्रुर स्वभाव</td>
                            <td>भोगी</td>
                            <td>विद्वान</td>
                            <td>पुत्रवान्</td>
                            <td>ज्ञानी</td>
                            <td>चोर</td>
                            <td>युद्धमा क्षय</td>
                            <td>क्लेश युक्त</td>
                            <td>सन्तान रहित</td>
                            <td>पराया काम गर्नेवाला</td>
                            <td>रोगी</td>
                            <td>सौभाग्यशाली</td>
                            <td>अल्पायु</td>
                        </tr>
                        <tr>
                            <td rowspan="2">वृहस्पति / Jupiter</td>
                            <td colspan="4">पूर्व भद्रपदा / Purva Bhadrapada</td>
                            <td colspan="4">पुनर्वसु / Punarvasu</td>
                            <td colspan="4">विशाखा / Vishakha</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>शूर-वीर</td>
                            <td>चोर</td>
                            <td>श्रेष्ठ बुद्धि</td>
                            <td>पुरको स्वामी, भोगी</td>
                            <td>सुखी</td>
                            <td>विद्यावान्</td>
                            <td>रोगि</td>
                            <td>मृदुभाषी</td>
                            <td>नीतिज्ञ</td>
                            <td>शास्त्रज्ञ</td>
                            <td>विवादी</td>
                            <td>दीर्घायु</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td rowspan="2">शुक्र / Venus</td>
                            <td colspan="4">पुर्वाषाढा / Purva Ashada</td>
                            <td colspan="4">भरणी / Bharani</td>
                            <td colspan="4">पूर्व फाल्गुनी / Purva Phalguni</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>श्रेष्ठ पुरुष</td>
                            <td>राजाको प्रिय</td>
                            <td>वालाविवादी</td>
                            <td>धनि</td>
                            <td>त्यागी</td>
                            <td>धनवान र सुखी</td>
                            <td>क्रुर कर्म गर्छ</td>
                            <td>दरिद्री</td>
                            <td>सामर्थ्यवान्</td>
                            <td>धर्मात्मा</td>
                            <td>राजा</td>
                            <td>क्रुर, अल्पायु</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td rowspan="2">शनि / Saturn</td>
                            <td colspan="4">अनुराधा / Anuradha</td>
                            <td colspan="4">उत्तरा भाद्रपदा / Uttara Bhadrapada</td>
                            <td colspan="4">पुष्य / Pushya</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>तेजस्वी</td>
                            <td>धर्मात्मा</td>
                            <td>दीर्घायु</td>
                            <td>व्यविचारी</td>
                            <td>राजा</td>
                            <td>चोर</td>
                            <td>पुत्रवान्</td>
                            <td>सुखी</td>
                            <td>धेरै आयु</td>
                            <td>चोर</td>
                            <td>भोगी</td>
                            <td>बुद्धिमान्</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td rowspan="2">केतु / Ketu</td>
                            <td colspan="4">मूल / Moola</td>
                            <td colspan="4">अश्विनी / Ashwini</td>
                            <td colspan="4">मघा / Magha</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>भोगी</td>
                            <td>त्यागी</td>
                            <td>श्रेष्ठ मित्रवाला</td>
                            <td>राजा</td>
                            <td>चोर</td>
                            <td>थोरै कर्म गर्छ</td>
                            <td>श्रेष्ठ भाग्य वाला</td>
                            <td>दीर्घायु</td>
                            <td>सन्तान हीन</td>
                            <td>पुत्रवान्</td>
                            <td>कठिन रोग वाला</td>
                            <td>विद्वान्</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td rowspan="2">राहु / Rahu</td>
                            <td colspan="4">शतभिषा / Shatabhisha</td>
                            <td colspan="4">आर्द्रा / Ardra</td>
                            <td colspan="4">स्वाती / Swati</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>सुन्दर वाणी बोल्ने वाला</td>
                            <td>लक्ष्मीवान्</td>
                            <td>सुखी</td>
                            <td>पुत्रवान्</td>
                            <td>अधिक खर्चिलो</td>
                            <td>दरिद्री</td>
                            <td>अल्पायु</td>
                            <td>चोर</td>
                            <td>चोर</td>
                            <td>अल्पायु</td>
                            <td>धर्मात्मा</td>
                            <td>राजा</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
`;
const subhHTML = `<!-- Day Hora -->
        <div class='row'>
            <div class="col-lg-4 devanagari-text table-responsive">
                <table class="table table-sm table-striped table-bordered text-center">
                    <tbody>
                        <tr class="bg-warning fs-5 rounded-2">
                            <th colspan="10">दिनको वारबेला तालिका</th>
                        </tr>
                        <tr>
                            <td>घ.प.</td>
                            <td>३|४५</td>
                            <td>७|३०</td>
                            <td>११|१५</td>
                            <td>१५|०</td>
                            <td>१८|४५</td>
                            <td>२२|३०</td>
                            <td>२६|१५</td>
                            <td>३०|०</td>
                        </tr>
                        <tr>
                            <td>आइत</td>
                            <td>उद्वेगः</td>
                            <td>चरः</td>
                            <td>लाभः</td>
                            <td>अमृतः</td>
                            <td>कालः</td>
                            <td>शुभः</td>
                            <td>रोगः</td>
                            <td>उद्वेगः</td>
                        </tr>
                        <tr>
                            <td>सोम</td>
                            <td>अमृतः</td>
                            <td>कालः</td>
                            <td>शुभः</td>
                            <td>रोगः</td>
                            <td>उद्वेगः</td>
                            <td>चरः</td>
                            <td>लाभः</td>
                            <td>अमृतः</td>
                        </tr>
                        <tr>
                            <td>मङ्गल</td>
                            <td>रोगः</td>
                            <td>उद्वेगः</td>
                            <td>चरः</td>
                            <td>लाभः</td>
                            <td>अमृतः</td>
                            <td>कालः</td>
                            <td>शुभः</td>
                            <td>रोगः</td>
                        </tr>
                        <tr>
                            <td>बुध</td>
                            <td>लाभः</td>
                            <td>अमृतः</td>
                            <td>कालः</td>
                            <td>शुभः</td>
                            <td>रोगः</td>
                            <td>उद्वेगः</td>
                            <td>चरः</td>
                            <td>लाभः</td>
                        </tr>
                        <tr>
                            <td>विही</td>
                            <td>शुभः</td>
                            <td>रोगः</td>
                            <td>उद्वेगः</td>
                            <td>चरः</td>
                            <td>लाभः</td>
                            <td>अमृतः</td>
                            <td>कालः</td>
                            <td>शुभः</td>
                        </tr>
                        <tr>
                            <td>शुक्र</td>
                            <td>चरः</td>
                            <td>लाभः</td>
                            <td>अमृतः</td>
                            <td>कालः</td>
                            <td>शुभः</td>
                            <td>रोगः</td>
                            <td>उद्वेगः</td>
                            <td>चरः</td>
                        </tr>
                        <tr>
                            <td>शनि</td>
                            <td>कालः</td>
                            <td>शुभः</td>
                            <td>रोगः</td>
                            <td>उद्वेगः</td>
                            <td>चरः</td>
                            <td>लाभः</td>
                            <td>अमृतः</td>
                            <td>कालः</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <!-- Night Hora -->
            <div class="col-lg-4 table-responsive">
                <table class="table  table-sm table-striped table-bordered text-center">
                    <tbody class="devanagari-text">
                        <tr class="bg-dark text-light rounded-2 fs-5">
                            <th colspan="10">रातको वारबेला तालिका</th>
                        </tr>
                        <tr>
                            <td>आइत</td>
                            <td>शुभः</td>
                            <td>रोगः</td>
                            <td>उद्वेगः</td>
                            <td>चरः</td>
                            <td>लाभः</td>
                            <td>अमृतः</td>
                            <td>कालः</td>
                            <td>शुभः</td>
                        </tr>
                        <tr>
                            <td>सोम</td>
                            <td>चरः</td>
                            <td>लाभः</td>
                            <td>अमृतः</td>
                            <td>कालः</td>
                            <td>शुभः</td>
                            <td>रोगः</td>
                            <td>उद्वेगः</td>
                            <td>चरः</td>
                        </tr>
                        <tr>
                            <td>मङ्गल</td>
                            <td>कालः</td>
                            <td>शुभः</td>
                            <td>रोगः</td>
                            <td>उद्वेगः</td>
                            <td>चरः</td>
                            <td>लाभः</td>
                            <td>अमृतः</td>
                            <td>कालः</td>
                        </tr>
                        <tr>
                            <td>बुध</td>
                            <td>उद्वेगः</td>
                            <td>चरः</td>
                            <td>लाभः</td>
                            <td>अमृतः</td>
                            <td>कालः</td>
                            <td>शुभः</td>
                            <td>रोगः</td>
                            <td>उद्वेगः</td>
                        </tr>
                        <tr>
                            <td>विही</td>
                            <td>अमृतः</td>
                            <td>कालः</td>
                            <td>शुभः</td>
                            <td>रोगः</td>
                            <td>उद्वेगः</td>
                            <td>चरः</td>
                            <td>लाभः</td>
                            <td>अमृतः</td>
                        </tr>
                        <tr>
                            <td>शुक्र</td>
                            <td>रोगः</td>
                            <td>उद्वेगः</td>
                            <td>चरः</td>
                            <td>लाभः</td>
                            <td>अमृतः</td>
                            <td>कालः</td>
                            <td>शुभः</td>
                            <td>रोगः</td>
                        </tr>
                        <tr>
                            <td>शनि</td>
                            <td>लाभः</td>
                            <td>अमृतः</td>
                            <td>कालः</td>
                            <td>शुभः</td>
                            <td>रोगः</td>
                            <td>उद्वेगः</td>
                            <td>चरः</td>
                            <td>लाभः</td>
                        </tr>
                        <tr>
                            <td>घ.मि.</td>
                            <td>१:३०</td>
                            <td>३:००</td>
                            <td>४:३०</td>
                            <td>६:००</td>
                            <td>७:३०</td>
                            <td>९:००</td>
                            <td>१०:३०</td>
                            <td>१२:००</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div> `;

document.addEventListener("DOMContentLoaded", disha_);

function openTab(tabName1) {
    const tabs = document.getElementsByClassName('tab-content');
    const result = document.getElementsByClassName('result');
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('active');
    }
    for (let i = 0; i < result.length; i++) {
        result[i].classList.remove('active');
    }
    document.getElementById(tabName1).classList.add('active');
    // document.getElementById(tabName2).classList.add('active');
}
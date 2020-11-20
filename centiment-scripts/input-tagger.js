
/**
 * Author: Moin Khan
 * Dated: 20 Nov 2020
 * Lastest Deploy: 20 Nov 2020
 */


//Initialize params
var LocPath = window.location.pathname;
var inputCustom = document.createElement("input");
inputCustom.type = "text";
inputCustom.name = "contact-source"
inputCustom.style = "display: none";

//Hero Input
var targetForm = document.getElementById("wf-form-Hero")
if (targetForm) {
    inputCustom.value = "cta-email-hero";
    targetForm.appendChild(inputCustom);
}

//Form Input
var targetForm = document.getElementById("cta-form-footer")
if (targetForm) {
    inputCustom.value = "cta-form-footer";
    targetForm.appendChild(inputCustom);
}

//Survey Tool
if (LocPath == '/margin-of-error') {
    var targetForm = document.getElementById("wf-form-Sidebar")
    if (targetForm) {
        inputCustom.value = "cta-email-sidebar";
        targetForm.appendChild(inputCustom);
    }
}

//Audience Panel
if (LocPath == '/audience-panel') {
    var targetForm = document.getElementById("wf-form-Survey")
    if (targetForm) {
        inputCustom.value = "cta-email-audiencePanel";
        targetForm.appendChild(inputCustom);
    }
}

//Customers
if (LocPath == '/customers') {
    var targetForm = document.getElementById("wf-form-Customers")
    if (targetForm) {
        inputCustom.value = "cta-email-customers";
        targetForm.appendChild(inputCustom);
    }

}


//MOE
if (LocPath == '/margin-of-error') {
    var targetForm = document.getElementById("wf-form-Sidebar")
    if (targetForm) {
        inputCustom.value = "cta-email-sidebar";
        targetForm.appendChild(inputCustom);
    }
}



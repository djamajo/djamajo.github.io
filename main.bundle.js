webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#section1{\r\n    padding-top: 45px;\r\n    padding-bottom: 45px;\r\n}\r\nh2.display-4{\r\n    font-size: 38px;\r\n}\r\n\r\n#section3{\r\n    background: url(/assets/img/carou3.jpeg);\r\n    height: 75%;\r\n    width: 100%;\r\n    background-size: cover;\r\n    background-position: center;\r\n    position: relative;\r\n}\r\n#section3 .container{\r\n    padding-top: 50px;\r\n    padding-bottom: 45px;\r\n}\r\n\r\n#section3 .row{\r\n padding-top: 25px;\r\n}\r\n\r\n#section3 h6{\r\n    margin-top: 20px;\r\n}\r\n#section3 .fa:hover{\r\n    color:#00ad5f;\r\n}\r\n\r\n.secimage{\r\n    position:absolute;\r\n    background-color: rgba(255, 255, 255, 0.712);\r\n    background-size: cover;\r\n    background-position: center;\r\n    top: 0;\r\n    bottom: 0;\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n\r\n\r\n#titles3{\r\n    color: #90EE90;\r\n}\r\nhr{\r\n    width: 10%;\r\n    height: 0.2%;\r\n    background-color:#00ad5f;\r\n}\r\n\r\n#subscribe{\r\n    background: url(/assets/img/subscribe-bg.png);\r\n    height: 35%;\r\n    width: 100%;\r\n    background-size: cover;\r\n    background-position: center;\r\n    /* position: relative; */\r\n}\r\n\r\n#subscribe h4{\r\n    font-size: 45px;\r\n}\r\n#subscribe form{\r\n    padding-top: 8px;\r\n}\r\n\r\n#subscribe .container{\r\n    padding-top: 20px;\r\n}\r\n\r\nform .subscribe-btn{\r\n margin-top: 5px;\r\n background-color: #708090;\r\n border-color: #708090\r\n}\r\n@media only screen and (max-width:500px){\r\n    #title{\r\n        font-size: 45px;\r\n    }\r\n    #section1 h2{\r\n        font-size: 25px;\r\n    }\r\n    .container h4{\r\n        font-size: 38px;\r\n    }\r\n    #subscribe h4{\r\n        font-size: 33px;\r\n    }\r\n    #subscribe span{\r\n        font-size: 13px;\r\n    }\r\n    #subscribe .container{\r\n        padding-top: 10px;\r\n    }\r\n\r\n}\r\n@media only screen and (min-width:1366px) {\r\n    #subscribe .container{\r\n        padding-top: 65px;\r\n    }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"section1\">\n\n  <div class=\"container text-center\">\n    <h2 class=\"display-4\" style=\"color:#00ad5f\">\n      Communiquer,\n      <span class=\"text-muted\"> avec tout le monde à un instant précis ne dois\n        <br> pas etre aussi compliqué que cela.</span>\n    </h2>\n    <!-- <hr> -->\n  </div>\n</div>\n\n\n<div id=\"section3\">\n  <div class=\"secimage\">\n    <div class=\"container text-center\">\n      <h2 class=\"display-4\">Pourquoi\n        <span style=\"color:#00ad5f\">HUBCOM</span> ?</h2>\n      <hr>\n      <div class=\"row\">\n        <div class=\"col-md-4 col-sm-4\">\n          <i class=\"fa fa-address-book-o fa-4x\" aria-hidden=\"true\"></i>\n          <h6>GERER VOS CONTACT</h6>\n          <p> Hubcom, vous permet de stocker vos contacts en ligne et d'y acceder quand vous avez besion peu importe le lieu\n            ou vous vous trouver.</p>\n        </div>\n        <div class=\"col-md-4 col-sm-4\">\n          <i class=\"fa fa-globe fa-4x\" aria-hidden=\"true\"></i>\n          <h6>ACCES DEPUIS N'IMPORTE OU, N'IMPORTE QUAND</h6>\n          <p>Les interfaces réactives de Hubcom permettent aux gestionnaires de garder le contrôle depuis un téléphone mobile,\n            une tablette, un ordinateur portable ou un ordinateur de bureau.</p>\n        </div>\n\n        <div class=\"col-md-4 col-sm-4\">\n          <i class=\"fa fa-money fa-4x\" aria-hidden=\"true\"></i>\n          <h6>PRIX UNIQUE</h6>\n          <p> Avec hucom peut importe l'operateur mobile vos sms sont facturés à un prix unique.</p>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-4 col-sm-4\">\n          <i class=\"fa fa-fighter-jet fa-4x\" aria-hidden=\"true\"></i>\n          <h6>RAPIDE</h6>\n          <p>hucom, facilite l'envoie d'un sms à un ou plusieurs contacts en un seul click à la seconde.</p>\n        </div>\n        <div class=\"col-md-4 col-sm-4\">\n          <i class=\"fa fa-exchange fa-4x\" aria-hidden=\"true\"></i>\n          <h6>PRIX SIMPLE POUR TOUS RESEAUX</h6>\n          <p>Hubcom garantit des prix simples et sans tracas. Pas de frais cachés, pas de frais supplémentaires.</p>\n        </div>\n        <div class=\"col-md-4 col-sm-4\">\n          <i class=\"fa fa-paper-plane fa-4x\" aria-hidden=\"true\"></i>\n          <h6>PLANIFIER ET NOUS FAISONS LE RESTE</h6>\n          <p>Quoi de plus simple de plannifier vos communications à des dates ulterieures et nous les transmetrons pour vous.</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- <div class=\"container\">\n  <h4 class=\"display-4 text-center\">Meet the team</h4>\n  <hr class=\"my-3\">\n  <div class=\"row\">\n    <div class=\"col-md-4 text-center\">\n      <img src=\"assets/img/user1.jpg\" alt=\"\" class=\"rounded-circle\" width=\"120px\" height=\"120px\">\n      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.\n\n      </p>\n    </div>\n    <div class=\"col-md-4 text-center\">\n      <img src=\"assets/img/user1.jpg\" alt=\"\" class=\"rounded-circle\" width=\"120px\" height=\"120px\">\n      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.\n      </p>\n    </div>\n    <div class=\"col-md-4 text-center\">\n      <img src=\"assets/img/user1.jpg\" alt=\"\" class=\"rounded-circle\" width=\"120px\" height=\"120px\">\n      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.\n      </p>\n    </div>\n  </div>\n</div> -->\n\n<!-- <div id=\"subscribe\">\n  <div class=\"container text-center\">\n    <div class=\"row\">\n      <div class=\"col-sm-6 offset-sm-3\">\n        <h4 class=\"display-4\">Subscribe</h4>\n        <span class=\"text-muted\">\n          Please subscribe to our newsletter so you can learn the updates for new products before anyone else.\n          <br> Also we will spam your mailbox.\n        </span>\n        <form>\n          <div class=\"form-group\">\n            <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\">\n            <button class=\"btn btn-primary subscribe-btn\">Submit</button>\n          </div>\n        </form>\n      </div>\n    </div>\n\n  </div>\n</div> -->"

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("../../../../../src/app/about/about.component.html"),
            styles: [__webpack_require__("../../../../../src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/achetercredit/achetercredit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content{\r\n    margin-left: 250px; /* Same as the width of the sidebar */\r\n    padding:10px;\r\n    padding-top: 80px;\r\n}\r\n\r\n.container {\r\n    padding-top: 20px;\r\n}\r\n.active{\r\n    background-color: #204d7a;\r\n    border:#204d7a;\r\n}\r\n#pricing{\r\n    background-color:#eee;\r\n}\r\n.z-depth-5{\r\n    box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.3);\r\n  }\r\n\r\n.container .row{\r\n    margin-top: 10px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/achetercredit/achetercredit.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div class=\"content\">\n  <h2 class=\"text-muted text-center\">Buy a Package</h2>\n\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n        <ul class=\"list-group text-center z-depth-5\">\n          <li class=\"list-group-item active\"><b>Basic</b></li>\n          <li class=\"list-group-item\" id=\"pricing\">$ 9.99 / year</li>\n          <li class=\"list-group-item\">10 Emails</li>\n          <li class=\"list-group-item\">10 Domains</li>\n          <li class=\"list-group-item\">1GB Bandwidth</li>\n          <button class=\"btn btn-lg btn-success btn-block\">Acheter</button>\n        </ul>\n      </div>\n      <div class=\"col-md-4\">\n        <ul class=\"list-group text-center z-depth-5\">\n          <li class=\"list-group-item active\"><b>Pro</b></li>\n          <li class=\"list-group-item\" id=\"pricing\">$ 24.99 / year</li>\n          <li class=\"list-group-item\">25 Emails</li>\n          <li class=\"list-group-item\">25 Domains</li>\n          <li class=\"list-group-item\">2GB Bandwidth</li>\n          <button class=\"btn btn-lg btn-success btn-block\">Acheter</button>\n        </ul>\n      </div>\n      <div class=\"col-md-4\">\n          <ul class=\"list-group text-center z-depth-5\">\n          <li class=\"list-group-item active\"><b>Premium</b></li>\n          <li class=\"list-group-item\" id=\"pricing\">$ 49.99 / year</li>\n          <li class=\"list-group-item\">50 Emails</li>\n          <li class=\"list-group-item\">50 Domains</li>\n          <li class=\"list-group-item\">5GB Bandwidth</li>\n          <button class=\"btn btn-lg btn-success btn-block\">Acheter</button>\n         </ul>\n      </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-md-4\">\n          <ul class=\"list-group text-center z-depth-5\">\n            <li class=\"list-group-item active\"><b>Basic</b></li>\n            <li class=\"list-group-item\" id=\"pricing\">$ 9.99 / year</li>\n            <li class=\"list-group-item\">10 Emails</li>\n            <li class=\"list-group-item\">10 Domains</li>\n            <li class=\"list-group-item\">1GB Bandwidth</li>\n            <button class=\"btn btn-lg btn-success btn-block\">Acheter</button>\n          </ul>\n        </div>\n        <div class=\"col-md-4\">\n          <ul class=\"list-group text-center z-depth-5\">\n            <li class=\"list-group-item active\"><b>Pro</b></li>\n            <li class=\"list-group-item\" id=\"pricing\">$ 24.99 / year</li>\n            <li class=\"list-group-item\">25 Emails</li>\n            <li class=\"list-group-item\">25 Domains</li>\n            <li class=\"list-group-item\">2GB Bandwidth</li>\n            <button class=\"btn btn-lg btn-success btn-block\">Acheter</button>\n          </ul>\n        </div>\n        <div class=\"col-md-4\">\n            <ul class=\"list-group text-center z-depth-5\">\n            <li class=\"list-group-item active\"><b>Premium</b></li>\n            <li class=\"list-group-item\" id=\"pricing\">$ 49.99 / year</li>\n            <li class=\"list-group-item\">50 Emails</li>\n            <li class=\"list-group-item\">50 Domains</li>\n            <li class=\"list-group-item\">5GB Bandwidth</li>\n            <button class=\"btn btn-lg btn-success btn-block\">Acheter</button>\n           </ul>\n        </div>\n      </div>\n\n\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/achetercredit/achetercredit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AchetercreditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AchetercreditComponent = (function () {
    function AchetercreditComponent() {
    }
    AchetercreditComponent.prototype.ngOnInit = function () {
    };
    AchetercreditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-achetercredit',
            template: __webpack_require__("../../../../../src/app/achetercredit/achetercredit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/achetercredit/achetercredit.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AchetercreditComponent);
    return AchetercreditComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_services_component__ = __webpack_require__("../../../../../src/app/services/services.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__notfound_notfound_component__ = __webpack_require__("../../../../../src/app/notfound/notfound.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__registration_registration_component__ = __webpack_require__("../../../../../src/app/registration/registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_header_header_component__ = __webpack_require__("../../../../../src/app/components/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__messaging_messaging_component__ = __webpack_require__("../../../../../src/app/messaging/messaging.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__contacts_contacts_component__ = __webpack_require__("../../../../../src/app/contacts/contacts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__groups_groups_component__ = __webpack_require__("../../../../../src/app/groups/groups.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__cpsmessage_cpsmessage_component__ = __webpack_require__("../../../../../src/app/cpsmessage/cpsmessage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pdrmessage_pdrmessage_component__ = __webpack_require__("../../../../../src/app/pdrmessage/pdrmessage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__messagesent_messagesent_component__ = __webpack_require__("../../../../../src/app/messagesent/messagesent.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__achetercredit_achetercredit_component__ = __webpack_require__("../../../../../src/app/achetercredit/achetercredit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__recapmsg_recapmsg_component__ = __webpack_require__("../../../../../src/app/recapmsg/recapmsg.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__share_service__ = __webpack_require__("../../../../../src/app/share.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__impcontact_impcontact_component__ = __webpack_require__("../../../../../src/app/impcontact/impcontact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_loader_loader_component__ = __webpack_require__("../../../../../src/app/components/loader/loader.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







//components























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_9__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_10__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_11__services_services_component__["a" /* ServicesComponent */],
                __WEBPACK_IMPORTED_MODULE_12__contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_13__notfound_notfound_component__["a" /* NotfoundComponent */],
                __WEBPACK_IMPORTED_MODULE_14__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_15__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_16__registration_registration_component__["a" /* RegistrationComponent */],
                __WEBPACK_IMPORTED_MODULE_17__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_19__messaging_messaging_component__["a" /* MessagingComponent */],
                __WEBPACK_IMPORTED_MODULE_20__contacts_contacts_component__["a" /* ContactsComponent */],
                __WEBPACK_IMPORTED_MODULE_21__groups_groups_component__["a" /* GroupsComponent */],
                __WEBPACK_IMPORTED_MODULE_22__cpsmessage_cpsmessage_component__["a" /* CpsmessageComponent */],
                __WEBPACK_IMPORTED_MODULE_23__pdrmessage_pdrmessage_component__["a" /* PdrmessageComponent */],
                __WEBPACK_IMPORTED_MODULE_24__messagesent_messagesent_component__["a" /* MessagesentComponent */],
                __WEBPACK_IMPORTED_MODULE_25__achetercredit_achetercredit_component__["a" /* AchetercreditComponent */],
                __WEBPACK_IMPORTED_MODULE_26__recapmsg_recapmsg_component__["a" /* RecapmsgComponent */],
                __WEBPACK_IMPORTED_MODULE_28__impcontact_impcontact_component__["a" /* ImpcontactComponent */],
                __WEBPACK_IMPORTED_MODULE_29__components_loader_loader_component__["a" /* LoaderComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyBaxidoWRD7luPQBMHy22KtZ1EO1k86meE'
                }),
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot([
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_9__home_home_component__["a" /* HomeComponent */]
                    },
                    // {
                    //   path:'home',
                    //   component:HomeComponent
                    // },
                    // {
                    //   path:'about',
                    //   component:AboutComponent
                    // },
                    // {
                    //   path:'services',
                    //   component:ServicesComponent
                    // },
                    // {
                    //   path:'contact',
                    //   component:ContactComponent
                    // },
                    {
                        path: 'login',
                        component: __WEBPACK_IMPORTED_MODULE_15__login_login_component__["a" /* LoginComponent */]
                    },
                    {
                        path: 'signup',
                        component: __WEBPACK_IMPORTED_MODULE_16__registration_registration_component__["a" /* RegistrationComponent */]
                    },
                    {
                        path: 'dashboard',
                        component: __WEBPACK_IMPORTED_MODULE_17__dashboard_dashboard_component__["a" /* DashboardComponent */]
                    },
                    {
                        path: 'messaging',
                        component: __WEBPACK_IMPORTED_MODULE_19__messaging_messaging_component__["a" /* MessagingComponent */]
                    },
                    {
                        path: 'repertory/contacts',
                        component: __WEBPACK_IMPORTED_MODULE_20__contacts_contacts_component__["a" /* ContactsComponent */]
                    },
                    {
                        path: 'repertory/Groups',
                        component: __WEBPACK_IMPORTED_MODULE_21__groups_groups_component__["a" /* GroupsComponent */]
                    },
                    {
                        path: 'repertory/importContact',
                        component: __WEBPACK_IMPORTED_MODULE_28__impcontact_impcontact_component__["a" /* ImpcontactComponent */]
                    },
                    {
                        path: 'messaging/composeMessage',
                        component: __WEBPACK_IMPORTED_MODULE_22__cpsmessage_cpsmessage_component__["a" /* CpsmessageComponent */]
                    },
                    {
                        path: 'messaging/composeMessage/recapMessage',
                        component: __WEBPACK_IMPORTED_MODULE_26__recapmsg_recapmsg_component__["a" /* RecapmsgComponent */]
                    },
                    {
                        path: 'messaging/predifineMessage',
                        component: __WEBPACK_IMPORTED_MODULE_23__pdrmessage_pdrmessage_component__["a" /* PdrmessageComponent */]
                    },
                    {
                        path: 'messaging/messagesent',
                        component: __WEBPACK_IMPORTED_MODULE_24__messagesent_messagesent_component__["a" /* MessagesentComponent */]
                    },
                    {
                        path: 'credit/acheter',
                        component: __WEBPACK_IMPORTED_MODULE_25__achetercredit_achetercredit_component__["a" /* AchetercreditComponent */]
                    },
                    {
                        path: '**',
                        component: __WEBPACK_IMPORTED_MODULE_13__notfound_notfound_component__["a" /* NotfoundComponent */]
                    }
                ]),
                __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap__["a" /* BsDatepickerModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_6_ngx_pagination__["a" /* NgxPaginationModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_27__share_service__["a" /* ShareService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sidenav {\r\n    height: 100%; /* Full-height: remove this if you want \"auto\" height */\r\n    width: 250px; /* Set the width of the sidebar */\r\n    position: fixed; /* Fixed Sidebar (stay in place on scroll) */\r\n    z-index: 1; /* Stay on top */\r\n    top: 0; /* Stay at the top */\r\n    left: 0;\r\n    background-color:rgb(245, 245, 245); \r\n    overflow-x: hidden; /* Disable horizontal scroll */\r\n    padding-top: 90px;\r\n}\r\n\r\n/* The navigation menu links */\r\n.sidenav a {\r\n    padding: 6px 8px 6px 16px;\r\n    text-decoration: none;\r\n    font-size: 25px;\r\n    color: black;\r\n    display: block;\r\n    font-size: 18px;\r\n}\r\n\r\n.sideprofile{\r\n    display: none;\r\n}\r\n/* When you mouse over the navigation links, change their color */\r\n.sidenav a:hover {\r\n    background-color:#00ad5f;\r\n    color:#fff;\r\n}\r\n.btn-rounded-message{\r\n    border-radius: 50px;\r\n}\r\n.btn-rounded{\r\n    border-radius: 40px;\r\n}\r\n.fa-commenting{\r\n    color: #fff;\r\n}\r\n/* .navbar{\r\n    background-color: rgb(134, 255, 104) !important;\r\n} */\r\nbutton .navbar-toggler{\r\n    z-index: 1;\r\n}\r\n.navbar-nav.mr-auto > li{\r\n    margin-left: 125px;\r\n}\r\n.z-depth-3{\r\n    box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.027), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.075);\r\n  }\r\n\r\n/* Style page content */\r\n\r\n/* On smaller screens, where height is less than 450px, change the style of the sidebar (less padding and a smaller font size) */\r\n@media screen and (max-height: 450px) {\r\n    /* .sidenav {padding-top: 15px;}\r\n    .sidenav a {font-size: 18px;} */\r\n}\r\n@media screen and (max-width: 1200px) {\r\n    .sidenav{\r\n        left: -250px;\r\n    }\r\n    .sidenav a {\r\n        font-size: 18px;\r\n    }\r\n    .sideprofile{\r\n        display: inherit;\r\n    }\r\n}\r\n/* @media screen and (min-width: 1200px) {\r\n    .sidenav{\r\n        left:0 !important;\r\n    }\r\n} */\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top navbar-expand-xl navbar-light bg-light z-depth-3\">\n  <!-- data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" -->\n      <button class=\"navbar-toggler\" type=\"button\" >\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <a class=\"navbar-brand\" routerLink=\"\" style=\"color:#00ad5f\">\n         HUBCOM\n      </a>\n        <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n          <ul class=\"navbar-nav mr-auto\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link btn btn-success btn-rounded-message\" routerLink=\"/messaging/composeMessage\"><i class=\"fa fa-commenting fa-2x\" aria-hidden=\"true\"></i>\n              </a>\n            </li>\n          </ul>\n          <!-- <span class=\"navbar-text text-white\">\n              <span class=\"badge badge-pill badge-info\">0</span> Credit\n          </span> -->\n          <ul class=\"navbar-nav ml-auto\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link btn btn-success text-white btn-rounded\">\n               <b style=\"font-size:18px;\">4000</b> Credits\n              </a>\n            </li>\n            <li class=\"nav-item dropdown\">\n              <a class=\"nav-link dropdown-toggle\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n               <span style=\"color:black\">Welcome, Danny</span> \n                <!-- <img src=\"assets/img/user1.jpg\" width=\"45px\" height=\"45px\" alt=\"\" class=\"rounded-circle\"> -->\n              </a>\n              <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n                  <a class=\"dropdown-item\" href=\"#\">Profile</a>\n                  <a class=\"dropdown-item\" href=\"#\">Log out</a>\n              </div>\n            </li>\n          </ul>\n        </div>\n</nav>\n\n<div class=\"sidenav z-depth-3\">\n    <!-- <a routerLink=\"/messaging\">Messaging</a> -->\n    <ul class=\"navbar-nav\">\n      <li>\n          <a routerLink=\"/dashboard\"><i class=\"fa fa-tachometer\" aria-hidden=\"true\"></i> Dashboard</a>\n      </li>\n      <li data-toggle=\"collapse\" data-target=\"#repertoire\" class=\"collapsed active\">\n        <a class=\"dropdown\">\n            <i class=\"fa fa-address-book\" aria-hidden=\"true\"></i>\n             Repertoire\n        </a>\n        <div class=\"collapse\" id=\"repertoire\" style=\"margin-left:20px;\">\n          <li><a routerLink=\"/repertory/contacts\"><i class=\"fa fa-address-card-o\" aria-hidden=\"true\"></i>\n            Contact\n          </a></li>\n          <li><a routerLink=\"/repertory/Groups\"><i class=\"fa fa-users\" aria-hidden=\"true\"></i>\n            Group</a></li>\n          <li><a routerLink=\"/repertory/importContact\"><i class=\"fa fa-download\" aria-hidden=\"true\"></i>\n            Importer contact</a></li>\n        </div>\n      </li>\n      <li data-toggle=\"collapse\" data-target=\"#Messaging\" class=\"collapsed active\">\n        <a class=\"dropdown\">\n            <i class=\"fa fa-comments\" aria-hidden=\"true\"></i>\n             Messages\n        </a>\n        <div class=\"collapse\" id=\"Messaging\" style=\"margin-left:20px;\">\n          <li><a routerLink=\"/messaging/composeMessage\"><i class=\"fa fa-comments\" aria-hidden=\"true\"></i>\n              Composer</a></li>\n          <li><a routerLink=\"/messaging/predifineMessage\"><i class=\"fa fa-envelope-open\" aria-hidden=\"true\"></i>\n            Predefinir</a></li>\n          <li><a routerLink=\"/messaging/messagesent\"><i class=\"fa fa-paper-plane-o\" aria-hidden=\"true\"></i>\n            Envoye</a></li>\n        </div>\n      </li>\n      <li data-toggle=\"collapse\" data-target=\"#Credit\" class=\"collapsed active\">\n        <a class=\"dropdown\">\n            <i class=\"fa fa-credit-card\" aria-hidden=\"true\"></i>\n             Credit\n        </a>\n        <div class=\"collapse\" id=\"Credit\" style=\"margin-left:20px;\">\n          <li><a routerLink=\"/credit/acheter\"><i class=\"fa fa-money\" aria-hidden=\"true\"></i>\n            Acheter credit</a></li>\n          <li><a><i class=\"fa fa-refresh\" aria-hidden=\"true\"></i>\n            Consulter credit</a></li>\n        </div>\n      </li>\n    </ul>\n\n    <div class=\"sideprofile\">\n      <div class=\"dropdown-divider\"></div>\n      <ul class=\"navbar-nav\">\n          <li data-toggle=\"collapse\" data-target=\"#profile\" class=\"collapsed active\">\n              <a class=\"dropdown-toggle\">\n                Danny <span class=\"arrow\"></span>\n              </a>\n              <div class=\"collapse\" id=\"profile\">\n                  <li><a>Profile</a></li>\n              </div>\n          </li>\n      </ul>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
        this.pushRightClass = 'push-right';
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.toggleclass = function () {
        var dom = document.querySelector('.sidenav');
        dom.classList.toggle(this.pushRightClass);
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/components/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/loader/loader.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".spinner {\r\n    width: 40px;\r\n    height: 40px;\r\n  \r\n    position: relative;\r\n    margin: 100px auto;\r\n  }\r\n  \r\n  .double-bounce1, .double-bounce2 {\r\n    width: 100%;\r\n    height: 100%;\r\n    border-radius: 50%;\r\n    background-color: #333;\r\n    opacity: 0.6;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    \r\n    -webkit-animation: sk-bounce 2.0s infinite ease-in-out;\r\n    animation: sk-bounce 2.0s infinite ease-in-out;\r\n  }\r\n  \r\n  .double-bounce2 {\r\n    -webkit-animation-delay: -1.0s;\r\n    animation-delay: -1.0s;\r\n  }\r\n  \r\n  @-webkit-keyframes sk-bounce {\r\n    0%, 100% { -webkit-transform: scale(0.0) }\r\n    50% { -webkit-transform: scale(1.0) }\r\n  }\r\n  \r\n  @keyframes sk-bounce {\r\n    0%, 100% { \r\n      transform: scale(0.0);\r\n      -webkit-transform: scale(0.0);\r\n    } 50% { \r\n      transform: scale(1.0);\r\n      -webkit-transform: scale(1.0);\r\n    }\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/loader/loader.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"spinner\">\n  <div class=\"double-bounce1\"></div>\n  <div class=\"double-bounce2\"></div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/loader/loader.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoaderComponent = (function () {
    function LoaderComponent() {
    }
    LoaderComponent.prototype.ngOnInit = function () {
    };
    LoaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-loader',
            template: __webpack_require__("../../../../../src/app/components/loader/loader.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/loader/loader.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoaderComponent);
    return LoaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/contact/contact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".contact{\r\n    background: url(/assets/img/contact.jpg);\r\n    height: 500px;\r\n    width: 100%;\r\n    background-size: cover;\r\n    background-position: 50% 0%;\r\n    position: relative;\r\n    margin: 0px auto;\r\n}\r\n.overlay{\r\n    position: absolute;\r\n    background-color: rgba(0,0,0,0.5);\r\n    background-size: cover;\r\n    background-position: center;\r\n    top: 0;\r\n    bottom: 0;\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n.display-4{\r\n    font-size: 40px;\r\n    color: #fff;\r\n}\r\nh4{\r\n  margin-top: 100px;\r\n}\r\nh4 b{\r\n    background-color: red;\r\n}\r\n.section1{\r\n    padding-top: 20px;\r\n    padding-bottom:20px;\r\n}\r\n.my-4{\r\n    width: 40%;\r\n    background-color: #00ad5f;\r\n}\r\n.text-success{\r\n    font-size: 25px;\r\n}\r\n.section2{\r\n    padding-top: 20px;\r\n    padding-bottom: 20px;\r\n}\r\nhr{\r\n    margin-top: -5px;\r\n}\r\n.submit{\r\n    background-color: #4a525f;\r\n    border-color: #4a525f;\r\n}\r\nagm-map{\r\n    height: 300px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"contact\">\n  <div class=\"overlay\">\n      <app-navbar></app-navbar>\n      <h4 class=\"display-4 text-center\">\n        We are happy to answer <br>\n        your questions and to be in <br>\n        <b>contact</b> with you!\n      </h4>\n  </div>\n</div> -->\n\n<div class=\"section1\">\n  <div class=\"container text-center\">\n      <h5>PASSER NOUS UN COUP-DE-FILE</h5>\n      <hr class=\"my-4\">\n\n      <p class=\"lead\">Appelez-nous des que vous avez un besoin !</p>\n      <p style=\"color:#00ad5f; font-size:25px;\">+255 53-33-36-70</p>\n  </div>\n</div>\n\n<div class=\"section2\"> \n  <div class=\"container\">\n    <div class=\"row\">\n      <!-- <div class=\"col-sm-6\">\n        <form action=\"\">\n          <legend>GET IN TOUCH</legend>\n          <hr>\n          <div class=\"form-group\">\n            <input class=\"form-control\" type=\"text\" name=\"name\" id=\"name\" placeholder=\"Enter your name\">\n          </div>\n          <div class=\"form-group\">\n            <input class=\"form-control\" type=\"email\" name=\"email\" id=\"email\" placeholder=\"Enter your Email\">\n          </div>\n          <div class=\"form-group\">\n              <textarea class=\"form-control\" id=\"content\" rows=\"3\"></textarea>\n          </div>\n          <div class=\"text-right\">\n            <button class=\"btn btn-danger\">reset</button>\n            <button class=\"btn btn-primary submit\" type=\"submit\">submit</button>\n          </div>\n        </form>\n      </div> -->\n      <div class=\"col-sm-12\">\n        <div class=\"row text-center\">\n          <div class=\"col-sm-12\">\n            <h5>Abidjan Office</h5>\n            <b>Address</b>\n            <p>Riviera 4, <br> Abidjan 01</p>\n            <br>\n            <b>Email</b>\n            <p>Hubcom@hubcomgroup.com</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"section3\">\n    <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [fullscreenControl]=\"fullscreencontrol\"\n    [mapTypeControl]=\"mapTypeControl\" [zoom]=\"13\">\n        <agm-marker [latitude]=\"lat\" [longitude]=\"lng\">\n            <agm-info-window [isOpen]=\"infowindow\">\n                HUBCOM, Riviera 4\n            </agm-info-window>\n        </agm-marker>\n    </agm-map>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = (function () {
    function ContactComponent() {
        this.lat = 5.3331474;
        this.lng = -3.9562121;
        this.fullscreencontrol = true;
        this.mapTypeControl = true;
        this.infowindow = true;
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contact',
            template: __webpack_require__("../../../../../src/app/contact/contact.component.html"),
            styles: [__webpack_require__("../../../../../src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "../../../../../src/app/contacts/contacts.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content{\r\n    margin-left: 250px;\r\n    padding:10px;\r\n    padding-top: 80px;\r\n}\r\n.letters{\r\n  display: inline-block;\r\n  width: 45px;\r\n  height: 45px;\r\n  margin-right: 10px;\r\n  margin-bottom: 5px;\r\n  border: solid 2px #001f3f;\r\n  border-radius: 50%;\r\n  text-align: center;\r\n  line-height: 30px;\r\n  font-size: 30px;\r\n  text-transform: uppercase;\r\n  cursor: pointer;\r\n}\r\ninput.form-control{\r\n  border-radius: 40px;\r\n}\r\ninput.form-control:focus{\r\n  border: 1px solid #00ad5f!important;\r\n  box-shadow: 0 0 3px #00ad5f !important;\r\n}\r\n\r\nli:hover{\r\n  background-color: lightgreen\r\n}\r\n.btn-rounded{\r\n  border-radius: 40px;\r\n  border-color: black;\r\n  background-color: black;\r\n}\r\n.btn-rounded:hover{\r\n  background-color: #00ad5f;\r\n  border-color: #00ad5f;\r\n}\r\n.btn-rounded:focus{\r\n  border: 1px solid #00ad5f!important;\r\n  box-shadow: 0 0 3px #00ad5f !important;\r\n  background-color: #00ad5f !important;\r\n}\r\n.btn-success{\r\n  border-radius: 40px !important;\r\n}\r\n.btn-secondary{\r\n  border-radius:40px !important;\r\n}\r\n#contactContent .row{\r\n  margin-top: 10px;\r\n}\r\n.popupbox .popupbox-box{\r\n display: none;\r\n}\r\n.popupbox:hover .popupbox-box{\r\n  display: block;\r\n  float: right;\r\n}\r\n#contactContent {\r\n  padding-top:45px;\r\n}\r\n.form-group{\r\n  padding-top: 20px;\r\n}\r\n\r\n@media screen and (max-width: 1200px) {\r\n  .content{\r\n      margin-left: 0;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contacts/contacts.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div class=\"content\">\n  <div class=\"container\">\n    <h2>liste des contacts</h2>\n    <hr>\n  </div>\n  <div class=\"container\">\n    <!-- <ul class=\"list-group\">\n      <li class=\"list-group-item\" *ngFor=\"let country of countriesNotSorted\">\n        {{country}}\n      </li>\n    </ul> -->\n    <!-- contacts -->\n    <div class=\"form-group row\">\n      <div class=\"col-sm-10\">\n        <input class=\"form-control\" type=\"text\" name=\"\" id=\"\" placeholder=\"Seach for a contact\">\n      </div>\n      <div class=\"col-sm-2\">\n        <button type=\"button\" class=\"btn btn-primary btn-rounded\" data-toggle=\"modal\" data-target=\"#addcontactModal\">\n          <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n          Ajouter Contact\n        </button>\n        <!-- modal -->\n        <div class=\"modal fade\" id=\"addcontactModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"addcontactLabel\" aria-hidden=\"true\">\n          <div class=\"modal-dialog\" role=\"document\">\n            <div class=\"modal-content\">\n              <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"addcontactLabel\">Ajouter un contact</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                  <span aria-hidden=\"true\">&times;</span>\n                </button>\n              </div>\n              <div class=\"modal-body\">\n                <form>\n                  <div class=\"form-group\">\n                    <div class=\"row\">\n                      <div class=\"col-sm-6\">\n                        <label for=\"name\">Nom:</label>\n                        <input type=\"text\" name=\"\" id=\"\" class=\"form-control\" placeholder=\"Nom\">\n                      </div>\n                      <div class=\"col-sm-6\">\n                        <label for=\"lastname\">Prenom:</label>\n                        <input type=\"text\" name=\"\" id=\"\" class=\"form-control\" placeholder=\"Prenom\">\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"form-group\">\n                    <div class=\"row\">\n                      <div class=\"col-sm-6\">\n                        <label for=\"phonenumber\">Telephone:</label>\n                        <input type=\"text\" name=\"\" id=\"\" class=\"form-control\" placeholder=\"phone number\">\n                      </div>\n                      <div class=\"col-sm-6\">\n                        <label for=\"gender\">Sex</label>\n                        <br>\n                        <label class=\"radio-inline\">\n                          <input type=\"radio\" name=\"optradio\">M</label>\n                        <label class=\"radio-inline\">\n                          <input type=\"radio\" name=\"optradio\">F</label>\n                      </div>\n                    </div>\n                  </div>\n                </form>\n              </div>\n              <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Annuler</button>\n                <button type=\"button\" class=\"btn btn-success\">Sauvegarder</button>\n              </div>\n            </div>\n          </div>\n        </div>\n        <!-- modal end -->\n      </div>\n    </div>\n    <div id=\"contactContent\">\n      <div class=\"row\">\n        <div class=\"col-md-3\">\n          <div class=\"card\" style=\"width: 15rem;\">\n            <img class=\"card-img-top\" src=\"assets/img/userr.png\" height=\"190px;\" alt=\"Card image cap\">\n            <div class=\"card-body\">\n              <p class=\"card-text\">\n                <b>Name:</b> Danny\n                <br>\n                <b>PhoneNumber:</b>77873145\n                <br>\n                <b>Sex:</b>M\n              </p>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-3\">\n          <div class=\"card\" style=\"width: 15rem;\">\n            <img class=\"card-img-top\" src=\"assets/img/userr.png\" height=\"190px;\" alt=\"Card image cap\">\n            <div class=\"card-body\">\n              <p class=\"card-text\">\n                <b>Name:</b> Danny\n                <br>\n                <b>PhoneNumber:</b>77873145\n                <br>\n                <b>Sex:</b>M\n              </p>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-3\">\n          <div class=\"card\" style=\"width: 15rem;\">\n            <img class=\"card-img-top\" src=\"assets/img/userr.png\" height=\"190px;\" alt=\"Card image cap\">\n            <div class=\"card-body\">\n              <p class=\"card-text\">\n                <b>Name:</b> Danny\n                <br>\n                <b>PhoneNumber:</b>77873145\n                <br>\n                <b>Sex:</b>M\n              </p>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-3\">\n          <div class=\"card\" style=\"width: 15rem;\">\n            <img class=\"card-img-top\" src=\"assets/img/userr.png\" height=\"190px;\" alt=\"Card image cap\">\n            <div class=\"card-body\">\n              <p class=\"card-text\">\n                <b>Name:</b> Danny\n                <br>\n                <b>PhoneNumber:</b>77873145\n                <br>\n                <b>Sex:</b>M\n              </p>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-md-3\">\n          <div class=\"card\" style=\"width: 15rem;\">\n            <img class=\"card-img-top\" src=\"assets/img/userr.png\" height=\"190px;\" alt=\"Card image cap\">\n            <div class=\"card-body\">\n              <p class=\"card-text\">\n                <b>Name:</b> Danny\n                <br>\n                <b>PhoneNumber:</b>77873145\n                <br>\n                <b>Sex:</b>M\n              </p>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-3\">\n          <div class=\"card\" style=\"width: 15rem;\">\n            <img class=\"card-img-top\" src=\"assets/img/userr.png\" height=\"190px;\" alt=\"Card image cap\">\n            <div class=\"card-body\">\n              <p class=\"card-text\">\n                <b>Name:</b> Danny\n                <br>\n                <b>PhoneNumber:</b>77873145\n                <br>\n                <b>Sex:</b>M\n              </p>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-3\">\n          <div class=\"card\" style=\"width: 15rem;\">\n            <img class=\"card-img-top\" src=\"assets/img/userr.png\" height=\"190px;\" alt=\"Card image cap\">\n            <div class=\"card-body\">\n              <p class=\"card-text\">\n                <b>Name:</b> Danny\n                <br>\n                <b>PhoneNumber:</b>77873145\n                <br>\n                <b>Sex:</b>M\n              </p>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-3\">\n          <div class=\"card\" style=\"width: 15rem;\">\n            <img class=\"card-img-top\" src=\"assets/img/userr.png\" height=\"190px;\" alt=\"Card image cap\">\n            <div class=\"card-body\">\n              <p class=\"card-text\">\n                <b>Name:</b> Danny\n                <br>\n                <b>PhoneNumber:</b>77873145\n                <br>\n                <b>Sex:</b>M\n              </p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/contacts/contacts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactsComponent = (function () {
    //  = this.countriesNotSorted.sort();
    function ContactsComponent() {
        this.alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
        this.countriesNotSorted = ['Ukraine', 'Urugvai', 'Russia', 'Romania', 'Belgium', 'Algeria', 'Rome', 'Argentina', 'Britain', 'Indonesia', 'Germany', 'Brazil', 'Portugal',
            'Polska', 'Uganda', 'Bolivia', 'Andorra'];
        this.countriesArray = [];
    }
    ContactsComponent.prototype.filtered = function (letter) {
        for (var _i = 0, _a = this.countriesNotSorted; _i < _a.length; _i++) {
            var i = _a[_i];
            //  console.log(i);
            //  console.log(letter)
            //  console.log(i.startsWith(letter.toUpperCase()))
            if (i.startsWith(letter.toUpperCase())) {
                //  console.log(true)
                this.countriesArray.push(i);
            }
            //  console.log(i)
        }
        this.countriesNotSorted = this.countriesArray;
        console.log(letter);
        console.log(this.countriesArray);
        this.countriesArray = [];
    };
    //  this.countriesArray = [];
    //  console.log(this.countriesNotSorted)
    ContactsComponent.prototype.ngOnInit = function () {
    };
    ContactsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contacts',
            template: __webpack_require__("../../../../../src/app/contacts/contacts.component.html"),
            styles: [__webpack_require__("../../../../../src/app/contacts/contacts.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactsComponent);
    return ContactsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/cpsmessage/cpsmessage.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body{\r\n    background-color: antiquewhite\r\n}\r\n.content{\r\n    margin-left: 250px;\r\n    padding:10px;\r\n    padding-top: 80px;\r\n}\r\n.container{\r\n    padding-top: 50px;\r\n}\r\n.btn-rounded{\r\n    border-radius: 40px;\r\n    \r\n}\r\ninput.form-control{\r\n   margin-bottom: 5px;\r\n    border-radius: 40px;\r\n}\r\ninput.form-control:focus{\r\n    border: 1px solid #00ad5f !important;\r\n    box-shadow: 0 0 3px #00ad5f !important;\r\n}\r\ntextarea.form-control:focus{\r\n    border: 1px solid #00ad5f !important;\r\n    box-shadow: 0 0 3px #00ad5f !important;\r\n}\r\n.chips{\r\n    display: inline-block;\r\n    padding: 0 25px;\r\n    height: 30px;\r\n    font-size: 16px;\r\n    line-height: 30px; \r\n    border-radius: 25px;\r\n    background-color: #f1f1f1;\r\n    color: #000;\r\n}\r\n.closebtn {\r\n    padding-left: 10px;\r\n    color: #888;\r\n    font-weight: bold;\r\n    float: right;\r\n    font-size: 20px;\r\n    cursor: pointer;\r\n}\r\n\r\n.closebtn:hover {\r\n    color: rgb(255, 2, 2);\r\n}\r\n.paging /deep/ .ngx-pagination li.current {\r\n    background-color: #00ad5f;\r\n}\r\n.alert{\r\n    border-radius: 40px;\r\n}\r\nsmall #numero{\r\n    padding-top: 20px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/cpsmessage/cpsmessage.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div class=\"content\">\n  <div class=\"container\">\n    <h2>Composer un message</h2>\n    <hr>\n  </div>\n\n  <div class=\"container\">\n    <form #f=\"ngForm\" (ngSumbit)=\"submit(f)\">\n      <div class=\"form-group row\">\n        <label for=\"input contact\" class=\"col-sm-2 col-form-label\">\n          Numero\n        </label>\n        <div class=\"col-sm-8\">\n          <input type=\"text\" name=\"contacting\" id=\"contacts\" class=\"form-control\" placeholder=\"Numeros\" [(ngModel)]=\"contacting\" (keyup)=\"afuntion(contacting)\"\n          required #contacts=\"ngModel\" pattern=\"^[0-9]*$\">\n         <div class=\"alert alert-danger\" *ngIf=\"contacts.touched && !contacts.valid\">\n           <div>this field is required</div>\n          <div *ngIf=\"contacts.errors.pattern\">numbers only please</div>\n         </div>\n          <small>Entrer un ou plusieur numeros ou importer des numeros en clickant sur le button 'importer'</small>\n\n          <br>\n          <!-- <textarea class=\"form-control\" name=\"contacting\" id=\"contacts\" cols=\"30\" rows=\"3\"  [(ngModel)]=\"contacting\" (keyup)=\"afuntion(contacting)\"></textarea> -->\n          <small id=\"numero\">\n            <b>Numero</b>:</small>\n          <div *ngFor=\"let c of contactings | paginate: { itemsPerPage:4, currentPage: p }; let i = index\" class=\"chips\">\n            <!-- <div *ngIf=\"contacts.errors.pattern\">{{c}}</div>  -->\n            {{c}}\n            <span class=\"closebtn\" (click)=\"removeNumber(i)\">&times;</span>\n          </div>\n          <div class=\"text-center\">\n            <pagination-controls class=\"paging\" (pageChange)=\"p = $event\"></pagination-controls>\n          </div>\n          <!-- <small>{{contacting}}</small> -->\n        </div>\n\n        <div class=\"col-sm-2\">\n          <!-- modal trigger -->\n          <button type=\"button\" class=\"btn btn-success btn-rounded\" data-toggle=\"modal\" data-target=\"#contactmodal\">\n            <i class=\"fa fa-plus\" aria-hidden=\"true\"></i> Importer Numeros\n          </button>\n          <!-- Modal -->\n          <div class=\"modal fade\" id=\"contactmodal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"contactmodalLabel\" aria-hidden=\"true\">\n            <div class=\"modal-dialog\" role=\"document\">\n              <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                  <h5 class=\"modal-title\" id=\"contactmodalLabel\">Liste des contacts</h5>\n                  <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                  </button>\n                </div>\n                <div class=\"modal-body\">\n                  ...\n                </div>\n                <div class=\"modal-footer\">\n                  <button type=\"button\" class=\"btn btn-secondary btn-rounded\" data-dismiss=\"modal\">Annuler</button>\n                  <button type=\"button\" class=\"btn btn-success btn-rounded\">Importer</button>\n                </div>\n              </div>\n            </div>\n          </div>\n          <!-- End Modal  -->\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label for=\"message\" class=\"col-sm-2 col-form-label\">\n          Message\n        </label>\n        <div class=\"col-sm-10\">\n          <div class=\"row\">\n            <div class=\"col-sm-2\">\n              <small>\n                <span class=\"badge badge-pill badge-info\">{{counter}}/{{totalcharter}}</span> Characters</small>\n            </div>\n            <div class=\"col-sm-2\">\n              <small>\n                <span class=\"badge badge-pill badge-danger\">{{counterMessage}}</span> message</small>\n            </div>\n            <div class=\"col-sm-2\" style=\"margin-bottom:5px; margin-left:440px;\">\n              <button type=\"button\" class=\"btn btn-success btn-rounded\">\n                <i class=\"fa fa-plus\" aria-hidden=\"true\"></i> Message predefini\n              </button>\n            </div>\n          </div>\n          <textarea class=\"form-control\" name=\"message\" id=\"message\" cols=\"30\" rows=\"7\" [(ngModel)]=\"message\" (keyup)=\"counterchar(message)\"\n            required maxlength=\"640\"></textarea>\n          <!-- <small>{{message}}</small> -->\n          <!-- <span>{{counter}}</span> -->\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <div class=\"col-sm-4 offset-sm-2\">\n          <div class=\"form-check\">\n            <input class=\"form-check-input\" type=\"checkbox\" value=\"\" name=\"checkbox\" id=\"checkbox\" [(ngModel)]=\"checkbox\">\n            <label for=\"envoiulterieur\">Envoi Ulterieur</label>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row\" *ngIf=\"checkbox\">\n        <div class=\"col-sm-6 offset-sm-2 form-group\">\n          <input type=\"text\" class=\"form-control\" [minDate]=\"minDate\" [maxDate]=\"maxDate\" #dp=\"bsDatepicker\" bsDatepicker [(bsValue)]=\"bsValue\"\n            name=\"bsValue\" [(ngModel)]=\"bsValue\">\n          <!-- <input type=\"text\" name=\"\" id=\"\" class=\"form-control\" placeholder=\"pick a date\" [disabled]=\"!checkbox\"> -->\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-sm-8 offset-sm-2\" style=\"margin-top:10px;\">\n          <button type=\"submit\" class=\"btn btn-success btn-rounded\" routerLink=\"/messaging/composeMessage/recapMessage\" (click)=\"newMessage()\" [disabled]=\"!f.valid\">Suivant\n            <i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i>\n          </button>\n        </div>\n      </div>\n    </form>\n\n  </div>"

/***/ }),

/***/ "../../../../../src/app/cpsmessage/cpsmessage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CpsmessageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__share_service__ = __webpack_require__("../../../../../src/app/share.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CpsmessageComponent = (function () {
    ////////////////////
    function CpsmessageComponent(data) {
        this.data = data;
        //pagination
        this.p = 1;
        //////
        this.contactings = [];
        this.counter = 0;
        this.counterMessage = 0;
        this.totalcharter = 640;
        /////////////
        this.checkbox = false;
        this.minDate = new Date(2017, 5, 10);
        this.maxDate = new Date(2018, 9, 15);
        this.bsValue = new Date();
        this.bsRangeValue = [new Date(2017, 7, 4), new Date(2017, 7, 20)];
    }
    //add numbers to the contact array when they reach 8 characters
    CpsmessageComponent.prototype.afuntion = function (acontact) {
        if (acontact.length === 8) {
            this.contactings.push(acontact);
            console.log(this.contactings);
            this.contacting = "0";
        }
    };
    //remove a contact or number from the array 
    CpsmessageComponent.prototype.removeNumber = function (acontact) {
        this.contactings.splice(acontact, 1);
        console.log(this.contactings);
    };
    //counting number of characters in the textarea and 
    CpsmessageComponent.prototype.counterchar = function (message) {
        this.counter = this.message.length;
        this.sourceMessagecounter = Math.floor(this.counter / 160);
        this.remainder = this.counter % 160;
        if (this.remainder > 0) {
            // this.sourceMessagecounter = this.message.length;
            this.counterMessage = this.sourceMessagecounter + 1;
        }
        else {
            this.counterMessage = this.sourceMessagecounter;
        }
        // console.log(this.counter)
    };
    CpsmessageComponent.prototype.newMessage = function () {
        //passing values to the recapmessage component
        this.data.changeMessagecontact(this.message, this.contactings, this.counterMessage, this.bsValue);
    };
    CpsmessageComponent.prototype.ngOnInit = function () {
        var _this = this;
        //passing values to the recap message component
        this.data.currentMessage.subscribe(function (message) { return _this.message = message; });
        this.data.currentContact.subscribe(function (contatcs) { return _this.contactings = contatcs; });
        this.data.currentmessageNumber.subscribe(function (numofmessage) { return _this.counterMessage = numofmessage; });
        this.data.currentmessagedate.subscribe(function (adate) { return _this.bsValue = adate; });
    };
    CpsmessageComponent.prototype.submit = function (f) {
        console.log(f);
    };
    CpsmessageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-cpsmessage',
            template: __webpack_require__("../../../../../src/app/cpsmessage/cpsmessage.component.html"),
            styles: [__webpack_require__("../../../../../src/app/cpsmessage/cpsmessage.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__share_service__["a" /* ShareService */]])
    ], CpsmessageComponent);
    return CpsmessageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content {\r\n    margin-left: 250px; /* Same as the width of the sidebar */\r\n    padding:10px;\r\n    padding-top: 80px;\r\n}\r\n\r\n\r\n@media screen and (max-width: 1200px) {\r\n    .content{\r\n        margin-left: 0;\r\n    }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div class=\"content\">\n  <div class=\"container-fluid\">\n    <h2 class=\"text-muted\">Dashboard</h2>\n    <div class=\"row\">\n      <div class=\"col-md-3\">\n        <div class=\"card text-white bg-primary \">\n          <div class=\"row container\">\n            <div class=\"col-sm-4\" style=\"margin-top:30px;\">\n              <i class=\"fa fa-address-book fa-4x\"></i>\n            </div>\n            <div class=\"col-sm-8\">\n              <div class=\"card-body float-right\">\n                <h5 class=\"card-title\">0</h5>\n                <p class=\"card-text\">Contacts</p>\n              </div>\n            </div>\n          </div>\n          <div class=\"card-footer\">Contacts</div>\n        </div>\n      </div>\n\n      <div class=\"col-md-3\">\n        <div class=\"card text-white bg-info\">\n          <div class=\"row container\">\n            <div class=\"col-sm-4\" style=\"margin-top:30px;\">\n              <i class=\"fa fa-users fa-4x\"></i>\n            </div>\n            <div class=\"col-sm-8\">\n              <div class=\"card-body float-right\">\n                <h5 class=\"card-title\">0</h5>\n                <p class=\"card-text\">Groups</p>\n              </div>\n            </div>\n          </div>\n          <div class=\"card-footer\">Groups</div>\n        </div>\n      </div>\n      <div class=\"col-md-3\">\n        <div class=\"card text-white bg-success\">\n          <div class=\"row container\">\n            <div class=\"col-sm-4\" style=\"margin-top:30px;\">\n              <i class=\"fa fa-envelope fa-4x\"></i>\n            </div>\n            <div class=\"col-sm-8\">\n              <div class=\"card-body float-right\">\n                <h5 class=\"card-title\">0</h5>\n                <p class=\"card-text\">Messages</p>\n              </div>\n            </div>\n          </div>\n          <div class=\"card-footer\">Messages sent</div>\n        </div>\n      </div>\n      <div class=\"col-md-3\">\n        <div class=\"card text-white bg-warning\">\n          <div class=\"row container\">\n            <div class=\"col-sm-4\" style=\"margin-top:30px;\">\n              <i class=\"fa fa-credit-card-alt fa-4x\" style=\"color:black\"></i>\n            </div>\n            <div class=\"col-sm-8\">\n              <div class=\"card-body float-right\">\n                <h5 class=\"card-title\" style=\"color:black\">4000</h5>\n                <p class=\"card-text\" style=\"color:black\">Credits</p>\n              </div>\n            </div>\n          </div>\n          <div class=\"card-footer\" style=\"color:black\">Credits</div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "footer{\r\n    background: url(/assets/img/footer-bg.png) center 20px no-repeat;\r\n    background-size: 30%;\r\n    color: #999;\r\n    font-size: 13px;\r\n    padding: 50px 0px 20px;\r\n    position: relative;\r\n}\r\n.footer{\r\n    position: relative;\r\n    background-color:#111213e3;\r\n    background-size: 30%;\r\n    background-position: center;\r\n    top: 0;\r\n    bottom: 0;\r\n    height: auto;\r\n    width: 100%;\r\n}\r\n#footer2{\r\n    padding-top: 25px;\r\n}\r\n\r\n#footer4{\r\n    float: right;\r\n}\r\nhr{\r\n    background-color: whitesmoke;\r\n}\r\n.fa:hover{\r\n    color: #fff;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n      <div class=\"container\">\n          <div class=\"row\" id=\"footer2\">\n              <div class=\"col-sm-4\">\n                  <h4 style=\"color:#00ad5f\">HUBCOM</h4>\n              </div>\n                <div class=\"col-sm-4\">\n                  <h4 class=\"text-white\">Nous contacter</h4>\n                  <div class=\"text-white\">\n                      <h6>Abidjan Office</h6>\n                      <b>Address</b>\n                      <p>Riviera 4,Abidjan 01</p>\n                      <b>Email</b>\n                      <p>Hubcom@hubcomgroup.com</p>\n                  </div>\n                </div>\n                <div class=\"col-sm-4\">\n                  <h4 class=\"text-white\">Social Media </h4>\n                  <p class=\"text-white\">\n                     facebook <br>\n                     instagram <br>\n                     twitter\n                  </p>\n                </div>\n          </div>\n      \n          <hr>\n      \n          <div class=\"row\">\n            <div class=\"col-sm-4\">\n             <span class=\"text-white\">\n               Copyright Hubcom 2018.\n             </span>\n            </div>\n            <div class=\"col-sm-8\">\n              <div class=\"row float-right\">\n                <div class=\"col-sm-2\">\n                  <i class=\"fa fa-facebook fa-2x\" aria-hidden=\"true\"></i>\n                </div>\n                <div class=\"col-sm-2\">\n                  <i class=\"fa fa-instagram fa-2x\" aria-hidden=\"true\"></i>\n                </div>\n                <div class=\"col-sm-2\">\n                  <i class=\"fa fa-twitter fa-2x\" aria-hidden=\"true\"></i>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>  \n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/groups/groups.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content{\r\n    margin-left: 250px;\r\n    padding:10px;\r\n    padding-top: 90px;\r\n}\r\ninput.form-control{\r\n    border-radius: 40px;\r\n}\r\ninput.form-control:focus{\r\n    border: 1px solid #00ad5f!important;\r\n  box-shadow: 0 0 3px #00ad5f !important;\r\n}\r\n.letters{\r\n    display: inline-block;\r\n    width: 45px;\r\n    height: 45px;\r\n    margin-right: 10px;\r\n    margin-bottom: 5px;\r\n    border: solid 2px #001f3f;\r\n    border-radius: 50%;\r\n    text-align: center;\r\n    line-height: 30px;\r\n    font-size: 30px;\r\n    text-transform: uppercase;\r\n    cursor: pointer;\r\n  }\r\n  li:hover{\r\n      background:lightgreen;\r\n  }\r\n  li:active{\r\n      background-color: lightgreen;\r\n  }\r\n  .contactGroup{\r\n      margin-top: 45px;\r\n  }\r\n  .btn-rounded{\r\n    border-radius: 40px;\r\n    border-color: black;\r\n    background-color: black;\r\n  }\r\n  .btn-rounded:hover{\r\n    background-color: #00ad5f;\r\n    border-color: #00ad5f;\r\n  }\r\n  .btn-rounded:focus{\r\n    border: 1px solid #00ad5f!important;\r\n    box-shadow: 0 0 3px #00ad5f !important;\r\n    background-color: #00ad5f !important;\r\n  }\r\n  .content .form-group.row{\r\n      padding-top: 35px;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/groups/groups.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div class=\"content\">\n  <div class=\"container\">\n      <h2>Groupes</h2>\n      <hr>\n  </div>\n  \n  <!-- <div style=\"text-align:center; padding-top:20px;\">\n    <ul>\n      <li routerLinkActive=\"active current\" class=\"letters active\" *ngFor=\"let alpha of alphabet\">\n        <a class=\"\">{{alpha}}</a>\n         routerLink=\"/repertory/Groups\" \n      </li>\n    </ul>\n  </div> -->\n\n  <div class=\"container\">\n    <div class=\"form-group row\">\n      <div class=\"col-sm-10\">\n        <input class=\"form-control\" type=\"text\" name=\"\" id=\"\" placeholder=\"Trouver un groupe\">\n      </div>\n      <div class=\"col-sm-2\">\n        <button type=\"button\" class=\"btn btn-primary btn-rounded\">Ajouter groupe</button>\n      </div>\n    </div>\n\n    <div class=\"contactGroup\">\n      <div class=\"row\">\n        <div class=\"col-md-3\">\n          <div class=\"card\" style=\"width: 15rem;\">\n            <img class=\"card-img-top\" src=\"assets/img/userr.png\" height=\"190px;\" alt=\"Card image cap\">\n            <div class=\"card-body\">\n              <p class=\"card-text\">\n                <b>Name:</b> Danny\n                <br>\n                <b>PhoneNumber:</b>77873145\n                <br>\n                <b>Sex:</b>M\n              </p>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-3\">\n          <div class=\"card\" style=\"width: 15rem;\">\n            <img class=\"card-img-top\" src=\"assets/img/userr.png\" height=\"190px;\" alt=\"Card image cap\">\n            <div class=\"card-body\">\n              <p class=\"card-text\">\n                <b>Name:</b> Danny\n                <br>\n                <b>PhoneNumber:</b>77873145\n                <br>\n                <b>Sex:</b>M\n              </p>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-3\">\n          <div class=\"card\" style=\"width: 15rem;\">\n            <img class=\"card-img-top\" src=\"assets/img/userr.png\" height=\"190px;\" alt=\"Card image cap\">\n            <div class=\"card-body\">\n              <p class=\"card-text\">\n                <b>Name:</b> Danny\n                <br>\n                <b>PhoneNumber:</b>77873145\n                <br>\n                <b>Sex:</b>M\n              </p>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-3\">\n          <div class=\"card\" style=\"width: 15rem;\">\n            <img class=\"card-img-top\" src=\"assets/img/userr.png\" height=\"190px;\" alt=\"Card image cap\">\n            <div class=\"card-body\">\n              <p class=\"card-text\">\n                <b>Name:</b> Danny\n                <br>\n                <b>PhoneNumber:</b>77873145\n                <br>\n                <b>Sex:</b>M\n              </p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/groups/groups.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GroupsComponent = (function () {
    function GroupsComponent() {
        this.alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    }
    GroupsComponent.prototype.ngOnInit = function () {
    };
    GroupsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-groups',
            template: __webpack_require__("../../../../../src/app/groups/groups.component.html"),
            styles: [__webpack_require__("../../../../../src/app/groups/groups.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GroupsComponent);
    return GroupsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".home{\r\n    background: url(/assets/img/hubcombackg1.jpeg);\r\n    height: 100%;\r\n    width: 100%;\r\n    background-size: cover;\r\n    background-position: center;\r\n    position: relative;  \r\n}\r\n.homecontent{\r\n    padding-top: 70px;\r\n}\r\n\r\n#title{\r\n    position: absolute;\r\n    background-color: rgba(0,0,0,0.5);\r\n    background-size: cover;\r\n    background-position: center;\r\n    top: 0;\r\n    bottom: 0;\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n#title h4{\r\n    text-align: center;\r\n    margin-top: 350px;\r\n    color: whitesmoke;\r\n}\r\n\r\n\r\n#firstsection{\r\n    padding-top: 70px;\r\n    background-color:#e9ecef;\r\n    padding-bottom: 35px;\r\n}\r\n#firstsection span{\r\n    background-color:lightgreen;\r\n}\r\n#secondsection{\r\n    padding-top: 35px;\r\n    padding-bottom: 35px;\r\n}\r\n#secondsection b{\r\n    background-color:lightgreen;\r\n    color: whitesmoke;\r\n}\r\n.thirdsection{\r\n    padding-top: 30px;\r\n    padding-bottom: 30px;\r\n}\r\n#cardsection{\r\n    padding-top: 25px;\r\n}\r\n\r\n.carousel-inner{\r\n    /* background-image: url(\"/assets/img/image0.jpeg\"); */\r\n     background-position: center center;\r\n     background-repeat: no-repeat;\r\n     height:800px;\r\n   }\r\n.carousel-caption#carou1{\r\n    top:20em;\r\n   }\r\n\r\n.carousel-caption#carou2{\r\n    color:black;\r\n    top: 25em;\r\n    left: 15%;\r\n}   \r\n.carousel-caption#carou3{\r\n    top: 25em;\r\n    left: 15%;\r\n}   \r\n hr{\r\n    width: 10%;\r\n    height: 0.2%;\r\n    background-color:green;\r\n }\r\n \r\n\r\n @media only screen and (max-width: 500px) {\r\n    #title h4{\r\n     margin-top: 130px;\r\n     font-size: 48px;\r\n    }\r\n    #secondsection #cardsection{\r\n        /* text-align: center; */\r\n        padding-left: 10px;\r\n    }\r\n    #secondsection #cardsection .card{\r\n        margin-top: 10px;\r\n    }\r\n   .carousel-caption h2{\r\n    font-size: 25px;\r\n   }\r\n}\r\n@media only screen and (max-width: 1366px){\r\n    .home{\r\n        height: 600px;\r\n    }\r\n    #title{\r\n        height: 600px;\r\n    }\r\n    #title h4{\r\n        margin-top: 120px;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"home\">\n    <div id=\"title\">\n     \n      <h4 class=\"display-4 text-center animated fadeIn\">\n          HUBCOM,<br>\n          the next generation of commucation<br>\n          is here.\n      </h4>\n      <div style=\"text-align:center; margin-top:20px;\">\n        <button class=\"btn btn-success btn-lg\" routerLink=\"/about\">\n          Learn More\n        </button>\n      </div>\n    </div>\n</div> -->\n<app-navbar></app-navbar>\n<!-- main content -->\n<div class=\"homecontent\" id=\"home\">\n    <div id=\"homeCarouselIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\n        <ol class=\"carousel-indicators\">\n          <!-- <li data-target=\"#homeCarouselIndicators\" data-slide-to=\"0\" ></li> -->\n          <li data-target=\"#homeCarouselIndicators\" data-slide-to=\"1\" class=\"active\"></li>\n          <!-- <li data-target=\"#homeCarouselIndicators\" data-slide-to=\"2\"></li> -->\n        </ol>\n        <div class=\"carousel-inner\">\n          <!-- <div class=\"carousel-item active\">\n            <img class=\"d-block w-100\" src=\"assets/img/carou1.jpeg\" alt=\"First slide\">\n            <div class=\"carousel-caption\" id=\"carou1\">\n                <h2>\"We really loved working with HubanCreative.<br>They know what they are doing and make<br> you feel that on every step.\"</h2>\n                <p><b>Micheal Lichtenstein</b><br>CEO, WELLFUND CORPORATION</p>\n            </div>\n          </div> -->\n          <div class=\"carousel-item active\">\n            <img class=\"d-block w-100\" src=\"assets/img/carou2.jpeg\" alt=\"Second slide\">\n            <div class=\"carousel-caption\" id=\"carou2\">\n                <h1>\"Repensez comment vous engagez, contactez <br>et communiquez avec vos clients et vos proches\"</h1>\n                <p class=\"lead\" style=\"color:#00ad5f\"><b>Communiquez autrement avec hubcom</b></p>\n            </div>\n          </div>\n          <!-- <div class=\"carousel-item\">\n            <img class=\"d-block w-100\" src=\"assets/img/carou3.jpeg\" alt=\"Third slide\">\"\n            <div class=\"carousel-caption\" id=\"carou3\">\n                <h2 style=\"color:#007bff\">\"We really loved working with HubanCreative.<br>They know what they are doing and make<br> you feel that on every step.\"</h2>\n                <p class=\"text-muted\"><b>Micheal Lichtenstein</b><br>CEO, WELLFUND CORPORATION</p>\n            </div>\n          </div> -->\n        </div>\n        <!-- <a class=\"carousel-control-prev\" href=\"#homeCarouselIndicators\" role=\"button\" data-slide=\"prev\" style=\"width:10%\">\n          <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n          <span class=\"sr-only\">Previous</span>\n        </a>\n        <a class=\"carousel-control-next\" href=\"#homeCarouselIndicators\" role=\"button\" data-slide=\"next\" style=\"width:10%\">\n          <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n          <span class=\"sr-only\">Next</span>\n        </a> -->\n      </div>\n</div>\n\n<!-- \n<div class=\"container text-center\" id=\"secondsection\">\n  <div>\n    <h3>why shoud you use <b>Hubcom</b>  ?</h3>\n  </div>\n  <div class=\"row\" id=\"cardsection\">\n    <div class=\"col-md-4 text-center hvr-grow\">\n        <div class=\"card\" style=\"width: 20rem;\">\n            <img class=\"card-img-top\" src=\"/assets/img/image1.jpeg\" alt=\"Card image cap\">\n            <div class=\"card-body\">\n              <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n            </div>\n          </div>\n    </div>\n    <div class=\"col-md-4 text-center hvr-grow\">\n        <div class=\"card\" style=\"width: 20rem;\">\n            <img class=\"card-img-top\" src=\"/assets/img/imgae2.jpeg\" alt=\"Card image cap\">\n            <div class=\"card-body\">\n              <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n            </div>\n          </div>\n    </div>\n    <div class=\"col-md-4 text-center hvr-grow\">\n        <div class=\"card\" style=\"width: 20rem;\">\n            <img class=\"card-img-top\" src=\"/assets/img/image3.jpg\" alt=\"Card image cap\">\n            <div class=\"card-body\">\n              <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n            </div>\n          </div>\n    </div>\n  </div>\n</div>\n\n<hr>\n\n<div class=\"thirdsection\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-sm-4\">\n          <h3><b>Hubcom</b> is the best way of sending sms to everyone in one click</h3><br>\n          <p>Vivamus tempus luctus nunc, eu euismod ex molestie vel. Mauris dolor neque, vehicula et ultricies ut, \n            elementum sit amet mi. Curabitur rutrum urna ipsum. Etiam sed lacinia dolor, at posuere libero. Sed quis ullamcorper justo.\n          </p>\n          <br>\n          <p>In hac habitasse platea dictumst. Maecenas ut dolor eu velit ornare malesuada.\n               Nullam iaculis mi nec arcu condimentum, sed viverra enim ornare.\n          </p>\n              <button type=\"button\" class=\"btn btn-success\">Services</button>\n              <button type=\"button\" class=\"btn btn-outline-success\">Contact</button>\n        </div>\n        <div class=\"col-sm-8\">\n          <img class=\"img-fluid\" src=\"/assets/img/featured1.png\" width=\"760px\" height=\"566px\" alt=\"\">\n        </div>\n      </div>\n    </div>\n</div>\n\n<div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\n    <ol class=\"carousel-indicators\">\n      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\n      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\n      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\n    </ol>\n    <div class=\"carousel-inner\">\n      <div class=\"carousel-item active\">\n          <div class=\"carousel-caption\">\n              <h2>\"We really loved working with HubanCreative.<br>They know what they are doing and make<br> you feel that on every step.\"</h2>\n              <p><b>Micheal Lichtenstein</b><br>CEO, WELLFUND CORPORATION</p>\n          </div>\n      </div>\n      <div class=\"carousel-item\">\n        <div class=\"carousel-caption\">\n            <h2>\"All their work are awesome and they are <br>really sensitive about customer happiness.<br> Never seen a support like this before.\"</h2>\n            <p><b>William Winfrey</b><br>Marketing Manager, DONTDROPBOX</p>\n        </div>\n      </div>\n      <div class=\"carousel-item\">\n        <div class=\"carousel-caption\">\n            <h2>\"We really loved working with HubanCreative.<br>They know what they are doing and make<br> you feel that on every step.\"</h2>\n            <p><b>Micheal Lichtenstein</b><br>CEO, WELLFUND CORPORATION</p>\n        </div>\n      </div>\n    </div> -->\n    <!-- <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Previous</span>\n    </a>\n    <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\n      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Next</span>\n    </a> -->\n  <!-- </div> -->\n  \n   \n  <app-about id=\"about\"></app-about> \n\n  <app-services id=\"services\"></app-services>\n\n  <app-contact id=\"contact\"></app-contact>\n\n  <app-footer></app-footer>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/impcontact/impcontact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content{\r\n    margin-left: 250px;\r\n    padding:10px;\r\n    padding-top: 90px;\r\n}\r\n/* input.form-control{\r\n    border-radius:40px; \r\n}\r\ninput.form-control:focus{\r\n    border: 1px solid #00ad5f!important;\r\n  box-shadow: 0 0 3px #00ad5f !important;\r\n} */\r\ninput.form-control-file{\r\n  border: 1px solid #00ad5f!important;\r\n  box-shadow: 0 0 3px #00ad5f !important;\r\n  \r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/impcontact/impcontact.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div class=\"content\">\n  <div class=\"container\">\n    <h2>Importer des contacts</h2>\n    <hr>\n  </div>\n\n  <div class=\"container\">\n    <div class=\"form-group row\">\n      <div class=\"col-sm-8 offset-sm-2\">\n          <input type=\"file\" name=\"\" id=\"choosefile\" class=\"form-control-file\">\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/impcontact/impcontact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImpcontactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ImpcontactComponent = (function () {
    function ImpcontactComponent() {
    }
    ImpcontactComponent.prototype.ngOnInit = function () {
    };
    ImpcontactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-impcontact',
            template: __webpack_require__("../../../../../src/app/impcontact/impcontact.component.html"),
            styles: [__webpack_require__("../../../../../src/app/impcontact/impcontact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ImpcontactComponent);
    return ImpcontactComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".login{\r\n    background: url(/assets/img/carou3.jpeg);\r\n    height: 100%;\r\n    width: 100%;\r\n    background-size: cover;\r\n    background-position: center;\r\n    position: relative;\r\n   \r\n} \r\n .header{\r\n    position: absolute;\r\n    background-image: linear-gradient(to bottom, rgba(12, 241, 146, 0.445) 0, #fff 100%);\r\n    background-size: cover;\r\n    background-position: center;\r\n    top: 0;\r\n    bottom: 0;\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n.content{\r\n    margin-top: 6rem;\r\n}\r\n.card-body{\r\n    padding-top: 45px;\r\n}\r\n.card-body p {\r\n    padding-top: 150px;\r\n}\r\nform{\r\n    padding-top: 20px;\r\n}\r\nform .form-control {\r\n    border-radius: 40px;\r\n}\r\n.form-control:focus{\r\n    border: 1px solid aquamarine !important;\r\n    box-shadow: 0 0 3px aquamarine !important\r\n}\r\n\r\n.btn-rounded-login{\r\n    border-radius: 40px;\r\n    background-color: black;\r\n    border-color:black;\r\n}\r\n.btn-rounded-login:focus{\r\n    border: 1px solid black !important;\r\n    box-shadow: 0 0 3px black !important;\r\n    background-color: black !important;\r\n}\r\n.z-depth-3{\r\n    box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.027), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.075);\r\n  }\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"login\">\n  <div class=\"header\">\n    <div class=\"content\">\n      <div class=\"container text-center\">\n        <a routerLink=\"\"> <img src=\"assets/img/hubcom2.png\" alt=\"\"></a>\n        <div class=\"row\">\n          <div class=\"col-sm-6 offset-sm-3\">\n            <div class=\"card z-depth-3\" style=\"width:38em\">\n              <div class=\"card-body\">\n                <h5 class=\"card-title lead\" style=\"font-size:30px;\">Connectez vous pour continuer</h5>\n                <hr>\n                <form class=\"col-sm-8 offset-sm-2\">\n                  <div class=\"form-group\">\n                    <input class=\"form-control\" type=\"text\" name=\"number\" id=\"number\" placeholder=\"enter your phone number\">\n                  </div>\n                  <div class=\"form-group\">\n                    <input class=\"form-control\" type=\"password\" name=\"password\" id=\"password\" placeholder=\"enter your password\">\n                  </div>\n                  <button type=\"button\" class=\"btn btn-primary btn-block btn-rounded-login z-depth-3\" routerLink=\"/dashboard\">se connecter</button>\n                  <small>\n                    <a href=\"#\" style=\"color:#00ad5f\">Nom utilisateur/mot de passe</a> oublie?</small>\n                </form>\n                <p class=\"lead\">\n                  <a routerLink=\"/signup\" style=\"color:#00ad5f\">SIGN UP</a>\n                </p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/messagesent/messagesent.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content{\r\n    margin-left: 250px; /* Same as the width of the sidebar */\r\n    padding:10px;\r\n    padding-top: 80px;\r\n}\r\n.z-depth-5{\r\nbox-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.3);\r\n}\r\n.container{\r\n    padding-top: 30px;\r\n}\r\ninput.form-control{\r\n    border-radius: 40px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/messagesent/messagesent.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div class=\"content\">\n  <div class=\"container text-center\">\n    <h2>Messages Envoyes</h2>\n  </div>\n\n  <div class=\"container\">\n    <div class=\"form-group row\">\n      <div class=\"col-md-8 offset-md-2\">\n        <input type=\"text\" name=\"\" id=\"\" class=\"form-control\" placeholder=\"search Through your sent messages\">\n      </div>\n    </div>\n  </div>\n\n  <div class=\"container\">\n\n      <table class=\"table z-depth-5 \">\n          <thead>\n            <tr>\n              <th scope=\"col\">#</th>\n              <th scope=\"col\">Message</th>\n              <th scope=\"col\">Creation Date</th>\n              <th scope=\"col\"></th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <th scope=\"row\">1</th>\n              <td>Mark</td>\n              <td>Otto</td>\n              <td>\n                <button type=\"button\" class=\"btn btn-danger\">\n                <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\n                </button>\n                <!-- <button type=\"button\" class=\"btn btn-info\">\n                <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n                </button> -->\n              </td>\n            </tr>\n            <tr>\n              <th scope=\"row\">2</th>\n              <td>Jacob</td>\n              <td>Thornton</td>\n              <td>\n                <button type=\"button\" class=\"btn btn-danger\">\n                <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\n                </button>\n                <!-- <button type=\"button\" class=\"btn btn-info\">\n                <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n                </button> -->\n              </td>\n            </tr>\n            <tr>\n              <th scope=\"row\">3</th>\n              <td >Larry the Bird</td>\n              <td>@twitter</td>\n              <td>\n                <button type=\"button\" class=\"btn btn-danger\">\n                <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\n                </button>\n                <!-- <button type=\"button\" class=\"btn btn-info\">\n                <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n                </button> -->\n              </td>\n            </tr>\n          </tbody>\n        </table>\n        \n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/messagesent/messagesent.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MessagesentComponent = (function () {
    function MessagesentComponent() {
    }
    MessagesentComponent.prototype.ngOnInit = function () {
    };
    MessagesentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-messagesent',
            template: __webpack_require__("../../../../../src/app/messagesent/messagesent.component.html"),
            styles: [__webpack_require__("../../../../../src/app/messagesent/messagesent.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MessagesentComponent);
    return MessagesentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/messaging/messaging.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content{\r\n    margin-left: 200px;\r\n    padding: 10px;\r\n    padding-top: 80px;\r\n}\r\n\r\n@media only screen and (max-width: 1200px){\r\n    .content {\r\n        margin-left: 0;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/messaging/messaging.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div class=\"content\">\n  <p>Messaging works !</p>\n</div>"

/***/ }),

/***/ "../../../../../src/app/messaging/messaging.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MessagingComponent = (function () {
    function MessagingComponent() {
    }
    MessagingComponent.prototype.ngOnInit = function () {
    };
    MessagingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-messaging',
            template: __webpack_require__("../../../../../src/app/messaging/messaging.component.html"),
            styles: [__webpack_require__("../../../../../src/app/messaging/messaging.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MessagingComponent);
    return MessagingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar{\r\n    padding-top: 1rem;\r\n    padding-bottom: 1rem;\r\n}\r\n.navbar-light{\r\n    background-color: #fff;\r\n}\r\n.navbar-nav .nav-item .nav-link{\r\n    color: black;\r\n}\r\nul{\r\n    margin-left: 5rem;\r\n}\r\nul li{\r\n    margin-left: 2rem;\r\n}\r\n\r\n.btn-rounded{\r\n  line-height: 20px;\r\n  border-radius: 40px;\r\n  background-color: #00ad5f;\r\n  border-color: #00ad5f;\r\n}\r\n.fa.fa-phone{\r\n    color: #00ad5f;\r\n}\r\n.z-depth-5{\r\n    box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.027), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.075);\r\n  }\r\n\r\n/* .shrink {\r\n    margin: 0px auto;\r\n    padding-top: 0px !important;\r\n    transition: all ease .5s;\r\n    background: #001f3f !important ; \r\n     Change background to black on scroll \r\n} */\r\nhr{\r\n    background-color: whitesmoke;\r\n    margin-top: -5px;\r\n}\r\n.topbar a{\r\n    position: relative;\r\n    z-index: 10000;\r\n}\r\n.topbar #login{\r\n    padding: 5px 10px;\r\n    font-weight: 600;\r\n    color: #fff;\r\n}\r\n.topbar #registration{\r\n    padding: 5px 10px;\r\n    font-weight: 600;\r\n    color: #fff;\r\n}\r\n/* .topbar{\r\n    display: block;\r\n} */\r\n\r\n@media only screen and (max-width: 500px){\r\n    .navbar{\r\n        margin-top: 45px;\r\n    }\r\n    /* .topbar #navnav{\r\n        text-align: center;\r\n    } */\r\n    /* .topbar #Registration{\r\n        text-align: center;\r\n    }\r\n    .topbar #Login{\r\n        text-align: center;\r\n    } */\r\n    .shrink{\r\n        margin-top:0px;\r\n        padding-top: 0px !important;\r\n    }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"topbar\">\n        <div class=\"container\">\n          <div class=\"row\">\n            <div class=\"col-sm-6 col-xs-6\">\n            <p id=\"navnav\">Hubcom</p>\n            </div>\n            <div class=\"col-sm-6 col-xs-6 text-right\">\n              <a routerLink=\"/login\" id=\"login\">Login</a>\n              <a routerLink=\"/signup\" id=\"registration\">Registration</a>\n            </div>\n          </div>\n          <hr>\n        </div>\n    </div> -->\n<nav class=\"navbar fixed-top navbar-expand-xl navbar-light bg-light z-depth-5\">\n\n  <a class=\"navbar-brand\" routerLink=\"\" style=\"color:#00ad5f\">\n    HUBCOM\n  </a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\"\n    aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n    <ul class=\"navbar-nav\">\n      <li routerLinkActive=\"active current\" class=\"nav-item\">\n        <a class=\"nav-link hvr-underline-reveal\" href=\"#home\">Acceuil</a>\n      </li>\n      <li routerLinkActive=\"active current\" class=\"nav-item\">\n        <a class=\"nav-link hvr-underline-reveal\" href=\"#about\">Pourquoi hubcom</a>\n      </li>\n      <li routerLinkActive=\"active current\" class=\"nav-item\">\n        <a class=\"nav-link hvr-underline-reveal\" href=\"#services\">Nos plans</a>\n      </li>\n      <li routerLinkActive=\"active current\" class=\"nav-item\">\n        <a class=\"nav-link hvr-underline-reveal\" href=\"#contact\">Nous contacter</a>\n      </li>\n    </ul>\n    <ul class=\"navbar-nav ml-auto\">\n      <li class=\"nav-item\">\n        <span class=\"nav-item\">\n          <i class=\"fa fa-phone fa-2x\" aria-hidden=\"true\"></i>\n          + (225) 53-33-36-70\n        </span>\n      </li>\n      <li class=\"nav-item\">\n        <a routerLink=\"/login\" class=\"btn btn-primary btn-rounded\" href=\"\">\n          <i class=\"fa fa-user\" aria-hidden=\"true\"></i>\n           Se Connecter\n        </a>\n      </li>\n\n    </ul>\n  </div>\n\n</nav>"

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/notfound/notfound.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".page404{\r\n    background: lightgrey;\r\n    width: 100%;\r\n    padding-top:100px;\r\n    padding-bottom: 100px;\r\n    margin-top: 160px;\r\n}\r\n\r\n@media only screen and (max-width:500px) {\r\n    .page404{\r\n        background: lightgrey;\r\n        height: 100%;\r\n        width: 100%;\r\n\r\n    }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/notfound/notfound.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-8 offset-sm-2\">\n      <div class=\"page404 text-center\">\n          <img src=\"assets/img/hubcom.png\" alt=\"\">\n          <h5>OOPS !</h5>\n           <p>404 NOT FOUND</p>\n          <p>the Page you're trying to access is not reachable</p> \n          <a routerLink=\"/home\"><span>Go to Home page</span></a>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/notfound/notfound.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotfoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotfoundComponent = (function () {
    function NotfoundComponent() {
    }
    NotfoundComponent.prototype.ngOnInit = function () {
    };
    NotfoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-notfound',
            template: __webpack_require__("../../../../../src/app/notfound/notfound.component.html"),
            styles: [__webpack_require__("../../../../../src/app/notfound/notfound.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotfoundComponent);
    return NotfoundComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pdrmessage/pdrmessage.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.content{\r\n    margin-left: 250px;\r\n    padding:10px;\r\n    padding-top: 80px;\r\n}\r\n.container{\r\n    padding-top: 20px;\r\n}\r\n.z-depth-5 {\r\n    box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.3);\r\n  }\r\n\r\n  .z-depth-1-half, .btn:hover {\r\n    box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.14), 0 1px 7px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -1px rgba(0, 0, 0, 0.2);\r\n  }\r\n  .btn-rounded{\r\n      border-radius: 40px;\r\n  }\r\n  input.form-control{\r\n      border-radius: 40px;\r\n  }\r\n  input.form-control:focus{\r\n    border: 1px solid #00ad5f!important;\r\n    box-shadow: 0 0 3px #00ad5f !important;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pdrmessage/pdrmessage.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<body>\n  <div class=\"content\">\n    <div class=\"container\">\n      <h2>Messages predefini</h2>\n    </div>\n    <div class=\"container\">\n      <form>\n        <div class=\"form-group row\">\n          <div class=\"col-sm-10\">\n            <input type=\"text\" name=\"\" id=\"\" placeholder=\"Rechercher un message\" class=\"form-control\">\n          </div>\n          <div class=\"col-sm-2\">\n            <button type=\"button\" class=\"btn btn-success btn-rounded\" data-toggle=\"modal\" data-target=\"#pdrmessage\">\n              <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n              Nouveau Message\n            </button>\n            <!-- Modal -->\n            <div class=\"modal fade\" id=\"pdrmessage\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"pdrmessageLabel\" aria-hidden=\"true\">\n              <div class=\"modal-dialog modal-lg\" role=\"document\">\n                <div class=\"modal-content\">\n                  <div class=\"modal-header\">\n                    <h5 class=\"modal-title\" id=\"pdrmessageLabel\">Creer un message predifinit </h5>\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                      <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                  </div>\n                  <form #f=\"ngForm\" (ngSubmit)=\"submit(f)\">\n                  <div class=\"modal-body\">\n                    <div class=\"form-group row\">\n                      <label for=\"title\" class=\"col-sm-2 col-form-label\">Titre:</label>\n                      <div class=\"col-sm-10\">\n                        <input type=\"text\" [(ngModel)]=\"messageSaved.titles\" name=\"messagetitle\" class=\"form-control\" placeholder=\"titre du message\" >\n                      </div>\n                    </div>\n                    <div class=\"form-group row\">\n                      <label for=\"pdrmessage\" class=\"col-sm-2 col-form-label\">Message: </label>\n                      <div class=\"col-sm-10\">\n                        <div class=\"row\">\n                          <div class=\"col-sm-3\">\n                            <small>\n                              <span class=\"badge badge-pill badge-info\">{{counter}}/640</span>Characters</small>\n                          </div>\n                          <div class=\"col-sm-3\">\n                            <small>\n                              <span class=\"badge badge-pill badge-danger\">{{counterMessage}}</span> message</small>\n                          </div>\n                        </div>\n                        <textarea name=\"message\" id=\"messages\" cols=\"30\" rows=\"5\" class=\"form-control\" [(ngModel)]=\"messageSaved.messages\" (keyup)=\"counterchar(message)\"></textarea>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"modal-footer\">\n                    <input type=\"button\" class=\"btn btn-secondary btn-rounded\" data-dismiss=\"modal\" value=\"Annuler\">\n                    <input type=\"submit\" class=\"btn btn-primary btn-rounded\" value=\"Sauvegarder\">\n                  </div>\n                </form>\n                  \n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </form>\n    </div>\n    <div class=\"container\">\n\n      <table class=\"table z-depth-5 \">\n        <thead>\n          <tr>\n            <th scope=\"col\">Titre</th>\n            <th scope=\"col\">Message</th>\n            <th scope=\"col\">Nombre de messages</th>\n            <th scope=\"col\">Date de creation</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <th scope=\"row\"></th>\n            <td></td>\n            <td></td>\n          </tr>\n        </tbody>\n      </table>\n\n    </div>\n  </div>\n</body>"

/***/ }),

/***/ "../../../../../src/app/pdrmessage/pdrmessage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PdrmessageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PdrmessageComponent = (function () {
    function PdrmessageComponent() {
        this.counter = 0;
        this.counterMessage = 0;
        this.Title = '';
        this.messageSaved = {
            titles: '',
            messages: ''
        };
    }
    PdrmessageComponent.prototype.ngOnInit = function () {
    };
    //counting number of characters in the textarea and 
    PdrmessageComponent.prototype.counterchar = function (message) {
        this.counter = this.message.length;
        this.sourceMessagecounter = Math.floor(this.counter / 160);
        this.remainder = this.counter % 160;
        if (this.remainder > 0) {
            // this.sourceMessagecounter = this.message.length;
            this.counterMessage = this.sourceMessagecounter + 1;
        }
        else {
            this.counterMessage = this.sourceMessagecounter;
        }
        // console.log(this.counter)
    };
    PdrmessageComponent.prototype.submit = function (value) {
        console.log(value);
    };
    PdrmessageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-pdrmessage',
            template: __webpack_require__("../../../../../src/app/pdrmessage/pdrmessage.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pdrmessage/pdrmessage.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PdrmessageComponent);
    return PdrmessageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/recapmsg/recapmsg.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content{\r\n    margin-left: 250px;\r\n    padding:10px;\r\n    padding-top: 80px;\r\n}\r\n.content .row{\r\n    padding-top: 25px;\r\n    padding-bottom: 25px;\r\n}\r\n\r\n.btn-rounded{\r\n    border-radius: 40px;\r\n}\r\n.card button{\r\n    margin-bottom: 10px;\r\n}\r\n.z-depth-3{\r\n    box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.027), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.075);\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/recapmsg/recapmsg.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<app-loader *ngIf=\"showspinner\"></app-loader>\n<div class=\"content\">\n  <div class=\"container\">\n    <h2>Recapitulatif du message</h2>\n    <hr>\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"card z-depth-3\" style=\"width:100%\">\n          <div class=\"container\">\n            <div class=\"row\">\n              <div class=\"col-sm-3\">\n                <b>Message:</b>\n              </div>\n              <div class=\"col-sm-9\">\n                <p class=\"lead\">{{message}}</p>\n              </div>\n            </div>\n\n            <hr>\n\n            <div class=\"row\">\n              <div class=\"col-sm-3\">\n                <b>Contacts:</b>\n              </div>\n              <div class=\"col-sm-9\">\n                <p class=\"lead\">{{ctclength}}</p>\n              </div>\n            </div>\n\n            <hr>\n\n            <div class=\"row\">\n              <div class=\"col-sm-3\">\n                <b>Messages Total:</b>\n              </div>\n              <div class=\"col-sm-9\">\n                <p class=\"lead\">{{numberofmessage}}</p>\n              </div>\n            </div>\n\n            <hr>\n\n            <div class=\"row\">\n              <div class=\"col-sm-3\">\n                <b>Cout:</b>\n              </div>\n              <div class=\"col-sm-9\">\n                <p class=\"lead\">{{creditpay}} credits</p>\n              </div>\n            </div>\n\n            <hr>\n\n\n            <div class=\"row\">\n              <div class=\"col-sm-3\">\n                <b> Date:</b>\n              </div>\n              <div class=\"col-sm-9\">\n                <p class=\"lead\">{{adate | date:'full':''}}</p>\n              </div>\n            </div>\n\n            <hr>\n            <div style=\"text-align:center\">\n              <button type=\"button\" class=\"btn btn-success  btn-rounded\" (click)=\"send()\">\n                <i class=\"fa fa-paper-plane-o\" aria-hidden=\"true\"></i> Envoyer</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/recapmsg/recapmsg.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecapmsgComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__share_service__ = __webpack_require__("../../../../../src/app/share.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RecapmsgComponent = (function () {
    function RecapmsgComponent(data) {
        this.data = data;
        this.showspinner = false;
    }
    RecapmsgComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.currentMessage.subscribe(function (message) { return _this.message = message; });
        this.data.currentContact.subscribe(function (contatcs) { return _this.contacts = contatcs; });
        this.data.currentmessageNumber.subscribe(function (numbofmessage) { return _this.numberofmessage = numbofmessage; });
        this.data.currentmessagedate.subscribe(function (msgdate) { return _this.adate = msgdate; });
        this.ctclength = this.contacts.length;
        console.log(this.adate);
        this.creditpay = this.ctclength * this.numberofmessage;
    };
    RecapmsgComponent.prototype.send = function () {
        this.showspinner = true;
    };
    RecapmsgComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-recapmsg',
            template: __webpack_require__("../../../../../src/app/recapmsg/recapmsg.component.html"),
            styles: [__webpack_require__("../../../../../src/app/recapmsg/recapmsg.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__share_service__["a" /* ShareService */]])
    ], RecapmsgComponent);
    return RecapmsgComponent;
}());



/***/ }),

/***/ "../../../../../src/app/registration/registration.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".signup{\r\n    background: url(/assets/img/carou3.jpeg);\r\n    height: 100%;\r\n    width: 100%;\r\n    background-size: cover;\r\n    background-position: center;\r\n    position: relative;\r\n   \r\n} \r\n .header{\r\n    position: absolute;\r\n    background-image: linear-gradient(to bottom, rgba(12, 241, 146, 0.445) 0, #fff 100%);\r\n    background-size: cover;\r\n    background-position: center;\r\n    top: 0;\r\n    bottom: 0;\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n.content{\r\n    margin-top: 6rem;\r\n}\r\n.card-body{\r\n    padding-top: 45px;\r\n}\r\nform{\r\n    padding-top: 20px;\r\n    padding-bottom: 45px;\r\n}\r\nform .form-control {\r\n    border-radius: 40px;\r\n}\r\n.form-control:focus{\r\n    border: 1px solid aquamarine !important;\r\n    box-shadow: 0 0 3px aquamarine !important\r\n}\r\n\r\n.btn-rounded-signup{\r\n    border-radius: 40px;\r\n    background-color: black;\r\n    border-color:black;\r\n}\r\n.btn-rounded-signup:focus{\r\n    border: 1px solid black !important;\r\n    box-shadow: 0 0 3px black !important;\r\n    background-color: black !important;\r\n}\r\n.z-depth-3{\r\n    box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.027), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.075);\r\n  }\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/registration/registration.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"signup\">\n  <div class=\"header\">\n    <div class=\"content\">\n      <div class=\"container text-center\">\n       <a routerLink=\"\"><img src=\"assets/img/hubcom2.png\" alt=\"\"></a>\n        <div class=\"row\">\n          <div class=\"col-sm-6 offset-sm-3\">\n            <div class=\"card z-depth-3\" style=\"width:38em\">\n              <div class=\"card-body\">\n                <h5 class=\"card-title lead\" style=\"font-size:30px;\">Sign up</h5>\n                <hr>\n                <form class=\"col-sm-8 offset-sm-2 \">\n                  <div class=\"form-group\">\n                    <input class=\"form-control\" type=\"text\" name=\"number\" id=\"number\" placeholder=\"enter your phone number\">\n                  </div>\n                  <div class=\"form-group\">\n                    <input class=\"form-control\" type=\"password\" name=\"password\" id=\"password\" placeholder=\"enter your password\">\n                  </div>\n                  <div class=\"form-group\">\n                    <input class=\"form-control\" type=\"password\" name=\"password\" id=\"enterpassword\" placeholder=\"Re-enter password\">\n                  </div>\n                  <div class=\"form-group\">\n                    <input class=\"form-control\" type=\"text\" name=\"validcode\" id=\"code\" placeholder=\"validate code\">\n                  </div>\n                  <button type=\"button\" class=\"btn btn-primary btn-block btn-rounded-signup z-depth-3\" routerLink=\"/dashboard\">Sign Up</button>\n                </form>\n                <small class=\"lead\">Already have an account?\n                  <b>\n                    <a routerLink=\"/login\" style=\"color:#00ad5f\">Login now</a>\n                  </b>\n                </small>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/registration/registration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegistrationComponent = (function () {
    function RegistrationComponent() {
    }
    RegistrationComponent.prototype.ngOnInit = function () {
    };
    RegistrationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-registration',
            template: __webpack_require__("../../../../../src/app/registration/registration.component.html"),
            styles: [__webpack_require__("../../../../../src/app/registration/registration.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/services.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".services{\r\n    background: url(/assets/img/contact.jpeg);\r\n    height: 500px;\r\n    width: 100%;\r\n    background-size: cover;\r\n    background-position: center;\r\n    position: relative;\r\n    margin: 0px auto;\r\n}\r\n#header{\r\n    position: relative;\r\n    background-color: rgba(0,0,0,0.5);\r\n    background-size: cover;\r\n    background-position: center;\r\n    top: 0;\r\n    bottom: 0;\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n\r\n.title{\r\n    top: 50%;\r\n    width:100%;\r\n    position: absolute;\r\n    z-index: 99;\r\n    text-align: center;\r\n}\r\n.title .btn{\r\n    padding: 12px 30px 10px;\r\n   \r\n}\r\n/* .btn-primary{\r\n    background-color: #4a525f;\r\n    border-color: #4a525f;\r\n} */\r\n.section1{\r\n    padding-bottom: 50px;\r\n    padding-top: 50px;\r\n}\r\n.section1 .display-4{\r\n    font-size: 38px;\r\n}\r\n.section2{\r\n    padding-bottom: 50px;\r\n    padding-top: 50px;\r\n}\r\n.section3{\r\n    background: url(/assets/img/serviceplan.jpeg);\r\n    height: 85%;\r\n    width: 100%;\r\n    background-size: cover;\r\n    background-position: center;\r\n    position: relative;\r\n}\r\n.section3 .container{\r\n    padding-top: 45px;\r\n    padding-bottom: 45px;\r\n}\r\n.section3 .row{\r\n    padding-top: 25px;\r\n}\r\n.secimage3{\r\n    position: absolute;\r\n    background-color: rgba(255, 255, 255, 0.918);\r\n    background-size: cover;\r\n    background-position: center;\r\n    top: 0;\r\n    bottom: 0;\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n.btn-rounded-plan{\r\n    background-color: black;\r\n    border-color: black;\r\n    line-height: 20px;\r\n    border-radius: 40px;\r\n  }\r\n.btn-rounded-plan:hover{\r\n      background-color: #00ad5f;\r\n      border-color: #00ad5f;\r\n  }\r\n.z-depth-3{\r\n    box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.027), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.075);\r\n  }\r\n/* .section3{\r\n    height: 450px;\r\n    padding: 100px 0px;\r\n    overflow: hidden;\r\n    position: relative;\r\n}\r\n.section3 .container{\r\n    z-index: 2;\r\n    color: #fff;\r\n    position: relative;\r\n}\r\n.section3 video{\r\n    width: 100%;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0px;\r\n} */\r\n.text-success{\r\n    margin-bottom: 30px;\r\n}\r\n.video-overlay{\r\n    background: rgba(0,0,0,0.7);\r\n    position: absolute;\r\n    top: 0px;\r\n    left: 0px;\r\n    bottom: 0px;\r\n    right: 0px;\r\n    z-index: 1;\r\n    width: 100%;\r\n}\r\n/* .btn-outline-primary{\r\n    background:transparent;\r\n    border-width: 2px !important;\r\n}\r\n.btn-outline-primary.btn-contact{\r\n    border-radius: 50px;\r\n    background-color: #4a525f;\r\n    border-color: #4a525f;\r\n    color: #fff;\r\n} */\r\n\r\n#subscribe{\r\n    background: url(/assets/img/carou2.jpeg) repeat fixed;\r\n    height: 35%;\r\n    width: 100%;\r\n    background-size: cover;\r\n    background-position: center;\r\n    /* position: relative; */\r\n}\r\n#suboverlay{\r\n    position: relative;\r\n    background-color: rgba(255, 255, 255, 0.425);\r\n    background-size: cover;\r\n    background-position: center;\r\n    top: 0;\r\n    bottom: 0;\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n\r\n#subscribe h4{\r\n    font-size: 40px;\r\n}\r\n#subscribe form{\r\n    padding-top: 8px;\r\n}\r\n\r\n#subscribe .container{\r\n    padding-top: 20px;\r\n}\r\n\r\nform .subscribe-btn{\r\n margin-top: 10px;\r\n border-radius: 40px;\r\n background-color:#00ad5f;\r\n border-color:#00ad5f;\r\n}\r\n.section4{\r\n    padding-top: 35px;\r\n    padding-bottom: 35px;\r\n}\r\n\r\n.carousel-inner{\r\n    text-align: center;\r\n}\r\n.carousel-indicators .active {\r\n   background-color: #4a525f\r\n}\r\n.carousel-indicators li{\r\n    background-color: lightgrey\r\n}\r\n\r\n@media only screen and (max-width:500px){\r\n    .title h2{\r\n        font-size: 35px;\r\n    }\r\n    .title a{\r\n        margin-top:35px;\r\n    }\r\n    #subscribe h4{\r\n        font-size: 30px;\r\n    }\r\n    #subscribe span{\r\n        font-size:15px;\r\n    }\r\n    .section3 .container{\r\n        font-size: 10px;\r\n    }\r\n    .section3 .video-overlay{\r\n       height: 100%;\r\n    }\r\n    \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/services/services.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"services\">\n  <div id=\"header\">\n      <div class=\"title\" style=\"margin-top:-72.5px\">\n          <h2 class=\"text-white display-4\">HUBCOM OFFER YOU QUALITY !</h2>\n          <a href=\"#\" class=\"btn btn-primary btn-lg\">\n            Check out what we do\n          </a>\n        </div>\n  </div>\n</div> -->\n\n<div class=\"section1\">\n  <div class=\"container text-center\">\n    <h2 class=\"display-4\">Laissez-nous vous aider à prendre votre <span style=\"color:#00ad5f\">communication</span> à un autre niveau.\n    </h2>\n    <hr>\n    <div style=\"text-align:center\">\n      <a class=\" btn btn-primary btn-rounded-plan\" routerLink=\"/login\">Connectez-vous maintenant.</a>\n    </div>\n  </div>\n</div>\n\n<!-- <div class=\"section2\">\n  <div class=\"container\">\n    <div class=\"row text-justify\">\n      <div class=\"col-sm-4\">\n        <h2>HUBCOM offer</h2>\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis\n        aute irure dolor in reprehenderit\n      </div>\n      <div class=\"col-sm-8\">\n        <h2>The best communication tool</h2>\n        <p>\n          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum cupiditate culpa expedita? Praesentium, sint vero perferendis\n          quaerat repudiandae quas, fugit laboriosam facere, modi facilis alias iure? Dolores voluptate eligendi officiis.\n        </p>\n      </div>\n    </div>\n  </div>\n</div> -->\n\n<div class=\"section3\">\n  <div class=\"secimage3\">\n    <div class=\"container text-center\">\n      <h3 class=\"display-4\">Choisissez \n        <span style=\"color:#00ad5f\"> votre Pack</span>\n      </h3>\n      <div class=\"row\">\n        <div class=\"col-md-3\">\n          <div class=\"card z-depth-3\" style=\"width: 15rem;\">\n            <ul class=\"list-group list-group-flush\">\n              <li class=\"list-group-item\">\n                <strong>BASIC</strong>\n              </li>\n              <li class=\"list-group-item\">\n                <h5 style=\"color:#00ad5f\">50</h5>credits</li>\n              <li class=\"list-group-item\">\n                <br>\n                <strong>550</strong> FCFA\n              </li>\n            </ul>\n          </div>\n        </div>\n        <div class=\"col-md-3\">\n          <div class=\"card z-depth-3\" style=\"width: 15rem;\">\n            <ul class=\"list-group list-group-flush\">\n              <li class=\"list-group-item\">\n                <strong>STANDARD</strong>\n              </li>\n              <li class=\"list-group-item\">\n                <h5 style=\"color:#00ad5f\">100</h5>credits</li>\n              <li class=\"list-group-item\">\n                <br>\n                <strong>1100</strong> FCFA\n              </li>\n            </ul>\n          </div>\n        </div>\n        <div class=\"col-md-3\">\n          <div class=\"card z-depth-3\" style=\"width: 15rem;\">\n            <ul class=\"list-group list-group-flush\">\n              <li class=\"list-group-item\">\n                <strong>PREMUIM</strong>\n              </li>\n              <li class=\"list-group-item\">\n                <h5 style=\"color:#00ad5f\">300</h5>credits</li>\n              <li class=\"list-group-item\">\n                <br>\n                <strong>3300</strong> FCFA\n              </li>\n            </ul>\n          </div>\n        </div>\n        <div class=\"col-md-3\">\n          <div class=\"card z-depth-3\" style=\"width: 15rem;\">\n            <ul class=\"list-group list-group-flush\">\n              <li class=\"list-group-item\">\n                <strong>ULTIMATE</strong>\n              </li>\n              <li class=\"list-group-item\">\n                <h5 style=\"color:#00ad5f\">500</h5>credits</li>\n              <li class=\"list-group-item\">\n                <br>\n                <strong>5500</strong> FCFA\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-3\">\n          <div class=\"card z-depth-3\" style=\"width: 15rem;\">\n            <ul class=\"list-group list-group-flush\">\n              <li class=\"list-group-item\">\n                <strong>BASIC</strong>\n              </li>\n              <li class=\"list-group-item\">\n                <h5 style=\"color:#00ad5f\">700</h5>credits</li>\n              <li class=\"list-group-item\">\n                <br>\n                <strong>7.700</strong> FCFA\n              </li>\n            </ul>\n          </div>\n        </div>\n        <div class=\"col-md-3\">\n          <div class=\"card z-depth-3\" style=\"width: 15rem;\">\n            <ul class=\"list-group list-group-flush\">\n              <li class=\"list-group-item\">\n                <strong>STANDARD</strong>\n              </li>\n              <li class=\"list-group-item\">\n                <h5 style=\"color:#00ad5f\">1000</h5>credits</li>\n              <li class=\"list-group-item\">\n                <br>\n                <strong>11.000</strong> FCFA\n              </li>\n            </ul>\n          </div>\n        </div>\n        <div class=\"col-md-3\">\n          <div class=\"card z-depth-3\" style=\"width: 15rem;\">\n            <ul class=\"list-group list-group-flush\">\n              <li class=\"list-group-item\">\n                <strong>PREMUIM</strong>\n              </li>\n              <li class=\"list-group-item\">\n                <h5 style=\"color:#00ad5f\">3000</h5>credits</li>\n              <li class=\"list-group-item\">\n                <br>\n                <strong>33.000</strong> FCFA\n              </li>\n            </ul>\n          </div>\n        </div>\n        <div class=\"col-md-3\">\n          <div class=\"card z-depth-3\" style=\"width: 15rem;\">\n            <ul class=\"list-group list-group-flush\">\n              <li class=\"list-group-item\">\n                <strong>ULTIMATE</strong>\n              </li>\n              <li class=\"list-group-item\">\n                <h5 style=\"color:#00ad5f\">5000</h5>credits</li>\n              <li class=\"list-group-item\">\n                <br>\n                <strong>55.000</strong> FCFA\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- <div class=\"section3 text-center\">\n  <div class=\"video-overlay\">\n  </div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-10 offset-sm-1\">\n        <h1 class=\"text-success\">Why us ?</h1>\n        <div class=\"row\">\n            <div class=\"col-sm-6 text-left\">\n                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br>\n                   Asperiores atque nobis praesentium, distinctio totam itaque! <br>\n                   Culpa nisi eos dolore cumque praesentium, quod maxime, tempora recusandae, dicta fugit cupiditate laudantium nulla.</p>\n            </div>\n            <div class=\"col-sm-6 text-left\">\n                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br>\n                     Asperiores atque nobis praesentium, distinctio totam itaque! <br>\n                     Culpa nisi eos dolore cumque praesentium, quod maxime, tempora recusandae, dicta fugit cupiditate laudantium nulla.</p>\n            </div>\n        </div>\n        <a href=\"#\" class=\"btn btn-outline-primary btn-contact\" >Contact us</a>\n      </div>\n    </div>\n  </div>\n  <video loop muted autoplay src=\"https://production.cdmycdn.com/assets/marketing-pages/intensives/bws/coding-scenes-9a2031e8142b40bdb5d936d5eef33dfa.mp4\"></video>\n</div> -->\n\n<div class=\"section4\">\n  <h4 class=\"text-center\">Ils nous font confiance !</h4>\n  <div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\n    <ol class=\"carousel-indicators\">\n      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\n      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\n    </ol>\n    <div class=\"carousel-inner\">\n      <div class=\"carousel-item active\">\n        <a href=\"\">\n          <img src=\"assets/img/google.png\" width=\"250px\" height=\"155px\" alt=\"\">\n        </a>\n        <a href=\"\">\n          <img src=\"assets/img/sony.png\" width=\"250px\" height=\"155px\" alt=\"\">\n        </a>\n        <a href=\"\">\n          <img src=\"assets/img/diesel.png\" width=\"250px\" height=\"155px\" alt=\"\">\n        </a>\n        <a href=\"\">\n          <img src=\"assets/img/virgin.png\" width=\"250px\" height=\"155px\" alt=\"\">\n        </a>\n      </div>\n      <div class=\"carousel-item\">\n        <a href=\"\">\n          <img src=\"assets/img/cocacola.png\" width=\"250px\" height=\"155px\" alt=\"\">\n        </a>\n        <a href=\"\">\n          <img src=\"assets/img/instagram.png\" width=\"250px\" height=\"155px\" alt=\"\">\n        </a>\n        <a href=\"\">\n          <img src=\"assets/img/samsung.png\" width=\"250px\" height=\"155px\" alt=\"\">\n        </a>\n        <a href=\"\">\n          <img src=\"assets/img/microsoft.png\" width=\"250px\" height=\"155px\" alt=\"\">\n        </a>\n      </div>\n    </div>\n    <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Previous</span>\n    </a>\n    <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\n      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Next</span>\n    </a>\n  </div>\n</div>\n\n<div id=\"subscribe\">\n  <div id=\"suboverlay\">\n    <div class=\"container text-center\">\n      <div class=\"row\">\n        <div class=\"col-sm-6 offset-sm-3\">\n          <h4 class=\"display-4\" style=\"color:#00ad5f\">Souscrire</h4>\n          <span class=\"lead\">\n              Veuillez vous abonner à notre newsletter pour pouvoir apprendre les mises à jour des nouveaux produits avant tout le monde. <br>\n              <!-- Nous n'allons pas également spammer votre boîte aux lettres. -->\n          </span>\n          <form>\n            <div class=\"form-group\">\n              <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\" Addresse E-mail\">\n              <button class=\"btn btn-primary subscribe-btn\">Souscrire</button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/services/services.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServicesComponent = (function () {
    function ServicesComponent() {
    }
    ServicesComponent.prototype.ngOnInit = function () {
    };
    ServicesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-services',
            template: __webpack_require__("../../../../../src/app/services/services.component.html"),
            styles: [__webpack_require__("../../../../../src/app/services/services.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ServicesComponent);
    return ServicesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/share.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShareService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShareService = (function () {
    function ShareService() {
        this.messagedate = new Date;
        this.messageSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]("");
        this.currentMessage = this.messageSource.asObservable();
        this.contactSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
        this.currentContact = this.contactSource.asObservable();
        this.messagenumberSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](0);
        this.currentmessageNumber = this.messagenumberSource.asObservable();
        this.messagedateSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](this.messagedate);
        this.currentmessagedate = this.messagedateSource.asObservable();
    }
    ShareService.prototype.changeMessagecontact = function (message, contact, messageNumber, msgDate) {
        this.messageSource.next(message);
        this.contactSource.next(contact);
        this.messagenumberSource.next(messageNumber);
        this.messagedateSource.next(msgDate);
        console.log(message, contact);
    };
    ShareService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ShareService);
    return ShareService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
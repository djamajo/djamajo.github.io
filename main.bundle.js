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
exports.push([module.i, "#about{\r\n    background: url(/assets/img/image0.jpeg);\r\n    height: 65%;\r\n    width: 100%;\r\n    background-size: cover;\r\n    background-position: center;\r\n    position: relative;\r\n}\r\n\r\n#title{\r\n    margin-top: 135px;\r\n    text-align: center;\r\n    color: whitesmoke;\r\n}\r\n#header{\r\n    position: absolute;\r\n    background-color: rgba(0,0,0,0.5);\r\n    background-size: cover;\r\n    background-position: center;\r\n    top: 0;\r\n    bottom: 0;\r\n    height: 100%;\r\n    width: 100%;\r\n   \r\n}\r\n\r\nb{\r\n    background-color: #90EE90;\r\n}\r\n#section3 .jumbotron{\r\n    background-color: #708090;\r\n}\r\n#titles3{\r\n    color: #90EE90;\r\n}\r\nhr{\r\n    width: 10%;\r\n    height: 0.2%;\r\n    background-color:green;\r\n}\r\n\r\n#subscribe{\r\n    background: url(/assets/img/subscribe-bg.png);\r\n    height: 35%;\r\n    width: 100%;\r\n    background-size: cover;\r\n    background-position: center;\r\n    /* position: relative; */\r\n}\r\n\r\n#subscribe h4{\r\n    font-size: 45px;\r\n}\r\n#subscribe form{\r\n    padding-top: 8px;\r\n}\r\n\r\n#subscribe .container{\r\n    padding-top: 20px;\r\n}\r\n\r\nform .subscribe-btn{\r\n margin-top: 5px;\r\n background-color: #708090;\r\n border-color: #708090\r\n}\r\n@media only screen and (max-width:500px){\r\n    #title{\r\n        font-size: 45px;\r\n    }\r\n    #section1 h2{\r\n        font-size: 25px;\r\n    }\r\n    .container h4{\r\n        font-size: 38px;\r\n    }\r\n    #subscribe h4{\r\n        font-size: 33px;\r\n    }\r\n    #subscribe span{\r\n        font-size: 13px;\r\n    }\r\n    #subscribe .container{\r\n        padding-top: 10px;\r\n    }\r\n\r\n}\r\n@media only screen and (min-width:1366px) {\r\n    #subscribe .container{\r\n        padding-top: 65px;\r\n    }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"about\">\n  <div id=\"header\">\n      <app-navbar></app-navbar>\n      <h4 class=\"display-4\" id=\"title\">\n        We are the <b>best</b>,<br>\n        You can trust Us\n      </h4>\n      <div style=\"text-align:center;\">\n            <button class=\"btn btn-lg btn-danger text-center\" routerLink=\"/services\">\n                    Check our Services\n            </button> \n      </div>\n  </div>\n</div>\n\n<div id=\"section1\">\n  <div class=\"jumbotron jumbotron-fluid\">\n    <div class=\"container text-center\">\n      <h2 class=\"display-4\">\n        Hubcom,<span class=\"text-muted\"> the best communication tool <br>you can find on the market</span>  \n      </h2>\n      <hr class=\"my-4\">\n      <p>\n        Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br>\n         Enim aspernatur eaque culpa voluptatibus quod delectus consequuntur iusto facere! Corrupti, soluta porro?<br>\n          Aperiam voluptatem dolore nam et fuga repellat minus commodi. <br>\n          Lorem ipsum dolor sit amet consectetur adipisicing elit. \n          Fugiat suscipit ratione sit quaerat nemo esse tempora pariatur ad, magnam eum beatae repudiandae, quod perspiciatis. <br>\n           Voluptas distinctio in fuga temporibus dolorum.\n      </p>\n    </div>\n  </div>\n</div>\n\n<div id=\"section2\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n        <div class=\"row\">\n        <div class=\"col-sm-2\">\n            <img class=\"img-align\" src=\"assets/img/abouticon.png\" alt=\"\">\n        </div>\n        <div class=\"col-sm-10\">\n            <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit.\n                Molestias reprehenderit quis, quia nihil iusto facere voluptatum,\n               vitae cumque, ducimus optio ratione beatae. Maiores dolor quos odio deleniti dicta voluptates officia?</p>\n        </div>\n      </div>\n      </div>\n      <div class=\"col-md-4\">\n          <div class=\"row\">\n          <div class=\"col-sm-2\">\n              <img class=\"img-align\" src=\"assets/img/abouticon.png\" alt=\"\">\n          </div>\n          <div class=\"col-sm-10\">\n              <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit.\n                  Molestias reprehenderit quis, quia nihil iusto facere voluptatum,\n                 vitae cumque, ducimus optio ratione beatae. Maiores dolor quos odio deleniti dicta voluptates officia?</p>\n          </div>\n        </div>\n        </div>\n        <div class=\"col-md-4\">\n            <div class=\"row\">\n            <div class=\"col-sm-2\">\n                <img class=\"img-align\" src=\"assets/img/abouticon.png\" alt=\"\">\n            </div>\n            <div class=\"col-sm-10\">\n                <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit.\n                    Molestias reprehenderit quis, quia nihil iusto facere voluptatum,\n                   vitae cumque, ducimus optio ratione beatae. Maiores dolor quos odio deleniti dicta voluptates officia?</p>\n            </div>\n          </div>\n          </div>\n    </div>\n\n  </div>\n</div>\n\n<div id=\"section3\">\n  <div class=\"jumbotron jumbotron-fluid\">\n    <div class=\"container text-center\">\n      <h2 id=\"titles3\"> Why us ?</h2>\n      <hr>\n      <div class=\"row\">\n          <div class=\"col-md-6 text-white\">\n            Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br>\n             Ipsam rem quia modi dolores maiores dolorem voluptatem ad eum corrupti distinctio debitis nemo repudiandae dicta,\n              mollitia deleniti quis unde! Cum, eligendi. <br>\n              \n          </div>\n          <div class=\"col-md-6 text-white\">\n              Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br>\n              Ipsam rem quia modi dolores maiores dolorem voluptatem ad eum corrupti distinctio debitis nemo repudiandae dicta,\n               mollitia deleniti quis unde! Cum, eligendi.\n          </div>\n        </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"container\">\n  <h4 class=\"display-4 text-center\">Meet the team</h4>\n  <hr class=\"my-3\">\n  <div class=\"row\">\n    <div class=\"col-md-4 text-center\">\n      <img src=\"assets/img/user1.jpg\" alt=\"\" class=\"rounded-circle\" width=\"120px\" height=\"120px\">\n      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.\n         \n      </p>\n    </div>\n    <div class=\"col-md-4 text-center\">\n        <img src=\"assets/img/user1.jpg\" alt=\"\" class=\"rounded-circle\" width=\"120px\" height=\"120px\">\n        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.\n        </p>\n      </div>\n      <div class=\"col-md-4 text-center\">\n          <img src=\"assets/img/user1.jpg\" alt=\"\" class=\"rounded-circle\" width=\"120px\" height=\"120px\">\n          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.\n          </p>\n      </div>\n  </div>\n</div>\n\n<div id=\"subscribe\">\n  <div class=\"container text-center\">\n    <div class=\"row\">\n      <div class=\"col-sm-6 offset-sm-3\">\n          <h4 class=\"display-4\">Subscribe</h4>\n          <span class=\"text-muted\">\n              Please subscribe to our newsletter so you can learn the updates for new products before anyone else. <br>\n               Also we will spam your mailbox.\n          </span>\n          <form>\n              <div class=\"form-group\">\n                  <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\">\n                  <button class=\"btn btn-primary subscribe-btn\">Submit</button>\n              </div>\n          </form>\n      </div>\n    </div>\n    \n  </div>\n</div>\n\n<app-footer></app-footer>"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_services_component__ = __webpack_require__("../../../../../src/app/services/services.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__notfound_notfound_component__ = __webpack_require__("../../../../../src/app/notfound/notfound.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__registration_registration_component__ = __webpack_require__("../../../../../src/app/registration/registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_header_header_component__ = __webpack_require__("../../../../../src/app/components/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__messaging_messaging_component__ = __webpack_require__("../../../../../src/app/messaging/messaging.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__contacts_contacts_component__ = __webpack_require__("../../../../../src/app/contacts/contacts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__groups_groups_component__ = __webpack_require__("../../../../../src/app/groups/groups.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__cpsmessage_cpsmessage_component__ = __webpack_require__("../../../../../src/app/cpsmessage/cpsmessage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pdrmessage_pdrmessage_component__ = __webpack_require__("../../../../../src/app/pdrmessage/pdrmessage.component.ts");
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
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_9__services_services_component__["a" /* ServicesComponent */],
                __WEBPACK_IMPORTED_MODULE_10__contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_11__notfound_notfound_component__["a" /* NotfoundComponent */],
                __WEBPACK_IMPORTED_MODULE_12__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_13__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_14__registration_registration_component__["a" /* RegistrationComponent */],
                __WEBPACK_IMPORTED_MODULE_15__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_17__messaging_messaging_component__["a" /* MessagingComponent */],
                __WEBPACK_IMPORTED_MODULE_18__contacts_contacts_component__["a" /* ContactsComponent */],
                __WEBPACK_IMPORTED_MODULE_19__groups_groups_component__["a" /* GroupsComponent */],
                __WEBPACK_IMPORTED_MODULE_20__cpsmessage_cpsmessage_component__["a" /* CpsmessageComponent */],
                __WEBPACK_IMPORTED_MODULE_21__pdrmessage_pdrmessage_component__["a" /* PdrmessageComponent */],
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
                        component: __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */]
                    },
                    {
                        path: 'home',
                        component: __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */]
                    },
                    {
                        path: 'about',
                        component: __WEBPACK_IMPORTED_MODULE_8__about_about_component__["a" /* AboutComponent */]
                    },
                    {
                        path: 'services',
                        component: __WEBPACK_IMPORTED_MODULE_9__services_services_component__["a" /* ServicesComponent */]
                    },
                    {
                        path: 'contact',
                        component: __WEBPACK_IMPORTED_MODULE_10__contact_contact_component__["a" /* ContactComponent */]
                    },
                    {
                        path: 'login',
                        component: __WEBPACK_IMPORTED_MODULE_13__login_login_component__["a" /* LoginComponent */]
                    },
                    {
                        path: 'signup',
                        component: __WEBPACK_IMPORTED_MODULE_14__registration_registration_component__["a" /* RegistrationComponent */]
                    },
                    {
                        path: 'dashboard',
                        component: __WEBPACK_IMPORTED_MODULE_15__dashboard_dashboard_component__["a" /* DashboardComponent */]
                    },
                    {
                        path: 'messaging',
                        component: __WEBPACK_IMPORTED_MODULE_17__messaging_messaging_component__["a" /* MessagingComponent */]
                    },
                    {
                        path: 'repertory/contacts',
                        component: __WEBPACK_IMPORTED_MODULE_18__contacts_contacts_component__["a" /* ContactsComponent */]
                    },
                    {
                        path: 'repertory/Groups',
                        component: __WEBPACK_IMPORTED_MODULE_19__groups_groups_component__["a" /* GroupsComponent */]
                    },
                    {
                        path: 'messaging/composeMessage',
                        component: __WEBPACK_IMPORTED_MODULE_20__cpsmessage_cpsmessage_component__["a" /* CpsmessageComponent */]
                    },
                    {
                        path: 'messaging/predifineMessage',
                        component: __WEBPACK_IMPORTED_MODULE_21__pdrmessage_pdrmessage_component__["a" /* PdrmessageComponent */]
                    },
                    {
                        path: '**',
                        component: __WEBPACK_IMPORTED_MODULE_11__notfound_notfound_component__["a" /* NotfoundComponent */]
                    }
                ])
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
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
exports.push([module.i, ".sidenav {\r\n    height: 100%; /* Full-height: remove this if you want \"auto\" height */\r\n    width: 250px; /* Set the width of the sidebar */\r\n    position: fixed; /* Fixed Sidebar (stay in place on scroll) */\r\n    z-index: 1; /* Stay on top */\r\n    top: 0; /* Stay at the top */\r\n    left: 0;\r\n    background-color:#001f3f; \r\n    overflow-x: hidden; /* Disable horizontal scroll */\r\n    padding-top: 90px;\r\n}\r\n\r\n/* The navigation menu links */\r\n.sidenav a {\r\n    padding: 6px 8px 6px 16px;\r\n    text-decoration: none;\r\n    font-size: 25px;\r\n    color: #fff;\r\n    display: block;\r\n    font-size: 18px;\r\n}\r\n\r\n.sideprofile{\r\n    display: none;\r\n}\r\n/* When you mouse over the navigation links, change their color */\r\n.sidenav a:hover {\r\n    color:lightgreen;\r\n}\r\n.navbar{\r\n    background-color:#001f3f !important ;\r\n}\r\n\r\nbutton .navbar-toggler{\r\n    z-index: 1;\r\n}\r\n.navbar-nav.mr-auto > li{\r\n    margin-left: 95px;\r\n}\r\n\r\n/* Style page content */\r\n\r\n/* On smaller screens, where height is less than 450px, change the style of the sidebar (less padding and a smaller font size) */\r\n@media screen and (max-height: 450px) {\r\n    /* .sidenav {padding-top: 15px;}\r\n    .sidenav a {font-size: 18px;} */\r\n}\r\n@media screen and (max-width: 1200px) {\r\n    .sidenav{\r\n        left: -250px;\r\n    }\r\n    .sidenav a {\r\n        font-size: 18px;\r\n    }\r\n    .sideprofile{\r\n        display: inherit;\r\n    }\r\n}\r\n/* @media screen and (min-width: 1200px) {\r\n    .sidenav{\r\n        left:0 !important;\r\n    }\r\n} */\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top navbar-expand-xl navbar-dark bg-dark\">\n  <!-- data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" -->\n      <button class=\"navbar-toggler\" type=\"button\" >\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <a class=\"navbar-brand\" routerLink=\"\">\n         <img src=\"assets/img/hubcom.png\" width=\"123px\" height=\"33px\" alt=\"\">\n      </a>\n        <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n          <ul class=\"navbar-nav mr-auto\">\n            <li class=\"nav-item active\">\n              <a class=\"nav-link btn btn-outline-info\"><i class=\"fa fa-commenting\" aria-hidden=\"true\"></i>\n                Compose\n              </a>\n            </li>\n          </ul>\n          <!-- <span class=\"navbar-text text-white\">\n              <span class=\"badge badge-pill badge-info\">0</span> Credit\n          </span> -->\n          <ul class=\"navbar-nav ml-auto\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link btn btn-success text-white\">\n               <b style=\"font-size:18px;\">4000</b> Credits\n              </a>\n            </li>\n            <li class=\"nav-item dropdown\">\n              <a class=\"nav-link dropdown-toggle\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n               <span class=\"text-white\">Welcome, Danny</span> \n                <!-- <img src=\"assets/img/user1.jpg\" width=\"45px\" height=\"45px\" alt=\"\" class=\"rounded-circle\"> -->\n              </a>\n              <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n                  <a class=\"dropdown-item\" href=\"#\">Profile</a>\n                  <a class=\"dropdown-item\" href=\"#\">Log out</a>\n              </div>\n            </li>\n          </ul>\n        </div>\n</nav>\n\n<div class=\"sidenav\">\n    <a routerLink=\"/dashboard\"><i class=\"fa fa-tachometer\" aria-hidden=\"true\"></i> Dashboard</a>\n    <!-- <a routerLink=\"/messaging\">Messaging</a> -->\n    <ul class=\"navbar-nav\">\n\n      <li data-toggle=\"collapse\" data-target=\"#repertoire\" class=\"collapsed active\">\n        <a class=\"dropdown\">\n            <i class=\"fa fa-address-book\" aria-hidden=\"true\"></i>\n             Repertory\n        </a>\n        <div class=\"collapse\" id=\"repertoire\" style=\"margin-left:20px;\">\n          <li><a routerLink=\"/repertory/contacts\"><i class=\"fa fa-address-card-o\" aria-hidden=\"true\"></i>\n            Contact\n          </a></li>\n          <li><a routerLink=\"/repertory/Groups\"><i class=\"fa fa-users\" aria-hidden=\"true\"></i>\n            Group</a></li>\n        </div>\n      </li>\n      <li data-toggle=\"collapse\" data-target=\"#Messaging\" class=\"collapsed active\">\n        <a class=\"dropdown\">\n            <i class=\"fa fa-comments\" aria-hidden=\"true\"></i>\n             Messaging\n        </a>\n        <div class=\"collapse\" id=\"Messaging\" style=\"margin-left:20px;\">\n          <li><a routerLink=\"/messaging/composeMessage\"><i class=\"fa fa-commenting\" aria-hidden=\"true\"></i>\n              Composer Message</a></li>\n          <li><a routerLink=\"/messaging/predifineMessage\"><i class=\"fa fa-envelope-open\" aria-hidden=\"true\"></i>\n            Predefinir Message</a></li>\n        </div>\n      </li>\n      <li data-toggle=\"collapse\" data-target=\"#Credit\" class=\"collapsed active\">\n        <a class=\"dropdown\">\n            <i class=\"fa fa-credit-card\" aria-hidden=\"true\"></i>\n             Credit\n        </a>\n        <div class=\"collapse\" id=\"Credit\" style=\"margin-left:20px;\">\n          <li><a><i class=\"fa fa-refresh\" aria-hidden=\"true\"></i>\n            Consulter credit</a></li>\n          <li><a><i class=\"fa fa-money\" aria-hidden=\"true\"></i>\n            Acheter credit</a></li>\n        </div>\n      </li>\n    </ul>\n\n    <div class=\"sideprofile\">\n      <div class=\"dropdown-divider\"></div>\n      <ul class=\"navbar-nav\">\n          <li data-toggle=\"collapse\" data-target=\"#profile\" class=\"collapsed active\">\n              <a class=\"dropdown-toggle\">\n                Danny <span class=\"arrow\"></span>\n              </a>\n              <div class=\"collapse\" id=\"profile\">\n                  <li><a>Profile</a></li>\n              </div>\n          </li>\n      </ul>\n    </div>\n</div>\n"

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

/***/ "../../../../../src/app/contact/contact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".contact{\r\n    background: url(/assets/img/contact.jpg);\r\n    height: 500px;\r\n    width: 100%;\r\n    background-size: cover;\r\n    background-position: 50% 0%;\r\n    position: relative;\r\n    margin: 0px auto;\r\n}\r\n.overlay{\r\n    position: absolute;\r\n    background-color: rgba(0,0,0,0.5);\r\n    background-size: cover;\r\n    background-position: center;\r\n    top: 0;\r\n    bottom: 0;\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n.display-4{\r\n    font-size: 40px;\r\n    color: #fff;\r\n}\r\nh4{\r\n  margin-top: 100px;\r\n}\r\nh4 b{\r\n    background-color: red;\r\n}\r\n.section1{\r\n    padding-top: 20px;\r\n    padding-bottom:20px;\r\n}\r\n.my-4{\r\n    width: 40%;\r\n}\r\n.text-success{\r\n    font-size: 25px;\r\n}\r\n.section2{\r\n    padding-top: 20px;\r\n    padding-bottom: 20px;\r\n}\r\nhr{\r\n    margin-top: -5px;\r\n}\r\n.submit{\r\n    background-color: #4a525f;\r\n    border-color: #4a525f;\r\n}\r\nagm-map{\r\n    height: 300px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"contact\">\n  <div class=\"overlay\">\n      <app-navbar></app-navbar>\n      <h4 class=\"display-4 text-center\">\n        We are happy to answer <br>\n        your questions and to be in <br>\n        <b>contact</b> with you!\n      </h4>\n  </div>\n</div>\n\n<div class=\"section1\">\n  <div class=\"container text-center\">\n      <h5 class=\"text-muted\">FEEL FREE TO DROP US A LINE!</h5>\n      <hr class=\"my-4\">\n\n      <p class=\"lead\">we would love you to contact us anytime you need !</p>\n      <p class=\"text-success\">+255 XX-XX-XX-XX</p>\n  </div>\n</div>\n\n<div class=\"section2\"> \n  <div class=\"container\">\n    <div class=\"row\">\n      <!-- <div class=\"col-sm-6\">\n        <form action=\"\">\n          <legend>GET IN TOUCH</legend>\n          <hr>\n          <div class=\"form-group\">\n            <input class=\"form-control\" type=\"text\" name=\"name\" id=\"name\" placeholder=\"Enter your name\">\n          </div>\n          <div class=\"form-group\">\n            <input class=\"form-control\" type=\"email\" name=\"email\" id=\"email\" placeholder=\"Enter your Email\">\n          </div>\n          <div class=\"form-group\">\n              <textarea class=\"form-control\" id=\"content\" rows=\"3\"></textarea>\n          </div>\n          <div class=\"text-right\">\n            <button class=\"btn btn-danger\">reset</button>\n            <button class=\"btn btn-primary submit\" type=\"submit\">submit</button>\n          </div>\n        </form>\n      </div> -->\n      <div class=\"col-sm-12\">\n        <div class=\"row text-center\">\n          <div class=\"col-sm-12\">\n            <h5>Abidjan Office</h5>\n            <b>Address</b>\n            <p>Riviera 4, <br> Abidjan 01</p>\n            <br>\n            <b>Email</b>\n            <p>Hubcom@hubcomgroup.com</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"section3\">\n    <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [fullscreenControl]=\"fullscreencontrol\"\n    [mapTypeControl]=\"mapTypeControl\" [zoom]=\"13\">\n        <agm-marker [latitude]=\"lat\" [longitude]=\"lng\">\n            <agm-info-window [isOpen]=\"infowindow\">\n                HUBCOM, Riviera 4\n             </agm-info-window>\n        </agm-marker>\n    </agm-map>\n</div>\n\n<app-footer></app-footer>\n"

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
exports.push([module.i, ".content{\r\n    margin-left: 250px;\r\n    padding:10px;\r\n    padding-top: 80px;\r\n}\r\n\r\n.letters{\r\n  display: inline-block;\r\n  width: 45px;\r\n  height: 45px;\r\n  margin-right: 10px;\r\n  margin-bottom: 5px;\r\n  border: solid 2px #001f3f;\r\n  border-radius: 50%;\r\n  text-align: center;\r\n  line-height: 30px;\r\n  font-size: 30px;\r\n  text-transform: uppercase;\r\n  cursor: pointer;\r\n}\r\nli:hover{\r\n  background-color: lightgreen\r\n}\r\n\r\n#contactContent .row{\r\n  margin-top: 10px;\r\n}\r\n.popupbox .popupbox-box{\r\n display: none;\r\n}\r\n.popupbox:hover .popupbox-box{\r\n  display: block;\r\n  float: right;\r\n}\r\n#contactContent {\r\n  padding-top:45px;\r\n}\r\n.form-group{\r\n  padding-top: 20px;\r\n}\r\n\r\n@media screen and (max-width: 1200px) {\r\n  .content{\r\n      margin-left: 0;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contacts/contacts.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div class=\"content\">\n  <div style=\"text-align:center;\">\n    <ul>\n     <li class=\"letters\" *ngFor=\"let alpha of alphabet\" (click)=\"filtered(alpha)\">\n      <a>{{alpha}}</a> \n     </li>\n    </ul>\n  </div>\n      \n  <div class=\"container\">\n    \n    <!-- <ul class=\"list-group\">\n      <li class=\"list-group-item\" *ngFor=\"let country of countriesNotSorted\">\n        {{country}}\n      </li>\n    </ul> -->\n    <!-- contacts -->\n    <div class=\"form-group\">\n      <input class=\"form-control\" type=\"text\" name=\"\" id=\"\" placeholder=\"Seach for a contact\">\n    </div>\n    <div id=\"contactContent\">\n      <div class=\"row\">\n          <div class=\"col-md-3\">\n              <div class=\"card\" style=\"width: 15rem;\">\n                  <img class=\"card-img-top\" src=\"assets/img/userr.png\" height=\"190px;\" alt=\"Card image cap\">\n                  <div class=\"card-body\">\n                    <p class=\"card-text\">\n                      <b>Name:</b> Danny\n                      <br>\n                      <b>PhoneNumber:</b>77873145\n                      <br>\n                      <b>Sex:</b>M\n                    </p>\n                  </div>\n              </div>\n          </div>\n          <div class=\"col-md-3\">\n              <div class=\"card\" style=\"width: 15rem;\">\n                <img class=\"card-img-top\" src=\"assets/img/userr.png\" height=\"190px;\" alt=\"Card image cap\">\n                <div class=\"card-body\">\n                    <p class=\"card-text\">\n                        <b>Name:</b> Danny\n                      <br>\n                      <b>PhoneNumber:</b>77873145\n                      <br>\n                      <b>Sex:</b>M\n                    </p>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-3\">\n            <div class=\"card\" style=\"width: 15rem;\">\n              <img class=\"card-img-top\" src=\"assets/img/userr.png\" height=\"190px;\" alt=\"Card image cap\">\n              <div class=\"card-body\">\n                  <p class=\"card-text\">\n                    <b>Name:</b> Danny\n                    <br>\n                    <b>PhoneNumber:</b>77873145\n                    <br>\n                    <b>Sex:</b>M\n                  </p>\n             </div>\n        </div>\n      </div>\n      <div class=\"col-md-3\">\n          <div class=\"card\" style=\"width: 15rem;\">\n            <img class=\"card-img-top\" src=\"assets/img/userr.png\" height=\"190px;\" alt=\"Card image cap\">\n            <div class=\"card-body\">\n                <p class=\"card-text\">\n                  <b>Name:</b> Danny\n                  <br>\n                  <b>PhoneNumber:</b>77873145\n                  <br>\n                  <b>Sex:</b>M\n                </p>\n           </div>\n      </div>\n    </div>\n      </div>\n\n      <div class=\"row\">\n          <div class=\"col-md-3\">\n                <div class=\"card\" style=\"width: 15rem;\">\n                  <img class=\"card-img-top\" src=\"assets/img/userr.png\" height=\"190px;\" alt=\"Card image cap\">\n                  <div class=\"card-body\">\n                      <p class=\"card-text\">\n                          <b>Name:</b> Danny\n                          <br>\n                          <b>PhoneNumber:</b>77873145\n                          <br>\n                          <b>Sex:</b>M\n                        </p>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-3\">\n              <div class=\"card\" style=\"width: 15rem;\">\n                <img class=\"card-img-top\" src=\"assets/img/userr.png\" height=\"190px;\" alt=\"Card image cap\">\n                <div class=\"card-body\">\n                    <p class=\"card-text\">\n                        <b>Name:</b> Danny\n                        <br>\n                        <b>PhoneNumber:</b>77873145\n                        <br>\n                        <b>Sex:</b>M\n                      </p>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-3\">\n            <div class=\"card\" style=\"width: 15rem;\">\n              <img class=\"card-img-top\" src=\"assets/img/userr.png\" height=\"190px;\" alt=\"Card image cap\">\n              <div class=\"card-body\">\n                  <p class=\"card-text\">\n                      <b>Name:</b> Danny\n                      <br>\n                      <b>PhoneNumber:</b>77873145\n                      <br>\n                      <b>Sex:</b>M\n                    </p>\n              </div>\n        </div>\n      </div>\n      <div class=\"col-md-3\">\n          <div class=\"card\" style=\"width: 15rem;\">\n            <img class=\"card-img-top\" src=\"assets/img/userr.png\" height=\"190px;\" alt=\"Card image cap\">\n            <div class=\"card-body\">\n                <p class=\"card-text\">\n                    <b>Name:</b> Danny\n                    <br>\n                    <b>PhoneNumber:</b>77873145\n                    <br>\n                    <b>Sex:</b>M\n                  </p>\n            </div>\n      </div>\n    </div>\n      </div>\n    </div>\n  </div>\n  \n    \n</div>"

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
exports.push([module.i, ".content{\r\n    margin-left: 250px;\r\n    padding:10px;\r\n    padding-top: 80px;\r\n}\r\n.container{\r\n    padding-top: 50px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/cpsmessage/cpsmessage.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div class=\"content\">\n  <div class=\"container\">\n    <h2 class=\"text-muted\">Compose a message</h2>\n  </div>\n\n  <div class=\"container\">\n    <form>\n\n      <div class=\"form-group row\">\n        <label for=\"input contact\" class=\"col-sm-2 col-form-label\">\n          Contacts:\n        </label>\n        <div class=\"col-sm-8\">\n          <input type=\"text\" name=\"\" id=\"\" class=\"form-control\" placeholder=\"Contacts\">\n          <small class=\"text-muted\">Hint: </small> <small>enter different contacts separate by the key ' ; ' </small>\n        </div>\n        <div class=\"col-sm-2\">\n          <!-- modal trigger -->\n          <button type=\"button\" class=\"btn btn-info\" data-toggle=\"modal\" data-target=\"#contactmodal\" >\n              <i class=\"fa fa-plus\" aria-hidden=\"true\"></i> import Contact\n          </button>\n          <!-- Modal -->\n          <div class=\"modal fade\" id=\"contactmodal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"contactmodalLabel\" aria-hidden=\"true\">\n            <div class=\"modal-dialog\" role=\"document\">\n              <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                  <h5 class=\"modal-title\" id=\"contactmodalLabel\">Modal title</h5>\n                  <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                  </button>\n                </div>\n                <div class=\"modal-body\">\n                  ...\n                </div>\n                <div class=\"modal-footer\">\n                  <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n                  <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n                </div>\n              </div>\n            </div>\n          </div>\n          <!-- End Modal  -->\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label for=\"message\" class=\"col-sm-2 col-form-label\">\n          Write your message here:\n        </label>\n        <div class=\"col-sm-10\">\n          <div class=\"row\">\n              <div class=\"col-sm-2\">\n                <small><span class=\"badge badge-pill badge-info\">0/160</span> Characters</small>\n              </div>\n              <div class=\"col-sm-2\">\n                <small> <span class=\"badge badge-pill badge-danger\">1</span> message</small>\n              </div>\n              <div class=\"col-sm-2\" style=\"margin-bottom:5px; margin-left:440px;\">\n                <button type=\"button\" class=\"btn btn-info btn-sm \">\n                    <i class=\"fa fa-plus\" aria-hidden=\"true\"></i> Predefined message\n                </button>\n              </div>\n          </div>\n          <textarea class=\"form-control\" name=\"message\" id=\"message\" cols=\"30\" rows=\"7\" [(ngModel)]=\"message\"></textarea>\n          <span>{{message}}</span>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-sm-4 offset-sm-2\">\n          <div class=\"form-check\">\n            <input class=\"form-check-input\" type=\"checkbox\" value=\"\" id=\"checkulterieur\">\n            <label for=\"envoiulterieur\">Envoi Ulterieur</label>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-10 offset-sm-2\">\n          <input type=\"text\" name=\"\" id=\"\" class=\"form-control\" placeholder=\"pick a date\" disabled>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-sm-10 offset-sm-2\" style=\"margin-top:10px;\">\n          <button type=\"submit\" class=\"btn btn-success btn-block\"> Submit </button>\n        </div>\n      </div>\n\n    </form>\n\n    \n   \n\n\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/cpsmessage/cpsmessage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CpsmessageComponent; });
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

var CpsmessageComponent = (function () {
    function CpsmessageComponent() {
    }
    CpsmessageComponent.prototype.ngOnInit = function () {
    };
    CpsmessageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-cpsmessage',
            template: __webpack_require__("../../../../../src/app/cpsmessage/cpsmessage.component.html"),
            styles: [__webpack_require__("../../../../../src/app/cpsmessage/cpsmessage.component.css")]
        }),
        __metadata("design:paramtypes", [])
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

module.exports = "<app-header></app-header>\n\n<div class=\"content\">\n  <div class=\"container-fluid\">\n  <h2 class=\"text-muted\">Dashboard</h2>\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <div class=\"card text-white bg-primary \">\n        <div class=\"row container\">\n          <div class=\"col-sm-4\" style=\"margin-top:30px;\">\n              <i class=\"fa fa-address-book fa-4x\"></i>\n          </div>\n          <div class=\"col-sm-8\">\n              <div class=\"card-body float-right\">\n                  <h5 class=\"card-title\">0</h5>\n                  <p class=\"card-text\">Contacts</p>\n                </div>\n          </div>\n        </div>\n        <div class=\"card-footer\">Contacts</div>\n      </div>\n    </div>\n\n    <div class=\"col-md-4\">\n        <div class=\"card text-white bg-secondary \">\n          <div class=\"row container\">\n            <div class=\"col-sm-4\" style=\"margin-top:30px;\">\n                <i class=\"fa fa-users fa-4x\"></i>\n            </div>\n            <div class=\"col-sm-8\">\n                <div class=\"card-body float-right\">\n                    <h5 class=\"card-title\">0</h5>\n                    <p class=\"card-text\">Groups</p>\n                  </div>\n            </div>\n          </div>\n          <div class=\"card-footer\">Groups</div>\n        </div>\n      </div>\n      <div class=\"col-md-4\">\n        <div class=\"card text-white bg-success\">\n          <div class=\"row container\">\n            <div class=\"col-sm-4\" style=\"margin-top:30px;\">\n              <i class=\"fa fa-envelope fa-4x\"></i>\n            </div>\n            <div class=\"col-sm-8\">\n              <div class=\"card-body float-right\">\n                <h5 class=\"card-title\">0</h5>\n                <p class=\"card-text\">Messages</p>\n              </div>\n            </div>\n          </div>\n          <div class=\"card-footer\">Messages</div>\n        </div>\n      </div>\n  </div>\n</div>\n</div>"

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
exports.push([module.i, "footer{\r\n    background: url(/assets/img/footer-bg.png) center 20px no-repeat;\r\n    background-size: 30%;\r\n    color: #999;\r\n    font-size: 13px;\r\n    padding: 50px 0px 20px;\r\n    position: relative;\r\n}\r\n.footer{\r\n    position: relative;\r\n    background-color:#001f3f;\r\n    background-size: 30%;\r\n    background-position: center;\r\n    top: 0;\r\n    bottom: 0;\r\n    height: auto;\r\n    width: 100%;\r\n}\r\n#footer2{\r\n    padding-top: 25px;\r\n}\r\n\r\n#footer4{\r\n    float: right;\r\n}\r\nhr{\r\n    background-color: whitesmoke;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n      <div class=\"container\">\n          <div class=\"row\" id=\"footer2\">\n              <div class=\"col-sm-4\">\n                  <img src=\"/assets/img/hubcom.png\" width=\"123px\" height=\"33px\" id=\"logo\" alt=\"\">\n              </div>\n                <div class=\"col-sm-4\">\n                  <h4 class=\"text-white\">Contact us</h4>\n                  <div class=\"text-white\">\n                      <h6>Abidjan Office</h6>\n                      <b>Address</b>\n                      <p>Riviera 4,Abidjan 01</p>\n                      <b>Email</b>\n                      <p>Hubcom@hubcomgroup.com</p>\n                  </div>\n                </div>\n                <div class=\"col-sm-4\">\n                  <h4 class=\"text-white\">Social network </h4>\n                  <p class=\"text-white\">\n                      Lorem ipsum dolor sit,\n                      amet consectetur adipisicing elit.<br>\n                      Consectetur beatae minima officiis unde, modi praesentium sit mollitia voluptatem veritatis,<br>\n                       molestiae temporibus architecto voluptas soluta saepe! Ad praesentium a autem laboriosam?\n                  </p>\n                </div>\n          </div>\n      \n          <hr>\n      \n          <div class=\"row\">\n            <div class=\"col-sm-4\">\n             <span class=\"text-white\">\n               Copyright Hubcom.\n             </span>\n            </div>\n            <div class=\"col-sm-8\">\n              <p class=\"text-white\" id=\"footer4\">\n                Social network icons\n              </p>\n            </div>\n          </div>\n        </div>  \n</footer>\n"

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
exports.push([module.i, ".content{\r\n    margin-left: 250px;\r\n    padding:10px;\r\n    padding-top: 80px;\r\n}\r\n.letters{\r\n    display: inline-block;\r\n    width: 45px;\r\n    height: 45px;\r\n    margin-right: 10px;\r\n    margin-bottom: 5px;\r\n    border: solid 2px #001f3f;\r\n    border-radius: 50%;\r\n    text-align: center;\r\n    line-height: 30px;\r\n    font-size: 30px;\r\n    text-transform: uppercase;\r\n    cursor: pointer;\r\n  }\r\n  li:hover{\r\n      background:lightgreen;\r\n  }\r\n  li:active{\r\n      background-color: lightgreen;\r\n  }\r\n  .contactGroup{\r\n      margin-top: 45px;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/groups/groups.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div class=\"content\">\n  <h2 class=\"text-muted text-center\">Contact Groups</h2>\n  <div style=\"text-align:center; padding-top:20px;\">\n    <ul>\n      <li routerLinkActive=\"active current\" class=\"letters active\" *ngFor=\"let alpha of alphabet\">\n        <a class=\"\">{{alpha}}</a> \n        <!-- routerLink=\"/repertory/Groups\" -->\n      </li>\n    </ul>\n  </div>\n\n  <div class=\"container\">\n    <div class=\"form-group\">\n      <input class=\"form-control\" type=\"text\" name=\"\" id=\"\" placeholder=\"find a group of contacts\">\n    </div>\n\n    <div class=\"contactGroup\">\n     <p class=\"lead\">Groups</p>\n        <div class=\"row\">\n            <div class=\"col-md-3\">\n                <div class=\"card\" style=\"width: 15rem;\">\n                    <img class=\"card-img-top\" src=\"assets/img/userr.png\" height=\"190px;\" alt=\"Card image cap\">\n                    <div class=\"card-body\">\n                      <p class=\"card-text\">\n                        <b>Name:</b> Danny\n                        <br>\n                        <b>PhoneNumber:</b>77873145\n                        <br>\n                        <b>Sex:</b>M\n                      </p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-3\">\n                <div class=\"card\" style=\"width: 15rem;\">\n                  <img class=\"card-img-top\" src=\"assets/img/userr.png\" height=\"190px;\" alt=\"Card image cap\">\n                  <div class=\"card-body\">\n                      <p class=\"card-text\">\n                          <b>Name:</b> Danny\n                        <br>\n                        <b>PhoneNumber:</b>77873145\n                        <br>\n                        <b>Sex:</b>M\n                      </p>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-3\">\n              <div class=\"card\" style=\"width: 15rem;\">\n                <img class=\"card-img-top\" src=\"assets/img/userr.png\" height=\"190px;\" alt=\"Card image cap\">\n                <div class=\"card-body\">\n                    <p class=\"card-text\">\n                      <b>Name:</b> Danny\n                      <br>\n                      <b>PhoneNumber:</b>77873145\n                      <br>\n                      <b>Sex:</b>M\n                    </p>\n               </div>\n          </div>\n        </div>\n            <div class=\"col-md-3\">\n              <div class=\"card\" style=\"width: 15rem;\">\n                  <img class=\"card-img-top\" src=\"assets/img/userr.png\" height=\"190px;\" alt=\"Card image cap\">\n                  <div class=\"card-body\">\n                    <p class=\"card-text\">\n                    <b>Name:</b> Danny\n                    <br>\n                    <b>PhoneNumber:</b>77873145\n                    <br>\n                    <b>Sex:</b>M\n                    </p>\n                  </div>\n                </div>\n            </div>\n        </div>\n    </div>\n  </div>\n  \n\n\n</div>"

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
exports.push([module.i, ".home{\r\n    background: url(/assets/img/hubcombackg1.jpeg);\r\n    height: 100%;\r\n    width: 100%;\r\n    background-size: cover;\r\n    background-position: center;\r\n    position: relative;  \r\n    \r\n}\r\n\r\n#title{\r\n    position: relative;\r\n    background-color: rgba(0,0,0,0.5);\r\n    background-size: cover;\r\n    background-position: center;\r\n    top: 0;\r\n    bottom: 0;\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n#title h4{\r\n    text-align: center;\r\n    margin-top: 350px;\r\n    color: whitesmoke;\r\n}\r\n\r\n\r\n#firstsection{\r\n    padding-top: 70px;\r\n    background-color:#e9ecef;\r\n    padding-bottom: 35px;\r\n}\r\n#firstsection span{\r\n    background-color:lightgreen;\r\n}\r\n#secondsection{\r\n    padding-top: 35px;\r\n    padding-bottom: 35px;\r\n}\r\n#secondsection b{\r\n    background-color:lightgreen;\r\n    color: whitesmoke;\r\n}\r\n.thirdsection{\r\n    padding-top: 30px;\r\n    padding-bottom: 30px;\r\n}\r\n#cardsection{\r\n    padding-top: 25px;\r\n}\r\n\r\n.carousel-inner{\r\n    background-image: url(\"/assets/img/image0.jpeg\");\r\n     background-position: center center;\r\n     background-repeat: no-repeat;\r\n     height:350px;\r\n   }\r\n.carousel-caption{\r\n    top:1em;\r\n   }\r\n hr{\r\n    width: 10%;\r\n    height: 0.2%;\r\n    background-color:green;\r\n }\r\n \r\n\r\n @media only screen and (max-width: 500px) {\r\n    #title h4{\r\n     margin-top: 130px;\r\n     font-size: 48px;\r\n    }\r\n    #secondsection #cardsection{\r\n        /* text-align: center; */\r\n        padding-left: 10px;\r\n    }\r\n    #secondsection #cardsection .card{\r\n        margin-top: 10px;\r\n    }\r\n   .carousel-caption h2{\r\n    font-size: 25px;\r\n   }\r\n}\r\n@media only screen and (max-width: 1366px){\r\n    .home{\r\n        height: 600px;\r\n    }\r\n    #title{\r\n        height: 600px;\r\n    }\r\n    #title h4{\r\n        margin-top: 120px;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"home\">\n    <div id=\"title\">\n        <app-navbar></app-navbar>\n      <h4 class=\"display-4 text-center animated fadeIn\">\n          HUBCOM,<br>\n          the next generation of commucation<br>\n          is here.\n      </h4>\n      <div style=\"text-align:center; margin-top:20px;\">\n        <button class=\"btn btn-success btn-lg\" routerLink=\"/about\">\n          Learn More\n        </button>\n      </div>\n    </div>\n</div>\n\n<!-- main content -->\n<div id=\"firstsection\">\n    <div class=\"container\" >\n        <div class=\"row\">\n          <div class=\"text-center\">\n            <h3> <span class=\"text-white\">Hubcom</span>  is now here</h3>\n            <p class=\"lead\">\n              Lorem ipsum dolor sit amet consectetur adipisicing elit. \n              Voluptas veritatis repudiandae laborum accusamus, reprehenderit optio cum molestiae in architecto quidem corrupti incidunt itaque?\n               Minus corrupti harum veritatis ut ratione tempora.\n               Lorem ipsum dolor sit amet consectetur adipisicing elit. \n               Reprehenderit voluptate incidunt laudantium necessitatibus commodi repellendus fugiat vero minima odio culpa fuga,\n            </p>\n          </div>\n        </div>\n    </div>\n</div>\n\n\n<div class=\"container text-center\" id=\"secondsection\">\n  <div>\n    <h3>why shoud you use <b>Hubcom</b>  ?</h3>\n  </div>\n  <div class=\"row\" id=\"cardsection\">\n    <div class=\"col-md-4 text-center hvr-grow\">\n        <div class=\"card\" style=\"width: 20rem;\">\n            <img class=\"card-img-top\" src=\"/assets/img/image1.jpeg\" alt=\"Card image cap\">\n            <div class=\"card-body\">\n              <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n            </div>\n          </div>\n    </div>\n    <div class=\"col-md-4 text-center hvr-grow\">\n        <div class=\"card\" style=\"width: 20rem;\">\n            <img class=\"card-img-top\" src=\"/assets/img/imgae2.jpeg\" alt=\"Card image cap\">\n            <div class=\"card-body\">\n              <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n            </div>\n          </div>\n    </div>\n    <div class=\"col-md-4 text-center hvr-grow\">\n        <div class=\"card\" style=\"width: 20rem;\">\n            <img class=\"card-img-top\" src=\"/assets/img/image3.jpg\" alt=\"Card image cap\">\n            <div class=\"card-body\">\n              <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n            </div>\n          </div>\n    </div>\n  </div>\n</div>\n\n<hr>\n\n<div class=\"thirdsection\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-sm-4\">\n          <h3><b>Hubcom</b> is the best way of sending sms to everyone in one click</h3><br>\n          <p>Vivamus tempus luctus nunc, eu euismod ex molestie vel. Mauris dolor neque, vehicula et ultricies ut, \n            elementum sit amet mi. Curabitur rutrum urna ipsum. Etiam sed lacinia dolor, at posuere libero. Sed quis ullamcorper justo.\n          </p>\n          <br>\n          <p>In hac habitasse platea dictumst. Maecenas ut dolor eu velit ornare malesuada.\n               Nullam iaculis mi nec arcu condimentum, sed viverra enim ornare.\n          </p>\n              <button type=\"button\" class=\"btn btn-success\">Services</button>\n              <button type=\"button\" class=\"btn btn-outline-success\">Contact</button>\n        </div>\n        <div class=\"col-sm-8\">\n          <img class=\"img-fluid\" src=\"/assets/img/featured1.png\" width=\"760px\" height=\"566px\" alt=\"\">\n        </div>\n      </div>\n    </div>\n</div>\n\n<div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\n    <ol class=\"carousel-indicators\">\n      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\n      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\n      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\n    </ol>\n    <div class=\"carousel-inner\">\n      <div class=\"carousel-item active\">\n          <div class=\"carousel-caption\">\n              <h2>\"We really loved working with HubanCreative.<br>They know what they are doing and make<br> you feel that on every step.\"</h2>\n              <p><b>Micheal Lichtenstein</b><br>CEO, WELLFUND CORPORATION</p>\n          </div>\n      </div>\n      <div class=\"carousel-item\">\n        <div class=\"carousel-caption\">\n            <h2>\"All their work are awesome and they are <br>really sensitive about customer happiness.<br> Never seen a support like this before.\"</h2>\n            <p><b>William Winfrey</b><br>Marketing Manager, DONTDROPBOX</p>\n        </div>\n      </div>\n      <div class=\"carousel-item\">\n        <div class=\"carousel-caption\">\n            <h2>\"We really loved working with HubanCreative.<br>They know what they are doing and make<br> you feel that on every step.\"</h2>\n            <p><b>Micheal Lichtenstein</b><br>CEO, WELLFUND CORPORATION</p>\n        </div>\n      </div>\n    </div>\n    <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Previous</span>\n    </a>\n    <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\n      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Next</span>\n    </a>\n  </div>\n\n  <!-- footer -->\n  <app-footer></app-footer>"

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

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".login{\r\n    background: url(/assets/img/lognsign-bg.jpg);\r\n    height: 100%;\r\n    width: 100%;\r\n    background-size: cover;\r\n    background-position: center;\r\n    position: relative;\r\n   \r\n}\r\n.header{\r\n    position: absolute;\r\n    background-color: rgba(0,0,0,0.35);\r\n    background-size: cover;\r\n    background-position: center;\r\n    top: 0;\r\n    bottom: 0;\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n.content{\r\n   padding-top: 250px;\r\n}\r\n.content a{\r\n    color: whitesmoke;\r\n}\r\n.content hr{\r\n    width: 10%;\r\n    height: 3px;\r\n    background-color:green;\r\n}\r\n.content form{\r\n    margin-top: 20px;\r\n}\r\n\r\n@media only screen and (max-width:1200px){\r\n    .content{\r\n        margin-top: -100px;\r\n    }\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"login\">\n  <div class=\"header\">\n    <div class=\"content\">\n      <div class=\"container text-center\">\n         <a routerLink=\"/home\"><img src=\"assets/img/hubcom.png\" width=\"350px\" height=\"100px\" alt=\"\"></a> \n            <p class=\"text-white\">Fill in the form to login </p>\n          <hr>\n          <div class=\"row\">\n            <div class=\"col-sm-4 offset-sm-4\">\n              <form action=\"\">\n                <div class=\"form-group animated bounceInLeft \">\n                  <input class=\"form-control\" type=\"text\" name=\"number\" id=\"number\" placeholder=\"enter your phone number\">\n                </div>\n                <div class=\"form-group animated bounceInRight\">\n                  <input class=\"form-control\" type=\"password\" name=\"password\" id=\"password\" placeholder=\"enter your password\">\n                </div>\n                <button type=\"submit\" class=\"btn btn-lg btn-secondary btn-block animated bounceIn\">Login</button>\n              </form>\n            </div>\n          </div>\n          <small class=\"text-white\">Need an account? <b><a routerLink=\"/signup\">Sign up</a></b> now!</small>\n      </div>\n   </div>\n </div>  \n</div>"

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
exports.push([module.i, "#navnav{\r\n    color: white;\r\n}\r\n.navbar{\r\n    background: transparent !important ; \r\n    padding-top: 50px !important;\r\n}\r\n.shrink {\r\n    margin: 0px auto;\r\n    padding-top: 0px !important;\r\n    transition: all ease .5s;\r\n    background: #001f3f !important ; \r\n    /* // Change background to black on scroll */\r\n}\r\nhr{\r\n    background-color: whitesmoke;\r\n    margin-top: -5px;\r\n}\r\n.topbar a{\r\n    position: relative;\r\n    z-index: 10000;\r\n}\r\n.topbar #login{\r\n    padding: 5px 10px;\r\n    font-weight: 600;\r\n    color: #fff;\r\n}\r\n.topbar #registration{\r\n    padding: 5px 10px;\r\n    font-weight: 600;\r\n    color: #fff;\r\n}\r\n/* .topbar{\r\n    display: block;\r\n} */\r\n\r\n@media only screen and (max-width: 500px){\r\n    .navbar{\r\n        margin-top: 45px;\r\n    }\r\n    /* .topbar #navnav{\r\n        text-align: center;\r\n    } */\r\n    /* .topbar #Registration{\r\n        text-align: center;\r\n    }\r\n    .topbar #Login{\r\n        text-align: center;\r\n    } */\r\n    .shrink{\r\n        margin-top:0px;\r\n        padding-top: 0px !important;\r\n    }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "\n    <div class=\"topbar\">\n        <div class=\"container\">\n          <div class=\"row\">\n            <div class=\"col-sm-6 col-xs-6\">\n            <p id=\"navnav\">Hubcom</p>\n            </div>\n            <div class=\"col-sm-6 col-xs-6 text-right\">\n              <a routerLink=\"/login\" id=\"login\">Login</a>\n              <a routerLink=\"/signup\" id=\"registration\">Registration</a>\n            </div>\n          </div>\n          <hr>\n        </div>\n    </div>\n      <nav class=\"navbar fixed-top navbar-expand-xl navbar-dark bg-dark\">\n        <div class=\"container\">\n            <a class=\"navbar-brand\" routerLink=\"\">\n               <img src=\"assets/img/hubcom.png\" width=\"123px\" height=\"33px\" alt=\"\">\n            </a>\n              <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                <span class=\"navbar-toggler-icon\"></span>\n              </button>\n              <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n                <ul class=\"navbar-nav ml-auto\">\n                  <li routerLinkActive =\"active current\" class=\"nav-item\">\n                    <a class=\"nav-link hvr-underline-reveal\" routerLink=\"/home\">Home</a>\n                  </li>\n                  <li routerLinkActive =\"active current\" class=\"nav-item\">\n                    <a class=\"nav-link hvr-underline-reveal\" routerLink=\"/about\">About</a>\n                  </li>\n                  <li routerLinkActive =\"active current\" class=\"nav-item\">\n                    <a class=\"nav-link hvr-underline-reveal\" routerLink=\"/services\">Services</a>\n                  </li>\n                  <li routerLinkActive =\"active current\" class=\"nav-item\">\n                    <a class=\"nav-link hvr-underline-reveal\" routerLink=\"/contact\">Contact</a>\n                  </li>\n                </ul>\n              </div>\n        </div>\n      </nav>\n\n"

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
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pdrmessage/pdrmessage.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  pdrmessage works!\n</p>\n"

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
    }
    PdrmessageComponent.prototype.ngOnInit = function () {
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

/***/ "../../../../../src/app/registration/registration.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".signup{\r\n    background: url(/assets/img/lognsign-bg.jpg);\r\n    height: 100%;\r\n    width: 100%;\r\n    background-size: cover;\r\n    background-position: center;\r\n    position: relative;\r\n    \r\n}\r\n.header{\r\n    position: absolute;\r\n    background-color: rgba(0,0,0,0.5);\r\n    background-size: cover;\r\n    background-position: center;\r\n    top: 0;\r\n    bottom: 0;\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n.content{\r\n   padding-top: 250px;\r\n}\r\n.content a{\r\n    color: whitesmoke;\r\n}\r\n.content hr{\r\n    width: 10%;\r\n    height: 3px;\r\n    background-color:green;\r\n}\r\n.content form{\r\n    margin-top: 20px;\r\n}\r\n\r\n@media only screen and (max-width:1200px){\r\n    .content{\r\n        margin-top: -100px;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/registration/registration.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"signup\">\n  <div class=\"header\">\n    <div class=\"content\">\n      <div class=\"container text-center\">\n         <a routerLink=\"/home\"><img src=\"assets/img/hubcom.png\" width=\"350px\" height=\"100px\" alt=\"\"></a> \n            <p class=\"text-white\">Fill in the form to register</p>\n          <hr>\n          <div class=\"row\">\n            <div class=\"col-sm-4 offset-sm-4\">\n              <form action=\"\">\n                <div class=\"form-group\">\n                  <input class=\"form-control\" type=\"text\" name=\"number\" id=\"number\" placeholder=\"enter your phone number\">\n                </div>\n                <div class=\"form-group\">\n                  <input class=\"form-control\" type=\"password\" name=\"password\" id=\"password\" placeholder=\"enter your password\">\n                </div>\n                <div class=\"form-group\">\n                  <input class=\"form-control\" type=\"password\" name=\"confirmpass\" id=\"confirm pass\" placeholder=\"Re-enter your password\">\n                </div>\n                <div class=\"form-group\">\n                  <input type=\"text\" class=\"form-control\" name=\"code\" id=\"code\" placeholder=\"Validation code\">\n                </div>\n                <button type=\"submit\" class=\"btn btn-lg btn-secondary btn-block\">Sign Up</button>\n              </form>\n            </div>\n          </div>\n          <small class=\"text-white\">Already have an account? <b> <a routerLink=\"/login\">Login</a> </b> now!</small>\n      </div>\n  </div>\n </div>  \n</div>"

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
exports.push([module.i, ".services{\r\n    background: url(/assets/img/contact.jpeg);\r\n    height: 500px;\r\n    width: 100%;\r\n    background-size: cover;\r\n    background-position: center;\r\n    position: relative;\r\n    margin: 0px auto;\r\n}\r\n#header{\r\n    position: relative;\r\n    background-color: rgba(0,0,0,0.5);\r\n    background-size: cover;\r\n    background-position: center;\r\n    top: 0;\r\n    bottom: 0;\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n\r\n.title{\r\n    top: 50%;\r\n    width:100%;\r\n    position: absolute;\r\n    z-index: 99;\r\n    text-align: center;\r\n}\r\n.title .btn{\r\n    padding: 12px 30px 10px;\r\n   \r\n}\r\n.btn-primary{\r\n    background-color: #4a525f;\r\n    border-color: #4a525f;\r\n}\r\n.section1{\r\n    padding-bottom: 50px;\r\n    padding-top: 50px;\r\n}\r\n.section2{\r\n    padding-bottom: 50px;\r\n    padding-top: 50px;\r\n}\r\n.section3{\r\n    height: 450px;\r\n    padding: 100px 0px;\r\n    overflow: hidden;\r\n    position: relative;\r\n}\r\n.section3 .container{\r\n    z-index: 2;\r\n    color: #fff;\r\n    position: relative;\r\n}\r\n.section3 video{\r\n    width: 100%;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0px;\r\n}\r\n.text-success{\r\n    margin-bottom: 30px;\r\n}\r\n.video-overlay{\r\n    background: rgba(0,0,0,0.7);\r\n    position: absolute;\r\n    top: 0px;\r\n    left: 0px;\r\n    bottom: 0px;\r\n    right: 0px;\r\n    z-index: 1;\r\n    width: 100%;\r\n}\r\n.btn-outline-primary{\r\n    background:transparent;\r\n    border-width: 2px !important;\r\n}\r\n.btn-outline-primary.btn-contact{\r\n    border-radius: 50px;\r\n    background-color: #4a525f;\r\n    border-color: #4a525f;\r\n    color: #fff;\r\n}\r\n\r\n#subscribe{\r\n    background: url(/assets/img/subscribe-bg.png);\r\n    height: 35%;\r\n    width: 100%;\r\n    background-size: cover;\r\n    background-position: center;\r\n    /* position: relative; */\r\n}\r\n\r\n#subscribe h4{\r\n    font-size: 45px;\r\n}\r\n#subscribe form{\r\n    padding-top: 8px;\r\n}\r\n\r\n#subscribe .container{\r\n    padding-top: 20px;\r\n}\r\n\r\nform .subscribe-btn{\r\n margin-top: 5px;\r\n background-color: #708090;\r\n border-color: #708090\r\n}\r\n.section4{\r\n    padding-top: 35px;\r\n    padding-bottom: 35px;\r\n}\r\n.section4 h4{\r\n    color: #90EE90;\r\n}\r\n.carousel-inner{\r\n    text-align: center;\r\n}\r\n.carousel-indicators .active {\r\n   background-color: #4a525f\r\n}\r\n.carousel-indicators li{\r\n    background-color: lightgrey\r\n}\r\n\r\n@media only screen and (max-width:500px){\r\n    .title h2{\r\n        font-size: 35px;\r\n    }\r\n    .title a{\r\n        margin-top:35px;\r\n    }\r\n    #subscribe h4{\r\n        font-size: 30px;\r\n    }\r\n    #subscribe span{\r\n        font-size:15px;\r\n    }\r\n    .section3 .container{\r\n        font-size: 10px;\r\n    }\r\n    .section3 .video-overlay{\r\n       height: 100%;\r\n    }\r\n    \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/services/services.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"services\">\n  <div id=\"header\">\n      <app-navbar></app-navbar>\n      <div class=\"title\" style=\"margin-top:-72.5px\">\n          <h2 class=\"text-white display-4\">HUBCOM OFFER YOU QUALITY !</h2>\n          <a href=\"#\" class=\"btn btn-primary btn-lg\">\n            Check out what we do\n          </a>\n        </div>\n  </div>\n  \n</div>\n\n<div class=\"section1\">\n  <div class=\"container text-center\">\n    <h3 class=\"text-muted\">Not just</h3>\n    <h3>Communication</h3>\n    <hr class=\"my-4\">\n\n    <div class=\"row text-justify\">\n      <div class=\"col-sm-6\">\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit,\n           sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit\n      </div>\n      <div class=\"col-sm-6\">\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit,\n           sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"section2\">\n  <div class=\"container\">\n    <div class=\"row text-justify\">\n      <div class=\"col-sm-4\">\n        <h2>HUBCOM offer</h2>\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit,\n           sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit\n      </div>\n      <div class=\"col-sm-8\">\n        <h2>The best communication tool</h2>\n        <p> \n          Lorem ipsum dolor sit, amet consectetur adipisicing elit.\n          Cum cupiditate culpa expedita? Praesentium, sint vero perferendis quaerat repudiandae quas,\n           fugit laboriosam facere, modi facilis alias iure? Dolores voluptate eligendi officiis.\n        </p>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"section3 text-center\">\n  <div class=\"video-overlay\">\n  </div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-10 offset-sm-1\">\n        <h1 class=\"text-success\">Why us ?</h1>\n        <div class=\"row\">\n            <div class=\"col-sm-6 text-left\">\n                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br>\n                   Asperiores atque nobis praesentium, distinctio totam itaque! <br>\n                   Culpa nisi eos dolore cumque praesentium, quod maxime, tempora recusandae, dicta fugit cupiditate laudantium nulla.</p>\n            </div>\n            <div class=\"col-sm-6 text-left\">\n                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br>\n                     Asperiores atque nobis praesentium, distinctio totam itaque! <br>\n                     Culpa nisi eos dolore cumque praesentium, quod maxime, tempora recusandae, dicta fugit cupiditate laudantium nulla.</p>\n            </div>\n        </div>\n        <a href=\"#\" class=\"btn btn-outline-primary btn-contact\" >Contact us</a>\n      </div>\n    </div>\n  </div>\n  <video loop muted autoplay src=\"https://production.cdmycdn.com/assets/marketing-pages/intensives/bws/coding-scenes-9a2031e8142b40bdb5d936d5eef33dfa.mp4\"></video>\n</div>\n\n<div class=\"section4\" >\n  <h4 class=\"text-center text-sucess\">They trust us !</h4>\n    <div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\n        <ol class=\"carousel-indicators\">\n          <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\n          <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\n        </ol>\n        <div class=\"carousel-inner\">\n          <div class=\"carousel-item active\">\n            <a href=\"\"><img src=\"assets/img/google.png\" width=\"250px\" height=\"155px\" alt=\"\"></a>\n            <a href=\"\"><img src=\"assets/img/sony.png\"  width=\"250px\" height=\"155px\" alt=\"\"></a>\n            <a href=\"\"><img src=\"assets/img/diesel.png\" width=\"250px\" height=\"155px\" alt=\"\"></a>\n            <a href=\"\"><img src=\"assets/img/virgin.png\" width=\"250px\" height=\"155px\" alt=\"\"></a>\n          </div>\n          <div class=\"carousel-item\">\n              <a href=\"\"><img src=\"assets/img/cocacola.png\" width=\"250px\" height=\"155px\" alt=\"\"></a>\n              <a href=\"\"><img src=\"assets/img/instagram.png\"  width=\"250px\" height=\"155px\" alt=\"\"></a>\n              <a href=\"\"><img src=\"assets/img/samsung.png\" width=\"250px\" height=\"155px\" alt=\"\"></a>\n            <a href=\"\"><img src=\"assets/img/microsoft.png\"  width=\"250px\" height=\"155px\" alt=\"\"></a>\n          </div>\n        </div>\n        <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\n          <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n          <span class=\"sr-only\">Previous</span>\n        </a>\n        <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\n          <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n          <span class=\"sr-only\">Next</span>\n        </a>\n    </div>\n</div>\n\n<div id=\"subscribe\">\n  <div class=\"container text-center\">\n    <div class=\"row\">\n      <div class=\"col-sm-6 offset-sm-3\">\n          <h4 class=\"display-4\">Subscribe</h4>\n          <span class=\"text-muted\">\n              Please subscribe to our newsletter so you can learn the updates for new products before anyone else. <br>\n               Also we will spam your mailbox.\n          </span>\n          <form>\n              <div class=\"form-group\">\n                  <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\">\n                  <button class=\"btn btn-primary subscribe-btn\">Submit</button>\n              </div>\n          </form>\n      </div>\n    </div>\n    \n  </div>\n</div>\n\n<app-footer></app-footer>"

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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
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
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var item_detail_component_1 = require("./item/item-detail.component");
var packet_detail_component_1 = require("./packet/packet-detail.component");
var packet_list_component_1 = require("./packet/packet-list/packet-list.component");
var animations_1 = require("@angular/platform-browser/animations");
var layout_1 = require("@angular/cdk/layout");
var material_1 = require("@angular/material");
var card_1 = require("@angular/material/card");
var button_1 = require("@angular/material/button");
var list_1 = require("@angular/material/list");
var stepper_1 = require("@angular/material/stepper");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                item_detail_component_1.ItemDetailComponent,
                packet_detail_component_1.PacketDetailComponent,
                packet_list_component_1.PacketListComponent
            ],
            imports: [
                app_routing_module_1.AppRoutingModule,
                platform_browser_1.BrowserModule,
                animations_1.BrowserAnimationsModule,
                layout_1.LayoutModule,
                material_1.MatSidenavModule,
                card_1.MatCardModule,
                button_1.MatButtonModule,
                list_1.MatListModule,
                stepper_1.MatStepperModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
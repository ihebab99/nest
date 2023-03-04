"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const config_1 = require("./config/config");
const entities_1 = require("./model/entities");
const AdressController_1 = require("./model/controller/AdressController");
const AdressService_1 = require("./model/service/AdressService");
const AdressRpository_1 = require("./model/repository/AdressRpository");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot(Object.assign(Object.assign({}, config_1.MysqlConfig), { entities: entities_1.Entities, synchronize: true, autoLoadEntities: true })),
        ],
        controllers: [app_controller_1.AppController, AdressController_1.AdressController],
        providers: [app_service_1.AppService, AdressService_1.AdressService, AdressRpository_1.AdressRpository],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdressController = void 0;
const AdressService_1 = require("../service/AdressService");
const common_1 = require("@nestjs/common");
const CreateAdressDto_1 = require("../dto/CreateAdressDto");
let AdressController = class AdressController {
    constructor(adressService) {
        this.adressService = adressService;
    }
    async createAdress(adress) {
        try {
            return await this.adressService.createAdress(adress);
        }
        catch (error) {
            throw error;
        }
    }
    async getAllAdress() {
        try {
            return this.adressService.getAllAdress();
        }
        catch (error) {
            throw error;
        }
    }
};
__decorate([
    (0, common_1.Post)('/save'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateAdressDto_1.CreateAdressDto]),
    __metadata("design:returntype", Promise)
], AdressController.prototype, "createAdress", null);
__decorate([
    (0, common_1.Get)('/all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdressController.prototype, "getAllAdress", null);
AdressController = __decorate([
    (0, common_1.Controller)('address'),
    __metadata("design:paramtypes", [AdressService_1.AdressService])
], AdressController);
exports.AdressController = AdressController;
//# sourceMappingURL=AdressController.js.map
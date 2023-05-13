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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdressService = void 0;
const AdressRpository_1 = require("../repository/AdressRpository");
const common_1 = require("@nestjs/common");
let AdressService = class AdressService {
    constructor(adressRepository) {
        this.adressRepository = adressRepository;
    }
    async createAdress(adress) {
        try {
            return this.adressRepository.createAdress(adress);
        }
        catch (error) {
            throw error;
        }
    }
    async getAllAdress() {
        try {
            return this.adressRepository.getAllAdress();
        }
        catch (error) {
            throw error;
        }
    }
};
AdressService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [AdressRpository_1.AdressRpository])
], AdressService);
exports.AdressService = AdressService;
//# sourceMappingURL=AdressService.js.map
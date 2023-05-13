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
exports.AdressRpository = void 0;
const typeorm_1 = require("typeorm");
const Adress_1 = require("../entities/Adress");
const common_1 = require("@nestjs/common");
let AdressRpository = class AdressRpository extends typeorm_1.Repository {
    constructor(datasource) {
        super(Adress_1.Adress, datasource.createEntityManager());
        this.datasource = datasource;
    }
    async createAdress(adress) {
        try {
            return this.save(adress);
        }
        catch (error) {
            throw error;
        }
    }
    async getAllAdress() {
        try {
            return this.find();
        }
        catch (error) {
            throw error;
        }
    }
    async paginateAdress(type) {
        try {
            return await this.createQueryBuilder('adress')
                .leftJoinAndSelect('adress.user', 'user').where('adress.type =:type', { type })
                .getManyAndCount();
        }
        catch (error) {
            throw error;
        }
    }
};
AdressRpository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.DataSource])
], AdressRpository);
exports.AdressRpository = AdressRpository;
//# sourceMappingURL=AdressRpository.js.map
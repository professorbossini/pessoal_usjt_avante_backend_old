"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const processador_utils_1 = require("../dados/presenca/processador.utils");
let AppService = class AppService {
    getHello(getDados) {
        (0, processador_utils_1.default)(getDados);
    }
    getStudentStatus(ra, getDados) {
        const aux = (itens) => {
            let alunoResultado = { nome: '', ra: 0, avtCoins: 0 };
            for (let item of itens) {
                for (let aluno of item.alunos) {
                    if (ra == aluno.ra) {
                        alunoResultado.nome = aluno.nome;
                        alunoResultado.ra = aluno.ra;
                        alunoResultado.avtCoins += +aluno.avtCoins;
                    }
                }
            }
            getDados(alunoResultado);
        };
        (0, processador_utils_1.default)(aux);
    }
};
AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map
import { Injectable } from '@nestjs/common';
import dadosUtil from '../dados/presenca/processador.utils'

@Injectable()
export class AppService {
  getHello(getDados): void {
    dadosUtil(getDados)
  }
  getStudentStatus (ra, getDados){
    const aux = (itens) => {
      let alunoResultado = {nome: '', ra: 0, avtCoins: 0}
      for (let item of itens){
        for (let aluno of item.alunos){
          if (ra == aluno.ra){
            alunoResultado.nome = aluno.nome
            alunoResultado.ra = aluno.ra
            alunoResultado.avtCoins += +aluno.avtCoins
          }
        }
      }
      getDados(alunoResultado)
    }
    dadosUtil(aux)
  }

}

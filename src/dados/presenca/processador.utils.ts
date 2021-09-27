import * as csv from 'fast-csv'
import * as fs from 'fs'
import * as path from 'path'
import { stringify } from 'flatted'
import _ from 'underscore'


export default  (getDados) => {
    const avtCoinsPorPresenca = 15
    let alunos = []
    fs.createReadStream("dados\\presenca\\presencas.csv")
        .pipe(csv.parse({headers: true}))
        .on('data', (linha) =>{ 
            const date = new Date(linha['Carimbo de data/hora'])
            const diaDaSemana = date.getDay()
            if (diaDaSemana === 3){
                const data = date.toLocaleDateString()
                const aluno = {
                    nome: linha["Nome completo, sem abreviações"],
                    ra: linha["RA"],
                    avtCoins: avtCoinsPorPresenca
                }
                const item = alunos.find((elemento) => elemento.data === data)
                if (!item){
                    alunos.push({data: data, alunos: [aluno]})
                }else{
                    const indice = item.alunos.findIndex(a => a.ra === aluno.ra)
                    if (indice < 0)
                        item.alunos.push(aluno)
                }
            }
        })
        .on('end', (totalLinhas: number) =>{
            getDados(alunos)
        })
       
}

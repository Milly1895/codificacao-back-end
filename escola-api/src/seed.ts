import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module.js";
import { AlunoService } from "./alunos/alunos.service.js";
import {faker} from "@faker-js/faker/locale/pt_BR";
import { alunosModule } from "./alunos/alunos.module.js";

async function bootstrap (){
    const app = await NestFactory.createApplicationContext(AppModule);
    const alunoService = app.get(AlunoService);

    console.log('Iniciando a geração de alunos Fakes...');

    const cursos = [
        'Direito',
        'Medicina',
        'Engenharia Civil',
        'Matemática',
        'História',
        'Ciência da Computação',
        'Filosofia',
        'Enfermagem',
        'Engenharia da Computação',
        'Redes de Computadores',
        'Recursos Humanos'
    ];

    for (let i = 0; i < 100; i++){
        const cursosAleatrorios= faker.helpers.arrayElements(
            cursos,{min: 1,max: 3});
        const fakeAluno= {
            nome: faker.person.fullName(),
            idade: faker.number.int({
                min:17, max:99,
            }),
            matricula:faker.string.numeric(5),
            cursos: cursosAleatrorios,
            ativo:true,
        };
        try{
            await alunoService.create(fakeAluno);
        }catch(error){
            console.log(`Pular erro ao salvar ${fakeAluno.nome} - Matricula Duplicada`)
        }
        console.log('Banco de dados populado com sucesso!')
        await app.close();
    
    }
}
bootstrap();;
import { Controller, Get } from '@nestjs/common';


@Controller('status')
export class AppController {
  @Get()
  getPublic(){
   return{
    message:'Rota Publica acessada com sucesso!',
    data: new Date(),
   }
  }
  @Get('admin')
  getAdmin(){
   return{
    message: 'Bem-vindo ao Painel administrativo!',
    data: new Date(),
   }
  }
}

import { Module } from '@nestjs/common';
import { CotasService } from './cotas.service';
import { CotasResolver } from './cotas.resolver';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [CotasService, CotasResolver],
  exports: [CotasService],
})
export class CotasModule {}

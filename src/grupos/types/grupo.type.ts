import { Field, ID, ObjectType } from '@nestjs/graphql';
import { AdministradoraType } from '../../administradoras/types/administradora.type';
import { CotaType } from '../../cotas/types/cota.type';

@ObjectType()
export class GrupoType {
  @Field(() => ID)
  id: string;

  @Field()
  nome: string;

  @Field({ nullable: true })
  descricao?: string;

  @Field()
  numeroMaximoCotas: number;

  @Field(() => ID)
  administradoraId: string;

  @Field(() => AdministradoraType, { nullable: true })
  administradora?: AdministradoraType;

  @Field(() => [CotaType], { nullable: true })
  cotas?: CotaType[];
}

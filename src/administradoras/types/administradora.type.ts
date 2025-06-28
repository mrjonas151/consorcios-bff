import { Field, ID, ObjectType } from '@nestjs/graphql';
import { GrupoType } from '../../grupos/types/grupo.type';

@ObjectType()
export class AdministradoraType {
  @Field(() => ID)
  id: string;

  @Field()
  nome: string;

  @Field()
  cnpj: string;

  @Field({ nullable: true })
  endereco?: string;

  @Field(() => [GrupoType], { nullable: true })
  grupos?: GrupoType[];
}

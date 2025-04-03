import { Field, ID, ObjectType } from '@nestjs/graphql';
import { CotaType } from '../../cotas/types/cota.type';

@ObjectType()
export class ClienteType {
  @Field(() => ID)
  id: string;

  @Field()
  nome: string;

  @Field()
  cpf: string;

  @Field()
  email: string;

  @Field({ nullable: true })
  telefone?: string;

  @Field(() => [CotaType], { nullable: true })
  cotas?: CotaType[];
}

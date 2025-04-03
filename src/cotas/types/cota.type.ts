import { Field, ID, ObjectType } from '@nestjs/graphql';
import { GrupoType } from '../../grupos/types/grupo.type';
import { ClienteType } from '../../clientes/types/cliente.type';

@ObjectType()
export class CotaType {
  @Field(() => ID)
  id: string;

  @Field()
  numeroCota: number;

  @Field()
  valor: number;

  @Field()
  status: string;

  @Field({ nullable: true })
  dataCriacao?: Date;

  @Field({ nullable: true })
  dataAtualizacao?: Date;

  @Field(() => ID)
  grupoId: string;

  @Field(() => GrupoType, { nullable: true })
  grupo?: GrupoType;

  @Field(() => ID, { nullable: true })
  clienteId?: string;

  @Field(() => ClienteType, { nullable: true })
  cliente?: ClienteType;
}

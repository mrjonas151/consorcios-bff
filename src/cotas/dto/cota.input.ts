import { Field, InputType, ID } from '@nestjs/graphql';
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  IsOptional,
  IsUUID,
  IsEnum,
} from 'class-validator';

export enum CotaStatus {
  CANCELADA = 'CANCELADA',
  CONTEMPLADA = 'CONTEMPLADA',
  DISPONIVEL = 'DISPONIVEL',
  RESERVADA = 'RESERVADA',
  VENDIDA = 'VENDIDA',
}

@InputType()
export class CotaInput {
  @Field()
  @IsNotEmpty()
  @IsNumber()
  numeroCota: number;

  @Field()
  @IsNotEmpty()
  @IsNumber()
  valor: number;

  @Field()
  @IsNotEmpty()
  @IsString()
  @IsEnum(CotaStatus)
  status: string;

  @Field(() => ID)
  @IsNotEmpty()
  @IsUUID()
  grupoId: string;

  @Field(() => ID, { nullable: true })
  @IsOptional()
  @IsUUID()
  clienteId?: string;
}

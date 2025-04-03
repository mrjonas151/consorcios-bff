import { Resolver, Query, Mutation, Args, ID, Context } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { CotasService } from './cotas.service';
import { CotaType } from './types/cota.type';
import { CotaInput } from './dto/cota.input';
import { GqlAuthGuard } from '../auth/guards/gql-auth.guard';
import { DeleteResponse } from '../common/dto/delete-response.dto';

@Resolver(() => CotaType)
export class CotasResolver {
  constructor(private readonly cotasService: CotasService) {}

  @Query(() => [CotaType])
  @UseGuards(GqlAuthGuard)
  async cotas(@Context() context) {
    const token = context.req.headers.authorization.split(' ')[1];
    return this.cotasService.findAll(token);
  }

  @Query(() => CotaType)
  @UseGuards(GqlAuthGuard)
  async cota(@Args('id', { type: () => ID }) id: string, @Context() context) {
    const token = context.req.headers.authorization.split(' ')[1];
    return this.cotasService.findOne(id, token);
  }

  @Mutation(() => CotaType)
  @UseGuards(GqlAuthGuard)
  async createCota(
    @Args('input') createCotaInput: CotaInput,
    @Context() context,
  ) {
    const token = context.req.headers.authorization.split(' ')[1];
    return this.cotasService.create(createCotaInput, token);
  }

  @Mutation(() => CotaType)
  @UseGuards(GqlAuthGuard)
  async updateCota(
    @Args('id', { type: () => ID }) id: string,
    @Args('input') updateCotaInput: CotaInput,
    @Context() context,
  ) {
    const token = context.req.headers.authorization.split(' ')[1];
    return this.cotasService.update(id, updateCotaInput, token);
  }

  @Mutation(() => DeleteResponse)
  @UseGuards(GqlAuthGuard)
  async deleteCota(
    @Args('id', { type: () => ID }) id: string,
    @Context() context,
  ) {
    const token = context.req.headers.authorization.split(' ')[1];
    return this.cotasService.remove(id, token);
  }
}

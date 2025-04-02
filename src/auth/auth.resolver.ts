import { Resolver, Mutation, Args, Query, Context } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { LoginInput } from './dto/login.input';
import { AuthResponse } from './dto/auth-response.dto';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from './guards/gql-auth.guard';
import { User } from './dto/user.dto';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => AuthResponse)
  async login(@Args('input') loginInput: LoginInput): Promise<AuthResponse> {
    return await this.authService.login(
      loginInput.username,
      loginInput.password,
    );
  }

  @Query(() => User)
  @UseGuards(GqlAuthGuard)
  me(@Context() context) {
    return context.req.user;
  }
}

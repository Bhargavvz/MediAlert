import { Injectable, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    try {
      // Check if authentication was successful
      const result = (await super.canActivate(context)) as boolean;
      const request = context.switchToHttp().getRequest();

      // Get the validation result from Passport
      await super.logIn(request);
      
      return result;
    } catch (error) {
      throw new UnauthorizedException(
        error.message || 'Invalid credentials'
      );
    }
  }

  handleRequest(err: any, user: any, info: any) {
    // You can throw an error based on either "info" or "err" arguments
    if (err || !user) {
      throw new UnauthorizedException(
        info?.message || err?.message || 'Invalid credentials'
      );
    }
    return user;
  }
}

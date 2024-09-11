import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';

@Injectable()
export class TokenGuard implements CanActivate {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const { user } = context.switchToHttp().getRequest();
    const tokenId = user.jti;

    // Verifica si el token ya fue usado
    const tokenWasUsed = await this.cacheManager.get(tokenId);

    if (tokenWasUsed) {
      throw new UnauthorizedException('El link ya venció o fue usado');
    }
    // Marca el token como usado
    await this.cacheManager.set(tokenId, 'used', 600000);

    return true;
  }
}

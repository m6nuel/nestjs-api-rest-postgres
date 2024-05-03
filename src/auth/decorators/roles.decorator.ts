import { SetMetadata } from '@nestjs/common';
import { Role } from '../../common/enum/rol.enum';

export const ROLES_KEY = 'roles';

export const Roles = (role: Role) => SetMetadata(ROLES_KEY, role);

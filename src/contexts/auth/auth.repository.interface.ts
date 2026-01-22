import { UserCredentialsEntity } from "./entities/user_credentials.entities"

export const AUTH_REPOSITORY = Symbol('AUTH_REPOSITORY');

export interface IAuthRepository {
    findCredentialsByEmail(email: string): Promise<UserCredentialsEntity | null>;
    createCredentials(entity: UserCredentialsEntity): Promise<UserCredentialsEntity>;
    checkEmailExists(email: string): Promise<boolean>;
    

}
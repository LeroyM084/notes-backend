import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserCredentialsEntity } from "./entities/user_credentials.entities";
import { Repository } from "typeorm";
import { count } from "console";
import { IAuthRepository } from "./auth.repository.interface";
@Injectable()
export class AuthRepository implements IAuthRepository{
    constructor(
        @InjectRepository(UserCredentialsEntity)
        private readonly credentialsRepository: Repository<UserCredentialsEntity>,
    ) { }

    async findCredentialsByEmail(email: string) : Promise<UserCredentialsEntity | null> {
        const entity = await this.credentialsRepository.findOne({ where: { email } });

        return entity;
    }

    async saveCredentials(entity: UserCredentialsEntity): Promise<UserCredentialsEntity> {
        return this.credentialsRepository.save(entity);
    }

    async deleteCredentials(entity: UserCredentialsEntity): Promise<void> {
        await this.credentialsRepository.remove(entity);
    }

    async updateCredentials(entity: UserCredentialsEntity): Promise<UserCredentialsEntity> {
        return this.credentialsRepository.save(entity);
    }

    async findCredentialsById(id: string): Promise<UserCredentialsEntity | null> {
        const entity = await this.credentialsRepository.findOne({ where: { id } });

        return entity;
    }

    async createCredentials(entity: UserCredentialsEntity): Promise<UserCredentialsEntity> {
        return this.credentialsRepository.save(entity);
    }
    async checkEmailExists(email: string): Promise<boolean> {
        const count = await this.credentialsRepository.count({ where: { email } });
        return count > 0;
    }
}
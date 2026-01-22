import { Module } from "@nestjs/common";
import { ResourceGroupeController } from "./resources.groupe.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { RscGroupeEntity } from "./entities/ressource.groupe.entities";

@Module({
    imports: [TypeOrmModule.forFeature([
        RscGroupeEntity
    ])],
    controllers: [ResourceGroupeController],
    providers: [],
})
export class ResourceModule {}
import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { APP_FILTER } from "@nestjs/core";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DataSource } from "typeorm";
import { CqrsModule } from "@nestjs/cqrs";
import { TypeOrmConfigService } from "./database/typeorm-config.service";
import { LoggingExceptionFilter } from "./filter/error-handling-exception-filter";
import { ApiConfigService } from "./shared/services/api-config.service";
import { SharedModule } from "./shared/shared.module";
import { MediaModule } from "./modules/media/media.module";
import { S3Module } from "modules/s3/s3.module";

@Module({
  imports: [
    CqrsModule,
    SharedModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ".env",
    }),
    TypeOrmModule.forRootAsync({
      imports: [SharedModule],
      useClass: TypeOrmConfigService,
      inject: [ApiConfigService],
      dataSourceFactory: async (options) => {
        if (!options) {
          throw new Error("Invalid options passed");
        }

        return new DataSource(options).initialize();
      },
    }),
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
    MediaModule,
    S3Module,
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: LoggingExceptionFilter,
    },
  ],
})
export class AppModule { }

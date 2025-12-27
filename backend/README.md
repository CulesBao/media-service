# Media Service Backend

NestJS-based backend service for media management with Supabase S3 storage integration.

## Overview

This backend provides:
- **Media Upload API**: Create media records and generate upload URLs
- **Presigned URL Generation**: Secure temporary URLs for media access
- **CQRS Pattern**: Separated command and query handlers
- **Microservices Integration**: RabbitMQ-based event communication
- **Type-safe**: Full TypeScript with class-validator and class-transformer

## Tech Stack

- **Framework**: NestJS 10
- **Database**: PostgreSQL 17 with TypeORM 0.3
- **Architecture**: CQRS (@nestjs/cqrs)
- **Storage**: Supabase (S3-compatible API)
- **Messaging**: RabbitMQ via @nestjs/microservices
- **Documentation**: Swagger/OpenAPI
- **Validation**: class-validator, class-transformer

## Requirements

- Node.js 22+
- PostgreSQL 12+ (or use Docker)
- RabbitMQ (optional, for microservices features)

## Installation

```bash
npm install
```

## Database Migrations

TypeORM migrations are configured to use `src/database/data-source.ts`.

### Generate a migration from entity changes:
```bash
npm run migration-generate -- src/database/migrations/YourMigrationName
```

### Create a blank migration:
```bash
npm run migration-create -- src/database/migrations/YourMigrationName
```

### Run pending migrations:
```bash
npm run migration-run
```

### Revert the last migration:
```bash
npm run migration:revert
```

### Drop database schema (⚠️ destructive):
```bash
npm run schema:drop
```

## API Documentation (Swagger)

Once the application is running, access interactive API docs:

```
http://localhost:4000/api
```

## Docker Support

Build and run with Docker:

```bash
# Build image
docker build -t media-backend -f Dockerfile ..

# Run container
docker run -p 4000:4000 --env-file .env media-backend
```

Or use docker-compose from project root:

```bash
docker compose up -d
```
## License

UNLICENSED


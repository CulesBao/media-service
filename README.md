# Media Service

A microservices-based media management system built with NestJS, featuring media upload, storage integration with Supabase S3, and presigned URL generation.

## Table of Contents
- [Overview](#overview)
- [Architecture](#architecture)
- [Prerequisites](#prerequisites)
- [Quick Start with Docker](#quick-start-with-docker)
- [Database Migrations](#database-migrations)
- [Development](#development)

## Overview

This service provides:
- **Media Upload**: Upload media files to cloud storage
- **Presigned URLs**: Generate secure temporary URLs for file access
- **Storage Integration**: Supabase S3-compatible storage backend
- **Microservices Architecture**: RabbitMQ-based event-driven communication
- **Database**: PostgreSQL with TypeORM for metadata persistence

## Architecture

- **Backend Framework**: NestJS with CQRS pattern
- **Database**: PostgreSQL 17 with TypeORM
- **Message Broker**: RabbitMQ for microservices communication
- **Storage**: Supabase (S3-compatible)
- **Containerization**: Docker & Docker Compose

## Prerequisites

- Docker & Docker Compose
- Node.js 22+ (for local development)
- npm or yarn

## Quick Start with Docker

1. **Clone and setup environment**:
```powershell
cp .env.example .env
# Edit .env with your configuration
```

2. **Start all services**:
```powershell
docker compose up -d
```

This will start:
- `media_backend` - NestJS application (port 4000)
- `media_database` - PostgreSQL database (port 5433)
- External RabbitMQ should be running on port 5672

3. **Check service health**:
```powershell
docker compose ps
docker logs media_backend
```

4. **Access the API**:
- API: http://localhost:4000
- Swagger Docs: http://localhost:4000/api

## Environment Variables

Create a `.env` file in the project root:

## Database Migrations

### Generate a new migration:
```powershell
cd backend
npm run migration-generate -- src/database/migrations/YourMigrationName
```

### Run migrations:
```powershell
npm run migration-run
```

### Revert last migration:
```powershell
npm run migration:revert
```

## Development

### Local development (without Docker):

1. **Install dependencies**:
```powershell
cd backend
npm install
```

2. **Start PostgreSQL and RabbitMQ** (via Docker or locally)

3. **Run migrations**:
```powershell
npm run migration-run
```

4. **Start development server**:
```powershell
npm run start:dev
```

### Project Structure
```
backend/
├── src/
│   ├── modules/
│   │   ├── media/         # Media management module
│   │   │   ├── cqrs/      # Commands & queries
│   │   │   ├── dto/       # Data transfer objects
│   │   │   ├── entities/  # TypeORM entities
│   │   │   └── repository/
│   │   └── s3/            # S3/Supabase integration
│   ├── database/          # TypeORM config & migrations
│   ├── shared/            # Shared services
│   └── main.ts
├── Dockerfile
└── package.json
```

## Contributing

1. Create a feature branch: `git checkout -b feat/your-feature`
2. Make your changes and test thoroughly
3. Commit with conventional commits: `feat:`, `fix:`, `docs:`, etc.
4. Push and create a pull request

## License

UNLICENSED - Private project



import { IQuery } from "@nestjs/cqrs";
import { Uuid } from "common/types";

export class GetMediaByIdsQuery implements IQuery {
  constructor(public readonly ids: Uuid[]) {}
}

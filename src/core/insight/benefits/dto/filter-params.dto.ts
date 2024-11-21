import { Transform } from 'class-transformer';
import { IsBoolean, IsNumber, IsOptional } from 'class-validator';

export class BenefitFilterParamsDto {
  /* @IsOptional()
  @IsBoolean()
  @Transform(({ obj }) => (obj.approvedOnly === 'true' ? true : false))
  approvedOnly?: boolean = false; */

  @IsNumber()
  @IsOptional()
  categoryId?: number;
}

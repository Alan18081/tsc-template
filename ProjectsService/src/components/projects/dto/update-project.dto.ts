import { IsInt, IsOptional, IsString } from 'class-validator';

export class UpdateProjectDto {

  @IsInt()
  id: number;

  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsInt()
  @IsOptional()
  storagesCount: number;

}
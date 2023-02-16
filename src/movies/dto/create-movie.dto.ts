import { IsString, IsNumber, IsOptional } from 'class-validator';

//dto(data transfer object) 데이터 전송 객체
//npm i class-validator class-transformer
export class CreateMovieDto {
  @IsString()
  readonly title: string;
  @IsNumber()
  readonly year: number;
  @IsOptional()
  @IsString({ each: true })
  readonly genres: string[];
}

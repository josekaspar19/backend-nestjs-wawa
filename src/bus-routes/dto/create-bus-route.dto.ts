import { IsBoolean, IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator"

export class CreateBusRouteDto {
    @IsString()
    @MaxLength(50)
    @IsNotEmpty()
    title: string;
  
    @IsString()
    @IsNotEmpty()
    origin: string;
  
    @IsString()
    @IsNotEmpty()
    destination: string;
  
    @IsString()
    @IsNotEmpty()
    departureDate: string;
  
    @IsString()
    @IsNotEmpty()
    departureTime: string;
  
    @IsString()
    @IsNotEmpty()
    arrivalDate: string;
  
    @IsString()
    @IsNotEmpty()
    arrivalTime: string;
  
    @IsString()
    @IsNotEmpty()
    duration: string;
  
    @IsNumber()
    @IsNotEmpty()
    price: number;
  
    @IsBoolean()
    @IsNotEmpty()
    active: boolean;
}

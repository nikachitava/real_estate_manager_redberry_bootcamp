export interface IRegion {
	id: number;
	name: string;
}

export interface ICity {
	id: number;
	name: string;
	region_id: number;
	region: IRegion;
}

export interface IRealEstateCard {
	id: number;
	address: string;
	zip_code: string;
	price: number;
	area: number;
	bedrooms: number;
	is_rental: number;
	image: string;
	city_id: number;
	city: ICity;
}

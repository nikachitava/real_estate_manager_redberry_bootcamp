interface IRegion  {
	id: number;
	name: string;
};

interface ICity  {
	id: number;
	name: string;
	region_id: number;
	region: IRegion;
};

export interface IAgent  {
	id: number;
	name: string;
	surname: string;
	email: string;
	avatar: string;
	phone: string;
};

export interface IListing {
	id: number;
	address: string;
	image: string;
	zip_code: string;
	description: string;
	price: number;
	bedrooms: number;
	area: number;
	is_rental: number;
	agent_id: number;
	city_id: number;
	created_at: string;
	city: ICity;
	agent: IAgent;
}

interface Episode {
	id: number;
	name: string;
	episode: string;
}

export interface Character {
	id: number;
	name: string;
	status: string;
	species: string;
	gender: string;
	image: string;
	episode: Episode[];
}

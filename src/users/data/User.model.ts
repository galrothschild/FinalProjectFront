export type IUser = {
	username: string;
	email: string;
	image: string;
	name: {
		first: string;
		last: string;
		middle?: string;
	};
	age: number;
	_id?: string;
	password?: string;
};

export type TokenPayload = {
	_id: string;
	exp: Date;
	iat: Date;
	isAdmin: boolean;
};

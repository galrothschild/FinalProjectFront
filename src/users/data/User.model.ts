export type IUser = {
	username: string;
	email: string;
	image: string;
	firstName: string;
	lastName: string;
	middleName: string;
	age: number;
	_id: string;
};

export type TokenPayload = {
	_id: string;
	exp: Date;
	iat: Date;
	isAdmin: boolean;
};

export interface IPhone {
    id: number;
    name: string;
    description: string;
    image: string;
    price: number;
}

export interface IPhoneRequest {
    phone: IPhone;
}


interface Address {
      country: string,
      city: string,
      street: string,
      streetNumber: string
}


export interface User {
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    createdAt: string,
    updatedAt: string,
    imageUrl: string,
    address: Address
};
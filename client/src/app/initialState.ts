import { User } from "./user.type"


export const initialState:User = {
    _id: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    createdAt: '',
    updatedAt: '',
    imageUrl: '',
    address: {
    country: '',
      city: '',
      street: '',
      streetNumber: ''
    }
}

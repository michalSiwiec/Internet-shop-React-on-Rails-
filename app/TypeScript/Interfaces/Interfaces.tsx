export interface IReduxState{
    productsReducer: {
        products: [{
            id: number,
            source: string,
            description: string,
            price: number,
            product_type: string,
            quantity_available: number
        }],
        productType: string,
        productsPartVisibility: Array<string>
    },
    basketReducer: {
        products: {
            id: number,
            quantity: number
        },
        wholePrice: number
    },
    adminsReducer: {
        admin: {
            id: number,
            logIn: boolean
        }
    },
    userReducer: {
        user: {
            userID: number,
            logIn: boolean
        }
    }
}

export interface IAdmin{
    login: string,
    password: string,
    name: string,
    surname: string,
    email: string,
    phone_number: string
}

export interface IProvince{
    id: number,
    name: string
}

export interface ICity{
    id: number,
    name: string,
    province_id: number,
    postal_code: string,
    other: boolean
}

export interface IUser{
    dataLogins: {
        admin_id: null,
        id: number,
        login: string,
        password: string,
        user_id: number
    },
    deliveryAddresses: {
        city: string,
        country: string,
        house_number: number,
        id: number,
        order_id: null,
        postal_code: string,
        province: string,
        street: string,
        user_id: number
    },
    personalData: {
        admin_id: null,
        email: string,
        id: number,
        name: string,
        order_id: null,
        phone_number: string,
        surname: string
        user_id: number
    }
}

export interface IOpinion{
    name: string,
    surname: string,
    description: string,
    mark: number,
    dataCreated: string
}

export interface IProduct{
    description: string,
    id: number,
    price: number,
    product_type: string,
    quantity_available: number,
    source: string
}

export interface IFieldForm{
    value: string,
    setted: boolean,
    mistakeInformation: Array<string>
}
export interface IReduxState{
    productsReducer: {
        products: Array<{
            id: number,
            source: string,
            description: string,
            price: number,
            product_type: string,
            quantity_available: number
        }>
        productType: string,
        productsPartsVisibility: Array<string>
    },
    basketReducer: {
        products: Array<{
            id: number,
            quantity: number
        }>
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

export interface IDeliveryAddress{
    city: string,
    country: string,
    house_number: number,
    id?: number,
    order_id?: number | null,
    postal_code: string,
    province: string,
    street: string,
    user_id?: number | null
}

export interface IDataLogin{
    admin_id?: number | null,
    id?: number,
    login: string,
    password: string,
    user_id?: number | null
}

export interface IPersonalData{
    admin_id?: number | null,
    email: string,
    id?: number | null,
    name: string,
    order_id?: number | null,
    phone_number: string,
    surname: string
    user_id?: number | null
}

export interface IOrderDetails{
    product_description: string,
    product_price: number,
    quantity: number
}

// I should use here interfaces DataLogin and DataPerson
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
}

export interface IUser{
    dataLogins: IDataLogin,
    deliveryAddresses: IDeliveryAddress,
    personalData: IPersonalData
}

// Why I don't use hee interface DataPerson if user has opinion?
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

export interface IMonthPrice{
    month: string,
    wholeMonthPrice: number
}

export interface ITheMostCommonProduct{
    label: string,
    quantity: number
}

export interface IOpinionsData{
    percentage: number,
    label: string
}

export interface IMainInfo{
    property_value: number,
    label: string
}

export interface ICommonOrder{
    data_created: string,
    data_person: IPersonalData,
    delivery_address: IDeliveryAddress,
    order_details: Array<IOrderDetails>
    order_price: number
}

export interface IOrderLogOutPerson{
    dataCreated: string,
    dataPerson: IPersonalData,
    deliveryAddress: IDeliveryAddress,
    details: Array<IOrderDetails>,
    orderID: number,
    orderPrice: number
}

export interface IOrderLogInPerson{
    dataCreated: string,
    details: Array<IOrderDetails>,
    orderPrice: number
}


export interface IFieldForm{
    value: string,
    setted: boolean,
    mistakeInformation: Array<string>,
    unmutable?: boolean
}

// I don't need it because I can use IFieldForm instead of this
export interface IFieldFormUnmutable{
    value: string,
    setted: boolean,
    mistakeInformation: Array<string>
    unmutable: boolean
}
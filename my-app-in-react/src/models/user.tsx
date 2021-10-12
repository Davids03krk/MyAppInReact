interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
}

interface Company {
    name: string;
    catchPhrase: string;
}

export interface User {
    id: number;
    name: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
}
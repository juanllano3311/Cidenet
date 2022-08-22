import { Document } from 'mongoose'

export interface MemberInterface extends Document {
    
    readonly firstLastName:string;

    readonly secondtLastName: string;

    readonly firstName: string;

    readonly othersNames: string;

    readonly country: string;

    readonly typeId: string;

    readonly identification: string;

    readonly email: string;

    readonly area: string;

    readonly dateAdd: Date;

    readonly status: boolean;
}
export interface Error {
    code: number;
    message: string;
    errors: [{
        message: string;
        domain: string;
        reason: string;
    }]

}




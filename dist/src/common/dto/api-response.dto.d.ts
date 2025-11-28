export declare class ApiResponse<T = any> {
    success: boolean;
    message?: string;
    data?: T;
    error?: string;
    constructor(success: boolean, data?: T, message?: string, error?: string);
    static ok<T>(data?: T, message?: string): ApiResponse<T>;
    static fail<T>(error: string, message?: string): ApiResponse<T>;
}

export class ApiResponse<T = any> {
    success: boolean;
    message?: string;
    data?: T;
    error?: string;

    constructor(success: boolean, data?: T, message?: string, error?: string) {
        this.success = success;
        this.data = data;
        this.message = message;
        this.error = error;
    }

    static ok<T>(data?: T, message?: string): ApiResponse<T> {
        return new ApiResponse(true, data, message);
    }

    static fail<T>(error: string, message?: string): ApiResponse<T> {
        return new ApiResponse<T>(false, undefined, message, error);
    }
}

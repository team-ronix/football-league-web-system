export declare const Gender: {
    readonly MALE: "MALE";
    readonly FEMALE: "FEMALE";
    readonly OTHER: "OTHER";
};
export type Gender = (typeof Gender)[keyof typeof Gender];
export declare const UserRole: {
    readonly MANAGER: "MANAGER";
    readonly FAN: "FAN";
};
export type UserRole = (typeof UserRole)[keyof typeof UserRole];

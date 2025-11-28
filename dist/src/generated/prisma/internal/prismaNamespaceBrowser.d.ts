import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly Stadium: "Stadium";
    readonly Team: "Team";
    readonly Match: "Match";
    readonly MatchSeat: "MatchSeat";
    readonly User: "User";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const StadiumScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly noOfRows: "noOfRows";
    readonly seatsPerRow: "seatsPerRow";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type StadiumScalarFieldEnum = (typeof StadiumScalarFieldEnum)[keyof typeof StadiumScalarFieldEnum];
export declare const TeamScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type TeamScalarFieldEnum = (typeof TeamScalarFieldEnum)[keyof typeof TeamScalarFieldEnum];
export declare const MatchScalarFieldEnum: {
    readonly id: "id";
    readonly dateTime: "dateTime";
    readonly homeTeamId: "homeTeamId";
    readonly awayTeamId: "awayTeamId";
    readonly stadiumId: "stadiumId";
    readonly mainRefereeName: "mainRefereeName";
    readonly linesmen1Name: "linesmen1Name";
    readonly linesmen2Name: "linesmen2Name";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type MatchScalarFieldEnum = (typeof MatchScalarFieldEnum)[keyof typeof MatchScalarFieldEnum];
export declare const MatchSeatScalarFieldEnum: {
    readonly id: "id";
    readonly seatNumber: "seatNumber";
    readonly userId: "userId";
    readonly matchId: "matchId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type MatchSeatScalarFieldEnum = (typeof MatchSeatScalarFieldEnum)[keyof typeof MatchSeatScalarFieldEnum];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly username: "username";
    readonly password: "password";
    readonly firstName: "firstName";
    readonly lastName: "lastName";
    readonly birthDate: "birthDate";
    readonly gender: "gender";
    readonly city: "city";
    readonly address: "address";
    readonly email: "email";
    readonly role: "role";
    readonly approved: "approved";
    readonly preferredTeamId: "preferredTeamId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

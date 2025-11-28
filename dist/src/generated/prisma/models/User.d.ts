import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type UserModel = runtime.Types.Result.DefaultSelection<Prisma.$UserPayload>;
export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _avg: UserAvgAggregateOutputType | null;
    _sum: UserSumAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type UserAvgAggregateOutputType = {
    id: number | null;
    preferredTeamId: number | null;
};
export type UserSumAggregateOutputType = {
    id: number | null;
    preferredTeamId: number | null;
};
export type UserMinAggregateOutputType = {
    id: number | null;
    username: string | null;
    password: string | null;
    firstName: string | null;
    lastName: string | null;
    birthDate: Date | null;
    gender: $Enums.Gender | null;
    city: string | null;
    address: string | null;
    email: string | null;
    role: $Enums.UserRole | null;
    approved: boolean | null;
    preferredTeamId: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type UserMaxAggregateOutputType = {
    id: number | null;
    username: string | null;
    password: string | null;
    firstName: string | null;
    lastName: string | null;
    birthDate: Date | null;
    gender: $Enums.Gender | null;
    city: string | null;
    address: string | null;
    email: string | null;
    role: $Enums.UserRole | null;
    approved: boolean | null;
    preferredTeamId: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type UserCountAggregateOutputType = {
    id: number;
    username: number;
    password: number;
    firstName: number;
    lastName: number;
    birthDate: number;
    gender: number;
    city: number;
    address: number;
    email: number;
    role: number;
    approved: number;
    preferredTeamId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type UserAvgAggregateInputType = {
    id?: true;
    preferredTeamId?: true;
};
export type UserSumAggregateInputType = {
    id?: true;
    preferredTeamId?: true;
};
export type UserMinAggregateInputType = {
    id?: true;
    username?: true;
    password?: true;
    firstName?: true;
    lastName?: true;
    birthDate?: true;
    gender?: true;
    city?: true;
    address?: true;
    email?: true;
    role?: true;
    approved?: true;
    preferredTeamId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type UserMaxAggregateInputType = {
    id?: true;
    username?: true;
    password?: true;
    firstName?: true;
    lastName?: true;
    birthDate?: true;
    gender?: true;
    city?: true;
    address?: true;
    email?: true;
    role?: true;
    approved?: true;
    preferredTeamId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type UserCountAggregateInputType = {
    id?: true;
    username?: true;
    password?: true;
    firstName?: true;
    lastName?: true;
    birthDate?: true;
    gender?: true;
    city?: true;
    address?: true;
    email?: true;
    role?: true;
    approved?: true;
    preferredTeamId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type UserAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | UserCountAggregateInputType;
    _avg?: UserAvgAggregateInputType;
    _sum?: UserSumAggregateInputType;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUser[P]> : Prisma.GetScalarType<T[P], AggregateUser[P]>;
};
export type UserGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithAggregationInput | Prisma.UserOrderByWithAggregationInput[];
    by: Prisma.UserScalarFieldEnum[] | Prisma.UserScalarFieldEnum;
    having?: Prisma.UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _avg?: UserAvgAggregateInputType;
    _sum?: UserSumAggregateInputType;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type UserGroupByOutputType = {
    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    birthDate: Date;
    gender: $Enums.Gender;
    city: string;
    address: string | null;
    email: string;
    role: $Enums.UserRole;
    approved: boolean;
    preferredTeamId: number | null;
    createdAt: Date;
    updatedAt: Date;
    _count: UserCountAggregateOutputType | null;
    _avg: UserAvgAggregateOutputType | null;
    _sum: UserSumAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UserGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]>;
}>>;
export type UserWhereInput = {
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    id?: Prisma.IntFilter<"User"> | number;
    username?: Prisma.StringFilter<"User"> | string;
    password?: Prisma.StringFilter<"User"> | string;
    firstName?: Prisma.StringFilter<"User"> | string;
    lastName?: Prisma.StringFilter<"User"> | string;
    birthDate?: Prisma.DateTimeFilter<"User"> | Date | string;
    gender?: Prisma.EnumGenderFilter<"User"> | $Enums.Gender;
    city?: Prisma.StringFilter<"User"> | string;
    address?: Prisma.StringNullableFilter<"User"> | string | null;
    email?: Prisma.StringFilter<"User"> | string;
    role?: Prisma.EnumUserRoleFilter<"User"> | $Enums.UserRole;
    approved?: Prisma.BoolFilter<"User"> | boolean;
    preferredTeamId?: Prisma.IntNullableFilter<"User"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    preferredTeam?: Prisma.XOR<Prisma.TeamNullableScalarRelationFilter, Prisma.TeamWhereInput> | null;
    matchSeats?: Prisma.MatchSeatListRelationFilter;
};
export type UserOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    birthDate?: Prisma.SortOrder;
    gender?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    address?: Prisma.SortOrderInput | Prisma.SortOrder;
    email?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    approved?: Prisma.SortOrder;
    preferredTeamId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    preferredTeam?: Prisma.TeamOrderByWithRelationInput;
    matchSeats?: Prisma.MatchSeatOrderByRelationAggregateInput;
};
export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    username?: string;
    email?: string;
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    password?: Prisma.StringFilter<"User"> | string;
    firstName?: Prisma.StringFilter<"User"> | string;
    lastName?: Prisma.StringFilter<"User"> | string;
    birthDate?: Prisma.DateTimeFilter<"User"> | Date | string;
    gender?: Prisma.EnumGenderFilter<"User"> | $Enums.Gender;
    city?: Prisma.StringFilter<"User"> | string;
    address?: Prisma.StringNullableFilter<"User"> | string | null;
    role?: Prisma.EnumUserRoleFilter<"User"> | $Enums.UserRole;
    approved?: Prisma.BoolFilter<"User"> | boolean;
    preferredTeamId?: Prisma.IntNullableFilter<"User"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    preferredTeam?: Prisma.XOR<Prisma.TeamNullableScalarRelationFilter, Prisma.TeamWhereInput> | null;
    matchSeats?: Prisma.MatchSeatListRelationFilter;
}, "id" | "username" | "email">;
export type UserOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    birthDate?: Prisma.SortOrder;
    gender?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    address?: Prisma.SortOrderInput | Prisma.SortOrder;
    email?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    approved?: Prisma.SortOrder;
    preferredTeamId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.UserCountOrderByAggregateInput;
    _avg?: Prisma.UserAvgOrderByAggregateInput;
    _max?: Prisma.UserMaxOrderByAggregateInput;
    _min?: Prisma.UserMinOrderByAggregateInput;
    _sum?: Prisma.UserSumOrderByAggregateInput;
};
export type UserScalarWhereWithAggregatesInput = {
    AND?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    OR?: Prisma.UserScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"User"> | number;
    username?: Prisma.StringWithAggregatesFilter<"User"> | string;
    password?: Prisma.StringWithAggregatesFilter<"User"> | string;
    firstName?: Prisma.StringWithAggregatesFilter<"User"> | string;
    lastName?: Prisma.StringWithAggregatesFilter<"User"> | string;
    birthDate?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
    gender?: Prisma.EnumGenderWithAggregatesFilter<"User"> | $Enums.Gender;
    city?: Prisma.StringWithAggregatesFilter<"User"> | string;
    address?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    email?: Prisma.StringWithAggregatesFilter<"User"> | string;
    role?: Prisma.EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole;
    approved?: Prisma.BoolWithAggregatesFilter<"User"> | boolean;
    preferredTeamId?: Prisma.IntNullableWithAggregatesFilter<"User"> | number | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
};
export type UserCreateInput = {
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    birthDate: Date | string;
    gender: $Enums.Gender;
    city: string;
    address?: string | null;
    email: string;
    role: $Enums.UserRole;
    approved?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    preferredTeam?: Prisma.TeamCreateNestedOneWithoutPreferredByInput;
    matchSeats?: Prisma.MatchSeatCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateInput = {
    id?: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    birthDate: Date | string;
    gender: $Enums.Gender;
    city: string;
    address?: string | null;
    email: string;
    role: $Enums.UserRole;
    approved?: boolean;
    preferredTeamId?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    matchSeats?: Prisma.MatchSeatUncheckedCreateNestedManyWithoutUserInput;
};
export type UserUpdateInput = {
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    birthDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    gender?: Prisma.EnumGenderFieldUpdateOperationsInput | $Enums.Gender;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    approved?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    preferredTeam?: Prisma.TeamUpdateOneWithoutPreferredByNestedInput;
    matchSeats?: Prisma.MatchSeatUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    birthDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    gender?: Prisma.EnumGenderFieldUpdateOperationsInput | $Enums.Gender;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    approved?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    preferredTeamId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    matchSeats?: Prisma.MatchSeatUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateManyInput = {
    id?: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    birthDate: Date | string;
    gender: $Enums.Gender;
    city: string;
    address?: string | null;
    email: string;
    role: $Enums.UserRole;
    approved?: boolean;
    preferredTeamId?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type UserUpdateManyMutationInput = {
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    birthDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    gender?: Prisma.EnumGenderFieldUpdateOperationsInput | $Enums.Gender;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    approved?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    birthDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    gender?: Prisma.EnumGenderFieldUpdateOperationsInput | $Enums.Gender;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    approved?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    preferredTeamId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserListRelationFilter = {
    every?: Prisma.UserWhereInput;
    some?: Prisma.UserWhereInput;
    none?: Prisma.UserWhereInput;
};
export type UserOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type UserScalarRelationFilter = {
    is?: Prisma.UserWhereInput;
    isNot?: Prisma.UserWhereInput;
};
export type UserCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    birthDate?: Prisma.SortOrder;
    gender?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    approved?: Prisma.SortOrder;
    preferredTeamId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    preferredTeamId?: Prisma.SortOrder;
};
export type UserMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    birthDate?: Prisma.SortOrder;
    gender?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    approved?: Prisma.SortOrder;
    preferredTeamId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    birthDate?: Prisma.SortOrder;
    gender?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    approved?: Prisma.SortOrder;
    preferredTeamId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    preferredTeamId?: Prisma.SortOrder;
};
export type UserCreateNestedManyWithoutPreferredTeamInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutPreferredTeamInput, Prisma.UserUncheckedCreateWithoutPreferredTeamInput> | Prisma.UserCreateWithoutPreferredTeamInput[] | Prisma.UserUncheckedCreateWithoutPreferredTeamInput[];
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutPreferredTeamInput | Prisma.UserCreateOrConnectWithoutPreferredTeamInput[];
    createMany?: Prisma.UserCreateManyPreferredTeamInputEnvelope;
    connect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
};
export type UserUncheckedCreateNestedManyWithoutPreferredTeamInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutPreferredTeamInput, Prisma.UserUncheckedCreateWithoutPreferredTeamInput> | Prisma.UserCreateWithoutPreferredTeamInput[] | Prisma.UserUncheckedCreateWithoutPreferredTeamInput[];
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutPreferredTeamInput | Prisma.UserCreateOrConnectWithoutPreferredTeamInput[];
    createMany?: Prisma.UserCreateManyPreferredTeamInputEnvelope;
    connect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
};
export type UserUpdateManyWithoutPreferredTeamNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutPreferredTeamInput, Prisma.UserUncheckedCreateWithoutPreferredTeamInput> | Prisma.UserCreateWithoutPreferredTeamInput[] | Prisma.UserUncheckedCreateWithoutPreferredTeamInput[];
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutPreferredTeamInput | Prisma.UserCreateOrConnectWithoutPreferredTeamInput[];
    upsert?: Prisma.UserUpsertWithWhereUniqueWithoutPreferredTeamInput | Prisma.UserUpsertWithWhereUniqueWithoutPreferredTeamInput[];
    createMany?: Prisma.UserCreateManyPreferredTeamInputEnvelope;
    set?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    disconnect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    delete?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    connect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    update?: Prisma.UserUpdateWithWhereUniqueWithoutPreferredTeamInput | Prisma.UserUpdateWithWhereUniqueWithoutPreferredTeamInput[];
    updateMany?: Prisma.UserUpdateManyWithWhereWithoutPreferredTeamInput | Prisma.UserUpdateManyWithWhereWithoutPreferredTeamInput[];
    deleteMany?: Prisma.UserScalarWhereInput | Prisma.UserScalarWhereInput[];
};
export type UserUncheckedUpdateManyWithoutPreferredTeamNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutPreferredTeamInput, Prisma.UserUncheckedCreateWithoutPreferredTeamInput> | Prisma.UserCreateWithoutPreferredTeamInput[] | Prisma.UserUncheckedCreateWithoutPreferredTeamInput[];
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutPreferredTeamInput | Prisma.UserCreateOrConnectWithoutPreferredTeamInput[];
    upsert?: Prisma.UserUpsertWithWhereUniqueWithoutPreferredTeamInput | Prisma.UserUpsertWithWhereUniqueWithoutPreferredTeamInput[];
    createMany?: Prisma.UserCreateManyPreferredTeamInputEnvelope;
    set?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    disconnect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    delete?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    connect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    update?: Prisma.UserUpdateWithWhereUniqueWithoutPreferredTeamInput | Prisma.UserUpdateWithWhereUniqueWithoutPreferredTeamInput[];
    updateMany?: Prisma.UserUpdateManyWithWhereWithoutPreferredTeamInput | Prisma.UserUpdateManyWithWhereWithoutPreferredTeamInput[];
    deleteMany?: Prisma.UserScalarWhereInput | Prisma.UserScalarWhereInput[];
};
export type UserCreateNestedOneWithoutMatchSeatsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutMatchSeatsInput, Prisma.UserUncheckedCreateWithoutMatchSeatsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutMatchSeatsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutMatchSeatsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutMatchSeatsInput, Prisma.UserUncheckedCreateWithoutMatchSeatsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutMatchSeatsInput;
    upsert?: Prisma.UserUpsertWithoutMatchSeatsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutMatchSeatsInput, Prisma.UserUpdateWithoutMatchSeatsInput>, Prisma.UserUncheckedUpdateWithoutMatchSeatsInput>;
};
export type EnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type UserCreateWithoutPreferredTeamInput = {
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    birthDate: Date | string;
    gender: $Enums.Gender;
    city: string;
    address?: string | null;
    email: string;
    role: $Enums.UserRole;
    approved?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    matchSeats?: Prisma.MatchSeatCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutPreferredTeamInput = {
    id?: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    birthDate: Date | string;
    gender: $Enums.Gender;
    city: string;
    address?: string | null;
    email: string;
    role: $Enums.UserRole;
    approved?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    matchSeats?: Prisma.MatchSeatUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutPreferredTeamInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutPreferredTeamInput, Prisma.UserUncheckedCreateWithoutPreferredTeamInput>;
};
export type UserCreateManyPreferredTeamInputEnvelope = {
    data: Prisma.UserCreateManyPreferredTeamInput | Prisma.UserCreateManyPreferredTeamInput[];
    skipDuplicates?: boolean;
};
export type UserUpsertWithWhereUniqueWithoutPreferredTeamInput = {
    where: Prisma.UserWhereUniqueInput;
    update: Prisma.XOR<Prisma.UserUpdateWithoutPreferredTeamInput, Prisma.UserUncheckedUpdateWithoutPreferredTeamInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutPreferredTeamInput, Prisma.UserUncheckedCreateWithoutPreferredTeamInput>;
};
export type UserUpdateWithWhereUniqueWithoutPreferredTeamInput = {
    where: Prisma.UserWhereUniqueInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutPreferredTeamInput, Prisma.UserUncheckedUpdateWithoutPreferredTeamInput>;
};
export type UserUpdateManyWithWhereWithoutPreferredTeamInput = {
    where: Prisma.UserScalarWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyWithoutPreferredTeamInput>;
};
export type UserScalarWhereInput = {
    AND?: Prisma.UserScalarWhereInput | Prisma.UserScalarWhereInput[];
    OR?: Prisma.UserScalarWhereInput[];
    NOT?: Prisma.UserScalarWhereInput | Prisma.UserScalarWhereInput[];
    id?: Prisma.IntFilter<"User"> | number;
    username?: Prisma.StringFilter<"User"> | string;
    password?: Prisma.StringFilter<"User"> | string;
    firstName?: Prisma.StringFilter<"User"> | string;
    lastName?: Prisma.StringFilter<"User"> | string;
    birthDate?: Prisma.DateTimeFilter<"User"> | Date | string;
    gender?: Prisma.EnumGenderFilter<"User"> | $Enums.Gender;
    city?: Prisma.StringFilter<"User"> | string;
    address?: Prisma.StringNullableFilter<"User"> | string | null;
    email?: Prisma.StringFilter<"User"> | string;
    role?: Prisma.EnumUserRoleFilter<"User"> | $Enums.UserRole;
    approved?: Prisma.BoolFilter<"User"> | boolean;
    preferredTeamId?: Prisma.IntNullableFilter<"User"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"User"> | Date | string;
};
export type UserCreateWithoutMatchSeatsInput = {
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    birthDate: Date | string;
    gender: $Enums.Gender;
    city: string;
    address?: string | null;
    email: string;
    role: $Enums.UserRole;
    approved?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    preferredTeam?: Prisma.TeamCreateNestedOneWithoutPreferredByInput;
};
export type UserUncheckedCreateWithoutMatchSeatsInput = {
    id?: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    birthDate: Date | string;
    gender: $Enums.Gender;
    city: string;
    address?: string | null;
    email: string;
    role: $Enums.UserRole;
    approved?: boolean;
    preferredTeamId?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type UserCreateOrConnectWithoutMatchSeatsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutMatchSeatsInput, Prisma.UserUncheckedCreateWithoutMatchSeatsInput>;
};
export type UserUpsertWithoutMatchSeatsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutMatchSeatsInput, Prisma.UserUncheckedUpdateWithoutMatchSeatsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutMatchSeatsInput, Prisma.UserUncheckedCreateWithoutMatchSeatsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutMatchSeatsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutMatchSeatsInput, Prisma.UserUncheckedUpdateWithoutMatchSeatsInput>;
};
export type UserUpdateWithoutMatchSeatsInput = {
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    birthDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    gender?: Prisma.EnumGenderFieldUpdateOperationsInput | $Enums.Gender;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    approved?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    preferredTeam?: Prisma.TeamUpdateOneWithoutPreferredByNestedInput;
};
export type UserUncheckedUpdateWithoutMatchSeatsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    birthDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    gender?: Prisma.EnumGenderFieldUpdateOperationsInput | $Enums.Gender;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    approved?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    preferredTeamId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserCreateManyPreferredTeamInput = {
    id?: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    birthDate: Date | string;
    gender: $Enums.Gender;
    city: string;
    address?: string | null;
    email: string;
    role: $Enums.UserRole;
    approved?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type UserUpdateWithoutPreferredTeamInput = {
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    birthDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    gender?: Prisma.EnumGenderFieldUpdateOperationsInput | $Enums.Gender;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    approved?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    matchSeats?: Prisma.MatchSeatUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutPreferredTeamInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    birthDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    gender?: Prisma.EnumGenderFieldUpdateOperationsInput | $Enums.Gender;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    approved?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    matchSeats?: Prisma.MatchSeatUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateManyWithoutPreferredTeamInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    birthDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    gender?: Prisma.EnumGenderFieldUpdateOperationsInput | $Enums.Gender;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    approved?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserCountOutputType = {
    matchSeats: number;
};
export type UserCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    matchSeats?: boolean | UserCountOutputTypeCountMatchSeatsArgs;
};
export type UserCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserCountOutputTypeSelect<ExtArgs> | null;
};
export type UserCountOutputTypeCountMatchSeatsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MatchSeatWhereInput;
};
export type UserSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    username?: boolean;
    password?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    birthDate?: boolean;
    gender?: boolean;
    city?: boolean;
    address?: boolean;
    email?: boolean;
    role?: boolean;
    approved?: boolean;
    preferredTeamId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    preferredTeam?: boolean | Prisma.User$preferredTeamArgs<ExtArgs>;
    matchSeats?: boolean | Prisma.User$matchSeatsArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["user"]>;
export type UserSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    username?: boolean;
    password?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    birthDate?: boolean;
    gender?: boolean;
    city?: boolean;
    address?: boolean;
    email?: boolean;
    role?: boolean;
    approved?: boolean;
    preferredTeamId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    preferredTeam?: boolean | Prisma.User$preferredTeamArgs<ExtArgs>;
}, ExtArgs["result"]["user"]>;
export type UserSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    username?: boolean;
    password?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    birthDate?: boolean;
    gender?: boolean;
    city?: boolean;
    address?: boolean;
    email?: boolean;
    role?: boolean;
    approved?: boolean;
    preferredTeamId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    preferredTeam?: boolean | Prisma.User$preferredTeamArgs<ExtArgs>;
}, ExtArgs["result"]["user"]>;
export type UserSelectScalar = {
    id?: boolean;
    username?: boolean;
    password?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    birthDate?: boolean;
    gender?: boolean;
    city?: boolean;
    address?: boolean;
    email?: boolean;
    role?: boolean;
    approved?: boolean;
    preferredTeamId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type UserOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "username" | "password" | "firstName" | "lastName" | "birthDate" | "gender" | "city" | "address" | "email" | "role" | "approved" | "preferredTeamId" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>;
export type UserInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    preferredTeam?: boolean | Prisma.User$preferredTeamArgs<ExtArgs>;
    matchSeats?: boolean | Prisma.User$matchSeatsArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
};
export type UserIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    preferredTeam?: boolean | Prisma.User$preferredTeamArgs<ExtArgs>;
};
export type UserIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    preferredTeam?: boolean | Prisma.User$preferredTeamArgs<ExtArgs>;
};
export type $UserPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "User";
    objects: {
        preferredTeam: Prisma.$TeamPayload<ExtArgs> | null;
        matchSeats: Prisma.$MatchSeatPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        username: string;
        password: string;
        firstName: string;
        lastName: string;
        birthDate: Date;
        gender: $Enums.Gender;
        city: string;
        address: string | null;
        email: string;
        role: $Enums.UserRole;
        approved: boolean;
        preferredTeamId: number | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["user"]>;
    composites: {};
};
export type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UserPayload, S>;
export type UserCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserCountAggregateInputType | true;
};
export interface UserDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['User'];
        meta: {
            name: 'User';
        };
    };
    findUnique<T extends UserFindUniqueArgs>(args: Prisma.SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends UserFindFirstArgs>(args?: Prisma.SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends UserFindManyArgs>(args?: Prisma.SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends UserCreateArgs>(args: Prisma.SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends UserCreateManyArgs>(args?: Prisma.SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends UserDeleteArgs>(args: Prisma.SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends UserUpdateArgs>(args: Prisma.SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends UserDeleteManyArgs>(args?: Prisma.SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends UserUpdateManyArgs>(args: Prisma.SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends UserUpsertArgs>(args: Prisma.SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends UserCountArgs>(args?: Prisma.Subset<T, UserCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UserCountAggregateOutputType> : number>;
    aggregate<T extends UserAggregateArgs>(args: Prisma.Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>;
    groupBy<T extends UserGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UserGroupByArgs['orderBy'];
    } : {
        orderBy?: UserGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: UserFieldRefs;
}
export interface Prisma__UserClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    preferredTeam<T extends Prisma.User$preferredTeamArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$preferredTeamArgs<ExtArgs>>): Prisma.Prisma__TeamClient<runtime.Types.Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    matchSeats<T extends Prisma.User$matchSeatsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$matchSeatsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MatchSeatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface UserFieldRefs {
    readonly id: Prisma.FieldRef<"User", 'Int'>;
    readonly username: Prisma.FieldRef<"User", 'String'>;
    readonly password: Prisma.FieldRef<"User", 'String'>;
    readonly firstName: Prisma.FieldRef<"User", 'String'>;
    readonly lastName: Prisma.FieldRef<"User", 'String'>;
    readonly birthDate: Prisma.FieldRef<"User", 'DateTime'>;
    readonly gender: Prisma.FieldRef<"User", 'Gender'>;
    readonly city: Prisma.FieldRef<"User", 'String'>;
    readonly address: Prisma.FieldRef<"User", 'String'>;
    readonly email: Prisma.FieldRef<"User", 'String'>;
    readonly role: Prisma.FieldRef<"User", 'UserRole'>;
    readonly approved: Prisma.FieldRef<"User", 'Boolean'>;
    readonly preferredTeamId: Prisma.FieldRef<"User", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"User", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"User", 'DateTime'>;
}
export type UserFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
};
export type UserCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UserCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.UserIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type UserUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
    where: Prisma.UserWhereUniqueInput;
};
export type UserUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type UserUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    where?: Prisma.UserWhereInput;
    limit?: number;
    include?: Prisma.UserIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type UserUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
};
export type UserDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type User$preferredTeamArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TeamSelect<ExtArgs> | null;
    omit?: Prisma.TeamOmit<ExtArgs> | null;
    include?: Prisma.TeamInclude<ExtArgs> | null;
    where?: Prisma.TeamWhereInput;
};
export type User$matchSeatsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MatchSeatSelect<ExtArgs> | null;
    omit?: Prisma.MatchSeatOmit<ExtArgs> | null;
    include?: Prisma.MatchSeatInclude<ExtArgs> | null;
    where?: Prisma.MatchSeatWhereInput;
    orderBy?: Prisma.MatchSeatOrderByWithRelationInput | Prisma.MatchSeatOrderByWithRelationInput[];
    cursor?: Prisma.MatchSeatWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MatchSeatScalarFieldEnum | Prisma.MatchSeatScalarFieldEnum[];
};
export type UserDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
};
export {};

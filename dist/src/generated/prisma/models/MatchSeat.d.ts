import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type MatchSeatModel = runtime.Types.Result.DefaultSelection<Prisma.$MatchSeatPayload>;
export type AggregateMatchSeat = {
    _count: MatchSeatCountAggregateOutputType | null;
    _avg: MatchSeatAvgAggregateOutputType | null;
    _sum: MatchSeatSumAggregateOutputType | null;
    _min: MatchSeatMinAggregateOutputType | null;
    _max: MatchSeatMaxAggregateOutputType | null;
};
export type MatchSeatAvgAggregateOutputType = {
    id: number | null;
    seatNumber: number | null;
    userId: number | null;
    matchId: number | null;
};
export type MatchSeatSumAggregateOutputType = {
    id: number | null;
    seatNumber: number | null;
    userId: number | null;
    matchId: number | null;
};
export type MatchSeatMinAggregateOutputType = {
    id: number | null;
    seatNumber: number | null;
    userId: number | null;
    matchId: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type MatchSeatMaxAggregateOutputType = {
    id: number | null;
    seatNumber: number | null;
    userId: number | null;
    matchId: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type MatchSeatCountAggregateOutputType = {
    id: number;
    seatNumber: number;
    userId: number;
    matchId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type MatchSeatAvgAggregateInputType = {
    id?: true;
    seatNumber?: true;
    userId?: true;
    matchId?: true;
};
export type MatchSeatSumAggregateInputType = {
    id?: true;
    seatNumber?: true;
    userId?: true;
    matchId?: true;
};
export type MatchSeatMinAggregateInputType = {
    id?: true;
    seatNumber?: true;
    userId?: true;
    matchId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type MatchSeatMaxAggregateInputType = {
    id?: true;
    seatNumber?: true;
    userId?: true;
    matchId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type MatchSeatCountAggregateInputType = {
    id?: true;
    seatNumber?: true;
    userId?: true;
    matchId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type MatchSeatAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MatchSeatWhereInput;
    orderBy?: Prisma.MatchSeatOrderByWithRelationInput | Prisma.MatchSeatOrderByWithRelationInput[];
    cursor?: Prisma.MatchSeatWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | MatchSeatCountAggregateInputType;
    _avg?: MatchSeatAvgAggregateInputType;
    _sum?: MatchSeatSumAggregateInputType;
    _min?: MatchSeatMinAggregateInputType;
    _max?: MatchSeatMaxAggregateInputType;
};
export type GetMatchSeatAggregateType<T extends MatchSeatAggregateArgs> = {
    [P in keyof T & keyof AggregateMatchSeat]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMatchSeat[P]> : Prisma.GetScalarType<T[P], AggregateMatchSeat[P]>;
};
export type MatchSeatGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MatchSeatWhereInput;
    orderBy?: Prisma.MatchSeatOrderByWithAggregationInput | Prisma.MatchSeatOrderByWithAggregationInput[];
    by: Prisma.MatchSeatScalarFieldEnum[] | Prisma.MatchSeatScalarFieldEnum;
    having?: Prisma.MatchSeatScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MatchSeatCountAggregateInputType | true;
    _avg?: MatchSeatAvgAggregateInputType;
    _sum?: MatchSeatSumAggregateInputType;
    _min?: MatchSeatMinAggregateInputType;
    _max?: MatchSeatMaxAggregateInputType;
};
export type MatchSeatGroupByOutputType = {
    id: number;
    seatNumber: number;
    userId: number;
    matchId: number;
    createdAt: Date;
    updatedAt: Date;
    _count: MatchSeatCountAggregateOutputType | null;
    _avg: MatchSeatAvgAggregateOutputType | null;
    _sum: MatchSeatSumAggregateOutputType | null;
    _min: MatchSeatMinAggregateOutputType | null;
    _max: MatchSeatMaxAggregateOutputType | null;
};
type GetMatchSeatGroupByPayload<T extends MatchSeatGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MatchSeatGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MatchSeatGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MatchSeatGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MatchSeatGroupByOutputType[P]>;
}>>;
export type MatchSeatWhereInput = {
    AND?: Prisma.MatchSeatWhereInput | Prisma.MatchSeatWhereInput[];
    OR?: Prisma.MatchSeatWhereInput[];
    NOT?: Prisma.MatchSeatWhereInput | Prisma.MatchSeatWhereInput[];
    id?: Prisma.IntFilter<"MatchSeat"> | number;
    seatNumber?: Prisma.IntFilter<"MatchSeat"> | number;
    userId?: Prisma.IntFilter<"MatchSeat"> | number;
    matchId?: Prisma.IntFilter<"MatchSeat"> | number;
    createdAt?: Prisma.DateTimeFilter<"MatchSeat"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"MatchSeat"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    match?: Prisma.XOR<Prisma.MatchScalarRelationFilter, Prisma.MatchWhereInput>;
};
export type MatchSeatOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    seatNumber?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    matchId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    match?: Prisma.MatchOrderByWithRelationInput;
};
export type MatchSeatWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    matchId_seatNumber?: Prisma.MatchSeatMatchIdSeatNumberCompoundUniqueInput;
    AND?: Prisma.MatchSeatWhereInput | Prisma.MatchSeatWhereInput[];
    OR?: Prisma.MatchSeatWhereInput[];
    NOT?: Prisma.MatchSeatWhereInput | Prisma.MatchSeatWhereInput[];
    seatNumber?: Prisma.IntFilter<"MatchSeat"> | number;
    userId?: Prisma.IntFilter<"MatchSeat"> | number;
    matchId?: Prisma.IntFilter<"MatchSeat"> | number;
    createdAt?: Prisma.DateTimeFilter<"MatchSeat"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"MatchSeat"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    match?: Prisma.XOR<Prisma.MatchScalarRelationFilter, Prisma.MatchWhereInput>;
}, "id" | "matchId_seatNumber">;
export type MatchSeatOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    seatNumber?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    matchId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.MatchSeatCountOrderByAggregateInput;
    _avg?: Prisma.MatchSeatAvgOrderByAggregateInput;
    _max?: Prisma.MatchSeatMaxOrderByAggregateInput;
    _min?: Prisma.MatchSeatMinOrderByAggregateInput;
    _sum?: Prisma.MatchSeatSumOrderByAggregateInput;
};
export type MatchSeatScalarWhereWithAggregatesInput = {
    AND?: Prisma.MatchSeatScalarWhereWithAggregatesInput | Prisma.MatchSeatScalarWhereWithAggregatesInput[];
    OR?: Prisma.MatchSeatScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MatchSeatScalarWhereWithAggregatesInput | Prisma.MatchSeatScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"MatchSeat"> | number;
    seatNumber?: Prisma.IntWithAggregatesFilter<"MatchSeat"> | number;
    userId?: Prisma.IntWithAggregatesFilter<"MatchSeat"> | number;
    matchId?: Prisma.IntWithAggregatesFilter<"MatchSeat"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"MatchSeat"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"MatchSeat"> | Date | string;
};
export type MatchSeatCreateInput = {
    seatNumber: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutMatchSeatsInput;
    match: Prisma.MatchCreateNestedOneWithoutMatchSeatsInput;
};
export type MatchSeatUncheckedCreateInput = {
    id?: number;
    seatNumber: number;
    userId: number;
    matchId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MatchSeatUpdateInput = {
    seatNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutMatchSeatsNestedInput;
    match?: Prisma.MatchUpdateOneRequiredWithoutMatchSeatsNestedInput;
};
export type MatchSeatUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    seatNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    matchId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MatchSeatCreateManyInput = {
    id?: number;
    seatNumber: number;
    userId: number;
    matchId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MatchSeatUpdateManyMutationInput = {
    seatNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MatchSeatUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    seatNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    matchId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MatchSeatListRelationFilter = {
    every?: Prisma.MatchSeatWhereInput;
    some?: Prisma.MatchSeatWhereInput;
    none?: Prisma.MatchSeatWhereInput;
};
export type MatchSeatOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type MatchSeatMatchIdSeatNumberCompoundUniqueInput = {
    matchId: number;
    seatNumber: number;
};
export type MatchSeatCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    seatNumber?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    matchId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MatchSeatAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    seatNumber?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    matchId?: Prisma.SortOrder;
};
export type MatchSeatMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    seatNumber?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    matchId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MatchSeatMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    seatNumber?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    matchId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MatchSeatSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    seatNumber?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    matchId?: Prisma.SortOrder;
};
export type MatchSeatCreateNestedManyWithoutMatchInput = {
    create?: Prisma.XOR<Prisma.MatchSeatCreateWithoutMatchInput, Prisma.MatchSeatUncheckedCreateWithoutMatchInput> | Prisma.MatchSeatCreateWithoutMatchInput[] | Prisma.MatchSeatUncheckedCreateWithoutMatchInput[];
    connectOrCreate?: Prisma.MatchSeatCreateOrConnectWithoutMatchInput | Prisma.MatchSeatCreateOrConnectWithoutMatchInput[];
    createMany?: Prisma.MatchSeatCreateManyMatchInputEnvelope;
    connect?: Prisma.MatchSeatWhereUniqueInput | Prisma.MatchSeatWhereUniqueInput[];
};
export type MatchSeatUncheckedCreateNestedManyWithoutMatchInput = {
    create?: Prisma.XOR<Prisma.MatchSeatCreateWithoutMatchInput, Prisma.MatchSeatUncheckedCreateWithoutMatchInput> | Prisma.MatchSeatCreateWithoutMatchInput[] | Prisma.MatchSeatUncheckedCreateWithoutMatchInput[];
    connectOrCreate?: Prisma.MatchSeatCreateOrConnectWithoutMatchInput | Prisma.MatchSeatCreateOrConnectWithoutMatchInput[];
    createMany?: Prisma.MatchSeatCreateManyMatchInputEnvelope;
    connect?: Prisma.MatchSeatWhereUniqueInput | Prisma.MatchSeatWhereUniqueInput[];
};
export type MatchSeatUpdateManyWithoutMatchNestedInput = {
    create?: Prisma.XOR<Prisma.MatchSeatCreateWithoutMatchInput, Prisma.MatchSeatUncheckedCreateWithoutMatchInput> | Prisma.MatchSeatCreateWithoutMatchInput[] | Prisma.MatchSeatUncheckedCreateWithoutMatchInput[];
    connectOrCreate?: Prisma.MatchSeatCreateOrConnectWithoutMatchInput | Prisma.MatchSeatCreateOrConnectWithoutMatchInput[];
    upsert?: Prisma.MatchSeatUpsertWithWhereUniqueWithoutMatchInput | Prisma.MatchSeatUpsertWithWhereUniqueWithoutMatchInput[];
    createMany?: Prisma.MatchSeatCreateManyMatchInputEnvelope;
    set?: Prisma.MatchSeatWhereUniqueInput | Prisma.MatchSeatWhereUniqueInput[];
    disconnect?: Prisma.MatchSeatWhereUniqueInput | Prisma.MatchSeatWhereUniqueInput[];
    delete?: Prisma.MatchSeatWhereUniqueInput | Prisma.MatchSeatWhereUniqueInput[];
    connect?: Prisma.MatchSeatWhereUniqueInput | Prisma.MatchSeatWhereUniqueInput[];
    update?: Prisma.MatchSeatUpdateWithWhereUniqueWithoutMatchInput | Prisma.MatchSeatUpdateWithWhereUniqueWithoutMatchInput[];
    updateMany?: Prisma.MatchSeatUpdateManyWithWhereWithoutMatchInput | Prisma.MatchSeatUpdateManyWithWhereWithoutMatchInput[];
    deleteMany?: Prisma.MatchSeatScalarWhereInput | Prisma.MatchSeatScalarWhereInput[];
};
export type MatchSeatUncheckedUpdateManyWithoutMatchNestedInput = {
    create?: Prisma.XOR<Prisma.MatchSeatCreateWithoutMatchInput, Prisma.MatchSeatUncheckedCreateWithoutMatchInput> | Prisma.MatchSeatCreateWithoutMatchInput[] | Prisma.MatchSeatUncheckedCreateWithoutMatchInput[];
    connectOrCreate?: Prisma.MatchSeatCreateOrConnectWithoutMatchInput | Prisma.MatchSeatCreateOrConnectWithoutMatchInput[];
    upsert?: Prisma.MatchSeatUpsertWithWhereUniqueWithoutMatchInput | Prisma.MatchSeatUpsertWithWhereUniqueWithoutMatchInput[];
    createMany?: Prisma.MatchSeatCreateManyMatchInputEnvelope;
    set?: Prisma.MatchSeatWhereUniqueInput | Prisma.MatchSeatWhereUniqueInput[];
    disconnect?: Prisma.MatchSeatWhereUniqueInput | Prisma.MatchSeatWhereUniqueInput[];
    delete?: Prisma.MatchSeatWhereUniqueInput | Prisma.MatchSeatWhereUniqueInput[];
    connect?: Prisma.MatchSeatWhereUniqueInput | Prisma.MatchSeatWhereUniqueInput[];
    update?: Prisma.MatchSeatUpdateWithWhereUniqueWithoutMatchInput | Prisma.MatchSeatUpdateWithWhereUniqueWithoutMatchInput[];
    updateMany?: Prisma.MatchSeatUpdateManyWithWhereWithoutMatchInput | Prisma.MatchSeatUpdateManyWithWhereWithoutMatchInput[];
    deleteMany?: Prisma.MatchSeatScalarWhereInput | Prisma.MatchSeatScalarWhereInput[];
};
export type MatchSeatCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.MatchSeatCreateWithoutUserInput, Prisma.MatchSeatUncheckedCreateWithoutUserInput> | Prisma.MatchSeatCreateWithoutUserInput[] | Prisma.MatchSeatUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.MatchSeatCreateOrConnectWithoutUserInput | Prisma.MatchSeatCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.MatchSeatCreateManyUserInputEnvelope;
    connect?: Prisma.MatchSeatWhereUniqueInput | Prisma.MatchSeatWhereUniqueInput[];
};
export type MatchSeatUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.MatchSeatCreateWithoutUserInput, Prisma.MatchSeatUncheckedCreateWithoutUserInput> | Prisma.MatchSeatCreateWithoutUserInput[] | Prisma.MatchSeatUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.MatchSeatCreateOrConnectWithoutUserInput | Prisma.MatchSeatCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.MatchSeatCreateManyUserInputEnvelope;
    connect?: Prisma.MatchSeatWhereUniqueInput | Prisma.MatchSeatWhereUniqueInput[];
};
export type MatchSeatUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.MatchSeatCreateWithoutUserInput, Prisma.MatchSeatUncheckedCreateWithoutUserInput> | Prisma.MatchSeatCreateWithoutUserInput[] | Prisma.MatchSeatUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.MatchSeatCreateOrConnectWithoutUserInput | Prisma.MatchSeatCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.MatchSeatUpsertWithWhereUniqueWithoutUserInput | Prisma.MatchSeatUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.MatchSeatCreateManyUserInputEnvelope;
    set?: Prisma.MatchSeatWhereUniqueInput | Prisma.MatchSeatWhereUniqueInput[];
    disconnect?: Prisma.MatchSeatWhereUniqueInput | Prisma.MatchSeatWhereUniqueInput[];
    delete?: Prisma.MatchSeatWhereUniqueInput | Prisma.MatchSeatWhereUniqueInput[];
    connect?: Prisma.MatchSeatWhereUniqueInput | Prisma.MatchSeatWhereUniqueInput[];
    update?: Prisma.MatchSeatUpdateWithWhereUniqueWithoutUserInput | Prisma.MatchSeatUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.MatchSeatUpdateManyWithWhereWithoutUserInput | Prisma.MatchSeatUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.MatchSeatScalarWhereInput | Prisma.MatchSeatScalarWhereInput[];
};
export type MatchSeatUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.MatchSeatCreateWithoutUserInput, Prisma.MatchSeatUncheckedCreateWithoutUserInput> | Prisma.MatchSeatCreateWithoutUserInput[] | Prisma.MatchSeatUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.MatchSeatCreateOrConnectWithoutUserInput | Prisma.MatchSeatCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.MatchSeatUpsertWithWhereUniqueWithoutUserInput | Prisma.MatchSeatUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.MatchSeatCreateManyUserInputEnvelope;
    set?: Prisma.MatchSeatWhereUniqueInput | Prisma.MatchSeatWhereUniqueInput[];
    disconnect?: Prisma.MatchSeatWhereUniqueInput | Prisma.MatchSeatWhereUniqueInput[];
    delete?: Prisma.MatchSeatWhereUniqueInput | Prisma.MatchSeatWhereUniqueInput[];
    connect?: Prisma.MatchSeatWhereUniqueInput | Prisma.MatchSeatWhereUniqueInput[];
    update?: Prisma.MatchSeatUpdateWithWhereUniqueWithoutUserInput | Prisma.MatchSeatUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.MatchSeatUpdateManyWithWhereWithoutUserInput | Prisma.MatchSeatUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.MatchSeatScalarWhereInput | Prisma.MatchSeatScalarWhereInput[];
};
export type MatchSeatCreateWithoutMatchInput = {
    seatNumber: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutMatchSeatsInput;
};
export type MatchSeatUncheckedCreateWithoutMatchInput = {
    id?: number;
    seatNumber: number;
    userId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MatchSeatCreateOrConnectWithoutMatchInput = {
    where: Prisma.MatchSeatWhereUniqueInput;
    create: Prisma.XOR<Prisma.MatchSeatCreateWithoutMatchInput, Prisma.MatchSeatUncheckedCreateWithoutMatchInput>;
};
export type MatchSeatCreateManyMatchInputEnvelope = {
    data: Prisma.MatchSeatCreateManyMatchInput | Prisma.MatchSeatCreateManyMatchInput[];
    skipDuplicates?: boolean;
};
export type MatchSeatUpsertWithWhereUniqueWithoutMatchInput = {
    where: Prisma.MatchSeatWhereUniqueInput;
    update: Prisma.XOR<Prisma.MatchSeatUpdateWithoutMatchInput, Prisma.MatchSeatUncheckedUpdateWithoutMatchInput>;
    create: Prisma.XOR<Prisma.MatchSeatCreateWithoutMatchInput, Prisma.MatchSeatUncheckedCreateWithoutMatchInput>;
};
export type MatchSeatUpdateWithWhereUniqueWithoutMatchInput = {
    where: Prisma.MatchSeatWhereUniqueInput;
    data: Prisma.XOR<Prisma.MatchSeatUpdateWithoutMatchInput, Prisma.MatchSeatUncheckedUpdateWithoutMatchInput>;
};
export type MatchSeatUpdateManyWithWhereWithoutMatchInput = {
    where: Prisma.MatchSeatScalarWhereInput;
    data: Prisma.XOR<Prisma.MatchSeatUpdateManyMutationInput, Prisma.MatchSeatUncheckedUpdateManyWithoutMatchInput>;
};
export type MatchSeatScalarWhereInput = {
    AND?: Prisma.MatchSeatScalarWhereInput | Prisma.MatchSeatScalarWhereInput[];
    OR?: Prisma.MatchSeatScalarWhereInput[];
    NOT?: Prisma.MatchSeatScalarWhereInput | Prisma.MatchSeatScalarWhereInput[];
    id?: Prisma.IntFilter<"MatchSeat"> | number;
    seatNumber?: Prisma.IntFilter<"MatchSeat"> | number;
    userId?: Prisma.IntFilter<"MatchSeat"> | number;
    matchId?: Prisma.IntFilter<"MatchSeat"> | number;
    createdAt?: Prisma.DateTimeFilter<"MatchSeat"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"MatchSeat"> | Date | string;
};
export type MatchSeatCreateWithoutUserInput = {
    seatNumber: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    match: Prisma.MatchCreateNestedOneWithoutMatchSeatsInput;
};
export type MatchSeatUncheckedCreateWithoutUserInput = {
    id?: number;
    seatNumber: number;
    matchId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MatchSeatCreateOrConnectWithoutUserInput = {
    where: Prisma.MatchSeatWhereUniqueInput;
    create: Prisma.XOR<Prisma.MatchSeatCreateWithoutUserInput, Prisma.MatchSeatUncheckedCreateWithoutUserInput>;
};
export type MatchSeatCreateManyUserInputEnvelope = {
    data: Prisma.MatchSeatCreateManyUserInput | Prisma.MatchSeatCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type MatchSeatUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.MatchSeatWhereUniqueInput;
    update: Prisma.XOR<Prisma.MatchSeatUpdateWithoutUserInput, Prisma.MatchSeatUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.MatchSeatCreateWithoutUserInput, Prisma.MatchSeatUncheckedCreateWithoutUserInput>;
};
export type MatchSeatUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.MatchSeatWhereUniqueInput;
    data: Prisma.XOR<Prisma.MatchSeatUpdateWithoutUserInput, Prisma.MatchSeatUncheckedUpdateWithoutUserInput>;
};
export type MatchSeatUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.MatchSeatScalarWhereInput;
    data: Prisma.XOR<Prisma.MatchSeatUpdateManyMutationInput, Prisma.MatchSeatUncheckedUpdateManyWithoutUserInput>;
};
export type MatchSeatCreateManyMatchInput = {
    id?: number;
    seatNumber: number;
    userId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MatchSeatUpdateWithoutMatchInput = {
    seatNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutMatchSeatsNestedInput;
};
export type MatchSeatUncheckedUpdateWithoutMatchInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    seatNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MatchSeatUncheckedUpdateManyWithoutMatchInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    seatNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MatchSeatCreateManyUserInput = {
    id?: number;
    seatNumber: number;
    matchId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MatchSeatUpdateWithoutUserInput = {
    seatNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    match?: Prisma.MatchUpdateOneRequiredWithoutMatchSeatsNestedInput;
};
export type MatchSeatUncheckedUpdateWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    seatNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    matchId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MatchSeatUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    seatNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    matchId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MatchSeatSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    seatNumber?: boolean;
    userId?: boolean;
    matchId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    match?: boolean | Prisma.MatchDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["matchSeat"]>;
export type MatchSeatSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    seatNumber?: boolean;
    userId?: boolean;
    matchId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    match?: boolean | Prisma.MatchDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["matchSeat"]>;
export type MatchSeatSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    seatNumber?: boolean;
    userId?: boolean;
    matchId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    match?: boolean | Prisma.MatchDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["matchSeat"]>;
export type MatchSeatSelectScalar = {
    id?: boolean;
    seatNumber?: boolean;
    userId?: boolean;
    matchId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type MatchSeatOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "seatNumber" | "userId" | "matchId" | "createdAt" | "updatedAt", ExtArgs["result"]["matchSeat"]>;
export type MatchSeatInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    match?: boolean | Prisma.MatchDefaultArgs<ExtArgs>;
};
export type MatchSeatIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    match?: boolean | Prisma.MatchDefaultArgs<ExtArgs>;
};
export type MatchSeatIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    match?: boolean | Prisma.MatchDefaultArgs<ExtArgs>;
};
export type $MatchSeatPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "MatchSeat";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        match: Prisma.$MatchPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        seatNumber: number;
        userId: number;
        matchId: number;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["matchSeat"]>;
    composites: {};
};
export type MatchSeatGetPayload<S extends boolean | null | undefined | MatchSeatDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MatchSeatPayload, S>;
export type MatchSeatCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MatchSeatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MatchSeatCountAggregateInputType | true;
};
export interface MatchSeatDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['MatchSeat'];
        meta: {
            name: 'MatchSeat';
        };
    };
    findUnique<T extends MatchSeatFindUniqueArgs>(args: Prisma.SelectSubset<T, MatchSeatFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MatchSeatClient<runtime.Types.Result.GetResult<Prisma.$MatchSeatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends MatchSeatFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MatchSeatFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MatchSeatClient<runtime.Types.Result.GetResult<Prisma.$MatchSeatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends MatchSeatFindFirstArgs>(args?: Prisma.SelectSubset<T, MatchSeatFindFirstArgs<ExtArgs>>): Prisma.Prisma__MatchSeatClient<runtime.Types.Result.GetResult<Prisma.$MatchSeatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends MatchSeatFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MatchSeatFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MatchSeatClient<runtime.Types.Result.GetResult<Prisma.$MatchSeatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends MatchSeatFindManyArgs>(args?: Prisma.SelectSubset<T, MatchSeatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MatchSeatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends MatchSeatCreateArgs>(args: Prisma.SelectSubset<T, MatchSeatCreateArgs<ExtArgs>>): Prisma.Prisma__MatchSeatClient<runtime.Types.Result.GetResult<Prisma.$MatchSeatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends MatchSeatCreateManyArgs>(args?: Prisma.SelectSubset<T, MatchSeatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends MatchSeatCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MatchSeatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MatchSeatPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends MatchSeatDeleteArgs>(args: Prisma.SelectSubset<T, MatchSeatDeleteArgs<ExtArgs>>): Prisma.Prisma__MatchSeatClient<runtime.Types.Result.GetResult<Prisma.$MatchSeatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends MatchSeatUpdateArgs>(args: Prisma.SelectSubset<T, MatchSeatUpdateArgs<ExtArgs>>): Prisma.Prisma__MatchSeatClient<runtime.Types.Result.GetResult<Prisma.$MatchSeatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends MatchSeatDeleteManyArgs>(args?: Prisma.SelectSubset<T, MatchSeatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends MatchSeatUpdateManyArgs>(args: Prisma.SelectSubset<T, MatchSeatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends MatchSeatUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MatchSeatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MatchSeatPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends MatchSeatUpsertArgs>(args: Prisma.SelectSubset<T, MatchSeatUpsertArgs<ExtArgs>>): Prisma.Prisma__MatchSeatClient<runtime.Types.Result.GetResult<Prisma.$MatchSeatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends MatchSeatCountArgs>(args?: Prisma.Subset<T, MatchSeatCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MatchSeatCountAggregateOutputType> : number>;
    aggregate<T extends MatchSeatAggregateArgs>(args: Prisma.Subset<T, MatchSeatAggregateArgs>): Prisma.PrismaPromise<GetMatchSeatAggregateType<T>>;
    groupBy<T extends MatchSeatGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MatchSeatGroupByArgs['orderBy'];
    } : {
        orderBy?: MatchSeatGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MatchSeatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMatchSeatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: MatchSeatFieldRefs;
}
export interface Prisma__MatchSeatClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    match<T extends Prisma.MatchDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.MatchDefaultArgs<ExtArgs>>): Prisma.Prisma__MatchClient<runtime.Types.Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface MatchSeatFieldRefs {
    readonly id: Prisma.FieldRef<"MatchSeat", 'Int'>;
    readonly seatNumber: Prisma.FieldRef<"MatchSeat", 'Int'>;
    readonly userId: Prisma.FieldRef<"MatchSeat", 'Int'>;
    readonly matchId: Prisma.FieldRef<"MatchSeat", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"MatchSeat", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"MatchSeat", 'DateTime'>;
}
export type MatchSeatFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MatchSeatSelect<ExtArgs> | null;
    omit?: Prisma.MatchSeatOmit<ExtArgs> | null;
    include?: Prisma.MatchSeatInclude<ExtArgs> | null;
    where: Prisma.MatchSeatWhereUniqueInput;
};
export type MatchSeatFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MatchSeatSelect<ExtArgs> | null;
    omit?: Prisma.MatchSeatOmit<ExtArgs> | null;
    include?: Prisma.MatchSeatInclude<ExtArgs> | null;
    where: Prisma.MatchSeatWhereUniqueInput;
};
export type MatchSeatFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type MatchSeatFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type MatchSeatFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type MatchSeatCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MatchSeatSelect<ExtArgs> | null;
    omit?: Prisma.MatchSeatOmit<ExtArgs> | null;
    include?: Prisma.MatchSeatInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MatchSeatCreateInput, Prisma.MatchSeatUncheckedCreateInput>;
};
export type MatchSeatCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.MatchSeatCreateManyInput | Prisma.MatchSeatCreateManyInput[];
    skipDuplicates?: boolean;
};
export type MatchSeatCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MatchSeatSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MatchSeatOmit<ExtArgs> | null;
    data: Prisma.MatchSeatCreateManyInput | Prisma.MatchSeatCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.MatchSeatIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type MatchSeatUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MatchSeatSelect<ExtArgs> | null;
    omit?: Prisma.MatchSeatOmit<ExtArgs> | null;
    include?: Prisma.MatchSeatInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MatchSeatUpdateInput, Prisma.MatchSeatUncheckedUpdateInput>;
    where: Prisma.MatchSeatWhereUniqueInput;
};
export type MatchSeatUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.MatchSeatUpdateManyMutationInput, Prisma.MatchSeatUncheckedUpdateManyInput>;
    where?: Prisma.MatchSeatWhereInput;
    limit?: number;
};
export type MatchSeatUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MatchSeatSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MatchSeatOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MatchSeatUpdateManyMutationInput, Prisma.MatchSeatUncheckedUpdateManyInput>;
    where?: Prisma.MatchSeatWhereInput;
    limit?: number;
    include?: Prisma.MatchSeatIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type MatchSeatUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MatchSeatSelect<ExtArgs> | null;
    omit?: Prisma.MatchSeatOmit<ExtArgs> | null;
    include?: Prisma.MatchSeatInclude<ExtArgs> | null;
    where: Prisma.MatchSeatWhereUniqueInput;
    create: Prisma.XOR<Prisma.MatchSeatCreateInput, Prisma.MatchSeatUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.MatchSeatUpdateInput, Prisma.MatchSeatUncheckedUpdateInput>;
};
export type MatchSeatDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MatchSeatSelect<ExtArgs> | null;
    omit?: Prisma.MatchSeatOmit<ExtArgs> | null;
    include?: Prisma.MatchSeatInclude<ExtArgs> | null;
    where: Prisma.MatchSeatWhereUniqueInput;
};
export type MatchSeatDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MatchSeatWhereInput;
    limit?: number;
};
export type MatchSeatDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MatchSeatSelect<ExtArgs> | null;
    omit?: Prisma.MatchSeatOmit<ExtArgs> | null;
    include?: Prisma.MatchSeatInclude<ExtArgs> | null;
};
export {};

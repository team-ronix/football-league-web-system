import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type MatchModel = runtime.Types.Result.DefaultSelection<Prisma.$MatchPayload>;
export type AggregateMatch = {
    _count: MatchCountAggregateOutputType | null;
    _avg: MatchAvgAggregateOutputType | null;
    _sum: MatchSumAggregateOutputType | null;
    _min: MatchMinAggregateOutputType | null;
    _max: MatchMaxAggregateOutputType | null;
};
export type MatchAvgAggregateOutputType = {
    id: number | null;
    homeTeamId: number | null;
    awayTeamId: number | null;
    stadiumId: number | null;
};
export type MatchSumAggregateOutputType = {
    id: number | null;
    homeTeamId: number | null;
    awayTeamId: number | null;
    stadiumId: number | null;
};
export type MatchMinAggregateOutputType = {
    id: number | null;
    dateTime: Date | null;
    homeTeamId: number | null;
    awayTeamId: number | null;
    stadiumId: number | null;
    mainRefereeName: string | null;
    linesmen1Name: string | null;
    linesmen2Name: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type MatchMaxAggregateOutputType = {
    id: number | null;
    dateTime: Date | null;
    homeTeamId: number | null;
    awayTeamId: number | null;
    stadiumId: number | null;
    mainRefereeName: string | null;
    linesmen1Name: string | null;
    linesmen2Name: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type MatchCountAggregateOutputType = {
    id: number;
    dateTime: number;
    homeTeamId: number;
    awayTeamId: number;
    stadiumId: number;
    mainRefereeName: number;
    linesmen1Name: number;
    linesmen2Name: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type MatchAvgAggregateInputType = {
    id?: true;
    homeTeamId?: true;
    awayTeamId?: true;
    stadiumId?: true;
};
export type MatchSumAggregateInputType = {
    id?: true;
    homeTeamId?: true;
    awayTeamId?: true;
    stadiumId?: true;
};
export type MatchMinAggregateInputType = {
    id?: true;
    dateTime?: true;
    homeTeamId?: true;
    awayTeamId?: true;
    stadiumId?: true;
    mainRefereeName?: true;
    linesmen1Name?: true;
    linesmen2Name?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type MatchMaxAggregateInputType = {
    id?: true;
    dateTime?: true;
    homeTeamId?: true;
    awayTeamId?: true;
    stadiumId?: true;
    mainRefereeName?: true;
    linesmen1Name?: true;
    linesmen2Name?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type MatchCountAggregateInputType = {
    id?: true;
    dateTime?: true;
    homeTeamId?: true;
    awayTeamId?: true;
    stadiumId?: true;
    mainRefereeName?: true;
    linesmen1Name?: true;
    linesmen2Name?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type MatchAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MatchWhereInput;
    orderBy?: Prisma.MatchOrderByWithRelationInput | Prisma.MatchOrderByWithRelationInput[];
    cursor?: Prisma.MatchWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | MatchCountAggregateInputType;
    _avg?: MatchAvgAggregateInputType;
    _sum?: MatchSumAggregateInputType;
    _min?: MatchMinAggregateInputType;
    _max?: MatchMaxAggregateInputType;
};
export type GetMatchAggregateType<T extends MatchAggregateArgs> = {
    [P in keyof T & keyof AggregateMatch]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMatch[P]> : Prisma.GetScalarType<T[P], AggregateMatch[P]>;
};
export type MatchGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MatchWhereInput;
    orderBy?: Prisma.MatchOrderByWithAggregationInput | Prisma.MatchOrderByWithAggregationInput[];
    by: Prisma.MatchScalarFieldEnum[] | Prisma.MatchScalarFieldEnum;
    having?: Prisma.MatchScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MatchCountAggregateInputType | true;
    _avg?: MatchAvgAggregateInputType;
    _sum?: MatchSumAggregateInputType;
    _min?: MatchMinAggregateInputType;
    _max?: MatchMaxAggregateInputType;
};
export type MatchGroupByOutputType = {
    id: number;
    dateTime: Date;
    homeTeamId: number;
    awayTeamId: number;
    stadiumId: number;
    mainRefereeName: string;
    linesmen1Name: string;
    linesmen2Name: string;
    createdAt: Date;
    updatedAt: Date;
    _count: MatchCountAggregateOutputType | null;
    _avg: MatchAvgAggregateOutputType | null;
    _sum: MatchSumAggregateOutputType | null;
    _min: MatchMinAggregateOutputType | null;
    _max: MatchMaxAggregateOutputType | null;
};
type GetMatchGroupByPayload<T extends MatchGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MatchGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MatchGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MatchGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MatchGroupByOutputType[P]>;
}>>;
export type MatchWhereInput = {
    AND?: Prisma.MatchWhereInput | Prisma.MatchWhereInput[];
    OR?: Prisma.MatchWhereInput[];
    NOT?: Prisma.MatchWhereInput | Prisma.MatchWhereInput[];
    id?: Prisma.IntFilter<"Match"> | number;
    dateTime?: Prisma.DateTimeFilter<"Match"> | Date | string;
    homeTeamId?: Prisma.IntFilter<"Match"> | number;
    awayTeamId?: Prisma.IntFilter<"Match"> | number;
    stadiumId?: Prisma.IntFilter<"Match"> | number;
    mainRefereeName?: Prisma.StringFilter<"Match"> | string;
    linesmen1Name?: Prisma.StringFilter<"Match"> | string;
    linesmen2Name?: Prisma.StringFilter<"Match"> | string;
    createdAt?: Prisma.DateTimeFilter<"Match"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Match"> | Date | string;
    homeTeam?: Prisma.XOR<Prisma.TeamScalarRelationFilter, Prisma.TeamWhereInput>;
    awayTeam?: Prisma.XOR<Prisma.TeamScalarRelationFilter, Prisma.TeamWhereInput>;
    stadium?: Prisma.XOR<Prisma.StadiumScalarRelationFilter, Prisma.StadiumWhereInput>;
    matchSeats?: Prisma.MatchSeatListRelationFilter;
};
export type MatchOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    dateTime?: Prisma.SortOrder;
    homeTeamId?: Prisma.SortOrder;
    awayTeamId?: Prisma.SortOrder;
    stadiumId?: Prisma.SortOrder;
    mainRefereeName?: Prisma.SortOrder;
    linesmen1Name?: Prisma.SortOrder;
    linesmen2Name?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    homeTeam?: Prisma.TeamOrderByWithRelationInput;
    awayTeam?: Prisma.TeamOrderByWithRelationInput;
    stadium?: Prisma.StadiumOrderByWithRelationInput;
    matchSeats?: Prisma.MatchSeatOrderByRelationAggregateInput;
};
export type MatchWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.MatchWhereInput | Prisma.MatchWhereInput[];
    OR?: Prisma.MatchWhereInput[];
    NOT?: Prisma.MatchWhereInput | Prisma.MatchWhereInput[];
    dateTime?: Prisma.DateTimeFilter<"Match"> | Date | string;
    homeTeamId?: Prisma.IntFilter<"Match"> | number;
    awayTeamId?: Prisma.IntFilter<"Match"> | number;
    stadiumId?: Prisma.IntFilter<"Match"> | number;
    mainRefereeName?: Prisma.StringFilter<"Match"> | string;
    linesmen1Name?: Prisma.StringFilter<"Match"> | string;
    linesmen2Name?: Prisma.StringFilter<"Match"> | string;
    createdAt?: Prisma.DateTimeFilter<"Match"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Match"> | Date | string;
    homeTeam?: Prisma.XOR<Prisma.TeamScalarRelationFilter, Prisma.TeamWhereInput>;
    awayTeam?: Prisma.XOR<Prisma.TeamScalarRelationFilter, Prisma.TeamWhereInput>;
    stadium?: Prisma.XOR<Prisma.StadiumScalarRelationFilter, Prisma.StadiumWhereInput>;
    matchSeats?: Prisma.MatchSeatListRelationFilter;
}, "id">;
export type MatchOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    dateTime?: Prisma.SortOrder;
    homeTeamId?: Prisma.SortOrder;
    awayTeamId?: Prisma.SortOrder;
    stadiumId?: Prisma.SortOrder;
    mainRefereeName?: Prisma.SortOrder;
    linesmen1Name?: Prisma.SortOrder;
    linesmen2Name?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.MatchCountOrderByAggregateInput;
    _avg?: Prisma.MatchAvgOrderByAggregateInput;
    _max?: Prisma.MatchMaxOrderByAggregateInput;
    _min?: Prisma.MatchMinOrderByAggregateInput;
    _sum?: Prisma.MatchSumOrderByAggregateInput;
};
export type MatchScalarWhereWithAggregatesInput = {
    AND?: Prisma.MatchScalarWhereWithAggregatesInput | Prisma.MatchScalarWhereWithAggregatesInput[];
    OR?: Prisma.MatchScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MatchScalarWhereWithAggregatesInput | Prisma.MatchScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Match"> | number;
    dateTime?: Prisma.DateTimeWithAggregatesFilter<"Match"> | Date | string;
    homeTeamId?: Prisma.IntWithAggregatesFilter<"Match"> | number;
    awayTeamId?: Prisma.IntWithAggregatesFilter<"Match"> | number;
    stadiumId?: Prisma.IntWithAggregatesFilter<"Match"> | number;
    mainRefereeName?: Prisma.StringWithAggregatesFilter<"Match"> | string;
    linesmen1Name?: Prisma.StringWithAggregatesFilter<"Match"> | string;
    linesmen2Name?: Prisma.StringWithAggregatesFilter<"Match"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Match"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Match"> | Date | string;
};
export type MatchCreateInput = {
    dateTime: Date | string;
    mainRefereeName: string;
    linesmen1Name: string;
    linesmen2Name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    homeTeam: Prisma.TeamCreateNestedOneWithoutHomeMatchesInput;
    awayTeam: Prisma.TeamCreateNestedOneWithoutAwayMatchesInput;
    stadium: Prisma.StadiumCreateNestedOneWithoutMatchesInput;
    matchSeats?: Prisma.MatchSeatCreateNestedManyWithoutMatchInput;
};
export type MatchUncheckedCreateInput = {
    id?: number;
    dateTime: Date | string;
    homeTeamId: number;
    awayTeamId: number;
    stadiumId: number;
    mainRefereeName: string;
    linesmen1Name: string;
    linesmen2Name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    matchSeats?: Prisma.MatchSeatUncheckedCreateNestedManyWithoutMatchInput;
};
export type MatchUpdateInput = {
    dateTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    mainRefereeName?: Prisma.StringFieldUpdateOperationsInput | string;
    linesmen1Name?: Prisma.StringFieldUpdateOperationsInput | string;
    linesmen2Name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    homeTeam?: Prisma.TeamUpdateOneRequiredWithoutHomeMatchesNestedInput;
    awayTeam?: Prisma.TeamUpdateOneRequiredWithoutAwayMatchesNestedInput;
    stadium?: Prisma.StadiumUpdateOneRequiredWithoutMatchesNestedInput;
    matchSeats?: Prisma.MatchSeatUpdateManyWithoutMatchNestedInput;
};
export type MatchUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    dateTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    homeTeamId?: Prisma.IntFieldUpdateOperationsInput | number;
    awayTeamId?: Prisma.IntFieldUpdateOperationsInput | number;
    stadiumId?: Prisma.IntFieldUpdateOperationsInput | number;
    mainRefereeName?: Prisma.StringFieldUpdateOperationsInput | string;
    linesmen1Name?: Prisma.StringFieldUpdateOperationsInput | string;
    linesmen2Name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    matchSeats?: Prisma.MatchSeatUncheckedUpdateManyWithoutMatchNestedInput;
};
export type MatchCreateManyInput = {
    id?: number;
    dateTime: Date | string;
    homeTeamId: number;
    awayTeamId: number;
    stadiumId: number;
    mainRefereeName: string;
    linesmen1Name: string;
    linesmen2Name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MatchUpdateManyMutationInput = {
    dateTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    mainRefereeName?: Prisma.StringFieldUpdateOperationsInput | string;
    linesmen1Name?: Prisma.StringFieldUpdateOperationsInput | string;
    linesmen2Name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MatchUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    dateTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    homeTeamId?: Prisma.IntFieldUpdateOperationsInput | number;
    awayTeamId?: Prisma.IntFieldUpdateOperationsInput | number;
    stadiumId?: Prisma.IntFieldUpdateOperationsInput | number;
    mainRefereeName?: Prisma.StringFieldUpdateOperationsInput | string;
    linesmen1Name?: Prisma.StringFieldUpdateOperationsInput | string;
    linesmen2Name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MatchListRelationFilter = {
    every?: Prisma.MatchWhereInput;
    some?: Prisma.MatchWhereInput;
    none?: Prisma.MatchWhereInput;
};
export type MatchOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type MatchCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    dateTime?: Prisma.SortOrder;
    homeTeamId?: Prisma.SortOrder;
    awayTeamId?: Prisma.SortOrder;
    stadiumId?: Prisma.SortOrder;
    mainRefereeName?: Prisma.SortOrder;
    linesmen1Name?: Prisma.SortOrder;
    linesmen2Name?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MatchAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    homeTeamId?: Prisma.SortOrder;
    awayTeamId?: Prisma.SortOrder;
    stadiumId?: Prisma.SortOrder;
};
export type MatchMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    dateTime?: Prisma.SortOrder;
    homeTeamId?: Prisma.SortOrder;
    awayTeamId?: Prisma.SortOrder;
    stadiumId?: Prisma.SortOrder;
    mainRefereeName?: Prisma.SortOrder;
    linesmen1Name?: Prisma.SortOrder;
    linesmen2Name?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MatchMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    dateTime?: Prisma.SortOrder;
    homeTeamId?: Prisma.SortOrder;
    awayTeamId?: Prisma.SortOrder;
    stadiumId?: Prisma.SortOrder;
    mainRefereeName?: Prisma.SortOrder;
    linesmen1Name?: Prisma.SortOrder;
    linesmen2Name?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MatchSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    homeTeamId?: Prisma.SortOrder;
    awayTeamId?: Prisma.SortOrder;
    stadiumId?: Prisma.SortOrder;
};
export type MatchScalarRelationFilter = {
    is?: Prisma.MatchWhereInput;
    isNot?: Prisma.MatchWhereInput;
};
export type MatchCreateNestedManyWithoutStadiumInput = {
    create?: Prisma.XOR<Prisma.MatchCreateWithoutStadiumInput, Prisma.MatchUncheckedCreateWithoutStadiumInput> | Prisma.MatchCreateWithoutStadiumInput[] | Prisma.MatchUncheckedCreateWithoutStadiumInput[];
    connectOrCreate?: Prisma.MatchCreateOrConnectWithoutStadiumInput | Prisma.MatchCreateOrConnectWithoutStadiumInput[];
    createMany?: Prisma.MatchCreateManyStadiumInputEnvelope;
    connect?: Prisma.MatchWhereUniqueInput | Prisma.MatchWhereUniqueInput[];
};
export type MatchUncheckedCreateNestedManyWithoutStadiumInput = {
    create?: Prisma.XOR<Prisma.MatchCreateWithoutStadiumInput, Prisma.MatchUncheckedCreateWithoutStadiumInput> | Prisma.MatchCreateWithoutStadiumInput[] | Prisma.MatchUncheckedCreateWithoutStadiumInput[];
    connectOrCreate?: Prisma.MatchCreateOrConnectWithoutStadiumInput | Prisma.MatchCreateOrConnectWithoutStadiumInput[];
    createMany?: Prisma.MatchCreateManyStadiumInputEnvelope;
    connect?: Prisma.MatchWhereUniqueInput | Prisma.MatchWhereUniqueInput[];
};
export type MatchUpdateManyWithoutStadiumNestedInput = {
    create?: Prisma.XOR<Prisma.MatchCreateWithoutStadiumInput, Prisma.MatchUncheckedCreateWithoutStadiumInput> | Prisma.MatchCreateWithoutStadiumInput[] | Prisma.MatchUncheckedCreateWithoutStadiumInput[];
    connectOrCreate?: Prisma.MatchCreateOrConnectWithoutStadiumInput | Prisma.MatchCreateOrConnectWithoutStadiumInput[];
    upsert?: Prisma.MatchUpsertWithWhereUniqueWithoutStadiumInput | Prisma.MatchUpsertWithWhereUniqueWithoutStadiumInput[];
    createMany?: Prisma.MatchCreateManyStadiumInputEnvelope;
    set?: Prisma.MatchWhereUniqueInput | Prisma.MatchWhereUniqueInput[];
    disconnect?: Prisma.MatchWhereUniqueInput | Prisma.MatchWhereUniqueInput[];
    delete?: Prisma.MatchWhereUniqueInput | Prisma.MatchWhereUniqueInput[];
    connect?: Prisma.MatchWhereUniqueInput | Prisma.MatchWhereUniqueInput[];
    update?: Prisma.MatchUpdateWithWhereUniqueWithoutStadiumInput | Prisma.MatchUpdateWithWhereUniqueWithoutStadiumInput[];
    updateMany?: Prisma.MatchUpdateManyWithWhereWithoutStadiumInput | Prisma.MatchUpdateManyWithWhereWithoutStadiumInput[];
    deleteMany?: Prisma.MatchScalarWhereInput | Prisma.MatchScalarWhereInput[];
};
export type MatchUncheckedUpdateManyWithoutStadiumNestedInput = {
    create?: Prisma.XOR<Prisma.MatchCreateWithoutStadiumInput, Prisma.MatchUncheckedCreateWithoutStadiumInput> | Prisma.MatchCreateWithoutStadiumInput[] | Prisma.MatchUncheckedCreateWithoutStadiumInput[];
    connectOrCreate?: Prisma.MatchCreateOrConnectWithoutStadiumInput | Prisma.MatchCreateOrConnectWithoutStadiumInput[];
    upsert?: Prisma.MatchUpsertWithWhereUniqueWithoutStadiumInput | Prisma.MatchUpsertWithWhereUniqueWithoutStadiumInput[];
    createMany?: Prisma.MatchCreateManyStadiumInputEnvelope;
    set?: Prisma.MatchWhereUniqueInput | Prisma.MatchWhereUniqueInput[];
    disconnect?: Prisma.MatchWhereUniqueInput | Prisma.MatchWhereUniqueInput[];
    delete?: Prisma.MatchWhereUniqueInput | Prisma.MatchWhereUniqueInput[];
    connect?: Prisma.MatchWhereUniqueInput | Prisma.MatchWhereUniqueInput[];
    update?: Prisma.MatchUpdateWithWhereUniqueWithoutStadiumInput | Prisma.MatchUpdateWithWhereUniqueWithoutStadiumInput[];
    updateMany?: Prisma.MatchUpdateManyWithWhereWithoutStadiumInput | Prisma.MatchUpdateManyWithWhereWithoutStadiumInput[];
    deleteMany?: Prisma.MatchScalarWhereInput | Prisma.MatchScalarWhereInput[];
};
export type MatchCreateNestedManyWithoutHomeTeamInput = {
    create?: Prisma.XOR<Prisma.MatchCreateWithoutHomeTeamInput, Prisma.MatchUncheckedCreateWithoutHomeTeamInput> | Prisma.MatchCreateWithoutHomeTeamInput[] | Prisma.MatchUncheckedCreateWithoutHomeTeamInput[];
    connectOrCreate?: Prisma.MatchCreateOrConnectWithoutHomeTeamInput | Prisma.MatchCreateOrConnectWithoutHomeTeamInput[];
    createMany?: Prisma.MatchCreateManyHomeTeamInputEnvelope;
    connect?: Prisma.MatchWhereUniqueInput | Prisma.MatchWhereUniqueInput[];
};
export type MatchCreateNestedManyWithoutAwayTeamInput = {
    create?: Prisma.XOR<Prisma.MatchCreateWithoutAwayTeamInput, Prisma.MatchUncheckedCreateWithoutAwayTeamInput> | Prisma.MatchCreateWithoutAwayTeamInput[] | Prisma.MatchUncheckedCreateWithoutAwayTeamInput[];
    connectOrCreate?: Prisma.MatchCreateOrConnectWithoutAwayTeamInput | Prisma.MatchCreateOrConnectWithoutAwayTeamInput[];
    createMany?: Prisma.MatchCreateManyAwayTeamInputEnvelope;
    connect?: Prisma.MatchWhereUniqueInput | Prisma.MatchWhereUniqueInput[];
};
export type MatchUncheckedCreateNestedManyWithoutHomeTeamInput = {
    create?: Prisma.XOR<Prisma.MatchCreateWithoutHomeTeamInput, Prisma.MatchUncheckedCreateWithoutHomeTeamInput> | Prisma.MatchCreateWithoutHomeTeamInput[] | Prisma.MatchUncheckedCreateWithoutHomeTeamInput[];
    connectOrCreate?: Prisma.MatchCreateOrConnectWithoutHomeTeamInput | Prisma.MatchCreateOrConnectWithoutHomeTeamInput[];
    createMany?: Prisma.MatchCreateManyHomeTeamInputEnvelope;
    connect?: Prisma.MatchWhereUniqueInput | Prisma.MatchWhereUniqueInput[];
};
export type MatchUncheckedCreateNestedManyWithoutAwayTeamInput = {
    create?: Prisma.XOR<Prisma.MatchCreateWithoutAwayTeamInput, Prisma.MatchUncheckedCreateWithoutAwayTeamInput> | Prisma.MatchCreateWithoutAwayTeamInput[] | Prisma.MatchUncheckedCreateWithoutAwayTeamInput[];
    connectOrCreate?: Prisma.MatchCreateOrConnectWithoutAwayTeamInput | Prisma.MatchCreateOrConnectWithoutAwayTeamInput[];
    createMany?: Prisma.MatchCreateManyAwayTeamInputEnvelope;
    connect?: Prisma.MatchWhereUniqueInput | Prisma.MatchWhereUniqueInput[];
};
export type MatchUpdateManyWithoutHomeTeamNestedInput = {
    create?: Prisma.XOR<Prisma.MatchCreateWithoutHomeTeamInput, Prisma.MatchUncheckedCreateWithoutHomeTeamInput> | Prisma.MatchCreateWithoutHomeTeamInput[] | Prisma.MatchUncheckedCreateWithoutHomeTeamInput[];
    connectOrCreate?: Prisma.MatchCreateOrConnectWithoutHomeTeamInput | Prisma.MatchCreateOrConnectWithoutHomeTeamInput[];
    upsert?: Prisma.MatchUpsertWithWhereUniqueWithoutHomeTeamInput | Prisma.MatchUpsertWithWhereUniqueWithoutHomeTeamInput[];
    createMany?: Prisma.MatchCreateManyHomeTeamInputEnvelope;
    set?: Prisma.MatchWhereUniqueInput | Prisma.MatchWhereUniqueInput[];
    disconnect?: Prisma.MatchWhereUniqueInput | Prisma.MatchWhereUniqueInput[];
    delete?: Prisma.MatchWhereUniqueInput | Prisma.MatchWhereUniqueInput[];
    connect?: Prisma.MatchWhereUniqueInput | Prisma.MatchWhereUniqueInput[];
    update?: Prisma.MatchUpdateWithWhereUniqueWithoutHomeTeamInput | Prisma.MatchUpdateWithWhereUniqueWithoutHomeTeamInput[];
    updateMany?: Prisma.MatchUpdateManyWithWhereWithoutHomeTeamInput | Prisma.MatchUpdateManyWithWhereWithoutHomeTeamInput[];
    deleteMany?: Prisma.MatchScalarWhereInput | Prisma.MatchScalarWhereInput[];
};
export type MatchUpdateManyWithoutAwayTeamNestedInput = {
    create?: Prisma.XOR<Prisma.MatchCreateWithoutAwayTeamInput, Prisma.MatchUncheckedCreateWithoutAwayTeamInput> | Prisma.MatchCreateWithoutAwayTeamInput[] | Prisma.MatchUncheckedCreateWithoutAwayTeamInput[];
    connectOrCreate?: Prisma.MatchCreateOrConnectWithoutAwayTeamInput | Prisma.MatchCreateOrConnectWithoutAwayTeamInput[];
    upsert?: Prisma.MatchUpsertWithWhereUniqueWithoutAwayTeamInput | Prisma.MatchUpsertWithWhereUniqueWithoutAwayTeamInput[];
    createMany?: Prisma.MatchCreateManyAwayTeamInputEnvelope;
    set?: Prisma.MatchWhereUniqueInput | Prisma.MatchWhereUniqueInput[];
    disconnect?: Prisma.MatchWhereUniqueInput | Prisma.MatchWhereUniqueInput[];
    delete?: Prisma.MatchWhereUniqueInput | Prisma.MatchWhereUniqueInput[];
    connect?: Prisma.MatchWhereUniqueInput | Prisma.MatchWhereUniqueInput[];
    update?: Prisma.MatchUpdateWithWhereUniqueWithoutAwayTeamInput | Prisma.MatchUpdateWithWhereUniqueWithoutAwayTeamInput[];
    updateMany?: Prisma.MatchUpdateManyWithWhereWithoutAwayTeamInput | Prisma.MatchUpdateManyWithWhereWithoutAwayTeamInput[];
    deleteMany?: Prisma.MatchScalarWhereInput | Prisma.MatchScalarWhereInput[];
};
export type MatchUncheckedUpdateManyWithoutHomeTeamNestedInput = {
    create?: Prisma.XOR<Prisma.MatchCreateWithoutHomeTeamInput, Prisma.MatchUncheckedCreateWithoutHomeTeamInput> | Prisma.MatchCreateWithoutHomeTeamInput[] | Prisma.MatchUncheckedCreateWithoutHomeTeamInput[];
    connectOrCreate?: Prisma.MatchCreateOrConnectWithoutHomeTeamInput | Prisma.MatchCreateOrConnectWithoutHomeTeamInput[];
    upsert?: Prisma.MatchUpsertWithWhereUniqueWithoutHomeTeamInput | Prisma.MatchUpsertWithWhereUniqueWithoutHomeTeamInput[];
    createMany?: Prisma.MatchCreateManyHomeTeamInputEnvelope;
    set?: Prisma.MatchWhereUniqueInput | Prisma.MatchWhereUniqueInput[];
    disconnect?: Prisma.MatchWhereUniqueInput | Prisma.MatchWhereUniqueInput[];
    delete?: Prisma.MatchWhereUniqueInput | Prisma.MatchWhereUniqueInput[];
    connect?: Prisma.MatchWhereUniqueInput | Prisma.MatchWhereUniqueInput[];
    update?: Prisma.MatchUpdateWithWhereUniqueWithoutHomeTeamInput | Prisma.MatchUpdateWithWhereUniqueWithoutHomeTeamInput[];
    updateMany?: Prisma.MatchUpdateManyWithWhereWithoutHomeTeamInput | Prisma.MatchUpdateManyWithWhereWithoutHomeTeamInput[];
    deleteMany?: Prisma.MatchScalarWhereInput | Prisma.MatchScalarWhereInput[];
};
export type MatchUncheckedUpdateManyWithoutAwayTeamNestedInput = {
    create?: Prisma.XOR<Prisma.MatchCreateWithoutAwayTeamInput, Prisma.MatchUncheckedCreateWithoutAwayTeamInput> | Prisma.MatchCreateWithoutAwayTeamInput[] | Prisma.MatchUncheckedCreateWithoutAwayTeamInput[];
    connectOrCreate?: Prisma.MatchCreateOrConnectWithoutAwayTeamInput | Prisma.MatchCreateOrConnectWithoutAwayTeamInput[];
    upsert?: Prisma.MatchUpsertWithWhereUniqueWithoutAwayTeamInput | Prisma.MatchUpsertWithWhereUniqueWithoutAwayTeamInput[];
    createMany?: Prisma.MatchCreateManyAwayTeamInputEnvelope;
    set?: Prisma.MatchWhereUniqueInput | Prisma.MatchWhereUniqueInput[];
    disconnect?: Prisma.MatchWhereUniqueInput | Prisma.MatchWhereUniqueInput[];
    delete?: Prisma.MatchWhereUniqueInput | Prisma.MatchWhereUniqueInput[];
    connect?: Prisma.MatchWhereUniqueInput | Prisma.MatchWhereUniqueInput[];
    update?: Prisma.MatchUpdateWithWhereUniqueWithoutAwayTeamInput | Prisma.MatchUpdateWithWhereUniqueWithoutAwayTeamInput[];
    updateMany?: Prisma.MatchUpdateManyWithWhereWithoutAwayTeamInput | Prisma.MatchUpdateManyWithWhereWithoutAwayTeamInput[];
    deleteMany?: Prisma.MatchScalarWhereInput | Prisma.MatchScalarWhereInput[];
};
export type MatchCreateNestedOneWithoutMatchSeatsInput = {
    create?: Prisma.XOR<Prisma.MatchCreateWithoutMatchSeatsInput, Prisma.MatchUncheckedCreateWithoutMatchSeatsInput>;
    connectOrCreate?: Prisma.MatchCreateOrConnectWithoutMatchSeatsInput;
    connect?: Prisma.MatchWhereUniqueInput;
};
export type MatchUpdateOneRequiredWithoutMatchSeatsNestedInput = {
    create?: Prisma.XOR<Prisma.MatchCreateWithoutMatchSeatsInput, Prisma.MatchUncheckedCreateWithoutMatchSeatsInput>;
    connectOrCreate?: Prisma.MatchCreateOrConnectWithoutMatchSeatsInput;
    upsert?: Prisma.MatchUpsertWithoutMatchSeatsInput;
    connect?: Prisma.MatchWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.MatchUpdateToOneWithWhereWithoutMatchSeatsInput, Prisma.MatchUpdateWithoutMatchSeatsInput>, Prisma.MatchUncheckedUpdateWithoutMatchSeatsInput>;
};
export type MatchCreateWithoutStadiumInput = {
    dateTime: Date | string;
    mainRefereeName: string;
    linesmen1Name: string;
    linesmen2Name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    homeTeam: Prisma.TeamCreateNestedOneWithoutHomeMatchesInput;
    awayTeam: Prisma.TeamCreateNestedOneWithoutAwayMatchesInput;
    matchSeats?: Prisma.MatchSeatCreateNestedManyWithoutMatchInput;
};
export type MatchUncheckedCreateWithoutStadiumInput = {
    id?: number;
    dateTime: Date | string;
    homeTeamId: number;
    awayTeamId: number;
    mainRefereeName: string;
    linesmen1Name: string;
    linesmen2Name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    matchSeats?: Prisma.MatchSeatUncheckedCreateNestedManyWithoutMatchInput;
};
export type MatchCreateOrConnectWithoutStadiumInput = {
    where: Prisma.MatchWhereUniqueInput;
    create: Prisma.XOR<Prisma.MatchCreateWithoutStadiumInput, Prisma.MatchUncheckedCreateWithoutStadiumInput>;
};
export type MatchCreateManyStadiumInputEnvelope = {
    data: Prisma.MatchCreateManyStadiumInput | Prisma.MatchCreateManyStadiumInput[];
    skipDuplicates?: boolean;
};
export type MatchUpsertWithWhereUniqueWithoutStadiumInput = {
    where: Prisma.MatchWhereUniqueInput;
    update: Prisma.XOR<Prisma.MatchUpdateWithoutStadiumInput, Prisma.MatchUncheckedUpdateWithoutStadiumInput>;
    create: Prisma.XOR<Prisma.MatchCreateWithoutStadiumInput, Prisma.MatchUncheckedCreateWithoutStadiumInput>;
};
export type MatchUpdateWithWhereUniqueWithoutStadiumInput = {
    where: Prisma.MatchWhereUniqueInput;
    data: Prisma.XOR<Prisma.MatchUpdateWithoutStadiumInput, Prisma.MatchUncheckedUpdateWithoutStadiumInput>;
};
export type MatchUpdateManyWithWhereWithoutStadiumInput = {
    where: Prisma.MatchScalarWhereInput;
    data: Prisma.XOR<Prisma.MatchUpdateManyMutationInput, Prisma.MatchUncheckedUpdateManyWithoutStadiumInput>;
};
export type MatchScalarWhereInput = {
    AND?: Prisma.MatchScalarWhereInput | Prisma.MatchScalarWhereInput[];
    OR?: Prisma.MatchScalarWhereInput[];
    NOT?: Prisma.MatchScalarWhereInput | Prisma.MatchScalarWhereInput[];
    id?: Prisma.IntFilter<"Match"> | number;
    dateTime?: Prisma.DateTimeFilter<"Match"> | Date | string;
    homeTeamId?: Prisma.IntFilter<"Match"> | number;
    awayTeamId?: Prisma.IntFilter<"Match"> | number;
    stadiumId?: Prisma.IntFilter<"Match"> | number;
    mainRefereeName?: Prisma.StringFilter<"Match"> | string;
    linesmen1Name?: Prisma.StringFilter<"Match"> | string;
    linesmen2Name?: Prisma.StringFilter<"Match"> | string;
    createdAt?: Prisma.DateTimeFilter<"Match"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Match"> | Date | string;
};
export type MatchCreateWithoutHomeTeamInput = {
    dateTime: Date | string;
    mainRefereeName: string;
    linesmen1Name: string;
    linesmen2Name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    awayTeam: Prisma.TeamCreateNestedOneWithoutAwayMatchesInput;
    stadium: Prisma.StadiumCreateNestedOneWithoutMatchesInput;
    matchSeats?: Prisma.MatchSeatCreateNestedManyWithoutMatchInput;
};
export type MatchUncheckedCreateWithoutHomeTeamInput = {
    id?: number;
    dateTime: Date | string;
    awayTeamId: number;
    stadiumId: number;
    mainRefereeName: string;
    linesmen1Name: string;
    linesmen2Name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    matchSeats?: Prisma.MatchSeatUncheckedCreateNestedManyWithoutMatchInput;
};
export type MatchCreateOrConnectWithoutHomeTeamInput = {
    where: Prisma.MatchWhereUniqueInput;
    create: Prisma.XOR<Prisma.MatchCreateWithoutHomeTeamInput, Prisma.MatchUncheckedCreateWithoutHomeTeamInput>;
};
export type MatchCreateManyHomeTeamInputEnvelope = {
    data: Prisma.MatchCreateManyHomeTeamInput | Prisma.MatchCreateManyHomeTeamInput[];
    skipDuplicates?: boolean;
};
export type MatchCreateWithoutAwayTeamInput = {
    dateTime: Date | string;
    mainRefereeName: string;
    linesmen1Name: string;
    linesmen2Name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    homeTeam: Prisma.TeamCreateNestedOneWithoutHomeMatchesInput;
    stadium: Prisma.StadiumCreateNestedOneWithoutMatchesInput;
    matchSeats?: Prisma.MatchSeatCreateNestedManyWithoutMatchInput;
};
export type MatchUncheckedCreateWithoutAwayTeamInput = {
    id?: number;
    dateTime: Date | string;
    homeTeamId: number;
    stadiumId: number;
    mainRefereeName: string;
    linesmen1Name: string;
    linesmen2Name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    matchSeats?: Prisma.MatchSeatUncheckedCreateNestedManyWithoutMatchInput;
};
export type MatchCreateOrConnectWithoutAwayTeamInput = {
    where: Prisma.MatchWhereUniqueInput;
    create: Prisma.XOR<Prisma.MatchCreateWithoutAwayTeamInput, Prisma.MatchUncheckedCreateWithoutAwayTeamInput>;
};
export type MatchCreateManyAwayTeamInputEnvelope = {
    data: Prisma.MatchCreateManyAwayTeamInput | Prisma.MatchCreateManyAwayTeamInput[];
    skipDuplicates?: boolean;
};
export type MatchUpsertWithWhereUniqueWithoutHomeTeamInput = {
    where: Prisma.MatchWhereUniqueInput;
    update: Prisma.XOR<Prisma.MatchUpdateWithoutHomeTeamInput, Prisma.MatchUncheckedUpdateWithoutHomeTeamInput>;
    create: Prisma.XOR<Prisma.MatchCreateWithoutHomeTeamInput, Prisma.MatchUncheckedCreateWithoutHomeTeamInput>;
};
export type MatchUpdateWithWhereUniqueWithoutHomeTeamInput = {
    where: Prisma.MatchWhereUniqueInput;
    data: Prisma.XOR<Prisma.MatchUpdateWithoutHomeTeamInput, Prisma.MatchUncheckedUpdateWithoutHomeTeamInput>;
};
export type MatchUpdateManyWithWhereWithoutHomeTeamInput = {
    where: Prisma.MatchScalarWhereInput;
    data: Prisma.XOR<Prisma.MatchUpdateManyMutationInput, Prisma.MatchUncheckedUpdateManyWithoutHomeTeamInput>;
};
export type MatchUpsertWithWhereUniqueWithoutAwayTeamInput = {
    where: Prisma.MatchWhereUniqueInput;
    update: Prisma.XOR<Prisma.MatchUpdateWithoutAwayTeamInput, Prisma.MatchUncheckedUpdateWithoutAwayTeamInput>;
    create: Prisma.XOR<Prisma.MatchCreateWithoutAwayTeamInput, Prisma.MatchUncheckedCreateWithoutAwayTeamInput>;
};
export type MatchUpdateWithWhereUniqueWithoutAwayTeamInput = {
    where: Prisma.MatchWhereUniqueInput;
    data: Prisma.XOR<Prisma.MatchUpdateWithoutAwayTeamInput, Prisma.MatchUncheckedUpdateWithoutAwayTeamInput>;
};
export type MatchUpdateManyWithWhereWithoutAwayTeamInput = {
    where: Prisma.MatchScalarWhereInput;
    data: Prisma.XOR<Prisma.MatchUpdateManyMutationInput, Prisma.MatchUncheckedUpdateManyWithoutAwayTeamInput>;
};
export type MatchCreateWithoutMatchSeatsInput = {
    dateTime: Date | string;
    mainRefereeName: string;
    linesmen1Name: string;
    linesmen2Name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    homeTeam: Prisma.TeamCreateNestedOneWithoutHomeMatchesInput;
    awayTeam: Prisma.TeamCreateNestedOneWithoutAwayMatchesInput;
    stadium: Prisma.StadiumCreateNestedOneWithoutMatchesInput;
};
export type MatchUncheckedCreateWithoutMatchSeatsInput = {
    id?: number;
    dateTime: Date | string;
    homeTeamId: number;
    awayTeamId: number;
    stadiumId: number;
    mainRefereeName: string;
    linesmen1Name: string;
    linesmen2Name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MatchCreateOrConnectWithoutMatchSeatsInput = {
    where: Prisma.MatchWhereUniqueInput;
    create: Prisma.XOR<Prisma.MatchCreateWithoutMatchSeatsInput, Prisma.MatchUncheckedCreateWithoutMatchSeatsInput>;
};
export type MatchUpsertWithoutMatchSeatsInput = {
    update: Prisma.XOR<Prisma.MatchUpdateWithoutMatchSeatsInput, Prisma.MatchUncheckedUpdateWithoutMatchSeatsInput>;
    create: Prisma.XOR<Prisma.MatchCreateWithoutMatchSeatsInput, Prisma.MatchUncheckedCreateWithoutMatchSeatsInput>;
    where?: Prisma.MatchWhereInput;
};
export type MatchUpdateToOneWithWhereWithoutMatchSeatsInput = {
    where?: Prisma.MatchWhereInput;
    data: Prisma.XOR<Prisma.MatchUpdateWithoutMatchSeatsInput, Prisma.MatchUncheckedUpdateWithoutMatchSeatsInput>;
};
export type MatchUpdateWithoutMatchSeatsInput = {
    dateTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    mainRefereeName?: Prisma.StringFieldUpdateOperationsInput | string;
    linesmen1Name?: Prisma.StringFieldUpdateOperationsInput | string;
    linesmen2Name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    homeTeam?: Prisma.TeamUpdateOneRequiredWithoutHomeMatchesNestedInput;
    awayTeam?: Prisma.TeamUpdateOneRequiredWithoutAwayMatchesNestedInput;
    stadium?: Prisma.StadiumUpdateOneRequiredWithoutMatchesNestedInput;
};
export type MatchUncheckedUpdateWithoutMatchSeatsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    dateTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    homeTeamId?: Prisma.IntFieldUpdateOperationsInput | number;
    awayTeamId?: Prisma.IntFieldUpdateOperationsInput | number;
    stadiumId?: Prisma.IntFieldUpdateOperationsInput | number;
    mainRefereeName?: Prisma.StringFieldUpdateOperationsInput | string;
    linesmen1Name?: Prisma.StringFieldUpdateOperationsInput | string;
    linesmen2Name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MatchCreateManyStadiumInput = {
    id?: number;
    dateTime: Date | string;
    homeTeamId: number;
    awayTeamId: number;
    mainRefereeName: string;
    linesmen1Name: string;
    linesmen2Name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MatchUpdateWithoutStadiumInput = {
    dateTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    mainRefereeName?: Prisma.StringFieldUpdateOperationsInput | string;
    linesmen1Name?: Prisma.StringFieldUpdateOperationsInput | string;
    linesmen2Name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    homeTeam?: Prisma.TeamUpdateOneRequiredWithoutHomeMatchesNestedInput;
    awayTeam?: Prisma.TeamUpdateOneRequiredWithoutAwayMatchesNestedInput;
    matchSeats?: Prisma.MatchSeatUpdateManyWithoutMatchNestedInput;
};
export type MatchUncheckedUpdateWithoutStadiumInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    dateTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    homeTeamId?: Prisma.IntFieldUpdateOperationsInput | number;
    awayTeamId?: Prisma.IntFieldUpdateOperationsInput | number;
    mainRefereeName?: Prisma.StringFieldUpdateOperationsInput | string;
    linesmen1Name?: Prisma.StringFieldUpdateOperationsInput | string;
    linesmen2Name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    matchSeats?: Prisma.MatchSeatUncheckedUpdateManyWithoutMatchNestedInput;
};
export type MatchUncheckedUpdateManyWithoutStadiumInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    dateTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    homeTeamId?: Prisma.IntFieldUpdateOperationsInput | number;
    awayTeamId?: Prisma.IntFieldUpdateOperationsInput | number;
    mainRefereeName?: Prisma.StringFieldUpdateOperationsInput | string;
    linesmen1Name?: Prisma.StringFieldUpdateOperationsInput | string;
    linesmen2Name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MatchCreateManyHomeTeamInput = {
    id?: number;
    dateTime: Date | string;
    awayTeamId: number;
    stadiumId: number;
    mainRefereeName: string;
    linesmen1Name: string;
    linesmen2Name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MatchCreateManyAwayTeamInput = {
    id?: number;
    dateTime: Date | string;
    homeTeamId: number;
    stadiumId: number;
    mainRefereeName: string;
    linesmen1Name: string;
    linesmen2Name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MatchUpdateWithoutHomeTeamInput = {
    dateTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    mainRefereeName?: Prisma.StringFieldUpdateOperationsInput | string;
    linesmen1Name?: Prisma.StringFieldUpdateOperationsInput | string;
    linesmen2Name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    awayTeam?: Prisma.TeamUpdateOneRequiredWithoutAwayMatchesNestedInput;
    stadium?: Prisma.StadiumUpdateOneRequiredWithoutMatchesNestedInput;
    matchSeats?: Prisma.MatchSeatUpdateManyWithoutMatchNestedInput;
};
export type MatchUncheckedUpdateWithoutHomeTeamInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    dateTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    awayTeamId?: Prisma.IntFieldUpdateOperationsInput | number;
    stadiumId?: Prisma.IntFieldUpdateOperationsInput | number;
    mainRefereeName?: Prisma.StringFieldUpdateOperationsInput | string;
    linesmen1Name?: Prisma.StringFieldUpdateOperationsInput | string;
    linesmen2Name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    matchSeats?: Prisma.MatchSeatUncheckedUpdateManyWithoutMatchNestedInput;
};
export type MatchUncheckedUpdateManyWithoutHomeTeamInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    dateTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    awayTeamId?: Prisma.IntFieldUpdateOperationsInput | number;
    stadiumId?: Prisma.IntFieldUpdateOperationsInput | number;
    mainRefereeName?: Prisma.StringFieldUpdateOperationsInput | string;
    linesmen1Name?: Prisma.StringFieldUpdateOperationsInput | string;
    linesmen2Name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MatchUpdateWithoutAwayTeamInput = {
    dateTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    mainRefereeName?: Prisma.StringFieldUpdateOperationsInput | string;
    linesmen1Name?: Prisma.StringFieldUpdateOperationsInput | string;
    linesmen2Name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    homeTeam?: Prisma.TeamUpdateOneRequiredWithoutHomeMatchesNestedInput;
    stadium?: Prisma.StadiumUpdateOneRequiredWithoutMatchesNestedInput;
    matchSeats?: Prisma.MatchSeatUpdateManyWithoutMatchNestedInput;
};
export type MatchUncheckedUpdateWithoutAwayTeamInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    dateTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    homeTeamId?: Prisma.IntFieldUpdateOperationsInput | number;
    stadiumId?: Prisma.IntFieldUpdateOperationsInput | number;
    mainRefereeName?: Prisma.StringFieldUpdateOperationsInput | string;
    linesmen1Name?: Prisma.StringFieldUpdateOperationsInput | string;
    linesmen2Name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    matchSeats?: Prisma.MatchSeatUncheckedUpdateManyWithoutMatchNestedInput;
};
export type MatchUncheckedUpdateManyWithoutAwayTeamInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    dateTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    homeTeamId?: Prisma.IntFieldUpdateOperationsInput | number;
    stadiumId?: Prisma.IntFieldUpdateOperationsInput | number;
    mainRefereeName?: Prisma.StringFieldUpdateOperationsInput | string;
    linesmen1Name?: Prisma.StringFieldUpdateOperationsInput | string;
    linesmen2Name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MatchCountOutputType = {
    matchSeats: number;
};
export type MatchCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    matchSeats?: boolean | MatchCountOutputTypeCountMatchSeatsArgs;
};
export type MatchCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MatchCountOutputTypeSelect<ExtArgs> | null;
};
export type MatchCountOutputTypeCountMatchSeatsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MatchSeatWhereInput;
};
export type MatchSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    dateTime?: boolean;
    homeTeamId?: boolean;
    awayTeamId?: boolean;
    stadiumId?: boolean;
    mainRefereeName?: boolean;
    linesmen1Name?: boolean;
    linesmen2Name?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    homeTeam?: boolean | Prisma.TeamDefaultArgs<ExtArgs>;
    awayTeam?: boolean | Prisma.TeamDefaultArgs<ExtArgs>;
    stadium?: boolean | Prisma.StadiumDefaultArgs<ExtArgs>;
    matchSeats?: boolean | Prisma.Match$matchSeatsArgs<ExtArgs>;
    _count?: boolean | Prisma.MatchCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["match"]>;
export type MatchSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    dateTime?: boolean;
    homeTeamId?: boolean;
    awayTeamId?: boolean;
    stadiumId?: boolean;
    mainRefereeName?: boolean;
    linesmen1Name?: boolean;
    linesmen2Name?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    homeTeam?: boolean | Prisma.TeamDefaultArgs<ExtArgs>;
    awayTeam?: boolean | Prisma.TeamDefaultArgs<ExtArgs>;
    stadium?: boolean | Prisma.StadiumDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["match"]>;
export type MatchSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    dateTime?: boolean;
    homeTeamId?: boolean;
    awayTeamId?: boolean;
    stadiumId?: boolean;
    mainRefereeName?: boolean;
    linesmen1Name?: boolean;
    linesmen2Name?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    homeTeam?: boolean | Prisma.TeamDefaultArgs<ExtArgs>;
    awayTeam?: boolean | Prisma.TeamDefaultArgs<ExtArgs>;
    stadium?: boolean | Prisma.StadiumDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["match"]>;
export type MatchSelectScalar = {
    id?: boolean;
    dateTime?: boolean;
    homeTeamId?: boolean;
    awayTeamId?: boolean;
    stadiumId?: boolean;
    mainRefereeName?: boolean;
    linesmen1Name?: boolean;
    linesmen2Name?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type MatchOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "dateTime" | "homeTeamId" | "awayTeamId" | "stadiumId" | "mainRefereeName" | "linesmen1Name" | "linesmen2Name" | "createdAt" | "updatedAt", ExtArgs["result"]["match"]>;
export type MatchInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    homeTeam?: boolean | Prisma.TeamDefaultArgs<ExtArgs>;
    awayTeam?: boolean | Prisma.TeamDefaultArgs<ExtArgs>;
    stadium?: boolean | Prisma.StadiumDefaultArgs<ExtArgs>;
    matchSeats?: boolean | Prisma.Match$matchSeatsArgs<ExtArgs>;
    _count?: boolean | Prisma.MatchCountOutputTypeDefaultArgs<ExtArgs>;
};
export type MatchIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    homeTeam?: boolean | Prisma.TeamDefaultArgs<ExtArgs>;
    awayTeam?: boolean | Prisma.TeamDefaultArgs<ExtArgs>;
    stadium?: boolean | Prisma.StadiumDefaultArgs<ExtArgs>;
};
export type MatchIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    homeTeam?: boolean | Prisma.TeamDefaultArgs<ExtArgs>;
    awayTeam?: boolean | Prisma.TeamDefaultArgs<ExtArgs>;
    stadium?: boolean | Prisma.StadiumDefaultArgs<ExtArgs>;
};
export type $MatchPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Match";
    objects: {
        homeTeam: Prisma.$TeamPayload<ExtArgs>;
        awayTeam: Prisma.$TeamPayload<ExtArgs>;
        stadium: Prisma.$StadiumPayload<ExtArgs>;
        matchSeats: Prisma.$MatchSeatPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        dateTime: Date;
        homeTeamId: number;
        awayTeamId: number;
        stadiumId: number;
        mainRefereeName: string;
        linesmen1Name: string;
        linesmen2Name: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["match"]>;
    composites: {};
};
export type MatchGetPayload<S extends boolean | null | undefined | MatchDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MatchPayload, S>;
export type MatchCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MatchFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MatchCountAggregateInputType | true;
};
export interface MatchDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Match'];
        meta: {
            name: 'Match';
        };
    };
    findUnique<T extends MatchFindUniqueArgs>(args: Prisma.SelectSubset<T, MatchFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MatchClient<runtime.Types.Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends MatchFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MatchFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MatchClient<runtime.Types.Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends MatchFindFirstArgs>(args?: Prisma.SelectSubset<T, MatchFindFirstArgs<ExtArgs>>): Prisma.Prisma__MatchClient<runtime.Types.Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends MatchFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MatchFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MatchClient<runtime.Types.Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends MatchFindManyArgs>(args?: Prisma.SelectSubset<T, MatchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends MatchCreateArgs>(args: Prisma.SelectSubset<T, MatchCreateArgs<ExtArgs>>): Prisma.Prisma__MatchClient<runtime.Types.Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends MatchCreateManyArgs>(args?: Prisma.SelectSubset<T, MatchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends MatchCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MatchCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends MatchDeleteArgs>(args: Prisma.SelectSubset<T, MatchDeleteArgs<ExtArgs>>): Prisma.Prisma__MatchClient<runtime.Types.Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends MatchUpdateArgs>(args: Prisma.SelectSubset<T, MatchUpdateArgs<ExtArgs>>): Prisma.Prisma__MatchClient<runtime.Types.Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends MatchDeleteManyArgs>(args?: Prisma.SelectSubset<T, MatchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends MatchUpdateManyArgs>(args: Prisma.SelectSubset<T, MatchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends MatchUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MatchUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends MatchUpsertArgs>(args: Prisma.SelectSubset<T, MatchUpsertArgs<ExtArgs>>): Prisma.Prisma__MatchClient<runtime.Types.Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends MatchCountArgs>(args?: Prisma.Subset<T, MatchCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MatchCountAggregateOutputType> : number>;
    aggregate<T extends MatchAggregateArgs>(args: Prisma.Subset<T, MatchAggregateArgs>): Prisma.PrismaPromise<GetMatchAggregateType<T>>;
    groupBy<T extends MatchGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MatchGroupByArgs['orderBy'];
    } : {
        orderBy?: MatchGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MatchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMatchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: MatchFieldRefs;
}
export interface Prisma__MatchClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    homeTeam<T extends Prisma.TeamDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TeamDefaultArgs<ExtArgs>>): Prisma.Prisma__TeamClient<runtime.Types.Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    awayTeam<T extends Prisma.TeamDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TeamDefaultArgs<ExtArgs>>): Prisma.Prisma__TeamClient<runtime.Types.Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    stadium<T extends Prisma.StadiumDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.StadiumDefaultArgs<ExtArgs>>): Prisma.Prisma__StadiumClient<runtime.Types.Result.GetResult<Prisma.$StadiumPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    matchSeats<T extends Prisma.Match$matchSeatsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Match$matchSeatsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MatchSeatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface MatchFieldRefs {
    readonly id: Prisma.FieldRef<"Match", 'Int'>;
    readonly dateTime: Prisma.FieldRef<"Match", 'DateTime'>;
    readonly homeTeamId: Prisma.FieldRef<"Match", 'Int'>;
    readonly awayTeamId: Prisma.FieldRef<"Match", 'Int'>;
    readonly stadiumId: Prisma.FieldRef<"Match", 'Int'>;
    readonly mainRefereeName: Prisma.FieldRef<"Match", 'String'>;
    readonly linesmen1Name: Prisma.FieldRef<"Match", 'String'>;
    readonly linesmen2Name: Prisma.FieldRef<"Match", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Match", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Match", 'DateTime'>;
}
export type MatchFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MatchSelect<ExtArgs> | null;
    omit?: Prisma.MatchOmit<ExtArgs> | null;
    include?: Prisma.MatchInclude<ExtArgs> | null;
    where: Prisma.MatchWhereUniqueInput;
};
export type MatchFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MatchSelect<ExtArgs> | null;
    omit?: Prisma.MatchOmit<ExtArgs> | null;
    include?: Prisma.MatchInclude<ExtArgs> | null;
    where: Prisma.MatchWhereUniqueInput;
};
export type MatchFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MatchSelect<ExtArgs> | null;
    omit?: Prisma.MatchOmit<ExtArgs> | null;
    include?: Prisma.MatchInclude<ExtArgs> | null;
    where?: Prisma.MatchWhereInput;
    orderBy?: Prisma.MatchOrderByWithRelationInput | Prisma.MatchOrderByWithRelationInput[];
    cursor?: Prisma.MatchWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MatchScalarFieldEnum | Prisma.MatchScalarFieldEnum[];
};
export type MatchFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MatchSelect<ExtArgs> | null;
    omit?: Prisma.MatchOmit<ExtArgs> | null;
    include?: Prisma.MatchInclude<ExtArgs> | null;
    where?: Prisma.MatchWhereInput;
    orderBy?: Prisma.MatchOrderByWithRelationInput | Prisma.MatchOrderByWithRelationInput[];
    cursor?: Prisma.MatchWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MatchScalarFieldEnum | Prisma.MatchScalarFieldEnum[];
};
export type MatchFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MatchSelect<ExtArgs> | null;
    omit?: Prisma.MatchOmit<ExtArgs> | null;
    include?: Prisma.MatchInclude<ExtArgs> | null;
    where?: Prisma.MatchWhereInput;
    orderBy?: Prisma.MatchOrderByWithRelationInput | Prisma.MatchOrderByWithRelationInput[];
    cursor?: Prisma.MatchWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MatchScalarFieldEnum | Prisma.MatchScalarFieldEnum[];
};
export type MatchCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MatchSelect<ExtArgs> | null;
    omit?: Prisma.MatchOmit<ExtArgs> | null;
    include?: Prisma.MatchInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MatchCreateInput, Prisma.MatchUncheckedCreateInput>;
};
export type MatchCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.MatchCreateManyInput | Prisma.MatchCreateManyInput[];
    skipDuplicates?: boolean;
};
export type MatchCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MatchSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MatchOmit<ExtArgs> | null;
    data: Prisma.MatchCreateManyInput | Prisma.MatchCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.MatchIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type MatchUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MatchSelect<ExtArgs> | null;
    omit?: Prisma.MatchOmit<ExtArgs> | null;
    include?: Prisma.MatchInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MatchUpdateInput, Prisma.MatchUncheckedUpdateInput>;
    where: Prisma.MatchWhereUniqueInput;
};
export type MatchUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.MatchUpdateManyMutationInput, Prisma.MatchUncheckedUpdateManyInput>;
    where?: Prisma.MatchWhereInput;
    limit?: number;
};
export type MatchUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MatchSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MatchOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MatchUpdateManyMutationInput, Prisma.MatchUncheckedUpdateManyInput>;
    where?: Prisma.MatchWhereInput;
    limit?: number;
    include?: Prisma.MatchIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type MatchUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MatchSelect<ExtArgs> | null;
    omit?: Prisma.MatchOmit<ExtArgs> | null;
    include?: Prisma.MatchInclude<ExtArgs> | null;
    where: Prisma.MatchWhereUniqueInput;
    create: Prisma.XOR<Prisma.MatchCreateInput, Prisma.MatchUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.MatchUpdateInput, Prisma.MatchUncheckedUpdateInput>;
};
export type MatchDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MatchSelect<ExtArgs> | null;
    omit?: Prisma.MatchOmit<ExtArgs> | null;
    include?: Prisma.MatchInclude<ExtArgs> | null;
    where: Prisma.MatchWhereUniqueInput;
};
export type MatchDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MatchWhereInput;
    limit?: number;
};
export type Match$matchSeatsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type MatchDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MatchSelect<ExtArgs> | null;
    omit?: Prisma.MatchOmit<ExtArgs> | null;
    include?: Prisma.MatchInclude<ExtArgs> | null;
};
export {};

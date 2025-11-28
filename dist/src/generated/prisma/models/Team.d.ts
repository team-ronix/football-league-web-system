import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type TeamModel = runtime.Types.Result.DefaultSelection<Prisma.$TeamPayload>;
export type AggregateTeam = {
    _count: TeamCountAggregateOutputType | null;
    _avg: TeamAvgAggregateOutputType | null;
    _sum: TeamSumAggregateOutputType | null;
    _min: TeamMinAggregateOutputType | null;
    _max: TeamMaxAggregateOutputType | null;
};
export type TeamAvgAggregateOutputType = {
    id: number | null;
};
export type TeamSumAggregateOutputType = {
    id: number | null;
};
export type TeamMinAggregateOutputType = {
    id: number | null;
    name: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type TeamMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type TeamCountAggregateOutputType = {
    id: number;
    name: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type TeamAvgAggregateInputType = {
    id?: true;
};
export type TeamSumAggregateInputType = {
    id?: true;
};
export type TeamMinAggregateInputType = {
    id?: true;
    name?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type TeamMaxAggregateInputType = {
    id?: true;
    name?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type TeamCountAggregateInputType = {
    id?: true;
    name?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type TeamAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TeamWhereInput;
    orderBy?: Prisma.TeamOrderByWithRelationInput | Prisma.TeamOrderByWithRelationInput[];
    cursor?: Prisma.TeamWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | TeamCountAggregateInputType;
    _avg?: TeamAvgAggregateInputType;
    _sum?: TeamSumAggregateInputType;
    _min?: TeamMinAggregateInputType;
    _max?: TeamMaxAggregateInputType;
};
export type GetTeamAggregateType<T extends TeamAggregateArgs> = {
    [P in keyof T & keyof AggregateTeam]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTeam[P]> : Prisma.GetScalarType<T[P], AggregateTeam[P]>;
};
export type TeamGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TeamWhereInput;
    orderBy?: Prisma.TeamOrderByWithAggregationInput | Prisma.TeamOrderByWithAggregationInput[];
    by: Prisma.TeamScalarFieldEnum[] | Prisma.TeamScalarFieldEnum;
    having?: Prisma.TeamScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TeamCountAggregateInputType | true;
    _avg?: TeamAvgAggregateInputType;
    _sum?: TeamSumAggregateInputType;
    _min?: TeamMinAggregateInputType;
    _max?: TeamMaxAggregateInputType;
};
export type TeamGroupByOutputType = {
    id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    _count: TeamCountAggregateOutputType | null;
    _avg: TeamAvgAggregateOutputType | null;
    _sum: TeamSumAggregateOutputType | null;
    _min: TeamMinAggregateOutputType | null;
    _max: TeamMaxAggregateOutputType | null;
};
type GetTeamGroupByPayload<T extends TeamGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TeamGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TeamGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TeamGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TeamGroupByOutputType[P]>;
}>>;
export type TeamWhereInput = {
    AND?: Prisma.TeamWhereInput | Prisma.TeamWhereInput[];
    OR?: Prisma.TeamWhereInput[];
    NOT?: Prisma.TeamWhereInput | Prisma.TeamWhereInput[];
    id?: Prisma.IntFilter<"Team"> | number;
    name?: Prisma.StringFilter<"Team"> | string;
    createdAt?: Prisma.DateTimeFilter<"Team"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Team"> | Date | string;
    homeMatches?: Prisma.MatchListRelationFilter;
    awayMatches?: Prisma.MatchListRelationFilter;
    preferredBy?: Prisma.UserListRelationFilter;
};
export type TeamOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    homeMatches?: Prisma.MatchOrderByRelationAggregateInput;
    awayMatches?: Prisma.MatchOrderByRelationAggregateInput;
    preferredBy?: Prisma.UserOrderByRelationAggregateInput;
};
export type TeamWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.TeamWhereInput | Prisma.TeamWhereInput[];
    OR?: Prisma.TeamWhereInput[];
    NOT?: Prisma.TeamWhereInput | Prisma.TeamWhereInput[];
    name?: Prisma.StringFilter<"Team"> | string;
    createdAt?: Prisma.DateTimeFilter<"Team"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Team"> | Date | string;
    homeMatches?: Prisma.MatchListRelationFilter;
    awayMatches?: Prisma.MatchListRelationFilter;
    preferredBy?: Prisma.UserListRelationFilter;
}, "id">;
export type TeamOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.TeamCountOrderByAggregateInput;
    _avg?: Prisma.TeamAvgOrderByAggregateInput;
    _max?: Prisma.TeamMaxOrderByAggregateInput;
    _min?: Prisma.TeamMinOrderByAggregateInput;
    _sum?: Prisma.TeamSumOrderByAggregateInput;
};
export type TeamScalarWhereWithAggregatesInput = {
    AND?: Prisma.TeamScalarWhereWithAggregatesInput | Prisma.TeamScalarWhereWithAggregatesInput[];
    OR?: Prisma.TeamScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TeamScalarWhereWithAggregatesInput | Prisma.TeamScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Team"> | number;
    name?: Prisma.StringWithAggregatesFilter<"Team"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Team"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Team"> | Date | string;
};
export type TeamCreateInput = {
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    homeMatches?: Prisma.MatchCreateNestedManyWithoutHomeTeamInput;
    awayMatches?: Prisma.MatchCreateNestedManyWithoutAwayTeamInput;
    preferredBy?: Prisma.UserCreateNestedManyWithoutPreferredTeamInput;
};
export type TeamUncheckedCreateInput = {
    id?: number;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    homeMatches?: Prisma.MatchUncheckedCreateNestedManyWithoutHomeTeamInput;
    awayMatches?: Prisma.MatchUncheckedCreateNestedManyWithoutAwayTeamInput;
    preferredBy?: Prisma.UserUncheckedCreateNestedManyWithoutPreferredTeamInput;
};
export type TeamUpdateInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    homeMatches?: Prisma.MatchUpdateManyWithoutHomeTeamNestedInput;
    awayMatches?: Prisma.MatchUpdateManyWithoutAwayTeamNestedInput;
    preferredBy?: Prisma.UserUpdateManyWithoutPreferredTeamNestedInput;
};
export type TeamUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    homeMatches?: Prisma.MatchUncheckedUpdateManyWithoutHomeTeamNestedInput;
    awayMatches?: Prisma.MatchUncheckedUpdateManyWithoutAwayTeamNestedInput;
    preferredBy?: Prisma.UserUncheckedUpdateManyWithoutPreferredTeamNestedInput;
};
export type TeamCreateManyInput = {
    id?: number;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TeamUpdateManyMutationInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TeamUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TeamCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TeamAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type TeamMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TeamMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TeamSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type TeamScalarRelationFilter = {
    is?: Prisma.TeamWhereInput;
    isNot?: Prisma.TeamWhereInput;
};
export type TeamNullableScalarRelationFilter = {
    is?: Prisma.TeamWhereInput | null;
    isNot?: Prisma.TeamWhereInput | null;
};
export type TeamCreateNestedOneWithoutHomeMatchesInput = {
    create?: Prisma.XOR<Prisma.TeamCreateWithoutHomeMatchesInput, Prisma.TeamUncheckedCreateWithoutHomeMatchesInput>;
    connectOrCreate?: Prisma.TeamCreateOrConnectWithoutHomeMatchesInput;
    connect?: Prisma.TeamWhereUniqueInput;
};
export type TeamCreateNestedOneWithoutAwayMatchesInput = {
    create?: Prisma.XOR<Prisma.TeamCreateWithoutAwayMatchesInput, Prisma.TeamUncheckedCreateWithoutAwayMatchesInput>;
    connectOrCreate?: Prisma.TeamCreateOrConnectWithoutAwayMatchesInput;
    connect?: Prisma.TeamWhereUniqueInput;
};
export type TeamUpdateOneRequiredWithoutHomeMatchesNestedInput = {
    create?: Prisma.XOR<Prisma.TeamCreateWithoutHomeMatchesInput, Prisma.TeamUncheckedCreateWithoutHomeMatchesInput>;
    connectOrCreate?: Prisma.TeamCreateOrConnectWithoutHomeMatchesInput;
    upsert?: Prisma.TeamUpsertWithoutHomeMatchesInput;
    connect?: Prisma.TeamWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TeamUpdateToOneWithWhereWithoutHomeMatchesInput, Prisma.TeamUpdateWithoutHomeMatchesInput>, Prisma.TeamUncheckedUpdateWithoutHomeMatchesInput>;
};
export type TeamUpdateOneRequiredWithoutAwayMatchesNestedInput = {
    create?: Prisma.XOR<Prisma.TeamCreateWithoutAwayMatchesInput, Prisma.TeamUncheckedCreateWithoutAwayMatchesInput>;
    connectOrCreate?: Prisma.TeamCreateOrConnectWithoutAwayMatchesInput;
    upsert?: Prisma.TeamUpsertWithoutAwayMatchesInput;
    connect?: Prisma.TeamWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TeamUpdateToOneWithWhereWithoutAwayMatchesInput, Prisma.TeamUpdateWithoutAwayMatchesInput>, Prisma.TeamUncheckedUpdateWithoutAwayMatchesInput>;
};
export type TeamCreateNestedOneWithoutPreferredByInput = {
    create?: Prisma.XOR<Prisma.TeamCreateWithoutPreferredByInput, Prisma.TeamUncheckedCreateWithoutPreferredByInput>;
    connectOrCreate?: Prisma.TeamCreateOrConnectWithoutPreferredByInput;
    connect?: Prisma.TeamWhereUniqueInput;
};
export type TeamUpdateOneWithoutPreferredByNestedInput = {
    create?: Prisma.XOR<Prisma.TeamCreateWithoutPreferredByInput, Prisma.TeamUncheckedCreateWithoutPreferredByInput>;
    connectOrCreate?: Prisma.TeamCreateOrConnectWithoutPreferredByInput;
    upsert?: Prisma.TeamUpsertWithoutPreferredByInput;
    disconnect?: Prisma.TeamWhereInput | boolean;
    delete?: Prisma.TeamWhereInput | boolean;
    connect?: Prisma.TeamWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TeamUpdateToOneWithWhereWithoutPreferredByInput, Prisma.TeamUpdateWithoutPreferredByInput>, Prisma.TeamUncheckedUpdateWithoutPreferredByInput>;
};
export type TeamCreateWithoutHomeMatchesInput = {
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    awayMatches?: Prisma.MatchCreateNestedManyWithoutAwayTeamInput;
    preferredBy?: Prisma.UserCreateNestedManyWithoutPreferredTeamInput;
};
export type TeamUncheckedCreateWithoutHomeMatchesInput = {
    id?: number;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    awayMatches?: Prisma.MatchUncheckedCreateNestedManyWithoutAwayTeamInput;
    preferredBy?: Prisma.UserUncheckedCreateNestedManyWithoutPreferredTeamInput;
};
export type TeamCreateOrConnectWithoutHomeMatchesInput = {
    where: Prisma.TeamWhereUniqueInput;
    create: Prisma.XOR<Prisma.TeamCreateWithoutHomeMatchesInput, Prisma.TeamUncheckedCreateWithoutHomeMatchesInput>;
};
export type TeamCreateWithoutAwayMatchesInput = {
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    homeMatches?: Prisma.MatchCreateNestedManyWithoutHomeTeamInput;
    preferredBy?: Prisma.UserCreateNestedManyWithoutPreferredTeamInput;
};
export type TeamUncheckedCreateWithoutAwayMatchesInput = {
    id?: number;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    homeMatches?: Prisma.MatchUncheckedCreateNestedManyWithoutHomeTeamInput;
    preferredBy?: Prisma.UserUncheckedCreateNestedManyWithoutPreferredTeamInput;
};
export type TeamCreateOrConnectWithoutAwayMatchesInput = {
    where: Prisma.TeamWhereUniqueInput;
    create: Prisma.XOR<Prisma.TeamCreateWithoutAwayMatchesInput, Prisma.TeamUncheckedCreateWithoutAwayMatchesInput>;
};
export type TeamUpsertWithoutHomeMatchesInput = {
    update: Prisma.XOR<Prisma.TeamUpdateWithoutHomeMatchesInput, Prisma.TeamUncheckedUpdateWithoutHomeMatchesInput>;
    create: Prisma.XOR<Prisma.TeamCreateWithoutHomeMatchesInput, Prisma.TeamUncheckedCreateWithoutHomeMatchesInput>;
    where?: Prisma.TeamWhereInput;
};
export type TeamUpdateToOneWithWhereWithoutHomeMatchesInput = {
    where?: Prisma.TeamWhereInput;
    data: Prisma.XOR<Prisma.TeamUpdateWithoutHomeMatchesInput, Prisma.TeamUncheckedUpdateWithoutHomeMatchesInput>;
};
export type TeamUpdateWithoutHomeMatchesInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    awayMatches?: Prisma.MatchUpdateManyWithoutAwayTeamNestedInput;
    preferredBy?: Prisma.UserUpdateManyWithoutPreferredTeamNestedInput;
};
export type TeamUncheckedUpdateWithoutHomeMatchesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    awayMatches?: Prisma.MatchUncheckedUpdateManyWithoutAwayTeamNestedInput;
    preferredBy?: Prisma.UserUncheckedUpdateManyWithoutPreferredTeamNestedInput;
};
export type TeamUpsertWithoutAwayMatchesInput = {
    update: Prisma.XOR<Prisma.TeamUpdateWithoutAwayMatchesInput, Prisma.TeamUncheckedUpdateWithoutAwayMatchesInput>;
    create: Prisma.XOR<Prisma.TeamCreateWithoutAwayMatchesInput, Prisma.TeamUncheckedCreateWithoutAwayMatchesInput>;
    where?: Prisma.TeamWhereInput;
};
export type TeamUpdateToOneWithWhereWithoutAwayMatchesInput = {
    where?: Prisma.TeamWhereInput;
    data: Prisma.XOR<Prisma.TeamUpdateWithoutAwayMatchesInput, Prisma.TeamUncheckedUpdateWithoutAwayMatchesInput>;
};
export type TeamUpdateWithoutAwayMatchesInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    homeMatches?: Prisma.MatchUpdateManyWithoutHomeTeamNestedInput;
    preferredBy?: Prisma.UserUpdateManyWithoutPreferredTeamNestedInput;
};
export type TeamUncheckedUpdateWithoutAwayMatchesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    homeMatches?: Prisma.MatchUncheckedUpdateManyWithoutHomeTeamNestedInput;
    preferredBy?: Prisma.UserUncheckedUpdateManyWithoutPreferredTeamNestedInput;
};
export type TeamCreateWithoutPreferredByInput = {
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    homeMatches?: Prisma.MatchCreateNestedManyWithoutHomeTeamInput;
    awayMatches?: Prisma.MatchCreateNestedManyWithoutAwayTeamInput;
};
export type TeamUncheckedCreateWithoutPreferredByInput = {
    id?: number;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    homeMatches?: Prisma.MatchUncheckedCreateNestedManyWithoutHomeTeamInput;
    awayMatches?: Prisma.MatchUncheckedCreateNestedManyWithoutAwayTeamInput;
};
export type TeamCreateOrConnectWithoutPreferredByInput = {
    where: Prisma.TeamWhereUniqueInput;
    create: Prisma.XOR<Prisma.TeamCreateWithoutPreferredByInput, Prisma.TeamUncheckedCreateWithoutPreferredByInput>;
};
export type TeamUpsertWithoutPreferredByInput = {
    update: Prisma.XOR<Prisma.TeamUpdateWithoutPreferredByInput, Prisma.TeamUncheckedUpdateWithoutPreferredByInput>;
    create: Prisma.XOR<Prisma.TeamCreateWithoutPreferredByInput, Prisma.TeamUncheckedCreateWithoutPreferredByInput>;
    where?: Prisma.TeamWhereInput;
};
export type TeamUpdateToOneWithWhereWithoutPreferredByInput = {
    where?: Prisma.TeamWhereInput;
    data: Prisma.XOR<Prisma.TeamUpdateWithoutPreferredByInput, Prisma.TeamUncheckedUpdateWithoutPreferredByInput>;
};
export type TeamUpdateWithoutPreferredByInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    homeMatches?: Prisma.MatchUpdateManyWithoutHomeTeamNestedInput;
    awayMatches?: Prisma.MatchUpdateManyWithoutAwayTeamNestedInput;
};
export type TeamUncheckedUpdateWithoutPreferredByInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    homeMatches?: Prisma.MatchUncheckedUpdateManyWithoutHomeTeamNestedInput;
    awayMatches?: Prisma.MatchUncheckedUpdateManyWithoutAwayTeamNestedInput;
};
export type TeamCountOutputType = {
    homeMatches: number;
    awayMatches: number;
    preferredBy: number;
};
export type TeamCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    homeMatches?: boolean | TeamCountOutputTypeCountHomeMatchesArgs;
    awayMatches?: boolean | TeamCountOutputTypeCountAwayMatchesArgs;
    preferredBy?: boolean | TeamCountOutputTypeCountPreferredByArgs;
};
export type TeamCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TeamCountOutputTypeSelect<ExtArgs> | null;
};
export type TeamCountOutputTypeCountHomeMatchesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MatchWhereInput;
};
export type TeamCountOutputTypeCountAwayMatchesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MatchWhereInput;
};
export type TeamCountOutputTypeCountPreferredByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
};
export type TeamSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    homeMatches?: boolean | Prisma.Team$homeMatchesArgs<ExtArgs>;
    awayMatches?: boolean | Prisma.Team$awayMatchesArgs<ExtArgs>;
    preferredBy?: boolean | Prisma.Team$preferredByArgs<ExtArgs>;
    _count?: boolean | Prisma.TeamCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["team"]>;
export type TeamSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["team"]>;
export type TeamSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["team"]>;
export type TeamSelectScalar = {
    id?: boolean;
    name?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type TeamOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["team"]>;
export type TeamInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    homeMatches?: boolean | Prisma.Team$homeMatchesArgs<ExtArgs>;
    awayMatches?: boolean | Prisma.Team$awayMatchesArgs<ExtArgs>;
    preferredBy?: boolean | Prisma.Team$preferredByArgs<ExtArgs>;
    _count?: boolean | Prisma.TeamCountOutputTypeDefaultArgs<ExtArgs>;
};
export type TeamIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type TeamIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $TeamPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Team";
    objects: {
        homeMatches: Prisma.$MatchPayload<ExtArgs>[];
        awayMatches: Prisma.$MatchPayload<ExtArgs>[];
        preferredBy: Prisma.$UserPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["team"]>;
    composites: {};
};
export type TeamGetPayload<S extends boolean | null | undefined | TeamDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TeamPayload, S>;
export type TeamCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TeamFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TeamCountAggregateInputType | true;
};
export interface TeamDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Team'];
        meta: {
            name: 'Team';
        };
    };
    findUnique<T extends TeamFindUniqueArgs>(args: Prisma.SelectSubset<T, TeamFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TeamClient<runtime.Types.Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends TeamFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TeamFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TeamClient<runtime.Types.Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends TeamFindFirstArgs>(args?: Prisma.SelectSubset<T, TeamFindFirstArgs<ExtArgs>>): Prisma.Prisma__TeamClient<runtime.Types.Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends TeamFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TeamFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TeamClient<runtime.Types.Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends TeamFindManyArgs>(args?: Prisma.SelectSubset<T, TeamFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends TeamCreateArgs>(args: Prisma.SelectSubset<T, TeamCreateArgs<ExtArgs>>): Prisma.Prisma__TeamClient<runtime.Types.Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends TeamCreateManyArgs>(args?: Prisma.SelectSubset<T, TeamCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends TeamCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TeamCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends TeamDeleteArgs>(args: Prisma.SelectSubset<T, TeamDeleteArgs<ExtArgs>>): Prisma.Prisma__TeamClient<runtime.Types.Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends TeamUpdateArgs>(args: Prisma.SelectSubset<T, TeamUpdateArgs<ExtArgs>>): Prisma.Prisma__TeamClient<runtime.Types.Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends TeamDeleteManyArgs>(args?: Prisma.SelectSubset<T, TeamDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends TeamUpdateManyArgs>(args: Prisma.SelectSubset<T, TeamUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends TeamUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TeamUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends TeamUpsertArgs>(args: Prisma.SelectSubset<T, TeamUpsertArgs<ExtArgs>>): Prisma.Prisma__TeamClient<runtime.Types.Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends TeamCountArgs>(args?: Prisma.Subset<T, TeamCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TeamCountAggregateOutputType> : number>;
    aggregate<T extends TeamAggregateArgs>(args: Prisma.Subset<T, TeamAggregateArgs>): Prisma.PrismaPromise<GetTeamAggregateType<T>>;
    groupBy<T extends TeamGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TeamGroupByArgs['orderBy'];
    } : {
        orderBy?: TeamGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TeamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: TeamFieldRefs;
}
export interface Prisma__TeamClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    homeMatches<T extends Prisma.Team$homeMatchesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Team$homeMatchesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    awayMatches<T extends Prisma.Team$awayMatchesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Team$awayMatchesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    preferredBy<T extends Prisma.Team$preferredByArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Team$preferredByArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface TeamFieldRefs {
    readonly id: Prisma.FieldRef<"Team", 'Int'>;
    readonly name: Prisma.FieldRef<"Team", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Team", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Team", 'DateTime'>;
}
export type TeamFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TeamSelect<ExtArgs> | null;
    omit?: Prisma.TeamOmit<ExtArgs> | null;
    include?: Prisma.TeamInclude<ExtArgs> | null;
    where: Prisma.TeamWhereUniqueInput;
};
export type TeamFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TeamSelect<ExtArgs> | null;
    omit?: Prisma.TeamOmit<ExtArgs> | null;
    include?: Prisma.TeamInclude<ExtArgs> | null;
    where: Prisma.TeamWhereUniqueInput;
};
export type TeamFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TeamSelect<ExtArgs> | null;
    omit?: Prisma.TeamOmit<ExtArgs> | null;
    include?: Prisma.TeamInclude<ExtArgs> | null;
    where?: Prisma.TeamWhereInput;
    orderBy?: Prisma.TeamOrderByWithRelationInput | Prisma.TeamOrderByWithRelationInput[];
    cursor?: Prisma.TeamWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TeamScalarFieldEnum | Prisma.TeamScalarFieldEnum[];
};
export type TeamFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TeamSelect<ExtArgs> | null;
    omit?: Prisma.TeamOmit<ExtArgs> | null;
    include?: Prisma.TeamInclude<ExtArgs> | null;
    where?: Prisma.TeamWhereInput;
    orderBy?: Prisma.TeamOrderByWithRelationInput | Prisma.TeamOrderByWithRelationInput[];
    cursor?: Prisma.TeamWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TeamScalarFieldEnum | Prisma.TeamScalarFieldEnum[];
};
export type TeamFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TeamSelect<ExtArgs> | null;
    omit?: Prisma.TeamOmit<ExtArgs> | null;
    include?: Prisma.TeamInclude<ExtArgs> | null;
    where?: Prisma.TeamWhereInput;
    orderBy?: Prisma.TeamOrderByWithRelationInput | Prisma.TeamOrderByWithRelationInput[];
    cursor?: Prisma.TeamWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TeamScalarFieldEnum | Prisma.TeamScalarFieldEnum[];
};
export type TeamCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TeamSelect<ExtArgs> | null;
    omit?: Prisma.TeamOmit<ExtArgs> | null;
    include?: Prisma.TeamInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TeamCreateInput, Prisma.TeamUncheckedCreateInput>;
};
export type TeamCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.TeamCreateManyInput | Prisma.TeamCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TeamCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TeamSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TeamOmit<ExtArgs> | null;
    data: Prisma.TeamCreateManyInput | Prisma.TeamCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TeamUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TeamSelect<ExtArgs> | null;
    omit?: Prisma.TeamOmit<ExtArgs> | null;
    include?: Prisma.TeamInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TeamUpdateInput, Prisma.TeamUncheckedUpdateInput>;
    where: Prisma.TeamWhereUniqueInput;
};
export type TeamUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.TeamUpdateManyMutationInput, Prisma.TeamUncheckedUpdateManyInput>;
    where?: Prisma.TeamWhereInput;
    limit?: number;
};
export type TeamUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TeamSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TeamOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TeamUpdateManyMutationInput, Prisma.TeamUncheckedUpdateManyInput>;
    where?: Prisma.TeamWhereInput;
    limit?: number;
};
export type TeamUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TeamSelect<ExtArgs> | null;
    omit?: Prisma.TeamOmit<ExtArgs> | null;
    include?: Prisma.TeamInclude<ExtArgs> | null;
    where: Prisma.TeamWhereUniqueInput;
    create: Prisma.XOR<Prisma.TeamCreateInput, Prisma.TeamUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.TeamUpdateInput, Prisma.TeamUncheckedUpdateInput>;
};
export type TeamDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TeamSelect<ExtArgs> | null;
    omit?: Prisma.TeamOmit<ExtArgs> | null;
    include?: Prisma.TeamInclude<ExtArgs> | null;
    where: Prisma.TeamWhereUniqueInput;
};
export type TeamDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TeamWhereInput;
    limit?: number;
};
export type Team$homeMatchesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Team$awayMatchesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Team$preferredByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type TeamDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TeamSelect<ExtArgs> | null;
    omit?: Prisma.TeamOmit<ExtArgs> | null;
    include?: Prisma.TeamInclude<ExtArgs> | null;
};
export {};

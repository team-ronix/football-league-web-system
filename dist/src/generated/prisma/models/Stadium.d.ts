import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type StadiumModel = runtime.Types.Result.DefaultSelection<Prisma.$StadiumPayload>;
export type AggregateStadium = {
    _count: StadiumCountAggregateOutputType | null;
    _avg: StadiumAvgAggregateOutputType | null;
    _sum: StadiumSumAggregateOutputType | null;
    _min: StadiumMinAggregateOutputType | null;
    _max: StadiumMaxAggregateOutputType | null;
};
export type StadiumAvgAggregateOutputType = {
    id: number | null;
    noOfRows: number | null;
    seatsPerRow: number | null;
};
export type StadiumSumAggregateOutputType = {
    id: number | null;
    noOfRows: number | null;
    seatsPerRow: number | null;
};
export type StadiumMinAggregateOutputType = {
    id: number | null;
    name: string | null;
    noOfRows: number | null;
    seatsPerRow: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type StadiumMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
    noOfRows: number | null;
    seatsPerRow: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type StadiumCountAggregateOutputType = {
    id: number;
    name: number;
    noOfRows: number;
    seatsPerRow: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type StadiumAvgAggregateInputType = {
    id?: true;
    noOfRows?: true;
    seatsPerRow?: true;
};
export type StadiumSumAggregateInputType = {
    id?: true;
    noOfRows?: true;
    seatsPerRow?: true;
};
export type StadiumMinAggregateInputType = {
    id?: true;
    name?: true;
    noOfRows?: true;
    seatsPerRow?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type StadiumMaxAggregateInputType = {
    id?: true;
    name?: true;
    noOfRows?: true;
    seatsPerRow?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type StadiumCountAggregateInputType = {
    id?: true;
    name?: true;
    noOfRows?: true;
    seatsPerRow?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type StadiumAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StadiumWhereInput;
    orderBy?: Prisma.StadiumOrderByWithRelationInput | Prisma.StadiumOrderByWithRelationInput[];
    cursor?: Prisma.StadiumWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | StadiumCountAggregateInputType;
    _avg?: StadiumAvgAggregateInputType;
    _sum?: StadiumSumAggregateInputType;
    _min?: StadiumMinAggregateInputType;
    _max?: StadiumMaxAggregateInputType;
};
export type GetStadiumAggregateType<T extends StadiumAggregateArgs> = {
    [P in keyof T & keyof AggregateStadium]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateStadium[P]> : Prisma.GetScalarType<T[P], AggregateStadium[P]>;
};
export type StadiumGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StadiumWhereInput;
    orderBy?: Prisma.StadiumOrderByWithAggregationInput | Prisma.StadiumOrderByWithAggregationInput[];
    by: Prisma.StadiumScalarFieldEnum[] | Prisma.StadiumScalarFieldEnum;
    having?: Prisma.StadiumScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: StadiumCountAggregateInputType | true;
    _avg?: StadiumAvgAggregateInputType;
    _sum?: StadiumSumAggregateInputType;
    _min?: StadiumMinAggregateInputType;
    _max?: StadiumMaxAggregateInputType;
};
export type StadiumGroupByOutputType = {
    id: number;
    name: string;
    noOfRows: number;
    seatsPerRow: number;
    createdAt: Date;
    updatedAt: Date;
    _count: StadiumCountAggregateOutputType | null;
    _avg: StadiumAvgAggregateOutputType | null;
    _sum: StadiumSumAggregateOutputType | null;
    _min: StadiumMinAggregateOutputType | null;
    _max: StadiumMaxAggregateOutputType | null;
};
type GetStadiumGroupByPayload<T extends StadiumGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<StadiumGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof StadiumGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], StadiumGroupByOutputType[P]> : Prisma.GetScalarType<T[P], StadiumGroupByOutputType[P]>;
}>>;
export type StadiumWhereInput = {
    AND?: Prisma.StadiumWhereInput | Prisma.StadiumWhereInput[];
    OR?: Prisma.StadiumWhereInput[];
    NOT?: Prisma.StadiumWhereInput | Prisma.StadiumWhereInput[];
    id?: Prisma.IntFilter<"Stadium"> | number;
    name?: Prisma.StringFilter<"Stadium"> | string;
    noOfRows?: Prisma.IntFilter<"Stadium"> | number;
    seatsPerRow?: Prisma.IntFilter<"Stadium"> | number;
    createdAt?: Prisma.DateTimeFilter<"Stadium"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Stadium"> | Date | string;
    matches?: Prisma.MatchListRelationFilter;
};
export type StadiumOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    noOfRows?: Prisma.SortOrder;
    seatsPerRow?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    matches?: Prisma.MatchOrderByRelationAggregateInput;
};
export type StadiumWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.StadiumWhereInput | Prisma.StadiumWhereInput[];
    OR?: Prisma.StadiumWhereInput[];
    NOT?: Prisma.StadiumWhereInput | Prisma.StadiumWhereInput[];
    name?: Prisma.StringFilter<"Stadium"> | string;
    noOfRows?: Prisma.IntFilter<"Stadium"> | number;
    seatsPerRow?: Prisma.IntFilter<"Stadium"> | number;
    createdAt?: Prisma.DateTimeFilter<"Stadium"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Stadium"> | Date | string;
    matches?: Prisma.MatchListRelationFilter;
}, "id">;
export type StadiumOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    noOfRows?: Prisma.SortOrder;
    seatsPerRow?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.StadiumCountOrderByAggregateInput;
    _avg?: Prisma.StadiumAvgOrderByAggregateInput;
    _max?: Prisma.StadiumMaxOrderByAggregateInput;
    _min?: Prisma.StadiumMinOrderByAggregateInput;
    _sum?: Prisma.StadiumSumOrderByAggregateInput;
};
export type StadiumScalarWhereWithAggregatesInput = {
    AND?: Prisma.StadiumScalarWhereWithAggregatesInput | Prisma.StadiumScalarWhereWithAggregatesInput[];
    OR?: Prisma.StadiumScalarWhereWithAggregatesInput[];
    NOT?: Prisma.StadiumScalarWhereWithAggregatesInput | Prisma.StadiumScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Stadium"> | number;
    name?: Prisma.StringWithAggregatesFilter<"Stadium"> | string;
    noOfRows?: Prisma.IntWithAggregatesFilter<"Stadium"> | number;
    seatsPerRow?: Prisma.IntWithAggregatesFilter<"Stadium"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Stadium"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Stadium"> | Date | string;
};
export type StadiumCreateInput = {
    name: string;
    noOfRows: number;
    seatsPerRow: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    matches?: Prisma.MatchCreateNestedManyWithoutStadiumInput;
};
export type StadiumUncheckedCreateInput = {
    id?: number;
    name: string;
    noOfRows: number;
    seatsPerRow: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    matches?: Prisma.MatchUncheckedCreateNestedManyWithoutStadiumInput;
};
export type StadiumUpdateInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    noOfRows?: Prisma.IntFieldUpdateOperationsInput | number;
    seatsPerRow?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    matches?: Prisma.MatchUpdateManyWithoutStadiumNestedInput;
};
export type StadiumUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    noOfRows?: Prisma.IntFieldUpdateOperationsInput | number;
    seatsPerRow?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    matches?: Prisma.MatchUncheckedUpdateManyWithoutStadiumNestedInput;
};
export type StadiumCreateManyInput = {
    id?: number;
    name: string;
    noOfRows: number;
    seatsPerRow: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type StadiumUpdateManyMutationInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    noOfRows?: Prisma.IntFieldUpdateOperationsInput | number;
    seatsPerRow?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StadiumUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    noOfRows?: Prisma.IntFieldUpdateOperationsInput | number;
    seatsPerRow?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StadiumCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    noOfRows?: Prisma.SortOrder;
    seatsPerRow?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type StadiumAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    noOfRows?: Prisma.SortOrder;
    seatsPerRow?: Prisma.SortOrder;
};
export type StadiumMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    noOfRows?: Prisma.SortOrder;
    seatsPerRow?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type StadiumMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    noOfRows?: Prisma.SortOrder;
    seatsPerRow?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type StadiumSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    noOfRows?: Prisma.SortOrder;
    seatsPerRow?: Prisma.SortOrder;
};
export type StadiumScalarRelationFilter = {
    is?: Prisma.StadiumWhereInput;
    isNot?: Prisma.StadiumWhereInput;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type StadiumCreateNestedOneWithoutMatchesInput = {
    create?: Prisma.XOR<Prisma.StadiumCreateWithoutMatchesInput, Prisma.StadiumUncheckedCreateWithoutMatchesInput>;
    connectOrCreate?: Prisma.StadiumCreateOrConnectWithoutMatchesInput;
    connect?: Prisma.StadiumWhereUniqueInput;
};
export type StadiumUpdateOneRequiredWithoutMatchesNestedInput = {
    create?: Prisma.XOR<Prisma.StadiumCreateWithoutMatchesInput, Prisma.StadiumUncheckedCreateWithoutMatchesInput>;
    connectOrCreate?: Prisma.StadiumCreateOrConnectWithoutMatchesInput;
    upsert?: Prisma.StadiumUpsertWithoutMatchesInput;
    connect?: Prisma.StadiumWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.StadiumUpdateToOneWithWhereWithoutMatchesInput, Prisma.StadiumUpdateWithoutMatchesInput>, Prisma.StadiumUncheckedUpdateWithoutMatchesInput>;
};
export type StadiumCreateWithoutMatchesInput = {
    name: string;
    noOfRows: number;
    seatsPerRow: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type StadiumUncheckedCreateWithoutMatchesInput = {
    id?: number;
    name: string;
    noOfRows: number;
    seatsPerRow: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type StadiumCreateOrConnectWithoutMatchesInput = {
    where: Prisma.StadiumWhereUniqueInput;
    create: Prisma.XOR<Prisma.StadiumCreateWithoutMatchesInput, Prisma.StadiumUncheckedCreateWithoutMatchesInput>;
};
export type StadiumUpsertWithoutMatchesInput = {
    update: Prisma.XOR<Prisma.StadiumUpdateWithoutMatchesInput, Prisma.StadiumUncheckedUpdateWithoutMatchesInput>;
    create: Prisma.XOR<Prisma.StadiumCreateWithoutMatchesInput, Prisma.StadiumUncheckedCreateWithoutMatchesInput>;
    where?: Prisma.StadiumWhereInput;
};
export type StadiumUpdateToOneWithWhereWithoutMatchesInput = {
    where?: Prisma.StadiumWhereInput;
    data: Prisma.XOR<Prisma.StadiumUpdateWithoutMatchesInput, Prisma.StadiumUncheckedUpdateWithoutMatchesInput>;
};
export type StadiumUpdateWithoutMatchesInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    noOfRows?: Prisma.IntFieldUpdateOperationsInput | number;
    seatsPerRow?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StadiumUncheckedUpdateWithoutMatchesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    noOfRows?: Prisma.IntFieldUpdateOperationsInput | number;
    seatsPerRow?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StadiumCountOutputType = {
    matches: number;
};
export type StadiumCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    matches?: boolean | StadiumCountOutputTypeCountMatchesArgs;
};
export type StadiumCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StadiumCountOutputTypeSelect<ExtArgs> | null;
};
export type StadiumCountOutputTypeCountMatchesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MatchWhereInput;
};
export type StadiumSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    noOfRows?: boolean;
    seatsPerRow?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    matches?: boolean | Prisma.Stadium$matchesArgs<ExtArgs>;
    _count?: boolean | Prisma.StadiumCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["stadium"]>;
export type StadiumSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    noOfRows?: boolean;
    seatsPerRow?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["stadium"]>;
export type StadiumSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    noOfRows?: boolean;
    seatsPerRow?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["stadium"]>;
export type StadiumSelectScalar = {
    id?: boolean;
    name?: boolean;
    noOfRows?: boolean;
    seatsPerRow?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type StadiumOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "noOfRows" | "seatsPerRow" | "createdAt" | "updatedAt", ExtArgs["result"]["stadium"]>;
export type StadiumInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    matches?: boolean | Prisma.Stadium$matchesArgs<ExtArgs>;
    _count?: boolean | Prisma.StadiumCountOutputTypeDefaultArgs<ExtArgs>;
};
export type StadiumIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type StadiumIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $StadiumPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Stadium";
    objects: {
        matches: Prisma.$MatchPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        name: string;
        noOfRows: number;
        seatsPerRow: number;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["stadium"]>;
    composites: {};
};
export type StadiumGetPayload<S extends boolean | null | undefined | StadiumDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$StadiumPayload, S>;
export type StadiumCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<StadiumFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: StadiumCountAggregateInputType | true;
};
export interface StadiumDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Stadium'];
        meta: {
            name: 'Stadium';
        };
    };
    findUnique<T extends StadiumFindUniqueArgs>(args: Prisma.SelectSubset<T, StadiumFindUniqueArgs<ExtArgs>>): Prisma.Prisma__StadiumClient<runtime.Types.Result.GetResult<Prisma.$StadiumPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends StadiumFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, StadiumFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__StadiumClient<runtime.Types.Result.GetResult<Prisma.$StadiumPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends StadiumFindFirstArgs>(args?: Prisma.SelectSubset<T, StadiumFindFirstArgs<ExtArgs>>): Prisma.Prisma__StadiumClient<runtime.Types.Result.GetResult<Prisma.$StadiumPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends StadiumFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, StadiumFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__StadiumClient<runtime.Types.Result.GetResult<Prisma.$StadiumPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends StadiumFindManyArgs>(args?: Prisma.SelectSubset<T, StadiumFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StadiumPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends StadiumCreateArgs>(args: Prisma.SelectSubset<T, StadiumCreateArgs<ExtArgs>>): Prisma.Prisma__StadiumClient<runtime.Types.Result.GetResult<Prisma.$StadiumPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends StadiumCreateManyArgs>(args?: Prisma.SelectSubset<T, StadiumCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends StadiumCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, StadiumCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StadiumPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends StadiumDeleteArgs>(args: Prisma.SelectSubset<T, StadiumDeleteArgs<ExtArgs>>): Prisma.Prisma__StadiumClient<runtime.Types.Result.GetResult<Prisma.$StadiumPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends StadiumUpdateArgs>(args: Prisma.SelectSubset<T, StadiumUpdateArgs<ExtArgs>>): Prisma.Prisma__StadiumClient<runtime.Types.Result.GetResult<Prisma.$StadiumPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends StadiumDeleteManyArgs>(args?: Prisma.SelectSubset<T, StadiumDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends StadiumUpdateManyArgs>(args: Prisma.SelectSubset<T, StadiumUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends StadiumUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, StadiumUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StadiumPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends StadiumUpsertArgs>(args: Prisma.SelectSubset<T, StadiumUpsertArgs<ExtArgs>>): Prisma.Prisma__StadiumClient<runtime.Types.Result.GetResult<Prisma.$StadiumPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends StadiumCountArgs>(args?: Prisma.Subset<T, StadiumCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], StadiumCountAggregateOutputType> : number>;
    aggregate<T extends StadiumAggregateArgs>(args: Prisma.Subset<T, StadiumAggregateArgs>): Prisma.PrismaPromise<GetStadiumAggregateType<T>>;
    groupBy<T extends StadiumGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: StadiumGroupByArgs['orderBy'];
    } : {
        orderBy?: StadiumGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, StadiumGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStadiumGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: StadiumFieldRefs;
}
export interface Prisma__StadiumClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    matches<T extends Prisma.Stadium$matchesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Stadium$matchesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface StadiumFieldRefs {
    readonly id: Prisma.FieldRef<"Stadium", 'Int'>;
    readonly name: Prisma.FieldRef<"Stadium", 'String'>;
    readonly noOfRows: Prisma.FieldRef<"Stadium", 'Int'>;
    readonly seatsPerRow: Prisma.FieldRef<"Stadium", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"Stadium", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Stadium", 'DateTime'>;
}
export type StadiumFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StadiumSelect<ExtArgs> | null;
    omit?: Prisma.StadiumOmit<ExtArgs> | null;
    include?: Prisma.StadiumInclude<ExtArgs> | null;
    where: Prisma.StadiumWhereUniqueInput;
};
export type StadiumFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StadiumSelect<ExtArgs> | null;
    omit?: Prisma.StadiumOmit<ExtArgs> | null;
    include?: Prisma.StadiumInclude<ExtArgs> | null;
    where: Prisma.StadiumWhereUniqueInput;
};
export type StadiumFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StadiumSelect<ExtArgs> | null;
    omit?: Prisma.StadiumOmit<ExtArgs> | null;
    include?: Prisma.StadiumInclude<ExtArgs> | null;
    where?: Prisma.StadiumWhereInput;
    orderBy?: Prisma.StadiumOrderByWithRelationInput | Prisma.StadiumOrderByWithRelationInput[];
    cursor?: Prisma.StadiumWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StadiumScalarFieldEnum | Prisma.StadiumScalarFieldEnum[];
};
export type StadiumFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StadiumSelect<ExtArgs> | null;
    omit?: Prisma.StadiumOmit<ExtArgs> | null;
    include?: Prisma.StadiumInclude<ExtArgs> | null;
    where?: Prisma.StadiumWhereInput;
    orderBy?: Prisma.StadiumOrderByWithRelationInput | Prisma.StadiumOrderByWithRelationInput[];
    cursor?: Prisma.StadiumWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StadiumScalarFieldEnum | Prisma.StadiumScalarFieldEnum[];
};
export type StadiumFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StadiumSelect<ExtArgs> | null;
    omit?: Prisma.StadiumOmit<ExtArgs> | null;
    include?: Prisma.StadiumInclude<ExtArgs> | null;
    where?: Prisma.StadiumWhereInput;
    orderBy?: Prisma.StadiumOrderByWithRelationInput | Prisma.StadiumOrderByWithRelationInput[];
    cursor?: Prisma.StadiumWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StadiumScalarFieldEnum | Prisma.StadiumScalarFieldEnum[];
};
export type StadiumCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StadiumSelect<ExtArgs> | null;
    omit?: Prisma.StadiumOmit<ExtArgs> | null;
    include?: Prisma.StadiumInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StadiumCreateInput, Prisma.StadiumUncheckedCreateInput>;
};
export type StadiumCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.StadiumCreateManyInput | Prisma.StadiumCreateManyInput[];
    skipDuplicates?: boolean;
};
export type StadiumCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StadiumSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.StadiumOmit<ExtArgs> | null;
    data: Prisma.StadiumCreateManyInput | Prisma.StadiumCreateManyInput[];
    skipDuplicates?: boolean;
};
export type StadiumUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StadiumSelect<ExtArgs> | null;
    omit?: Prisma.StadiumOmit<ExtArgs> | null;
    include?: Prisma.StadiumInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StadiumUpdateInput, Prisma.StadiumUncheckedUpdateInput>;
    where: Prisma.StadiumWhereUniqueInput;
};
export type StadiumUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.StadiumUpdateManyMutationInput, Prisma.StadiumUncheckedUpdateManyInput>;
    where?: Prisma.StadiumWhereInput;
    limit?: number;
};
export type StadiumUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StadiumSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.StadiumOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StadiumUpdateManyMutationInput, Prisma.StadiumUncheckedUpdateManyInput>;
    where?: Prisma.StadiumWhereInput;
    limit?: number;
};
export type StadiumUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StadiumSelect<ExtArgs> | null;
    omit?: Prisma.StadiumOmit<ExtArgs> | null;
    include?: Prisma.StadiumInclude<ExtArgs> | null;
    where: Prisma.StadiumWhereUniqueInput;
    create: Prisma.XOR<Prisma.StadiumCreateInput, Prisma.StadiumUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.StadiumUpdateInput, Prisma.StadiumUncheckedUpdateInput>;
};
export type StadiumDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StadiumSelect<ExtArgs> | null;
    omit?: Prisma.StadiumOmit<ExtArgs> | null;
    include?: Prisma.StadiumInclude<ExtArgs> | null;
    where: Prisma.StadiumWhereUniqueInput;
};
export type StadiumDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StadiumWhereInput;
    limit?: number;
};
export type Stadium$matchesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type StadiumDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StadiumSelect<ExtArgs> | null;
    omit?: Prisma.StadiumOmit<ExtArgs> | null;
    include?: Prisma.StadiumInclude<ExtArgs> | null;
};
export {};

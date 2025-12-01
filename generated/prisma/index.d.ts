
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Stadium
 * 
 */
export type Stadium = $Result.DefaultSelection<Prisma.$StadiumPayload>
/**
 * Model Team
 * 
 */
export type Team = $Result.DefaultSelection<Prisma.$TeamPayload>
/**
 * Model Match
 * 
 */
export type Match = $Result.DefaultSelection<Prisma.$MatchPayload>
/**
 * Model MatchSeat
 * 
 */
export type MatchSeat = $Result.DefaultSelection<Prisma.$MatchSeatPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Gender: {
  MALE: 'MALE',
  FEMALE: 'FEMALE',
  OTHER: 'OTHER'
};

export type Gender = (typeof Gender)[keyof typeof Gender]


export const UserRole: {
  MANAGER: 'MANAGER',
  FAN: 'FAN'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]

}

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Stadiums
 * const stadiums = await prisma.stadium.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Stadiums
   * const stadiums = await prisma.stadium.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.stadium`: Exposes CRUD operations for the **Stadium** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stadiums
    * const stadiums = await prisma.stadium.findMany()
    * ```
    */
  get stadium(): Prisma.StadiumDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.team`: Exposes CRUD operations for the **Team** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teams
    * const teams = await prisma.team.findMany()
    * ```
    */
  get team(): Prisma.TeamDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.match`: Exposes CRUD operations for the **Match** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Matches
    * const matches = await prisma.match.findMany()
    * ```
    */
  get match(): Prisma.MatchDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.matchSeat`: Exposes CRUD operations for the **MatchSeat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MatchSeats
    * const matchSeats = await prisma.matchSeat.findMany()
    * ```
    */
  get matchSeat(): Prisma.MatchSeatDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Stadium: 'Stadium',
    Team: 'Team',
    Match: 'Match',
    MatchSeat: 'MatchSeat',
    User: 'User'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "stadium" | "team" | "match" | "matchSeat" | "user"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Stadium: {
        payload: Prisma.$StadiumPayload<ExtArgs>
        fields: Prisma.StadiumFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StadiumFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StadiumPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StadiumFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StadiumPayload>
          }
          findFirst: {
            args: Prisma.StadiumFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StadiumPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StadiumFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StadiumPayload>
          }
          findMany: {
            args: Prisma.StadiumFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StadiumPayload>[]
          }
          create: {
            args: Prisma.StadiumCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StadiumPayload>
          }
          createMany: {
            args: Prisma.StadiumCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StadiumCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StadiumPayload>[]
          }
          delete: {
            args: Prisma.StadiumDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StadiumPayload>
          }
          update: {
            args: Prisma.StadiumUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StadiumPayload>
          }
          deleteMany: {
            args: Prisma.StadiumDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StadiumUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StadiumUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StadiumPayload>[]
          }
          upsert: {
            args: Prisma.StadiumUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StadiumPayload>
          }
          aggregate: {
            args: Prisma.StadiumAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStadium>
          }
          groupBy: {
            args: Prisma.StadiumGroupByArgs<ExtArgs>
            result: $Utils.Optional<StadiumGroupByOutputType>[]
          }
          count: {
            args: Prisma.StadiumCountArgs<ExtArgs>
            result: $Utils.Optional<StadiumCountAggregateOutputType> | number
          }
        }
      }
      Team: {
        payload: Prisma.$TeamPayload<ExtArgs>
        fields: Prisma.TeamFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeamFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeamFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          findFirst: {
            args: Prisma.TeamFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeamFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          findMany: {
            args: Prisma.TeamFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          create: {
            args: Prisma.TeamCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          createMany: {
            args: Prisma.TeamCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeamCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          delete: {
            args: Prisma.TeamDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          update: {
            args: Prisma.TeamUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          deleteMany: {
            args: Prisma.TeamDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeamUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeamUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          upsert: {
            args: Prisma.TeamUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          aggregate: {
            args: Prisma.TeamAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeam>
          }
          groupBy: {
            args: Prisma.TeamGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeamGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeamCountArgs<ExtArgs>
            result: $Utils.Optional<TeamCountAggregateOutputType> | number
          }
        }
      }
      Match: {
        payload: Prisma.$MatchPayload<ExtArgs>
        fields: Prisma.MatchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MatchFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MatchFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          findFirst: {
            args: Prisma.MatchFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MatchFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          findMany: {
            args: Prisma.MatchFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>[]
          }
          create: {
            args: Prisma.MatchCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          createMany: {
            args: Prisma.MatchCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MatchCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>[]
          }
          delete: {
            args: Prisma.MatchDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          update: {
            args: Prisma.MatchUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          deleteMany: {
            args: Prisma.MatchDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MatchUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MatchUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>[]
          }
          upsert: {
            args: Prisma.MatchUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          aggregate: {
            args: Prisma.MatchAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMatch>
          }
          groupBy: {
            args: Prisma.MatchGroupByArgs<ExtArgs>
            result: $Utils.Optional<MatchGroupByOutputType>[]
          }
          count: {
            args: Prisma.MatchCountArgs<ExtArgs>
            result: $Utils.Optional<MatchCountAggregateOutputType> | number
          }
        }
      }
      MatchSeat: {
        payload: Prisma.$MatchSeatPayload<ExtArgs>
        fields: Prisma.MatchSeatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MatchSeatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchSeatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MatchSeatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchSeatPayload>
          }
          findFirst: {
            args: Prisma.MatchSeatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchSeatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MatchSeatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchSeatPayload>
          }
          findMany: {
            args: Prisma.MatchSeatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchSeatPayload>[]
          }
          create: {
            args: Prisma.MatchSeatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchSeatPayload>
          }
          createMany: {
            args: Prisma.MatchSeatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MatchSeatCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchSeatPayload>[]
          }
          delete: {
            args: Prisma.MatchSeatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchSeatPayload>
          }
          update: {
            args: Prisma.MatchSeatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchSeatPayload>
          }
          deleteMany: {
            args: Prisma.MatchSeatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MatchSeatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MatchSeatUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchSeatPayload>[]
          }
          upsert: {
            args: Prisma.MatchSeatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchSeatPayload>
          }
          aggregate: {
            args: Prisma.MatchSeatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMatchSeat>
          }
          groupBy: {
            args: Prisma.MatchSeatGroupByArgs<ExtArgs>
            result: $Utils.Optional<MatchSeatGroupByOutputType>[]
          }
          count: {
            args: Prisma.MatchSeatCountArgs<ExtArgs>
            result: $Utils.Optional<MatchSeatCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    stadium?: StadiumOmit
    team?: TeamOmit
    match?: MatchOmit
    matchSeat?: MatchSeatOmit
    user?: UserOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type StadiumCountOutputType
   */

  export type StadiumCountOutputType = {
    matches: number
  }

  export type StadiumCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    matches?: boolean | StadiumCountOutputTypeCountMatchesArgs
  }

  // Custom InputTypes
  /**
   * StadiumCountOutputType without action
   */
  export type StadiumCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StadiumCountOutputType
     */
    select?: StadiumCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StadiumCountOutputType without action
   */
  export type StadiumCountOutputTypeCountMatchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchWhereInput
  }


  /**
   * Count Type TeamCountOutputType
   */

  export type TeamCountOutputType = {
    homeMatches: number
    awayMatches: number
    preferredBy: number
  }

  export type TeamCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    homeMatches?: boolean | TeamCountOutputTypeCountHomeMatchesArgs
    awayMatches?: boolean | TeamCountOutputTypeCountAwayMatchesArgs
    preferredBy?: boolean | TeamCountOutputTypeCountPreferredByArgs
  }

  // Custom InputTypes
  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamCountOutputType
     */
    select?: TeamCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountHomeMatchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchWhereInput
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountAwayMatchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchWhereInput
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountPreferredByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type MatchCountOutputType
   */

  export type MatchCountOutputType = {
    matchSeats: number
  }

  export type MatchCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    matchSeats?: boolean | MatchCountOutputTypeCountMatchSeatsArgs
  }

  // Custom InputTypes
  /**
   * MatchCountOutputType without action
   */
  export type MatchCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchCountOutputType
     */
    select?: MatchCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MatchCountOutputType without action
   */
  export type MatchCountOutputTypeCountMatchSeatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchSeatWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    matchSeats: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    matchSeats?: boolean | UserCountOutputTypeCountMatchSeatsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMatchSeatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchSeatWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Stadium
   */

  export type AggregateStadium = {
    _count: StadiumCountAggregateOutputType | null
    _avg: StadiumAvgAggregateOutputType | null
    _sum: StadiumSumAggregateOutputType | null
    _min: StadiumMinAggregateOutputType | null
    _max: StadiumMaxAggregateOutputType | null
  }

  export type StadiumAvgAggregateOutputType = {
    id: number | null
    noOfRows: number | null
    seatsPerRow: number | null
  }

  export type StadiumSumAggregateOutputType = {
    id: number | null
    noOfRows: number | null
    seatsPerRow: number | null
  }

  export type StadiumMinAggregateOutputType = {
    id: number | null
    name: string | null
    noOfRows: number | null
    seatsPerRow: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StadiumMaxAggregateOutputType = {
    id: number | null
    name: string | null
    noOfRows: number | null
    seatsPerRow: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StadiumCountAggregateOutputType = {
    id: number
    name: number
    noOfRows: number
    seatsPerRow: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StadiumAvgAggregateInputType = {
    id?: true
    noOfRows?: true
    seatsPerRow?: true
  }

  export type StadiumSumAggregateInputType = {
    id?: true
    noOfRows?: true
    seatsPerRow?: true
  }

  export type StadiumMinAggregateInputType = {
    id?: true
    name?: true
    noOfRows?: true
    seatsPerRow?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StadiumMaxAggregateInputType = {
    id?: true
    name?: true
    noOfRows?: true
    seatsPerRow?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StadiumCountAggregateInputType = {
    id?: true
    name?: true
    noOfRows?: true
    seatsPerRow?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StadiumAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stadium to aggregate.
     */
    where?: StadiumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stadiums to fetch.
     */
    orderBy?: StadiumOrderByWithRelationInput | StadiumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StadiumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stadiums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stadiums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Stadiums
    **/
    _count?: true | StadiumCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StadiumAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StadiumSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StadiumMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StadiumMaxAggregateInputType
  }

  export type GetStadiumAggregateType<T extends StadiumAggregateArgs> = {
        [P in keyof T & keyof AggregateStadium]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStadium[P]>
      : GetScalarType<T[P], AggregateStadium[P]>
  }




  export type StadiumGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StadiumWhereInput
    orderBy?: StadiumOrderByWithAggregationInput | StadiumOrderByWithAggregationInput[]
    by: StadiumScalarFieldEnum[] | StadiumScalarFieldEnum
    having?: StadiumScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StadiumCountAggregateInputType | true
    _avg?: StadiumAvgAggregateInputType
    _sum?: StadiumSumAggregateInputType
    _min?: StadiumMinAggregateInputType
    _max?: StadiumMaxAggregateInputType
  }

  export type StadiumGroupByOutputType = {
    id: number
    name: string
    noOfRows: number
    seatsPerRow: number
    createdAt: Date
    updatedAt: Date
    _count: StadiumCountAggregateOutputType | null
    _avg: StadiumAvgAggregateOutputType | null
    _sum: StadiumSumAggregateOutputType | null
    _min: StadiumMinAggregateOutputType | null
    _max: StadiumMaxAggregateOutputType | null
  }

  type GetStadiumGroupByPayload<T extends StadiumGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StadiumGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StadiumGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StadiumGroupByOutputType[P]>
            : GetScalarType<T[P], StadiumGroupByOutputType[P]>
        }
      >
    >


  export type StadiumSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    noOfRows?: boolean
    seatsPerRow?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    matches?: boolean | Stadium$matchesArgs<ExtArgs>
    _count?: boolean | StadiumCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stadium"]>

  export type StadiumSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    noOfRows?: boolean
    seatsPerRow?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["stadium"]>

  export type StadiumSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    noOfRows?: boolean
    seatsPerRow?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["stadium"]>

  export type StadiumSelectScalar = {
    id?: boolean
    name?: boolean
    noOfRows?: boolean
    seatsPerRow?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StadiumOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "noOfRows" | "seatsPerRow" | "createdAt" | "updatedAt", ExtArgs["result"]["stadium"]>
  export type StadiumInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    matches?: boolean | Stadium$matchesArgs<ExtArgs>
    _count?: boolean | StadiumCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StadiumIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type StadiumIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $StadiumPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Stadium"
    objects: {
      matches: Prisma.$MatchPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      noOfRows: number
      seatsPerRow: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["stadium"]>
    composites: {}
  }

  type StadiumGetPayload<S extends boolean | null | undefined | StadiumDefaultArgs> = $Result.GetResult<Prisma.$StadiumPayload, S>

  type StadiumCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StadiumFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StadiumCountAggregateInputType | true
    }

  export interface StadiumDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Stadium'], meta: { name: 'Stadium' } }
    /**
     * Find zero or one Stadium that matches the filter.
     * @param {StadiumFindUniqueArgs} args - Arguments to find a Stadium
     * @example
     * // Get one Stadium
     * const stadium = await prisma.stadium.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StadiumFindUniqueArgs>(args: SelectSubset<T, StadiumFindUniqueArgs<ExtArgs>>): Prisma__StadiumClient<$Result.GetResult<Prisma.$StadiumPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Stadium that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StadiumFindUniqueOrThrowArgs} args - Arguments to find a Stadium
     * @example
     * // Get one Stadium
     * const stadium = await prisma.stadium.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StadiumFindUniqueOrThrowArgs>(args: SelectSubset<T, StadiumFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StadiumClient<$Result.GetResult<Prisma.$StadiumPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stadium that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StadiumFindFirstArgs} args - Arguments to find a Stadium
     * @example
     * // Get one Stadium
     * const stadium = await prisma.stadium.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StadiumFindFirstArgs>(args?: SelectSubset<T, StadiumFindFirstArgs<ExtArgs>>): Prisma__StadiumClient<$Result.GetResult<Prisma.$StadiumPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stadium that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StadiumFindFirstOrThrowArgs} args - Arguments to find a Stadium
     * @example
     * // Get one Stadium
     * const stadium = await prisma.stadium.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StadiumFindFirstOrThrowArgs>(args?: SelectSubset<T, StadiumFindFirstOrThrowArgs<ExtArgs>>): Prisma__StadiumClient<$Result.GetResult<Prisma.$StadiumPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Stadiums that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StadiumFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stadiums
     * const stadiums = await prisma.stadium.findMany()
     * 
     * // Get first 10 Stadiums
     * const stadiums = await prisma.stadium.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stadiumWithIdOnly = await prisma.stadium.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StadiumFindManyArgs>(args?: SelectSubset<T, StadiumFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StadiumPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Stadium.
     * @param {StadiumCreateArgs} args - Arguments to create a Stadium.
     * @example
     * // Create one Stadium
     * const Stadium = await prisma.stadium.create({
     *   data: {
     *     // ... data to create a Stadium
     *   }
     * })
     * 
     */
    create<T extends StadiumCreateArgs>(args: SelectSubset<T, StadiumCreateArgs<ExtArgs>>): Prisma__StadiumClient<$Result.GetResult<Prisma.$StadiumPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Stadiums.
     * @param {StadiumCreateManyArgs} args - Arguments to create many Stadiums.
     * @example
     * // Create many Stadiums
     * const stadium = await prisma.stadium.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StadiumCreateManyArgs>(args?: SelectSubset<T, StadiumCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Stadiums and returns the data saved in the database.
     * @param {StadiumCreateManyAndReturnArgs} args - Arguments to create many Stadiums.
     * @example
     * // Create many Stadiums
     * const stadium = await prisma.stadium.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Stadiums and only return the `id`
     * const stadiumWithIdOnly = await prisma.stadium.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StadiumCreateManyAndReturnArgs>(args?: SelectSubset<T, StadiumCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StadiumPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Stadium.
     * @param {StadiumDeleteArgs} args - Arguments to delete one Stadium.
     * @example
     * // Delete one Stadium
     * const Stadium = await prisma.stadium.delete({
     *   where: {
     *     // ... filter to delete one Stadium
     *   }
     * })
     * 
     */
    delete<T extends StadiumDeleteArgs>(args: SelectSubset<T, StadiumDeleteArgs<ExtArgs>>): Prisma__StadiumClient<$Result.GetResult<Prisma.$StadiumPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Stadium.
     * @param {StadiumUpdateArgs} args - Arguments to update one Stadium.
     * @example
     * // Update one Stadium
     * const stadium = await prisma.stadium.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StadiumUpdateArgs>(args: SelectSubset<T, StadiumUpdateArgs<ExtArgs>>): Prisma__StadiumClient<$Result.GetResult<Prisma.$StadiumPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Stadiums.
     * @param {StadiumDeleteManyArgs} args - Arguments to filter Stadiums to delete.
     * @example
     * // Delete a few Stadiums
     * const { count } = await prisma.stadium.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StadiumDeleteManyArgs>(args?: SelectSubset<T, StadiumDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stadiums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StadiumUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stadiums
     * const stadium = await prisma.stadium.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StadiumUpdateManyArgs>(args: SelectSubset<T, StadiumUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stadiums and returns the data updated in the database.
     * @param {StadiumUpdateManyAndReturnArgs} args - Arguments to update many Stadiums.
     * @example
     * // Update many Stadiums
     * const stadium = await prisma.stadium.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Stadiums and only return the `id`
     * const stadiumWithIdOnly = await prisma.stadium.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StadiumUpdateManyAndReturnArgs>(args: SelectSubset<T, StadiumUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StadiumPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Stadium.
     * @param {StadiumUpsertArgs} args - Arguments to update or create a Stadium.
     * @example
     * // Update or create a Stadium
     * const stadium = await prisma.stadium.upsert({
     *   create: {
     *     // ... data to create a Stadium
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Stadium we want to update
     *   }
     * })
     */
    upsert<T extends StadiumUpsertArgs>(args: SelectSubset<T, StadiumUpsertArgs<ExtArgs>>): Prisma__StadiumClient<$Result.GetResult<Prisma.$StadiumPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Stadiums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StadiumCountArgs} args - Arguments to filter Stadiums to count.
     * @example
     * // Count the number of Stadiums
     * const count = await prisma.stadium.count({
     *   where: {
     *     // ... the filter for the Stadiums we want to count
     *   }
     * })
    **/
    count<T extends StadiumCountArgs>(
      args?: Subset<T, StadiumCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StadiumCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Stadium.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StadiumAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StadiumAggregateArgs>(args: Subset<T, StadiumAggregateArgs>): Prisma.PrismaPromise<GetStadiumAggregateType<T>>

    /**
     * Group by Stadium.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StadiumGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StadiumGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StadiumGroupByArgs['orderBy'] }
        : { orderBy?: StadiumGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StadiumGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStadiumGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Stadium model
   */
  readonly fields: StadiumFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Stadium.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StadiumClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    matches<T extends Stadium$matchesArgs<ExtArgs> = {}>(args?: Subset<T, Stadium$matchesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Stadium model
   */
  interface StadiumFieldRefs {
    readonly id: FieldRef<"Stadium", 'Int'>
    readonly name: FieldRef<"Stadium", 'String'>
    readonly noOfRows: FieldRef<"Stadium", 'Int'>
    readonly seatsPerRow: FieldRef<"Stadium", 'Int'>
    readonly createdAt: FieldRef<"Stadium", 'DateTime'>
    readonly updatedAt: FieldRef<"Stadium", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Stadium findUnique
   */
  export type StadiumFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stadium
     */
    select?: StadiumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stadium
     */
    omit?: StadiumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StadiumInclude<ExtArgs> | null
    /**
     * Filter, which Stadium to fetch.
     */
    where: StadiumWhereUniqueInput
  }

  /**
   * Stadium findUniqueOrThrow
   */
  export type StadiumFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stadium
     */
    select?: StadiumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stadium
     */
    omit?: StadiumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StadiumInclude<ExtArgs> | null
    /**
     * Filter, which Stadium to fetch.
     */
    where: StadiumWhereUniqueInput
  }

  /**
   * Stadium findFirst
   */
  export type StadiumFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stadium
     */
    select?: StadiumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stadium
     */
    omit?: StadiumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StadiumInclude<ExtArgs> | null
    /**
     * Filter, which Stadium to fetch.
     */
    where?: StadiumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stadiums to fetch.
     */
    orderBy?: StadiumOrderByWithRelationInput | StadiumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stadiums.
     */
    cursor?: StadiumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stadiums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stadiums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stadiums.
     */
    distinct?: StadiumScalarFieldEnum | StadiumScalarFieldEnum[]
  }

  /**
   * Stadium findFirstOrThrow
   */
  export type StadiumFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stadium
     */
    select?: StadiumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stadium
     */
    omit?: StadiumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StadiumInclude<ExtArgs> | null
    /**
     * Filter, which Stadium to fetch.
     */
    where?: StadiumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stadiums to fetch.
     */
    orderBy?: StadiumOrderByWithRelationInput | StadiumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stadiums.
     */
    cursor?: StadiumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stadiums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stadiums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stadiums.
     */
    distinct?: StadiumScalarFieldEnum | StadiumScalarFieldEnum[]
  }

  /**
   * Stadium findMany
   */
  export type StadiumFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stadium
     */
    select?: StadiumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stadium
     */
    omit?: StadiumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StadiumInclude<ExtArgs> | null
    /**
     * Filter, which Stadiums to fetch.
     */
    where?: StadiumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stadiums to fetch.
     */
    orderBy?: StadiumOrderByWithRelationInput | StadiumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Stadiums.
     */
    cursor?: StadiumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stadiums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stadiums.
     */
    skip?: number
    distinct?: StadiumScalarFieldEnum | StadiumScalarFieldEnum[]
  }

  /**
   * Stadium create
   */
  export type StadiumCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stadium
     */
    select?: StadiumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stadium
     */
    omit?: StadiumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StadiumInclude<ExtArgs> | null
    /**
     * The data needed to create a Stadium.
     */
    data: XOR<StadiumCreateInput, StadiumUncheckedCreateInput>
  }

  /**
   * Stadium createMany
   */
  export type StadiumCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Stadiums.
     */
    data: StadiumCreateManyInput | StadiumCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Stadium createManyAndReturn
   */
  export type StadiumCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stadium
     */
    select?: StadiumSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Stadium
     */
    omit?: StadiumOmit<ExtArgs> | null
    /**
     * The data used to create many Stadiums.
     */
    data: StadiumCreateManyInput | StadiumCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Stadium update
   */
  export type StadiumUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stadium
     */
    select?: StadiumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stadium
     */
    omit?: StadiumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StadiumInclude<ExtArgs> | null
    /**
     * The data needed to update a Stadium.
     */
    data: XOR<StadiumUpdateInput, StadiumUncheckedUpdateInput>
    /**
     * Choose, which Stadium to update.
     */
    where: StadiumWhereUniqueInput
  }

  /**
   * Stadium updateMany
   */
  export type StadiumUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Stadiums.
     */
    data: XOR<StadiumUpdateManyMutationInput, StadiumUncheckedUpdateManyInput>
    /**
     * Filter which Stadiums to update
     */
    where?: StadiumWhereInput
    /**
     * Limit how many Stadiums to update.
     */
    limit?: number
  }

  /**
   * Stadium updateManyAndReturn
   */
  export type StadiumUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stadium
     */
    select?: StadiumSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Stadium
     */
    omit?: StadiumOmit<ExtArgs> | null
    /**
     * The data used to update Stadiums.
     */
    data: XOR<StadiumUpdateManyMutationInput, StadiumUncheckedUpdateManyInput>
    /**
     * Filter which Stadiums to update
     */
    where?: StadiumWhereInput
    /**
     * Limit how many Stadiums to update.
     */
    limit?: number
  }

  /**
   * Stadium upsert
   */
  export type StadiumUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stadium
     */
    select?: StadiumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stadium
     */
    omit?: StadiumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StadiumInclude<ExtArgs> | null
    /**
     * The filter to search for the Stadium to update in case it exists.
     */
    where: StadiumWhereUniqueInput
    /**
     * In case the Stadium found by the `where` argument doesn't exist, create a new Stadium with this data.
     */
    create: XOR<StadiumCreateInput, StadiumUncheckedCreateInput>
    /**
     * In case the Stadium was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StadiumUpdateInput, StadiumUncheckedUpdateInput>
  }

  /**
   * Stadium delete
   */
  export type StadiumDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stadium
     */
    select?: StadiumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stadium
     */
    omit?: StadiumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StadiumInclude<ExtArgs> | null
    /**
     * Filter which Stadium to delete.
     */
    where: StadiumWhereUniqueInput
  }

  /**
   * Stadium deleteMany
   */
  export type StadiumDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stadiums to delete
     */
    where?: StadiumWhereInput
    /**
     * Limit how many Stadiums to delete.
     */
    limit?: number
  }

  /**
   * Stadium.matches
   */
  export type Stadium$matchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    where?: MatchWhereInput
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    cursor?: MatchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * Stadium without action
   */
  export type StadiumDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stadium
     */
    select?: StadiumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stadium
     */
    omit?: StadiumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StadiumInclude<ExtArgs> | null
  }


  /**
   * Model Team
   */

  export type AggregateTeam = {
    _count: TeamCountAggregateOutputType | null
    _avg: TeamAvgAggregateOutputType | null
    _sum: TeamSumAggregateOutputType | null
    _min: TeamMinAggregateOutputType | null
    _max: TeamMaxAggregateOutputType | null
  }

  export type TeamAvgAggregateOutputType = {
    id: number | null
  }

  export type TeamSumAggregateOutputType = {
    id: number | null
  }

  export type TeamMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TeamMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TeamCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TeamAvgAggregateInputType = {
    id?: true
  }

  export type TeamSumAggregateInputType = {
    id?: true
  }

  export type TeamMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TeamMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TeamCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TeamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Team to aggregate.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Teams
    **/
    _count?: true | TeamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TeamAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TeamSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamMaxAggregateInputType
  }

  export type GetTeamAggregateType<T extends TeamAggregateArgs> = {
        [P in keyof T & keyof AggregateTeam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeam[P]>
      : GetScalarType<T[P], AggregateTeam[P]>
  }




  export type TeamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamWhereInput
    orderBy?: TeamOrderByWithAggregationInput | TeamOrderByWithAggregationInput[]
    by: TeamScalarFieldEnum[] | TeamScalarFieldEnum
    having?: TeamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamCountAggregateInputType | true
    _avg?: TeamAvgAggregateInputType
    _sum?: TeamSumAggregateInputType
    _min?: TeamMinAggregateInputType
    _max?: TeamMaxAggregateInputType
  }

  export type TeamGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    updatedAt: Date
    _count: TeamCountAggregateOutputType | null
    _avg: TeamAvgAggregateOutputType | null
    _sum: TeamSumAggregateOutputType | null
    _min: TeamMinAggregateOutputType | null
    _max: TeamMaxAggregateOutputType | null
  }

  type GetTeamGroupByPayload<T extends TeamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamGroupByOutputType[P]>
            : GetScalarType<T[P], TeamGroupByOutputType[P]>
        }
      >
    >


  export type TeamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    homeMatches?: boolean | Team$homeMatchesArgs<ExtArgs>
    awayMatches?: boolean | Team$awayMatchesArgs<ExtArgs>
    preferredBy?: boolean | Team$preferredByArgs<ExtArgs>
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["team"]>

  export type TeamSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["team"]>

  export type TeamSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["team"]>

  export type TeamSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TeamOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["team"]>
  export type TeamInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    homeMatches?: boolean | Team$homeMatchesArgs<ExtArgs>
    awayMatches?: boolean | Team$awayMatchesArgs<ExtArgs>
    preferredBy?: boolean | Team$preferredByArgs<ExtArgs>
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TeamIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TeamIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TeamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Team"
    objects: {
      homeMatches: Prisma.$MatchPayload<ExtArgs>[]
      awayMatches: Prisma.$MatchPayload<ExtArgs>[]
      preferredBy: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["team"]>
    composites: {}
  }

  type TeamGetPayload<S extends boolean | null | undefined | TeamDefaultArgs> = $Result.GetResult<Prisma.$TeamPayload, S>

  type TeamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeamFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeamCountAggregateInputType | true
    }

  export interface TeamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Team'], meta: { name: 'Team' } }
    /**
     * Find zero or one Team that matches the filter.
     * @param {TeamFindUniqueArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeamFindUniqueArgs>(args: SelectSubset<T, TeamFindUniqueArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Team that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeamFindUniqueOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeamFindUniqueOrThrowArgs>(args: SelectSubset<T, TeamFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Team that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindFirstArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeamFindFirstArgs>(args?: SelectSubset<T, TeamFindFirstArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Team that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindFirstOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeamFindFirstOrThrowArgs>(args?: SelectSubset<T, TeamFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Teams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teams
     * const teams = await prisma.team.findMany()
     * 
     * // Get first 10 Teams
     * const teams = await prisma.team.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teamWithIdOnly = await prisma.team.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeamFindManyArgs>(args?: SelectSubset<T, TeamFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Team.
     * @param {TeamCreateArgs} args - Arguments to create a Team.
     * @example
     * // Create one Team
     * const Team = await prisma.team.create({
     *   data: {
     *     // ... data to create a Team
     *   }
     * })
     * 
     */
    create<T extends TeamCreateArgs>(args: SelectSubset<T, TeamCreateArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Teams.
     * @param {TeamCreateManyArgs} args - Arguments to create many Teams.
     * @example
     * // Create many Teams
     * const team = await prisma.team.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeamCreateManyArgs>(args?: SelectSubset<T, TeamCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Teams and returns the data saved in the database.
     * @param {TeamCreateManyAndReturnArgs} args - Arguments to create many Teams.
     * @example
     * // Create many Teams
     * const team = await prisma.team.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Teams and only return the `id`
     * const teamWithIdOnly = await prisma.team.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeamCreateManyAndReturnArgs>(args?: SelectSubset<T, TeamCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Team.
     * @param {TeamDeleteArgs} args - Arguments to delete one Team.
     * @example
     * // Delete one Team
     * const Team = await prisma.team.delete({
     *   where: {
     *     // ... filter to delete one Team
     *   }
     * })
     * 
     */
    delete<T extends TeamDeleteArgs>(args: SelectSubset<T, TeamDeleteArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Team.
     * @param {TeamUpdateArgs} args - Arguments to update one Team.
     * @example
     * // Update one Team
     * const team = await prisma.team.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeamUpdateArgs>(args: SelectSubset<T, TeamUpdateArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Teams.
     * @param {TeamDeleteManyArgs} args - Arguments to filter Teams to delete.
     * @example
     * // Delete a few Teams
     * const { count } = await prisma.team.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeamDeleteManyArgs>(args?: SelectSubset<T, TeamDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teams
     * const team = await prisma.team.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeamUpdateManyArgs>(args: SelectSubset<T, TeamUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teams and returns the data updated in the database.
     * @param {TeamUpdateManyAndReturnArgs} args - Arguments to update many Teams.
     * @example
     * // Update many Teams
     * const team = await prisma.team.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Teams and only return the `id`
     * const teamWithIdOnly = await prisma.team.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TeamUpdateManyAndReturnArgs>(args: SelectSubset<T, TeamUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Team.
     * @param {TeamUpsertArgs} args - Arguments to update or create a Team.
     * @example
     * // Update or create a Team
     * const team = await prisma.team.upsert({
     *   create: {
     *     // ... data to create a Team
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Team we want to update
     *   }
     * })
     */
    upsert<T extends TeamUpsertArgs>(args: SelectSubset<T, TeamUpsertArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamCountArgs} args - Arguments to filter Teams to count.
     * @example
     * // Count the number of Teams
     * const count = await prisma.team.count({
     *   where: {
     *     // ... the filter for the Teams we want to count
     *   }
     * })
    **/
    count<T extends TeamCountArgs>(
      args?: Subset<T, TeamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TeamAggregateArgs>(args: Subset<T, TeamAggregateArgs>): Prisma.PrismaPromise<GetTeamAggregateType<T>>

    /**
     * Group by Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TeamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeamGroupByArgs['orderBy'] }
        : { orderBy?: TeamGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TeamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Team model
   */
  readonly fields: TeamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Team.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeamClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    homeMatches<T extends Team$homeMatchesArgs<ExtArgs> = {}>(args?: Subset<T, Team$homeMatchesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    awayMatches<T extends Team$awayMatchesArgs<ExtArgs> = {}>(args?: Subset<T, Team$awayMatchesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    preferredBy<T extends Team$preferredByArgs<ExtArgs> = {}>(args?: Subset<T, Team$preferredByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Team model
   */
  interface TeamFieldRefs {
    readonly id: FieldRef<"Team", 'Int'>
    readonly name: FieldRef<"Team", 'String'>
    readonly createdAt: FieldRef<"Team", 'DateTime'>
    readonly updatedAt: FieldRef<"Team", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Team findUnique
   */
  export type TeamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team findUniqueOrThrow
   */
  export type TeamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team findFirst
   */
  export type TeamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team findFirstOrThrow
   */
  export type TeamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team findMany
   */
  export type TeamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Teams to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team create
   */
  export type TeamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The data needed to create a Team.
     */
    data: XOR<TeamCreateInput, TeamUncheckedCreateInput>
  }

  /**
   * Team createMany
   */
  export type TeamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Teams.
     */
    data: TeamCreateManyInput | TeamCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Team createManyAndReturn
   */
  export type TeamCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * The data used to create many Teams.
     */
    data: TeamCreateManyInput | TeamCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Team update
   */
  export type TeamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The data needed to update a Team.
     */
    data: XOR<TeamUpdateInput, TeamUncheckedUpdateInput>
    /**
     * Choose, which Team to update.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team updateMany
   */
  export type TeamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Teams.
     */
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyInput>
    /**
     * Filter which Teams to update
     */
    where?: TeamWhereInput
    /**
     * Limit how many Teams to update.
     */
    limit?: number
  }

  /**
   * Team updateManyAndReturn
   */
  export type TeamUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * The data used to update Teams.
     */
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyInput>
    /**
     * Filter which Teams to update
     */
    where?: TeamWhereInput
    /**
     * Limit how many Teams to update.
     */
    limit?: number
  }

  /**
   * Team upsert
   */
  export type TeamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The filter to search for the Team to update in case it exists.
     */
    where: TeamWhereUniqueInput
    /**
     * In case the Team found by the `where` argument doesn't exist, create a new Team with this data.
     */
    create: XOR<TeamCreateInput, TeamUncheckedCreateInput>
    /**
     * In case the Team was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeamUpdateInput, TeamUncheckedUpdateInput>
  }

  /**
   * Team delete
   */
  export type TeamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter which Team to delete.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team deleteMany
   */
  export type TeamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teams to delete
     */
    where?: TeamWhereInput
    /**
     * Limit how many Teams to delete.
     */
    limit?: number
  }

  /**
   * Team.homeMatches
   */
  export type Team$homeMatchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    where?: MatchWhereInput
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    cursor?: MatchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * Team.awayMatches
   */
  export type Team$awayMatchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    where?: MatchWhereInput
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    cursor?: MatchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * Team.preferredBy
   */
  export type Team$preferredByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Team without action
   */
  export type TeamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
  }


  /**
   * Model Match
   */

  export type AggregateMatch = {
    _count: MatchCountAggregateOutputType | null
    _avg: MatchAvgAggregateOutputType | null
    _sum: MatchSumAggregateOutputType | null
    _min: MatchMinAggregateOutputType | null
    _max: MatchMaxAggregateOutputType | null
  }

  export type MatchAvgAggregateOutputType = {
    id: number | null
    homeTeamId: number | null
    awayTeamId: number | null
    stadiumId: number | null
  }

  export type MatchSumAggregateOutputType = {
    id: number | null
    homeTeamId: number | null
    awayTeamId: number | null
    stadiumId: number | null
  }

  export type MatchMinAggregateOutputType = {
    id: number | null
    dateTime: Date | null
    homeTeamId: number | null
    awayTeamId: number | null
    stadiumId: number | null
    mainRefereeName: string | null
    linesmen1Name: string | null
    linesmen2Name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MatchMaxAggregateOutputType = {
    id: number | null
    dateTime: Date | null
    homeTeamId: number | null
    awayTeamId: number | null
    stadiumId: number | null
    mainRefereeName: string | null
    linesmen1Name: string | null
    linesmen2Name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MatchCountAggregateOutputType = {
    id: number
    dateTime: number
    homeTeamId: number
    awayTeamId: number
    stadiumId: number
    mainRefereeName: number
    linesmen1Name: number
    linesmen2Name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MatchAvgAggregateInputType = {
    id?: true
    homeTeamId?: true
    awayTeamId?: true
    stadiumId?: true
  }

  export type MatchSumAggregateInputType = {
    id?: true
    homeTeamId?: true
    awayTeamId?: true
    stadiumId?: true
  }

  export type MatchMinAggregateInputType = {
    id?: true
    dateTime?: true
    homeTeamId?: true
    awayTeamId?: true
    stadiumId?: true
    mainRefereeName?: true
    linesmen1Name?: true
    linesmen2Name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MatchMaxAggregateInputType = {
    id?: true
    dateTime?: true
    homeTeamId?: true
    awayTeamId?: true
    stadiumId?: true
    mainRefereeName?: true
    linesmen1Name?: true
    linesmen2Name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MatchCountAggregateInputType = {
    id?: true
    dateTime?: true
    homeTeamId?: true
    awayTeamId?: true
    stadiumId?: true
    mainRefereeName?: true
    linesmen1Name?: true
    linesmen2Name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MatchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Match to aggregate.
     */
    where?: MatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Matches
    **/
    _count?: true | MatchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MatchAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MatchSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MatchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MatchMaxAggregateInputType
  }

  export type GetMatchAggregateType<T extends MatchAggregateArgs> = {
        [P in keyof T & keyof AggregateMatch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMatch[P]>
      : GetScalarType<T[P], AggregateMatch[P]>
  }




  export type MatchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchWhereInput
    orderBy?: MatchOrderByWithAggregationInput | MatchOrderByWithAggregationInput[]
    by: MatchScalarFieldEnum[] | MatchScalarFieldEnum
    having?: MatchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MatchCountAggregateInputType | true
    _avg?: MatchAvgAggregateInputType
    _sum?: MatchSumAggregateInputType
    _min?: MatchMinAggregateInputType
    _max?: MatchMaxAggregateInputType
  }

  export type MatchGroupByOutputType = {
    id: number
    dateTime: Date
    homeTeamId: number
    awayTeamId: number
    stadiumId: number
    mainRefereeName: string
    linesmen1Name: string
    linesmen2Name: string
    createdAt: Date
    updatedAt: Date
    _count: MatchCountAggregateOutputType | null
    _avg: MatchAvgAggregateOutputType | null
    _sum: MatchSumAggregateOutputType | null
    _min: MatchMinAggregateOutputType | null
    _max: MatchMaxAggregateOutputType | null
  }

  type GetMatchGroupByPayload<T extends MatchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MatchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MatchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MatchGroupByOutputType[P]>
            : GetScalarType<T[P], MatchGroupByOutputType[P]>
        }
      >
    >


  export type MatchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dateTime?: boolean
    homeTeamId?: boolean
    awayTeamId?: boolean
    stadiumId?: boolean
    mainRefereeName?: boolean
    linesmen1Name?: boolean
    linesmen2Name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    homeTeam?: boolean | TeamDefaultArgs<ExtArgs>
    awayTeam?: boolean | TeamDefaultArgs<ExtArgs>
    stadium?: boolean | StadiumDefaultArgs<ExtArgs>
    matchSeats?: boolean | Match$matchSeatsArgs<ExtArgs>
    _count?: boolean | MatchCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["match"]>

  export type MatchSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dateTime?: boolean
    homeTeamId?: boolean
    awayTeamId?: boolean
    stadiumId?: boolean
    mainRefereeName?: boolean
    linesmen1Name?: boolean
    linesmen2Name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    homeTeam?: boolean | TeamDefaultArgs<ExtArgs>
    awayTeam?: boolean | TeamDefaultArgs<ExtArgs>
    stadium?: boolean | StadiumDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["match"]>

  export type MatchSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dateTime?: boolean
    homeTeamId?: boolean
    awayTeamId?: boolean
    stadiumId?: boolean
    mainRefereeName?: boolean
    linesmen1Name?: boolean
    linesmen2Name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    homeTeam?: boolean | TeamDefaultArgs<ExtArgs>
    awayTeam?: boolean | TeamDefaultArgs<ExtArgs>
    stadium?: boolean | StadiumDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["match"]>

  export type MatchSelectScalar = {
    id?: boolean
    dateTime?: boolean
    homeTeamId?: boolean
    awayTeamId?: boolean
    stadiumId?: boolean
    mainRefereeName?: boolean
    linesmen1Name?: boolean
    linesmen2Name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MatchOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "dateTime" | "homeTeamId" | "awayTeamId" | "stadiumId" | "mainRefereeName" | "linesmen1Name" | "linesmen2Name" | "createdAt" | "updatedAt", ExtArgs["result"]["match"]>
  export type MatchInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    homeTeam?: boolean | TeamDefaultArgs<ExtArgs>
    awayTeam?: boolean | TeamDefaultArgs<ExtArgs>
    stadium?: boolean | StadiumDefaultArgs<ExtArgs>
    matchSeats?: boolean | Match$matchSeatsArgs<ExtArgs>
    _count?: boolean | MatchCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MatchIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    homeTeam?: boolean | TeamDefaultArgs<ExtArgs>
    awayTeam?: boolean | TeamDefaultArgs<ExtArgs>
    stadium?: boolean | StadiumDefaultArgs<ExtArgs>
  }
  export type MatchIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    homeTeam?: boolean | TeamDefaultArgs<ExtArgs>
    awayTeam?: boolean | TeamDefaultArgs<ExtArgs>
    stadium?: boolean | StadiumDefaultArgs<ExtArgs>
  }

  export type $MatchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Match"
    objects: {
      homeTeam: Prisma.$TeamPayload<ExtArgs>
      awayTeam: Prisma.$TeamPayload<ExtArgs>
      stadium: Prisma.$StadiumPayload<ExtArgs>
      matchSeats: Prisma.$MatchSeatPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      dateTime: Date
      homeTeamId: number
      awayTeamId: number
      stadiumId: number
      mainRefereeName: string
      linesmen1Name: string
      linesmen2Name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["match"]>
    composites: {}
  }

  type MatchGetPayload<S extends boolean | null | undefined | MatchDefaultArgs> = $Result.GetResult<Prisma.$MatchPayload, S>

  type MatchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MatchFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MatchCountAggregateInputType | true
    }

  export interface MatchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Match'], meta: { name: 'Match' } }
    /**
     * Find zero or one Match that matches the filter.
     * @param {MatchFindUniqueArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MatchFindUniqueArgs>(args: SelectSubset<T, MatchFindUniqueArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Match that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MatchFindUniqueOrThrowArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MatchFindUniqueOrThrowArgs>(args: SelectSubset<T, MatchFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Match that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchFindFirstArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MatchFindFirstArgs>(args?: SelectSubset<T, MatchFindFirstArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Match that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchFindFirstOrThrowArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MatchFindFirstOrThrowArgs>(args?: SelectSubset<T, MatchFindFirstOrThrowArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Matches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Matches
     * const matches = await prisma.match.findMany()
     * 
     * // Get first 10 Matches
     * const matches = await prisma.match.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const matchWithIdOnly = await prisma.match.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MatchFindManyArgs>(args?: SelectSubset<T, MatchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Match.
     * @param {MatchCreateArgs} args - Arguments to create a Match.
     * @example
     * // Create one Match
     * const Match = await prisma.match.create({
     *   data: {
     *     // ... data to create a Match
     *   }
     * })
     * 
     */
    create<T extends MatchCreateArgs>(args: SelectSubset<T, MatchCreateArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Matches.
     * @param {MatchCreateManyArgs} args - Arguments to create many Matches.
     * @example
     * // Create many Matches
     * const match = await prisma.match.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MatchCreateManyArgs>(args?: SelectSubset<T, MatchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Matches and returns the data saved in the database.
     * @param {MatchCreateManyAndReturnArgs} args - Arguments to create many Matches.
     * @example
     * // Create many Matches
     * const match = await prisma.match.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Matches and only return the `id`
     * const matchWithIdOnly = await prisma.match.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MatchCreateManyAndReturnArgs>(args?: SelectSubset<T, MatchCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Match.
     * @param {MatchDeleteArgs} args - Arguments to delete one Match.
     * @example
     * // Delete one Match
     * const Match = await prisma.match.delete({
     *   where: {
     *     // ... filter to delete one Match
     *   }
     * })
     * 
     */
    delete<T extends MatchDeleteArgs>(args: SelectSubset<T, MatchDeleteArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Match.
     * @param {MatchUpdateArgs} args - Arguments to update one Match.
     * @example
     * // Update one Match
     * const match = await prisma.match.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MatchUpdateArgs>(args: SelectSubset<T, MatchUpdateArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Matches.
     * @param {MatchDeleteManyArgs} args - Arguments to filter Matches to delete.
     * @example
     * // Delete a few Matches
     * const { count } = await prisma.match.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MatchDeleteManyArgs>(args?: SelectSubset<T, MatchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Matches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Matches
     * const match = await prisma.match.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MatchUpdateManyArgs>(args: SelectSubset<T, MatchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Matches and returns the data updated in the database.
     * @param {MatchUpdateManyAndReturnArgs} args - Arguments to update many Matches.
     * @example
     * // Update many Matches
     * const match = await prisma.match.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Matches and only return the `id`
     * const matchWithIdOnly = await prisma.match.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MatchUpdateManyAndReturnArgs>(args: SelectSubset<T, MatchUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Match.
     * @param {MatchUpsertArgs} args - Arguments to update or create a Match.
     * @example
     * // Update or create a Match
     * const match = await prisma.match.upsert({
     *   create: {
     *     // ... data to create a Match
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Match we want to update
     *   }
     * })
     */
    upsert<T extends MatchUpsertArgs>(args: SelectSubset<T, MatchUpsertArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Matches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchCountArgs} args - Arguments to filter Matches to count.
     * @example
     * // Count the number of Matches
     * const count = await prisma.match.count({
     *   where: {
     *     // ... the filter for the Matches we want to count
     *   }
     * })
    **/
    count<T extends MatchCountArgs>(
      args?: Subset<T, MatchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MatchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Match.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MatchAggregateArgs>(args: Subset<T, MatchAggregateArgs>): Prisma.PrismaPromise<GetMatchAggregateType<T>>

    /**
     * Group by Match.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MatchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MatchGroupByArgs['orderBy'] }
        : { orderBy?: MatchGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MatchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMatchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Match model
   */
  readonly fields: MatchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Match.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MatchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    homeTeam<T extends TeamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeamDefaultArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    awayTeam<T extends TeamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeamDefaultArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    stadium<T extends StadiumDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StadiumDefaultArgs<ExtArgs>>): Prisma__StadiumClient<$Result.GetResult<Prisma.$StadiumPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    matchSeats<T extends Match$matchSeatsArgs<ExtArgs> = {}>(args?: Subset<T, Match$matchSeatsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchSeatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Match model
   */
  interface MatchFieldRefs {
    readonly id: FieldRef<"Match", 'Int'>
    readonly dateTime: FieldRef<"Match", 'DateTime'>
    readonly homeTeamId: FieldRef<"Match", 'Int'>
    readonly awayTeamId: FieldRef<"Match", 'Int'>
    readonly stadiumId: FieldRef<"Match", 'Int'>
    readonly mainRefereeName: FieldRef<"Match", 'String'>
    readonly linesmen1Name: FieldRef<"Match", 'String'>
    readonly linesmen2Name: FieldRef<"Match", 'String'>
    readonly createdAt: FieldRef<"Match", 'DateTime'>
    readonly updatedAt: FieldRef<"Match", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Match findUnique
   */
  export type MatchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Match to fetch.
     */
    where: MatchWhereUniqueInput
  }

  /**
   * Match findUniqueOrThrow
   */
  export type MatchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Match to fetch.
     */
    where: MatchWhereUniqueInput
  }

  /**
   * Match findFirst
   */
  export type MatchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Match to fetch.
     */
    where?: MatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Matches.
     */
    cursor?: MatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Matches.
     */
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * Match findFirstOrThrow
   */
  export type MatchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Match to fetch.
     */
    where?: MatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Matches.
     */
    cursor?: MatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Matches.
     */
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * Match findMany
   */
  export type MatchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Matches to fetch.
     */
    where?: MatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Matches.
     */
    cursor?: MatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * Match create
   */
  export type MatchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * The data needed to create a Match.
     */
    data: XOR<MatchCreateInput, MatchUncheckedCreateInput>
  }

  /**
   * Match createMany
   */
  export type MatchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Matches.
     */
    data: MatchCreateManyInput | MatchCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Match createManyAndReturn
   */
  export type MatchCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * The data used to create many Matches.
     */
    data: MatchCreateManyInput | MatchCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Match update
   */
  export type MatchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * The data needed to update a Match.
     */
    data: XOR<MatchUpdateInput, MatchUncheckedUpdateInput>
    /**
     * Choose, which Match to update.
     */
    where: MatchWhereUniqueInput
  }

  /**
   * Match updateMany
   */
  export type MatchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Matches.
     */
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyInput>
    /**
     * Filter which Matches to update
     */
    where?: MatchWhereInput
    /**
     * Limit how many Matches to update.
     */
    limit?: number
  }

  /**
   * Match updateManyAndReturn
   */
  export type MatchUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * The data used to update Matches.
     */
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyInput>
    /**
     * Filter which Matches to update
     */
    where?: MatchWhereInput
    /**
     * Limit how many Matches to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Match upsert
   */
  export type MatchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * The filter to search for the Match to update in case it exists.
     */
    where: MatchWhereUniqueInput
    /**
     * In case the Match found by the `where` argument doesn't exist, create a new Match with this data.
     */
    create: XOR<MatchCreateInput, MatchUncheckedCreateInput>
    /**
     * In case the Match was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MatchUpdateInput, MatchUncheckedUpdateInput>
  }

  /**
   * Match delete
   */
  export type MatchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter which Match to delete.
     */
    where: MatchWhereUniqueInput
  }

  /**
   * Match deleteMany
   */
  export type MatchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Matches to delete
     */
    where?: MatchWhereInput
    /**
     * Limit how many Matches to delete.
     */
    limit?: number
  }

  /**
   * Match.matchSeats
   */
  export type Match$matchSeatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchSeat
     */
    select?: MatchSeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchSeat
     */
    omit?: MatchSeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchSeatInclude<ExtArgs> | null
    where?: MatchSeatWhereInput
    orderBy?: MatchSeatOrderByWithRelationInput | MatchSeatOrderByWithRelationInput[]
    cursor?: MatchSeatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchSeatScalarFieldEnum | MatchSeatScalarFieldEnum[]
  }

  /**
   * Match without action
   */
  export type MatchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
  }


  /**
   * Model MatchSeat
   */

  export type AggregateMatchSeat = {
    _count: MatchSeatCountAggregateOutputType | null
    _avg: MatchSeatAvgAggregateOutputType | null
    _sum: MatchSeatSumAggregateOutputType | null
    _min: MatchSeatMinAggregateOutputType | null
    _max: MatchSeatMaxAggregateOutputType | null
  }

  export type MatchSeatAvgAggregateOutputType = {
    id: number | null
    seatNumber: number | null
    userId: number | null
    matchId: number | null
  }

  export type MatchSeatSumAggregateOutputType = {
    id: number | null
    seatNumber: number | null
    userId: number | null
    matchId: number | null
  }

  export type MatchSeatMinAggregateOutputType = {
    id: number | null
    seatNumber: number | null
    userId: number | null
    matchId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MatchSeatMaxAggregateOutputType = {
    id: number | null
    seatNumber: number | null
    userId: number | null
    matchId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MatchSeatCountAggregateOutputType = {
    id: number
    seatNumber: number
    userId: number
    matchId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MatchSeatAvgAggregateInputType = {
    id?: true
    seatNumber?: true
    userId?: true
    matchId?: true
  }

  export type MatchSeatSumAggregateInputType = {
    id?: true
    seatNumber?: true
    userId?: true
    matchId?: true
  }

  export type MatchSeatMinAggregateInputType = {
    id?: true
    seatNumber?: true
    userId?: true
    matchId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MatchSeatMaxAggregateInputType = {
    id?: true
    seatNumber?: true
    userId?: true
    matchId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MatchSeatCountAggregateInputType = {
    id?: true
    seatNumber?: true
    userId?: true
    matchId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MatchSeatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MatchSeat to aggregate.
     */
    where?: MatchSeatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchSeats to fetch.
     */
    orderBy?: MatchSeatOrderByWithRelationInput | MatchSeatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MatchSeatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchSeats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchSeats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MatchSeats
    **/
    _count?: true | MatchSeatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MatchSeatAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MatchSeatSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MatchSeatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MatchSeatMaxAggregateInputType
  }

  export type GetMatchSeatAggregateType<T extends MatchSeatAggregateArgs> = {
        [P in keyof T & keyof AggregateMatchSeat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMatchSeat[P]>
      : GetScalarType<T[P], AggregateMatchSeat[P]>
  }




  export type MatchSeatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchSeatWhereInput
    orderBy?: MatchSeatOrderByWithAggregationInput | MatchSeatOrderByWithAggregationInput[]
    by: MatchSeatScalarFieldEnum[] | MatchSeatScalarFieldEnum
    having?: MatchSeatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MatchSeatCountAggregateInputType | true
    _avg?: MatchSeatAvgAggregateInputType
    _sum?: MatchSeatSumAggregateInputType
    _min?: MatchSeatMinAggregateInputType
    _max?: MatchSeatMaxAggregateInputType
  }

  export type MatchSeatGroupByOutputType = {
    id: number
    seatNumber: number
    userId: number
    matchId: number
    createdAt: Date
    updatedAt: Date
    _count: MatchSeatCountAggregateOutputType | null
    _avg: MatchSeatAvgAggregateOutputType | null
    _sum: MatchSeatSumAggregateOutputType | null
    _min: MatchSeatMinAggregateOutputType | null
    _max: MatchSeatMaxAggregateOutputType | null
  }

  type GetMatchSeatGroupByPayload<T extends MatchSeatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MatchSeatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MatchSeatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MatchSeatGroupByOutputType[P]>
            : GetScalarType<T[P], MatchSeatGroupByOutputType[P]>
        }
      >
    >


  export type MatchSeatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    seatNumber?: boolean
    userId?: boolean
    matchId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    match?: boolean | MatchDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["matchSeat"]>

  export type MatchSeatSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    seatNumber?: boolean
    userId?: boolean
    matchId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    match?: boolean | MatchDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["matchSeat"]>

  export type MatchSeatSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    seatNumber?: boolean
    userId?: boolean
    matchId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    match?: boolean | MatchDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["matchSeat"]>

  export type MatchSeatSelectScalar = {
    id?: boolean
    seatNumber?: boolean
    userId?: boolean
    matchId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MatchSeatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "seatNumber" | "userId" | "matchId" | "createdAt" | "updatedAt", ExtArgs["result"]["matchSeat"]>
  export type MatchSeatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    match?: boolean | MatchDefaultArgs<ExtArgs>
  }
  export type MatchSeatIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    match?: boolean | MatchDefaultArgs<ExtArgs>
  }
  export type MatchSeatIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    match?: boolean | MatchDefaultArgs<ExtArgs>
  }

  export type $MatchSeatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MatchSeat"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      match: Prisma.$MatchPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      seatNumber: number
      userId: number
      matchId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["matchSeat"]>
    composites: {}
  }

  type MatchSeatGetPayload<S extends boolean | null | undefined | MatchSeatDefaultArgs> = $Result.GetResult<Prisma.$MatchSeatPayload, S>

  type MatchSeatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MatchSeatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MatchSeatCountAggregateInputType | true
    }

  export interface MatchSeatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MatchSeat'], meta: { name: 'MatchSeat' } }
    /**
     * Find zero or one MatchSeat that matches the filter.
     * @param {MatchSeatFindUniqueArgs} args - Arguments to find a MatchSeat
     * @example
     * // Get one MatchSeat
     * const matchSeat = await prisma.matchSeat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MatchSeatFindUniqueArgs>(args: SelectSubset<T, MatchSeatFindUniqueArgs<ExtArgs>>): Prisma__MatchSeatClient<$Result.GetResult<Prisma.$MatchSeatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MatchSeat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MatchSeatFindUniqueOrThrowArgs} args - Arguments to find a MatchSeat
     * @example
     * // Get one MatchSeat
     * const matchSeat = await prisma.matchSeat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MatchSeatFindUniqueOrThrowArgs>(args: SelectSubset<T, MatchSeatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MatchSeatClient<$Result.GetResult<Prisma.$MatchSeatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MatchSeat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchSeatFindFirstArgs} args - Arguments to find a MatchSeat
     * @example
     * // Get one MatchSeat
     * const matchSeat = await prisma.matchSeat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MatchSeatFindFirstArgs>(args?: SelectSubset<T, MatchSeatFindFirstArgs<ExtArgs>>): Prisma__MatchSeatClient<$Result.GetResult<Prisma.$MatchSeatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MatchSeat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchSeatFindFirstOrThrowArgs} args - Arguments to find a MatchSeat
     * @example
     * // Get one MatchSeat
     * const matchSeat = await prisma.matchSeat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MatchSeatFindFirstOrThrowArgs>(args?: SelectSubset<T, MatchSeatFindFirstOrThrowArgs<ExtArgs>>): Prisma__MatchSeatClient<$Result.GetResult<Prisma.$MatchSeatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MatchSeats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchSeatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MatchSeats
     * const matchSeats = await prisma.matchSeat.findMany()
     * 
     * // Get first 10 MatchSeats
     * const matchSeats = await prisma.matchSeat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const matchSeatWithIdOnly = await prisma.matchSeat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MatchSeatFindManyArgs>(args?: SelectSubset<T, MatchSeatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchSeatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MatchSeat.
     * @param {MatchSeatCreateArgs} args - Arguments to create a MatchSeat.
     * @example
     * // Create one MatchSeat
     * const MatchSeat = await prisma.matchSeat.create({
     *   data: {
     *     // ... data to create a MatchSeat
     *   }
     * })
     * 
     */
    create<T extends MatchSeatCreateArgs>(args: SelectSubset<T, MatchSeatCreateArgs<ExtArgs>>): Prisma__MatchSeatClient<$Result.GetResult<Prisma.$MatchSeatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MatchSeats.
     * @param {MatchSeatCreateManyArgs} args - Arguments to create many MatchSeats.
     * @example
     * // Create many MatchSeats
     * const matchSeat = await prisma.matchSeat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MatchSeatCreateManyArgs>(args?: SelectSubset<T, MatchSeatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MatchSeats and returns the data saved in the database.
     * @param {MatchSeatCreateManyAndReturnArgs} args - Arguments to create many MatchSeats.
     * @example
     * // Create many MatchSeats
     * const matchSeat = await prisma.matchSeat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MatchSeats and only return the `id`
     * const matchSeatWithIdOnly = await prisma.matchSeat.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MatchSeatCreateManyAndReturnArgs>(args?: SelectSubset<T, MatchSeatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchSeatPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MatchSeat.
     * @param {MatchSeatDeleteArgs} args - Arguments to delete one MatchSeat.
     * @example
     * // Delete one MatchSeat
     * const MatchSeat = await prisma.matchSeat.delete({
     *   where: {
     *     // ... filter to delete one MatchSeat
     *   }
     * })
     * 
     */
    delete<T extends MatchSeatDeleteArgs>(args: SelectSubset<T, MatchSeatDeleteArgs<ExtArgs>>): Prisma__MatchSeatClient<$Result.GetResult<Prisma.$MatchSeatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MatchSeat.
     * @param {MatchSeatUpdateArgs} args - Arguments to update one MatchSeat.
     * @example
     * // Update one MatchSeat
     * const matchSeat = await prisma.matchSeat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MatchSeatUpdateArgs>(args: SelectSubset<T, MatchSeatUpdateArgs<ExtArgs>>): Prisma__MatchSeatClient<$Result.GetResult<Prisma.$MatchSeatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MatchSeats.
     * @param {MatchSeatDeleteManyArgs} args - Arguments to filter MatchSeats to delete.
     * @example
     * // Delete a few MatchSeats
     * const { count } = await prisma.matchSeat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MatchSeatDeleteManyArgs>(args?: SelectSubset<T, MatchSeatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MatchSeats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchSeatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MatchSeats
     * const matchSeat = await prisma.matchSeat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MatchSeatUpdateManyArgs>(args: SelectSubset<T, MatchSeatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MatchSeats and returns the data updated in the database.
     * @param {MatchSeatUpdateManyAndReturnArgs} args - Arguments to update many MatchSeats.
     * @example
     * // Update many MatchSeats
     * const matchSeat = await prisma.matchSeat.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MatchSeats and only return the `id`
     * const matchSeatWithIdOnly = await prisma.matchSeat.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MatchSeatUpdateManyAndReturnArgs>(args: SelectSubset<T, MatchSeatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchSeatPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MatchSeat.
     * @param {MatchSeatUpsertArgs} args - Arguments to update or create a MatchSeat.
     * @example
     * // Update or create a MatchSeat
     * const matchSeat = await prisma.matchSeat.upsert({
     *   create: {
     *     // ... data to create a MatchSeat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MatchSeat we want to update
     *   }
     * })
     */
    upsert<T extends MatchSeatUpsertArgs>(args: SelectSubset<T, MatchSeatUpsertArgs<ExtArgs>>): Prisma__MatchSeatClient<$Result.GetResult<Prisma.$MatchSeatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MatchSeats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchSeatCountArgs} args - Arguments to filter MatchSeats to count.
     * @example
     * // Count the number of MatchSeats
     * const count = await prisma.matchSeat.count({
     *   where: {
     *     // ... the filter for the MatchSeats we want to count
     *   }
     * })
    **/
    count<T extends MatchSeatCountArgs>(
      args?: Subset<T, MatchSeatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MatchSeatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MatchSeat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchSeatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MatchSeatAggregateArgs>(args: Subset<T, MatchSeatAggregateArgs>): Prisma.PrismaPromise<GetMatchSeatAggregateType<T>>

    /**
     * Group by MatchSeat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchSeatGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MatchSeatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MatchSeatGroupByArgs['orderBy'] }
        : { orderBy?: MatchSeatGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MatchSeatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMatchSeatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MatchSeat model
   */
  readonly fields: MatchSeatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MatchSeat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MatchSeatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    match<T extends MatchDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MatchDefaultArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MatchSeat model
   */
  interface MatchSeatFieldRefs {
    readonly id: FieldRef<"MatchSeat", 'Int'>
    readonly seatNumber: FieldRef<"MatchSeat", 'Int'>
    readonly userId: FieldRef<"MatchSeat", 'Int'>
    readonly matchId: FieldRef<"MatchSeat", 'Int'>
    readonly createdAt: FieldRef<"MatchSeat", 'DateTime'>
    readonly updatedAt: FieldRef<"MatchSeat", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MatchSeat findUnique
   */
  export type MatchSeatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchSeat
     */
    select?: MatchSeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchSeat
     */
    omit?: MatchSeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchSeatInclude<ExtArgs> | null
    /**
     * Filter, which MatchSeat to fetch.
     */
    where: MatchSeatWhereUniqueInput
  }

  /**
   * MatchSeat findUniqueOrThrow
   */
  export type MatchSeatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchSeat
     */
    select?: MatchSeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchSeat
     */
    omit?: MatchSeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchSeatInclude<ExtArgs> | null
    /**
     * Filter, which MatchSeat to fetch.
     */
    where: MatchSeatWhereUniqueInput
  }

  /**
   * MatchSeat findFirst
   */
  export type MatchSeatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchSeat
     */
    select?: MatchSeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchSeat
     */
    omit?: MatchSeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchSeatInclude<ExtArgs> | null
    /**
     * Filter, which MatchSeat to fetch.
     */
    where?: MatchSeatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchSeats to fetch.
     */
    orderBy?: MatchSeatOrderByWithRelationInput | MatchSeatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MatchSeats.
     */
    cursor?: MatchSeatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchSeats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchSeats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MatchSeats.
     */
    distinct?: MatchSeatScalarFieldEnum | MatchSeatScalarFieldEnum[]
  }

  /**
   * MatchSeat findFirstOrThrow
   */
  export type MatchSeatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchSeat
     */
    select?: MatchSeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchSeat
     */
    omit?: MatchSeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchSeatInclude<ExtArgs> | null
    /**
     * Filter, which MatchSeat to fetch.
     */
    where?: MatchSeatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchSeats to fetch.
     */
    orderBy?: MatchSeatOrderByWithRelationInput | MatchSeatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MatchSeats.
     */
    cursor?: MatchSeatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchSeats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchSeats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MatchSeats.
     */
    distinct?: MatchSeatScalarFieldEnum | MatchSeatScalarFieldEnum[]
  }

  /**
   * MatchSeat findMany
   */
  export type MatchSeatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchSeat
     */
    select?: MatchSeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchSeat
     */
    omit?: MatchSeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchSeatInclude<ExtArgs> | null
    /**
     * Filter, which MatchSeats to fetch.
     */
    where?: MatchSeatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchSeats to fetch.
     */
    orderBy?: MatchSeatOrderByWithRelationInput | MatchSeatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MatchSeats.
     */
    cursor?: MatchSeatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchSeats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchSeats.
     */
    skip?: number
    distinct?: MatchSeatScalarFieldEnum | MatchSeatScalarFieldEnum[]
  }

  /**
   * MatchSeat create
   */
  export type MatchSeatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchSeat
     */
    select?: MatchSeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchSeat
     */
    omit?: MatchSeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchSeatInclude<ExtArgs> | null
    /**
     * The data needed to create a MatchSeat.
     */
    data: XOR<MatchSeatCreateInput, MatchSeatUncheckedCreateInput>
  }

  /**
   * MatchSeat createMany
   */
  export type MatchSeatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MatchSeats.
     */
    data: MatchSeatCreateManyInput | MatchSeatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MatchSeat createManyAndReturn
   */
  export type MatchSeatCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchSeat
     */
    select?: MatchSeatSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MatchSeat
     */
    omit?: MatchSeatOmit<ExtArgs> | null
    /**
     * The data used to create many MatchSeats.
     */
    data: MatchSeatCreateManyInput | MatchSeatCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchSeatIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MatchSeat update
   */
  export type MatchSeatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchSeat
     */
    select?: MatchSeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchSeat
     */
    omit?: MatchSeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchSeatInclude<ExtArgs> | null
    /**
     * The data needed to update a MatchSeat.
     */
    data: XOR<MatchSeatUpdateInput, MatchSeatUncheckedUpdateInput>
    /**
     * Choose, which MatchSeat to update.
     */
    where: MatchSeatWhereUniqueInput
  }

  /**
   * MatchSeat updateMany
   */
  export type MatchSeatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MatchSeats.
     */
    data: XOR<MatchSeatUpdateManyMutationInput, MatchSeatUncheckedUpdateManyInput>
    /**
     * Filter which MatchSeats to update
     */
    where?: MatchSeatWhereInput
    /**
     * Limit how many MatchSeats to update.
     */
    limit?: number
  }

  /**
   * MatchSeat updateManyAndReturn
   */
  export type MatchSeatUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchSeat
     */
    select?: MatchSeatSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MatchSeat
     */
    omit?: MatchSeatOmit<ExtArgs> | null
    /**
     * The data used to update MatchSeats.
     */
    data: XOR<MatchSeatUpdateManyMutationInput, MatchSeatUncheckedUpdateManyInput>
    /**
     * Filter which MatchSeats to update
     */
    where?: MatchSeatWhereInput
    /**
     * Limit how many MatchSeats to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchSeatIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MatchSeat upsert
   */
  export type MatchSeatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchSeat
     */
    select?: MatchSeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchSeat
     */
    omit?: MatchSeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchSeatInclude<ExtArgs> | null
    /**
     * The filter to search for the MatchSeat to update in case it exists.
     */
    where: MatchSeatWhereUniqueInput
    /**
     * In case the MatchSeat found by the `where` argument doesn't exist, create a new MatchSeat with this data.
     */
    create: XOR<MatchSeatCreateInput, MatchSeatUncheckedCreateInput>
    /**
     * In case the MatchSeat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MatchSeatUpdateInput, MatchSeatUncheckedUpdateInput>
  }

  /**
   * MatchSeat delete
   */
  export type MatchSeatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchSeat
     */
    select?: MatchSeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchSeat
     */
    omit?: MatchSeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchSeatInclude<ExtArgs> | null
    /**
     * Filter which MatchSeat to delete.
     */
    where: MatchSeatWhereUniqueInput
  }

  /**
   * MatchSeat deleteMany
   */
  export type MatchSeatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MatchSeats to delete
     */
    where?: MatchSeatWhereInput
    /**
     * Limit how many MatchSeats to delete.
     */
    limit?: number
  }

  /**
   * MatchSeat without action
   */
  export type MatchSeatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchSeat
     */
    select?: MatchSeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchSeat
     */
    omit?: MatchSeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchSeatInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    preferredTeamId: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    preferredTeamId: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    firstName: string | null
    lastName: string | null
    birthDate: Date | null
    gender: $Enums.Gender | null
    city: string | null
    address: string | null
    email: string | null
    role: $Enums.UserRole | null
    approved: boolean | null
    preferredTeamId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    firstName: string | null
    lastName: string | null
    birthDate: Date | null
    gender: $Enums.Gender | null
    city: string | null
    address: string | null
    email: string | null
    role: $Enums.UserRole | null
    approved: boolean | null
    preferredTeamId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    password: number
    firstName: number
    lastName: number
    birthDate: number
    gender: number
    city: number
    address: number
    email: number
    role: number
    approved: number
    preferredTeamId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    preferredTeamId?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    preferredTeamId?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    firstName?: true
    lastName?: true
    birthDate?: true
    gender?: true
    city?: true
    address?: true
    email?: true
    role?: true
    approved?: true
    preferredTeamId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    firstName?: true
    lastName?: true
    birthDate?: true
    gender?: true
    city?: true
    address?: true
    email?: true
    role?: true
    approved?: true
    preferredTeamId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    firstName?: true
    lastName?: true
    birthDate?: true
    gender?: true
    city?: true
    address?: true
    email?: true
    role?: true
    approved?: true
    preferredTeamId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    username: string
    password: string
    firstName: string
    lastName: string
    birthDate: Date
    gender: $Enums.Gender
    city: string
    address: string | null
    email: string
    role: $Enums.UserRole
    approved: boolean
    preferredTeamId: number | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    birthDate?: boolean
    gender?: boolean
    city?: boolean
    address?: boolean
    email?: boolean
    role?: boolean
    approved?: boolean
    preferredTeamId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    preferredTeam?: boolean | User$preferredTeamArgs<ExtArgs>
    matchSeats?: boolean | User$matchSeatsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    birthDate?: boolean
    gender?: boolean
    city?: boolean
    address?: boolean
    email?: boolean
    role?: boolean
    approved?: boolean
    preferredTeamId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    preferredTeam?: boolean | User$preferredTeamArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    birthDate?: boolean
    gender?: boolean
    city?: boolean
    address?: boolean
    email?: boolean
    role?: boolean
    approved?: boolean
    preferredTeamId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    preferredTeam?: boolean | User$preferredTeamArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    birthDate?: boolean
    gender?: boolean
    city?: boolean
    address?: boolean
    email?: boolean
    role?: boolean
    approved?: boolean
    preferredTeamId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password" | "firstName" | "lastName" | "birthDate" | "gender" | "city" | "address" | "email" | "role" | "approved" | "preferredTeamId" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    preferredTeam?: boolean | User$preferredTeamArgs<ExtArgs>
    matchSeats?: boolean | User$matchSeatsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    preferredTeam?: boolean | User$preferredTeamArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    preferredTeam?: boolean | User$preferredTeamArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      preferredTeam: Prisma.$TeamPayload<ExtArgs> | null
      matchSeats: Prisma.$MatchSeatPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      password: string
      firstName: string
      lastName: string
      birthDate: Date
      gender: $Enums.Gender
      city: string
      address: string | null
      email: string
      role: $Enums.UserRole
      approved: boolean
      preferredTeamId: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    preferredTeam<T extends User$preferredTeamArgs<ExtArgs> = {}>(args?: Subset<T, User$preferredTeamArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    matchSeats<T extends User$matchSeatsArgs<ExtArgs> = {}>(args?: Subset<T, User$matchSeatsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchSeatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly birthDate: FieldRef<"User", 'DateTime'>
    readonly gender: FieldRef<"User", 'Gender'>
    readonly city: FieldRef<"User", 'String'>
    readonly address: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly approved: FieldRef<"User", 'Boolean'>
    readonly preferredTeamId: FieldRef<"User", 'Int'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.preferredTeam
   */
  export type User$preferredTeamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    where?: TeamWhereInput
  }

  /**
   * User.matchSeats
   */
  export type User$matchSeatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchSeat
     */
    select?: MatchSeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchSeat
     */
    omit?: MatchSeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchSeatInclude<ExtArgs> | null
    where?: MatchSeatWhereInput
    orderBy?: MatchSeatOrderByWithRelationInput | MatchSeatOrderByWithRelationInput[]
    cursor?: MatchSeatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchSeatScalarFieldEnum | MatchSeatScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const StadiumScalarFieldEnum: {
    id: 'id',
    name: 'name',
    noOfRows: 'noOfRows',
    seatsPerRow: 'seatsPerRow',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StadiumScalarFieldEnum = (typeof StadiumScalarFieldEnum)[keyof typeof StadiumScalarFieldEnum]


  export const TeamScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TeamScalarFieldEnum = (typeof TeamScalarFieldEnum)[keyof typeof TeamScalarFieldEnum]


  export const MatchScalarFieldEnum: {
    id: 'id',
    dateTime: 'dateTime',
    homeTeamId: 'homeTeamId',
    awayTeamId: 'awayTeamId',
    stadiumId: 'stadiumId',
    mainRefereeName: 'mainRefereeName',
    linesmen1Name: 'linesmen1Name',
    linesmen2Name: 'linesmen2Name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MatchScalarFieldEnum = (typeof MatchScalarFieldEnum)[keyof typeof MatchScalarFieldEnum]


  export const MatchSeatScalarFieldEnum: {
    id: 'id',
    seatNumber: 'seatNumber',
    userId: 'userId',
    matchId: 'matchId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MatchSeatScalarFieldEnum = (typeof MatchSeatScalarFieldEnum)[keyof typeof MatchSeatScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    firstName: 'firstName',
    lastName: 'lastName',
    birthDate: 'birthDate',
    gender: 'gender',
    city: 'city',
    address: 'address',
    email: 'email',
    role: 'role',
    approved: 'approved',
    preferredTeamId: 'preferredTeamId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'Gender[]'
   */
  export type ListEnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type StadiumWhereInput = {
    AND?: StadiumWhereInput | StadiumWhereInput[]
    OR?: StadiumWhereInput[]
    NOT?: StadiumWhereInput | StadiumWhereInput[]
    id?: IntFilter<"Stadium"> | number
    name?: StringFilter<"Stadium"> | string
    noOfRows?: IntFilter<"Stadium"> | number
    seatsPerRow?: IntFilter<"Stadium"> | number
    createdAt?: DateTimeFilter<"Stadium"> | Date | string
    updatedAt?: DateTimeFilter<"Stadium"> | Date | string
    matches?: MatchListRelationFilter
  }

  export type StadiumOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    noOfRows?: SortOrder
    seatsPerRow?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    matches?: MatchOrderByRelationAggregateInput
  }

  export type StadiumWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: StadiumWhereInput | StadiumWhereInput[]
    OR?: StadiumWhereInput[]
    NOT?: StadiumWhereInput | StadiumWhereInput[]
    name?: StringFilter<"Stadium"> | string
    noOfRows?: IntFilter<"Stadium"> | number
    seatsPerRow?: IntFilter<"Stadium"> | number
    createdAt?: DateTimeFilter<"Stadium"> | Date | string
    updatedAt?: DateTimeFilter<"Stadium"> | Date | string
    matches?: MatchListRelationFilter
  }, "id">

  export type StadiumOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    noOfRows?: SortOrder
    seatsPerRow?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StadiumCountOrderByAggregateInput
    _avg?: StadiumAvgOrderByAggregateInput
    _max?: StadiumMaxOrderByAggregateInput
    _min?: StadiumMinOrderByAggregateInput
    _sum?: StadiumSumOrderByAggregateInput
  }

  export type StadiumScalarWhereWithAggregatesInput = {
    AND?: StadiumScalarWhereWithAggregatesInput | StadiumScalarWhereWithAggregatesInput[]
    OR?: StadiumScalarWhereWithAggregatesInput[]
    NOT?: StadiumScalarWhereWithAggregatesInput | StadiumScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Stadium"> | number
    name?: StringWithAggregatesFilter<"Stadium"> | string
    noOfRows?: IntWithAggregatesFilter<"Stadium"> | number
    seatsPerRow?: IntWithAggregatesFilter<"Stadium"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Stadium"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Stadium"> | Date | string
  }

  export type TeamWhereInput = {
    AND?: TeamWhereInput | TeamWhereInput[]
    OR?: TeamWhereInput[]
    NOT?: TeamWhereInput | TeamWhereInput[]
    id?: IntFilter<"Team"> | number
    name?: StringFilter<"Team"> | string
    createdAt?: DateTimeFilter<"Team"> | Date | string
    updatedAt?: DateTimeFilter<"Team"> | Date | string
    homeMatches?: MatchListRelationFilter
    awayMatches?: MatchListRelationFilter
    preferredBy?: UserListRelationFilter
  }

  export type TeamOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    homeMatches?: MatchOrderByRelationAggregateInput
    awayMatches?: MatchOrderByRelationAggregateInput
    preferredBy?: UserOrderByRelationAggregateInput
  }

  export type TeamWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TeamWhereInput | TeamWhereInput[]
    OR?: TeamWhereInput[]
    NOT?: TeamWhereInput | TeamWhereInput[]
    name?: StringFilter<"Team"> | string
    createdAt?: DateTimeFilter<"Team"> | Date | string
    updatedAt?: DateTimeFilter<"Team"> | Date | string
    homeMatches?: MatchListRelationFilter
    awayMatches?: MatchListRelationFilter
    preferredBy?: UserListRelationFilter
  }, "id">

  export type TeamOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TeamCountOrderByAggregateInput
    _avg?: TeamAvgOrderByAggregateInput
    _max?: TeamMaxOrderByAggregateInput
    _min?: TeamMinOrderByAggregateInput
    _sum?: TeamSumOrderByAggregateInput
  }

  export type TeamScalarWhereWithAggregatesInput = {
    AND?: TeamScalarWhereWithAggregatesInput | TeamScalarWhereWithAggregatesInput[]
    OR?: TeamScalarWhereWithAggregatesInput[]
    NOT?: TeamScalarWhereWithAggregatesInput | TeamScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Team"> | number
    name?: StringWithAggregatesFilter<"Team"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Team"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Team"> | Date | string
  }

  export type MatchWhereInput = {
    AND?: MatchWhereInput | MatchWhereInput[]
    OR?: MatchWhereInput[]
    NOT?: MatchWhereInput | MatchWhereInput[]
    id?: IntFilter<"Match"> | number
    dateTime?: DateTimeFilter<"Match"> | Date | string
    homeTeamId?: IntFilter<"Match"> | number
    awayTeamId?: IntFilter<"Match"> | number
    stadiumId?: IntFilter<"Match"> | number
    mainRefereeName?: StringFilter<"Match"> | string
    linesmen1Name?: StringFilter<"Match"> | string
    linesmen2Name?: StringFilter<"Match"> | string
    createdAt?: DateTimeFilter<"Match"> | Date | string
    updatedAt?: DateTimeFilter<"Match"> | Date | string
    homeTeam?: XOR<TeamScalarRelationFilter, TeamWhereInput>
    awayTeam?: XOR<TeamScalarRelationFilter, TeamWhereInput>
    stadium?: XOR<StadiumScalarRelationFilter, StadiumWhereInput>
    matchSeats?: MatchSeatListRelationFilter
  }

  export type MatchOrderByWithRelationInput = {
    id?: SortOrder
    dateTime?: SortOrder
    homeTeamId?: SortOrder
    awayTeamId?: SortOrder
    stadiumId?: SortOrder
    mainRefereeName?: SortOrder
    linesmen1Name?: SortOrder
    linesmen2Name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    homeTeam?: TeamOrderByWithRelationInput
    awayTeam?: TeamOrderByWithRelationInput
    stadium?: StadiumOrderByWithRelationInput
    matchSeats?: MatchSeatOrderByRelationAggregateInput
  }

  export type MatchWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MatchWhereInput | MatchWhereInput[]
    OR?: MatchWhereInput[]
    NOT?: MatchWhereInput | MatchWhereInput[]
    dateTime?: DateTimeFilter<"Match"> | Date | string
    homeTeamId?: IntFilter<"Match"> | number
    awayTeamId?: IntFilter<"Match"> | number
    stadiumId?: IntFilter<"Match"> | number
    mainRefereeName?: StringFilter<"Match"> | string
    linesmen1Name?: StringFilter<"Match"> | string
    linesmen2Name?: StringFilter<"Match"> | string
    createdAt?: DateTimeFilter<"Match"> | Date | string
    updatedAt?: DateTimeFilter<"Match"> | Date | string
    homeTeam?: XOR<TeamScalarRelationFilter, TeamWhereInput>
    awayTeam?: XOR<TeamScalarRelationFilter, TeamWhereInput>
    stadium?: XOR<StadiumScalarRelationFilter, StadiumWhereInput>
    matchSeats?: MatchSeatListRelationFilter
  }, "id">

  export type MatchOrderByWithAggregationInput = {
    id?: SortOrder
    dateTime?: SortOrder
    homeTeamId?: SortOrder
    awayTeamId?: SortOrder
    stadiumId?: SortOrder
    mainRefereeName?: SortOrder
    linesmen1Name?: SortOrder
    linesmen2Name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MatchCountOrderByAggregateInput
    _avg?: MatchAvgOrderByAggregateInput
    _max?: MatchMaxOrderByAggregateInput
    _min?: MatchMinOrderByAggregateInput
    _sum?: MatchSumOrderByAggregateInput
  }

  export type MatchScalarWhereWithAggregatesInput = {
    AND?: MatchScalarWhereWithAggregatesInput | MatchScalarWhereWithAggregatesInput[]
    OR?: MatchScalarWhereWithAggregatesInput[]
    NOT?: MatchScalarWhereWithAggregatesInput | MatchScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Match"> | number
    dateTime?: DateTimeWithAggregatesFilter<"Match"> | Date | string
    homeTeamId?: IntWithAggregatesFilter<"Match"> | number
    awayTeamId?: IntWithAggregatesFilter<"Match"> | number
    stadiumId?: IntWithAggregatesFilter<"Match"> | number
    mainRefereeName?: StringWithAggregatesFilter<"Match"> | string
    linesmen1Name?: StringWithAggregatesFilter<"Match"> | string
    linesmen2Name?: StringWithAggregatesFilter<"Match"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Match"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Match"> | Date | string
  }

  export type MatchSeatWhereInput = {
    AND?: MatchSeatWhereInput | MatchSeatWhereInput[]
    OR?: MatchSeatWhereInput[]
    NOT?: MatchSeatWhereInput | MatchSeatWhereInput[]
    id?: IntFilter<"MatchSeat"> | number
    seatNumber?: IntFilter<"MatchSeat"> | number
    userId?: IntFilter<"MatchSeat"> | number
    matchId?: IntFilter<"MatchSeat"> | number
    createdAt?: DateTimeFilter<"MatchSeat"> | Date | string
    updatedAt?: DateTimeFilter<"MatchSeat"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    match?: XOR<MatchScalarRelationFilter, MatchWhereInput>
  }

  export type MatchSeatOrderByWithRelationInput = {
    id?: SortOrder
    seatNumber?: SortOrder
    userId?: SortOrder
    matchId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    match?: MatchOrderByWithRelationInput
  }

  export type MatchSeatWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    matchId_seatNumber?: MatchSeatMatchIdSeatNumberCompoundUniqueInput
    AND?: MatchSeatWhereInput | MatchSeatWhereInput[]
    OR?: MatchSeatWhereInput[]
    NOT?: MatchSeatWhereInput | MatchSeatWhereInput[]
    seatNumber?: IntFilter<"MatchSeat"> | number
    userId?: IntFilter<"MatchSeat"> | number
    matchId?: IntFilter<"MatchSeat"> | number
    createdAt?: DateTimeFilter<"MatchSeat"> | Date | string
    updatedAt?: DateTimeFilter<"MatchSeat"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    match?: XOR<MatchScalarRelationFilter, MatchWhereInput>
  }, "id" | "matchId_seatNumber">

  export type MatchSeatOrderByWithAggregationInput = {
    id?: SortOrder
    seatNumber?: SortOrder
    userId?: SortOrder
    matchId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MatchSeatCountOrderByAggregateInput
    _avg?: MatchSeatAvgOrderByAggregateInput
    _max?: MatchSeatMaxOrderByAggregateInput
    _min?: MatchSeatMinOrderByAggregateInput
    _sum?: MatchSeatSumOrderByAggregateInput
  }

  export type MatchSeatScalarWhereWithAggregatesInput = {
    AND?: MatchSeatScalarWhereWithAggregatesInput | MatchSeatScalarWhereWithAggregatesInput[]
    OR?: MatchSeatScalarWhereWithAggregatesInput[]
    NOT?: MatchSeatScalarWhereWithAggregatesInput | MatchSeatScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MatchSeat"> | number
    seatNumber?: IntWithAggregatesFilter<"MatchSeat"> | number
    userId?: IntWithAggregatesFilter<"MatchSeat"> | number
    matchId?: IntWithAggregatesFilter<"MatchSeat"> | number
    createdAt?: DateTimeWithAggregatesFilter<"MatchSeat"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MatchSeat"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    birthDate?: DateTimeFilter<"User"> | Date | string
    gender?: EnumGenderFilter<"User"> | $Enums.Gender
    city?: StringFilter<"User"> | string
    address?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    approved?: BoolFilter<"User"> | boolean
    preferredTeamId?: IntNullableFilter<"User"> | number | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    preferredTeam?: XOR<TeamNullableScalarRelationFilter, TeamWhereInput> | null
    matchSeats?: MatchSeatListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    birthDate?: SortOrder
    gender?: SortOrder
    city?: SortOrder
    address?: SortOrderInput | SortOrder
    email?: SortOrder
    role?: SortOrder
    approved?: SortOrder
    preferredTeamId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    preferredTeam?: TeamOrderByWithRelationInput
    matchSeats?: MatchSeatOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    birthDate?: DateTimeFilter<"User"> | Date | string
    gender?: EnumGenderFilter<"User"> | $Enums.Gender
    city?: StringFilter<"User"> | string
    address?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    approved?: BoolFilter<"User"> | boolean
    preferredTeamId?: IntNullableFilter<"User"> | number | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    preferredTeam?: XOR<TeamNullableScalarRelationFilter, TeamWhereInput> | null
    matchSeats?: MatchSeatListRelationFilter
  }, "id" | "username" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    birthDate?: SortOrder
    gender?: SortOrder
    city?: SortOrder
    address?: SortOrderInput | SortOrder
    email?: SortOrder
    role?: SortOrder
    approved?: SortOrder
    preferredTeamId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    birthDate?: DateTimeWithAggregatesFilter<"User"> | Date | string
    gender?: EnumGenderWithAggregatesFilter<"User"> | $Enums.Gender
    city?: StringWithAggregatesFilter<"User"> | string
    address?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    approved?: BoolWithAggregatesFilter<"User"> | boolean
    preferredTeamId?: IntNullableWithAggregatesFilter<"User"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type StadiumCreateInput = {
    name: string
    noOfRows: number
    seatsPerRow: number
    createdAt?: Date | string
    updatedAt?: Date | string
    matches?: MatchCreateNestedManyWithoutStadiumInput
  }

  export type StadiumUncheckedCreateInput = {
    id?: number
    name: string
    noOfRows: number
    seatsPerRow: number
    createdAt?: Date | string
    updatedAt?: Date | string
    matches?: MatchUncheckedCreateNestedManyWithoutStadiumInput
  }

  export type StadiumUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    noOfRows?: IntFieldUpdateOperationsInput | number
    seatsPerRow?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matches?: MatchUpdateManyWithoutStadiumNestedInput
  }

  export type StadiumUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    noOfRows?: IntFieldUpdateOperationsInput | number
    seatsPerRow?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matches?: MatchUncheckedUpdateManyWithoutStadiumNestedInput
  }

  export type StadiumCreateManyInput = {
    id?: number
    name: string
    noOfRows: number
    seatsPerRow: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StadiumUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    noOfRows?: IntFieldUpdateOperationsInput | number
    seatsPerRow?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StadiumUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    noOfRows?: IntFieldUpdateOperationsInput | number
    seatsPerRow?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    homeMatches?: MatchCreateNestedManyWithoutHomeTeamInput
    awayMatches?: MatchCreateNestedManyWithoutAwayTeamInput
    preferredBy?: UserCreateNestedManyWithoutPreferredTeamInput
  }

  export type TeamUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    homeMatches?: MatchUncheckedCreateNestedManyWithoutHomeTeamInput
    awayMatches?: MatchUncheckedCreateNestedManyWithoutAwayTeamInput
    preferredBy?: UserUncheckedCreateNestedManyWithoutPreferredTeamInput
  }

  export type TeamUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    homeMatches?: MatchUpdateManyWithoutHomeTeamNestedInput
    awayMatches?: MatchUpdateManyWithoutAwayTeamNestedInput
    preferredBy?: UserUpdateManyWithoutPreferredTeamNestedInput
  }

  export type TeamUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    homeMatches?: MatchUncheckedUpdateManyWithoutHomeTeamNestedInput
    awayMatches?: MatchUncheckedUpdateManyWithoutAwayTeamNestedInput
    preferredBy?: UserUncheckedUpdateManyWithoutPreferredTeamNestedInput
  }

  export type TeamCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeamUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchCreateInput = {
    dateTime: Date | string
    mainRefereeName: string
    linesmen1Name: string
    linesmen2Name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    homeTeam: TeamCreateNestedOneWithoutHomeMatchesInput
    awayTeam: TeamCreateNestedOneWithoutAwayMatchesInput
    stadium: StadiumCreateNestedOneWithoutMatchesInput
    matchSeats?: MatchSeatCreateNestedManyWithoutMatchInput
  }

  export type MatchUncheckedCreateInput = {
    id?: number
    dateTime: Date | string
    homeTeamId: number
    awayTeamId: number
    stadiumId: number
    mainRefereeName: string
    linesmen1Name: string
    linesmen2Name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    matchSeats?: MatchSeatUncheckedCreateNestedManyWithoutMatchInput
  }

  export type MatchUpdateInput = {
    dateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    mainRefereeName?: StringFieldUpdateOperationsInput | string
    linesmen1Name?: StringFieldUpdateOperationsInput | string
    linesmen2Name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    homeTeam?: TeamUpdateOneRequiredWithoutHomeMatchesNestedInput
    awayTeam?: TeamUpdateOneRequiredWithoutAwayMatchesNestedInput
    stadium?: StadiumUpdateOneRequiredWithoutMatchesNestedInput
    matchSeats?: MatchSeatUpdateManyWithoutMatchNestedInput
  }

  export type MatchUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    homeTeamId?: IntFieldUpdateOperationsInput | number
    awayTeamId?: IntFieldUpdateOperationsInput | number
    stadiumId?: IntFieldUpdateOperationsInput | number
    mainRefereeName?: StringFieldUpdateOperationsInput | string
    linesmen1Name?: StringFieldUpdateOperationsInput | string
    linesmen2Name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matchSeats?: MatchSeatUncheckedUpdateManyWithoutMatchNestedInput
  }

  export type MatchCreateManyInput = {
    id?: number
    dateTime: Date | string
    homeTeamId: number
    awayTeamId: number
    stadiumId: number
    mainRefereeName: string
    linesmen1Name: string
    linesmen2Name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchUpdateManyMutationInput = {
    dateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    mainRefereeName?: StringFieldUpdateOperationsInput | string
    linesmen1Name?: StringFieldUpdateOperationsInput | string
    linesmen2Name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    homeTeamId?: IntFieldUpdateOperationsInput | number
    awayTeamId?: IntFieldUpdateOperationsInput | number
    stadiumId?: IntFieldUpdateOperationsInput | number
    mainRefereeName?: StringFieldUpdateOperationsInput | string
    linesmen1Name?: StringFieldUpdateOperationsInput | string
    linesmen2Name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchSeatCreateInput = {
    seatNumber: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutMatchSeatsInput
    match: MatchCreateNestedOneWithoutMatchSeatsInput
  }

  export type MatchSeatUncheckedCreateInput = {
    id?: number
    seatNumber: number
    userId: number
    matchId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchSeatUpdateInput = {
    seatNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMatchSeatsNestedInput
    match?: MatchUpdateOneRequiredWithoutMatchSeatsNestedInput
  }

  export type MatchSeatUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    seatNumber?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    matchId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchSeatCreateManyInput = {
    id?: number
    seatNumber: number
    userId: number
    matchId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchSeatUpdateManyMutationInput = {
    seatNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchSeatUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    seatNumber?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    matchId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    username: string
    password: string
    firstName: string
    lastName: string
    birthDate: Date | string
    gender: $Enums.Gender
    city: string
    address?: string | null
    email: string
    role: $Enums.UserRole
    approved?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    preferredTeam?: TeamCreateNestedOneWithoutPreferredByInput
    matchSeats?: MatchSeatCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    username: string
    password: string
    firstName: string
    lastName: string
    birthDate: Date | string
    gender: $Enums.Gender
    city: string
    address?: string | null
    email: string
    role: $Enums.UserRole
    approved?: boolean
    preferredTeamId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    matchSeats?: MatchSeatUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    city?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    approved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    preferredTeam?: TeamUpdateOneWithoutPreferredByNestedInput
    matchSeats?: MatchSeatUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    city?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    approved?: BoolFieldUpdateOperationsInput | boolean
    preferredTeamId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matchSeats?: MatchSeatUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    username: string
    password: string
    firstName: string
    lastName: string
    birthDate: Date | string
    gender: $Enums.Gender
    city: string
    address?: string | null
    email: string
    role: $Enums.UserRole
    approved?: boolean
    preferredTeamId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    city?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    approved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    city?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    approved?: BoolFieldUpdateOperationsInput | boolean
    preferredTeamId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type MatchListRelationFilter = {
    every?: MatchWhereInput
    some?: MatchWhereInput
    none?: MatchWhereInput
  }

  export type MatchOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StadiumCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    noOfRows?: SortOrder
    seatsPerRow?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StadiumAvgOrderByAggregateInput = {
    id?: SortOrder
    noOfRows?: SortOrder
    seatsPerRow?: SortOrder
  }

  export type StadiumMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    noOfRows?: SortOrder
    seatsPerRow?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StadiumMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    noOfRows?: SortOrder
    seatsPerRow?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StadiumSumOrderByAggregateInput = {
    id?: SortOrder
    noOfRows?: SortOrder
    seatsPerRow?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TeamCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeamAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TeamMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeamMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeamSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TeamScalarRelationFilter = {
    is?: TeamWhereInput
    isNot?: TeamWhereInput
  }

  export type StadiumScalarRelationFilter = {
    is?: StadiumWhereInput
    isNot?: StadiumWhereInput
  }

  export type MatchSeatListRelationFilter = {
    every?: MatchSeatWhereInput
    some?: MatchSeatWhereInput
    none?: MatchSeatWhereInput
  }

  export type MatchSeatOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MatchCountOrderByAggregateInput = {
    id?: SortOrder
    dateTime?: SortOrder
    homeTeamId?: SortOrder
    awayTeamId?: SortOrder
    stadiumId?: SortOrder
    mainRefereeName?: SortOrder
    linesmen1Name?: SortOrder
    linesmen2Name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MatchAvgOrderByAggregateInput = {
    id?: SortOrder
    homeTeamId?: SortOrder
    awayTeamId?: SortOrder
    stadiumId?: SortOrder
  }

  export type MatchMaxOrderByAggregateInput = {
    id?: SortOrder
    dateTime?: SortOrder
    homeTeamId?: SortOrder
    awayTeamId?: SortOrder
    stadiumId?: SortOrder
    mainRefereeName?: SortOrder
    linesmen1Name?: SortOrder
    linesmen2Name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MatchMinOrderByAggregateInput = {
    id?: SortOrder
    dateTime?: SortOrder
    homeTeamId?: SortOrder
    awayTeamId?: SortOrder
    stadiumId?: SortOrder
    mainRefereeName?: SortOrder
    linesmen1Name?: SortOrder
    linesmen2Name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MatchSumOrderByAggregateInput = {
    id?: SortOrder
    homeTeamId?: SortOrder
    awayTeamId?: SortOrder
    stadiumId?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type MatchScalarRelationFilter = {
    is?: MatchWhereInput
    isNot?: MatchWhereInput
  }

  export type MatchSeatMatchIdSeatNumberCompoundUniqueInput = {
    matchId: number
    seatNumber: number
  }

  export type MatchSeatCountOrderByAggregateInput = {
    id?: SortOrder
    seatNumber?: SortOrder
    userId?: SortOrder
    matchId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MatchSeatAvgOrderByAggregateInput = {
    id?: SortOrder
    seatNumber?: SortOrder
    userId?: SortOrder
    matchId?: SortOrder
  }

  export type MatchSeatMaxOrderByAggregateInput = {
    id?: SortOrder
    seatNumber?: SortOrder
    userId?: SortOrder
    matchId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MatchSeatMinOrderByAggregateInput = {
    id?: SortOrder
    seatNumber?: SortOrder
    userId?: SortOrder
    matchId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MatchSeatSumOrderByAggregateInput = {
    id?: SortOrder
    seatNumber?: SortOrder
    userId?: SortOrder
    matchId?: SortOrder
  }

  export type EnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type TeamNullableScalarRelationFilter = {
    is?: TeamWhereInput | null
    isNot?: TeamWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    birthDate?: SortOrder
    gender?: SortOrder
    city?: SortOrder
    address?: SortOrder
    email?: SortOrder
    role?: SortOrder
    approved?: SortOrder
    preferredTeamId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    preferredTeamId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    birthDate?: SortOrder
    gender?: SortOrder
    city?: SortOrder
    address?: SortOrder
    email?: SortOrder
    role?: SortOrder
    approved?: SortOrder
    preferredTeamId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    birthDate?: SortOrder
    gender?: SortOrder
    city?: SortOrder
    address?: SortOrder
    email?: SortOrder
    role?: SortOrder
    approved?: SortOrder
    preferredTeamId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    preferredTeamId?: SortOrder
  }

  export type EnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type MatchCreateNestedManyWithoutStadiumInput = {
    create?: XOR<MatchCreateWithoutStadiumInput, MatchUncheckedCreateWithoutStadiumInput> | MatchCreateWithoutStadiumInput[] | MatchUncheckedCreateWithoutStadiumInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutStadiumInput | MatchCreateOrConnectWithoutStadiumInput[]
    createMany?: MatchCreateManyStadiumInputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type MatchUncheckedCreateNestedManyWithoutStadiumInput = {
    create?: XOR<MatchCreateWithoutStadiumInput, MatchUncheckedCreateWithoutStadiumInput> | MatchCreateWithoutStadiumInput[] | MatchUncheckedCreateWithoutStadiumInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutStadiumInput | MatchCreateOrConnectWithoutStadiumInput[]
    createMany?: MatchCreateManyStadiumInputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type MatchUpdateManyWithoutStadiumNestedInput = {
    create?: XOR<MatchCreateWithoutStadiumInput, MatchUncheckedCreateWithoutStadiumInput> | MatchCreateWithoutStadiumInput[] | MatchUncheckedCreateWithoutStadiumInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutStadiumInput | MatchCreateOrConnectWithoutStadiumInput[]
    upsert?: MatchUpsertWithWhereUniqueWithoutStadiumInput | MatchUpsertWithWhereUniqueWithoutStadiumInput[]
    createMany?: MatchCreateManyStadiumInputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutStadiumInput | MatchUpdateWithWhereUniqueWithoutStadiumInput[]
    updateMany?: MatchUpdateManyWithWhereWithoutStadiumInput | MatchUpdateManyWithWhereWithoutStadiumInput[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type MatchUncheckedUpdateManyWithoutStadiumNestedInput = {
    create?: XOR<MatchCreateWithoutStadiumInput, MatchUncheckedCreateWithoutStadiumInput> | MatchCreateWithoutStadiumInput[] | MatchUncheckedCreateWithoutStadiumInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutStadiumInput | MatchCreateOrConnectWithoutStadiumInput[]
    upsert?: MatchUpsertWithWhereUniqueWithoutStadiumInput | MatchUpsertWithWhereUniqueWithoutStadiumInput[]
    createMany?: MatchCreateManyStadiumInputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutStadiumInput | MatchUpdateWithWhereUniqueWithoutStadiumInput[]
    updateMany?: MatchUpdateManyWithWhereWithoutStadiumInput | MatchUpdateManyWithWhereWithoutStadiumInput[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type MatchCreateNestedManyWithoutHomeTeamInput = {
    create?: XOR<MatchCreateWithoutHomeTeamInput, MatchUncheckedCreateWithoutHomeTeamInput> | MatchCreateWithoutHomeTeamInput[] | MatchUncheckedCreateWithoutHomeTeamInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutHomeTeamInput | MatchCreateOrConnectWithoutHomeTeamInput[]
    createMany?: MatchCreateManyHomeTeamInputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type MatchCreateNestedManyWithoutAwayTeamInput = {
    create?: XOR<MatchCreateWithoutAwayTeamInput, MatchUncheckedCreateWithoutAwayTeamInput> | MatchCreateWithoutAwayTeamInput[] | MatchUncheckedCreateWithoutAwayTeamInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutAwayTeamInput | MatchCreateOrConnectWithoutAwayTeamInput[]
    createMany?: MatchCreateManyAwayTeamInputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutPreferredTeamInput = {
    create?: XOR<UserCreateWithoutPreferredTeamInput, UserUncheckedCreateWithoutPreferredTeamInput> | UserCreateWithoutPreferredTeamInput[] | UserUncheckedCreateWithoutPreferredTeamInput[]
    connectOrCreate?: UserCreateOrConnectWithoutPreferredTeamInput | UserCreateOrConnectWithoutPreferredTeamInput[]
    createMany?: UserCreateManyPreferredTeamInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type MatchUncheckedCreateNestedManyWithoutHomeTeamInput = {
    create?: XOR<MatchCreateWithoutHomeTeamInput, MatchUncheckedCreateWithoutHomeTeamInput> | MatchCreateWithoutHomeTeamInput[] | MatchUncheckedCreateWithoutHomeTeamInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutHomeTeamInput | MatchCreateOrConnectWithoutHomeTeamInput[]
    createMany?: MatchCreateManyHomeTeamInputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type MatchUncheckedCreateNestedManyWithoutAwayTeamInput = {
    create?: XOR<MatchCreateWithoutAwayTeamInput, MatchUncheckedCreateWithoutAwayTeamInput> | MatchCreateWithoutAwayTeamInput[] | MatchUncheckedCreateWithoutAwayTeamInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutAwayTeamInput | MatchCreateOrConnectWithoutAwayTeamInput[]
    createMany?: MatchCreateManyAwayTeamInputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutPreferredTeamInput = {
    create?: XOR<UserCreateWithoutPreferredTeamInput, UserUncheckedCreateWithoutPreferredTeamInput> | UserCreateWithoutPreferredTeamInput[] | UserUncheckedCreateWithoutPreferredTeamInput[]
    connectOrCreate?: UserCreateOrConnectWithoutPreferredTeamInput | UserCreateOrConnectWithoutPreferredTeamInput[]
    createMany?: UserCreateManyPreferredTeamInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type MatchUpdateManyWithoutHomeTeamNestedInput = {
    create?: XOR<MatchCreateWithoutHomeTeamInput, MatchUncheckedCreateWithoutHomeTeamInput> | MatchCreateWithoutHomeTeamInput[] | MatchUncheckedCreateWithoutHomeTeamInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutHomeTeamInput | MatchCreateOrConnectWithoutHomeTeamInput[]
    upsert?: MatchUpsertWithWhereUniqueWithoutHomeTeamInput | MatchUpsertWithWhereUniqueWithoutHomeTeamInput[]
    createMany?: MatchCreateManyHomeTeamInputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutHomeTeamInput | MatchUpdateWithWhereUniqueWithoutHomeTeamInput[]
    updateMany?: MatchUpdateManyWithWhereWithoutHomeTeamInput | MatchUpdateManyWithWhereWithoutHomeTeamInput[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type MatchUpdateManyWithoutAwayTeamNestedInput = {
    create?: XOR<MatchCreateWithoutAwayTeamInput, MatchUncheckedCreateWithoutAwayTeamInput> | MatchCreateWithoutAwayTeamInput[] | MatchUncheckedCreateWithoutAwayTeamInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutAwayTeamInput | MatchCreateOrConnectWithoutAwayTeamInput[]
    upsert?: MatchUpsertWithWhereUniqueWithoutAwayTeamInput | MatchUpsertWithWhereUniqueWithoutAwayTeamInput[]
    createMany?: MatchCreateManyAwayTeamInputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutAwayTeamInput | MatchUpdateWithWhereUniqueWithoutAwayTeamInput[]
    updateMany?: MatchUpdateManyWithWhereWithoutAwayTeamInput | MatchUpdateManyWithWhereWithoutAwayTeamInput[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type UserUpdateManyWithoutPreferredTeamNestedInput = {
    create?: XOR<UserCreateWithoutPreferredTeamInput, UserUncheckedCreateWithoutPreferredTeamInput> | UserCreateWithoutPreferredTeamInput[] | UserUncheckedCreateWithoutPreferredTeamInput[]
    connectOrCreate?: UserCreateOrConnectWithoutPreferredTeamInput | UserCreateOrConnectWithoutPreferredTeamInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutPreferredTeamInput | UserUpsertWithWhereUniqueWithoutPreferredTeamInput[]
    createMany?: UserCreateManyPreferredTeamInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutPreferredTeamInput | UserUpdateWithWhereUniqueWithoutPreferredTeamInput[]
    updateMany?: UserUpdateManyWithWhereWithoutPreferredTeamInput | UserUpdateManyWithWhereWithoutPreferredTeamInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type MatchUncheckedUpdateManyWithoutHomeTeamNestedInput = {
    create?: XOR<MatchCreateWithoutHomeTeamInput, MatchUncheckedCreateWithoutHomeTeamInput> | MatchCreateWithoutHomeTeamInput[] | MatchUncheckedCreateWithoutHomeTeamInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutHomeTeamInput | MatchCreateOrConnectWithoutHomeTeamInput[]
    upsert?: MatchUpsertWithWhereUniqueWithoutHomeTeamInput | MatchUpsertWithWhereUniqueWithoutHomeTeamInput[]
    createMany?: MatchCreateManyHomeTeamInputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutHomeTeamInput | MatchUpdateWithWhereUniqueWithoutHomeTeamInput[]
    updateMany?: MatchUpdateManyWithWhereWithoutHomeTeamInput | MatchUpdateManyWithWhereWithoutHomeTeamInput[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type MatchUncheckedUpdateManyWithoutAwayTeamNestedInput = {
    create?: XOR<MatchCreateWithoutAwayTeamInput, MatchUncheckedCreateWithoutAwayTeamInput> | MatchCreateWithoutAwayTeamInput[] | MatchUncheckedCreateWithoutAwayTeamInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutAwayTeamInput | MatchCreateOrConnectWithoutAwayTeamInput[]
    upsert?: MatchUpsertWithWhereUniqueWithoutAwayTeamInput | MatchUpsertWithWhereUniqueWithoutAwayTeamInput[]
    createMany?: MatchCreateManyAwayTeamInputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutAwayTeamInput | MatchUpdateWithWhereUniqueWithoutAwayTeamInput[]
    updateMany?: MatchUpdateManyWithWhereWithoutAwayTeamInput | MatchUpdateManyWithWhereWithoutAwayTeamInput[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutPreferredTeamNestedInput = {
    create?: XOR<UserCreateWithoutPreferredTeamInput, UserUncheckedCreateWithoutPreferredTeamInput> | UserCreateWithoutPreferredTeamInput[] | UserUncheckedCreateWithoutPreferredTeamInput[]
    connectOrCreate?: UserCreateOrConnectWithoutPreferredTeamInput | UserCreateOrConnectWithoutPreferredTeamInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutPreferredTeamInput | UserUpsertWithWhereUniqueWithoutPreferredTeamInput[]
    createMany?: UserCreateManyPreferredTeamInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutPreferredTeamInput | UserUpdateWithWhereUniqueWithoutPreferredTeamInput[]
    updateMany?: UserUpdateManyWithWhereWithoutPreferredTeamInput | UserUpdateManyWithWhereWithoutPreferredTeamInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type TeamCreateNestedOneWithoutHomeMatchesInput = {
    create?: XOR<TeamCreateWithoutHomeMatchesInput, TeamUncheckedCreateWithoutHomeMatchesInput>
    connectOrCreate?: TeamCreateOrConnectWithoutHomeMatchesInput
    connect?: TeamWhereUniqueInput
  }

  export type TeamCreateNestedOneWithoutAwayMatchesInput = {
    create?: XOR<TeamCreateWithoutAwayMatchesInput, TeamUncheckedCreateWithoutAwayMatchesInput>
    connectOrCreate?: TeamCreateOrConnectWithoutAwayMatchesInput
    connect?: TeamWhereUniqueInput
  }

  export type StadiumCreateNestedOneWithoutMatchesInput = {
    create?: XOR<StadiumCreateWithoutMatchesInput, StadiumUncheckedCreateWithoutMatchesInput>
    connectOrCreate?: StadiumCreateOrConnectWithoutMatchesInput
    connect?: StadiumWhereUniqueInput
  }

  export type MatchSeatCreateNestedManyWithoutMatchInput = {
    create?: XOR<MatchSeatCreateWithoutMatchInput, MatchSeatUncheckedCreateWithoutMatchInput> | MatchSeatCreateWithoutMatchInput[] | MatchSeatUncheckedCreateWithoutMatchInput[]
    connectOrCreate?: MatchSeatCreateOrConnectWithoutMatchInput | MatchSeatCreateOrConnectWithoutMatchInput[]
    createMany?: MatchSeatCreateManyMatchInputEnvelope
    connect?: MatchSeatWhereUniqueInput | MatchSeatWhereUniqueInput[]
  }

  export type MatchSeatUncheckedCreateNestedManyWithoutMatchInput = {
    create?: XOR<MatchSeatCreateWithoutMatchInput, MatchSeatUncheckedCreateWithoutMatchInput> | MatchSeatCreateWithoutMatchInput[] | MatchSeatUncheckedCreateWithoutMatchInput[]
    connectOrCreate?: MatchSeatCreateOrConnectWithoutMatchInput | MatchSeatCreateOrConnectWithoutMatchInput[]
    createMany?: MatchSeatCreateManyMatchInputEnvelope
    connect?: MatchSeatWhereUniqueInput | MatchSeatWhereUniqueInput[]
  }

  export type TeamUpdateOneRequiredWithoutHomeMatchesNestedInput = {
    create?: XOR<TeamCreateWithoutHomeMatchesInput, TeamUncheckedCreateWithoutHomeMatchesInput>
    connectOrCreate?: TeamCreateOrConnectWithoutHomeMatchesInput
    upsert?: TeamUpsertWithoutHomeMatchesInput
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutHomeMatchesInput, TeamUpdateWithoutHomeMatchesInput>, TeamUncheckedUpdateWithoutHomeMatchesInput>
  }

  export type TeamUpdateOneRequiredWithoutAwayMatchesNestedInput = {
    create?: XOR<TeamCreateWithoutAwayMatchesInput, TeamUncheckedCreateWithoutAwayMatchesInput>
    connectOrCreate?: TeamCreateOrConnectWithoutAwayMatchesInput
    upsert?: TeamUpsertWithoutAwayMatchesInput
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutAwayMatchesInput, TeamUpdateWithoutAwayMatchesInput>, TeamUncheckedUpdateWithoutAwayMatchesInput>
  }

  export type StadiumUpdateOneRequiredWithoutMatchesNestedInput = {
    create?: XOR<StadiumCreateWithoutMatchesInput, StadiumUncheckedCreateWithoutMatchesInput>
    connectOrCreate?: StadiumCreateOrConnectWithoutMatchesInput
    upsert?: StadiumUpsertWithoutMatchesInput
    connect?: StadiumWhereUniqueInput
    update?: XOR<XOR<StadiumUpdateToOneWithWhereWithoutMatchesInput, StadiumUpdateWithoutMatchesInput>, StadiumUncheckedUpdateWithoutMatchesInput>
  }

  export type MatchSeatUpdateManyWithoutMatchNestedInput = {
    create?: XOR<MatchSeatCreateWithoutMatchInput, MatchSeatUncheckedCreateWithoutMatchInput> | MatchSeatCreateWithoutMatchInput[] | MatchSeatUncheckedCreateWithoutMatchInput[]
    connectOrCreate?: MatchSeatCreateOrConnectWithoutMatchInput | MatchSeatCreateOrConnectWithoutMatchInput[]
    upsert?: MatchSeatUpsertWithWhereUniqueWithoutMatchInput | MatchSeatUpsertWithWhereUniqueWithoutMatchInput[]
    createMany?: MatchSeatCreateManyMatchInputEnvelope
    set?: MatchSeatWhereUniqueInput | MatchSeatWhereUniqueInput[]
    disconnect?: MatchSeatWhereUniqueInput | MatchSeatWhereUniqueInput[]
    delete?: MatchSeatWhereUniqueInput | MatchSeatWhereUniqueInput[]
    connect?: MatchSeatWhereUniqueInput | MatchSeatWhereUniqueInput[]
    update?: MatchSeatUpdateWithWhereUniqueWithoutMatchInput | MatchSeatUpdateWithWhereUniqueWithoutMatchInput[]
    updateMany?: MatchSeatUpdateManyWithWhereWithoutMatchInput | MatchSeatUpdateManyWithWhereWithoutMatchInput[]
    deleteMany?: MatchSeatScalarWhereInput | MatchSeatScalarWhereInput[]
  }

  export type MatchSeatUncheckedUpdateManyWithoutMatchNestedInput = {
    create?: XOR<MatchSeatCreateWithoutMatchInput, MatchSeatUncheckedCreateWithoutMatchInput> | MatchSeatCreateWithoutMatchInput[] | MatchSeatUncheckedCreateWithoutMatchInput[]
    connectOrCreate?: MatchSeatCreateOrConnectWithoutMatchInput | MatchSeatCreateOrConnectWithoutMatchInput[]
    upsert?: MatchSeatUpsertWithWhereUniqueWithoutMatchInput | MatchSeatUpsertWithWhereUniqueWithoutMatchInput[]
    createMany?: MatchSeatCreateManyMatchInputEnvelope
    set?: MatchSeatWhereUniqueInput | MatchSeatWhereUniqueInput[]
    disconnect?: MatchSeatWhereUniqueInput | MatchSeatWhereUniqueInput[]
    delete?: MatchSeatWhereUniqueInput | MatchSeatWhereUniqueInput[]
    connect?: MatchSeatWhereUniqueInput | MatchSeatWhereUniqueInput[]
    update?: MatchSeatUpdateWithWhereUniqueWithoutMatchInput | MatchSeatUpdateWithWhereUniqueWithoutMatchInput[]
    updateMany?: MatchSeatUpdateManyWithWhereWithoutMatchInput | MatchSeatUpdateManyWithWhereWithoutMatchInput[]
    deleteMany?: MatchSeatScalarWhereInput | MatchSeatScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutMatchSeatsInput = {
    create?: XOR<UserCreateWithoutMatchSeatsInput, UserUncheckedCreateWithoutMatchSeatsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMatchSeatsInput
    connect?: UserWhereUniqueInput
  }

  export type MatchCreateNestedOneWithoutMatchSeatsInput = {
    create?: XOR<MatchCreateWithoutMatchSeatsInput, MatchUncheckedCreateWithoutMatchSeatsInput>
    connectOrCreate?: MatchCreateOrConnectWithoutMatchSeatsInput
    connect?: MatchWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutMatchSeatsNestedInput = {
    create?: XOR<UserCreateWithoutMatchSeatsInput, UserUncheckedCreateWithoutMatchSeatsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMatchSeatsInput
    upsert?: UserUpsertWithoutMatchSeatsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMatchSeatsInput, UserUpdateWithoutMatchSeatsInput>, UserUncheckedUpdateWithoutMatchSeatsInput>
  }

  export type MatchUpdateOneRequiredWithoutMatchSeatsNestedInput = {
    create?: XOR<MatchCreateWithoutMatchSeatsInput, MatchUncheckedCreateWithoutMatchSeatsInput>
    connectOrCreate?: MatchCreateOrConnectWithoutMatchSeatsInput
    upsert?: MatchUpsertWithoutMatchSeatsInput
    connect?: MatchWhereUniqueInput
    update?: XOR<XOR<MatchUpdateToOneWithWhereWithoutMatchSeatsInput, MatchUpdateWithoutMatchSeatsInput>, MatchUncheckedUpdateWithoutMatchSeatsInput>
  }

  export type TeamCreateNestedOneWithoutPreferredByInput = {
    create?: XOR<TeamCreateWithoutPreferredByInput, TeamUncheckedCreateWithoutPreferredByInput>
    connectOrCreate?: TeamCreateOrConnectWithoutPreferredByInput
    connect?: TeamWhereUniqueInput
  }

  export type MatchSeatCreateNestedManyWithoutUserInput = {
    create?: XOR<MatchSeatCreateWithoutUserInput, MatchSeatUncheckedCreateWithoutUserInput> | MatchSeatCreateWithoutUserInput[] | MatchSeatUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MatchSeatCreateOrConnectWithoutUserInput | MatchSeatCreateOrConnectWithoutUserInput[]
    createMany?: MatchSeatCreateManyUserInputEnvelope
    connect?: MatchSeatWhereUniqueInput | MatchSeatWhereUniqueInput[]
  }

  export type MatchSeatUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MatchSeatCreateWithoutUserInput, MatchSeatUncheckedCreateWithoutUserInput> | MatchSeatCreateWithoutUserInput[] | MatchSeatUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MatchSeatCreateOrConnectWithoutUserInput | MatchSeatCreateOrConnectWithoutUserInput[]
    createMany?: MatchSeatCreateManyUserInputEnvelope
    connect?: MatchSeatWhereUniqueInput | MatchSeatWhereUniqueInput[]
  }

  export type EnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type TeamUpdateOneWithoutPreferredByNestedInput = {
    create?: XOR<TeamCreateWithoutPreferredByInput, TeamUncheckedCreateWithoutPreferredByInput>
    connectOrCreate?: TeamCreateOrConnectWithoutPreferredByInput
    upsert?: TeamUpsertWithoutPreferredByInput
    disconnect?: TeamWhereInput | boolean
    delete?: TeamWhereInput | boolean
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutPreferredByInput, TeamUpdateWithoutPreferredByInput>, TeamUncheckedUpdateWithoutPreferredByInput>
  }

  export type MatchSeatUpdateManyWithoutUserNestedInput = {
    create?: XOR<MatchSeatCreateWithoutUserInput, MatchSeatUncheckedCreateWithoutUserInput> | MatchSeatCreateWithoutUserInput[] | MatchSeatUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MatchSeatCreateOrConnectWithoutUserInput | MatchSeatCreateOrConnectWithoutUserInput[]
    upsert?: MatchSeatUpsertWithWhereUniqueWithoutUserInput | MatchSeatUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MatchSeatCreateManyUserInputEnvelope
    set?: MatchSeatWhereUniqueInput | MatchSeatWhereUniqueInput[]
    disconnect?: MatchSeatWhereUniqueInput | MatchSeatWhereUniqueInput[]
    delete?: MatchSeatWhereUniqueInput | MatchSeatWhereUniqueInput[]
    connect?: MatchSeatWhereUniqueInput | MatchSeatWhereUniqueInput[]
    update?: MatchSeatUpdateWithWhereUniqueWithoutUserInput | MatchSeatUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MatchSeatUpdateManyWithWhereWithoutUserInput | MatchSeatUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MatchSeatScalarWhereInput | MatchSeatScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MatchSeatUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MatchSeatCreateWithoutUserInput, MatchSeatUncheckedCreateWithoutUserInput> | MatchSeatCreateWithoutUserInput[] | MatchSeatUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MatchSeatCreateOrConnectWithoutUserInput | MatchSeatCreateOrConnectWithoutUserInput[]
    upsert?: MatchSeatUpsertWithWhereUniqueWithoutUserInput | MatchSeatUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MatchSeatCreateManyUserInputEnvelope
    set?: MatchSeatWhereUniqueInput | MatchSeatWhereUniqueInput[]
    disconnect?: MatchSeatWhereUniqueInput | MatchSeatWhereUniqueInput[]
    delete?: MatchSeatWhereUniqueInput | MatchSeatWhereUniqueInput[]
    connect?: MatchSeatWhereUniqueInput | MatchSeatWhereUniqueInput[]
    update?: MatchSeatUpdateWithWhereUniqueWithoutUserInput | MatchSeatUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MatchSeatUpdateManyWithWhereWithoutUserInput | MatchSeatUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MatchSeatScalarWhereInput | MatchSeatScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type MatchCreateWithoutStadiumInput = {
    dateTime: Date | string
    mainRefereeName: string
    linesmen1Name: string
    linesmen2Name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    homeTeam: TeamCreateNestedOneWithoutHomeMatchesInput
    awayTeam: TeamCreateNestedOneWithoutAwayMatchesInput
    matchSeats?: MatchSeatCreateNestedManyWithoutMatchInput
  }

  export type MatchUncheckedCreateWithoutStadiumInput = {
    id?: number
    dateTime: Date | string
    homeTeamId: number
    awayTeamId: number
    mainRefereeName: string
    linesmen1Name: string
    linesmen2Name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    matchSeats?: MatchSeatUncheckedCreateNestedManyWithoutMatchInput
  }

  export type MatchCreateOrConnectWithoutStadiumInput = {
    where: MatchWhereUniqueInput
    create: XOR<MatchCreateWithoutStadiumInput, MatchUncheckedCreateWithoutStadiumInput>
  }

  export type MatchCreateManyStadiumInputEnvelope = {
    data: MatchCreateManyStadiumInput | MatchCreateManyStadiumInput[]
    skipDuplicates?: boolean
  }

  export type MatchUpsertWithWhereUniqueWithoutStadiumInput = {
    where: MatchWhereUniqueInput
    update: XOR<MatchUpdateWithoutStadiumInput, MatchUncheckedUpdateWithoutStadiumInput>
    create: XOR<MatchCreateWithoutStadiumInput, MatchUncheckedCreateWithoutStadiumInput>
  }

  export type MatchUpdateWithWhereUniqueWithoutStadiumInput = {
    where: MatchWhereUniqueInput
    data: XOR<MatchUpdateWithoutStadiumInput, MatchUncheckedUpdateWithoutStadiumInput>
  }

  export type MatchUpdateManyWithWhereWithoutStadiumInput = {
    where: MatchScalarWhereInput
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyWithoutStadiumInput>
  }

  export type MatchScalarWhereInput = {
    AND?: MatchScalarWhereInput | MatchScalarWhereInput[]
    OR?: MatchScalarWhereInput[]
    NOT?: MatchScalarWhereInput | MatchScalarWhereInput[]
    id?: IntFilter<"Match"> | number
    dateTime?: DateTimeFilter<"Match"> | Date | string
    homeTeamId?: IntFilter<"Match"> | number
    awayTeamId?: IntFilter<"Match"> | number
    stadiumId?: IntFilter<"Match"> | number
    mainRefereeName?: StringFilter<"Match"> | string
    linesmen1Name?: StringFilter<"Match"> | string
    linesmen2Name?: StringFilter<"Match"> | string
    createdAt?: DateTimeFilter<"Match"> | Date | string
    updatedAt?: DateTimeFilter<"Match"> | Date | string
  }

  export type MatchCreateWithoutHomeTeamInput = {
    dateTime: Date | string
    mainRefereeName: string
    linesmen1Name: string
    linesmen2Name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    awayTeam: TeamCreateNestedOneWithoutAwayMatchesInput
    stadium: StadiumCreateNestedOneWithoutMatchesInput
    matchSeats?: MatchSeatCreateNestedManyWithoutMatchInput
  }

  export type MatchUncheckedCreateWithoutHomeTeamInput = {
    id?: number
    dateTime: Date | string
    awayTeamId: number
    stadiumId: number
    mainRefereeName: string
    linesmen1Name: string
    linesmen2Name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    matchSeats?: MatchSeatUncheckedCreateNestedManyWithoutMatchInput
  }

  export type MatchCreateOrConnectWithoutHomeTeamInput = {
    where: MatchWhereUniqueInput
    create: XOR<MatchCreateWithoutHomeTeamInput, MatchUncheckedCreateWithoutHomeTeamInput>
  }

  export type MatchCreateManyHomeTeamInputEnvelope = {
    data: MatchCreateManyHomeTeamInput | MatchCreateManyHomeTeamInput[]
    skipDuplicates?: boolean
  }

  export type MatchCreateWithoutAwayTeamInput = {
    dateTime: Date | string
    mainRefereeName: string
    linesmen1Name: string
    linesmen2Name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    homeTeam: TeamCreateNestedOneWithoutHomeMatchesInput
    stadium: StadiumCreateNestedOneWithoutMatchesInput
    matchSeats?: MatchSeatCreateNestedManyWithoutMatchInput
  }

  export type MatchUncheckedCreateWithoutAwayTeamInput = {
    id?: number
    dateTime: Date | string
    homeTeamId: number
    stadiumId: number
    mainRefereeName: string
    linesmen1Name: string
    linesmen2Name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    matchSeats?: MatchSeatUncheckedCreateNestedManyWithoutMatchInput
  }

  export type MatchCreateOrConnectWithoutAwayTeamInput = {
    where: MatchWhereUniqueInput
    create: XOR<MatchCreateWithoutAwayTeamInput, MatchUncheckedCreateWithoutAwayTeamInput>
  }

  export type MatchCreateManyAwayTeamInputEnvelope = {
    data: MatchCreateManyAwayTeamInput | MatchCreateManyAwayTeamInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutPreferredTeamInput = {
    username: string
    password: string
    firstName: string
    lastName: string
    birthDate: Date | string
    gender: $Enums.Gender
    city: string
    address?: string | null
    email: string
    role: $Enums.UserRole
    approved?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    matchSeats?: MatchSeatCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPreferredTeamInput = {
    id?: number
    username: string
    password: string
    firstName: string
    lastName: string
    birthDate: Date | string
    gender: $Enums.Gender
    city: string
    address?: string | null
    email: string
    role: $Enums.UserRole
    approved?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    matchSeats?: MatchSeatUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPreferredTeamInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPreferredTeamInput, UserUncheckedCreateWithoutPreferredTeamInput>
  }

  export type UserCreateManyPreferredTeamInputEnvelope = {
    data: UserCreateManyPreferredTeamInput | UserCreateManyPreferredTeamInput[]
    skipDuplicates?: boolean
  }

  export type MatchUpsertWithWhereUniqueWithoutHomeTeamInput = {
    where: MatchWhereUniqueInput
    update: XOR<MatchUpdateWithoutHomeTeamInput, MatchUncheckedUpdateWithoutHomeTeamInput>
    create: XOR<MatchCreateWithoutHomeTeamInput, MatchUncheckedCreateWithoutHomeTeamInput>
  }

  export type MatchUpdateWithWhereUniqueWithoutHomeTeamInput = {
    where: MatchWhereUniqueInput
    data: XOR<MatchUpdateWithoutHomeTeamInput, MatchUncheckedUpdateWithoutHomeTeamInput>
  }

  export type MatchUpdateManyWithWhereWithoutHomeTeamInput = {
    where: MatchScalarWhereInput
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyWithoutHomeTeamInput>
  }

  export type MatchUpsertWithWhereUniqueWithoutAwayTeamInput = {
    where: MatchWhereUniqueInput
    update: XOR<MatchUpdateWithoutAwayTeamInput, MatchUncheckedUpdateWithoutAwayTeamInput>
    create: XOR<MatchCreateWithoutAwayTeamInput, MatchUncheckedCreateWithoutAwayTeamInput>
  }

  export type MatchUpdateWithWhereUniqueWithoutAwayTeamInput = {
    where: MatchWhereUniqueInput
    data: XOR<MatchUpdateWithoutAwayTeamInput, MatchUncheckedUpdateWithoutAwayTeamInput>
  }

  export type MatchUpdateManyWithWhereWithoutAwayTeamInput = {
    where: MatchScalarWhereInput
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyWithoutAwayTeamInput>
  }

  export type UserUpsertWithWhereUniqueWithoutPreferredTeamInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutPreferredTeamInput, UserUncheckedUpdateWithoutPreferredTeamInput>
    create: XOR<UserCreateWithoutPreferredTeamInput, UserUncheckedCreateWithoutPreferredTeamInput>
  }

  export type UserUpdateWithWhereUniqueWithoutPreferredTeamInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutPreferredTeamInput, UserUncheckedUpdateWithoutPreferredTeamInput>
  }

  export type UserUpdateManyWithWhereWithoutPreferredTeamInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutPreferredTeamInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    birthDate?: DateTimeFilter<"User"> | Date | string
    gender?: EnumGenderFilter<"User"> | $Enums.Gender
    city?: StringFilter<"User"> | string
    address?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    approved?: BoolFilter<"User"> | boolean
    preferredTeamId?: IntNullableFilter<"User"> | number | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type TeamCreateWithoutHomeMatchesInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    awayMatches?: MatchCreateNestedManyWithoutAwayTeamInput
    preferredBy?: UserCreateNestedManyWithoutPreferredTeamInput
  }

  export type TeamUncheckedCreateWithoutHomeMatchesInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    awayMatches?: MatchUncheckedCreateNestedManyWithoutAwayTeamInput
    preferredBy?: UserUncheckedCreateNestedManyWithoutPreferredTeamInput
  }

  export type TeamCreateOrConnectWithoutHomeMatchesInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutHomeMatchesInput, TeamUncheckedCreateWithoutHomeMatchesInput>
  }

  export type TeamCreateWithoutAwayMatchesInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    homeMatches?: MatchCreateNestedManyWithoutHomeTeamInput
    preferredBy?: UserCreateNestedManyWithoutPreferredTeamInput
  }

  export type TeamUncheckedCreateWithoutAwayMatchesInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    homeMatches?: MatchUncheckedCreateNestedManyWithoutHomeTeamInput
    preferredBy?: UserUncheckedCreateNestedManyWithoutPreferredTeamInput
  }

  export type TeamCreateOrConnectWithoutAwayMatchesInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutAwayMatchesInput, TeamUncheckedCreateWithoutAwayMatchesInput>
  }

  export type StadiumCreateWithoutMatchesInput = {
    name: string
    noOfRows: number
    seatsPerRow: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StadiumUncheckedCreateWithoutMatchesInput = {
    id?: number
    name: string
    noOfRows: number
    seatsPerRow: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StadiumCreateOrConnectWithoutMatchesInput = {
    where: StadiumWhereUniqueInput
    create: XOR<StadiumCreateWithoutMatchesInput, StadiumUncheckedCreateWithoutMatchesInput>
  }

  export type MatchSeatCreateWithoutMatchInput = {
    seatNumber: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutMatchSeatsInput
  }

  export type MatchSeatUncheckedCreateWithoutMatchInput = {
    id?: number
    seatNumber: number
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchSeatCreateOrConnectWithoutMatchInput = {
    where: MatchSeatWhereUniqueInput
    create: XOR<MatchSeatCreateWithoutMatchInput, MatchSeatUncheckedCreateWithoutMatchInput>
  }

  export type MatchSeatCreateManyMatchInputEnvelope = {
    data: MatchSeatCreateManyMatchInput | MatchSeatCreateManyMatchInput[]
    skipDuplicates?: boolean
  }

  export type TeamUpsertWithoutHomeMatchesInput = {
    update: XOR<TeamUpdateWithoutHomeMatchesInput, TeamUncheckedUpdateWithoutHomeMatchesInput>
    create: XOR<TeamCreateWithoutHomeMatchesInput, TeamUncheckedCreateWithoutHomeMatchesInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutHomeMatchesInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutHomeMatchesInput, TeamUncheckedUpdateWithoutHomeMatchesInput>
  }

  export type TeamUpdateWithoutHomeMatchesInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    awayMatches?: MatchUpdateManyWithoutAwayTeamNestedInput
    preferredBy?: UserUpdateManyWithoutPreferredTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutHomeMatchesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    awayMatches?: MatchUncheckedUpdateManyWithoutAwayTeamNestedInput
    preferredBy?: UserUncheckedUpdateManyWithoutPreferredTeamNestedInput
  }

  export type TeamUpsertWithoutAwayMatchesInput = {
    update: XOR<TeamUpdateWithoutAwayMatchesInput, TeamUncheckedUpdateWithoutAwayMatchesInput>
    create: XOR<TeamCreateWithoutAwayMatchesInput, TeamUncheckedCreateWithoutAwayMatchesInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutAwayMatchesInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutAwayMatchesInput, TeamUncheckedUpdateWithoutAwayMatchesInput>
  }

  export type TeamUpdateWithoutAwayMatchesInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    homeMatches?: MatchUpdateManyWithoutHomeTeamNestedInput
    preferredBy?: UserUpdateManyWithoutPreferredTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutAwayMatchesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    homeMatches?: MatchUncheckedUpdateManyWithoutHomeTeamNestedInput
    preferredBy?: UserUncheckedUpdateManyWithoutPreferredTeamNestedInput
  }

  export type StadiumUpsertWithoutMatchesInput = {
    update: XOR<StadiumUpdateWithoutMatchesInput, StadiumUncheckedUpdateWithoutMatchesInput>
    create: XOR<StadiumCreateWithoutMatchesInput, StadiumUncheckedCreateWithoutMatchesInput>
    where?: StadiumWhereInput
  }

  export type StadiumUpdateToOneWithWhereWithoutMatchesInput = {
    where?: StadiumWhereInput
    data: XOR<StadiumUpdateWithoutMatchesInput, StadiumUncheckedUpdateWithoutMatchesInput>
  }

  export type StadiumUpdateWithoutMatchesInput = {
    name?: StringFieldUpdateOperationsInput | string
    noOfRows?: IntFieldUpdateOperationsInput | number
    seatsPerRow?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StadiumUncheckedUpdateWithoutMatchesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    noOfRows?: IntFieldUpdateOperationsInput | number
    seatsPerRow?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchSeatUpsertWithWhereUniqueWithoutMatchInput = {
    where: MatchSeatWhereUniqueInput
    update: XOR<MatchSeatUpdateWithoutMatchInput, MatchSeatUncheckedUpdateWithoutMatchInput>
    create: XOR<MatchSeatCreateWithoutMatchInput, MatchSeatUncheckedCreateWithoutMatchInput>
  }

  export type MatchSeatUpdateWithWhereUniqueWithoutMatchInput = {
    where: MatchSeatWhereUniqueInput
    data: XOR<MatchSeatUpdateWithoutMatchInput, MatchSeatUncheckedUpdateWithoutMatchInput>
  }

  export type MatchSeatUpdateManyWithWhereWithoutMatchInput = {
    where: MatchSeatScalarWhereInput
    data: XOR<MatchSeatUpdateManyMutationInput, MatchSeatUncheckedUpdateManyWithoutMatchInput>
  }

  export type MatchSeatScalarWhereInput = {
    AND?: MatchSeatScalarWhereInput | MatchSeatScalarWhereInput[]
    OR?: MatchSeatScalarWhereInput[]
    NOT?: MatchSeatScalarWhereInput | MatchSeatScalarWhereInput[]
    id?: IntFilter<"MatchSeat"> | number
    seatNumber?: IntFilter<"MatchSeat"> | number
    userId?: IntFilter<"MatchSeat"> | number
    matchId?: IntFilter<"MatchSeat"> | number
    createdAt?: DateTimeFilter<"MatchSeat"> | Date | string
    updatedAt?: DateTimeFilter<"MatchSeat"> | Date | string
  }

  export type UserCreateWithoutMatchSeatsInput = {
    username: string
    password: string
    firstName: string
    lastName: string
    birthDate: Date | string
    gender: $Enums.Gender
    city: string
    address?: string | null
    email: string
    role: $Enums.UserRole
    approved?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    preferredTeam?: TeamCreateNestedOneWithoutPreferredByInput
  }

  export type UserUncheckedCreateWithoutMatchSeatsInput = {
    id?: number
    username: string
    password: string
    firstName: string
    lastName: string
    birthDate: Date | string
    gender: $Enums.Gender
    city: string
    address?: string | null
    email: string
    role: $Enums.UserRole
    approved?: boolean
    preferredTeamId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutMatchSeatsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMatchSeatsInput, UserUncheckedCreateWithoutMatchSeatsInput>
  }

  export type MatchCreateWithoutMatchSeatsInput = {
    dateTime: Date | string
    mainRefereeName: string
    linesmen1Name: string
    linesmen2Name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    homeTeam: TeamCreateNestedOneWithoutHomeMatchesInput
    awayTeam: TeamCreateNestedOneWithoutAwayMatchesInput
    stadium: StadiumCreateNestedOneWithoutMatchesInput
  }

  export type MatchUncheckedCreateWithoutMatchSeatsInput = {
    id?: number
    dateTime: Date | string
    homeTeamId: number
    awayTeamId: number
    stadiumId: number
    mainRefereeName: string
    linesmen1Name: string
    linesmen2Name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchCreateOrConnectWithoutMatchSeatsInput = {
    where: MatchWhereUniqueInput
    create: XOR<MatchCreateWithoutMatchSeatsInput, MatchUncheckedCreateWithoutMatchSeatsInput>
  }

  export type UserUpsertWithoutMatchSeatsInput = {
    update: XOR<UserUpdateWithoutMatchSeatsInput, UserUncheckedUpdateWithoutMatchSeatsInput>
    create: XOR<UserCreateWithoutMatchSeatsInput, UserUncheckedCreateWithoutMatchSeatsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMatchSeatsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMatchSeatsInput, UserUncheckedUpdateWithoutMatchSeatsInput>
  }

  export type UserUpdateWithoutMatchSeatsInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    city?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    approved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    preferredTeam?: TeamUpdateOneWithoutPreferredByNestedInput
  }

  export type UserUncheckedUpdateWithoutMatchSeatsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    city?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    approved?: BoolFieldUpdateOperationsInput | boolean
    preferredTeamId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchUpsertWithoutMatchSeatsInput = {
    update: XOR<MatchUpdateWithoutMatchSeatsInput, MatchUncheckedUpdateWithoutMatchSeatsInput>
    create: XOR<MatchCreateWithoutMatchSeatsInput, MatchUncheckedCreateWithoutMatchSeatsInput>
    where?: MatchWhereInput
  }

  export type MatchUpdateToOneWithWhereWithoutMatchSeatsInput = {
    where?: MatchWhereInput
    data: XOR<MatchUpdateWithoutMatchSeatsInput, MatchUncheckedUpdateWithoutMatchSeatsInput>
  }

  export type MatchUpdateWithoutMatchSeatsInput = {
    dateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    mainRefereeName?: StringFieldUpdateOperationsInput | string
    linesmen1Name?: StringFieldUpdateOperationsInput | string
    linesmen2Name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    homeTeam?: TeamUpdateOneRequiredWithoutHomeMatchesNestedInput
    awayTeam?: TeamUpdateOneRequiredWithoutAwayMatchesNestedInput
    stadium?: StadiumUpdateOneRequiredWithoutMatchesNestedInput
  }

  export type MatchUncheckedUpdateWithoutMatchSeatsInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    homeTeamId?: IntFieldUpdateOperationsInput | number
    awayTeamId?: IntFieldUpdateOperationsInput | number
    stadiumId?: IntFieldUpdateOperationsInput | number
    mainRefereeName?: StringFieldUpdateOperationsInput | string
    linesmen1Name?: StringFieldUpdateOperationsInput | string
    linesmen2Name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamCreateWithoutPreferredByInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    homeMatches?: MatchCreateNestedManyWithoutHomeTeamInput
    awayMatches?: MatchCreateNestedManyWithoutAwayTeamInput
  }

  export type TeamUncheckedCreateWithoutPreferredByInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    homeMatches?: MatchUncheckedCreateNestedManyWithoutHomeTeamInput
    awayMatches?: MatchUncheckedCreateNestedManyWithoutAwayTeamInput
  }

  export type TeamCreateOrConnectWithoutPreferredByInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutPreferredByInput, TeamUncheckedCreateWithoutPreferredByInput>
  }

  export type MatchSeatCreateWithoutUserInput = {
    seatNumber: number
    createdAt?: Date | string
    updatedAt?: Date | string
    match: MatchCreateNestedOneWithoutMatchSeatsInput
  }

  export type MatchSeatUncheckedCreateWithoutUserInput = {
    id?: number
    seatNumber: number
    matchId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchSeatCreateOrConnectWithoutUserInput = {
    where: MatchSeatWhereUniqueInput
    create: XOR<MatchSeatCreateWithoutUserInput, MatchSeatUncheckedCreateWithoutUserInput>
  }

  export type MatchSeatCreateManyUserInputEnvelope = {
    data: MatchSeatCreateManyUserInput | MatchSeatCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TeamUpsertWithoutPreferredByInput = {
    update: XOR<TeamUpdateWithoutPreferredByInput, TeamUncheckedUpdateWithoutPreferredByInput>
    create: XOR<TeamCreateWithoutPreferredByInput, TeamUncheckedCreateWithoutPreferredByInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutPreferredByInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutPreferredByInput, TeamUncheckedUpdateWithoutPreferredByInput>
  }

  export type TeamUpdateWithoutPreferredByInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    homeMatches?: MatchUpdateManyWithoutHomeTeamNestedInput
    awayMatches?: MatchUpdateManyWithoutAwayTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutPreferredByInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    homeMatches?: MatchUncheckedUpdateManyWithoutHomeTeamNestedInput
    awayMatches?: MatchUncheckedUpdateManyWithoutAwayTeamNestedInput
  }

  export type MatchSeatUpsertWithWhereUniqueWithoutUserInput = {
    where: MatchSeatWhereUniqueInput
    update: XOR<MatchSeatUpdateWithoutUserInput, MatchSeatUncheckedUpdateWithoutUserInput>
    create: XOR<MatchSeatCreateWithoutUserInput, MatchSeatUncheckedCreateWithoutUserInput>
  }

  export type MatchSeatUpdateWithWhereUniqueWithoutUserInput = {
    where: MatchSeatWhereUniqueInput
    data: XOR<MatchSeatUpdateWithoutUserInput, MatchSeatUncheckedUpdateWithoutUserInput>
  }

  export type MatchSeatUpdateManyWithWhereWithoutUserInput = {
    where: MatchSeatScalarWhereInput
    data: XOR<MatchSeatUpdateManyMutationInput, MatchSeatUncheckedUpdateManyWithoutUserInput>
  }

  export type MatchCreateManyStadiumInput = {
    id?: number
    dateTime: Date | string
    homeTeamId: number
    awayTeamId: number
    mainRefereeName: string
    linesmen1Name: string
    linesmen2Name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchUpdateWithoutStadiumInput = {
    dateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    mainRefereeName?: StringFieldUpdateOperationsInput | string
    linesmen1Name?: StringFieldUpdateOperationsInput | string
    linesmen2Name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    homeTeam?: TeamUpdateOneRequiredWithoutHomeMatchesNestedInput
    awayTeam?: TeamUpdateOneRequiredWithoutAwayMatchesNestedInput
    matchSeats?: MatchSeatUpdateManyWithoutMatchNestedInput
  }

  export type MatchUncheckedUpdateWithoutStadiumInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    homeTeamId?: IntFieldUpdateOperationsInput | number
    awayTeamId?: IntFieldUpdateOperationsInput | number
    mainRefereeName?: StringFieldUpdateOperationsInput | string
    linesmen1Name?: StringFieldUpdateOperationsInput | string
    linesmen2Name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matchSeats?: MatchSeatUncheckedUpdateManyWithoutMatchNestedInput
  }

  export type MatchUncheckedUpdateManyWithoutStadiumInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    homeTeamId?: IntFieldUpdateOperationsInput | number
    awayTeamId?: IntFieldUpdateOperationsInput | number
    mainRefereeName?: StringFieldUpdateOperationsInput | string
    linesmen1Name?: StringFieldUpdateOperationsInput | string
    linesmen2Name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchCreateManyHomeTeamInput = {
    id?: number
    dateTime: Date | string
    awayTeamId: number
    stadiumId: number
    mainRefereeName: string
    linesmen1Name: string
    linesmen2Name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchCreateManyAwayTeamInput = {
    id?: number
    dateTime: Date | string
    homeTeamId: number
    stadiumId: number
    mainRefereeName: string
    linesmen1Name: string
    linesmen2Name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateManyPreferredTeamInput = {
    id?: number
    username: string
    password: string
    firstName: string
    lastName: string
    birthDate: Date | string
    gender: $Enums.Gender
    city: string
    address?: string | null
    email: string
    role: $Enums.UserRole
    approved?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchUpdateWithoutHomeTeamInput = {
    dateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    mainRefereeName?: StringFieldUpdateOperationsInput | string
    linesmen1Name?: StringFieldUpdateOperationsInput | string
    linesmen2Name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    awayTeam?: TeamUpdateOneRequiredWithoutAwayMatchesNestedInput
    stadium?: StadiumUpdateOneRequiredWithoutMatchesNestedInput
    matchSeats?: MatchSeatUpdateManyWithoutMatchNestedInput
  }

  export type MatchUncheckedUpdateWithoutHomeTeamInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    awayTeamId?: IntFieldUpdateOperationsInput | number
    stadiumId?: IntFieldUpdateOperationsInput | number
    mainRefereeName?: StringFieldUpdateOperationsInput | string
    linesmen1Name?: StringFieldUpdateOperationsInput | string
    linesmen2Name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matchSeats?: MatchSeatUncheckedUpdateManyWithoutMatchNestedInput
  }

  export type MatchUncheckedUpdateManyWithoutHomeTeamInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    awayTeamId?: IntFieldUpdateOperationsInput | number
    stadiumId?: IntFieldUpdateOperationsInput | number
    mainRefereeName?: StringFieldUpdateOperationsInput | string
    linesmen1Name?: StringFieldUpdateOperationsInput | string
    linesmen2Name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchUpdateWithoutAwayTeamInput = {
    dateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    mainRefereeName?: StringFieldUpdateOperationsInput | string
    linesmen1Name?: StringFieldUpdateOperationsInput | string
    linesmen2Name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    homeTeam?: TeamUpdateOneRequiredWithoutHomeMatchesNestedInput
    stadium?: StadiumUpdateOneRequiredWithoutMatchesNestedInput
    matchSeats?: MatchSeatUpdateManyWithoutMatchNestedInput
  }

  export type MatchUncheckedUpdateWithoutAwayTeamInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    homeTeamId?: IntFieldUpdateOperationsInput | number
    stadiumId?: IntFieldUpdateOperationsInput | number
    mainRefereeName?: StringFieldUpdateOperationsInput | string
    linesmen1Name?: StringFieldUpdateOperationsInput | string
    linesmen2Name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matchSeats?: MatchSeatUncheckedUpdateManyWithoutMatchNestedInput
  }

  export type MatchUncheckedUpdateManyWithoutAwayTeamInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    homeTeamId?: IntFieldUpdateOperationsInput | number
    stadiumId?: IntFieldUpdateOperationsInput | number
    mainRefereeName?: StringFieldUpdateOperationsInput | string
    linesmen1Name?: StringFieldUpdateOperationsInput | string
    linesmen2Name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpdateWithoutPreferredTeamInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    city?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    approved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matchSeats?: MatchSeatUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPreferredTeamInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    city?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    approved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matchSeats?: MatchSeatUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutPreferredTeamInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    city?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    approved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchSeatCreateManyMatchInput = {
    id?: number
    seatNumber: number
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchSeatUpdateWithoutMatchInput = {
    seatNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMatchSeatsNestedInput
  }

  export type MatchSeatUncheckedUpdateWithoutMatchInput = {
    id?: IntFieldUpdateOperationsInput | number
    seatNumber?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchSeatUncheckedUpdateManyWithoutMatchInput = {
    id?: IntFieldUpdateOperationsInput | number
    seatNumber?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchSeatCreateManyUserInput = {
    id?: number
    seatNumber: number
    matchId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchSeatUpdateWithoutUserInput = {
    seatNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    match?: MatchUpdateOneRequiredWithoutMatchSeatsNestedInput
  }

  export type MatchSeatUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    seatNumber?: IntFieldUpdateOperationsInput | number
    matchId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchSeatUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    seatNumber?: IntFieldUpdateOperationsInput | number
    matchId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
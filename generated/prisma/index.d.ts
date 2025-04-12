
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
 * Model feature_categories
 * 
 */
export type feature_categories = $Result.DefaultSelection<Prisma.$feature_categoriesPayload>
/**
 * Model features
 * 
 */
export type features = $Result.DefaultSelection<Prisma.$featuresPayload>
/**
 * Model organisations
 * 
 */
export type organisations = $Result.DefaultSelection<Prisma.$organisationsPayload>
/**
 * Model plan_features
 * 
 */
export type plan_features = $Result.DefaultSelection<Prisma.$plan_featuresPayload>
/**
 * Model plans
 * 
 */
export type plans = $Result.DefaultSelection<Prisma.$plansPayload>
/**
 * Model subscriptions
 * 
 */
export type subscriptions = $Result.DefaultSelection<Prisma.$subscriptionsPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const featureinputtype: {
  select: 'select',
  input: 'input',
  radio: 'radio'
};

export type featureinputtype = (typeof featureinputtype)[keyof typeof featureinputtype]


export const subscriptionstatus: {
  active: 'active',
  cancelled: 'cancelled',
  expired: 'expired'
};

export type subscriptionstatus = (typeof subscriptionstatus)[keyof typeof subscriptionstatus]


export const usertype: {
  org_admin: 'org_admin',
  super_admin: 'super_admin',
  org_user: 'org_user',
  super_admin_user: 'super_admin_user'
};

export type usertype = (typeof usertype)[keyof typeof usertype]

}

export type featureinputtype = $Enums.featureinputtype

export const featureinputtype: typeof $Enums.featureinputtype

export type subscriptionstatus = $Enums.subscriptionstatus

export const subscriptionstatus: typeof $Enums.subscriptionstatus

export type usertype = $Enums.usertype

export const usertype: typeof $Enums.usertype

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Feature_categories
 * const feature_categories = await prisma.feature_categories.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Feature_categories
   * const feature_categories = await prisma.feature_categories.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.feature_categories`: Exposes CRUD operations for the **feature_categories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Feature_categories
    * const feature_categories = await prisma.feature_categories.findMany()
    * ```
    */
  get feature_categories(): Prisma.feature_categoriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.features`: Exposes CRUD operations for the **features** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Features
    * const features = await prisma.features.findMany()
    * ```
    */
  get features(): Prisma.featuresDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.organisations`: Exposes CRUD operations for the **organisations** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Organisations
    * const organisations = await prisma.organisations.findMany()
    * ```
    */
  get organisations(): Prisma.organisationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.plan_features`: Exposes CRUD operations for the **plan_features** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Plan_features
    * const plan_features = await prisma.plan_features.findMany()
    * ```
    */
  get plan_features(): Prisma.plan_featuresDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.plans`: Exposes CRUD operations for the **plans** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Plans
    * const plans = await prisma.plans.findMany()
    * ```
    */
  get plans(): Prisma.plansDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subscriptions`: Exposes CRUD operations for the **subscriptions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subscriptions
    * const subscriptions = await prisma.subscriptions.findMany()
    * ```
    */
  get subscriptions(): Prisma.subscriptionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    feature_categories: 'feature_categories',
    features: 'features',
    organisations: 'organisations',
    plan_features: 'plan_features',
    plans: 'plans',
    subscriptions: 'subscriptions',
    users: 'users'
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
      modelProps: "feature_categories" | "features" | "organisations" | "plan_features" | "plans" | "subscriptions" | "users"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      feature_categories: {
        payload: Prisma.$feature_categoriesPayload<ExtArgs>
        fields: Prisma.feature_categoriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.feature_categoriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feature_categoriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.feature_categoriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feature_categoriesPayload>
          }
          findFirst: {
            args: Prisma.feature_categoriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feature_categoriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.feature_categoriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feature_categoriesPayload>
          }
          findMany: {
            args: Prisma.feature_categoriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feature_categoriesPayload>[]
          }
          create: {
            args: Prisma.feature_categoriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feature_categoriesPayload>
          }
          createMany: {
            args: Prisma.feature_categoriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.feature_categoriesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feature_categoriesPayload>[]
          }
          delete: {
            args: Prisma.feature_categoriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feature_categoriesPayload>
          }
          update: {
            args: Prisma.feature_categoriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feature_categoriesPayload>
          }
          deleteMany: {
            args: Prisma.feature_categoriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.feature_categoriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.feature_categoriesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feature_categoriesPayload>[]
          }
          upsert: {
            args: Prisma.feature_categoriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feature_categoriesPayload>
          }
          aggregate: {
            args: Prisma.Feature_categoriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFeature_categories>
          }
          groupBy: {
            args: Prisma.feature_categoriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Feature_categoriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.feature_categoriesCountArgs<ExtArgs>
            result: $Utils.Optional<Feature_categoriesCountAggregateOutputType> | number
          }
        }
      }
      features: {
        payload: Prisma.$featuresPayload<ExtArgs>
        fields: Prisma.featuresFieldRefs
        operations: {
          findUnique: {
            args: Prisma.featuresFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$featuresPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.featuresFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$featuresPayload>
          }
          findFirst: {
            args: Prisma.featuresFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$featuresPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.featuresFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$featuresPayload>
          }
          findMany: {
            args: Prisma.featuresFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$featuresPayload>[]
          }
          create: {
            args: Prisma.featuresCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$featuresPayload>
          }
          createMany: {
            args: Prisma.featuresCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.featuresCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$featuresPayload>[]
          }
          delete: {
            args: Prisma.featuresDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$featuresPayload>
          }
          update: {
            args: Prisma.featuresUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$featuresPayload>
          }
          deleteMany: {
            args: Prisma.featuresDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.featuresUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.featuresUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$featuresPayload>[]
          }
          upsert: {
            args: Prisma.featuresUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$featuresPayload>
          }
          aggregate: {
            args: Prisma.FeaturesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFeatures>
          }
          groupBy: {
            args: Prisma.featuresGroupByArgs<ExtArgs>
            result: $Utils.Optional<FeaturesGroupByOutputType>[]
          }
          count: {
            args: Prisma.featuresCountArgs<ExtArgs>
            result: $Utils.Optional<FeaturesCountAggregateOutputType> | number
          }
        }
      }
      organisations: {
        payload: Prisma.$organisationsPayload<ExtArgs>
        fields: Prisma.organisationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.organisationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organisationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.organisationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organisationsPayload>
          }
          findFirst: {
            args: Prisma.organisationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organisationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.organisationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organisationsPayload>
          }
          findMany: {
            args: Prisma.organisationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organisationsPayload>[]
          }
          create: {
            args: Prisma.organisationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organisationsPayload>
          }
          createMany: {
            args: Prisma.organisationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.organisationsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organisationsPayload>[]
          }
          delete: {
            args: Prisma.organisationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organisationsPayload>
          }
          update: {
            args: Prisma.organisationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organisationsPayload>
          }
          deleteMany: {
            args: Prisma.organisationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.organisationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.organisationsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organisationsPayload>[]
          }
          upsert: {
            args: Prisma.organisationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organisationsPayload>
          }
          aggregate: {
            args: Prisma.OrganisationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrganisations>
          }
          groupBy: {
            args: Prisma.organisationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrganisationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.organisationsCountArgs<ExtArgs>
            result: $Utils.Optional<OrganisationsCountAggregateOutputType> | number
          }
        }
      }
      plan_features: {
        payload: Prisma.$plan_featuresPayload<ExtArgs>
        fields: Prisma.plan_featuresFieldRefs
        operations: {
          findUnique: {
            args: Prisma.plan_featuresFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$plan_featuresPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.plan_featuresFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$plan_featuresPayload>
          }
          findFirst: {
            args: Prisma.plan_featuresFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$plan_featuresPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.plan_featuresFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$plan_featuresPayload>
          }
          findMany: {
            args: Prisma.plan_featuresFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$plan_featuresPayload>[]
          }
          create: {
            args: Prisma.plan_featuresCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$plan_featuresPayload>
          }
          createMany: {
            args: Prisma.plan_featuresCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.plan_featuresCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$plan_featuresPayload>[]
          }
          delete: {
            args: Prisma.plan_featuresDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$plan_featuresPayload>
          }
          update: {
            args: Prisma.plan_featuresUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$plan_featuresPayload>
          }
          deleteMany: {
            args: Prisma.plan_featuresDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.plan_featuresUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.plan_featuresUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$plan_featuresPayload>[]
          }
          upsert: {
            args: Prisma.plan_featuresUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$plan_featuresPayload>
          }
          aggregate: {
            args: Prisma.Plan_featuresAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlan_features>
          }
          groupBy: {
            args: Prisma.plan_featuresGroupByArgs<ExtArgs>
            result: $Utils.Optional<Plan_featuresGroupByOutputType>[]
          }
          count: {
            args: Prisma.plan_featuresCountArgs<ExtArgs>
            result: $Utils.Optional<Plan_featuresCountAggregateOutputType> | number
          }
        }
      }
      plans: {
        payload: Prisma.$plansPayload<ExtArgs>
        fields: Prisma.plansFieldRefs
        operations: {
          findUnique: {
            args: Prisma.plansFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$plansPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.plansFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$plansPayload>
          }
          findFirst: {
            args: Prisma.plansFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$plansPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.plansFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$plansPayload>
          }
          findMany: {
            args: Prisma.plansFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$plansPayload>[]
          }
          create: {
            args: Prisma.plansCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$plansPayload>
          }
          createMany: {
            args: Prisma.plansCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.plansCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$plansPayload>[]
          }
          delete: {
            args: Prisma.plansDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$plansPayload>
          }
          update: {
            args: Prisma.plansUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$plansPayload>
          }
          deleteMany: {
            args: Prisma.plansDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.plansUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.plansUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$plansPayload>[]
          }
          upsert: {
            args: Prisma.plansUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$plansPayload>
          }
          aggregate: {
            args: Prisma.PlansAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlans>
          }
          groupBy: {
            args: Prisma.plansGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlansGroupByOutputType>[]
          }
          count: {
            args: Prisma.plansCountArgs<ExtArgs>
            result: $Utils.Optional<PlansCountAggregateOutputType> | number
          }
        }
      }
      subscriptions: {
        payload: Prisma.$subscriptionsPayload<ExtArgs>
        fields: Prisma.subscriptionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.subscriptionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subscriptionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.subscriptionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subscriptionsPayload>
          }
          findFirst: {
            args: Prisma.subscriptionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subscriptionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.subscriptionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subscriptionsPayload>
          }
          findMany: {
            args: Prisma.subscriptionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subscriptionsPayload>[]
          }
          create: {
            args: Prisma.subscriptionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subscriptionsPayload>
          }
          createMany: {
            args: Prisma.subscriptionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.subscriptionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subscriptionsPayload>[]
          }
          delete: {
            args: Prisma.subscriptionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subscriptionsPayload>
          }
          update: {
            args: Prisma.subscriptionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subscriptionsPayload>
          }
          deleteMany: {
            args: Prisma.subscriptionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.subscriptionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.subscriptionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subscriptionsPayload>[]
          }
          upsert: {
            args: Prisma.subscriptionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subscriptionsPayload>
          }
          aggregate: {
            args: Prisma.SubscriptionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubscriptions>
          }
          groupBy: {
            args: Prisma.subscriptionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.subscriptionsCountArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionsCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    feature_categories?: feature_categoriesOmit
    features?: featuresOmit
    organisations?: organisationsOmit
    plan_features?: plan_featuresOmit
    plans?: plansOmit
    subscriptions?: subscriptionsOmit
    users?: usersOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type Feature_categoriesCountOutputType
   */

  export type Feature_categoriesCountOutputType = {
    features: number
  }

  export type Feature_categoriesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    features?: boolean | Feature_categoriesCountOutputTypeCountFeaturesArgs
  }

  // Custom InputTypes
  /**
   * Feature_categoriesCountOutputType without action
   */
  export type Feature_categoriesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature_categoriesCountOutputType
     */
    select?: Feature_categoriesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Feature_categoriesCountOutputType without action
   */
  export type Feature_categoriesCountOutputTypeCountFeaturesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: featuresWhereInput
  }


  /**
   * Count Type FeaturesCountOutputType
   */

  export type FeaturesCountOutputType = {
    plan_features: number
  }

  export type FeaturesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plan_features?: boolean | FeaturesCountOutputTypeCountPlan_featuresArgs
  }

  // Custom InputTypes
  /**
   * FeaturesCountOutputType without action
   */
  export type FeaturesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeaturesCountOutputType
     */
    select?: FeaturesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FeaturesCountOutputType without action
   */
  export type FeaturesCountOutputTypeCountPlan_featuresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: plan_featuresWhereInput
  }


  /**
   * Count Type OrganisationsCountOutputType
   */

  export type OrganisationsCountOutputType = {
    subscriptions: number
    users: number
  }

  export type OrganisationsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscriptions?: boolean | OrganisationsCountOutputTypeCountSubscriptionsArgs
    users?: boolean | OrganisationsCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * OrganisationsCountOutputType without action
   */
  export type OrganisationsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganisationsCountOutputType
     */
    select?: OrganisationsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrganisationsCountOutputType without action
   */
  export type OrganisationsCountOutputTypeCountSubscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: subscriptionsWhereInput
  }

  /**
   * OrganisationsCountOutputType without action
   */
  export type OrganisationsCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
  }


  /**
   * Count Type PlansCountOutputType
   */

  export type PlansCountOutputType = {
    plan_features: number
    subscriptions: number
  }

  export type PlansCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plan_features?: boolean | PlansCountOutputTypeCountPlan_featuresArgs
    subscriptions?: boolean | PlansCountOutputTypeCountSubscriptionsArgs
  }

  // Custom InputTypes
  /**
   * PlansCountOutputType without action
   */
  export type PlansCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlansCountOutputType
     */
    select?: PlansCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlansCountOutputType without action
   */
  export type PlansCountOutputTypeCountPlan_featuresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: plan_featuresWhereInput
  }

  /**
   * PlansCountOutputType without action
   */
  export type PlansCountOutputTypeCountSubscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: subscriptionsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model feature_categories
   */

  export type AggregateFeature_categories = {
    _count: Feature_categoriesCountAggregateOutputType | null
    _avg: Feature_categoriesAvgAggregateOutputType | null
    _sum: Feature_categoriesSumAggregateOutputType | null
    _min: Feature_categoriesMinAggregateOutputType | null
    _max: Feature_categoriesMaxAggregateOutputType | null
  }

  export type Feature_categoriesAvgAggregateOutputType = {
    feature_category_id: number | null
  }

  export type Feature_categoriesSumAggregateOutputType = {
    feature_category_id: number | null
  }

  export type Feature_categoriesMinAggregateOutputType = {
    feature_category_id: number | null
    feature_category_name: string | null
  }

  export type Feature_categoriesMaxAggregateOutputType = {
    feature_category_id: number | null
    feature_category_name: string | null
  }

  export type Feature_categoriesCountAggregateOutputType = {
    feature_category_id: number
    feature_category_name: number
    _all: number
  }


  export type Feature_categoriesAvgAggregateInputType = {
    feature_category_id?: true
  }

  export type Feature_categoriesSumAggregateInputType = {
    feature_category_id?: true
  }

  export type Feature_categoriesMinAggregateInputType = {
    feature_category_id?: true
    feature_category_name?: true
  }

  export type Feature_categoriesMaxAggregateInputType = {
    feature_category_id?: true
    feature_category_name?: true
  }

  export type Feature_categoriesCountAggregateInputType = {
    feature_category_id?: true
    feature_category_name?: true
    _all?: true
  }

  export type Feature_categoriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which feature_categories to aggregate.
     */
    where?: feature_categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of feature_categories to fetch.
     */
    orderBy?: feature_categoriesOrderByWithRelationInput | feature_categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: feature_categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` feature_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` feature_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned feature_categories
    **/
    _count?: true | Feature_categoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Feature_categoriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Feature_categoriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Feature_categoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Feature_categoriesMaxAggregateInputType
  }

  export type GetFeature_categoriesAggregateType<T extends Feature_categoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateFeature_categories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeature_categories[P]>
      : GetScalarType<T[P], AggregateFeature_categories[P]>
  }




  export type feature_categoriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: feature_categoriesWhereInput
    orderBy?: feature_categoriesOrderByWithAggregationInput | feature_categoriesOrderByWithAggregationInput[]
    by: Feature_categoriesScalarFieldEnum[] | Feature_categoriesScalarFieldEnum
    having?: feature_categoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Feature_categoriesCountAggregateInputType | true
    _avg?: Feature_categoriesAvgAggregateInputType
    _sum?: Feature_categoriesSumAggregateInputType
    _min?: Feature_categoriesMinAggregateInputType
    _max?: Feature_categoriesMaxAggregateInputType
  }

  export type Feature_categoriesGroupByOutputType = {
    feature_category_id: number
    feature_category_name: string
    _count: Feature_categoriesCountAggregateOutputType | null
    _avg: Feature_categoriesAvgAggregateOutputType | null
    _sum: Feature_categoriesSumAggregateOutputType | null
    _min: Feature_categoriesMinAggregateOutputType | null
    _max: Feature_categoriesMaxAggregateOutputType | null
  }

  type GetFeature_categoriesGroupByPayload<T extends feature_categoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Feature_categoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Feature_categoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Feature_categoriesGroupByOutputType[P]>
            : GetScalarType<T[P], Feature_categoriesGroupByOutputType[P]>
        }
      >
    >


  export type feature_categoriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    feature_category_id?: boolean
    feature_category_name?: boolean
    features?: boolean | feature_categories$featuresArgs<ExtArgs>
    _count?: boolean | Feature_categoriesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["feature_categories"]>

  export type feature_categoriesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    feature_category_id?: boolean
    feature_category_name?: boolean
  }, ExtArgs["result"]["feature_categories"]>

  export type feature_categoriesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    feature_category_id?: boolean
    feature_category_name?: boolean
  }, ExtArgs["result"]["feature_categories"]>

  export type feature_categoriesSelectScalar = {
    feature_category_id?: boolean
    feature_category_name?: boolean
  }

  export type feature_categoriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"feature_category_id" | "feature_category_name", ExtArgs["result"]["feature_categories"]>
  export type feature_categoriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    features?: boolean | feature_categories$featuresArgs<ExtArgs>
    _count?: boolean | Feature_categoriesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type feature_categoriesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type feature_categoriesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $feature_categoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "feature_categories"
    objects: {
      features: Prisma.$featuresPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      feature_category_id: number
      feature_category_name: string
    }, ExtArgs["result"]["feature_categories"]>
    composites: {}
  }

  type feature_categoriesGetPayload<S extends boolean | null | undefined | feature_categoriesDefaultArgs> = $Result.GetResult<Prisma.$feature_categoriesPayload, S>

  type feature_categoriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<feature_categoriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Feature_categoriesCountAggregateInputType | true
    }

  export interface feature_categoriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['feature_categories'], meta: { name: 'feature_categories' } }
    /**
     * Find zero or one Feature_categories that matches the filter.
     * @param {feature_categoriesFindUniqueArgs} args - Arguments to find a Feature_categories
     * @example
     * // Get one Feature_categories
     * const feature_categories = await prisma.feature_categories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends feature_categoriesFindUniqueArgs>(args: SelectSubset<T, feature_categoriesFindUniqueArgs<ExtArgs>>): Prisma__feature_categoriesClient<$Result.GetResult<Prisma.$feature_categoriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Feature_categories that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {feature_categoriesFindUniqueOrThrowArgs} args - Arguments to find a Feature_categories
     * @example
     * // Get one Feature_categories
     * const feature_categories = await prisma.feature_categories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends feature_categoriesFindUniqueOrThrowArgs>(args: SelectSubset<T, feature_categoriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__feature_categoriesClient<$Result.GetResult<Prisma.$feature_categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Feature_categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {feature_categoriesFindFirstArgs} args - Arguments to find a Feature_categories
     * @example
     * // Get one Feature_categories
     * const feature_categories = await prisma.feature_categories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends feature_categoriesFindFirstArgs>(args?: SelectSubset<T, feature_categoriesFindFirstArgs<ExtArgs>>): Prisma__feature_categoriesClient<$Result.GetResult<Prisma.$feature_categoriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Feature_categories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {feature_categoriesFindFirstOrThrowArgs} args - Arguments to find a Feature_categories
     * @example
     * // Get one Feature_categories
     * const feature_categories = await prisma.feature_categories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends feature_categoriesFindFirstOrThrowArgs>(args?: SelectSubset<T, feature_categoriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__feature_categoriesClient<$Result.GetResult<Prisma.$feature_categoriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Feature_categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {feature_categoriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Feature_categories
     * const feature_categories = await prisma.feature_categories.findMany()
     * 
     * // Get first 10 Feature_categories
     * const feature_categories = await prisma.feature_categories.findMany({ take: 10 })
     * 
     * // Only select the `feature_category_id`
     * const feature_categoriesWithFeature_category_idOnly = await prisma.feature_categories.findMany({ select: { feature_category_id: true } })
     * 
     */
    findMany<T extends feature_categoriesFindManyArgs>(args?: SelectSubset<T, feature_categoriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$feature_categoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Feature_categories.
     * @param {feature_categoriesCreateArgs} args - Arguments to create a Feature_categories.
     * @example
     * // Create one Feature_categories
     * const Feature_categories = await prisma.feature_categories.create({
     *   data: {
     *     // ... data to create a Feature_categories
     *   }
     * })
     * 
     */
    create<T extends feature_categoriesCreateArgs>(args: SelectSubset<T, feature_categoriesCreateArgs<ExtArgs>>): Prisma__feature_categoriesClient<$Result.GetResult<Prisma.$feature_categoriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Feature_categories.
     * @param {feature_categoriesCreateManyArgs} args - Arguments to create many Feature_categories.
     * @example
     * // Create many Feature_categories
     * const feature_categories = await prisma.feature_categories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends feature_categoriesCreateManyArgs>(args?: SelectSubset<T, feature_categoriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Feature_categories and returns the data saved in the database.
     * @param {feature_categoriesCreateManyAndReturnArgs} args - Arguments to create many Feature_categories.
     * @example
     * // Create many Feature_categories
     * const feature_categories = await prisma.feature_categories.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Feature_categories and only return the `feature_category_id`
     * const feature_categoriesWithFeature_category_idOnly = await prisma.feature_categories.createManyAndReturn({
     *   select: { feature_category_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends feature_categoriesCreateManyAndReturnArgs>(args?: SelectSubset<T, feature_categoriesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$feature_categoriesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Feature_categories.
     * @param {feature_categoriesDeleteArgs} args - Arguments to delete one Feature_categories.
     * @example
     * // Delete one Feature_categories
     * const Feature_categories = await prisma.feature_categories.delete({
     *   where: {
     *     // ... filter to delete one Feature_categories
     *   }
     * })
     * 
     */
    delete<T extends feature_categoriesDeleteArgs>(args: SelectSubset<T, feature_categoriesDeleteArgs<ExtArgs>>): Prisma__feature_categoriesClient<$Result.GetResult<Prisma.$feature_categoriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Feature_categories.
     * @param {feature_categoriesUpdateArgs} args - Arguments to update one Feature_categories.
     * @example
     * // Update one Feature_categories
     * const feature_categories = await prisma.feature_categories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends feature_categoriesUpdateArgs>(args: SelectSubset<T, feature_categoriesUpdateArgs<ExtArgs>>): Prisma__feature_categoriesClient<$Result.GetResult<Prisma.$feature_categoriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Feature_categories.
     * @param {feature_categoriesDeleteManyArgs} args - Arguments to filter Feature_categories to delete.
     * @example
     * // Delete a few Feature_categories
     * const { count } = await prisma.feature_categories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends feature_categoriesDeleteManyArgs>(args?: SelectSubset<T, feature_categoriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Feature_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {feature_categoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Feature_categories
     * const feature_categories = await prisma.feature_categories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends feature_categoriesUpdateManyArgs>(args: SelectSubset<T, feature_categoriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Feature_categories and returns the data updated in the database.
     * @param {feature_categoriesUpdateManyAndReturnArgs} args - Arguments to update many Feature_categories.
     * @example
     * // Update many Feature_categories
     * const feature_categories = await prisma.feature_categories.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Feature_categories and only return the `feature_category_id`
     * const feature_categoriesWithFeature_category_idOnly = await prisma.feature_categories.updateManyAndReturn({
     *   select: { feature_category_id: true },
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
    updateManyAndReturn<T extends feature_categoriesUpdateManyAndReturnArgs>(args: SelectSubset<T, feature_categoriesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$feature_categoriesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Feature_categories.
     * @param {feature_categoriesUpsertArgs} args - Arguments to update or create a Feature_categories.
     * @example
     * // Update or create a Feature_categories
     * const feature_categories = await prisma.feature_categories.upsert({
     *   create: {
     *     // ... data to create a Feature_categories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Feature_categories we want to update
     *   }
     * })
     */
    upsert<T extends feature_categoriesUpsertArgs>(args: SelectSubset<T, feature_categoriesUpsertArgs<ExtArgs>>): Prisma__feature_categoriesClient<$Result.GetResult<Prisma.$feature_categoriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Feature_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {feature_categoriesCountArgs} args - Arguments to filter Feature_categories to count.
     * @example
     * // Count the number of Feature_categories
     * const count = await prisma.feature_categories.count({
     *   where: {
     *     // ... the filter for the Feature_categories we want to count
     *   }
     * })
    **/
    count<T extends feature_categoriesCountArgs>(
      args?: Subset<T, feature_categoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Feature_categoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Feature_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Feature_categoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Feature_categoriesAggregateArgs>(args: Subset<T, Feature_categoriesAggregateArgs>): Prisma.PrismaPromise<GetFeature_categoriesAggregateType<T>>

    /**
     * Group by Feature_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {feature_categoriesGroupByArgs} args - Group by arguments.
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
      T extends feature_categoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: feature_categoriesGroupByArgs['orderBy'] }
        : { orderBy?: feature_categoriesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, feature_categoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeature_categoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the feature_categories model
   */
  readonly fields: feature_categoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for feature_categories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__feature_categoriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    features<T extends feature_categories$featuresArgs<ExtArgs> = {}>(args?: Subset<T, feature_categories$featuresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$featuresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the feature_categories model
   */
  interface feature_categoriesFieldRefs {
    readonly feature_category_id: FieldRef<"feature_categories", 'Int'>
    readonly feature_category_name: FieldRef<"feature_categories", 'String'>
  }
    

  // Custom InputTypes
  /**
   * feature_categories findUnique
   */
  export type feature_categoriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feature_categories
     */
    select?: feature_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feature_categories
     */
    omit?: feature_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feature_categoriesInclude<ExtArgs> | null
    /**
     * Filter, which feature_categories to fetch.
     */
    where: feature_categoriesWhereUniqueInput
  }

  /**
   * feature_categories findUniqueOrThrow
   */
  export type feature_categoriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feature_categories
     */
    select?: feature_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feature_categories
     */
    omit?: feature_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feature_categoriesInclude<ExtArgs> | null
    /**
     * Filter, which feature_categories to fetch.
     */
    where: feature_categoriesWhereUniqueInput
  }

  /**
   * feature_categories findFirst
   */
  export type feature_categoriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feature_categories
     */
    select?: feature_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feature_categories
     */
    omit?: feature_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feature_categoriesInclude<ExtArgs> | null
    /**
     * Filter, which feature_categories to fetch.
     */
    where?: feature_categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of feature_categories to fetch.
     */
    orderBy?: feature_categoriesOrderByWithRelationInput | feature_categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for feature_categories.
     */
    cursor?: feature_categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` feature_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` feature_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of feature_categories.
     */
    distinct?: Feature_categoriesScalarFieldEnum | Feature_categoriesScalarFieldEnum[]
  }

  /**
   * feature_categories findFirstOrThrow
   */
  export type feature_categoriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feature_categories
     */
    select?: feature_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feature_categories
     */
    omit?: feature_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feature_categoriesInclude<ExtArgs> | null
    /**
     * Filter, which feature_categories to fetch.
     */
    where?: feature_categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of feature_categories to fetch.
     */
    orderBy?: feature_categoriesOrderByWithRelationInput | feature_categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for feature_categories.
     */
    cursor?: feature_categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` feature_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` feature_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of feature_categories.
     */
    distinct?: Feature_categoriesScalarFieldEnum | Feature_categoriesScalarFieldEnum[]
  }

  /**
   * feature_categories findMany
   */
  export type feature_categoriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feature_categories
     */
    select?: feature_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feature_categories
     */
    omit?: feature_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feature_categoriesInclude<ExtArgs> | null
    /**
     * Filter, which feature_categories to fetch.
     */
    where?: feature_categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of feature_categories to fetch.
     */
    orderBy?: feature_categoriesOrderByWithRelationInput | feature_categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing feature_categories.
     */
    cursor?: feature_categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` feature_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` feature_categories.
     */
    skip?: number
    distinct?: Feature_categoriesScalarFieldEnum | Feature_categoriesScalarFieldEnum[]
  }

  /**
   * feature_categories create
   */
  export type feature_categoriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feature_categories
     */
    select?: feature_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feature_categories
     */
    omit?: feature_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feature_categoriesInclude<ExtArgs> | null
    /**
     * The data needed to create a feature_categories.
     */
    data: XOR<feature_categoriesCreateInput, feature_categoriesUncheckedCreateInput>
  }

  /**
   * feature_categories createMany
   */
  export type feature_categoriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many feature_categories.
     */
    data: feature_categoriesCreateManyInput | feature_categoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * feature_categories createManyAndReturn
   */
  export type feature_categoriesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feature_categories
     */
    select?: feature_categoriesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the feature_categories
     */
    omit?: feature_categoriesOmit<ExtArgs> | null
    /**
     * The data used to create many feature_categories.
     */
    data: feature_categoriesCreateManyInput | feature_categoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * feature_categories update
   */
  export type feature_categoriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feature_categories
     */
    select?: feature_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feature_categories
     */
    omit?: feature_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feature_categoriesInclude<ExtArgs> | null
    /**
     * The data needed to update a feature_categories.
     */
    data: XOR<feature_categoriesUpdateInput, feature_categoriesUncheckedUpdateInput>
    /**
     * Choose, which feature_categories to update.
     */
    where: feature_categoriesWhereUniqueInput
  }

  /**
   * feature_categories updateMany
   */
  export type feature_categoriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update feature_categories.
     */
    data: XOR<feature_categoriesUpdateManyMutationInput, feature_categoriesUncheckedUpdateManyInput>
    /**
     * Filter which feature_categories to update
     */
    where?: feature_categoriesWhereInput
    /**
     * Limit how many feature_categories to update.
     */
    limit?: number
  }

  /**
   * feature_categories updateManyAndReturn
   */
  export type feature_categoriesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feature_categories
     */
    select?: feature_categoriesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the feature_categories
     */
    omit?: feature_categoriesOmit<ExtArgs> | null
    /**
     * The data used to update feature_categories.
     */
    data: XOR<feature_categoriesUpdateManyMutationInput, feature_categoriesUncheckedUpdateManyInput>
    /**
     * Filter which feature_categories to update
     */
    where?: feature_categoriesWhereInput
    /**
     * Limit how many feature_categories to update.
     */
    limit?: number
  }

  /**
   * feature_categories upsert
   */
  export type feature_categoriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feature_categories
     */
    select?: feature_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feature_categories
     */
    omit?: feature_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feature_categoriesInclude<ExtArgs> | null
    /**
     * The filter to search for the feature_categories to update in case it exists.
     */
    where: feature_categoriesWhereUniqueInput
    /**
     * In case the feature_categories found by the `where` argument doesn't exist, create a new feature_categories with this data.
     */
    create: XOR<feature_categoriesCreateInput, feature_categoriesUncheckedCreateInput>
    /**
     * In case the feature_categories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<feature_categoriesUpdateInput, feature_categoriesUncheckedUpdateInput>
  }

  /**
   * feature_categories delete
   */
  export type feature_categoriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feature_categories
     */
    select?: feature_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feature_categories
     */
    omit?: feature_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feature_categoriesInclude<ExtArgs> | null
    /**
     * Filter which feature_categories to delete.
     */
    where: feature_categoriesWhereUniqueInput
  }

  /**
   * feature_categories deleteMany
   */
  export type feature_categoriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which feature_categories to delete
     */
    where?: feature_categoriesWhereInput
    /**
     * Limit how many feature_categories to delete.
     */
    limit?: number
  }

  /**
   * feature_categories.features
   */
  export type feature_categories$featuresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the features
     */
    select?: featuresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the features
     */
    omit?: featuresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: featuresInclude<ExtArgs> | null
    where?: featuresWhereInput
    orderBy?: featuresOrderByWithRelationInput | featuresOrderByWithRelationInput[]
    cursor?: featuresWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FeaturesScalarFieldEnum | FeaturesScalarFieldEnum[]
  }

  /**
   * feature_categories without action
   */
  export type feature_categoriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feature_categories
     */
    select?: feature_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feature_categories
     */
    omit?: feature_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feature_categoriesInclude<ExtArgs> | null
  }


  /**
   * Model features
   */

  export type AggregateFeatures = {
    _count: FeaturesCountAggregateOutputType | null
    _avg: FeaturesAvgAggregateOutputType | null
    _sum: FeaturesSumAggregateOutputType | null
    _min: FeaturesMinAggregateOutputType | null
    _max: FeaturesMaxAggregateOutputType | null
  }

  export type FeaturesAvgAggregateOutputType = {
    feature_id: number | null
    category_id: number | null
  }

  export type FeaturesSumAggregateOutputType = {
    feature_id: number | null
    category_id: number | null
  }

  export type FeaturesMinAggregateOutputType = {
    feature_id: number | null
    category_id: number | null
    feature_value: string | null
    feature_key: string | null
    feature_input_type: $Enums.featureinputtype | null
  }

  export type FeaturesMaxAggregateOutputType = {
    feature_id: number | null
    category_id: number | null
    feature_value: string | null
    feature_key: string | null
    feature_input_type: $Enums.featureinputtype | null
  }

  export type FeaturesCountAggregateOutputType = {
    feature_id: number
    category_id: number
    feature_value: number
    feature_key: number
    feature_input_type: number
    _all: number
  }


  export type FeaturesAvgAggregateInputType = {
    feature_id?: true
    category_id?: true
  }

  export type FeaturesSumAggregateInputType = {
    feature_id?: true
    category_id?: true
  }

  export type FeaturesMinAggregateInputType = {
    feature_id?: true
    category_id?: true
    feature_value?: true
    feature_key?: true
    feature_input_type?: true
  }

  export type FeaturesMaxAggregateInputType = {
    feature_id?: true
    category_id?: true
    feature_value?: true
    feature_key?: true
    feature_input_type?: true
  }

  export type FeaturesCountAggregateInputType = {
    feature_id?: true
    category_id?: true
    feature_value?: true
    feature_key?: true
    feature_input_type?: true
    _all?: true
  }

  export type FeaturesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which features to aggregate.
     */
    where?: featuresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of features to fetch.
     */
    orderBy?: featuresOrderByWithRelationInput | featuresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: featuresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` features from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` features.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned features
    **/
    _count?: true | FeaturesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FeaturesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FeaturesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FeaturesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FeaturesMaxAggregateInputType
  }

  export type GetFeaturesAggregateType<T extends FeaturesAggregateArgs> = {
        [P in keyof T & keyof AggregateFeatures]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeatures[P]>
      : GetScalarType<T[P], AggregateFeatures[P]>
  }




  export type featuresGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: featuresWhereInput
    orderBy?: featuresOrderByWithAggregationInput | featuresOrderByWithAggregationInput[]
    by: FeaturesScalarFieldEnum[] | FeaturesScalarFieldEnum
    having?: featuresScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FeaturesCountAggregateInputType | true
    _avg?: FeaturesAvgAggregateInputType
    _sum?: FeaturesSumAggregateInputType
    _min?: FeaturesMinAggregateInputType
    _max?: FeaturesMaxAggregateInputType
  }

  export type FeaturesGroupByOutputType = {
    feature_id: number
    category_id: number
    feature_value: string | null
    feature_key: string | null
    feature_input_type: $Enums.featureinputtype | null
    _count: FeaturesCountAggregateOutputType | null
    _avg: FeaturesAvgAggregateOutputType | null
    _sum: FeaturesSumAggregateOutputType | null
    _min: FeaturesMinAggregateOutputType | null
    _max: FeaturesMaxAggregateOutputType | null
  }

  type GetFeaturesGroupByPayload<T extends featuresGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FeaturesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FeaturesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeaturesGroupByOutputType[P]>
            : GetScalarType<T[P], FeaturesGroupByOutputType[P]>
        }
      >
    >


  export type featuresSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    feature_id?: boolean
    category_id?: boolean
    feature_value?: boolean
    feature_key?: boolean
    feature_input_type?: boolean
    feature_categories?: boolean | feature_categoriesDefaultArgs<ExtArgs>
    plan_features?: boolean | features$plan_featuresArgs<ExtArgs>
    _count?: boolean | FeaturesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["features"]>

  export type featuresSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    feature_id?: boolean
    category_id?: boolean
    feature_value?: boolean
    feature_key?: boolean
    feature_input_type?: boolean
    feature_categories?: boolean | feature_categoriesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["features"]>

  export type featuresSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    feature_id?: boolean
    category_id?: boolean
    feature_value?: boolean
    feature_key?: boolean
    feature_input_type?: boolean
    feature_categories?: boolean | feature_categoriesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["features"]>

  export type featuresSelectScalar = {
    feature_id?: boolean
    category_id?: boolean
    feature_value?: boolean
    feature_key?: boolean
    feature_input_type?: boolean
  }

  export type featuresOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"feature_id" | "category_id" | "feature_value" | "feature_key" | "feature_input_type", ExtArgs["result"]["features"]>
  export type featuresInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    feature_categories?: boolean | feature_categoriesDefaultArgs<ExtArgs>
    plan_features?: boolean | features$plan_featuresArgs<ExtArgs>
    _count?: boolean | FeaturesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type featuresIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    feature_categories?: boolean | feature_categoriesDefaultArgs<ExtArgs>
  }
  export type featuresIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    feature_categories?: boolean | feature_categoriesDefaultArgs<ExtArgs>
  }

  export type $featuresPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "features"
    objects: {
      feature_categories: Prisma.$feature_categoriesPayload<ExtArgs>
      plan_features: Prisma.$plan_featuresPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      feature_id: number
      category_id: number
      feature_value: string | null
      feature_key: string | null
      feature_input_type: $Enums.featureinputtype | null
    }, ExtArgs["result"]["features"]>
    composites: {}
  }

  type featuresGetPayload<S extends boolean | null | undefined | featuresDefaultArgs> = $Result.GetResult<Prisma.$featuresPayload, S>

  type featuresCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<featuresFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FeaturesCountAggregateInputType | true
    }

  export interface featuresDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['features'], meta: { name: 'features' } }
    /**
     * Find zero or one Features that matches the filter.
     * @param {featuresFindUniqueArgs} args - Arguments to find a Features
     * @example
     * // Get one Features
     * const features = await prisma.features.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends featuresFindUniqueArgs>(args: SelectSubset<T, featuresFindUniqueArgs<ExtArgs>>): Prisma__featuresClient<$Result.GetResult<Prisma.$featuresPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Features that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {featuresFindUniqueOrThrowArgs} args - Arguments to find a Features
     * @example
     * // Get one Features
     * const features = await prisma.features.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends featuresFindUniqueOrThrowArgs>(args: SelectSubset<T, featuresFindUniqueOrThrowArgs<ExtArgs>>): Prisma__featuresClient<$Result.GetResult<Prisma.$featuresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Features that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {featuresFindFirstArgs} args - Arguments to find a Features
     * @example
     * // Get one Features
     * const features = await prisma.features.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends featuresFindFirstArgs>(args?: SelectSubset<T, featuresFindFirstArgs<ExtArgs>>): Prisma__featuresClient<$Result.GetResult<Prisma.$featuresPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Features that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {featuresFindFirstOrThrowArgs} args - Arguments to find a Features
     * @example
     * // Get one Features
     * const features = await prisma.features.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends featuresFindFirstOrThrowArgs>(args?: SelectSubset<T, featuresFindFirstOrThrowArgs<ExtArgs>>): Prisma__featuresClient<$Result.GetResult<Prisma.$featuresPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Features that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {featuresFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Features
     * const features = await prisma.features.findMany()
     * 
     * // Get first 10 Features
     * const features = await prisma.features.findMany({ take: 10 })
     * 
     * // Only select the `feature_id`
     * const featuresWithFeature_idOnly = await prisma.features.findMany({ select: { feature_id: true } })
     * 
     */
    findMany<T extends featuresFindManyArgs>(args?: SelectSubset<T, featuresFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$featuresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Features.
     * @param {featuresCreateArgs} args - Arguments to create a Features.
     * @example
     * // Create one Features
     * const Features = await prisma.features.create({
     *   data: {
     *     // ... data to create a Features
     *   }
     * })
     * 
     */
    create<T extends featuresCreateArgs>(args: SelectSubset<T, featuresCreateArgs<ExtArgs>>): Prisma__featuresClient<$Result.GetResult<Prisma.$featuresPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Features.
     * @param {featuresCreateManyArgs} args - Arguments to create many Features.
     * @example
     * // Create many Features
     * const features = await prisma.features.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends featuresCreateManyArgs>(args?: SelectSubset<T, featuresCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Features and returns the data saved in the database.
     * @param {featuresCreateManyAndReturnArgs} args - Arguments to create many Features.
     * @example
     * // Create many Features
     * const features = await prisma.features.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Features and only return the `feature_id`
     * const featuresWithFeature_idOnly = await prisma.features.createManyAndReturn({
     *   select: { feature_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends featuresCreateManyAndReturnArgs>(args?: SelectSubset<T, featuresCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$featuresPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Features.
     * @param {featuresDeleteArgs} args - Arguments to delete one Features.
     * @example
     * // Delete one Features
     * const Features = await prisma.features.delete({
     *   where: {
     *     // ... filter to delete one Features
     *   }
     * })
     * 
     */
    delete<T extends featuresDeleteArgs>(args: SelectSubset<T, featuresDeleteArgs<ExtArgs>>): Prisma__featuresClient<$Result.GetResult<Prisma.$featuresPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Features.
     * @param {featuresUpdateArgs} args - Arguments to update one Features.
     * @example
     * // Update one Features
     * const features = await prisma.features.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends featuresUpdateArgs>(args: SelectSubset<T, featuresUpdateArgs<ExtArgs>>): Prisma__featuresClient<$Result.GetResult<Prisma.$featuresPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Features.
     * @param {featuresDeleteManyArgs} args - Arguments to filter Features to delete.
     * @example
     * // Delete a few Features
     * const { count } = await prisma.features.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends featuresDeleteManyArgs>(args?: SelectSubset<T, featuresDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Features.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {featuresUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Features
     * const features = await prisma.features.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends featuresUpdateManyArgs>(args: SelectSubset<T, featuresUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Features and returns the data updated in the database.
     * @param {featuresUpdateManyAndReturnArgs} args - Arguments to update many Features.
     * @example
     * // Update many Features
     * const features = await prisma.features.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Features and only return the `feature_id`
     * const featuresWithFeature_idOnly = await prisma.features.updateManyAndReturn({
     *   select: { feature_id: true },
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
    updateManyAndReturn<T extends featuresUpdateManyAndReturnArgs>(args: SelectSubset<T, featuresUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$featuresPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Features.
     * @param {featuresUpsertArgs} args - Arguments to update or create a Features.
     * @example
     * // Update or create a Features
     * const features = await prisma.features.upsert({
     *   create: {
     *     // ... data to create a Features
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Features we want to update
     *   }
     * })
     */
    upsert<T extends featuresUpsertArgs>(args: SelectSubset<T, featuresUpsertArgs<ExtArgs>>): Prisma__featuresClient<$Result.GetResult<Prisma.$featuresPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Features.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {featuresCountArgs} args - Arguments to filter Features to count.
     * @example
     * // Count the number of Features
     * const count = await prisma.features.count({
     *   where: {
     *     // ... the filter for the Features we want to count
     *   }
     * })
    **/
    count<T extends featuresCountArgs>(
      args?: Subset<T, featuresCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeaturesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Features.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeaturesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FeaturesAggregateArgs>(args: Subset<T, FeaturesAggregateArgs>): Prisma.PrismaPromise<GetFeaturesAggregateType<T>>

    /**
     * Group by Features.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {featuresGroupByArgs} args - Group by arguments.
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
      T extends featuresGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: featuresGroupByArgs['orderBy'] }
        : { orderBy?: featuresGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, featuresGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeaturesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the features model
   */
  readonly fields: featuresFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for features.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__featuresClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    feature_categories<T extends feature_categoriesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, feature_categoriesDefaultArgs<ExtArgs>>): Prisma__feature_categoriesClient<$Result.GetResult<Prisma.$feature_categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    plan_features<T extends features$plan_featuresArgs<ExtArgs> = {}>(args?: Subset<T, features$plan_featuresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$plan_featuresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the features model
   */
  interface featuresFieldRefs {
    readonly feature_id: FieldRef<"features", 'Int'>
    readonly category_id: FieldRef<"features", 'Int'>
    readonly feature_value: FieldRef<"features", 'String'>
    readonly feature_key: FieldRef<"features", 'String'>
    readonly feature_input_type: FieldRef<"features", 'featureinputtype'>
  }
    

  // Custom InputTypes
  /**
   * features findUnique
   */
  export type featuresFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the features
     */
    select?: featuresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the features
     */
    omit?: featuresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: featuresInclude<ExtArgs> | null
    /**
     * Filter, which features to fetch.
     */
    where: featuresWhereUniqueInput
  }

  /**
   * features findUniqueOrThrow
   */
  export type featuresFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the features
     */
    select?: featuresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the features
     */
    omit?: featuresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: featuresInclude<ExtArgs> | null
    /**
     * Filter, which features to fetch.
     */
    where: featuresWhereUniqueInput
  }

  /**
   * features findFirst
   */
  export type featuresFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the features
     */
    select?: featuresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the features
     */
    omit?: featuresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: featuresInclude<ExtArgs> | null
    /**
     * Filter, which features to fetch.
     */
    where?: featuresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of features to fetch.
     */
    orderBy?: featuresOrderByWithRelationInput | featuresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for features.
     */
    cursor?: featuresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` features from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` features.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of features.
     */
    distinct?: FeaturesScalarFieldEnum | FeaturesScalarFieldEnum[]
  }

  /**
   * features findFirstOrThrow
   */
  export type featuresFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the features
     */
    select?: featuresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the features
     */
    omit?: featuresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: featuresInclude<ExtArgs> | null
    /**
     * Filter, which features to fetch.
     */
    where?: featuresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of features to fetch.
     */
    orderBy?: featuresOrderByWithRelationInput | featuresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for features.
     */
    cursor?: featuresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` features from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` features.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of features.
     */
    distinct?: FeaturesScalarFieldEnum | FeaturesScalarFieldEnum[]
  }

  /**
   * features findMany
   */
  export type featuresFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the features
     */
    select?: featuresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the features
     */
    omit?: featuresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: featuresInclude<ExtArgs> | null
    /**
     * Filter, which features to fetch.
     */
    where?: featuresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of features to fetch.
     */
    orderBy?: featuresOrderByWithRelationInput | featuresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing features.
     */
    cursor?: featuresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` features from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` features.
     */
    skip?: number
    distinct?: FeaturesScalarFieldEnum | FeaturesScalarFieldEnum[]
  }

  /**
   * features create
   */
  export type featuresCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the features
     */
    select?: featuresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the features
     */
    omit?: featuresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: featuresInclude<ExtArgs> | null
    /**
     * The data needed to create a features.
     */
    data: XOR<featuresCreateInput, featuresUncheckedCreateInput>
  }

  /**
   * features createMany
   */
  export type featuresCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many features.
     */
    data: featuresCreateManyInput | featuresCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * features createManyAndReturn
   */
  export type featuresCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the features
     */
    select?: featuresSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the features
     */
    omit?: featuresOmit<ExtArgs> | null
    /**
     * The data used to create many features.
     */
    data: featuresCreateManyInput | featuresCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: featuresIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * features update
   */
  export type featuresUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the features
     */
    select?: featuresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the features
     */
    omit?: featuresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: featuresInclude<ExtArgs> | null
    /**
     * The data needed to update a features.
     */
    data: XOR<featuresUpdateInput, featuresUncheckedUpdateInput>
    /**
     * Choose, which features to update.
     */
    where: featuresWhereUniqueInput
  }

  /**
   * features updateMany
   */
  export type featuresUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update features.
     */
    data: XOR<featuresUpdateManyMutationInput, featuresUncheckedUpdateManyInput>
    /**
     * Filter which features to update
     */
    where?: featuresWhereInput
    /**
     * Limit how many features to update.
     */
    limit?: number
  }

  /**
   * features updateManyAndReturn
   */
  export type featuresUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the features
     */
    select?: featuresSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the features
     */
    omit?: featuresOmit<ExtArgs> | null
    /**
     * The data used to update features.
     */
    data: XOR<featuresUpdateManyMutationInput, featuresUncheckedUpdateManyInput>
    /**
     * Filter which features to update
     */
    where?: featuresWhereInput
    /**
     * Limit how many features to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: featuresIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * features upsert
   */
  export type featuresUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the features
     */
    select?: featuresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the features
     */
    omit?: featuresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: featuresInclude<ExtArgs> | null
    /**
     * The filter to search for the features to update in case it exists.
     */
    where: featuresWhereUniqueInput
    /**
     * In case the features found by the `where` argument doesn't exist, create a new features with this data.
     */
    create: XOR<featuresCreateInput, featuresUncheckedCreateInput>
    /**
     * In case the features was found with the provided `where` argument, update it with this data.
     */
    update: XOR<featuresUpdateInput, featuresUncheckedUpdateInput>
  }

  /**
   * features delete
   */
  export type featuresDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the features
     */
    select?: featuresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the features
     */
    omit?: featuresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: featuresInclude<ExtArgs> | null
    /**
     * Filter which features to delete.
     */
    where: featuresWhereUniqueInput
  }

  /**
   * features deleteMany
   */
  export type featuresDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which features to delete
     */
    where?: featuresWhereInput
    /**
     * Limit how many features to delete.
     */
    limit?: number
  }

  /**
   * features.plan_features
   */
  export type features$plan_featuresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plan_features
     */
    select?: plan_featuresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plan_features
     */
    omit?: plan_featuresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: plan_featuresInclude<ExtArgs> | null
    where?: plan_featuresWhereInput
    orderBy?: plan_featuresOrderByWithRelationInput | plan_featuresOrderByWithRelationInput[]
    cursor?: plan_featuresWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Plan_featuresScalarFieldEnum | Plan_featuresScalarFieldEnum[]
  }

  /**
   * features without action
   */
  export type featuresDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the features
     */
    select?: featuresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the features
     */
    omit?: featuresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: featuresInclude<ExtArgs> | null
  }


  /**
   * Model organisations
   */

  export type AggregateOrganisations = {
    _count: OrganisationsCountAggregateOutputType | null
    _avg: OrganisationsAvgAggregateOutputType | null
    _sum: OrganisationsSumAggregateOutputType | null
    _min: OrganisationsMinAggregateOutputType | null
    _max: OrganisationsMaxAggregateOutputType | null
  }

  export type OrganisationsAvgAggregateOutputType = {
    organisation_id: number | null
  }

  export type OrganisationsSumAggregateOutputType = {
    organisation_id: number | null
  }

  export type OrganisationsMinAggregateOutputType = {
    organisation_id: number | null
    organisation_name: string | null
  }

  export type OrganisationsMaxAggregateOutputType = {
    organisation_id: number | null
    organisation_name: string | null
  }

  export type OrganisationsCountAggregateOutputType = {
    organisation_id: number
    organisation_name: number
    _all: number
  }


  export type OrganisationsAvgAggregateInputType = {
    organisation_id?: true
  }

  export type OrganisationsSumAggregateInputType = {
    organisation_id?: true
  }

  export type OrganisationsMinAggregateInputType = {
    organisation_id?: true
    organisation_name?: true
  }

  export type OrganisationsMaxAggregateInputType = {
    organisation_id?: true
    organisation_name?: true
  }

  export type OrganisationsCountAggregateInputType = {
    organisation_id?: true
    organisation_name?: true
    _all?: true
  }

  export type OrganisationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which organisations to aggregate.
     */
    where?: organisationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of organisations to fetch.
     */
    orderBy?: organisationsOrderByWithRelationInput | organisationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: organisationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` organisations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` organisations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned organisations
    **/
    _count?: true | OrganisationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrganisationsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrganisationsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganisationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganisationsMaxAggregateInputType
  }

  export type GetOrganisationsAggregateType<T extends OrganisationsAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganisations]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganisations[P]>
      : GetScalarType<T[P], AggregateOrganisations[P]>
  }




  export type organisationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: organisationsWhereInput
    orderBy?: organisationsOrderByWithAggregationInput | organisationsOrderByWithAggregationInput[]
    by: OrganisationsScalarFieldEnum[] | OrganisationsScalarFieldEnum
    having?: organisationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganisationsCountAggregateInputType | true
    _avg?: OrganisationsAvgAggregateInputType
    _sum?: OrganisationsSumAggregateInputType
    _min?: OrganisationsMinAggregateInputType
    _max?: OrganisationsMaxAggregateInputType
  }

  export type OrganisationsGroupByOutputType = {
    organisation_id: number
    organisation_name: string
    _count: OrganisationsCountAggregateOutputType | null
    _avg: OrganisationsAvgAggregateOutputType | null
    _sum: OrganisationsSumAggregateOutputType | null
    _min: OrganisationsMinAggregateOutputType | null
    _max: OrganisationsMaxAggregateOutputType | null
  }

  type GetOrganisationsGroupByPayload<T extends organisationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganisationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganisationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganisationsGroupByOutputType[P]>
            : GetScalarType<T[P], OrganisationsGroupByOutputType[P]>
        }
      >
    >


  export type organisationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    organisation_id?: boolean
    organisation_name?: boolean
    subscriptions?: boolean | organisations$subscriptionsArgs<ExtArgs>
    users?: boolean | organisations$usersArgs<ExtArgs>
    _count?: boolean | OrganisationsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organisations"]>

  export type organisationsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    organisation_id?: boolean
    organisation_name?: boolean
  }, ExtArgs["result"]["organisations"]>

  export type organisationsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    organisation_id?: boolean
    organisation_name?: boolean
  }, ExtArgs["result"]["organisations"]>

  export type organisationsSelectScalar = {
    organisation_id?: boolean
    organisation_name?: boolean
  }

  export type organisationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"organisation_id" | "organisation_name", ExtArgs["result"]["organisations"]>
  export type organisationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscriptions?: boolean | organisations$subscriptionsArgs<ExtArgs>
    users?: boolean | organisations$usersArgs<ExtArgs>
    _count?: boolean | OrganisationsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type organisationsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type organisationsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $organisationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "organisations"
    objects: {
      subscriptions: Prisma.$subscriptionsPayload<ExtArgs>[]
      users: Prisma.$usersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      organisation_id: number
      organisation_name: string
    }, ExtArgs["result"]["organisations"]>
    composites: {}
  }

  type organisationsGetPayload<S extends boolean | null | undefined | organisationsDefaultArgs> = $Result.GetResult<Prisma.$organisationsPayload, S>

  type organisationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<organisationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrganisationsCountAggregateInputType | true
    }

  export interface organisationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['organisations'], meta: { name: 'organisations' } }
    /**
     * Find zero or one Organisations that matches the filter.
     * @param {organisationsFindUniqueArgs} args - Arguments to find a Organisations
     * @example
     * // Get one Organisations
     * const organisations = await prisma.organisations.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends organisationsFindUniqueArgs>(args: SelectSubset<T, organisationsFindUniqueArgs<ExtArgs>>): Prisma__organisationsClient<$Result.GetResult<Prisma.$organisationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Organisations that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {organisationsFindUniqueOrThrowArgs} args - Arguments to find a Organisations
     * @example
     * // Get one Organisations
     * const organisations = await prisma.organisations.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends organisationsFindUniqueOrThrowArgs>(args: SelectSubset<T, organisationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__organisationsClient<$Result.GetResult<Prisma.$organisationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organisations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organisationsFindFirstArgs} args - Arguments to find a Organisations
     * @example
     * // Get one Organisations
     * const organisations = await prisma.organisations.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends organisationsFindFirstArgs>(args?: SelectSubset<T, organisationsFindFirstArgs<ExtArgs>>): Prisma__organisationsClient<$Result.GetResult<Prisma.$organisationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organisations that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organisationsFindFirstOrThrowArgs} args - Arguments to find a Organisations
     * @example
     * // Get one Organisations
     * const organisations = await prisma.organisations.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends organisationsFindFirstOrThrowArgs>(args?: SelectSubset<T, organisationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__organisationsClient<$Result.GetResult<Prisma.$organisationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Organisations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organisationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organisations
     * const organisations = await prisma.organisations.findMany()
     * 
     * // Get first 10 Organisations
     * const organisations = await prisma.organisations.findMany({ take: 10 })
     * 
     * // Only select the `organisation_id`
     * const organisationsWithOrganisation_idOnly = await prisma.organisations.findMany({ select: { organisation_id: true } })
     * 
     */
    findMany<T extends organisationsFindManyArgs>(args?: SelectSubset<T, organisationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$organisationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Organisations.
     * @param {organisationsCreateArgs} args - Arguments to create a Organisations.
     * @example
     * // Create one Organisations
     * const Organisations = await prisma.organisations.create({
     *   data: {
     *     // ... data to create a Organisations
     *   }
     * })
     * 
     */
    create<T extends organisationsCreateArgs>(args: SelectSubset<T, organisationsCreateArgs<ExtArgs>>): Prisma__organisationsClient<$Result.GetResult<Prisma.$organisationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Organisations.
     * @param {organisationsCreateManyArgs} args - Arguments to create many Organisations.
     * @example
     * // Create many Organisations
     * const organisations = await prisma.organisations.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends organisationsCreateManyArgs>(args?: SelectSubset<T, organisationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Organisations and returns the data saved in the database.
     * @param {organisationsCreateManyAndReturnArgs} args - Arguments to create many Organisations.
     * @example
     * // Create many Organisations
     * const organisations = await prisma.organisations.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Organisations and only return the `organisation_id`
     * const organisationsWithOrganisation_idOnly = await prisma.organisations.createManyAndReturn({
     *   select: { organisation_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends organisationsCreateManyAndReturnArgs>(args?: SelectSubset<T, organisationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$organisationsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Organisations.
     * @param {organisationsDeleteArgs} args - Arguments to delete one Organisations.
     * @example
     * // Delete one Organisations
     * const Organisations = await prisma.organisations.delete({
     *   where: {
     *     // ... filter to delete one Organisations
     *   }
     * })
     * 
     */
    delete<T extends organisationsDeleteArgs>(args: SelectSubset<T, organisationsDeleteArgs<ExtArgs>>): Prisma__organisationsClient<$Result.GetResult<Prisma.$organisationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Organisations.
     * @param {organisationsUpdateArgs} args - Arguments to update one Organisations.
     * @example
     * // Update one Organisations
     * const organisations = await prisma.organisations.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends organisationsUpdateArgs>(args: SelectSubset<T, organisationsUpdateArgs<ExtArgs>>): Prisma__organisationsClient<$Result.GetResult<Prisma.$organisationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Organisations.
     * @param {organisationsDeleteManyArgs} args - Arguments to filter Organisations to delete.
     * @example
     * // Delete a few Organisations
     * const { count } = await prisma.organisations.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends organisationsDeleteManyArgs>(args?: SelectSubset<T, organisationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organisations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organisationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organisations
     * const organisations = await prisma.organisations.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends organisationsUpdateManyArgs>(args: SelectSubset<T, organisationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organisations and returns the data updated in the database.
     * @param {organisationsUpdateManyAndReturnArgs} args - Arguments to update many Organisations.
     * @example
     * // Update many Organisations
     * const organisations = await prisma.organisations.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Organisations and only return the `organisation_id`
     * const organisationsWithOrganisation_idOnly = await prisma.organisations.updateManyAndReturn({
     *   select: { organisation_id: true },
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
    updateManyAndReturn<T extends organisationsUpdateManyAndReturnArgs>(args: SelectSubset<T, organisationsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$organisationsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Organisations.
     * @param {organisationsUpsertArgs} args - Arguments to update or create a Organisations.
     * @example
     * // Update or create a Organisations
     * const organisations = await prisma.organisations.upsert({
     *   create: {
     *     // ... data to create a Organisations
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organisations we want to update
     *   }
     * })
     */
    upsert<T extends organisationsUpsertArgs>(args: SelectSubset<T, organisationsUpsertArgs<ExtArgs>>): Prisma__organisationsClient<$Result.GetResult<Prisma.$organisationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Organisations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organisationsCountArgs} args - Arguments to filter Organisations to count.
     * @example
     * // Count the number of Organisations
     * const count = await prisma.organisations.count({
     *   where: {
     *     // ... the filter for the Organisations we want to count
     *   }
     * })
    **/
    count<T extends organisationsCountArgs>(
      args?: Subset<T, organisationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganisationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Organisations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganisationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrganisationsAggregateArgs>(args: Subset<T, OrganisationsAggregateArgs>): Prisma.PrismaPromise<GetOrganisationsAggregateType<T>>

    /**
     * Group by Organisations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organisationsGroupByArgs} args - Group by arguments.
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
      T extends organisationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: organisationsGroupByArgs['orderBy'] }
        : { orderBy?: organisationsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, organisationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganisationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the organisations model
   */
  readonly fields: organisationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for organisations.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__organisationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subscriptions<T extends organisations$subscriptionsArgs<ExtArgs> = {}>(args?: Subset<T, organisations$subscriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$subscriptionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends organisations$usersArgs<ExtArgs> = {}>(args?: Subset<T, organisations$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the organisations model
   */
  interface organisationsFieldRefs {
    readonly organisation_id: FieldRef<"organisations", 'Int'>
    readonly organisation_name: FieldRef<"organisations", 'String'>
  }
    

  // Custom InputTypes
  /**
   * organisations findUnique
   */
  export type organisationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organisations
     */
    select?: organisationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organisations
     */
    omit?: organisationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organisationsInclude<ExtArgs> | null
    /**
     * Filter, which organisations to fetch.
     */
    where: organisationsWhereUniqueInput
  }

  /**
   * organisations findUniqueOrThrow
   */
  export type organisationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organisations
     */
    select?: organisationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organisations
     */
    omit?: organisationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organisationsInclude<ExtArgs> | null
    /**
     * Filter, which organisations to fetch.
     */
    where: organisationsWhereUniqueInput
  }

  /**
   * organisations findFirst
   */
  export type organisationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organisations
     */
    select?: organisationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organisations
     */
    omit?: organisationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organisationsInclude<ExtArgs> | null
    /**
     * Filter, which organisations to fetch.
     */
    where?: organisationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of organisations to fetch.
     */
    orderBy?: organisationsOrderByWithRelationInput | organisationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for organisations.
     */
    cursor?: organisationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` organisations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` organisations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of organisations.
     */
    distinct?: OrganisationsScalarFieldEnum | OrganisationsScalarFieldEnum[]
  }

  /**
   * organisations findFirstOrThrow
   */
  export type organisationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organisations
     */
    select?: organisationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organisations
     */
    omit?: organisationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organisationsInclude<ExtArgs> | null
    /**
     * Filter, which organisations to fetch.
     */
    where?: organisationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of organisations to fetch.
     */
    orderBy?: organisationsOrderByWithRelationInput | organisationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for organisations.
     */
    cursor?: organisationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` organisations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` organisations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of organisations.
     */
    distinct?: OrganisationsScalarFieldEnum | OrganisationsScalarFieldEnum[]
  }

  /**
   * organisations findMany
   */
  export type organisationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organisations
     */
    select?: organisationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organisations
     */
    omit?: organisationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organisationsInclude<ExtArgs> | null
    /**
     * Filter, which organisations to fetch.
     */
    where?: organisationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of organisations to fetch.
     */
    orderBy?: organisationsOrderByWithRelationInput | organisationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing organisations.
     */
    cursor?: organisationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` organisations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` organisations.
     */
    skip?: number
    distinct?: OrganisationsScalarFieldEnum | OrganisationsScalarFieldEnum[]
  }

  /**
   * organisations create
   */
  export type organisationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organisations
     */
    select?: organisationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organisations
     */
    omit?: organisationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organisationsInclude<ExtArgs> | null
    /**
     * The data needed to create a organisations.
     */
    data: XOR<organisationsCreateInput, organisationsUncheckedCreateInput>
  }

  /**
   * organisations createMany
   */
  export type organisationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many organisations.
     */
    data: organisationsCreateManyInput | organisationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * organisations createManyAndReturn
   */
  export type organisationsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organisations
     */
    select?: organisationsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the organisations
     */
    omit?: organisationsOmit<ExtArgs> | null
    /**
     * The data used to create many organisations.
     */
    data: organisationsCreateManyInput | organisationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * organisations update
   */
  export type organisationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organisations
     */
    select?: organisationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organisations
     */
    omit?: organisationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organisationsInclude<ExtArgs> | null
    /**
     * The data needed to update a organisations.
     */
    data: XOR<organisationsUpdateInput, organisationsUncheckedUpdateInput>
    /**
     * Choose, which organisations to update.
     */
    where: organisationsWhereUniqueInput
  }

  /**
   * organisations updateMany
   */
  export type organisationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update organisations.
     */
    data: XOR<organisationsUpdateManyMutationInput, organisationsUncheckedUpdateManyInput>
    /**
     * Filter which organisations to update
     */
    where?: organisationsWhereInput
    /**
     * Limit how many organisations to update.
     */
    limit?: number
  }

  /**
   * organisations updateManyAndReturn
   */
  export type organisationsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organisations
     */
    select?: organisationsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the organisations
     */
    omit?: organisationsOmit<ExtArgs> | null
    /**
     * The data used to update organisations.
     */
    data: XOR<organisationsUpdateManyMutationInput, organisationsUncheckedUpdateManyInput>
    /**
     * Filter which organisations to update
     */
    where?: organisationsWhereInput
    /**
     * Limit how many organisations to update.
     */
    limit?: number
  }

  /**
   * organisations upsert
   */
  export type organisationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organisations
     */
    select?: organisationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organisations
     */
    omit?: organisationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organisationsInclude<ExtArgs> | null
    /**
     * The filter to search for the organisations to update in case it exists.
     */
    where: organisationsWhereUniqueInput
    /**
     * In case the organisations found by the `where` argument doesn't exist, create a new organisations with this data.
     */
    create: XOR<organisationsCreateInput, organisationsUncheckedCreateInput>
    /**
     * In case the organisations was found with the provided `where` argument, update it with this data.
     */
    update: XOR<organisationsUpdateInput, organisationsUncheckedUpdateInput>
  }

  /**
   * organisations delete
   */
  export type organisationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organisations
     */
    select?: organisationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organisations
     */
    omit?: organisationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organisationsInclude<ExtArgs> | null
    /**
     * Filter which organisations to delete.
     */
    where: organisationsWhereUniqueInput
  }

  /**
   * organisations deleteMany
   */
  export type organisationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which organisations to delete
     */
    where?: organisationsWhereInput
    /**
     * Limit how many organisations to delete.
     */
    limit?: number
  }

  /**
   * organisations.subscriptions
   */
  export type organisations$subscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscriptions
     */
    select?: subscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subscriptions
     */
    omit?: subscriptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subscriptionsInclude<ExtArgs> | null
    where?: subscriptionsWhereInput
    orderBy?: subscriptionsOrderByWithRelationInput | subscriptionsOrderByWithRelationInput[]
    cursor?: subscriptionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubscriptionsScalarFieldEnum | SubscriptionsScalarFieldEnum[]
  }

  /**
   * organisations.users
   */
  export type organisations$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    cursor?: usersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * organisations without action
   */
  export type organisationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organisations
     */
    select?: organisationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organisations
     */
    omit?: organisationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organisationsInclude<ExtArgs> | null
  }


  /**
   * Model plan_features
   */

  export type AggregatePlan_features = {
    _count: Plan_featuresCountAggregateOutputType | null
    _avg: Plan_featuresAvgAggregateOutputType | null
    _sum: Plan_featuresSumAggregateOutputType | null
    _min: Plan_featuresMinAggregateOutputType | null
    _max: Plan_featuresMaxAggregateOutputType | null
  }

  export type Plan_featuresAvgAggregateOutputType = {
    plan_feature_id: number | null
    plan_id: number | null
    feature_id: number | null
    numeric_value: number | null
  }

  export type Plan_featuresSumAggregateOutputType = {
    plan_feature_id: number | null
    plan_id: number | null
    feature_id: number | null
    numeric_value: number | null
  }

  export type Plan_featuresMinAggregateOutputType = {
    plan_feature_id: number | null
    plan_id: number | null
    feature_id: number | null
    boolean_value: boolean | null
    text_value: string | null
    numeric_value: number | null
  }

  export type Plan_featuresMaxAggregateOutputType = {
    plan_feature_id: number | null
    plan_id: number | null
    feature_id: number | null
    boolean_value: boolean | null
    text_value: string | null
    numeric_value: number | null
  }

  export type Plan_featuresCountAggregateOutputType = {
    plan_feature_id: number
    plan_id: number
    feature_id: number
    boolean_value: number
    text_value: number
    numeric_value: number
    _all: number
  }


  export type Plan_featuresAvgAggregateInputType = {
    plan_feature_id?: true
    plan_id?: true
    feature_id?: true
    numeric_value?: true
  }

  export type Plan_featuresSumAggregateInputType = {
    plan_feature_id?: true
    plan_id?: true
    feature_id?: true
    numeric_value?: true
  }

  export type Plan_featuresMinAggregateInputType = {
    plan_feature_id?: true
    plan_id?: true
    feature_id?: true
    boolean_value?: true
    text_value?: true
    numeric_value?: true
  }

  export type Plan_featuresMaxAggregateInputType = {
    plan_feature_id?: true
    plan_id?: true
    feature_id?: true
    boolean_value?: true
    text_value?: true
    numeric_value?: true
  }

  export type Plan_featuresCountAggregateInputType = {
    plan_feature_id?: true
    plan_id?: true
    feature_id?: true
    boolean_value?: true
    text_value?: true
    numeric_value?: true
    _all?: true
  }

  export type Plan_featuresAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which plan_features to aggregate.
     */
    where?: plan_featuresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of plan_features to fetch.
     */
    orderBy?: plan_featuresOrderByWithRelationInput | plan_featuresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: plan_featuresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` plan_features from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` plan_features.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned plan_features
    **/
    _count?: true | Plan_featuresCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Plan_featuresAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Plan_featuresSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Plan_featuresMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Plan_featuresMaxAggregateInputType
  }

  export type GetPlan_featuresAggregateType<T extends Plan_featuresAggregateArgs> = {
        [P in keyof T & keyof AggregatePlan_features]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlan_features[P]>
      : GetScalarType<T[P], AggregatePlan_features[P]>
  }




  export type plan_featuresGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: plan_featuresWhereInput
    orderBy?: plan_featuresOrderByWithAggregationInput | plan_featuresOrderByWithAggregationInput[]
    by: Plan_featuresScalarFieldEnum[] | Plan_featuresScalarFieldEnum
    having?: plan_featuresScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Plan_featuresCountAggregateInputType | true
    _avg?: Plan_featuresAvgAggregateInputType
    _sum?: Plan_featuresSumAggregateInputType
    _min?: Plan_featuresMinAggregateInputType
    _max?: Plan_featuresMaxAggregateInputType
  }

  export type Plan_featuresGroupByOutputType = {
    plan_feature_id: number
    plan_id: number | null
    feature_id: number | null
    boolean_value: boolean | null
    text_value: string | null
    numeric_value: number | null
    _count: Plan_featuresCountAggregateOutputType | null
    _avg: Plan_featuresAvgAggregateOutputType | null
    _sum: Plan_featuresSumAggregateOutputType | null
    _min: Plan_featuresMinAggregateOutputType | null
    _max: Plan_featuresMaxAggregateOutputType | null
  }

  type GetPlan_featuresGroupByPayload<T extends plan_featuresGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Plan_featuresGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Plan_featuresGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Plan_featuresGroupByOutputType[P]>
            : GetScalarType<T[P], Plan_featuresGroupByOutputType[P]>
        }
      >
    >


  export type plan_featuresSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    plan_feature_id?: boolean
    plan_id?: boolean
    feature_id?: boolean
    boolean_value?: boolean
    text_value?: boolean
    numeric_value?: boolean
    features?: boolean | plan_features$featuresArgs<ExtArgs>
    plans?: boolean | plan_features$plansArgs<ExtArgs>
  }, ExtArgs["result"]["plan_features"]>

  export type plan_featuresSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    plan_feature_id?: boolean
    plan_id?: boolean
    feature_id?: boolean
    boolean_value?: boolean
    text_value?: boolean
    numeric_value?: boolean
    features?: boolean | plan_features$featuresArgs<ExtArgs>
    plans?: boolean | plan_features$plansArgs<ExtArgs>
  }, ExtArgs["result"]["plan_features"]>

  export type plan_featuresSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    plan_feature_id?: boolean
    plan_id?: boolean
    feature_id?: boolean
    boolean_value?: boolean
    text_value?: boolean
    numeric_value?: boolean
    features?: boolean | plan_features$featuresArgs<ExtArgs>
    plans?: boolean | plan_features$plansArgs<ExtArgs>
  }, ExtArgs["result"]["plan_features"]>

  export type plan_featuresSelectScalar = {
    plan_feature_id?: boolean
    plan_id?: boolean
    feature_id?: boolean
    boolean_value?: boolean
    text_value?: boolean
    numeric_value?: boolean
  }

  export type plan_featuresOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"plan_feature_id" | "plan_id" | "feature_id" | "boolean_value" | "text_value" | "numeric_value", ExtArgs["result"]["plan_features"]>
  export type plan_featuresInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    features?: boolean | plan_features$featuresArgs<ExtArgs>
    plans?: boolean | plan_features$plansArgs<ExtArgs>
  }
  export type plan_featuresIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    features?: boolean | plan_features$featuresArgs<ExtArgs>
    plans?: boolean | plan_features$plansArgs<ExtArgs>
  }
  export type plan_featuresIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    features?: boolean | plan_features$featuresArgs<ExtArgs>
    plans?: boolean | plan_features$plansArgs<ExtArgs>
  }

  export type $plan_featuresPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "plan_features"
    objects: {
      features: Prisma.$featuresPayload<ExtArgs> | null
      plans: Prisma.$plansPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      plan_feature_id: number
      plan_id: number | null
      feature_id: number | null
      boolean_value: boolean | null
      text_value: string | null
      numeric_value: number | null
    }, ExtArgs["result"]["plan_features"]>
    composites: {}
  }

  type plan_featuresGetPayload<S extends boolean | null | undefined | plan_featuresDefaultArgs> = $Result.GetResult<Prisma.$plan_featuresPayload, S>

  type plan_featuresCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<plan_featuresFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Plan_featuresCountAggregateInputType | true
    }

  export interface plan_featuresDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['plan_features'], meta: { name: 'plan_features' } }
    /**
     * Find zero or one Plan_features that matches the filter.
     * @param {plan_featuresFindUniqueArgs} args - Arguments to find a Plan_features
     * @example
     * // Get one Plan_features
     * const plan_features = await prisma.plan_features.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends plan_featuresFindUniqueArgs>(args: SelectSubset<T, plan_featuresFindUniqueArgs<ExtArgs>>): Prisma__plan_featuresClient<$Result.GetResult<Prisma.$plan_featuresPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Plan_features that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {plan_featuresFindUniqueOrThrowArgs} args - Arguments to find a Plan_features
     * @example
     * // Get one Plan_features
     * const plan_features = await prisma.plan_features.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends plan_featuresFindUniqueOrThrowArgs>(args: SelectSubset<T, plan_featuresFindUniqueOrThrowArgs<ExtArgs>>): Prisma__plan_featuresClient<$Result.GetResult<Prisma.$plan_featuresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Plan_features that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {plan_featuresFindFirstArgs} args - Arguments to find a Plan_features
     * @example
     * // Get one Plan_features
     * const plan_features = await prisma.plan_features.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends plan_featuresFindFirstArgs>(args?: SelectSubset<T, plan_featuresFindFirstArgs<ExtArgs>>): Prisma__plan_featuresClient<$Result.GetResult<Prisma.$plan_featuresPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Plan_features that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {plan_featuresFindFirstOrThrowArgs} args - Arguments to find a Plan_features
     * @example
     * // Get one Plan_features
     * const plan_features = await prisma.plan_features.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends plan_featuresFindFirstOrThrowArgs>(args?: SelectSubset<T, plan_featuresFindFirstOrThrowArgs<ExtArgs>>): Prisma__plan_featuresClient<$Result.GetResult<Prisma.$plan_featuresPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Plan_features that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {plan_featuresFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Plan_features
     * const plan_features = await prisma.plan_features.findMany()
     * 
     * // Get first 10 Plan_features
     * const plan_features = await prisma.plan_features.findMany({ take: 10 })
     * 
     * // Only select the `plan_feature_id`
     * const plan_featuresWithPlan_feature_idOnly = await prisma.plan_features.findMany({ select: { plan_feature_id: true } })
     * 
     */
    findMany<T extends plan_featuresFindManyArgs>(args?: SelectSubset<T, plan_featuresFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$plan_featuresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Plan_features.
     * @param {plan_featuresCreateArgs} args - Arguments to create a Plan_features.
     * @example
     * // Create one Plan_features
     * const Plan_features = await prisma.plan_features.create({
     *   data: {
     *     // ... data to create a Plan_features
     *   }
     * })
     * 
     */
    create<T extends plan_featuresCreateArgs>(args: SelectSubset<T, plan_featuresCreateArgs<ExtArgs>>): Prisma__plan_featuresClient<$Result.GetResult<Prisma.$plan_featuresPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Plan_features.
     * @param {plan_featuresCreateManyArgs} args - Arguments to create many Plan_features.
     * @example
     * // Create many Plan_features
     * const plan_features = await prisma.plan_features.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends plan_featuresCreateManyArgs>(args?: SelectSubset<T, plan_featuresCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Plan_features and returns the data saved in the database.
     * @param {plan_featuresCreateManyAndReturnArgs} args - Arguments to create many Plan_features.
     * @example
     * // Create many Plan_features
     * const plan_features = await prisma.plan_features.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Plan_features and only return the `plan_feature_id`
     * const plan_featuresWithPlan_feature_idOnly = await prisma.plan_features.createManyAndReturn({
     *   select: { plan_feature_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends plan_featuresCreateManyAndReturnArgs>(args?: SelectSubset<T, plan_featuresCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$plan_featuresPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Plan_features.
     * @param {plan_featuresDeleteArgs} args - Arguments to delete one Plan_features.
     * @example
     * // Delete one Plan_features
     * const Plan_features = await prisma.plan_features.delete({
     *   where: {
     *     // ... filter to delete one Plan_features
     *   }
     * })
     * 
     */
    delete<T extends plan_featuresDeleteArgs>(args: SelectSubset<T, plan_featuresDeleteArgs<ExtArgs>>): Prisma__plan_featuresClient<$Result.GetResult<Prisma.$plan_featuresPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Plan_features.
     * @param {plan_featuresUpdateArgs} args - Arguments to update one Plan_features.
     * @example
     * // Update one Plan_features
     * const plan_features = await prisma.plan_features.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends plan_featuresUpdateArgs>(args: SelectSubset<T, plan_featuresUpdateArgs<ExtArgs>>): Prisma__plan_featuresClient<$Result.GetResult<Prisma.$plan_featuresPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Plan_features.
     * @param {plan_featuresDeleteManyArgs} args - Arguments to filter Plan_features to delete.
     * @example
     * // Delete a few Plan_features
     * const { count } = await prisma.plan_features.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends plan_featuresDeleteManyArgs>(args?: SelectSubset<T, plan_featuresDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Plan_features.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {plan_featuresUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Plan_features
     * const plan_features = await prisma.plan_features.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends plan_featuresUpdateManyArgs>(args: SelectSubset<T, plan_featuresUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Plan_features and returns the data updated in the database.
     * @param {plan_featuresUpdateManyAndReturnArgs} args - Arguments to update many Plan_features.
     * @example
     * // Update many Plan_features
     * const plan_features = await prisma.plan_features.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Plan_features and only return the `plan_feature_id`
     * const plan_featuresWithPlan_feature_idOnly = await prisma.plan_features.updateManyAndReturn({
     *   select: { plan_feature_id: true },
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
    updateManyAndReturn<T extends plan_featuresUpdateManyAndReturnArgs>(args: SelectSubset<T, plan_featuresUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$plan_featuresPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Plan_features.
     * @param {plan_featuresUpsertArgs} args - Arguments to update or create a Plan_features.
     * @example
     * // Update or create a Plan_features
     * const plan_features = await prisma.plan_features.upsert({
     *   create: {
     *     // ... data to create a Plan_features
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Plan_features we want to update
     *   }
     * })
     */
    upsert<T extends plan_featuresUpsertArgs>(args: SelectSubset<T, plan_featuresUpsertArgs<ExtArgs>>): Prisma__plan_featuresClient<$Result.GetResult<Prisma.$plan_featuresPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Plan_features.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {plan_featuresCountArgs} args - Arguments to filter Plan_features to count.
     * @example
     * // Count the number of Plan_features
     * const count = await prisma.plan_features.count({
     *   where: {
     *     // ... the filter for the Plan_features we want to count
     *   }
     * })
    **/
    count<T extends plan_featuresCountArgs>(
      args?: Subset<T, plan_featuresCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Plan_featuresCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Plan_features.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Plan_featuresAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Plan_featuresAggregateArgs>(args: Subset<T, Plan_featuresAggregateArgs>): Prisma.PrismaPromise<GetPlan_featuresAggregateType<T>>

    /**
     * Group by Plan_features.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {plan_featuresGroupByArgs} args - Group by arguments.
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
      T extends plan_featuresGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: plan_featuresGroupByArgs['orderBy'] }
        : { orderBy?: plan_featuresGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, plan_featuresGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlan_featuresGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the plan_features model
   */
  readonly fields: plan_featuresFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for plan_features.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__plan_featuresClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    features<T extends plan_features$featuresArgs<ExtArgs> = {}>(args?: Subset<T, plan_features$featuresArgs<ExtArgs>>): Prisma__featuresClient<$Result.GetResult<Prisma.$featuresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    plans<T extends plan_features$plansArgs<ExtArgs> = {}>(args?: Subset<T, plan_features$plansArgs<ExtArgs>>): Prisma__plansClient<$Result.GetResult<Prisma.$plansPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the plan_features model
   */
  interface plan_featuresFieldRefs {
    readonly plan_feature_id: FieldRef<"plan_features", 'Int'>
    readonly plan_id: FieldRef<"plan_features", 'Int'>
    readonly feature_id: FieldRef<"plan_features", 'Int'>
    readonly boolean_value: FieldRef<"plan_features", 'Boolean'>
    readonly text_value: FieldRef<"plan_features", 'String'>
    readonly numeric_value: FieldRef<"plan_features", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * plan_features findUnique
   */
  export type plan_featuresFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plan_features
     */
    select?: plan_featuresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plan_features
     */
    omit?: plan_featuresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: plan_featuresInclude<ExtArgs> | null
    /**
     * Filter, which plan_features to fetch.
     */
    where: plan_featuresWhereUniqueInput
  }

  /**
   * plan_features findUniqueOrThrow
   */
  export type plan_featuresFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plan_features
     */
    select?: plan_featuresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plan_features
     */
    omit?: plan_featuresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: plan_featuresInclude<ExtArgs> | null
    /**
     * Filter, which plan_features to fetch.
     */
    where: plan_featuresWhereUniqueInput
  }

  /**
   * plan_features findFirst
   */
  export type plan_featuresFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plan_features
     */
    select?: plan_featuresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plan_features
     */
    omit?: plan_featuresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: plan_featuresInclude<ExtArgs> | null
    /**
     * Filter, which plan_features to fetch.
     */
    where?: plan_featuresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of plan_features to fetch.
     */
    orderBy?: plan_featuresOrderByWithRelationInput | plan_featuresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for plan_features.
     */
    cursor?: plan_featuresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` plan_features from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` plan_features.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of plan_features.
     */
    distinct?: Plan_featuresScalarFieldEnum | Plan_featuresScalarFieldEnum[]
  }

  /**
   * plan_features findFirstOrThrow
   */
  export type plan_featuresFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plan_features
     */
    select?: plan_featuresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plan_features
     */
    omit?: plan_featuresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: plan_featuresInclude<ExtArgs> | null
    /**
     * Filter, which plan_features to fetch.
     */
    where?: plan_featuresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of plan_features to fetch.
     */
    orderBy?: plan_featuresOrderByWithRelationInput | plan_featuresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for plan_features.
     */
    cursor?: plan_featuresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` plan_features from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` plan_features.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of plan_features.
     */
    distinct?: Plan_featuresScalarFieldEnum | Plan_featuresScalarFieldEnum[]
  }

  /**
   * plan_features findMany
   */
  export type plan_featuresFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plan_features
     */
    select?: plan_featuresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plan_features
     */
    omit?: plan_featuresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: plan_featuresInclude<ExtArgs> | null
    /**
     * Filter, which plan_features to fetch.
     */
    where?: plan_featuresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of plan_features to fetch.
     */
    orderBy?: plan_featuresOrderByWithRelationInput | plan_featuresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing plan_features.
     */
    cursor?: plan_featuresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` plan_features from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` plan_features.
     */
    skip?: number
    distinct?: Plan_featuresScalarFieldEnum | Plan_featuresScalarFieldEnum[]
  }

  /**
   * plan_features create
   */
  export type plan_featuresCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plan_features
     */
    select?: plan_featuresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plan_features
     */
    omit?: plan_featuresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: plan_featuresInclude<ExtArgs> | null
    /**
     * The data needed to create a plan_features.
     */
    data?: XOR<plan_featuresCreateInput, plan_featuresUncheckedCreateInput>
  }

  /**
   * plan_features createMany
   */
  export type plan_featuresCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many plan_features.
     */
    data: plan_featuresCreateManyInput | plan_featuresCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * plan_features createManyAndReturn
   */
  export type plan_featuresCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plan_features
     */
    select?: plan_featuresSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the plan_features
     */
    omit?: plan_featuresOmit<ExtArgs> | null
    /**
     * The data used to create many plan_features.
     */
    data: plan_featuresCreateManyInput | plan_featuresCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: plan_featuresIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * plan_features update
   */
  export type plan_featuresUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plan_features
     */
    select?: plan_featuresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plan_features
     */
    omit?: plan_featuresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: plan_featuresInclude<ExtArgs> | null
    /**
     * The data needed to update a plan_features.
     */
    data: XOR<plan_featuresUpdateInput, plan_featuresUncheckedUpdateInput>
    /**
     * Choose, which plan_features to update.
     */
    where: plan_featuresWhereUniqueInput
  }

  /**
   * plan_features updateMany
   */
  export type plan_featuresUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update plan_features.
     */
    data: XOR<plan_featuresUpdateManyMutationInput, plan_featuresUncheckedUpdateManyInput>
    /**
     * Filter which plan_features to update
     */
    where?: plan_featuresWhereInput
    /**
     * Limit how many plan_features to update.
     */
    limit?: number
  }

  /**
   * plan_features updateManyAndReturn
   */
  export type plan_featuresUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plan_features
     */
    select?: plan_featuresSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the plan_features
     */
    omit?: plan_featuresOmit<ExtArgs> | null
    /**
     * The data used to update plan_features.
     */
    data: XOR<plan_featuresUpdateManyMutationInput, plan_featuresUncheckedUpdateManyInput>
    /**
     * Filter which plan_features to update
     */
    where?: plan_featuresWhereInput
    /**
     * Limit how many plan_features to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: plan_featuresIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * plan_features upsert
   */
  export type plan_featuresUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plan_features
     */
    select?: plan_featuresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plan_features
     */
    omit?: plan_featuresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: plan_featuresInclude<ExtArgs> | null
    /**
     * The filter to search for the plan_features to update in case it exists.
     */
    where: plan_featuresWhereUniqueInput
    /**
     * In case the plan_features found by the `where` argument doesn't exist, create a new plan_features with this data.
     */
    create: XOR<plan_featuresCreateInput, plan_featuresUncheckedCreateInput>
    /**
     * In case the plan_features was found with the provided `where` argument, update it with this data.
     */
    update: XOR<plan_featuresUpdateInput, plan_featuresUncheckedUpdateInput>
  }

  /**
   * plan_features delete
   */
  export type plan_featuresDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plan_features
     */
    select?: plan_featuresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plan_features
     */
    omit?: plan_featuresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: plan_featuresInclude<ExtArgs> | null
    /**
     * Filter which plan_features to delete.
     */
    where: plan_featuresWhereUniqueInput
  }

  /**
   * plan_features deleteMany
   */
  export type plan_featuresDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which plan_features to delete
     */
    where?: plan_featuresWhereInput
    /**
     * Limit how many plan_features to delete.
     */
    limit?: number
  }

  /**
   * plan_features.features
   */
  export type plan_features$featuresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the features
     */
    select?: featuresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the features
     */
    omit?: featuresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: featuresInclude<ExtArgs> | null
    where?: featuresWhereInput
  }

  /**
   * plan_features.plans
   */
  export type plan_features$plansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plans
     */
    select?: plansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plans
     */
    omit?: plansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: plansInclude<ExtArgs> | null
    where?: plansWhereInput
  }

  /**
   * plan_features without action
   */
  export type plan_featuresDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plan_features
     */
    select?: plan_featuresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plan_features
     */
    omit?: plan_featuresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: plan_featuresInclude<ExtArgs> | null
  }


  /**
   * Model plans
   */

  export type AggregatePlans = {
    _count: PlansCountAggregateOutputType | null
    _avg: PlansAvgAggregateOutputType | null
    _sum: PlansSumAggregateOutputType | null
    _min: PlansMinAggregateOutputType | null
    _max: PlansMaxAggregateOutputType | null
  }

  export type PlansAvgAggregateOutputType = {
    plan_id: number | null
    price_monthly: number | null
    price_yearly: number | null
    userlimit: number | null
  }

  export type PlansSumAggregateOutputType = {
    plan_id: number | null
    price_monthly: number | null
    price_yearly: number | null
    userlimit: number | null
  }

  export type PlansMinAggregateOutputType = {
    plan_id: number | null
    plan_name: string | null
    price_monthly: number | null
    price_yearly: number | null
    userlimit: number | null
    description: string | null
  }

  export type PlansMaxAggregateOutputType = {
    plan_id: number | null
    plan_name: string | null
    price_monthly: number | null
    price_yearly: number | null
    userlimit: number | null
    description: string | null
  }

  export type PlansCountAggregateOutputType = {
    plan_id: number
    plan_name: number
    price_monthly: number
    price_yearly: number
    userlimit: number
    description: number
    _all: number
  }


  export type PlansAvgAggregateInputType = {
    plan_id?: true
    price_monthly?: true
    price_yearly?: true
    userlimit?: true
  }

  export type PlansSumAggregateInputType = {
    plan_id?: true
    price_monthly?: true
    price_yearly?: true
    userlimit?: true
  }

  export type PlansMinAggregateInputType = {
    plan_id?: true
    plan_name?: true
    price_monthly?: true
    price_yearly?: true
    userlimit?: true
    description?: true
  }

  export type PlansMaxAggregateInputType = {
    plan_id?: true
    plan_name?: true
    price_monthly?: true
    price_yearly?: true
    userlimit?: true
    description?: true
  }

  export type PlansCountAggregateInputType = {
    plan_id?: true
    plan_name?: true
    price_monthly?: true
    price_yearly?: true
    userlimit?: true
    description?: true
    _all?: true
  }

  export type PlansAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which plans to aggregate.
     */
    where?: plansWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of plans to fetch.
     */
    orderBy?: plansOrderByWithRelationInput | plansOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: plansWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned plans
    **/
    _count?: true | PlansCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlansAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlansSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlansMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlansMaxAggregateInputType
  }

  export type GetPlansAggregateType<T extends PlansAggregateArgs> = {
        [P in keyof T & keyof AggregatePlans]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlans[P]>
      : GetScalarType<T[P], AggregatePlans[P]>
  }




  export type plansGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: plansWhereInput
    orderBy?: plansOrderByWithAggregationInput | plansOrderByWithAggregationInput[]
    by: PlansScalarFieldEnum[] | PlansScalarFieldEnum
    having?: plansScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlansCountAggregateInputType | true
    _avg?: PlansAvgAggregateInputType
    _sum?: PlansSumAggregateInputType
    _min?: PlansMinAggregateInputType
    _max?: PlansMaxAggregateInputType
  }

  export type PlansGroupByOutputType = {
    plan_id: number
    plan_name: string | null
    price_monthly: number | null
    price_yearly: number | null
    userlimit: number | null
    description: string | null
    _count: PlansCountAggregateOutputType | null
    _avg: PlansAvgAggregateOutputType | null
    _sum: PlansSumAggregateOutputType | null
    _min: PlansMinAggregateOutputType | null
    _max: PlansMaxAggregateOutputType | null
  }

  type GetPlansGroupByPayload<T extends plansGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlansGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlansGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlansGroupByOutputType[P]>
            : GetScalarType<T[P], PlansGroupByOutputType[P]>
        }
      >
    >


  export type plansSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    plan_id?: boolean
    plan_name?: boolean
    price_monthly?: boolean
    price_yearly?: boolean
    userlimit?: boolean
    description?: boolean
    plan_features?: boolean | plans$plan_featuresArgs<ExtArgs>
    subscriptions?: boolean | plans$subscriptionsArgs<ExtArgs>
    _count?: boolean | PlansCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["plans"]>

  export type plansSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    plan_id?: boolean
    plan_name?: boolean
    price_monthly?: boolean
    price_yearly?: boolean
    userlimit?: boolean
    description?: boolean
  }, ExtArgs["result"]["plans"]>

  export type plansSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    plan_id?: boolean
    plan_name?: boolean
    price_monthly?: boolean
    price_yearly?: boolean
    userlimit?: boolean
    description?: boolean
  }, ExtArgs["result"]["plans"]>

  export type plansSelectScalar = {
    plan_id?: boolean
    plan_name?: boolean
    price_monthly?: boolean
    price_yearly?: boolean
    userlimit?: boolean
    description?: boolean
  }

  export type plansOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"plan_id" | "plan_name" | "price_monthly" | "price_yearly" | "userlimit" | "description", ExtArgs["result"]["plans"]>
  export type plansInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plan_features?: boolean | plans$plan_featuresArgs<ExtArgs>
    subscriptions?: boolean | plans$subscriptionsArgs<ExtArgs>
    _count?: boolean | PlansCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type plansIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type plansIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $plansPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "plans"
    objects: {
      plan_features: Prisma.$plan_featuresPayload<ExtArgs>[]
      subscriptions: Prisma.$subscriptionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      plan_id: number
      plan_name: string | null
      price_monthly: number | null
      price_yearly: number | null
      userlimit: number | null
      description: string | null
    }, ExtArgs["result"]["plans"]>
    composites: {}
  }

  type plansGetPayload<S extends boolean | null | undefined | plansDefaultArgs> = $Result.GetResult<Prisma.$plansPayload, S>

  type plansCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<plansFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlansCountAggregateInputType | true
    }

  export interface plansDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['plans'], meta: { name: 'plans' } }
    /**
     * Find zero or one Plans that matches the filter.
     * @param {plansFindUniqueArgs} args - Arguments to find a Plans
     * @example
     * // Get one Plans
     * const plans = await prisma.plans.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends plansFindUniqueArgs>(args: SelectSubset<T, plansFindUniqueArgs<ExtArgs>>): Prisma__plansClient<$Result.GetResult<Prisma.$plansPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Plans that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {plansFindUniqueOrThrowArgs} args - Arguments to find a Plans
     * @example
     * // Get one Plans
     * const plans = await prisma.plans.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends plansFindUniqueOrThrowArgs>(args: SelectSubset<T, plansFindUniqueOrThrowArgs<ExtArgs>>): Prisma__plansClient<$Result.GetResult<Prisma.$plansPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Plans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {plansFindFirstArgs} args - Arguments to find a Plans
     * @example
     * // Get one Plans
     * const plans = await prisma.plans.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends plansFindFirstArgs>(args?: SelectSubset<T, plansFindFirstArgs<ExtArgs>>): Prisma__plansClient<$Result.GetResult<Prisma.$plansPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Plans that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {plansFindFirstOrThrowArgs} args - Arguments to find a Plans
     * @example
     * // Get one Plans
     * const plans = await prisma.plans.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends plansFindFirstOrThrowArgs>(args?: SelectSubset<T, plansFindFirstOrThrowArgs<ExtArgs>>): Prisma__plansClient<$Result.GetResult<Prisma.$plansPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Plans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {plansFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Plans
     * const plans = await prisma.plans.findMany()
     * 
     * // Get first 10 Plans
     * const plans = await prisma.plans.findMany({ take: 10 })
     * 
     * // Only select the `plan_id`
     * const plansWithPlan_idOnly = await prisma.plans.findMany({ select: { plan_id: true } })
     * 
     */
    findMany<T extends plansFindManyArgs>(args?: SelectSubset<T, plansFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$plansPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Plans.
     * @param {plansCreateArgs} args - Arguments to create a Plans.
     * @example
     * // Create one Plans
     * const Plans = await prisma.plans.create({
     *   data: {
     *     // ... data to create a Plans
     *   }
     * })
     * 
     */
    create<T extends plansCreateArgs>(args: SelectSubset<T, plansCreateArgs<ExtArgs>>): Prisma__plansClient<$Result.GetResult<Prisma.$plansPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Plans.
     * @param {plansCreateManyArgs} args - Arguments to create many Plans.
     * @example
     * // Create many Plans
     * const plans = await prisma.plans.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends plansCreateManyArgs>(args?: SelectSubset<T, plansCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Plans and returns the data saved in the database.
     * @param {plansCreateManyAndReturnArgs} args - Arguments to create many Plans.
     * @example
     * // Create many Plans
     * const plans = await prisma.plans.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Plans and only return the `plan_id`
     * const plansWithPlan_idOnly = await prisma.plans.createManyAndReturn({
     *   select: { plan_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends plansCreateManyAndReturnArgs>(args?: SelectSubset<T, plansCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$plansPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Plans.
     * @param {plansDeleteArgs} args - Arguments to delete one Plans.
     * @example
     * // Delete one Plans
     * const Plans = await prisma.plans.delete({
     *   where: {
     *     // ... filter to delete one Plans
     *   }
     * })
     * 
     */
    delete<T extends plansDeleteArgs>(args: SelectSubset<T, plansDeleteArgs<ExtArgs>>): Prisma__plansClient<$Result.GetResult<Prisma.$plansPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Plans.
     * @param {plansUpdateArgs} args - Arguments to update one Plans.
     * @example
     * // Update one Plans
     * const plans = await prisma.plans.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends plansUpdateArgs>(args: SelectSubset<T, plansUpdateArgs<ExtArgs>>): Prisma__plansClient<$Result.GetResult<Prisma.$plansPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Plans.
     * @param {plansDeleteManyArgs} args - Arguments to filter Plans to delete.
     * @example
     * // Delete a few Plans
     * const { count } = await prisma.plans.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends plansDeleteManyArgs>(args?: SelectSubset<T, plansDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {plansUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Plans
     * const plans = await prisma.plans.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends plansUpdateManyArgs>(args: SelectSubset<T, plansUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Plans and returns the data updated in the database.
     * @param {plansUpdateManyAndReturnArgs} args - Arguments to update many Plans.
     * @example
     * // Update many Plans
     * const plans = await prisma.plans.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Plans and only return the `plan_id`
     * const plansWithPlan_idOnly = await prisma.plans.updateManyAndReturn({
     *   select: { plan_id: true },
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
    updateManyAndReturn<T extends plansUpdateManyAndReturnArgs>(args: SelectSubset<T, plansUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$plansPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Plans.
     * @param {plansUpsertArgs} args - Arguments to update or create a Plans.
     * @example
     * // Update or create a Plans
     * const plans = await prisma.plans.upsert({
     *   create: {
     *     // ... data to create a Plans
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Plans we want to update
     *   }
     * })
     */
    upsert<T extends plansUpsertArgs>(args: SelectSubset<T, plansUpsertArgs<ExtArgs>>): Prisma__plansClient<$Result.GetResult<Prisma.$plansPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {plansCountArgs} args - Arguments to filter Plans to count.
     * @example
     * // Count the number of Plans
     * const count = await prisma.plans.count({
     *   where: {
     *     // ... the filter for the Plans we want to count
     *   }
     * })
    **/
    count<T extends plansCountArgs>(
      args?: Subset<T, plansCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlansCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlansAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlansAggregateArgs>(args: Subset<T, PlansAggregateArgs>): Prisma.PrismaPromise<GetPlansAggregateType<T>>

    /**
     * Group by Plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {plansGroupByArgs} args - Group by arguments.
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
      T extends plansGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: plansGroupByArgs['orderBy'] }
        : { orderBy?: plansGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, plansGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlansGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the plans model
   */
  readonly fields: plansFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for plans.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__plansClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    plan_features<T extends plans$plan_featuresArgs<ExtArgs> = {}>(args?: Subset<T, plans$plan_featuresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$plan_featuresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    subscriptions<T extends plans$subscriptionsArgs<ExtArgs> = {}>(args?: Subset<T, plans$subscriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$subscriptionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the plans model
   */
  interface plansFieldRefs {
    readonly plan_id: FieldRef<"plans", 'Int'>
    readonly plan_name: FieldRef<"plans", 'String'>
    readonly price_monthly: FieldRef<"plans", 'Int'>
    readonly price_yearly: FieldRef<"plans", 'Int'>
    readonly userlimit: FieldRef<"plans", 'Int'>
    readonly description: FieldRef<"plans", 'String'>
  }
    

  // Custom InputTypes
  /**
   * plans findUnique
   */
  export type plansFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plans
     */
    select?: plansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plans
     */
    omit?: plansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: plansInclude<ExtArgs> | null
    /**
     * Filter, which plans to fetch.
     */
    where: plansWhereUniqueInput
  }

  /**
   * plans findUniqueOrThrow
   */
  export type plansFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plans
     */
    select?: plansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plans
     */
    omit?: plansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: plansInclude<ExtArgs> | null
    /**
     * Filter, which plans to fetch.
     */
    where: plansWhereUniqueInput
  }

  /**
   * plans findFirst
   */
  export type plansFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plans
     */
    select?: plansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plans
     */
    omit?: plansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: plansInclude<ExtArgs> | null
    /**
     * Filter, which plans to fetch.
     */
    where?: plansWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of plans to fetch.
     */
    orderBy?: plansOrderByWithRelationInput | plansOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for plans.
     */
    cursor?: plansWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of plans.
     */
    distinct?: PlansScalarFieldEnum | PlansScalarFieldEnum[]
  }

  /**
   * plans findFirstOrThrow
   */
  export type plansFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plans
     */
    select?: plansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plans
     */
    omit?: plansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: plansInclude<ExtArgs> | null
    /**
     * Filter, which plans to fetch.
     */
    where?: plansWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of plans to fetch.
     */
    orderBy?: plansOrderByWithRelationInput | plansOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for plans.
     */
    cursor?: plansWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of plans.
     */
    distinct?: PlansScalarFieldEnum | PlansScalarFieldEnum[]
  }

  /**
   * plans findMany
   */
  export type plansFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plans
     */
    select?: plansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plans
     */
    omit?: plansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: plansInclude<ExtArgs> | null
    /**
     * Filter, which plans to fetch.
     */
    where?: plansWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of plans to fetch.
     */
    orderBy?: plansOrderByWithRelationInput | plansOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing plans.
     */
    cursor?: plansWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` plans.
     */
    skip?: number
    distinct?: PlansScalarFieldEnum | PlansScalarFieldEnum[]
  }

  /**
   * plans create
   */
  export type plansCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plans
     */
    select?: plansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plans
     */
    omit?: plansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: plansInclude<ExtArgs> | null
    /**
     * The data needed to create a plans.
     */
    data?: XOR<plansCreateInput, plansUncheckedCreateInput>
  }

  /**
   * plans createMany
   */
  export type plansCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many plans.
     */
    data: plansCreateManyInput | plansCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * plans createManyAndReturn
   */
  export type plansCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plans
     */
    select?: plansSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the plans
     */
    omit?: plansOmit<ExtArgs> | null
    /**
     * The data used to create many plans.
     */
    data: plansCreateManyInput | plansCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * plans update
   */
  export type plansUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plans
     */
    select?: plansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plans
     */
    omit?: plansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: plansInclude<ExtArgs> | null
    /**
     * The data needed to update a plans.
     */
    data: XOR<plansUpdateInput, plansUncheckedUpdateInput>
    /**
     * Choose, which plans to update.
     */
    where: plansWhereUniqueInput
  }

  /**
   * plans updateMany
   */
  export type plansUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update plans.
     */
    data: XOR<plansUpdateManyMutationInput, plansUncheckedUpdateManyInput>
    /**
     * Filter which plans to update
     */
    where?: plansWhereInput
    /**
     * Limit how many plans to update.
     */
    limit?: number
  }

  /**
   * plans updateManyAndReturn
   */
  export type plansUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plans
     */
    select?: plansSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the plans
     */
    omit?: plansOmit<ExtArgs> | null
    /**
     * The data used to update plans.
     */
    data: XOR<plansUpdateManyMutationInput, plansUncheckedUpdateManyInput>
    /**
     * Filter which plans to update
     */
    where?: plansWhereInput
    /**
     * Limit how many plans to update.
     */
    limit?: number
  }

  /**
   * plans upsert
   */
  export type plansUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plans
     */
    select?: plansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plans
     */
    omit?: plansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: plansInclude<ExtArgs> | null
    /**
     * The filter to search for the plans to update in case it exists.
     */
    where: plansWhereUniqueInput
    /**
     * In case the plans found by the `where` argument doesn't exist, create a new plans with this data.
     */
    create: XOR<plansCreateInput, plansUncheckedCreateInput>
    /**
     * In case the plans was found with the provided `where` argument, update it with this data.
     */
    update: XOR<plansUpdateInput, plansUncheckedUpdateInput>
  }

  /**
   * plans delete
   */
  export type plansDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plans
     */
    select?: plansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plans
     */
    omit?: plansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: plansInclude<ExtArgs> | null
    /**
     * Filter which plans to delete.
     */
    where: plansWhereUniqueInput
  }

  /**
   * plans deleteMany
   */
  export type plansDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which plans to delete
     */
    where?: plansWhereInput
    /**
     * Limit how many plans to delete.
     */
    limit?: number
  }

  /**
   * plans.plan_features
   */
  export type plans$plan_featuresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plan_features
     */
    select?: plan_featuresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plan_features
     */
    omit?: plan_featuresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: plan_featuresInclude<ExtArgs> | null
    where?: plan_featuresWhereInput
    orderBy?: plan_featuresOrderByWithRelationInput | plan_featuresOrderByWithRelationInput[]
    cursor?: plan_featuresWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Plan_featuresScalarFieldEnum | Plan_featuresScalarFieldEnum[]
  }

  /**
   * plans.subscriptions
   */
  export type plans$subscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscriptions
     */
    select?: subscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subscriptions
     */
    omit?: subscriptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subscriptionsInclude<ExtArgs> | null
    where?: subscriptionsWhereInput
    orderBy?: subscriptionsOrderByWithRelationInput | subscriptionsOrderByWithRelationInput[]
    cursor?: subscriptionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubscriptionsScalarFieldEnum | SubscriptionsScalarFieldEnum[]
  }

  /**
   * plans without action
   */
  export type plansDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plans
     */
    select?: plansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plans
     */
    omit?: plansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: plansInclude<ExtArgs> | null
  }


  /**
   * Model subscriptions
   */

  export type AggregateSubscriptions = {
    _count: SubscriptionsCountAggregateOutputType | null
    _avg: SubscriptionsAvgAggregateOutputType | null
    _sum: SubscriptionsSumAggregateOutputType | null
    _min: SubscriptionsMinAggregateOutputType | null
    _max: SubscriptionsMaxAggregateOutputType | null
  }

  export type SubscriptionsAvgAggregateOutputType = {
    subscription_id: number | null
    organisation_id: number | null
    plan_id: number | null
  }

  export type SubscriptionsSumAggregateOutputType = {
    subscription_id: number | null
    organisation_id: number | null
    plan_id: number | null
  }

  export type SubscriptionsMinAggregateOutputType = {
    subscription_id: number | null
    organisation_id: number | null
    plan_id: number | null
    status: $Enums.subscriptionstatus | null
    start_date: Date | null
    end_date: Date | null
  }

  export type SubscriptionsMaxAggregateOutputType = {
    subscription_id: number | null
    organisation_id: number | null
    plan_id: number | null
    status: $Enums.subscriptionstatus | null
    start_date: Date | null
    end_date: Date | null
  }

  export type SubscriptionsCountAggregateOutputType = {
    subscription_id: number
    organisation_id: number
    plan_id: number
    status: number
    start_date: number
    end_date: number
    _all: number
  }


  export type SubscriptionsAvgAggregateInputType = {
    subscription_id?: true
    organisation_id?: true
    plan_id?: true
  }

  export type SubscriptionsSumAggregateInputType = {
    subscription_id?: true
    organisation_id?: true
    plan_id?: true
  }

  export type SubscriptionsMinAggregateInputType = {
    subscription_id?: true
    organisation_id?: true
    plan_id?: true
    status?: true
    start_date?: true
    end_date?: true
  }

  export type SubscriptionsMaxAggregateInputType = {
    subscription_id?: true
    organisation_id?: true
    plan_id?: true
    status?: true
    start_date?: true
    end_date?: true
  }

  export type SubscriptionsCountAggregateInputType = {
    subscription_id?: true
    organisation_id?: true
    plan_id?: true
    status?: true
    start_date?: true
    end_date?: true
    _all?: true
  }

  export type SubscriptionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which subscriptions to aggregate.
     */
    where?: subscriptionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subscriptions to fetch.
     */
    orderBy?: subscriptionsOrderByWithRelationInput | subscriptionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: subscriptionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned subscriptions
    **/
    _count?: true | SubscriptionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubscriptionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubscriptionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubscriptionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubscriptionsMaxAggregateInputType
  }

  export type GetSubscriptionsAggregateType<T extends SubscriptionsAggregateArgs> = {
        [P in keyof T & keyof AggregateSubscriptions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscriptions[P]>
      : GetScalarType<T[P], AggregateSubscriptions[P]>
  }




  export type subscriptionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: subscriptionsWhereInput
    orderBy?: subscriptionsOrderByWithAggregationInput | subscriptionsOrderByWithAggregationInput[]
    by: SubscriptionsScalarFieldEnum[] | SubscriptionsScalarFieldEnum
    having?: subscriptionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubscriptionsCountAggregateInputType | true
    _avg?: SubscriptionsAvgAggregateInputType
    _sum?: SubscriptionsSumAggregateInputType
    _min?: SubscriptionsMinAggregateInputType
    _max?: SubscriptionsMaxAggregateInputType
  }

  export type SubscriptionsGroupByOutputType = {
    subscription_id: number
    organisation_id: number | null
    plan_id: number | null
    status: $Enums.subscriptionstatus | null
    start_date: Date | null
    end_date: Date | null
    _count: SubscriptionsCountAggregateOutputType | null
    _avg: SubscriptionsAvgAggregateOutputType | null
    _sum: SubscriptionsSumAggregateOutputType | null
    _min: SubscriptionsMinAggregateOutputType | null
    _max: SubscriptionsMaxAggregateOutputType | null
  }

  type GetSubscriptionsGroupByPayload<T extends subscriptionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubscriptionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubscriptionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubscriptionsGroupByOutputType[P]>
            : GetScalarType<T[P], SubscriptionsGroupByOutputType[P]>
        }
      >
    >


  export type subscriptionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    subscription_id?: boolean
    organisation_id?: boolean
    plan_id?: boolean
    status?: boolean
    start_date?: boolean
    end_date?: boolean
    organisations?: boolean | subscriptions$organisationsArgs<ExtArgs>
    plans?: boolean | subscriptions$plansArgs<ExtArgs>
  }, ExtArgs["result"]["subscriptions"]>

  export type subscriptionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    subscription_id?: boolean
    organisation_id?: boolean
    plan_id?: boolean
    status?: boolean
    start_date?: boolean
    end_date?: boolean
    organisations?: boolean | subscriptions$organisationsArgs<ExtArgs>
    plans?: boolean | subscriptions$plansArgs<ExtArgs>
  }, ExtArgs["result"]["subscriptions"]>

  export type subscriptionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    subscription_id?: boolean
    organisation_id?: boolean
    plan_id?: boolean
    status?: boolean
    start_date?: boolean
    end_date?: boolean
    organisations?: boolean | subscriptions$organisationsArgs<ExtArgs>
    plans?: boolean | subscriptions$plansArgs<ExtArgs>
  }, ExtArgs["result"]["subscriptions"]>

  export type subscriptionsSelectScalar = {
    subscription_id?: boolean
    organisation_id?: boolean
    plan_id?: boolean
    status?: boolean
    start_date?: boolean
    end_date?: boolean
  }

  export type subscriptionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"subscription_id" | "organisation_id" | "plan_id" | "status" | "start_date" | "end_date", ExtArgs["result"]["subscriptions"]>
  export type subscriptionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organisations?: boolean | subscriptions$organisationsArgs<ExtArgs>
    plans?: boolean | subscriptions$plansArgs<ExtArgs>
  }
  export type subscriptionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organisations?: boolean | subscriptions$organisationsArgs<ExtArgs>
    plans?: boolean | subscriptions$plansArgs<ExtArgs>
  }
  export type subscriptionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organisations?: boolean | subscriptions$organisationsArgs<ExtArgs>
    plans?: boolean | subscriptions$plansArgs<ExtArgs>
  }

  export type $subscriptionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "subscriptions"
    objects: {
      organisations: Prisma.$organisationsPayload<ExtArgs> | null
      plans: Prisma.$plansPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      subscription_id: number
      organisation_id: number | null
      plan_id: number | null
      status: $Enums.subscriptionstatus | null
      start_date: Date | null
      end_date: Date | null
    }, ExtArgs["result"]["subscriptions"]>
    composites: {}
  }

  type subscriptionsGetPayload<S extends boolean | null | undefined | subscriptionsDefaultArgs> = $Result.GetResult<Prisma.$subscriptionsPayload, S>

  type subscriptionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<subscriptionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubscriptionsCountAggregateInputType | true
    }

  export interface subscriptionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['subscriptions'], meta: { name: 'subscriptions' } }
    /**
     * Find zero or one Subscriptions that matches the filter.
     * @param {subscriptionsFindUniqueArgs} args - Arguments to find a Subscriptions
     * @example
     * // Get one Subscriptions
     * const subscriptions = await prisma.subscriptions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends subscriptionsFindUniqueArgs>(args: SelectSubset<T, subscriptionsFindUniqueArgs<ExtArgs>>): Prisma__subscriptionsClient<$Result.GetResult<Prisma.$subscriptionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subscriptions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {subscriptionsFindUniqueOrThrowArgs} args - Arguments to find a Subscriptions
     * @example
     * // Get one Subscriptions
     * const subscriptions = await prisma.subscriptions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends subscriptionsFindUniqueOrThrowArgs>(args: SelectSubset<T, subscriptionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__subscriptionsClient<$Result.GetResult<Prisma.$subscriptionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subscriptionsFindFirstArgs} args - Arguments to find a Subscriptions
     * @example
     * // Get one Subscriptions
     * const subscriptions = await prisma.subscriptions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends subscriptionsFindFirstArgs>(args?: SelectSubset<T, subscriptionsFindFirstArgs<ExtArgs>>): Prisma__subscriptionsClient<$Result.GetResult<Prisma.$subscriptionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscriptions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subscriptionsFindFirstOrThrowArgs} args - Arguments to find a Subscriptions
     * @example
     * // Get one Subscriptions
     * const subscriptions = await prisma.subscriptions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends subscriptionsFindFirstOrThrowArgs>(args?: SelectSubset<T, subscriptionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__subscriptionsClient<$Result.GetResult<Prisma.$subscriptionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subscriptionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subscriptions
     * const subscriptions = await prisma.subscriptions.findMany()
     * 
     * // Get first 10 Subscriptions
     * const subscriptions = await prisma.subscriptions.findMany({ take: 10 })
     * 
     * // Only select the `subscription_id`
     * const subscriptionsWithSubscription_idOnly = await prisma.subscriptions.findMany({ select: { subscription_id: true } })
     * 
     */
    findMany<T extends subscriptionsFindManyArgs>(args?: SelectSubset<T, subscriptionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$subscriptionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subscriptions.
     * @param {subscriptionsCreateArgs} args - Arguments to create a Subscriptions.
     * @example
     * // Create one Subscriptions
     * const Subscriptions = await prisma.subscriptions.create({
     *   data: {
     *     // ... data to create a Subscriptions
     *   }
     * })
     * 
     */
    create<T extends subscriptionsCreateArgs>(args: SelectSubset<T, subscriptionsCreateArgs<ExtArgs>>): Prisma__subscriptionsClient<$Result.GetResult<Prisma.$subscriptionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subscriptions.
     * @param {subscriptionsCreateManyArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscriptions = await prisma.subscriptions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends subscriptionsCreateManyArgs>(args?: SelectSubset<T, subscriptionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subscriptions and returns the data saved in the database.
     * @param {subscriptionsCreateManyAndReturnArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscriptions = await prisma.subscriptions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subscriptions and only return the `subscription_id`
     * const subscriptionsWithSubscription_idOnly = await prisma.subscriptions.createManyAndReturn({
     *   select: { subscription_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends subscriptionsCreateManyAndReturnArgs>(args?: SelectSubset<T, subscriptionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$subscriptionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Subscriptions.
     * @param {subscriptionsDeleteArgs} args - Arguments to delete one Subscriptions.
     * @example
     * // Delete one Subscriptions
     * const Subscriptions = await prisma.subscriptions.delete({
     *   where: {
     *     // ... filter to delete one Subscriptions
     *   }
     * })
     * 
     */
    delete<T extends subscriptionsDeleteArgs>(args: SelectSubset<T, subscriptionsDeleteArgs<ExtArgs>>): Prisma__subscriptionsClient<$Result.GetResult<Prisma.$subscriptionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subscriptions.
     * @param {subscriptionsUpdateArgs} args - Arguments to update one Subscriptions.
     * @example
     * // Update one Subscriptions
     * const subscriptions = await prisma.subscriptions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends subscriptionsUpdateArgs>(args: SelectSubset<T, subscriptionsUpdateArgs<ExtArgs>>): Prisma__subscriptionsClient<$Result.GetResult<Prisma.$subscriptionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subscriptions.
     * @param {subscriptionsDeleteManyArgs} args - Arguments to filter Subscriptions to delete.
     * @example
     * // Delete a few Subscriptions
     * const { count } = await prisma.subscriptions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends subscriptionsDeleteManyArgs>(args?: SelectSubset<T, subscriptionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subscriptionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subscriptions
     * const subscriptions = await prisma.subscriptions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends subscriptionsUpdateManyArgs>(args: SelectSubset<T, subscriptionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions and returns the data updated in the database.
     * @param {subscriptionsUpdateManyAndReturnArgs} args - Arguments to update many Subscriptions.
     * @example
     * // Update many Subscriptions
     * const subscriptions = await prisma.subscriptions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Subscriptions and only return the `subscription_id`
     * const subscriptionsWithSubscription_idOnly = await prisma.subscriptions.updateManyAndReturn({
     *   select: { subscription_id: true },
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
    updateManyAndReturn<T extends subscriptionsUpdateManyAndReturnArgs>(args: SelectSubset<T, subscriptionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$subscriptionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Subscriptions.
     * @param {subscriptionsUpsertArgs} args - Arguments to update or create a Subscriptions.
     * @example
     * // Update or create a Subscriptions
     * const subscriptions = await prisma.subscriptions.upsert({
     *   create: {
     *     // ... data to create a Subscriptions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subscriptions we want to update
     *   }
     * })
     */
    upsert<T extends subscriptionsUpsertArgs>(args: SelectSubset<T, subscriptionsUpsertArgs<ExtArgs>>): Prisma__subscriptionsClient<$Result.GetResult<Prisma.$subscriptionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subscriptionsCountArgs} args - Arguments to filter Subscriptions to count.
     * @example
     * // Count the number of Subscriptions
     * const count = await prisma.subscriptions.count({
     *   where: {
     *     // ... the filter for the Subscriptions we want to count
     *   }
     * })
    **/
    count<T extends subscriptionsCountArgs>(
      args?: Subset<T, subscriptionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscriptionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubscriptionsAggregateArgs>(args: Subset<T, SubscriptionsAggregateArgs>): Prisma.PrismaPromise<GetSubscriptionsAggregateType<T>>

    /**
     * Group by Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subscriptionsGroupByArgs} args - Group by arguments.
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
      T extends subscriptionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: subscriptionsGroupByArgs['orderBy'] }
        : { orderBy?: subscriptionsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, subscriptionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscriptionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the subscriptions model
   */
  readonly fields: subscriptionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for subscriptions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__subscriptionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organisations<T extends subscriptions$organisationsArgs<ExtArgs> = {}>(args?: Subset<T, subscriptions$organisationsArgs<ExtArgs>>): Prisma__organisationsClient<$Result.GetResult<Prisma.$organisationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    plans<T extends subscriptions$plansArgs<ExtArgs> = {}>(args?: Subset<T, subscriptions$plansArgs<ExtArgs>>): Prisma__plansClient<$Result.GetResult<Prisma.$plansPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the subscriptions model
   */
  interface subscriptionsFieldRefs {
    readonly subscription_id: FieldRef<"subscriptions", 'Int'>
    readonly organisation_id: FieldRef<"subscriptions", 'Int'>
    readonly plan_id: FieldRef<"subscriptions", 'Int'>
    readonly status: FieldRef<"subscriptions", 'subscriptionstatus'>
    readonly start_date: FieldRef<"subscriptions", 'DateTime'>
    readonly end_date: FieldRef<"subscriptions", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * subscriptions findUnique
   */
  export type subscriptionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscriptions
     */
    select?: subscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subscriptions
     */
    omit?: subscriptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subscriptionsInclude<ExtArgs> | null
    /**
     * Filter, which subscriptions to fetch.
     */
    where: subscriptionsWhereUniqueInput
  }

  /**
   * subscriptions findUniqueOrThrow
   */
  export type subscriptionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscriptions
     */
    select?: subscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subscriptions
     */
    omit?: subscriptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subscriptionsInclude<ExtArgs> | null
    /**
     * Filter, which subscriptions to fetch.
     */
    where: subscriptionsWhereUniqueInput
  }

  /**
   * subscriptions findFirst
   */
  export type subscriptionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscriptions
     */
    select?: subscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subscriptions
     */
    omit?: subscriptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subscriptionsInclude<ExtArgs> | null
    /**
     * Filter, which subscriptions to fetch.
     */
    where?: subscriptionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subscriptions to fetch.
     */
    orderBy?: subscriptionsOrderByWithRelationInput | subscriptionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for subscriptions.
     */
    cursor?: subscriptionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of subscriptions.
     */
    distinct?: SubscriptionsScalarFieldEnum | SubscriptionsScalarFieldEnum[]
  }

  /**
   * subscriptions findFirstOrThrow
   */
  export type subscriptionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscriptions
     */
    select?: subscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subscriptions
     */
    omit?: subscriptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subscriptionsInclude<ExtArgs> | null
    /**
     * Filter, which subscriptions to fetch.
     */
    where?: subscriptionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subscriptions to fetch.
     */
    orderBy?: subscriptionsOrderByWithRelationInput | subscriptionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for subscriptions.
     */
    cursor?: subscriptionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of subscriptions.
     */
    distinct?: SubscriptionsScalarFieldEnum | SubscriptionsScalarFieldEnum[]
  }

  /**
   * subscriptions findMany
   */
  export type subscriptionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscriptions
     */
    select?: subscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subscriptions
     */
    omit?: subscriptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subscriptionsInclude<ExtArgs> | null
    /**
     * Filter, which subscriptions to fetch.
     */
    where?: subscriptionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subscriptions to fetch.
     */
    orderBy?: subscriptionsOrderByWithRelationInput | subscriptionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing subscriptions.
     */
    cursor?: subscriptionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subscriptions.
     */
    skip?: number
    distinct?: SubscriptionsScalarFieldEnum | SubscriptionsScalarFieldEnum[]
  }

  /**
   * subscriptions create
   */
  export type subscriptionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscriptions
     */
    select?: subscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subscriptions
     */
    omit?: subscriptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subscriptionsInclude<ExtArgs> | null
    /**
     * The data needed to create a subscriptions.
     */
    data?: XOR<subscriptionsCreateInput, subscriptionsUncheckedCreateInput>
  }

  /**
   * subscriptions createMany
   */
  export type subscriptionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many subscriptions.
     */
    data: subscriptionsCreateManyInput | subscriptionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * subscriptions createManyAndReturn
   */
  export type subscriptionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscriptions
     */
    select?: subscriptionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the subscriptions
     */
    omit?: subscriptionsOmit<ExtArgs> | null
    /**
     * The data used to create many subscriptions.
     */
    data: subscriptionsCreateManyInput | subscriptionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subscriptionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * subscriptions update
   */
  export type subscriptionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscriptions
     */
    select?: subscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subscriptions
     */
    omit?: subscriptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subscriptionsInclude<ExtArgs> | null
    /**
     * The data needed to update a subscriptions.
     */
    data: XOR<subscriptionsUpdateInput, subscriptionsUncheckedUpdateInput>
    /**
     * Choose, which subscriptions to update.
     */
    where: subscriptionsWhereUniqueInput
  }

  /**
   * subscriptions updateMany
   */
  export type subscriptionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update subscriptions.
     */
    data: XOR<subscriptionsUpdateManyMutationInput, subscriptionsUncheckedUpdateManyInput>
    /**
     * Filter which subscriptions to update
     */
    where?: subscriptionsWhereInput
    /**
     * Limit how many subscriptions to update.
     */
    limit?: number
  }

  /**
   * subscriptions updateManyAndReturn
   */
  export type subscriptionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscriptions
     */
    select?: subscriptionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the subscriptions
     */
    omit?: subscriptionsOmit<ExtArgs> | null
    /**
     * The data used to update subscriptions.
     */
    data: XOR<subscriptionsUpdateManyMutationInput, subscriptionsUncheckedUpdateManyInput>
    /**
     * Filter which subscriptions to update
     */
    where?: subscriptionsWhereInput
    /**
     * Limit how many subscriptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subscriptionsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * subscriptions upsert
   */
  export type subscriptionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscriptions
     */
    select?: subscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subscriptions
     */
    omit?: subscriptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subscriptionsInclude<ExtArgs> | null
    /**
     * The filter to search for the subscriptions to update in case it exists.
     */
    where: subscriptionsWhereUniqueInput
    /**
     * In case the subscriptions found by the `where` argument doesn't exist, create a new subscriptions with this data.
     */
    create: XOR<subscriptionsCreateInput, subscriptionsUncheckedCreateInput>
    /**
     * In case the subscriptions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<subscriptionsUpdateInput, subscriptionsUncheckedUpdateInput>
  }

  /**
   * subscriptions delete
   */
  export type subscriptionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscriptions
     */
    select?: subscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subscriptions
     */
    omit?: subscriptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subscriptionsInclude<ExtArgs> | null
    /**
     * Filter which subscriptions to delete.
     */
    where: subscriptionsWhereUniqueInput
  }

  /**
   * subscriptions deleteMany
   */
  export type subscriptionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which subscriptions to delete
     */
    where?: subscriptionsWhereInput
    /**
     * Limit how many subscriptions to delete.
     */
    limit?: number
  }

  /**
   * subscriptions.organisations
   */
  export type subscriptions$organisationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organisations
     */
    select?: organisationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organisations
     */
    omit?: organisationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organisationsInclude<ExtArgs> | null
    where?: organisationsWhereInput
  }

  /**
   * subscriptions.plans
   */
  export type subscriptions$plansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plans
     */
    select?: plansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plans
     */
    omit?: plansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: plansInclude<ExtArgs> | null
    where?: plansWhereInput
  }

  /**
   * subscriptions without action
   */
  export type subscriptionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscriptions
     */
    select?: subscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subscriptions
     */
    omit?: subscriptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subscriptionsInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    user_id: number | null
    organisation_id: number | null
  }

  export type UsersSumAggregateOutputType = {
    user_id: number | null
    organisation_id: number | null
  }

  export type UsersMinAggregateOutputType = {
    user_id: number | null
    name: string | null
    organisation_id: number | null
    user_type: $Enums.usertype | null
    is_system_generated: boolean | null
    is_active: boolean | null
  }

  export type UsersMaxAggregateOutputType = {
    user_id: number | null
    name: string | null
    organisation_id: number | null
    user_type: $Enums.usertype | null
    is_system_generated: boolean | null
    is_active: boolean | null
  }

  export type UsersCountAggregateOutputType = {
    user_id: number
    name: number
    organisation_id: number
    user_type: number
    is_system_generated: number
    is_active: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    user_id?: true
    organisation_id?: true
  }

  export type UsersSumAggregateInputType = {
    user_id?: true
    organisation_id?: true
  }

  export type UsersMinAggregateInputType = {
    user_id?: true
    name?: true
    organisation_id?: true
    user_type?: true
    is_system_generated?: true
    is_active?: true
  }

  export type UsersMaxAggregateInputType = {
    user_id?: true
    name?: true
    organisation_id?: true
    user_type?: true
    is_system_generated?: true
    is_active?: true
  }

  export type UsersCountAggregateInputType = {
    user_id?: true
    name?: true
    organisation_id?: true
    user_type?: true
    is_system_generated?: true
    is_active?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    user_id: number
    name: string | null
    organisation_id: number | null
    user_type: $Enums.usertype | null
    is_system_generated: boolean | null
    is_active: boolean | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    name?: boolean
    organisation_id?: boolean
    user_type?: boolean
    is_system_generated?: boolean
    is_active?: boolean
    organisations?: boolean | users$organisationsArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    name?: boolean
    organisation_id?: boolean
    user_type?: boolean
    is_system_generated?: boolean
    is_active?: boolean
    organisations?: boolean | users$organisationsArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    name?: boolean
    organisation_id?: boolean
    user_type?: boolean
    is_system_generated?: boolean
    is_active?: boolean
    organisations?: boolean | users$organisationsArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    user_id?: boolean
    name?: boolean
    organisation_id?: boolean
    user_type?: boolean
    is_system_generated?: boolean
    is_active?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "name" | "organisation_id" | "user_type" | "is_system_generated" | "is_active", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organisations?: boolean | users$organisationsArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organisations?: boolean | users$organisationsArgs<ExtArgs>
  }
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organisations?: boolean | users$organisationsArgs<ExtArgs>
  }

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      organisations: Prisma.$organisationsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: number
      name: string | null
      organisation_id: number | null
      user_type: $Enums.usertype | null
      is_system_generated: boolean | null
      is_active: boolean | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const usersWithUser_idOnly = await prisma.users.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `user_id`
     * const usersWithUser_idOnly = await prisma.users.createManyAndReturn({
     *   select: { user_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `user_id`
     * const usersWithUser_idOnly = await prisma.users.updateManyAndReturn({
     *   select: { user_id: true },
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
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
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
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organisations<T extends users$organisationsArgs<ExtArgs> = {}>(args?: Subset<T, users$organisationsArgs<ExtArgs>>): Prisma__organisationsClient<$Result.GetResult<Prisma.$organisationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly user_id: FieldRef<"users", 'Int'>
    readonly name: FieldRef<"users", 'String'>
    readonly organisation_id: FieldRef<"users", 'Int'>
    readonly user_type: FieldRef<"users", 'usertype'>
    readonly is_system_generated: FieldRef<"users", 'Boolean'>
    readonly is_active: FieldRef<"users", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data?: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.organisations
   */
  export type users$organisationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organisations
     */
    select?: organisationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organisations
     */
    omit?: organisationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organisationsInclude<ExtArgs> | null
    where?: organisationsWhereInput
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
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


  export const Feature_categoriesScalarFieldEnum: {
    feature_category_id: 'feature_category_id',
    feature_category_name: 'feature_category_name'
  };

  export type Feature_categoriesScalarFieldEnum = (typeof Feature_categoriesScalarFieldEnum)[keyof typeof Feature_categoriesScalarFieldEnum]


  export const FeaturesScalarFieldEnum: {
    feature_id: 'feature_id',
    category_id: 'category_id',
    feature_value: 'feature_value',
    feature_key: 'feature_key',
    feature_input_type: 'feature_input_type'
  };

  export type FeaturesScalarFieldEnum = (typeof FeaturesScalarFieldEnum)[keyof typeof FeaturesScalarFieldEnum]


  export const OrganisationsScalarFieldEnum: {
    organisation_id: 'organisation_id',
    organisation_name: 'organisation_name'
  };

  export type OrganisationsScalarFieldEnum = (typeof OrganisationsScalarFieldEnum)[keyof typeof OrganisationsScalarFieldEnum]


  export const Plan_featuresScalarFieldEnum: {
    plan_feature_id: 'plan_feature_id',
    plan_id: 'plan_id',
    feature_id: 'feature_id',
    boolean_value: 'boolean_value',
    text_value: 'text_value',
    numeric_value: 'numeric_value'
  };

  export type Plan_featuresScalarFieldEnum = (typeof Plan_featuresScalarFieldEnum)[keyof typeof Plan_featuresScalarFieldEnum]


  export const PlansScalarFieldEnum: {
    plan_id: 'plan_id',
    plan_name: 'plan_name',
    price_monthly: 'price_monthly',
    price_yearly: 'price_yearly',
    userlimit: 'userlimit',
    description: 'description'
  };

  export type PlansScalarFieldEnum = (typeof PlansScalarFieldEnum)[keyof typeof PlansScalarFieldEnum]


  export const SubscriptionsScalarFieldEnum: {
    subscription_id: 'subscription_id',
    organisation_id: 'organisation_id',
    plan_id: 'plan_id',
    status: 'status',
    start_date: 'start_date',
    end_date: 'end_date'
  };

  export type SubscriptionsScalarFieldEnum = (typeof SubscriptionsScalarFieldEnum)[keyof typeof SubscriptionsScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    user_id: 'user_id',
    name: 'name',
    organisation_id: 'organisation_id',
    user_type: 'user_type',
    is_system_generated: 'is_system_generated',
    is_active: 'is_active'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


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
   * Reference to a field of type 'featureinputtype'
   */
  export type EnumfeatureinputtypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'featureinputtype'>
    


  /**
   * Reference to a field of type 'featureinputtype[]'
   */
  export type ListEnumfeatureinputtypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'featureinputtype[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'subscriptionstatus'
   */
  export type EnumsubscriptionstatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'subscriptionstatus'>
    


  /**
   * Reference to a field of type 'subscriptionstatus[]'
   */
  export type ListEnumsubscriptionstatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'subscriptionstatus[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'usertype'
   */
  export type EnumusertypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'usertype'>
    


  /**
   * Reference to a field of type 'usertype[]'
   */
  export type ListEnumusertypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'usertype[]'>
    


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


  export type feature_categoriesWhereInput = {
    AND?: feature_categoriesWhereInput | feature_categoriesWhereInput[]
    OR?: feature_categoriesWhereInput[]
    NOT?: feature_categoriesWhereInput | feature_categoriesWhereInput[]
    feature_category_id?: IntFilter<"feature_categories"> | number
    feature_category_name?: StringFilter<"feature_categories"> | string
    features?: FeaturesListRelationFilter
  }

  export type feature_categoriesOrderByWithRelationInput = {
    feature_category_id?: SortOrder
    feature_category_name?: SortOrder
    features?: featuresOrderByRelationAggregateInput
  }

  export type feature_categoriesWhereUniqueInput = Prisma.AtLeast<{
    feature_category_id?: number
    AND?: feature_categoriesWhereInput | feature_categoriesWhereInput[]
    OR?: feature_categoriesWhereInput[]
    NOT?: feature_categoriesWhereInput | feature_categoriesWhereInput[]
    feature_category_name?: StringFilter<"feature_categories"> | string
    features?: FeaturesListRelationFilter
  }, "feature_category_id">

  export type feature_categoriesOrderByWithAggregationInput = {
    feature_category_id?: SortOrder
    feature_category_name?: SortOrder
    _count?: feature_categoriesCountOrderByAggregateInput
    _avg?: feature_categoriesAvgOrderByAggregateInput
    _max?: feature_categoriesMaxOrderByAggregateInput
    _min?: feature_categoriesMinOrderByAggregateInput
    _sum?: feature_categoriesSumOrderByAggregateInput
  }

  export type feature_categoriesScalarWhereWithAggregatesInput = {
    AND?: feature_categoriesScalarWhereWithAggregatesInput | feature_categoriesScalarWhereWithAggregatesInput[]
    OR?: feature_categoriesScalarWhereWithAggregatesInput[]
    NOT?: feature_categoriesScalarWhereWithAggregatesInput | feature_categoriesScalarWhereWithAggregatesInput[]
    feature_category_id?: IntWithAggregatesFilter<"feature_categories"> | number
    feature_category_name?: StringWithAggregatesFilter<"feature_categories"> | string
  }

  export type featuresWhereInput = {
    AND?: featuresWhereInput | featuresWhereInput[]
    OR?: featuresWhereInput[]
    NOT?: featuresWhereInput | featuresWhereInput[]
    feature_id?: IntFilter<"features"> | number
    category_id?: IntFilter<"features"> | number
    feature_value?: StringNullableFilter<"features"> | string | null
    feature_key?: StringNullableFilter<"features"> | string | null
    feature_input_type?: EnumfeatureinputtypeNullableFilter<"features"> | $Enums.featureinputtype | null
    feature_categories?: XOR<Feature_categoriesScalarRelationFilter, feature_categoriesWhereInput>
    plan_features?: Plan_featuresListRelationFilter
  }

  export type featuresOrderByWithRelationInput = {
    feature_id?: SortOrder
    category_id?: SortOrder
    feature_value?: SortOrderInput | SortOrder
    feature_key?: SortOrderInput | SortOrder
    feature_input_type?: SortOrderInput | SortOrder
    feature_categories?: feature_categoriesOrderByWithRelationInput
    plan_features?: plan_featuresOrderByRelationAggregateInput
  }

  export type featuresWhereUniqueInput = Prisma.AtLeast<{
    feature_id?: number
    AND?: featuresWhereInput | featuresWhereInput[]
    OR?: featuresWhereInput[]
    NOT?: featuresWhereInput | featuresWhereInput[]
    category_id?: IntFilter<"features"> | number
    feature_value?: StringNullableFilter<"features"> | string | null
    feature_key?: StringNullableFilter<"features"> | string | null
    feature_input_type?: EnumfeatureinputtypeNullableFilter<"features"> | $Enums.featureinputtype | null
    feature_categories?: XOR<Feature_categoriesScalarRelationFilter, feature_categoriesWhereInput>
    plan_features?: Plan_featuresListRelationFilter
  }, "feature_id">

  export type featuresOrderByWithAggregationInput = {
    feature_id?: SortOrder
    category_id?: SortOrder
    feature_value?: SortOrderInput | SortOrder
    feature_key?: SortOrderInput | SortOrder
    feature_input_type?: SortOrderInput | SortOrder
    _count?: featuresCountOrderByAggregateInput
    _avg?: featuresAvgOrderByAggregateInput
    _max?: featuresMaxOrderByAggregateInput
    _min?: featuresMinOrderByAggregateInput
    _sum?: featuresSumOrderByAggregateInput
  }

  export type featuresScalarWhereWithAggregatesInput = {
    AND?: featuresScalarWhereWithAggregatesInput | featuresScalarWhereWithAggregatesInput[]
    OR?: featuresScalarWhereWithAggregatesInput[]
    NOT?: featuresScalarWhereWithAggregatesInput | featuresScalarWhereWithAggregatesInput[]
    feature_id?: IntWithAggregatesFilter<"features"> | number
    category_id?: IntWithAggregatesFilter<"features"> | number
    feature_value?: StringNullableWithAggregatesFilter<"features"> | string | null
    feature_key?: StringNullableWithAggregatesFilter<"features"> | string | null
    feature_input_type?: EnumfeatureinputtypeNullableWithAggregatesFilter<"features"> | $Enums.featureinputtype | null
  }

  export type organisationsWhereInput = {
    AND?: organisationsWhereInput | organisationsWhereInput[]
    OR?: organisationsWhereInput[]
    NOT?: organisationsWhereInput | organisationsWhereInput[]
    organisation_id?: IntFilter<"organisations"> | number
    organisation_name?: StringFilter<"organisations"> | string
    subscriptions?: SubscriptionsListRelationFilter
    users?: UsersListRelationFilter
  }

  export type organisationsOrderByWithRelationInput = {
    organisation_id?: SortOrder
    organisation_name?: SortOrder
    subscriptions?: subscriptionsOrderByRelationAggregateInput
    users?: usersOrderByRelationAggregateInput
  }

  export type organisationsWhereUniqueInput = Prisma.AtLeast<{
    organisation_id?: number
    AND?: organisationsWhereInput | organisationsWhereInput[]
    OR?: organisationsWhereInput[]
    NOT?: organisationsWhereInput | organisationsWhereInput[]
    organisation_name?: StringFilter<"organisations"> | string
    subscriptions?: SubscriptionsListRelationFilter
    users?: UsersListRelationFilter
  }, "organisation_id">

  export type organisationsOrderByWithAggregationInput = {
    organisation_id?: SortOrder
    organisation_name?: SortOrder
    _count?: organisationsCountOrderByAggregateInput
    _avg?: organisationsAvgOrderByAggregateInput
    _max?: organisationsMaxOrderByAggregateInput
    _min?: organisationsMinOrderByAggregateInput
    _sum?: organisationsSumOrderByAggregateInput
  }

  export type organisationsScalarWhereWithAggregatesInput = {
    AND?: organisationsScalarWhereWithAggregatesInput | organisationsScalarWhereWithAggregatesInput[]
    OR?: organisationsScalarWhereWithAggregatesInput[]
    NOT?: organisationsScalarWhereWithAggregatesInput | organisationsScalarWhereWithAggregatesInput[]
    organisation_id?: IntWithAggregatesFilter<"organisations"> | number
    organisation_name?: StringWithAggregatesFilter<"organisations"> | string
  }

  export type plan_featuresWhereInput = {
    AND?: plan_featuresWhereInput | plan_featuresWhereInput[]
    OR?: plan_featuresWhereInput[]
    NOT?: plan_featuresWhereInput | plan_featuresWhereInput[]
    plan_feature_id?: IntFilter<"plan_features"> | number
    plan_id?: IntNullableFilter<"plan_features"> | number | null
    feature_id?: IntNullableFilter<"plan_features"> | number | null
    boolean_value?: BoolNullableFilter<"plan_features"> | boolean | null
    text_value?: StringNullableFilter<"plan_features"> | string | null
    numeric_value?: IntNullableFilter<"plan_features"> | number | null
    features?: XOR<FeaturesNullableScalarRelationFilter, featuresWhereInput> | null
    plans?: XOR<PlansNullableScalarRelationFilter, plansWhereInput> | null
  }

  export type plan_featuresOrderByWithRelationInput = {
    plan_feature_id?: SortOrder
    plan_id?: SortOrderInput | SortOrder
    feature_id?: SortOrderInput | SortOrder
    boolean_value?: SortOrderInput | SortOrder
    text_value?: SortOrderInput | SortOrder
    numeric_value?: SortOrderInput | SortOrder
    features?: featuresOrderByWithRelationInput
    plans?: plansOrderByWithRelationInput
  }

  export type plan_featuresWhereUniqueInput = Prisma.AtLeast<{
    plan_feature_id?: number
    AND?: plan_featuresWhereInput | plan_featuresWhereInput[]
    OR?: plan_featuresWhereInput[]
    NOT?: plan_featuresWhereInput | plan_featuresWhereInput[]
    plan_id?: IntNullableFilter<"plan_features"> | number | null
    feature_id?: IntNullableFilter<"plan_features"> | number | null
    boolean_value?: BoolNullableFilter<"plan_features"> | boolean | null
    text_value?: StringNullableFilter<"plan_features"> | string | null
    numeric_value?: IntNullableFilter<"plan_features"> | number | null
    features?: XOR<FeaturesNullableScalarRelationFilter, featuresWhereInput> | null
    plans?: XOR<PlansNullableScalarRelationFilter, plansWhereInput> | null
  }, "plan_feature_id">

  export type plan_featuresOrderByWithAggregationInput = {
    plan_feature_id?: SortOrder
    plan_id?: SortOrderInput | SortOrder
    feature_id?: SortOrderInput | SortOrder
    boolean_value?: SortOrderInput | SortOrder
    text_value?: SortOrderInput | SortOrder
    numeric_value?: SortOrderInput | SortOrder
    _count?: plan_featuresCountOrderByAggregateInput
    _avg?: plan_featuresAvgOrderByAggregateInput
    _max?: plan_featuresMaxOrderByAggregateInput
    _min?: plan_featuresMinOrderByAggregateInput
    _sum?: plan_featuresSumOrderByAggregateInput
  }

  export type plan_featuresScalarWhereWithAggregatesInput = {
    AND?: plan_featuresScalarWhereWithAggregatesInput | plan_featuresScalarWhereWithAggregatesInput[]
    OR?: plan_featuresScalarWhereWithAggregatesInput[]
    NOT?: plan_featuresScalarWhereWithAggregatesInput | plan_featuresScalarWhereWithAggregatesInput[]
    plan_feature_id?: IntWithAggregatesFilter<"plan_features"> | number
    plan_id?: IntNullableWithAggregatesFilter<"plan_features"> | number | null
    feature_id?: IntNullableWithAggregatesFilter<"plan_features"> | number | null
    boolean_value?: BoolNullableWithAggregatesFilter<"plan_features"> | boolean | null
    text_value?: StringNullableWithAggregatesFilter<"plan_features"> | string | null
    numeric_value?: IntNullableWithAggregatesFilter<"plan_features"> | number | null
  }

  export type plansWhereInput = {
    AND?: plansWhereInput | plansWhereInput[]
    OR?: plansWhereInput[]
    NOT?: plansWhereInput | plansWhereInput[]
    plan_id?: IntFilter<"plans"> | number
    plan_name?: StringNullableFilter<"plans"> | string | null
    price_monthly?: IntNullableFilter<"plans"> | number | null
    price_yearly?: IntNullableFilter<"plans"> | number | null
    userlimit?: IntNullableFilter<"plans"> | number | null
    description?: StringNullableFilter<"plans"> | string | null
    plan_features?: Plan_featuresListRelationFilter
    subscriptions?: SubscriptionsListRelationFilter
  }

  export type plansOrderByWithRelationInput = {
    plan_id?: SortOrder
    plan_name?: SortOrderInput | SortOrder
    price_monthly?: SortOrderInput | SortOrder
    price_yearly?: SortOrderInput | SortOrder
    userlimit?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    plan_features?: plan_featuresOrderByRelationAggregateInput
    subscriptions?: subscriptionsOrderByRelationAggregateInput
  }

  export type plansWhereUniqueInput = Prisma.AtLeast<{
    plan_id?: number
    AND?: plansWhereInput | plansWhereInput[]
    OR?: plansWhereInput[]
    NOT?: plansWhereInput | plansWhereInput[]
    plan_name?: StringNullableFilter<"plans"> | string | null
    price_monthly?: IntNullableFilter<"plans"> | number | null
    price_yearly?: IntNullableFilter<"plans"> | number | null
    userlimit?: IntNullableFilter<"plans"> | number | null
    description?: StringNullableFilter<"plans"> | string | null
    plan_features?: Plan_featuresListRelationFilter
    subscriptions?: SubscriptionsListRelationFilter
  }, "plan_id">

  export type plansOrderByWithAggregationInput = {
    plan_id?: SortOrder
    plan_name?: SortOrderInput | SortOrder
    price_monthly?: SortOrderInput | SortOrder
    price_yearly?: SortOrderInput | SortOrder
    userlimit?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    _count?: plansCountOrderByAggregateInput
    _avg?: plansAvgOrderByAggregateInput
    _max?: plansMaxOrderByAggregateInput
    _min?: plansMinOrderByAggregateInput
    _sum?: plansSumOrderByAggregateInput
  }

  export type plansScalarWhereWithAggregatesInput = {
    AND?: plansScalarWhereWithAggregatesInput | plansScalarWhereWithAggregatesInput[]
    OR?: plansScalarWhereWithAggregatesInput[]
    NOT?: plansScalarWhereWithAggregatesInput | plansScalarWhereWithAggregatesInput[]
    plan_id?: IntWithAggregatesFilter<"plans"> | number
    plan_name?: StringNullableWithAggregatesFilter<"plans"> | string | null
    price_monthly?: IntNullableWithAggregatesFilter<"plans"> | number | null
    price_yearly?: IntNullableWithAggregatesFilter<"plans"> | number | null
    userlimit?: IntNullableWithAggregatesFilter<"plans"> | number | null
    description?: StringNullableWithAggregatesFilter<"plans"> | string | null
  }

  export type subscriptionsWhereInput = {
    AND?: subscriptionsWhereInput | subscriptionsWhereInput[]
    OR?: subscriptionsWhereInput[]
    NOT?: subscriptionsWhereInput | subscriptionsWhereInput[]
    subscription_id?: IntFilter<"subscriptions"> | number
    organisation_id?: IntNullableFilter<"subscriptions"> | number | null
    plan_id?: IntNullableFilter<"subscriptions"> | number | null
    status?: EnumsubscriptionstatusNullableFilter<"subscriptions"> | $Enums.subscriptionstatus | null
    start_date?: DateTimeNullableFilter<"subscriptions"> | Date | string | null
    end_date?: DateTimeNullableFilter<"subscriptions"> | Date | string | null
    organisations?: XOR<OrganisationsNullableScalarRelationFilter, organisationsWhereInput> | null
    plans?: XOR<PlansNullableScalarRelationFilter, plansWhereInput> | null
  }

  export type subscriptionsOrderByWithRelationInput = {
    subscription_id?: SortOrder
    organisation_id?: SortOrderInput | SortOrder
    plan_id?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    start_date?: SortOrderInput | SortOrder
    end_date?: SortOrderInput | SortOrder
    organisations?: organisationsOrderByWithRelationInput
    plans?: plansOrderByWithRelationInput
  }

  export type subscriptionsWhereUniqueInput = Prisma.AtLeast<{
    subscription_id?: number
    AND?: subscriptionsWhereInput | subscriptionsWhereInput[]
    OR?: subscriptionsWhereInput[]
    NOT?: subscriptionsWhereInput | subscriptionsWhereInput[]
    organisation_id?: IntNullableFilter<"subscriptions"> | number | null
    plan_id?: IntNullableFilter<"subscriptions"> | number | null
    status?: EnumsubscriptionstatusNullableFilter<"subscriptions"> | $Enums.subscriptionstatus | null
    start_date?: DateTimeNullableFilter<"subscriptions"> | Date | string | null
    end_date?: DateTimeNullableFilter<"subscriptions"> | Date | string | null
    organisations?: XOR<OrganisationsNullableScalarRelationFilter, organisationsWhereInput> | null
    plans?: XOR<PlansNullableScalarRelationFilter, plansWhereInput> | null
  }, "subscription_id">

  export type subscriptionsOrderByWithAggregationInput = {
    subscription_id?: SortOrder
    organisation_id?: SortOrderInput | SortOrder
    plan_id?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    start_date?: SortOrderInput | SortOrder
    end_date?: SortOrderInput | SortOrder
    _count?: subscriptionsCountOrderByAggregateInput
    _avg?: subscriptionsAvgOrderByAggregateInput
    _max?: subscriptionsMaxOrderByAggregateInput
    _min?: subscriptionsMinOrderByAggregateInput
    _sum?: subscriptionsSumOrderByAggregateInput
  }

  export type subscriptionsScalarWhereWithAggregatesInput = {
    AND?: subscriptionsScalarWhereWithAggregatesInput | subscriptionsScalarWhereWithAggregatesInput[]
    OR?: subscriptionsScalarWhereWithAggregatesInput[]
    NOT?: subscriptionsScalarWhereWithAggregatesInput | subscriptionsScalarWhereWithAggregatesInput[]
    subscription_id?: IntWithAggregatesFilter<"subscriptions"> | number
    organisation_id?: IntNullableWithAggregatesFilter<"subscriptions"> | number | null
    plan_id?: IntNullableWithAggregatesFilter<"subscriptions"> | number | null
    status?: EnumsubscriptionstatusNullableWithAggregatesFilter<"subscriptions"> | $Enums.subscriptionstatus | null
    start_date?: DateTimeNullableWithAggregatesFilter<"subscriptions"> | Date | string | null
    end_date?: DateTimeNullableWithAggregatesFilter<"subscriptions"> | Date | string | null
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    user_id?: IntFilter<"users"> | number
    name?: StringNullableFilter<"users"> | string | null
    organisation_id?: IntNullableFilter<"users"> | number | null
    user_type?: EnumusertypeNullableFilter<"users"> | $Enums.usertype | null
    is_system_generated?: BoolNullableFilter<"users"> | boolean | null
    is_active?: BoolNullableFilter<"users"> | boolean | null
    organisations?: XOR<OrganisationsNullableScalarRelationFilter, organisationsWhereInput> | null
  }

  export type usersOrderByWithRelationInput = {
    user_id?: SortOrder
    name?: SortOrderInput | SortOrder
    organisation_id?: SortOrderInput | SortOrder
    user_type?: SortOrderInput | SortOrder
    is_system_generated?: SortOrderInput | SortOrder
    is_active?: SortOrderInput | SortOrder
    organisations?: organisationsOrderByWithRelationInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    user_id?: number
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    name?: StringNullableFilter<"users"> | string | null
    organisation_id?: IntNullableFilter<"users"> | number | null
    user_type?: EnumusertypeNullableFilter<"users"> | $Enums.usertype | null
    is_system_generated?: BoolNullableFilter<"users"> | boolean | null
    is_active?: BoolNullableFilter<"users"> | boolean | null
    organisations?: XOR<OrganisationsNullableScalarRelationFilter, organisationsWhereInput> | null
  }, "user_id">

  export type usersOrderByWithAggregationInput = {
    user_id?: SortOrder
    name?: SortOrderInput | SortOrder
    organisation_id?: SortOrderInput | SortOrder
    user_type?: SortOrderInput | SortOrder
    is_system_generated?: SortOrderInput | SortOrder
    is_active?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    user_id?: IntWithAggregatesFilter<"users"> | number
    name?: StringNullableWithAggregatesFilter<"users"> | string | null
    organisation_id?: IntNullableWithAggregatesFilter<"users"> | number | null
    user_type?: EnumusertypeNullableWithAggregatesFilter<"users"> | $Enums.usertype | null
    is_system_generated?: BoolNullableWithAggregatesFilter<"users"> | boolean | null
    is_active?: BoolNullableWithAggregatesFilter<"users"> | boolean | null
  }

  export type feature_categoriesCreateInput = {
    feature_category_name: string
    features?: featuresCreateNestedManyWithoutFeature_categoriesInput
  }

  export type feature_categoriesUncheckedCreateInput = {
    feature_category_id?: number
    feature_category_name: string
    features?: featuresUncheckedCreateNestedManyWithoutFeature_categoriesInput
  }

  export type feature_categoriesUpdateInput = {
    feature_category_name?: StringFieldUpdateOperationsInput | string
    features?: featuresUpdateManyWithoutFeature_categoriesNestedInput
  }

  export type feature_categoriesUncheckedUpdateInput = {
    feature_category_id?: IntFieldUpdateOperationsInput | number
    feature_category_name?: StringFieldUpdateOperationsInput | string
    features?: featuresUncheckedUpdateManyWithoutFeature_categoriesNestedInput
  }

  export type feature_categoriesCreateManyInput = {
    feature_category_id?: number
    feature_category_name: string
  }

  export type feature_categoriesUpdateManyMutationInput = {
    feature_category_name?: StringFieldUpdateOperationsInput | string
  }

  export type feature_categoriesUncheckedUpdateManyInput = {
    feature_category_id?: IntFieldUpdateOperationsInput | number
    feature_category_name?: StringFieldUpdateOperationsInput | string
  }

  export type featuresCreateInput = {
    feature_value?: string | null
    feature_key?: string | null
    feature_input_type?: $Enums.featureinputtype | null
    feature_categories: feature_categoriesCreateNestedOneWithoutFeaturesInput
    plan_features?: plan_featuresCreateNestedManyWithoutFeaturesInput
  }

  export type featuresUncheckedCreateInput = {
    feature_id?: number
    category_id: number
    feature_value?: string | null
    feature_key?: string | null
    feature_input_type?: $Enums.featureinputtype | null
    plan_features?: plan_featuresUncheckedCreateNestedManyWithoutFeaturesInput
  }

  export type featuresUpdateInput = {
    feature_value?: NullableStringFieldUpdateOperationsInput | string | null
    feature_key?: NullableStringFieldUpdateOperationsInput | string | null
    feature_input_type?: NullableEnumfeatureinputtypeFieldUpdateOperationsInput | $Enums.featureinputtype | null
    feature_categories?: feature_categoriesUpdateOneRequiredWithoutFeaturesNestedInput
    plan_features?: plan_featuresUpdateManyWithoutFeaturesNestedInput
  }

  export type featuresUncheckedUpdateInput = {
    feature_id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    feature_value?: NullableStringFieldUpdateOperationsInput | string | null
    feature_key?: NullableStringFieldUpdateOperationsInput | string | null
    feature_input_type?: NullableEnumfeatureinputtypeFieldUpdateOperationsInput | $Enums.featureinputtype | null
    plan_features?: plan_featuresUncheckedUpdateManyWithoutFeaturesNestedInput
  }

  export type featuresCreateManyInput = {
    feature_id?: number
    category_id: number
    feature_value?: string | null
    feature_key?: string | null
    feature_input_type?: $Enums.featureinputtype | null
  }

  export type featuresUpdateManyMutationInput = {
    feature_value?: NullableStringFieldUpdateOperationsInput | string | null
    feature_key?: NullableStringFieldUpdateOperationsInput | string | null
    feature_input_type?: NullableEnumfeatureinputtypeFieldUpdateOperationsInput | $Enums.featureinputtype | null
  }

  export type featuresUncheckedUpdateManyInput = {
    feature_id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    feature_value?: NullableStringFieldUpdateOperationsInput | string | null
    feature_key?: NullableStringFieldUpdateOperationsInput | string | null
    feature_input_type?: NullableEnumfeatureinputtypeFieldUpdateOperationsInput | $Enums.featureinputtype | null
  }

  export type organisationsCreateInput = {
    organisation_name: string
    subscriptions?: subscriptionsCreateNestedManyWithoutOrganisationsInput
    users?: usersCreateNestedManyWithoutOrganisationsInput
  }

  export type organisationsUncheckedCreateInput = {
    organisation_id?: number
    organisation_name: string
    subscriptions?: subscriptionsUncheckedCreateNestedManyWithoutOrganisationsInput
    users?: usersUncheckedCreateNestedManyWithoutOrganisationsInput
  }

  export type organisationsUpdateInput = {
    organisation_name?: StringFieldUpdateOperationsInput | string
    subscriptions?: subscriptionsUpdateManyWithoutOrganisationsNestedInput
    users?: usersUpdateManyWithoutOrganisationsNestedInput
  }

  export type organisationsUncheckedUpdateInput = {
    organisation_id?: IntFieldUpdateOperationsInput | number
    organisation_name?: StringFieldUpdateOperationsInput | string
    subscriptions?: subscriptionsUncheckedUpdateManyWithoutOrganisationsNestedInput
    users?: usersUncheckedUpdateManyWithoutOrganisationsNestedInput
  }

  export type organisationsCreateManyInput = {
    organisation_id?: number
    organisation_name: string
  }

  export type organisationsUpdateManyMutationInput = {
    organisation_name?: StringFieldUpdateOperationsInput | string
  }

  export type organisationsUncheckedUpdateManyInput = {
    organisation_id?: IntFieldUpdateOperationsInput | number
    organisation_name?: StringFieldUpdateOperationsInput | string
  }

  export type plan_featuresCreateInput = {
    boolean_value?: boolean | null
    text_value?: string | null
    numeric_value?: number | null
    features?: featuresCreateNestedOneWithoutPlan_featuresInput
    plans?: plansCreateNestedOneWithoutPlan_featuresInput
  }

  export type plan_featuresUncheckedCreateInput = {
    plan_feature_id?: number
    plan_id?: number | null
    feature_id?: number | null
    boolean_value?: boolean | null
    text_value?: string | null
    numeric_value?: number | null
  }

  export type plan_featuresUpdateInput = {
    boolean_value?: NullableBoolFieldUpdateOperationsInput | boolean | null
    text_value?: NullableStringFieldUpdateOperationsInput | string | null
    numeric_value?: NullableIntFieldUpdateOperationsInput | number | null
    features?: featuresUpdateOneWithoutPlan_featuresNestedInput
    plans?: plansUpdateOneWithoutPlan_featuresNestedInput
  }

  export type plan_featuresUncheckedUpdateInput = {
    plan_feature_id?: IntFieldUpdateOperationsInput | number
    plan_id?: NullableIntFieldUpdateOperationsInput | number | null
    feature_id?: NullableIntFieldUpdateOperationsInput | number | null
    boolean_value?: NullableBoolFieldUpdateOperationsInput | boolean | null
    text_value?: NullableStringFieldUpdateOperationsInput | string | null
    numeric_value?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type plan_featuresCreateManyInput = {
    plan_feature_id?: number
    plan_id?: number | null
    feature_id?: number | null
    boolean_value?: boolean | null
    text_value?: string | null
    numeric_value?: number | null
  }

  export type plan_featuresUpdateManyMutationInput = {
    boolean_value?: NullableBoolFieldUpdateOperationsInput | boolean | null
    text_value?: NullableStringFieldUpdateOperationsInput | string | null
    numeric_value?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type plan_featuresUncheckedUpdateManyInput = {
    plan_feature_id?: IntFieldUpdateOperationsInput | number
    plan_id?: NullableIntFieldUpdateOperationsInput | number | null
    feature_id?: NullableIntFieldUpdateOperationsInput | number | null
    boolean_value?: NullableBoolFieldUpdateOperationsInput | boolean | null
    text_value?: NullableStringFieldUpdateOperationsInput | string | null
    numeric_value?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type plansCreateInput = {
    plan_name?: string | null
    price_monthly?: number | null
    price_yearly?: number | null
    userlimit?: number | null
    description?: string | null
    plan_features?: plan_featuresCreateNestedManyWithoutPlansInput
    subscriptions?: subscriptionsCreateNestedManyWithoutPlansInput
  }

  export type plansUncheckedCreateInput = {
    plan_id?: number
    plan_name?: string | null
    price_monthly?: number | null
    price_yearly?: number | null
    userlimit?: number | null
    description?: string | null
    plan_features?: plan_featuresUncheckedCreateNestedManyWithoutPlansInput
    subscriptions?: subscriptionsUncheckedCreateNestedManyWithoutPlansInput
  }

  export type plansUpdateInput = {
    plan_name?: NullableStringFieldUpdateOperationsInput | string | null
    price_monthly?: NullableIntFieldUpdateOperationsInput | number | null
    price_yearly?: NullableIntFieldUpdateOperationsInput | number | null
    userlimit?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    plan_features?: plan_featuresUpdateManyWithoutPlansNestedInput
    subscriptions?: subscriptionsUpdateManyWithoutPlansNestedInput
  }

  export type plansUncheckedUpdateInput = {
    plan_id?: IntFieldUpdateOperationsInput | number
    plan_name?: NullableStringFieldUpdateOperationsInput | string | null
    price_monthly?: NullableIntFieldUpdateOperationsInput | number | null
    price_yearly?: NullableIntFieldUpdateOperationsInput | number | null
    userlimit?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    plan_features?: plan_featuresUncheckedUpdateManyWithoutPlansNestedInput
    subscriptions?: subscriptionsUncheckedUpdateManyWithoutPlansNestedInput
  }

  export type plansCreateManyInput = {
    plan_id?: number
    plan_name?: string | null
    price_monthly?: number | null
    price_yearly?: number | null
    userlimit?: number | null
    description?: string | null
  }

  export type plansUpdateManyMutationInput = {
    plan_name?: NullableStringFieldUpdateOperationsInput | string | null
    price_monthly?: NullableIntFieldUpdateOperationsInput | number | null
    price_yearly?: NullableIntFieldUpdateOperationsInput | number | null
    userlimit?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type plansUncheckedUpdateManyInput = {
    plan_id?: IntFieldUpdateOperationsInput | number
    plan_name?: NullableStringFieldUpdateOperationsInput | string | null
    price_monthly?: NullableIntFieldUpdateOperationsInput | number | null
    price_yearly?: NullableIntFieldUpdateOperationsInput | number | null
    userlimit?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type subscriptionsCreateInput = {
    status?: $Enums.subscriptionstatus | null
    start_date?: Date | string | null
    end_date?: Date | string | null
    organisations?: organisationsCreateNestedOneWithoutSubscriptionsInput
    plans?: plansCreateNestedOneWithoutSubscriptionsInput
  }

  export type subscriptionsUncheckedCreateInput = {
    subscription_id?: number
    organisation_id?: number | null
    plan_id?: number | null
    status?: $Enums.subscriptionstatus | null
    start_date?: Date | string | null
    end_date?: Date | string | null
  }

  export type subscriptionsUpdateInput = {
    status?: NullableEnumsubscriptionstatusFieldUpdateOperationsInput | $Enums.subscriptionstatus | null
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    organisations?: organisationsUpdateOneWithoutSubscriptionsNestedInput
    plans?: plansUpdateOneWithoutSubscriptionsNestedInput
  }

  export type subscriptionsUncheckedUpdateInput = {
    subscription_id?: IntFieldUpdateOperationsInput | number
    organisation_id?: NullableIntFieldUpdateOperationsInput | number | null
    plan_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableEnumsubscriptionstatusFieldUpdateOperationsInput | $Enums.subscriptionstatus | null
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type subscriptionsCreateManyInput = {
    subscription_id?: number
    organisation_id?: number | null
    plan_id?: number | null
    status?: $Enums.subscriptionstatus | null
    start_date?: Date | string | null
    end_date?: Date | string | null
  }

  export type subscriptionsUpdateManyMutationInput = {
    status?: NullableEnumsubscriptionstatusFieldUpdateOperationsInput | $Enums.subscriptionstatus | null
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type subscriptionsUncheckedUpdateManyInput = {
    subscription_id?: IntFieldUpdateOperationsInput | number
    organisation_id?: NullableIntFieldUpdateOperationsInput | number | null
    plan_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableEnumsubscriptionstatusFieldUpdateOperationsInput | $Enums.subscriptionstatus | null
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersCreateInput = {
    name?: string | null
    user_type?: $Enums.usertype | null
    is_system_generated?: boolean | null
    is_active?: boolean | null
    organisations?: organisationsCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    user_id?: number
    name?: string | null
    organisation_id?: number | null
    user_type?: $Enums.usertype | null
    is_system_generated?: boolean | null
    is_active?: boolean | null
  }

  export type usersUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    user_type?: NullableEnumusertypeFieldUpdateOperationsInput | $Enums.usertype | null
    is_system_generated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    organisations?: organisationsUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    organisation_id?: NullableIntFieldUpdateOperationsInput | number | null
    user_type?: NullableEnumusertypeFieldUpdateOperationsInput | $Enums.usertype | null
    is_system_generated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type usersCreateManyInput = {
    user_id?: number
    name?: string | null
    organisation_id?: number | null
    user_type?: $Enums.usertype | null
    is_system_generated?: boolean | null
    is_active?: boolean | null
  }

  export type usersUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    user_type?: NullableEnumusertypeFieldUpdateOperationsInput | $Enums.usertype | null
    is_system_generated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type usersUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    organisation_id?: NullableIntFieldUpdateOperationsInput | number | null
    user_type?: NullableEnumusertypeFieldUpdateOperationsInput | $Enums.usertype | null
    is_system_generated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
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

  export type FeaturesListRelationFilter = {
    every?: featuresWhereInput
    some?: featuresWhereInput
    none?: featuresWhereInput
  }

  export type featuresOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type feature_categoriesCountOrderByAggregateInput = {
    feature_category_id?: SortOrder
    feature_category_name?: SortOrder
  }

  export type feature_categoriesAvgOrderByAggregateInput = {
    feature_category_id?: SortOrder
  }

  export type feature_categoriesMaxOrderByAggregateInput = {
    feature_category_id?: SortOrder
    feature_category_name?: SortOrder
  }

  export type feature_categoriesMinOrderByAggregateInput = {
    feature_category_id?: SortOrder
    feature_category_name?: SortOrder
  }

  export type feature_categoriesSumOrderByAggregateInput = {
    feature_category_id?: SortOrder
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

  export type EnumfeatureinputtypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.featureinputtype | EnumfeatureinputtypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.featureinputtype[] | ListEnumfeatureinputtypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.featureinputtype[] | ListEnumfeatureinputtypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumfeatureinputtypeNullableFilter<$PrismaModel> | $Enums.featureinputtype | null
  }

  export type Feature_categoriesScalarRelationFilter = {
    is?: feature_categoriesWhereInput
    isNot?: feature_categoriesWhereInput
  }

  export type Plan_featuresListRelationFilter = {
    every?: plan_featuresWhereInput
    some?: plan_featuresWhereInput
    none?: plan_featuresWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type plan_featuresOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type featuresCountOrderByAggregateInput = {
    feature_id?: SortOrder
    category_id?: SortOrder
    feature_value?: SortOrder
    feature_key?: SortOrder
    feature_input_type?: SortOrder
  }

  export type featuresAvgOrderByAggregateInput = {
    feature_id?: SortOrder
    category_id?: SortOrder
  }

  export type featuresMaxOrderByAggregateInput = {
    feature_id?: SortOrder
    category_id?: SortOrder
    feature_value?: SortOrder
    feature_key?: SortOrder
    feature_input_type?: SortOrder
  }

  export type featuresMinOrderByAggregateInput = {
    feature_id?: SortOrder
    category_id?: SortOrder
    feature_value?: SortOrder
    feature_key?: SortOrder
    feature_input_type?: SortOrder
  }

  export type featuresSumOrderByAggregateInput = {
    feature_id?: SortOrder
    category_id?: SortOrder
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

  export type EnumfeatureinputtypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.featureinputtype | EnumfeatureinputtypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.featureinputtype[] | ListEnumfeatureinputtypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.featureinputtype[] | ListEnumfeatureinputtypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumfeatureinputtypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.featureinputtype | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumfeatureinputtypeNullableFilter<$PrismaModel>
    _max?: NestedEnumfeatureinputtypeNullableFilter<$PrismaModel>
  }

  export type SubscriptionsListRelationFilter = {
    every?: subscriptionsWhereInput
    some?: subscriptionsWhereInput
    none?: subscriptionsWhereInput
  }

  export type UsersListRelationFilter = {
    every?: usersWhereInput
    some?: usersWhereInput
    none?: usersWhereInput
  }

  export type subscriptionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type organisationsCountOrderByAggregateInput = {
    organisation_id?: SortOrder
    organisation_name?: SortOrder
  }

  export type organisationsAvgOrderByAggregateInput = {
    organisation_id?: SortOrder
  }

  export type organisationsMaxOrderByAggregateInput = {
    organisation_id?: SortOrder
    organisation_name?: SortOrder
  }

  export type organisationsMinOrderByAggregateInput = {
    organisation_id?: SortOrder
    organisation_name?: SortOrder
  }

  export type organisationsSumOrderByAggregateInput = {
    organisation_id?: SortOrder
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

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type FeaturesNullableScalarRelationFilter = {
    is?: featuresWhereInput | null
    isNot?: featuresWhereInput | null
  }

  export type PlansNullableScalarRelationFilter = {
    is?: plansWhereInput | null
    isNot?: plansWhereInput | null
  }

  export type plan_featuresCountOrderByAggregateInput = {
    plan_feature_id?: SortOrder
    plan_id?: SortOrder
    feature_id?: SortOrder
    boolean_value?: SortOrder
    text_value?: SortOrder
    numeric_value?: SortOrder
  }

  export type plan_featuresAvgOrderByAggregateInput = {
    plan_feature_id?: SortOrder
    plan_id?: SortOrder
    feature_id?: SortOrder
    numeric_value?: SortOrder
  }

  export type plan_featuresMaxOrderByAggregateInput = {
    plan_feature_id?: SortOrder
    plan_id?: SortOrder
    feature_id?: SortOrder
    boolean_value?: SortOrder
    text_value?: SortOrder
    numeric_value?: SortOrder
  }

  export type plan_featuresMinOrderByAggregateInput = {
    plan_feature_id?: SortOrder
    plan_id?: SortOrder
    feature_id?: SortOrder
    boolean_value?: SortOrder
    text_value?: SortOrder
    numeric_value?: SortOrder
  }

  export type plan_featuresSumOrderByAggregateInput = {
    plan_feature_id?: SortOrder
    plan_id?: SortOrder
    feature_id?: SortOrder
    numeric_value?: SortOrder
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

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type plansCountOrderByAggregateInput = {
    plan_id?: SortOrder
    plan_name?: SortOrder
    price_monthly?: SortOrder
    price_yearly?: SortOrder
    userlimit?: SortOrder
    description?: SortOrder
  }

  export type plansAvgOrderByAggregateInput = {
    plan_id?: SortOrder
    price_monthly?: SortOrder
    price_yearly?: SortOrder
    userlimit?: SortOrder
  }

  export type plansMaxOrderByAggregateInput = {
    plan_id?: SortOrder
    plan_name?: SortOrder
    price_monthly?: SortOrder
    price_yearly?: SortOrder
    userlimit?: SortOrder
    description?: SortOrder
  }

  export type plansMinOrderByAggregateInput = {
    plan_id?: SortOrder
    plan_name?: SortOrder
    price_monthly?: SortOrder
    price_yearly?: SortOrder
    userlimit?: SortOrder
    description?: SortOrder
  }

  export type plansSumOrderByAggregateInput = {
    plan_id?: SortOrder
    price_monthly?: SortOrder
    price_yearly?: SortOrder
    userlimit?: SortOrder
  }

  export type EnumsubscriptionstatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.subscriptionstatus | EnumsubscriptionstatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.subscriptionstatus[] | ListEnumsubscriptionstatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.subscriptionstatus[] | ListEnumsubscriptionstatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumsubscriptionstatusNullableFilter<$PrismaModel> | $Enums.subscriptionstatus | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type OrganisationsNullableScalarRelationFilter = {
    is?: organisationsWhereInput | null
    isNot?: organisationsWhereInput | null
  }

  export type subscriptionsCountOrderByAggregateInput = {
    subscription_id?: SortOrder
    organisation_id?: SortOrder
    plan_id?: SortOrder
    status?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
  }

  export type subscriptionsAvgOrderByAggregateInput = {
    subscription_id?: SortOrder
    organisation_id?: SortOrder
    plan_id?: SortOrder
  }

  export type subscriptionsMaxOrderByAggregateInput = {
    subscription_id?: SortOrder
    organisation_id?: SortOrder
    plan_id?: SortOrder
    status?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
  }

  export type subscriptionsMinOrderByAggregateInput = {
    subscription_id?: SortOrder
    organisation_id?: SortOrder
    plan_id?: SortOrder
    status?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
  }

  export type subscriptionsSumOrderByAggregateInput = {
    subscription_id?: SortOrder
    organisation_id?: SortOrder
    plan_id?: SortOrder
  }

  export type EnumsubscriptionstatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.subscriptionstatus | EnumsubscriptionstatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.subscriptionstatus[] | ListEnumsubscriptionstatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.subscriptionstatus[] | ListEnumsubscriptionstatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumsubscriptionstatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.subscriptionstatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumsubscriptionstatusNullableFilter<$PrismaModel>
    _max?: NestedEnumsubscriptionstatusNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumusertypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.usertype | EnumusertypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.usertype[] | ListEnumusertypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.usertype[] | ListEnumusertypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumusertypeNullableFilter<$PrismaModel> | $Enums.usertype | null
  }

  export type usersCountOrderByAggregateInput = {
    user_id?: SortOrder
    name?: SortOrder
    organisation_id?: SortOrder
    user_type?: SortOrder
    is_system_generated?: SortOrder
    is_active?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    user_id?: SortOrder
    organisation_id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    user_id?: SortOrder
    name?: SortOrder
    organisation_id?: SortOrder
    user_type?: SortOrder
    is_system_generated?: SortOrder
    is_active?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    user_id?: SortOrder
    name?: SortOrder
    organisation_id?: SortOrder
    user_type?: SortOrder
    is_system_generated?: SortOrder
    is_active?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    user_id?: SortOrder
    organisation_id?: SortOrder
  }

  export type EnumusertypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.usertype | EnumusertypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.usertype[] | ListEnumusertypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.usertype[] | ListEnumusertypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumusertypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.usertype | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumusertypeNullableFilter<$PrismaModel>
    _max?: NestedEnumusertypeNullableFilter<$PrismaModel>
  }

  export type featuresCreateNestedManyWithoutFeature_categoriesInput = {
    create?: XOR<featuresCreateWithoutFeature_categoriesInput, featuresUncheckedCreateWithoutFeature_categoriesInput> | featuresCreateWithoutFeature_categoriesInput[] | featuresUncheckedCreateWithoutFeature_categoriesInput[]
    connectOrCreate?: featuresCreateOrConnectWithoutFeature_categoriesInput | featuresCreateOrConnectWithoutFeature_categoriesInput[]
    createMany?: featuresCreateManyFeature_categoriesInputEnvelope
    connect?: featuresWhereUniqueInput | featuresWhereUniqueInput[]
  }

  export type featuresUncheckedCreateNestedManyWithoutFeature_categoriesInput = {
    create?: XOR<featuresCreateWithoutFeature_categoriesInput, featuresUncheckedCreateWithoutFeature_categoriesInput> | featuresCreateWithoutFeature_categoriesInput[] | featuresUncheckedCreateWithoutFeature_categoriesInput[]
    connectOrCreate?: featuresCreateOrConnectWithoutFeature_categoriesInput | featuresCreateOrConnectWithoutFeature_categoriesInput[]
    createMany?: featuresCreateManyFeature_categoriesInputEnvelope
    connect?: featuresWhereUniqueInput | featuresWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type featuresUpdateManyWithoutFeature_categoriesNestedInput = {
    create?: XOR<featuresCreateWithoutFeature_categoriesInput, featuresUncheckedCreateWithoutFeature_categoriesInput> | featuresCreateWithoutFeature_categoriesInput[] | featuresUncheckedCreateWithoutFeature_categoriesInput[]
    connectOrCreate?: featuresCreateOrConnectWithoutFeature_categoriesInput | featuresCreateOrConnectWithoutFeature_categoriesInput[]
    upsert?: featuresUpsertWithWhereUniqueWithoutFeature_categoriesInput | featuresUpsertWithWhereUniqueWithoutFeature_categoriesInput[]
    createMany?: featuresCreateManyFeature_categoriesInputEnvelope
    set?: featuresWhereUniqueInput | featuresWhereUniqueInput[]
    disconnect?: featuresWhereUniqueInput | featuresWhereUniqueInput[]
    delete?: featuresWhereUniqueInput | featuresWhereUniqueInput[]
    connect?: featuresWhereUniqueInput | featuresWhereUniqueInput[]
    update?: featuresUpdateWithWhereUniqueWithoutFeature_categoriesInput | featuresUpdateWithWhereUniqueWithoutFeature_categoriesInput[]
    updateMany?: featuresUpdateManyWithWhereWithoutFeature_categoriesInput | featuresUpdateManyWithWhereWithoutFeature_categoriesInput[]
    deleteMany?: featuresScalarWhereInput | featuresScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type featuresUncheckedUpdateManyWithoutFeature_categoriesNestedInput = {
    create?: XOR<featuresCreateWithoutFeature_categoriesInput, featuresUncheckedCreateWithoutFeature_categoriesInput> | featuresCreateWithoutFeature_categoriesInput[] | featuresUncheckedCreateWithoutFeature_categoriesInput[]
    connectOrCreate?: featuresCreateOrConnectWithoutFeature_categoriesInput | featuresCreateOrConnectWithoutFeature_categoriesInput[]
    upsert?: featuresUpsertWithWhereUniqueWithoutFeature_categoriesInput | featuresUpsertWithWhereUniqueWithoutFeature_categoriesInput[]
    createMany?: featuresCreateManyFeature_categoriesInputEnvelope
    set?: featuresWhereUniqueInput | featuresWhereUniqueInput[]
    disconnect?: featuresWhereUniqueInput | featuresWhereUniqueInput[]
    delete?: featuresWhereUniqueInput | featuresWhereUniqueInput[]
    connect?: featuresWhereUniqueInput | featuresWhereUniqueInput[]
    update?: featuresUpdateWithWhereUniqueWithoutFeature_categoriesInput | featuresUpdateWithWhereUniqueWithoutFeature_categoriesInput[]
    updateMany?: featuresUpdateManyWithWhereWithoutFeature_categoriesInput | featuresUpdateManyWithWhereWithoutFeature_categoriesInput[]
    deleteMany?: featuresScalarWhereInput | featuresScalarWhereInput[]
  }

  export type feature_categoriesCreateNestedOneWithoutFeaturesInput = {
    create?: XOR<feature_categoriesCreateWithoutFeaturesInput, feature_categoriesUncheckedCreateWithoutFeaturesInput>
    connectOrCreate?: feature_categoriesCreateOrConnectWithoutFeaturesInput
    connect?: feature_categoriesWhereUniqueInput
  }

  export type plan_featuresCreateNestedManyWithoutFeaturesInput = {
    create?: XOR<plan_featuresCreateWithoutFeaturesInput, plan_featuresUncheckedCreateWithoutFeaturesInput> | plan_featuresCreateWithoutFeaturesInput[] | plan_featuresUncheckedCreateWithoutFeaturesInput[]
    connectOrCreate?: plan_featuresCreateOrConnectWithoutFeaturesInput | plan_featuresCreateOrConnectWithoutFeaturesInput[]
    createMany?: plan_featuresCreateManyFeaturesInputEnvelope
    connect?: plan_featuresWhereUniqueInput | plan_featuresWhereUniqueInput[]
  }

  export type plan_featuresUncheckedCreateNestedManyWithoutFeaturesInput = {
    create?: XOR<plan_featuresCreateWithoutFeaturesInput, plan_featuresUncheckedCreateWithoutFeaturesInput> | plan_featuresCreateWithoutFeaturesInput[] | plan_featuresUncheckedCreateWithoutFeaturesInput[]
    connectOrCreate?: plan_featuresCreateOrConnectWithoutFeaturesInput | plan_featuresCreateOrConnectWithoutFeaturesInput[]
    createMany?: plan_featuresCreateManyFeaturesInputEnvelope
    connect?: plan_featuresWhereUniqueInput | plan_featuresWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableEnumfeatureinputtypeFieldUpdateOperationsInput = {
    set?: $Enums.featureinputtype | null
  }

  export type feature_categoriesUpdateOneRequiredWithoutFeaturesNestedInput = {
    create?: XOR<feature_categoriesCreateWithoutFeaturesInput, feature_categoriesUncheckedCreateWithoutFeaturesInput>
    connectOrCreate?: feature_categoriesCreateOrConnectWithoutFeaturesInput
    upsert?: feature_categoriesUpsertWithoutFeaturesInput
    connect?: feature_categoriesWhereUniqueInput
    update?: XOR<XOR<feature_categoriesUpdateToOneWithWhereWithoutFeaturesInput, feature_categoriesUpdateWithoutFeaturesInput>, feature_categoriesUncheckedUpdateWithoutFeaturesInput>
  }

  export type plan_featuresUpdateManyWithoutFeaturesNestedInput = {
    create?: XOR<plan_featuresCreateWithoutFeaturesInput, plan_featuresUncheckedCreateWithoutFeaturesInput> | plan_featuresCreateWithoutFeaturesInput[] | plan_featuresUncheckedCreateWithoutFeaturesInput[]
    connectOrCreate?: plan_featuresCreateOrConnectWithoutFeaturesInput | plan_featuresCreateOrConnectWithoutFeaturesInput[]
    upsert?: plan_featuresUpsertWithWhereUniqueWithoutFeaturesInput | plan_featuresUpsertWithWhereUniqueWithoutFeaturesInput[]
    createMany?: plan_featuresCreateManyFeaturesInputEnvelope
    set?: plan_featuresWhereUniqueInput | plan_featuresWhereUniqueInput[]
    disconnect?: plan_featuresWhereUniqueInput | plan_featuresWhereUniqueInput[]
    delete?: plan_featuresWhereUniqueInput | plan_featuresWhereUniqueInput[]
    connect?: plan_featuresWhereUniqueInput | plan_featuresWhereUniqueInput[]
    update?: plan_featuresUpdateWithWhereUniqueWithoutFeaturesInput | plan_featuresUpdateWithWhereUniqueWithoutFeaturesInput[]
    updateMany?: plan_featuresUpdateManyWithWhereWithoutFeaturesInput | plan_featuresUpdateManyWithWhereWithoutFeaturesInput[]
    deleteMany?: plan_featuresScalarWhereInput | plan_featuresScalarWhereInput[]
  }

  export type plan_featuresUncheckedUpdateManyWithoutFeaturesNestedInput = {
    create?: XOR<plan_featuresCreateWithoutFeaturesInput, plan_featuresUncheckedCreateWithoutFeaturesInput> | plan_featuresCreateWithoutFeaturesInput[] | plan_featuresUncheckedCreateWithoutFeaturesInput[]
    connectOrCreate?: plan_featuresCreateOrConnectWithoutFeaturesInput | plan_featuresCreateOrConnectWithoutFeaturesInput[]
    upsert?: plan_featuresUpsertWithWhereUniqueWithoutFeaturesInput | plan_featuresUpsertWithWhereUniqueWithoutFeaturesInput[]
    createMany?: plan_featuresCreateManyFeaturesInputEnvelope
    set?: plan_featuresWhereUniqueInput | plan_featuresWhereUniqueInput[]
    disconnect?: plan_featuresWhereUniqueInput | plan_featuresWhereUniqueInput[]
    delete?: plan_featuresWhereUniqueInput | plan_featuresWhereUniqueInput[]
    connect?: plan_featuresWhereUniqueInput | plan_featuresWhereUniqueInput[]
    update?: plan_featuresUpdateWithWhereUniqueWithoutFeaturesInput | plan_featuresUpdateWithWhereUniqueWithoutFeaturesInput[]
    updateMany?: plan_featuresUpdateManyWithWhereWithoutFeaturesInput | plan_featuresUpdateManyWithWhereWithoutFeaturesInput[]
    deleteMany?: plan_featuresScalarWhereInput | plan_featuresScalarWhereInput[]
  }

  export type subscriptionsCreateNestedManyWithoutOrganisationsInput = {
    create?: XOR<subscriptionsCreateWithoutOrganisationsInput, subscriptionsUncheckedCreateWithoutOrganisationsInput> | subscriptionsCreateWithoutOrganisationsInput[] | subscriptionsUncheckedCreateWithoutOrganisationsInput[]
    connectOrCreate?: subscriptionsCreateOrConnectWithoutOrganisationsInput | subscriptionsCreateOrConnectWithoutOrganisationsInput[]
    createMany?: subscriptionsCreateManyOrganisationsInputEnvelope
    connect?: subscriptionsWhereUniqueInput | subscriptionsWhereUniqueInput[]
  }

  export type usersCreateNestedManyWithoutOrganisationsInput = {
    create?: XOR<usersCreateWithoutOrganisationsInput, usersUncheckedCreateWithoutOrganisationsInput> | usersCreateWithoutOrganisationsInput[] | usersUncheckedCreateWithoutOrganisationsInput[]
    connectOrCreate?: usersCreateOrConnectWithoutOrganisationsInput | usersCreateOrConnectWithoutOrganisationsInput[]
    createMany?: usersCreateManyOrganisationsInputEnvelope
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type subscriptionsUncheckedCreateNestedManyWithoutOrganisationsInput = {
    create?: XOR<subscriptionsCreateWithoutOrganisationsInput, subscriptionsUncheckedCreateWithoutOrganisationsInput> | subscriptionsCreateWithoutOrganisationsInput[] | subscriptionsUncheckedCreateWithoutOrganisationsInput[]
    connectOrCreate?: subscriptionsCreateOrConnectWithoutOrganisationsInput | subscriptionsCreateOrConnectWithoutOrganisationsInput[]
    createMany?: subscriptionsCreateManyOrganisationsInputEnvelope
    connect?: subscriptionsWhereUniqueInput | subscriptionsWhereUniqueInput[]
  }

  export type usersUncheckedCreateNestedManyWithoutOrganisationsInput = {
    create?: XOR<usersCreateWithoutOrganisationsInput, usersUncheckedCreateWithoutOrganisationsInput> | usersCreateWithoutOrganisationsInput[] | usersUncheckedCreateWithoutOrganisationsInput[]
    connectOrCreate?: usersCreateOrConnectWithoutOrganisationsInput | usersCreateOrConnectWithoutOrganisationsInput[]
    createMany?: usersCreateManyOrganisationsInputEnvelope
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type subscriptionsUpdateManyWithoutOrganisationsNestedInput = {
    create?: XOR<subscriptionsCreateWithoutOrganisationsInput, subscriptionsUncheckedCreateWithoutOrganisationsInput> | subscriptionsCreateWithoutOrganisationsInput[] | subscriptionsUncheckedCreateWithoutOrganisationsInput[]
    connectOrCreate?: subscriptionsCreateOrConnectWithoutOrganisationsInput | subscriptionsCreateOrConnectWithoutOrganisationsInput[]
    upsert?: subscriptionsUpsertWithWhereUniqueWithoutOrganisationsInput | subscriptionsUpsertWithWhereUniqueWithoutOrganisationsInput[]
    createMany?: subscriptionsCreateManyOrganisationsInputEnvelope
    set?: subscriptionsWhereUniqueInput | subscriptionsWhereUniqueInput[]
    disconnect?: subscriptionsWhereUniqueInput | subscriptionsWhereUniqueInput[]
    delete?: subscriptionsWhereUniqueInput | subscriptionsWhereUniqueInput[]
    connect?: subscriptionsWhereUniqueInput | subscriptionsWhereUniqueInput[]
    update?: subscriptionsUpdateWithWhereUniqueWithoutOrganisationsInput | subscriptionsUpdateWithWhereUniqueWithoutOrganisationsInput[]
    updateMany?: subscriptionsUpdateManyWithWhereWithoutOrganisationsInput | subscriptionsUpdateManyWithWhereWithoutOrganisationsInput[]
    deleteMany?: subscriptionsScalarWhereInput | subscriptionsScalarWhereInput[]
  }

  export type usersUpdateManyWithoutOrganisationsNestedInput = {
    create?: XOR<usersCreateWithoutOrganisationsInput, usersUncheckedCreateWithoutOrganisationsInput> | usersCreateWithoutOrganisationsInput[] | usersUncheckedCreateWithoutOrganisationsInput[]
    connectOrCreate?: usersCreateOrConnectWithoutOrganisationsInput | usersCreateOrConnectWithoutOrganisationsInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutOrganisationsInput | usersUpsertWithWhereUniqueWithoutOrganisationsInput[]
    createMany?: usersCreateManyOrganisationsInputEnvelope
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutOrganisationsInput | usersUpdateWithWhereUniqueWithoutOrganisationsInput[]
    updateMany?: usersUpdateManyWithWhereWithoutOrganisationsInput | usersUpdateManyWithWhereWithoutOrganisationsInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type subscriptionsUncheckedUpdateManyWithoutOrganisationsNestedInput = {
    create?: XOR<subscriptionsCreateWithoutOrganisationsInput, subscriptionsUncheckedCreateWithoutOrganisationsInput> | subscriptionsCreateWithoutOrganisationsInput[] | subscriptionsUncheckedCreateWithoutOrganisationsInput[]
    connectOrCreate?: subscriptionsCreateOrConnectWithoutOrganisationsInput | subscriptionsCreateOrConnectWithoutOrganisationsInput[]
    upsert?: subscriptionsUpsertWithWhereUniqueWithoutOrganisationsInput | subscriptionsUpsertWithWhereUniqueWithoutOrganisationsInput[]
    createMany?: subscriptionsCreateManyOrganisationsInputEnvelope
    set?: subscriptionsWhereUniqueInput | subscriptionsWhereUniqueInput[]
    disconnect?: subscriptionsWhereUniqueInput | subscriptionsWhereUniqueInput[]
    delete?: subscriptionsWhereUniqueInput | subscriptionsWhereUniqueInput[]
    connect?: subscriptionsWhereUniqueInput | subscriptionsWhereUniqueInput[]
    update?: subscriptionsUpdateWithWhereUniqueWithoutOrganisationsInput | subscriptionsUpdateWithWhereUniqueWithoutOrganisationsInput[]
    updateMany?: subscriptionsUpdateManyWithWhereWithoutOrganisationsInput | subscriptionsUpdateManyWithWhereWithoutOrganisationsInput[]
    deleteMany?: subscriptionsScalarWhereInput | subscriptionsScalarWhereInput[]
  }

  export type usersUncheckedUpdateManyWithoutOrganisationsNestedInput = {
    create?: XOR<usersCreateWithoutOrganisationsInput, usersUncheckedCreateWithoutOrganisationsInput> | usersCreateWithoutOrganisationsInput[] | usersUncheckedCreateWithoutOrganisationsInput[]
    connectOrCreate?: usersCreateOrConnectWithoutOrganisationsInput | usersCreateOrConnectWithoutOrganisationsInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutOrganisationsInput | usersUpsertWithWhereUniqueWithoutOrganisationsInput[]
    createMany?: usersCreateManyOrganisationsInputEnvelope
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutOrganisationsInput | usersUpdateWithWhereUniqueWithoutOrganisationsInput[]
    updateMany?: usersUpdateManyWithWhereWithoutOrganisationsInput | usersUpdateManyWithWhereWithoutOrganisationsInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type featuresCreateNestedOneWithoutPlan_featuresInput = {
    create?: XOR<featuresCreateWithoutPlan_featuresInput, featuresUncheckedCreateWithoutPlan_featuresInput>
    connectOrCreate?: featuresCreateOrConnectWithoutPlan_featuresInput
    connect?: featuresWhereUniqueInput
  }

  export type plansCreateNestedOneWithoutPlan_featuresInput = {
    create?: XOR<plansCreateWithoutPlan_featuresInput, plansUncheckedCreateWithoutPlan_featuresInput>
    connectOrCreate?: plansCreateOrConnectWithoutPlan_featuresInput
    connect?: plansWhereUniqueInput
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type featuresUpdateOneWithoutPlan_featuresNestedInput = {
    create?: XOR<featuresCreateWithoutPlan_featuresInput, featuresUncheckedCreateWithoutPlan_featuresInput>
    connectOrCreate?: featuresCreateOrConnectWithoutPlan_featuresInput
    upsert?: featuresUpsertWithoutPlan_featuresInput
    disconnect?: featuresWhereInput | boolean
    delete?: featuresWhereInput | boolean
    connect?: featuresWhereUniqueInput
    update?: XOR<XOR<featuresUpdateToOneWithWhereWithoutPlan_featuresInput, featuresUpdateWithoutPlan_featuresInput>, featuresUncheckedUpdateWithoutPlan_featuresInput>
  }

  export type plansUpdateOneWithoutPlan_featuresNestedInput = {
    create?: XOR<plansCreateWithoutPlan_featuresInput, plansUncheckedCreateWithoutPlan_featuresInput>
    connectOrCreate?: plansCreateOrConnectWithoutPlan_featuresInput
    upsert?: plansUpsertWithoutPlan_featuresInput
    disconnect?: plansWhereInput | boolean
    delete?: plansWhereInput | boolean
    connect?: plansWhereUniqueInput
    update?: XOR<XOR<plansUpdateToOneWithWhereWithoutPlan_featuresInput, plansUpdateWithoutPlan_featuresInput>, plansUncheckedUpdateWithoutPlan_featuresInput>
  }

  export type plan_featuresCreateNestedManyWithoutPlansInput = {
    create?: XOR<plan_featuresCreateWithoutPlansInput, plan_featuresUncheckedCreateWithoutPlansInput> | plan_featuresCreateWithoutPlansInput[] | plan_featuresUncheckedCreateWithoutPlansInput[]
    connectOrCreate?: plan_featuresCreateOrConnectWithoutPlansInput | plan_featuresCreateOrConnectWithoutPlansInput[]
    createMany?: plan_featuresCreateManyPlansInputEnvelope
    connect?: plan_featuresWhereUniqueInput | plan_featuresWhereUniqueInput[]
  }

  export type subscriptionsCreateNestedManyWithoutPlansInput = {
    create?: XOR<subscriptionsCreateWithoutPlansInput, subscriptionsUncheckedCreateWithoutPlansInput> | subscriptionsCreateWithoutPlansInput[] | subscriptionsUncheckedCreateWithoutPlansInput[]
    connectOrCreate?: subscriptionsCreateOrConnectWithoutPlansInput | subscriptionsCreateOrConnectWithoutPlansInput[]
    createMany?: subscriptionsCreateManyPlansInputEnvelope
    connect?: subscriptionsWhereUniqueInput | subscriptionsWhereUniqueInput[]
  }

  export type plan_featuresUncheckedCreateNestedManyWithoutPlansInput = {
    create?: XOR<plan_featuresCreateWithoutPlansInput, plan_featuresUncheckedCreateWithoutPlansInput> | plan_featuresCreateWithoutPlansInput[] | plan_featuresUncheckedCreateWithoutPlansInput[]
    connectOrCreate?: plan_featuresCreateOrConnectWithoutPlansInput | plan_featuresCreateOrConnectWithoutPlansInput[]
    createMany?: plan_featuresCreateManyPlansInputEnvelope
    connect?: plan_featuresWhereUniqueInput | plan_featuresWhereUniqueInput[]
  }

  export type subscriptionsUncheckedCreateNestedManyWithoutPlansInput = {
    create?: XOR<subscriptionsCreateWithoutPlansInput, subscriptionsUncheckedCreateWithoutPlansInput> | subscriptionsCreateWithoutPlansInput[] | subscriptionsUncheckedCreateWithoutPlansInput[]
    connectOrCreate?: subscriptionsCreateOrConnectWithoutPlansInput | subscriptionsCreateOrConnectWithoutPlansInput[]
    createMany?: subscriptionsCreateManyPlansInputEnvelope
    connect?: subscriptionsWhereUniqueInput | subscriptionsWhereUniqueInput[]
  }

  export type plan_featuresUpdateManyWithoutPlansNestedInput = {
    create?: XOR<plan_featuresCreateWithoutPlansInput, plan_featuresUncheckedCreateWithoutPlansInput> | plan_featuresCreateWithoutPlansInput[] | plan_featuresUncheckedCreateWithoutPlansInput[]
    connectOrCreate?: plan_featuresCreateOrConnectWithoutPlansInput | plan_featuresCreateOrConnectWithoutPlansInput[]
    upsert?: plan_featuresUpsertWithWhereUniqueWithoutPlansInput | plan_featuresUpsertWithWhereUniqueWithoutPlansInput[]
    createMany?: plan_featuresCreateManyPlansInputEnvelope
    set?: plan_featuresWhereUniqueInput | plan_featuresWhereUniqueInput[]
    disconnect?: plan_featuresWhereUniqueInput | plan_featuresWhereUniqueInput[]
    delete?: plan_featuresWhereUniqueInput | plan_featuresWhereUniqueInput[]
    connect?: plan_featuresWhereUniqueInput | plan_featuresWhereUniqueInput[]
    update?: plan_featuresUpdateWithWhereUniqueWithoutPlansInput | plan_featuresUpdateWithWhereUniqueWithoutPlansInput[]
    updateMany?: plan_featuresUpdateManyWithWhereWithoutPlansInput | plan_featuresUpdateManyWithWhereWithoutPlansInput[]
    deleteMany?: plan_featuresScalarWhereInput | plan_featuresScalarWhereInput[]
  }

  export type subscriptionsUpdateManyWithoutPlansNestedInput = {
    create?: XOR<subscriptionsCreateWithoutPlansInput, subscriptionsUncheckedCreateWithoutPlansInput> | subscriptionsCreateWithoutPlansInput[] | subscriptionsUncheckedCreateWithoutPlansInput[]
    connectOrCreate?: subscriptionsCreateOrConnectWithoutPlansInput | subscriptionsCreateOrConnectWithoutPlansInput[]
    upsert?: subscriptionsUpsertWithWhereUniqueWithoutPlansInput | subscriptionsUpsertWithWhereUniqueWithoutPlansInput[]
    createMany?: subscriptionsCreateManyPlansInputEnvelope
    set?: subscriptionsWhereUniqueInput | subscriptionsWhereUniqueInput[]
    disconnect?: subscriptionsWhereUniqueInput | subscriptionsWhereUniqueInput[]
    delete?: subscriptionsWhereUniqueInput | subscriptionsWhereUniqueInput[]
    connect?: subscriptionsWhereUniqueInput | subscriptionsWhereUniqueInput[]
    update?: subscriptionsUpdateWithWhereUniqueWithoutPlansInput | subscriptionsUpdateWithWhereUniqueWithoutPlansInput[]
    updateMany?: subscriptionsUpdateManyWithWhereWithoutPlansInput | subscriptionsUpdateManyWithWhereWithoutPlansInput[]
    deleteMany?: subscriptionsScalarWhereInput | subscriptionsScalarWhereInput[]
  }

  export type plan_featuresUncheckedUpdateManyWithoutPlansNestedInput = {
    create?: XOR<plan_featuresCreateWithoutPlansInput, plan_featuresUncheckedCreateWithoutPlansInput> | plan_featuresCreateWithoutPlansInput[] | plan_featuresUncheckedCreateWithoutPlansInput[]
    connectOrCreate?: plan_featuresCreateOrConnectWithoutPlansInput | plan_featuresCreateOrConnectWithoutPlansInput[]
    upsert?: plan_featuresUpsertWithWhereUniqueWithoutPlansInput | plan_featuresUpsertWithWhereUniqueWithoutPlansInput[]
    createMany?: plan_featuresCreateManyPlansInputEnvelope
    set?: plan_featuresWhereUniqueInput | plan_featuresWhereUniqueInput[]
    disconnect?: plan_featuresWhereUniqueInput | plan_featuresWhereUniqueInput[]
    delete?: plan_featuresWhereUniqueInput | plan_featuresWhereUniqueInput[]
    connect?: plan_featuresWhereUniqueInput | plan_featuresWhereUniqueInput[]
    update?: plan_featuresUpdateWithWhereUniqueWithoutPlansInput | plan_featuresUpdateWithWhereUniqueWithoutPlansInput[]
    updateMany?: plan_featuresUpdateManyWithWhereWithoutPlansInput | plan_featuresUpdateManyWithWhereWithoutPlansInput[]
    deleteMany?: plan_featuresScalarWhereInput | plan_featuresScalarWhereInput[]
  }

  export type subscriptionsUncheckedUpdateManyWithoutPlansNestedInput = {
    create?: XOR<subscriptionsCreateWithoutPlansInput, subscriptionsUncheckedCreateWithoutPlansInput> | subscriptionsCreateWithoutPlansInput[] | subscriptionsUncheckedCreateWithoutPlansInput[]
    connectOrCreate?: subscriptionsCreateOrConnectWithoutPlansInput | subscriptionsCreateOrConnectWithoutPlansInput[]
    upsert?: subscriptionsUpsertWithWhereUniqueWithoutPlansInput | subscriptionsUpsertWithWhereUniqueWithoutPlansInput[]
    createMany?: subscriptionsCreateManyPlansInputEnvelope
    set?: subscriptionsWhereUniqueInput | subscriptionsWhereUniqueInput[]
    disconnect?: subscriptionsWhereUniqueInput | subscriptionsWhereUniqueInput[]
    delete?: subscriptionsWhereUniqueInput | subscriptionsWhereUniqueInput[]
    connect?: subscriptionsWhereUniqueInput | subscriptionsWhereUniqueInput[]
    update?: subscriptionsUpdateWithWhereUniqueWithoutPlansInput | subscriptionsUpdateWithWhereUniqueWithoutPlansInput[]
    updateMany?: subscriptionsUpdateManyWithWhereWithoutPlansInput | subscriptionsUpdateManyWithWhereWithoutPlansInput[]
    deleteMany?: subscriptionsScalarWhereInput | subscriptionsScalarWhereInput[]
  }

  export type organisationsCreateNestedOneWithoutSubscriptionsInput = {
    create?: XOR<organisationsCreateWithoutSubscriptionsInput, organisationsUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: organisationsCreateOrConnectWithoutSubscriptionsInput
    connect?: organisationsWhereUniqueInput
  }

  export type plansCreateNestedOneWithoutSubscriptionsInput = {
    create?: XOR<plansCreateWithoutSubscriptionsInput, plansUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: plansCreateOrConnectWithoutSubscriptionsInput
    connect?: plansWhereUniqueInput
  }

  export type NullableEnumsubscriptionstatusFieldUpdateOperationsInput = {
    set?: $Enums.subscriptionstatus | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type organisationsUpdateOneWithoutSubscriptionsNestedInput = {
    create?: XOR<organisationsCreateWithoutSubscriptionsInput, organisationsUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: organisationsCreateOrConnectWithoutSubscriptionsInput
    upsert?: organisationsUpsertWithoutSubscriptionsInput
    disconnect?: organisationsWhereInput | boolean
    delete?: organisationsWhereInput | boolean
    connect?: organisationsWhereUniqueInput
    update?: XOR<XOR<organisationsUpdateToOneWithWhereWithoutSubscriptionsInput, organisationsUpdateWithoutSubscriptionsInput>, organisationsUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type plansUpdateOneWithoutSubscriptionsNestedInput = {
    create?: XOR<plansCreateWithoutSubscriptionsInput, plansUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: plansCreateOrConnectWithoutSubscriptionsInput
    upsert?: plansUpsertWithoutSubscriptionsInput
    disconnect?: plansWhereInput | boolean
    delete?: plansWhereInput | boolean
    connect?: plansWhereUniqueInput
    update?: XOR<XOR<plansUpdateToOneWithWhereWithoutSubscriptionsInput, plansUpdateWithoutSubscriptionsInput>, plansUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type organisationsCreateNestedOneWithoutUsersInput = {
    create?: XOR<organisationsCreateWithoutUsersInput, organisationsUncheckedCreateWithoutUsersInput>
    connectOrCreate?: organisationsCreateOrConnectWithoutUsersInput
    connect?: organisationsWhereUniqueInput
  }

  export type NullableEnumusertypeFieldUpdateOperationsInput = {
    set?: $Enums.usertype | null
  }

  export type organisationsUpdateOneWithoutUsersNestedInput = {
    create?: XOR<organisationsCreateWithoutUsersInput, organisationsUncheckedCreateWithoutUsersInput>
    connectOrCreate?: organisationsCreateOrConnectWithoutUsersInput
    upsert?: organisationsUpsertWithoutUsersInput
    disconnect?: organisationsWhereInput | boolean
    delete?: organisationsWhereInput | boolean
    connect?: organisationsWhereUniqueInput
    update?: XOR<XOR<organisationsUpdateToOneWithWhereWithoutUsersInput, organisationsUpdateWithoutUsersInput>, organisationsUncheckedUpdateWithoutUsersInput>
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

  export type NestedEnumfeatureinputtypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.featureinputtype | EnumfeatureinputtypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.featureinputtype[] | ListEnumfeatureinputtypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.featureinputtype[] | ListEnumfeatureinputtypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumfeatureinputtypeNullableFilter<$PrismaModel> | $Enums.featureinputtype | null
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

  export type NestedEnumfeatureinputtypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.featureinputtype | EnumfeatureinputtypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.featureinputtype[] | ListEnumfeatureinputtypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.featureinputtype[] | ListEnumfeatureinputtypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumfeatureinputtypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.featureinputtype | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumfeatureinputtypeNullableFilter<$PrismaModel>
    _max?: NestedEnumfeatureinputtypeNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
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

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedEnumsubscriptionstatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.subscriptionstatus | EnumsubscriptionstatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.subscriptionstatus[] | ListEnumsubscriptionstatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.subscriptionstatus[] | ListEnumsubscriptionstatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumsubscriptionstatusNullableFilter<$PrismaModel> | $Enums.subscriptionstatus | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumsubscriptionstatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.subscriptionstatus | EnumsubscriptionstatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.subscriptionstatus[] | ListEnumsubscriptionstatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.subscriptionstatus[] | ListEnumsubscriptionstatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumsubscriptionstatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.subscriptionstatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumsubscriptionstatusNullableFilter<$PrismaModel>
    _max?: NestedEnumsubscriptionstatusNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumusertypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.usertype | EnumusertypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.usertype[] | ListEnumusertypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.usertype[] | ListEnumusertypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumusertypeNullableFilter<$PrismaModel> | $Enums.usertype | null
  }

  export type NestedEnumusertypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.usertype | EnumusertypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.usertype[] | ListEnumusertypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.usertype[] | ListEnumusertypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumusertypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.usertype | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumusertypeNullableFilter<$PrismaModel>
    _max?: NestedEnumusertypeNullableFilter<$PrismaModel>
  }

  export type featuresCreateWithoutFeature_categoriesInput = {
    feature_value?: string | null
    feature_key?: string | null
    feature_input_type?: $Enums.featureinputtype | null
    plan_features?: plan_featuresCreateNestedManyWithoutFeaturesInput
  }

  export type featuresUncheckedCreateWithoutFeature_categoriesInput = {
    feature_id?: number
    feature_value?: string | null
    feature_key?: string | null
    feature_input_type?: $Enums.featureinputtype | null
    plan_features?: plan_featuresUncheckedCreateNestedManyWithoutFeaturesInput
  }

  export type featuresCreateOrConnectWithoutFeature_categoriesInput = {
    where: featuresWhereUniqueInput
    create: XOR<featuresCreateWithoutFeature_categoriesInput, featuresUncheckedCreateWithoutFeature_categoriesInput>
  }

  export type featuresCreateManyFeature_categoriesInputEnvelope = {
    data: featuresCreateManyFeature_categoriesInput | featuresCreateManyFeature_categoriesInput[]
    skipDuplicates?: boolean
  }

  export type featuresUpsertWithWhereUniqueWithoutFeature_categoriesInput = {
    where: featuresWhereUniqueInput
    update: XOR<featuresUpdateWithoutFeature_categoriesInput, featuresUncheckedUpdateWithoutFeature_categoriesInput>
    create: XOR<featuresCreateWithoutFeature_categoriesInput, featuresUncheckedCreateWithoutFeature_categoriesInput>
  }

  export type featuresUpdateWithWhereUniqueWithoutFeature_categoriesInput = {
    where: featuresWhereUniqueInput
    data: XOR<featuresUpdateWithoutFeature_categoriesInput, featuresUncheckedUpdateWithoutFeature_categoriesInput>
  }

  export type featuresUpdateManyWithWhereWithoutFeature_categoriesInput = {
    where: featuresScalarWhereInput
    data: XOR<featuresUpdateManyMutationInput, featuresUncheckedUpdateManyWithoutFeature_categoriesInput>
  }

  export type featuresScalarWhereInput = {
    AND?: featuresScalarWhereInput | featuresScalarWhereInput[]
    OR?: featuresScalarWhereInput[]
    NOT?: featuresScalarWhereInput | featuresScalarWhereInput[]
    feature_id?: IntFilter<"features"> | number
    category_id?: IntFilter<"features"> | number
    feature_value?: StringNullableFilter<"features"> | string | null
    feature_key?: StringNullableFilter<"features"> | string | null
    feature_input_type?: EnumfeatureinputtypeNullableFilter<"features"> | $Enums.featureinputtype | null
  }

  export type feature_categoriesCreateWithoutFeaturesInput = {
    feature_category_name: string
  }

  export type feature_categoriesUncheckedCreateWithoutFeaturesInput = {
    feature_category_id?: number
    feature_category_name: string
  }

  export type feature_categoriesCreateOrConnectWithoutFeaturesInput = {
    where: feature_categoriesWhereUniqueInput
    create: XOR<feature_categoriesCreateWithoutFeaturesInput, feature_categoriesUncheckedCreateWithoutFeaturesInput>
  }

  export type plan_featuresCreateWithoutFeaturesInput = {
    boolean_value?: boolean | null
    text_value?: string | null
    numeric_value?: number | null
    plans?: plansCreateNestedOneWithoutPlan_featuresInput
  }

  export type plan_featuresUncheckedCreateWithoutFeaturesInput = {
    plan_feature_id?: number
    plan_id?: number | null
    boolean_value?: boolean | null
    text_value?: string | null
    numeric_value?: number | null
  }

  export type plan_featuresCreateOrConnectWithoutFeaturesInput = {
    where: plan_featuresWhereUniqueInput
    create: XOR<plan_featuresCreateWithoutFeaturesInput, plan_featuresUncheckedCreateWithoutFeaturesInput>
  }

  export type plan_featuresCreateManyFeaturesInputEnvelope = {
    data: plan_featuresCreateManyFeaturesInput | plan_featuresCreateManyFeaturesInput[]
    skipDuplicates?: boolean
  }

  export type feature_categoriesUpsertWithoutFeaturesInput = {
    update: XOR<feature_categoriesUpdateWithoutFeaturesInput, feature_categoriesUncheckedUpdateWithoutFeaturesInput>
    create: XOR<feature_categoriesCreateWithoutFeaturesInput, feature_categoriesUncheckedCreateWithoutFeaturesInput>
    where?: feature_categoriesWhereInput
  }

  export type feature_categoriesUpdateToOneWithWhereWithoutFeaturesInput = {
    where?: feature_categoriesWhereInput
    data: XOR<feature_categoriesUpdateWithoutFeaturesInput, feature_categoriesUncheckedUpdateWithoutFeaturesInput>
  }

  export type feature_categoriesUpdateWithoutFeaturesInput = {
    feature_category_name?: StringFieldUpdateOperationsInput | string
  }

  export type feature_categoriesUncheckedUpdateWithoutFeaturesInput = {
    feature_category_id?: IntFieldUpdateOperationsInput | number
    feature_category_name?: StringFieldUpdateOperationsInput | string
  }

  export type plan_featuresUpsertWithWhereUniqueWithoutFeaturesInput = {
    where: plan_featuresWhereUniqueInput
    update: XOR<plan_featuresUpdateWithoutFeaturesInput, plan_featuresUncheckedUpdateWithoutFeaturesInput>
    create: XOR<plan_featuresCreateWithoutFeaturesInput, plan_featuresUncheckedCreateWithoutFeaturesInput>
  }

  export type plan_featuresUpdateWithWhereUniqueWithoutFeaturesInput = {
    where: plan_featuresWhereUniqueInput
    data: XOR<plan_featuresUpdateWithoutFeaturesInput, plan_featuresUncheckedUpdateWithoutFeaturesInput>
  }

  export type plan_featuresUpdateManyWithWhereWithoutFeaturesInput = {
    where: plan_featuresScalarWhereInput
    data: XOR<plan_featuresUpdateManyMutationInput, plan_featuresUncheckedUpdateManyWithoutFeaturesInput>
  }

  export type plan_featuresScalarWhereInput = {
    AND?: plan_featuresScalarWhereInput | plan_featuresScalarWhereInput[]
    OR?: plan_featuresScalarWhereInput[]
    NOT?: plan_featuresScalarWhereInput | plan_featuresScalarWhereInput[]
    plan_feature_id?: IntFilter<"plan_features"> | number
    plan_id?: IntNullableFilter<"plan_features"> | number | null
    feature_id?: IntNullableFilter<"plan_features"> | number | null
    boolean_value?: BoolNullableFilter<"plan_features"> | boolean | null
    text_value?: StringNullableFilter<"plan_features"> | string | null
    numeric_value?: IntNullableFilter<"plan_features"> | number | null
  }

  export type subscriptionsCreateWithoutOrganisationsInput = {
    status?: $Enums.subscriptionstatus | null
    start_date?: Date | string | null
    end_date?: Date | string | null
    plans?: plansCreateNestedOneWithoutSubscriptionsInput
  }

  export type subscriptionsUncheckedCreateWithoutOrganisationsInput = {
    subscription_id?: number
    plan_id?: number | null
    status?: $Enums.subscriptionstatus | null
    start_date?: Date | string | null
    end_date?: Date | string | null
  }

  export type subscriptionsCreateOrConnectWithoutOrganisationsInput = {
    where: subscriptionsWhereUniqueInput
    create: XOR<subscriptionsCreateWithoutOrganisationsInput, subscriptionsUncheckedCreateWithoutOrganisationsInput>
  }

  export type subscriptionsCreateManyOrganisationsInputEnvelope = {
    data: subscriptionsCreateManyOrganisationsInput | subscriptionsCreateManyOrganisationsInput[]
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutOrganisationsInput = {
    name?: string | null
    user_type?: $Enums.usertype | null
    is_system_generated?: boolean | null
    is_active?: boolean | null
  }

  export type usersUncheckedCreateWithoutOrganisationsInput = {
    user_id?: number
    name?: string | null
    user_type?: $Enums.usertype | null
    is_system_generated?: boolean | null
    is_active?: boolean | null
  }

  export type usersCreateOrConnectWithoutOrganisationsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutOrganisationsInput, usersUncheckedCreateWithoutOrganisationsInput>
  }

  export type usersCreateManyOrganisationsInputEnvelope = {
    data: usersCreateManyOrganisationsInput | usersCreateManyOrganisationsInput[]
    skipDuplicates?: boolean
  }

  export type subscriptionsUpsertWithWhereUniqueWithoutOrganisationsInput = {
    where: subscriptionsWhereUniqueInput
    update: XOR<subscriptionsUpdateWithoutOrganisationsInput, subscriptionsUncheckedUpdateWithoutOrganisationsInput>
    create: XOR<subscriptionsCreateWithoutOrganisationsInput, subscriptionsUncheckedCreateWithoutOrganisationsInput>
  }

  export type subscriptionsUpdateWithWhereUniqueWithoutOrganisationsInput = {
    where: subscriptionsWhereUniqueInput
    data: XOR<subscriptionsUpdateWithoutOrganisationsInput, subscriptionsUncheckedUpdateWithoutOrganisationsInput>
  }

  export type subscriptionsUpdateManyWithWhereWithoutOrganisationsInput = {
    where: subscriptionsScalarWhereInput
    data: XOR<subscriptionsUpdateManyMutationInput, subscriptionsUncheckedUpdateManyWithoutOrganisationsInput>
  }

  export type subscriptionsScalarWhereInput = {
    AND?: subscriptionsScalarWhereInput | subscriptionsScalarWhereInput[]
    OR?: subscriptionsScalarWhereInput[]
    NOT?: subscriptionsScalarWhereInput | subscriptionsScalarWhereInput[]
    subscription_id?: IntFilter<"subscriptions"> | number
    organisation_id?: IntNullableFilter<"subscriptions"> | number | null
    plan_id?: IntNullableFilter<"subscriptions"> | number | null
    status?: EnumsubscriptionstatusNullableFilter<"subscriptions"> | $Enums.subscriptionstatus | null
    start_date?: DateTimeNullableFilter<"subscriptions"> | Date | string | null
    end_date?: DateTimeNullableFilter<"subscriptions"> | Date | string | null
  }

  export type usersUpsertWithWhereUniqueWithoutOrganisationsInput = {
    where: usersWhereUniqueInput
    update: XOR<usersUpdateWithoutOrganisationsInput, usersUncheckedUpdateWithoutOrganisationsInput>
    create: XOR<usersCreateWithoutOrganisationsInput, usersUncheckedCreateWithoutOrganisationsInput>
  }

  export type usersUpdateWithWhereUniqueWithoutOrganisationsInput = {
    where: usersWhereUniqueInput
    data: XOR<usersUpdateWithoutOrganisationsInput, usersUncheckedUpdateWithoutOrganisationsInput>
  }

  export type usersUpdateManyWithWhereWithoutOrganisationsInput = {
    where: usersScalarWhereInput
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyWithoutOrganisationsInput>
  }

  export type usersScalarWhereInput = {
    AND?: usersScalarWhereInput | usersScalarWhereInput[]
    OR?: usersScalarWhereInput[]
    NOT?: usersScalarWhereInput | usersScalarWhereInput[]
    user_id?: IntFilter<"users"> | number
    name?: StringNullableFilter<"users"> | string | null
    organisation_id?: IntNullableFilter<"users"> | number | null
    user_type?: EnumusertypeNullableFilter<"users"> | $Enums.usertype | null
    is_system_generated?: BoolNullableFilter<"users"> | boolean | null
    is_active?: BoolNullableFilter<"users"> | boolean | null
  }

  export type featuresCreateWithoutPlan_featuresInput = {
    feature_value?: string | null
    feature_key?: string | null
    feature_input_type?: $Enums.featureinputtype | null
    feature_categories: feature_categoriesCreateNestedOneWithoutFeaturesInput
  }

  export type featuresUncheckedCreateWithoutPlan_featuresInput = {
    feature_id?: number
    category_id: number
    feature_value?: string | null
    feature_key?: string | null
    feature_input_type?: $Enums.featureinputtype | null
  }

  export type featuresCreateOrConnectWithoutPlan_featuresInput = {
    where: featuresWhereUniqueInput
    create: XOR<featuresCreateWithoutPlan_featuresInput, featuresUncheckedCreateWithoutPlan_featuresInput>
  }

  export type plansCreateWithoutPlan_featuresInput = {
    plan_name?: string | null
    price_monthly?: number | null
    price_yearly?: number | null
    userlimit?: number | null
    description?: string | null
    subscriptions?: subscriptionsCreateNestedManyWithoutPlansInput
  }

  export type plansUncheckedCreateWithoutPlan_featuresInput = {
    plan_id?: number
    plan_name?: string | null
    price_monthly?: number | null
    price_yearly?: number | null
    userlimit?: number | null
    description?: string | null
    subscriptions?: subscriptionsUncheckedCreateNestedManyWithoutPlansInput
  }

  export type plansCreateOrConnectWithoutPlan_featuresInput = {
    where: plansWhereUniqueInput
    create: XOR<plansCreateWithoutPlan_featuresInput, plansUncheckedCreateWithoutPlan_featuresInput>
  }

  export type featuresUpsertWithoutPlan_featuresInput = {
    update: XOR<featuresUpdateWithoutPlan_featuresInput, featuresUncheckedUpdateWithoutPlan_featuresInput>
    create: XOR<featuresCreateWithoutPlan_featuresInput, featuresUncheckedCreateWithoutPlan_featuresInput>
    where?: featuresWhereInput
  }

  export type featuresUpdateToOneWithWhereWithoutPlan_featuresInput = {
    where?: featuresWhereInput
    data: XOR<featuresUpdateWithoutPlan_featuresInput, featuresUncheckedUpdateWithoutPlan_featuresInput>
  }

  export type featuresUpdateWithoutPlan_featuresInput = {
    feature_value?: NullableStringFieldUpdateOperationsInput | string | null
    feature_key?: NullableStringFieldUpdateOperationsInput | string | null
    feature_input_type?: NullableEnumfeatureinputtypeFieldUpdateOperationsInput | $Enums.featureinputtype | null
    feature_categories?: feature_categoriesUpdateOneRequiredWithoutFeaturesNestedInput
  }

  export type featuresUncheckedUpdateWithoutPlan_featuresInput = {
    feature_id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    feature_value?: NullableStringFieldUpdateOperationsInput | string | null
    feature_key?: NullableStringFieldUpdateOperationsInput | string | null
    feature_input_type?: NullableEnumfeatureinputtypeFieldUpdateOperationsInput | $Enums.featureinputtype | null
  }

  export type plansUpsertWithoutPlan_featuresInput = {
    update: XOR<plansUpdateWithoutPlan_featuresInput, plansUncheckedUpdateWithoutPlan_featuresInput>
    create: XOR<plansCreateWithoutPlan_featuresInput, plansUncheckedCreateWithoutPlan_featuresInput>
    where?: plansWhereInput
  }

  export type plansUpdateToOneWithWhereWithoutPlan_featuresInput = {
    where?: plansWhereInput
    data: XOR<plansUpdateWithoutPlan_featuresInput, plansUncheckedUpdateWithoutPlan_featuresInput>
  }

  export type plansUpdateWithoutPlan_featuresInput = {
    plan_name?: NullableStringFieldUpdateOperationsInput | string | null
    price_monthly?: NullableIntFieldUpdateOperationsInput | number | null
    price_yearly?: NullableIntFieldUpdateOperationsInput | number | null
    userlimit?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptions?: subscriptionsUpdateManyWithoutPlansNestedInput
  }

  export type plansUncheckedUpdateWithoutPlan_featuresInput = {
    plan_id?: IntFieldUpdateOperationsInput | number
    plan_name?: NullableStringFieldUpdateOperationsInput | string | null
    price_monthly?: NullableIntFieldUpdateOperationsInput | number | null
    price_yearly?: NullableIntFieldUpdateOperationsInput | number | null
    userlimit?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptions?: subscriptionsUncheckedUpdateManyWithoutPlansNestedInput
  }

  export type plan_featuresCreateWithoutPlansInput = {
    boolean_value?: boolean | null
    text_value?: string | null
    numeric_value?: number | null
    features?: featuresCreateNestedOneWithoutPlan_featuresInput
  }

  export type plan_featuresUncheckedCreateWithoutPlansInput = {
    plan_feature_id?: number
    feature_id?: number | null
    boolean_value?: boolean | null
    text_value?: string | null
    numeric_value?: number | null
  }

  export type plan_featuresCreateOrConnectWithoutPlansInput = {
    where: plan_featuresWhereUniqueInput
    create: XOR<plan_featuresCreateWithoutPlansInput, plan_featuresUncheckedCreateWithoutPlansInput>
  }

  export type plan_featuresCreateManyPlansInputEnvelope = {
    data: plan_featuresCreateManyPlansInput | plan_featuresCreateManyPlansInput[]
    skipDuplicates?: boolean
  }

  export type subscriptionsCreateWithoutPlansInput = {
    status?: $Enums.subscriptionstatus | null
    start_date?: Date | string | null
    end_date?: Date | string | null
    organisations?: organisationsCreateNestedOneWithoutSubscriptionsInput
  }

  export type subscriptionsUncheckedCreateWithoutPlansInput = {
    subscription_id?: number
    organisation_id?: number | null
    status?: $Enums.subscriptionstatus | null
    start_date?: Date | string | null
    end_date?: Date | string | null
  }

  export type subscriptionsCreateOrConnectWithoutPlansInput = {
    where: subscriptionsWhereUniqueInput
    create: XOR<subscriptionsCreateWithoutPlansInput, subscriptionsUncheckedCreateWithoutPlansInput>
  }

  export type subscriptionsCreateManyPlansInputEnvelope = {
    data: subscriptionsCreateManyPlansInput | subscriptionsCreateManyPlansInput[]
    skipDuplicates?: boolean
  }

  export type plan_featuresUpsertWithWhereUniqueWithoutPlansInput = {
    where: plan_featuresWhereUniqueInput
    update: XOR<plan_featuresUpdateWithoutPlansInput, plan_featuresUncheckedUpdateWithoutPlansInput>
    create: XOR<plan_featuresCreateWithoutPlansInput, plan_featuresUncheckedCreateWithoutPlansInput>
  }

  export type plan_featuresUpdateWithWhereUniqueWithoutPlansInput = {
    where: plan_featuresWhereUniqueInput
    data: XOR<plan_featuresUpdateWithoutPlansInput, plan_featuresUncheckedUpdateWithoutPlansInput>
  }

  export type plan_featuresUpdateManyWithWhereWithoutPlansInput = {
    where: plan_featuresScalarWhereInput
    data: XOR<plan_featuresUpdateManyMutationInput, plan_featuresUncheckedUpdateManyWithoutPlansInput>
  }

  export type subscriptionsUpsertWithWhereUniqueWithoutPlansInput = {
    where: subscriptionsWhereUniqueInput
    update: XOR<subscriptionsUpdateWithoutPlansInput, subscriptionsUncheckedUpdateWithoutPlansInput>
    create: XOR<subscriptionsCreateWithoutPlansInput, subscriptionsUncheckedCreateWithoutPlansInput>
  }

  export type subscriptionsUpdateWithWhereUniqueWithoutPlansInput = {
    where: subscriptionsWhereUniqueInput
    data: XOR<subscriptionsUpdateWithoutPlansInput, subscriptionsUncheckedUpdateWithoutPlansInput>
  }

  export type subscriptionsUpdateManyWithWhereWithoutPlansInput = {
    where: subscriptionsScalarWhereInput
    data: XOR<subscriptionsUpdateManyMutationInput, subscriptionsUncheckedUpdateManyWithoutPlansInput>
  }

  export type organisationsCreateWithoutSubscriptionsInput = {
    organisation_name: string
    users?: usersCreateNestedManyWithoutOrganisationsInput
  }

  export type organisationsUncheckedCreateWithoutSubscriptionsInput = {
    organisation_id?: number
    organisation_name: string
    users?: usersUncheckedCreateNestedManyWithoutOrganisationsInput
  }

  export type organisationsCreateOrConnectWithoutSubscriptionsInput = {
    where: organisationsWhereUniqueInput
    create: XOR<organisationsCreateWithoutSubscriptionsInput, organisationsUncheckedCreateWithoutSubscriptionsInput>
  }

  export type plansCreateWithoutSubscriptionsInput = {
    plan_name?: string | null
    price_monthly?: number | null
    price_yearly?: number | null
    userlimit?: number | null
    description?: string | null
    plan_features?: plan_featuresCreateNestedManyWithoutPlansInput
  }

  export type plansUncheckedCreateWithoutSubscriptionsInput = {
    plan_id?: number
    plan_name?: string | null
    price_monthly?: number | null
    price_yearly?: number | null
    userlimit?: number | null
    description?: string | null
    plan_features?: plan_featuresUncheckedCreateNestedManyWithoutPlansInput
  }

  export type plansCreateOrConnectWithoutSubscriptionsInput = {
    where: plansWhereUniqueInput
    create: XOR<plansCreateWithoutSubscriptionsInput, plansUncheckedCreateWithoutSubscriptionsInput>
  }

  export type organisationsUpsertWithoutSubscriptionsInput = {
    update: XOR<organisationsUpdateWithoutSubscriptionsInput, organisationsUncheckedUpdateWithoutSubscriptionsInput>
    create: XOR<organisationsCreateWithoutSubscriptionsInput, organisationsUncheckedCreateWithoutSubscriptionsInput>
    where?: organisationsWhereInput
  }

  export type organisationsUpdateToOneWithWhereWithoutSubscriptionsInput = {
    where?: organisationsWhereInput
    data: XOR<organisationsUpdateWithoutSubscriptionsInput, organisationsUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type organisationsUpdateWithoutSubscriptionsInput = {
    organisation_name?: StringFieldUpdateOperationsInput | string
    users?: usersUpdateManyWithoutOrganisationsNestedInput
  }

  export type organisationsUncheckedUpdateWithoutSubscriptionsInput = {
    organisation_id?: IntFieldUpdateOperationsInput | number
    organisation_name?: StringFieldUpdateOperationsInput | string
    users?: usersUncheckedUpdateManyWithoutOrganisationsNestedInput
  }

  export type plansUpsertWithoutSubscriptionsInput = {
    update: XOR<plansUpdateWithoutSubscriptionsInput, plansUncheckedUpdateWithoutSubscriptionsInput>
    create: XOR<plansCreateWithoutSubscriptionsInput, plansUncheckedCreateWithoutSubscriptionsInput>
    where?: plansWhereInput
  }

  export type plansUpdateToOneWithWhereWithoutSubscriptionsInput = {
    where?: plansWhereInput
    data: XOR<plansUpdateWithoutSubscriptionsInput, plansUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type plansUpdateWithoutSubscriptionsInput = {
    plan_name?: NullableStringFieldUpdateOperationsInput | string | null
    price_monthly?: NullableIntFieldUpdateOperationsInput | number | null
    price_yearly?: NullableIntFieldUpdateOperationsInput | number | null
    userlimit?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    plan_features?: plan_featuresUpdateManyWithoutPlansNestedInput
  }

  export type plansUncheckedUpdateWithoutSubscriptionsInput = {
    plan_id?: IntFieldUpdateOperationsInput | number
    plan_name?: NullableStringFieldUpdateOperationsInput | string | null
    price_monthly?: NullableIntFieldUpdateOperationsInput | number | null
    price_yearly?: NullableIntFieldUpdateOperationsInput | number | null
    userlimit?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    plan_features?: plan_featuresUncheckedUpdateManyWithoutPlansNestedInput
  }

  export type organisationsCreateWithoutUsersInput = {
    organisation_name: string
    subscriptions?: subscriptionsCreateNestedManyWithoutOrganisationsInput
  }

  export type organisationsUncheckedCreateWithoutUsersInput = {
    organisation_id?: number
    organisation_name: string
    subscriptions?: subscriptionsUncheckedCreateNestedManyWithoutOrganisationsInput
  }

  export type organisationsCreateOrConnectWithoutUsersInput = {
    where: organisationsWhereUniqueInput
    create: XOR<organisationsCreateWithoutUsersInput, organisationsUncheckedCreateWithoutUsersInput>
  }

  export type organisationsUpsertWithoutUsersInput = {
    update: XOR<organisationsUpdateWithoutUsersInput, organisationsUncheckedUpdateWithoutUsersInput>
    create: XOR<organisationsCreateWithoutUsersInput, organisationsUncheckedCreateWithoutUsersInput>
    where?: organisationsWhereInput
  }

  export type organisationsUpdateToOneWithWhereWithoutUsersInput = {
    where?: organisationsWhereInput
    data: XOR<organisationsUpdateWithoutUsersInput, organisationsUncheckedUpdateWithoutUsersInput>
  }

  export type organisationsUpdateWithoutUsersInput = {
    organisation_name?: StringFieldUpdateOperationsInput | string
    subscriptions?: subscriptionsUpdateManyWithoutOrganisationsNestedInput
  }

  export type organisationsUncheckedUpdateWithoutUsersInput = {
    organisation_id?: IntFieldUpdateOperationsInput | number
    organisation_name?: StringFieldUpdateOperationsInput | string
    subscriptions?: subscriptionsUncheckedUpdateManyWithoutOrganisationsNestedInput
  }

  export type featuresCreateManyFeature_categoriesInput = {
    feature_id?: number
    feature_value?: string | null
    feature_key?: string | null
    feature_input_type?: $Enums.featureinputtype | null
  }

  export type featuresUpdateWithoutFeature_categoriesInput = {
    feature_value?: NullableStringFieldUpdateOperationsInput | string | null
    feature_key?: NullableStringFieldUpdateOperationsInput | string | null
    feature_input_type?: NullableEnumfeatureinputtypeFieldUpdateOperationsInput | $Enums.featureinputtype | null
    plan_features?: plan_featuresUpdateManyWithoutFeaturesNestedInput
  }

  export type featuresUncheckedUpdateWithoutFeature_categoriesInput = {
    feature_id?: IntFieldUpdateOperationsInput | number
    feature_value?: NullableStringFieldUpdateOperationsInput | string | null
    feature_key?: NullableStringFieldUpdateOperationsInput | string | null
    feature_input_type?: NullableEnumfeatureinputtypeFieldUpdateOperationsInput | $Enums.featureinputtype | null
    plan_features?: plan_featuresUncheckedUpdateManyWithoutFeaturesNestedInput
  }

  export type featuresUncheckedUpdateManyWithoutFeature_categoriesInput = {
    feature_id?: IntFieldUpdateOperationsInput | number
    feature_value?: NullableStringFieldUpdateOperationsInput | string | null
    feature_key?: NullableStringFieldUpdateOperationsInput | string | null
    feature_input_type?: NullableEnumfeatureinputtypeFieldUpdateOperationsInput | $Enums.featureinputtype | null
  }

  export type plan_featuresCreateManyFeaturesInput = {
    plan_feature_id?: number
    plan_id?: number | null
    boolean_value?: boolean | null
    text_value?: string | null
    numeric_value?: number | null
  }

  export type plan_featuresUpdateWithoutFeaturesInput = {
    boolean_value?: NullableBoolFieldUpdateOperationsInput | boolean | null
    text_value?: NullableStringFieldUpdateOperationsInput | string | null
    numeric_value?: NullableIntFieldUpdateOperationsInput | number | null
    plans?: plansUpdateOneWithoutPlan_featuresNestedInput
  }

  export type plan_featuresUncheckedUpdateWithoutFeaturesInput = {
    plan_feature_id?: IntFieldUpdateOperationsInput | number
    plan_id?: NullableIntFieldUpdateOperationsInput | number | null
    boolean_value?: NullableBoolFieldUpdateOperationsInput | boolean | null
    text_value?: NullableStringFieldUpdateOperationsInput | string | null
    numeric_value?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type plan_featuresUncheckedUpdateManyWithoutFeaturesInput = {
    plan_feature_id?: IntFieldUpdateOperationsInput | number
    plan_id?: NullableIntFieldUpdateOperationsInput | number | null
    boolean_value?: NullableBoolFieldUpdateOperationsInput | boolean | null
    text_value?: NullableStringFieldUpdateOperationsInput | string | null
    numeric_value?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type subscriptionsCreateManyOrganisationsInput = {
    subscription_id?: number
    plan_id?: number | null
    status?: $Enums.subscriptionstatus | null
    start_date?: Date | string | null
    end_date?: Date | string | null
  }

  export type usersCreateManyOrganisationsInput = {
    user_id?: number
    name?: string | null
    user_type?: $Enums.usertype | null
    is_system_generated?: boolean | null
    is_active?: boolean | null
  }

  export type subscriptionsUpdateWithoutOrganisationsInput = {
    status?: NullableEnumsubscriptionstatusFieldUpdateOperationsInput | $Enums.subscriptionstatus | null
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    plans?: plansUpdateOneWithoutSubscriptionsNestedInput
  }

  export type subscriptionsUncheckedUpdateWithoutOrganisationsInput = {
    subscription_id?: IntFieldUpdateOperationsInput | number
    plan_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableEnumsubscriptionstatusFieldUpdateOperationsInput | $Enums.subscriptionstatus | null
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type subscriptionsUncheckedUpdateManyWithoutOrganisationsInput = {
    subscription_id?: IntFieldUpdateOperationsInput | number
    plan_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableEnumsubscriptionstatusFieldUpdateOperationsInput | $Enums.subscriptionstatus | null
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUpdateWithoutOrganisationsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    user_type?: NullableEnumusertypeFieldUpdateOperationsInput | $Enums.usertype | null
    is_system_generated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type usersUncheckedUpdateWithoutOrganisationsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    user_type?: NullableEnumusertypeFieldUpdateOperationsInput | $Enums.usertype | null
    is_system_generated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type usersUncheckedUpdateManyWithoutOrganisationsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    user_type?: NullableEnumusertypeFieldUpdateOperationsInput | $Enums.usertype | null
    is_system_generated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type plan_featuresCreateManyPlansInput = {
    plan_feature_id?: number
    feature_id?: number | null
    boolean_value?: boolean | null
    text_value?: string | null
    numeric_value?: number | null
  }

  export type subscriptionsCreateManyPlansInput = {
    subscription_id?: number
    organisation_id?: number | null
    status?: $Enums.subscriptionstatus | null
    start_date?: Date | string | null
    end_date?: Date | string | null
  }

  export type plan_featuresUpdateWithoutPlansInput = {
    boolean_value?: NullableBoolFieldUpdateOperationsInput | boolean | null
    text_value?: NullableStringFieldUpdateOperationsInput | string | null
    numeric_value?: NullableIntFieldUpdateOperationsInput | number | null
    features?: featuresUpdateOneWithoutPlan_featuresNestedInput
  }

  export type plan_featuresUncheckedUpdateWithoutPlansInput = {
    plan_feature_id?: IntFieldUpdateOperationsInput | number
    feature_id?: NullableIntFieldUpdateOperationsInput | number | null
    boolean_value?: NullableBoolFieldUpdateOperationsInput | boolean | null
    text_value?: NullableStringFieldUpdateOperationsInput | string | null
    numeric_value?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type plan_featuresUncheckedUpdateManyWithoutPlansInput = {
    plan_feature_id?: IntFieldUpdateOperationsInput | number
    feature_id?: NullableIntFieldUpdateOperationsInput | number | null
    boolean_value?: NullableBoolFieldUpdateOperationsInput | boolean | null
    text_value?: NullableStringFieldUpdateOperationsInput | string | null
    numeric_value?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type subscriptionsUpdateWithoutPlansInput = {
    status?: NullableEnumsubscriptionstatusFieldUpdateOperationsInput | $Enums.subscriptionstatus | null
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    organisations?: organisationsUpdateOneWithoutSubscriptionsNestedInput
  }

  export type subscriptionsUncheckedUpdateWithoutPlansInput = {
    subscription_id?: IntFieldUpdateOperationsInput | number
    organisation_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableEnumsubscriptionstatusFieldUpdateOperationsInput | $Enums.subscriptionstatus | null
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type subscriptionsUncheckedUpdateManyWithoutPlansInput = {
    subscription_id?: IntFieldUpdateOperationsInput | number
    organisation_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableEnumsubscriptionstatusFieldUpdateOperationsInput | $Enums.subscriptionstatus | null
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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
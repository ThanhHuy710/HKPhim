
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
 * Model cart
 * 
 */
export type cart = $Result.DefaultSelection<Prisma.$cartPayload>
/**
 * Model episodes
 * 
 */
export type episodes = $Result.DefaultSelection<Prisma.$episodesPayload>
/**
 * Model favorites
 * 
 */
export type favorites = $Result.DefaultSelection<Prisma.$favoritesPayload>
/**
 * Model feedbacks
 * 
 */
export type feedbacks = $Result.DefaultSelection<Prisma.$feedbacksPayload>
/**
 * Model film_genres
 * 
 */
export type film_genres = $Result.DefaultSelection<Prisma.$film_genresPayload>
/**
 * Model films
 * 
 */
export type films = $Result.DefaultSelection<Prisma.$filmsPayload>
/**
 * Model genres
 * 
 */
export type genres = $Result.DefaultSelection<Prisma.$genresPayload>
/**
 * Model invoices
 * 
 */
export type invoices = $Result.DefaultSelection<Prisma.$invoicesPayload>
/**
 * Model plans
 * 
 */
export type plans = $Result.DefaultSelection<Prisma.$plansPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model video_files
 * 
 */
export type video_files = $Result.DefaultSelection<Prisma.$video_filesPayload>
/**
 * Model views
 * 
 */
export type views = $Result.DefaultSelection<Prisma.$viewsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Carts
 * const carts = await prisma.cart.findMany()
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
   * // Fetch zero or more Carts
   * const carts = await prisma.cart.findMany()
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
   * `prisma.cart`: Exposes CRUD operations for the **cart** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Carts
    * const carts = await prisma.cart.findMany()
    * ```
    */
  get cart(): Prisma.cartDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.episodes`: Exposes CRUD operations for the **episodes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Episodes
    * const episodes = await prisma.episodes.findMany()
    * ```
    */
  get episodes(): Prisma.episodesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.favorites`: Exposes CRUD operations for the **favorites** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Favorites
    * const favorites = await prisma.favorites.findMany()
    * ```
    */
  get favorites(): Prisma.favoritesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.feedbacks`: Exposes CRUD operations for the **feedbacks** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Feedbacks
    * const feedbacks = await prisma.feedbacks.findMany()
    * ```
    */
  get feedbacks(): Prisma.feedbacksDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.film_genres`: Exposes CRUD operations for the **film_genres** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Film_genres
    * const film_genres = await prisma.film_genres.findMany()
    * ```
    */
  get film_genres(): Prisma.film_genresDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.films`: Exposes CRUD operations for the **films** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Films
    * const films = await prisma.films.findMany()
    * ```
    */
  get films(): Prisma.filmsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.genres`: Exposes CRUD operations for the **genres** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Genres
    * const genres = await prisma.genres.findMany()
    * ```
    */
  get genres(): Prisma.genresDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.invoices`: Exposes CRUD operations for the **invoices** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Invoices
    * const invoices = await prisma.invoices.findMany()
    * ```
    */
  get invoices(): Prisma.invoicesDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.video_files`: Exposes CRUD operations for the **video_files** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Video_files
    * const video_files = await prisma.video_files.findMany()
    * ```
    */
  get video_files(): Prisma.video_filesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.views`: Exposes CRUD operations for the **views** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Views
    * const views = await prisma.views.findMany()
    * ```
    */
  get views(): Prisma.viewsDelegate<ExtArgs, ClientOptions>;
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
    cart: 'cart',
    episodes: 'episodes',
    favorites: 'favorites',
    feedbacks: 'feedbacks',
    film_genres: 'film_genres',
    films: 'films',
    genres: 'genres',
    invoices: 'invoices',
    plans: 'plans',
    users: 'users',
    video_files: 'video_files',
    views: 'views'
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
      modelProps: "cart" | "episodes" | "favorites" | "feedbacks" | "film_genres" | "films" | "genres" | "invoices" | "plans" | "users" | "video_files" | "views"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      cart: {
        payload: Prisma.$cartPayload<ExtArgs>
        fields: Prisma.cartFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cartFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cartFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartPayload>
          }
          findFirst: {
            args: Prisma.cartFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cartFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartPayload>
          }
          findMany: {
            args: Prisma.cartFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartPayload>[]
          }
          create: {
            args: Prisma.cartCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartPayload>
          }
          createMany: {
            args: Prisma.cartCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.cartDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartPayload>
          }
          update: {
            args: Prisma.cartUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartPayload>
          }
          deleteMany: {
            args: Prisma.cartDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.cartUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.cartUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartPayload>
          }
          aggregate: {
            args: Prisma.CartAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCart>
          }
          groupBy: {
            args: Prisma.cartGroupByArgs<ExtArgs>
            result: $Utils.Optional<CartGroupByOutputType>[]
          }
          count: {
            args: Prisma.cartCountArgs<ExtArgs>
            result: $Utils.Optional<CartCountAggregateOutputType> | number
          }
        }
      }
      episodes: {
        payload: Prisma.$episodesPayload<ExtArgs>
        fields: Prisma.episodesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.episodesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$episodesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.episodesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$episodesPayload>
          }
          findFirst: {
            args: Prisma.episodesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$episodesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.episodesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$episodesPayload>
          }
          findMany: {
            args: Prisma.episodesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$episodesPayload>[]
          }
          create: {
            args: Prisma.episodesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$episodesPayload>
          }
          createMany: {
            args: Prisma.episodesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.episodesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$episodesPayload>
          }
          update: {
            args: Prisma.episodesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$episodesPayload>
          }
          deleteMany: {
            args: Prisma.episodesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.episodesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.episodesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$episodesPayload>
          }
          aggregate: {
            args: Prisma.EpisodesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEpisodes>
          }
          groupBy: {
            args: Prisma.episodesGroupByArgs<ExtArgs>
            result: $Utils.Optional<EpisodesGroupByOutputType>[]
          }
          count: {
            args: Prisma.episodesCountArgs<ExtArgs>
            result: $Utils.Optional<EpisodesCountAggregateOutputType> | number
          }
        }
      }
      favorites: {
        payload: Prisma.$favoritesPayload<ExtArgs>
        fields: Prisma.favoritesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.favoritesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$favoritesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.favoritesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$favoritesPayload>
          }
          findFirst: {
            args: Prisma.favoritesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$favoritesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.favoritesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$favoritesPayload>
          }
          findMany: {
            args: Prisma.favoritesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$favoritesPayload>[]
          }
          create: {
            args: Prisma.favoritesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$favoritesPayload>
          }
          createMany: {
            args: Prisma.favoritesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.favoritesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$favoritesPayload>
          }
          update: {
            args: Prisma.favoritesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$favoritesPayload>
          }
          deleteMany: {
            args: Prisma.favoritesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.favoritesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.favoritesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$favoritesPayload>
          }
          aggregate: {
            args: Prisma.FavoritesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFavorites>
          }
          groupBy: {
            args: Prisma.favoritesGroupByArgs<ExtArgs>
            result: $Utils.Optional<FavoritesGroupByOutputType>[]
          }
          count: {
            args: Prisma.favoritesCountArgs<ExtArgs>
            result: $Utils.Optional<FavoritesCountAggregateOutputType> | number
          }
        }
      }
      feedbacks: {
        payload: Prisma.$feedbacksPayload<ExtArgs>
        fields: Prisma.feedbacksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.feedbacksFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feedbacksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.feedbacksFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feedbacksPayload>
          }
          findFirst: {
            args: Prisma.feedbacksFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feedbacksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.feedbacksFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feedbacksPayload>
          }
          findMany: {
            args: Prisma.feedbacksFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feedbacksPayload>[]
          }
          create: {
            args: Prisma.feedbacksCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feedbacksPayload>
          }
          createMany: {
            args: Prisma.feedbacksCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.feedbacksDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feedbacksPayload>
          }
          update: {
            args: Prisma.feedbacksUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feedbacksPayload>
          }
          deleteMany: {
            args: Prisma.feedbacksDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.feedbacksUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.feedbacksUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feedbacksPayload>
          }
          aggregate: {
            args: Prisma.FeedbacksAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFeedbacks>
          }
          groupBy: {
            args: Prisma.feedbacksGroupByArgs<ExtArgs>
            result: $Utils.Optional<FeedbacksGroupByOutputType>[]
          }
          count: {
            args: Prisma.feedbacksCountArgs<ExtArgs>
            result: $Utils.Optional<FeedbacksCountAggregateOutputType> | number
          }
        }
      }
      film_genres: {
        payload: Prisma.$film_genresPayload<ExtArgs>
        fields: Prisma.film_genresFieldRefs
        operations: {
          findUnique: {
            args: Prisma.film_genresFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$film_genresPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.film_genresFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$film_genresPayload>
          }
          findFirst: {
            args: Prisma.film_genresFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$film_genresPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.film_genresFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$film_genresPayload>
          }
          findMany: {
            args: Prisma.film_genresFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$film_genresPayload>[]
          }
          create: {
            args: Prisma.film_genresCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$film_genresPayload>
          }
          createMany: {
            args: Prisma.film_genresCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.film_genresDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$film_genresPayload>
          }
          update: {
            args: Prisma.film_genresUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$film_genresPayload>
          }
          deleteMany: {
            args: Prisma.film_genresDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.film_genresUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.film_genresUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$film_genresPayload>
          }
          aggregate: {
            args: Prisma.Film_genresAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFilm_genres>
          }
          groupBy: {
            args: Prisma.film_genresGroupByArgs<ExtArgs>
            result: $Utils.Optional<Film_genresGroupByOutputType>[]
          }
          count: {
            args: Prisma.film_genresCountArgs<ExtArgs>
            result: $Utils.Optional<Film_genresCountAggregateOutputType> | number
          }
        }
      }
      films: {
        payload: Prisma.$filmsPayload<ExtArgs>
        fields: Prisma.filmsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.filmsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filmsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.filmsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filmsPayload>
          }
          findFirst: {
            args: Prisma.filmsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filmsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.filmsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filmsPayload>
          }
          findMany: {
            args: Prisma.filmsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filmsPayload>[]
          }
          create: {
            args: Prisma.filmsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filmsPayload>
          }
          createMany: {
            args: Prisma.filmsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.filmsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filmsPayload>
          }
          update: {
            args: Prisma.filmsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filmsPayload>
          }
          deleteMany: {
            args: Prisma.filmsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.filmsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.filmsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filmsPayload>
          }
          aggregate: {
            args: Prisma.FilmsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFilms>
          }
          groupBy: {
            args: Prisma.filmsGroupByArgs<ExtArgs>
            result: $Utils.Optional<FilmsGroupByOutputType>[]
          }
          count: {
            args: Prisma.filmsCountArgs<ExtArgs>
            result: $Utils.Optional<FilmsCountAggregateOutputType> | number
          }
        }
      }
      genres: {
        payload: Prisma.$genresPayload<ExtArgs>
        fields: Prisma.genresFieldRefs
        operations: {
          findUnique: {
            args: Prisma.genresFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$genresPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.genresFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$genresPayload>
          }
          findFirst: {
            args: Prisma.genresFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$genresPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.genresFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$genresPayload>
          }
          findMany: {
            args: Prisma.genresFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$genresPayload>[]
          }
          create: {
            args: Prisma.genresCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$genresPayload>
          }
          createMany: {
            args: Prisma.genresCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.genresDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$genresPayload>
          }
          update: {
            args: Prisma.genresUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$genresPayload>
          }
          deleteMany: {
            args: Prisma.genresDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.genresUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.genresUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$genresPayload>
          }
          aggregate: {
            args: Prisma.GenresAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGenres>
          }
          groupBy: {
            args: Prisma.genresGroupByArgs<ExtArgs>
            result: $Utils.Optional<GenresGroupByOutputType>[]
          }
          count: {
            args: Prisma.genresCountArgs<ExtArgs>
            result: $Utils.Optional<GenresCountAggregateOutputType> | number
          }
        }
      }
      invoices: {
        payload: Prisma.$invoicesPayload<ExtArgs>
        fields: Prisma.invoicesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.invoicesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoicesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.invoicesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoicesPayload>
          }
          findFirst: {
            args: Prisma.invoicesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoicesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.invoicesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoicesPayload>
          }
          findMany: {
            args: Prisma.invoicesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoicesPayload>[]
          }
          create: {
            args: Prisma.invoicesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoicesPayload>
          }
          createMany: {
            args: Prisma.invoicesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.invoicesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoicesPayload>
          }
          update: {
            args: Prisma.invoicesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoicesPayload>
          }
          deleteMany: {
            args: Prisma.invoicesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.invoicesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.invoicesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoicesPayload>
          }
          aggregate: {
            args: Prisma.InvoicesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvoices>
          }
          groupBy: {
            args: Prisma.invoicesGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvoicesGroupByOutputType>[]
          }
          count: {
            args: Prisma.invoicesCountArgs<ExtArgs>
            result: $Utils.Optional<InvoicesCountAggregateOutputType> | number
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
      video_files: {
        payload: Prisma.$video_filesPayload<ExtArgs>
        fields: Prisma.video_filesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.video_filesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$video_filesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.video_filesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$video_filesPayload>
          }
          findFirst: {
            args: Prisma.video_filesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$video_filesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.video_filesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$video_filesPayload>
          }
          findMany: {
            args: Prisma.video_filesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$video_filesPayload>[]
          }
          create: {
            args: Prisma.video_filesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$video_filesPayload>
          }
          createMany: {
            args: Prisma.video_filesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.video_filesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$video_filesPayload>
          }
          update: {
            args: Prisma.video_filesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$video_filesPayload>
          }
          deleteMany: {
            args: Prisma.video_filesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.video_filesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.video_filesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$video_filesPayload>
          }
          aggregate: {
            args: Prisma.Video_filesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVideo_files>
          }
          groupBy: {
            args: Prisma.video_filesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Video_filesGroupByOutputType>[]
          }
          count: {
            args: Prisma.video_filesCountArgs<ExtArgs>
            result: $Utils.Optional<Video_filesCountAggregateOutputType> | number
          }
        }
      }
      views: {
        payload: Prisma.$viewsPayload<ExtArgs>
        fields: Prisma.viewsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.viewsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$viewsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.viewsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$viewsPayload>
          }
          findFirst: {
            args: Prisma.viewsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$viewsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.viewsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$viewsPayload>
          }
          findMany: {
            args: Prisma.viewsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$viewsPayload>[]
          }
          create: {
            args: Prisma.viewsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$viewsPayload>
          }
          createMany: {
            args: Prisma.viewsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.viewsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$viewsPayload>
          }
          update: {
            args: Prisma.viewsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$viewsPayload>
          }
          deleteMany: {
            args: Prisma.viewsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.viewsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.viewsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$viewsPayload>
          }
          aggregate: {
            args: Prisma.ViewsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateViews>
          }
          groupBy: {
            args: Prisma.viewsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ViewsGroupByOutputType>[]
          }
          count: {
            args: Prisma.viewsCountArgs<ExtArgs>
            result: $Utils.Optional<ViewsCountAggregateOutputType> | number
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
    cart?: cartOmit
    episodes?: episodesOmit
    favorites?: favoritesOmit
    feedbacks?: feedbacksOmit
    film_genres?: film_genresOmit
    films?: filmsOmit
    genres?: genresOmit
    invoices?: invoicesOmit
    plans?: plansOmit
    users?: usersOmit
    video_files?: video_filesOmit
    views?: viewsOmit
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
   * Count Type EpisodesCountOutputType
   */

  export type EpisodesCountOutputType = {
    video_files: number
    views: number
  }

  export type EpisodesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    video_files?: boolean | EpisodesCountOutputTypeCountVideo_filesArgs
    views?: boolean | EpisodesCountOutputTypeCountViewsArgs
  }

  // Custom InputTypes
  /**
   * EpisodesCountOutputType without action
   */
  export type EpisodesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EpisodesCountOutputType
     */
    select?: EpisodesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EpisodesCountOutputType without action
   */
  export type EpisodesCountOutputTypeCountVideo_filesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: video_filesWhereInput
  }

  /**
   * EpisodesCountOutputType without action
   */
  export type EpisodesCountOutputTypeCountViewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: viewsWhereInput
  }


  /**
   * Count Type FilmsCountOutputType
   */

  export type FilmsCountOutputType = {
    episodes: number
    favorites: number
    feedbacks: number
    film_genres: number
    views: number
  }

  export type FilmsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    episodes?: boolean | FilmsCountOutputTypeCountEpisodesArgs
    favorites?: boolean | FilmsCountOutputTypeCountFavoritesArgs
    feedbacks?: boolean | FilmsCountOutputTypeCountFeedbacksArgs
    film_genres?: boolean | FilmsCountOutputTypeCountFilm_genresArgs
    views?: boolean | FilmsCountOutputTypeCountViewsArgs
  }

  // Custom InputTypes
  /**
   * FilmsCountOutputType without action
   */
  export type FilmsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilmsCountOutputType
     */
    select?: FilmsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FilmsCountOutputType without action
   */
  export type FilmsCountOutputTypeCountEpisodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: episodesWhereInput
  }

  /**
   * FilmsCountOutputType without action
   */
  export type FilmsCountOutputTypeCountFavoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: favoritesWhereInput
  }

  /**
   * FilmsCountOutputType without action
   */
  export type FilmsCountOutputTypeCountFeedbacksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: feedbacksWhereInput
  }

  /**
   * FilmsCountOutputType without action
   */
  export type FilmsCountOutputTypeCountFilm_genresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: film_genresWhereInput
  }

  /**
   * FilmsCountOutputType without action
   */
  export type FilmsCountOutputTypeCountViewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: viewsWhereInput
  }


  /**
   * Count Type GenresCountOutputType
   */

  export type GenresCountOutputType = {
    film_genres: number
  }

  export type GenresCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    film_genres?: boolean | GenresCountOutputTypeCountFilm_genresArgs
  }

  // Custom InputTypes
  /**
   * GenresCountOutputType without action
   */
  export type GenresCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenresCountOutputType
     */
    select?: GenresCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GenresCountOutputType without action
   */
  export type GenresCountOutputTypeCountFilm_genresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: film_genresWhereInput
  }


  /**
   * Count Type PlansCountOutputType
   */

  export type PlansCountOutputType = {
    cart: number
    invoices: number
    users: number
  }

  export type PlansCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cart?: boolean | PlansCountOutputTypeCountCartArgs
    invoices?: boolean | PlansCountOutputTypeCountInvoicesArgs
    users?: boolean | PlansCountOutputTypeCountUsersArgs
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
  export type PlansCountOutputTypeCountCartArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cartWhereInput
  }

  /**
   * PlansCountOutputType without action
   */
  export type PlansCountOutputTypeCountInvoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: invoicesWhereInput
  }

  /**
   * PlansCountOutputType without action
   */
  export type PlansCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    cart: number
    favorites: number
    feedbacks: number
    invoices: number
    views: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cart?: boolean | UsersCountOutputTypeCountCartArgs
    favorites?: boolean | UsersCountOutputTypeCountFavoritesArgs
    feedbacks?: boolean | UsersCountOutputTypeCountFeedbacksArgs
    invoices?: boolean | UsersCountOutputTypeCountInvoicesArgs
    views?: boolean | UsersCountOutputTypeCountViewsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountCartArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cartWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountFavoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: favoritesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountFeedbacksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: feedbacksWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountInvoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: invoicesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountViewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: viewsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model cart
   */

  export type AggregateCart = {
    _count: CartCountAggregateOutputType | null
    _avg: CartAvgAggregateOutputType | null
    _sum: CartSumAggregateOutputType | null
    _min: CartMinAggregateOutputType | null
    _max: CartMaxAggregateOutputType | null
  }

  export type CartAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    plan_id: number | null
  }

  export type CartSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    plan_id: number | null
  }

  export type CartMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    plan_id: number | null
    added_at: Date | null
  }

  export type CartMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    plan_id: number | null
    added_at: Date | null
  }

  export type CartCountAggregateOutputType = {
    id: number
    user_id: number
    plan_id: number
    added_at: number
    _all: number
  }


  export type CartAvgAggregateInputType = {
    id?: true
    user_id?: true
    plan_id?: true
  }

  export type CartSumAggregateInputType = {
    id?: true
    user_id?: true
    plan_id?: true
  }

  export type CartMinAggregateInputType = {
    id?: true
    user_id?: true
    plan_id?: true
    added_at?: true
  }

  export type CartMaxAggregateInputType = {
    id?: true
    user_id?: true
    plan_id?: true
    added_at?: true
  }

  export type CartCountAggregateInputType = {
    id?: true
    user_id?: true
    plan_id?: true
    added_at?: true
    _all?: true
  }

  export type CartAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cart to aggregate.
     */
    where?: cartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carts to fetch.
     */
    orderBy?: cartOrderByWithRelationInput | cartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned carts
    **/
    _count?: true | CartCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CartAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CartSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CartMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CartMaxAggregateInputType
  }

  export type GetCartAggregateType<T extends CartAggregateArgs> = {
        [P in keyof T & keyof AggregateCart]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCart[P]>
      : GetScalarType<T[P], AggregateCart[P]>
  }




  export type cartGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cartWhereInput
    orderBy?: cartOrderByWithAggregationInput | cartOrderByWithAggregationInput[]
    by: CartScalarFieldEnum[] | CartScalarFieldEnum
    having?: cartScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CartCountAggregateInputType | true
    _avg?: CartAvgAggregateInputType
    _sum?: CartSumAggregateInputType
    _min?: CartMinAggregateInputType
    _max?: CartMaxAggregateInputType
  }

  export type CartGroupByOutputType = {
    id: number
    user_id: number | null
    plan_id: number | null
    added_at: Date
    _count: CartCountAggregateOutputType | null
    _avg: CartAvgAggregateOutputType | null
    _sum: CartSumAggregateOutputType | null
    _min: CartMinAggregateOutputType | null
    _max: CartMaxAggregateOutputType | null
  }

  type GetCartGroupByPayload<T extends cartGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CartGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CartGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CartGroupByOutputType[P]>
            : GetScalarType<T[P], CartGroupByOutputType[P]>
        }
      >
    >


  export type cartSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    plan_id?: boolean
    added_at?: boolean
    users?: boolean | cart$usersArgs<ExtArgs>
    plans?: boolean | cart$plansArgs<ExtArgs>
  }, ExtArgs["result"]["cart"]>



  export type cartSelectScalar = {
    id?: boolean
    user_id?: boolean
    plan_id?: boolean
    added_at?: boolean
  }

  export type cartOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "plan_id" | "added_at", ExtArgs["result"]["cart"]>
  export type cartInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | cart$usersArgs<ExtArgs>
    plans?: boolean | cart$plansArgs<ExtArgs>
  }

  export type $cartPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cart"
    objects: {
      users: Prisma.$usersPayload<ExtArgs> | null
      plans: Prisma.$plansPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number | null
      plan_id: number | null
      added_at: Date
    }, ExtArgs["result"]["cart"]>
    composites: {}
  }

  type cartGetPayload<S extends boolean | null | undefined | cartDefaultArgs> = $Result.GetResult<Prisma.$cartPayload, S>

  type cartCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<cartFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CartCountAggregateInputType | true
    }

  export interface cartDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cart'], meta: { name: 'cart' } }
    /**
     * Find zero or one Cart that matches the filter.
     * @param {cartFindUniqueArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cartFindUniqueArgs>(args: SelectSubset<T, cartFindUniqueArgs<ExtArgs>>): Prisma__cartClient<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cart that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {cartFindUniqueOrThrowArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cartFindUniqueOrThrowArgs>(args: SelectSubset<T, cartFindUniqueOrThrowArgs<ExtArgs>>): Prisma__cartClient<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cart that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartFindFirstArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cartFindFirstArgs>(args?: SelectSubset<T, cartFindFirstArgs<ExtArgs>>): Prisma__cartClient<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cart that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartFindFirstOrThrowArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cartFindFirstOrThrowArgs>(args?: SelectSubset<T, cartFindFirstOrThrowArgs<ExtArgs>>): Prisma__cartClient<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Carts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Carts
     * const carts = await prisma.cart.findMany()
     * 
     * // Get first 10 Carts
     * const carts = await prisma.cart.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cartWithIdOnly = await prisma.cart.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends cartFindManyArgs>(args?: SelectSubset<T, cartFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cart.
     * @param {cartCreateArgs} args - Arguments to create a Cart.
     * @example
     * // Create one Cart
     * const Cart = await prisma.cart.create({
     *   data: {
     *     // ... data to create a Cart
     *   }
     * })
     * 
     */
    create<T extends cartCreateArgs>(args: SelectSubset<T, cartCreateArgs<ExtArgs>>): Prisma__cartClient<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Carts.
     * @param {cartCreateManyArgs} args - Arguments to create many Carts.
     * @example
     * // Create many Carts
     * const cart = await prisma.cart.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends cartCreateManyArgs>(args?: SelectSubset<T, cartCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cart.
     * @param {cartDeleteArgs} args - Arguments to delete one Cart.
     * @example
     * // Delete one Cart
     * const Cart = await prisma.cart.delete({
     *   where: {
     *     // ... filter to delete one Cart
     *   }
     * })
     * 
     */
    delete<T extends cartDeleteArgs>(args: SelectSubset<T, cartDeleteArgs<ExtArgs>>): Prisma__cartClient<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cart.
     * @param {cartUpdateArgs} args - Arguments to update one Cart.
     * @example
     * // Update one Cart
     * const cart = await prisma.cart.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends cartUpdateArgs>(args: SelectSubset<T, cartUpdateArgs<ExtArgs>>): Prisma__cartClient<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Carts.
     * @param {cartDeleteManyArgs} args - Arguments to filter Carts to delete.
     * @example
     * // Delete a few Carts
     * const { count } = await prisma.cart.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends cartDeleteManyArgs>(args?: SelectSubset<T, cartDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Carts
     * const cart = await prisma.cart.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends cartUpdateManyArgs>(args: SelectSubset<T, cartUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cart.
     * @param {cartUpsertArgs} args - Arguments to update or create a Cart.
     * @example
     * // Update or create a Cart
     * const cart = await prisma.cart.upsert({
     *   create: {
     *     // ... data to create a Cart
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cart we want to update
     *   }
     * })
     */
    upsert<T extends cartUpsertArgs>(args: SelectSubset<T, cartUpsertArgs<ExtArgs>>): Prisma__cartClient<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartCountArgs} args - Arguments to filter Carts to count.
     * @example
     * // Count the number of Carts
     * const count = await prisma.cart.count({
     *   where: {
     *     // ... the filter for the Carts we want to count
     *   }
     * })
    **/
    count<T extends cartCountArgs>(
      args?: Subset<T, cartCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CartCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CartAggregateArgs>(args: Subset<T, CartAggregateArgs>): Prisma.PrismaPromise<GetCartAggregateType<T>>

    /**
     * Group by Cart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartGroupByArgs} args - Group by arguments.
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
      T extends cartGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cartGroupByArgs['orderBy'] }
        : { orderBy?: cartGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, cartGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCartGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cart model
   */
  readonly fields: cartFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cart.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cartClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends cart$usersArgs<ExtArgs> = {}>(args?: Subset<T, cart$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    plans<T extends cart$plansArgs<ExtArgs> = {}>(args?: Subset<T, cart$plansArgs<ExtArgs>>): Prisma__plansClient<$Result.GetResult<Prisma.$plansPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the cart model
   */
  interface cartFieldRefs {
    readonly id: FieldRef<"cart", 'Int'>
    readonly user_id: FieldRef<"cart", 'Int'>
    readonly plan_id: FieldRef<"cart", 'Int'>
    readonly added_at: FieldRef<"cart", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * cart findUnique
   */
  export type cartFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart
     */
    omit?: cartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartInclude<ExtArgs> | null
    /**
     * Filter, which cart to fetch.
     */
    where: cartWhereUniqueInput
  }

  /**
   * cart findUniqueOrThrow
   */
  export type cartFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart
     */
    omit?: cartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartInclude<ExtArgs> | null
    /**
     * Filter, which cart to fetch.
     */
    where: cartWhereUniqueInput
  }

  /**
   * cart findFirst
   */
  export type cartFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart
     */
    omit?: cartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartInclude<ExtArgs> | null
    /**
     * Filter, which cart to fetch.
     */
    where?: cartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carts to fetch.
     */
    orderBy?: cartOrderByWithRelationInput | cartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for carts.
     */
    cursor?: cartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of carts.
     */
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }

  /**
   * cart findFirstOrThrow
   */
  export type cartFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart
     */
    omit?: cartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartInclude<ExtArgs> | null
    /**
     * Filter, which cart to fetch.
     */
    where?: cartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carts to fetch.
     */
    orderBy?: cartOrderByWithRelationInput | cartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for carts.
     */
    cursor?: cartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of carts.
     */
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }

  /**
   * cart findMany
   */
  export type cartFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart
     */
    omit?: cartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartInclude<ExtArgs> | null
    /**
     * Filter, which carts to fetch.
     */
    where?: cartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carts to fetch.
     */
    orderBy?: cartOrderByWithRelationInput | cartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing carts.
     */
    cursor?: cartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carts.
     */
    skip?: number
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }

  /**
   * cart create
   */
  export type cartCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart
     */
    omit?: cartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartInclude<ExtArgs> | null
    /**
     * The data needed to create a cart.
     */
    data?: XOR<cartCreateInput, cartUncheckedCreateInput>
  }

  /**
   * cart createMany
   */
  export type cartCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many carts.
     */
    data: cartCreateManyInput | cartCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cart update
   */
  export type cartUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart
     */
    omit?: cartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartInclude<ExtArgs> | null
    /**
     * The data needed to update a cart.
     */
    data: XOR<cartUpdateInput, cartUncheckedUpdateInput>
    /**
     * Choose, which cart to update.
     */
    where: cartWhereUniqueInput
  }

  /**
   * cart updateMany
   */
  export type cartUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update carts.
     */
    data: XOR<cartUpdateManyMutationInput, cartUncheckedUpdateManyInput>
    /**
     * Filter which carts to update
     */
    where?: cartWhereInput
    /**
     * Limit how many carts to update.
     */
    limit?: number
  }

  /**
   * cart upsert
   */
  export type cartUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart
     */
    omit?: cartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartInclude<ExtArgs> | null
    /**
     * The filter to search for the cart to update in case it exists.
     */
    where: cartWhereUniqueInput
    /**
     * In case the cart found by the `where` argument doesn't exist, create a new cart with this data.
     */
    create: XOR<cartCreateInput, cartUncheckedCreateInput>
    /**
     * In case the cart was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cartUpdateInput, cartUncheckedUpdateInput>
  }

  /**
   * cart delete
   */
  export type cartDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart
     */
    omit?: cartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartInclude<ExtArgs> | null
    /**
     * Filter which cart to delete.
     */
    where: cartWhereUniqueInput
  }

  /**
   * cart deleteMany
   */
  export type cartDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which carts to delete
     */
    where?: cartWhereInput
    /**
     * Limit how many carts to delete.
     */
    limit?: number
  }

  /**
   * cart.users
   */
  export type cart$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  }

  /**
   * cart.plans
   */
  export type cart$plansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * cart without action
   */
  export type cartDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart
     */
    omit?: cartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartInclude<ExtArgs> | null
  }


  /**
   * Model episodes
   */

  export type AggregateEpisodes = {
    _count: EpisodesCountAggregateOutputType | null
    _avg: EpisodesAvgAggregateOutputType | null
    _sum: EpisodesSumAggregateOutputType | null
    _min: EpisodesMinAggregateOutputType | null
    _max: EpisodesMaxAggregateOutputType | null
  }

  export type EpisodesAvgAggregateOutputType = {
    id: number | null
    film_id: number | null
  }

  export type EpisodesSumAggregateOutputType = {
    id: number | null
    film_id: number | null
  }

  export type EpisodesMinAggregateOutputType = {
    id: number | null
    film_id: number | null
    episode_name: string | null
    video_url: string | null
    sub_url: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type EpisodesMaxAggregateOutputType = {
    id: number | null
    film_id: number | null
    episode_name: string | null
    video_url: string | null
    sub_url: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type EpisodesCountAggregateOutputType = {
    id: number
    film_id: number
    episode_name: number
    video_url: number
    sub_url: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type EpisodesAvgAggregateInputType = {
    id?: true
    film_id?: true
  }

  export type EpisodesSumAggregateInputType = {
    id?: true
    film_id?: true
  }

  export type EpisodesMinAggregateInputType = {
    id?: true
    film_id?: true
    episode_name?: true
    video_url?: true
    sub_url?: true
    created_at?: true
    updated_at?: true
  }

  export type EpisodesMaxAggregateInputType = {
    id?: true
    film_id?: true
    episode_name?: true
    video_url?: true
    sub_url?: true
    created_at?: true
    updated_at?: true
  }

  export type EpisodesCountAggregateInputType = {
    id?: true
    film_id?: true
    episode_name?: true
    video_url?: true
    sub_url?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type EpisodesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which episodes to aggregate.
     */
    where?: episodesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of episodes to fetch.
     */
    orderBy?: episodesOrderByWithRelationInput | episodesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: episodesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` episodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` episodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned episodes
    **/
    _count?: true | EpisodesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EpisodesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EpisodesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EpisodesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EpisodesMaxAggregateInputType
  }

  export type GetEpisodesAggregateType<T extends EpisodesAggregateArgs> = {
        [P in keyof T & keyof AggregateEpisodes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEpisodes[P]>
      : GetScalarType<T[P], AggregateEpisodes[P]>
  }




  export type episodesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: episodesWhereInput
    orderBy?: episodesOrderByWithAggregationInput | episodesOrderByWithAggregationInput[]
    by: EpisodesScalarFieldEnum[] | EpisodesScalarFieldEnum
    having?: episodesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EpisodesCountAggregateInputType | true
    _avg?: EpisodesAvgAggregateInputType
    _sum?: EpisodesSumAggregateInputType
    _min?: EpisodesMinAggregateInputType
    _max?: EpisodesMaxAggregateInputType
  }

  export type EpisodesGroupByOutputType = {
    id: number
    film_id: number | null
    episode_name: string | null
    video_url: string | null
    sub_url: string | null
    created_at: Date
    updated_at: Date
    _count: EpisodesCountAggregateOutputType | null
    _avg: EpisodesAvgAggregateOutputType | null
    _sum: EpisodesSumAggregateOutputType | null
    _min: EpisodesMinAggregateOutputType | null
    _max: EpisodesMaxAggregateOutputType | null
  }

  type GetEpisodesGroupByPayload<T extends episodesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EpisodesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EpisodesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EpisodesGroupByOutputType[P]>
            : GetScalarType<T[P], EpisodesGroupByOutputType[P]>
        }
      >
    >


  export type episodesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    film_id?: boolean
    episode_name?: boolean
    video_url?: boolean
    sub_url?: boolean
    created_at?: boolean
    updated_at?: boolean
    films?: boolean | episodes$filmsArgs<ExtArgs>
    video_files?: boolean | episodes$video_filesArgs<ExtArgs>
    views?: boolean | episodes$viewsArgs<ExtArgs>
    _count?: boolean | EpisodesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["episodes"]>



  export type episodesSelectScalar = {
    id?: boolean
    film_id?: boolean
    episode_name?: boolean
    video_url?: boolean
    sub_url?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type episodesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "film_id" | "episode_name" | "video_url" | "sub_url" | "created_at" | "updated_at", ExtArgs["result"]["episodes"]>
  export type episodesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    films?: boolean | episodes$filmsArgs<ExtArgs>
    video_files?: boolean | episodes$video_filesArgs<ExtArgs>
    views?: boolean | episodes$viewsArgs<ExtArgs>
    _count?: boolean | EpisodesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $episodesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "episodes"
    objects: {
      films: Prisma.$filmsPayload<ExtArgs> | null
      video_files: Prisma.$video_filesPayload<ExtArgs>[]
      views: Prisma.$viewsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      film_id: number | null
      episode_name: string | null
      video_url: string | null
      sub_url: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["episodes"]>
    composites: {}
  }

  type episodesGetPayload<S extends boolean | null | undefined | episodesDefaultArgs> = $Result.GetResult<Prisma.$episodesPayload, S>

  type episodesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<episodesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EpisodesCountAggregateInputType | true
    }

  export interface episodesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['episodes'], meta: { name: 'episodes' } }
    /**
     * Find zero or one Episodes that matches the filter.
     * @param {episodesFindUniqueArgs} args - Arguments to find a Episodes
     * @example
     * // Get one Episodes
     * const episodes = await prisma.episodes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends episodesFindUniqueArgs>(args: SelectSubset<T, episodesFindUniqueArgs<ExtArgs>>): Prisma__episodesClient<$Result.GetResult<Prisma.$episodesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Episodes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {episodesFindUniqueOrThrowArgs} args - Arguments to find a Episodes
     * @example
     * // Get one Episodes
     * const episodes = await prisma.episodes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends episodesFindUniqueOrThrowArgs>(args: SelectSubset<T, episodesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__episodesClient<$Result.GetResult<Prisma.$episodesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Episodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {episodesFindFirstArgs} args - Arguments to find a Episodes
     * @example
     * // Get one Episodes
     * const episodes = await prisma.episodes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends episodesFindFirstArgs>(args?: SelectSubset<T, episodesFindFirstArgs<ExtArgs>>): Prisma__episodesClient<$Result.GetResult<Prisma.$episodesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Episodes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {episodesFindFirstOrThrowArgs} args - Arguments to find a Episodes
     * @example
     * // Get one Episodes
     * const episodes = await prisma.episodes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends episodesFindFirstOrThrowArgs>(args?: SelectSubset<T, episodesFindFirstOrThrowArgs<ExtArgs>>): Prisma__episodesClient<$Result.GetResult<Prisma.$episodesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Episodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {episodesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Episodes
     * const episodes = await prisma.episodes.findMany()
     * 
     * // Get first 10 Episodes
     * const episodes = await prisma.episodes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const episodesWithIdOnly = await prisma.episodes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends episodesFindManyArgs>(args?: SelectSubset<T, episodesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$episodesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Episodes.
     * @param {episodesCreateArgs} args - Arguments to create a Episodes.
     * @example
     * // Create one Episodes
     * const Episodes = await prisma.episodes.create({
     *   data: {
     *     // ... data to create a Episodes
     *   }
     * })
     * 
     */
    create<T extends episodesCreateArgs>(args: SelectSubset<T, episodesCreateArgs<ExtArgs>>): Prisma__episodesClient<$Result.GetResult<Prisma.$episodesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Episodes.
     * @param {episodesCreateManyArgs} args - Arguments to create many Episodes.
     * @example
     * // Create many Episodes
     * const episodes = await prisma.episodes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends episodesCreateManyArgs>(args?: SelectSubset<T, episodesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Episodes.
     * @param {episodesDeleteArgs} args - Arguments to delete one Episodes.
     * @example
     * // Delete one Episodes
     * const Episodes = await prisma.episodes.delete({
     *   where: {
     *     // ... filter to delete one Episodes
     *   }
     * })
     * 
     */
    delete<T extends episodesDeleteArgs>(args: SelectSubset<T, episodesDeleteArgs<ExtArgs>>): Prisma__episodesClient<$Result.GetResult<Prisma.$episodesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Episodes.
     * @param {episodesUpdateArgs} args - Arguments to update one Episodes.
     * @example
     * // Update one Episodes
     * const episodes = await prisma.episodes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends episodesUpdateArgs>(args: SelectSubset<T, episodesUpdateArgs<ExtArgs>>): Prisma__episodesClient<$Result.GetResult<Prisma.$episodesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Episodes.
     * @param {episodesDeleteManyArgs} args - Arguments to filter Episodes to delete.
     * @example
     * // Delete a few Episodes
     * const { count } = await prisma.episodes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends episodesDeleteManyArgs>(args?: SelectSubset<T, episodesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Episodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {episodesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Episodes
     * const episodes = await prisma.episodes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends episodesUpdateManyArgs>(args: SelectSubset<T, episodesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Episodes.
     * @param {episodesUpsertArgs} args - Arguments to update or create a Episodes.
     * @example
     * // Update or create a Episodes
     * const episodes = await prisma.episodes.upsert({
     *   create: {
     *     // ... data to create a Episodes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Episodes we want to update
     *   }
     * })
     */
    upsert<T extends episodesUpsertArgs>(args: SelectSubset<T, episodesUpsertArgs<ExtArgs>>): Prisma__episodesClient<$Result.GetResult<Prisma.$episodesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Episodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {episodesCountArgs} args - Arguments to filter Episodes to count.
     * @example
     * // Count the number of Episodes
     * const count = await prisma.episodes.count({
     *   where: {
     *     // ... the filter for the Episodes we want to count
     *   }
     * })
    **/
    count<T extends episodesCountArgs>(
      args?: Subset<T, episodesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EpisodesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Episodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EpisodesAggregateArgs>(args: Subset<T, EpisodesAggregateArgs>): Prisma.PrismaPromise<GetEpisodesAggregateType<T>>

    /**
     * Group by Episodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {episodesGroupByArgs} args - Group by arguments.
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
      T extends episodesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: episodesGroupByArgs['orderBy'] }
        : { orderBy?: episodesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, episodesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEpisodesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the episodes model
   */
  readonly fields: episodesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for episodes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__episodesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    films<T extends episodes$filmsArgs<ExtArgs> = {}>(args?: Subset<T, episodes$filmsArgs<ExtArgs>>): Prisma__filmsClient<$Result.GetResult<Prisma.$filmsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    video_files<T extends episodes$video_filesArgs<ExtArgs> = {}>(args?: Subset<T, episodes$video_filesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$video_filesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    views<T extends episodes$viewsArgs<ExtArgs> = {}>(args?: Subset<T, episodes$viewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$viewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the episodes model
   */
  interface episodesFieldRefs {
    readonly id: FieldRef<"episodes", 'Int'>
    readonly film_id: FieldRef<"episodes", 'Int'>
    readonly episode_name: FieldRef<"episodes", 'String'>
    readonly video_url: FieldRef<"episodes", 'String'>
    readonly sub_url: FieldRef<"episodes", 'String'>
    readonly created_at: FieldRef<"episodes", 'DateTime'>
    readonly updated_at: FieldRef<"episodes", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * episodes findUnique
   */
  export type episodesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the episodes
     */
    select?: episodesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the episodes
     */
    omit?: episodesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: episodesInclude<ExtArgs> | null
    /**
     * Filter, which episodes to fetch.
     */
    where: episodesWhereUniqueInput
  }

  /**
   * episodes findUniqueOrThrow
   */
  export type episodesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the episodes
     */
    select?: episodesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the episodes
     */
    omit?: episodesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: episodesInclude<ExtArgs> | null
    /**
     * Filter, which episodes to fetch.
     */
    where: episodesWhereUniqueInput
  }

  /**
   * episodes findFirst
   */
  export type episodesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the episodes
     */
    select?: episodesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the episodes
     */
    omit?: episodesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: episodesInclude<ExtArgs> | null
    /**
     * Filter, which episodes to fetch.
     */
    where?: episodesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of episodes to fetch.
     */
    orderBy?: episodesOrderByWithRelationInput | episodesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for episodes.
     */
    cursor?: episodesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` episodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` episodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of episodes.
     */
    distinct?: EpisodesScalarFieldEnum | EpisodesScalarFieldEnum[]
  }

  /**
   * episodes findFirstOrThrow
   */
  export type episodesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the episodes
     */
    select?: episodesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the episodes
     */
    omit?: episodesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: episodesInclude<ExtArgs> | null
    /**
     * Filter, which episodes to fetch.
     */
    where?: episodesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of episodes to fetch.
     */
    orderBy?: episodesOrderByWithRelationInput | episodesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for episodes.
     */
    cursor?: episodesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` episodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` episodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of episodes.
     */
    distinct?: EpisodesScalarFieldEnum | EpisodesScalarFieldEnum[]
  }

  /**
   * episodes findMany
   */
  export type episodesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the episodes
     */
    select?: episodesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the episodes
     */
    omit?: episodesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: episodesInclude<ExtArgs> | null
    /**
     * Filter, which episodes to fetch.
     */
    where?: episodesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of episodes to fetch.
     */
    orderBy?: episodesOrderByWithRelationInput | episodesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing episodes.
     */
    cursor?: episodesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` episodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` episodes.
     */
    skip?: number
    distinct?: EpisodesScalarFieldEnum | EpisodesScalarFieldEnum[]
  }

  /**
   * episodes create
   */
  export type episodesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the episodes
     */
    select?: episodesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the episodes
     */
    omit?: episodesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: episodesInclude<ExtArgs> | null
    /**
     * The data needed to create a episodes.
     */
    data?: XOR<episodesCreateInput, episodesUncheckedCreateInput>
  }

  /**
   * episodes createMany
   */
  export type episodesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many episodes.
     */
    data: episodesCreateManyInput | episodesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * episodes update
   */
  export type episodesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the episodes
     */
    select?: episodesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the episodes
     */
    omit?: episodesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: episodesInclude<ExtArgs> | null
    /**
     * The data needed to update a episodes.
     */
    data: XOR<episodesUpdateInput, episodesUncheckedUpdateInput>
    /**
     * Choose, which episodes to update.
     */
    where: episodesWhereUniqueInput
  }

  /**
   * episodes updateMany
   */
  export type episodesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update episodes.
     */
    data: XOR<episodesUpdateManyMutationInput, episodesUncheckedUpdateManyInput>
    /**
     * Filter which episodes to update
     */
    where?: episodesWhereInput
    /**
     * Limit how many episodes to update.
     */
    limit?: number
  }

  /**
   * episodes upsert
   */
  export type episodesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the episodes
     */
    select?: episodesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the episodes
     */
    omit?: episodesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: episodesInclude<ExtArgs> | null
    /**
     * The filter to search for the episodes to update in case it exists.
     */
    where: episodesWhereUniqueInput
    /**
     * In case the episodes found by the `where` argument doesn't exist, create a new episodes with this data.
     */
    create: XOR<episodesCreateInput, episodesUncheckedCreateInput>
    /**
     * In case the episodes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<episodesUpdateInput, episodesUncheckedUpdateInput>
  }

  /**
   * episodes delete
   */
  export type episodesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the episodes
     */
    select?: episodesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the episodes
     */
    omit?: episodesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: episodesInclude<ExtArgs> | null
    /**
     * Filter which episodes to delete.
     */
    where: episodesWhereUniqueInput
  }

  /**
   * episodes deleteMany
   */
  export type episodesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which episodes to delete
     */
    where?: episodesWhereInput
    /**
     * Limit how many episodes to delete.
     */
    limit?: number
  }

  /**
   * episodes.films
   */
  export type episodes$filmsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the films
     */
    select?: filmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the films
     */
    omit?: filmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: filmsInclude<ExtArgs> | null
    where?: filmsWhereInput
  }

  /**
   * episodes.video_files
   */
  export type episodes$video_filesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the video_files
     */
    select?: video_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the video_files
     */
    omit?: video_filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: video_filesInclude<ExtArgs> | null
    where?: video_filesWhereInput
    orderBy?: video_filesOrderByWithRelationInput | video_filesOrderByWithRelationInput[]
    cursor?: video_filesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Video_filesScalarFieldEnum | Video_filesScalarFieldEnum[]
  }

  /**
   * episodes.views
   */
  export type episodes$viewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the views
     */
    select?: viewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the views
     */
    omit?: viewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: viewsInclude<ExtArgs> | null
    where?: viewsWhereInput
    orderBy?: viewsOrderByWithRelationInput | viewsOrderByWithRelationInput[]
    cursor?: viewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ViewsScalarFieldEnum | ViewsScalarFieldEnum[]
  }

  /**
   * episodes without action
   */
  export type episodesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the episodes
     */
    select?: episodesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the episodes
     */
    omit?: episodesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: episodesInclude<ExtArgs> | null
  }


  /**
   * Model favorites
   */

  export type AggregateFavorites = {
    _count: FavoritesCountAggregateOutputType | null
    _avg: FavoritesAvgAggregateOutputType | null
    _sum: FavoritesSumAggregateOutputType | null
    _min: FavoritesMinAggregateOutputType | null
    _max: FavoritesMaxAggregateOutputType | null
  }

  export type FavoritesAvgAggregateOutputType = {
    id: number | null
    film_id: number | null
    user_id: number | null
  }

  export type FavoritesSumAggregateOutputType = {
    id: number | null
    film_id: number | null
    user_id: number | null
  }

  export type FavoritesMinAggregateOutputType = {
    id: number | null
    film_id: number | null
    user_id: number | null
    added_at: Date | null
  }

  export type FavoritesMaxAggregateOutputType = {
    id: number | null
    film_id: number | null
    user_id: number | null
    added_at: Date | null
  }

  export type FavoritesCountAggregateOutputType = {
    id: number
    film_id: number
    user_id: number
    added_at: number
    _all: number
  }


  export type FavoritesAvgAggregateInputType = {
    id?: true
    film_id?: true
    user_id?: true
  }

  export type FavoritesSumAggregateInputType = {
    id?: true
    film_id?: true
    user_id?: true
  }

  export type FavoritesMinAggregateInputType = {
    id?: true
    film_id?: true
    user_id?: true
    added_at?: true
  }

  export type FavoritesMaxAggregateInputType = {
    id?: true
    film_id?: true
    user_id?: true
    added_at?: true
  }

  export type FavoritesCountAggregateInputType = {
    id?: true
    film_id?: true
    user_id?: true
    added_at?: true
    _all?: true
  }

  export type FavoritesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which favorites to aggregate.
     */
    where?: favoritesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of favorites to fetch.
     */
    orderBy?: favoritesOrderByWithRelationInput | favoritesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: favoritesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` favorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned favorites
    **/
    _count?: true | FavoritesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FavoritesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FavoritesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FavoritesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FavoritesMaxAggregateInputType
  }

  export type GetFavoritesAggregateType<T extends FavoritesAggregateArgs> = {
        [P in keyof T & keyof AggregateFavorites]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFavorites[P]>
      : GetScalarType<T[P], AggregateFavorites[P]>
  }




  export type favoritesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: favoritesWhereInput
    orderBy?: favoritesOrderByWithAggregationInput | favoritesOrderByWithAggregationInput[]
    by: FavoritesScalarFieldEnum[] | FavoritesScalarFieldEnum
    having?: favoritesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FavoritesCountAggregateInputType | true
    _avg?: FavoritesAvgAggregateInputType
    _sum?: FavoritesSumAggregateInputType
    _min?: FavoritesMinAggregateInputType
    _max?: FavoritesMaxAggregateInputType
  }

  export type FavoritesGroupByOutputType = {
    id: number
    film_id: number | null
    user_id: number | null
    added_at: Date
    _count: FavoritesCountAggregateOutputType | null
    _avg: FavoritesAvgAggregateOutputType | null
    _sum: FavoritesSumAggregateOutputType | null
    _min: FavoritesMinAggregateOutputType | null
    _max: FavoritesMaxAggregateOutputType | null
  }

  type GetFavoritesGroupByPayload<T extends favoritesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FavoritesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FavoritesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FavoritesGroupByOutputType[P]>
            : GetScalarType<T[P], FavoritesGroupByOutputType[P]>
        }
      >
    >


  export type favoritesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    film_id?: boolean
    user_id?: boolean
    added_at?: boolean
    films?: boolean | favorites$filmsArgs<ExtArgs>
    users?: boolean | favorites$usersArgs<ExtArgs>
  }, ExtArgs["result"]["favorites"]>



  export type favoritesSelectScalar = {
    id?: boolean
    film_id?: boolean
    user_id?: boolean
    added_at?: boolean
  }

  export type favoritesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "film_id" | "user_id" | "added_at", ExtArgs["result"]["favorites"]>
  export type favoritesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    films?: boolean | favorites$filmsArgs<ExtArgs>
    users?: boolean | favorites$usersArgs<ExtArgs>
  }

  export type $favoritesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "favorites"
    objects: {
      films: Prisma.$filmsPayload<ExtArgs> | null
      users: Prisma.$usersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      film_id: number | null
      user_id: number | null
      added_at: Date
    }, ExtArgs["result"]["favorites"]>
    composites: {}
  }

  type favoritesGetPayload<S extends boolean | null | undefined | favoritesDefaultArgs> = $Result.GetResult<Prisma.$favoritesPayload, S>

  type favoritesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<favoritesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FavoritesCountAggregateInputType | true
    }

  export interface favoritesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['favorites'], meta: { name: 'favorites' } }
    /**
     * Find zero or one Favorites that matches the filter.
     * @param {favoritesFindUniqueArgs} args - Arguments to find a Favorites
     * @example
     * // Get one Favorites
     * const favorites = await prisma.favorites.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends favoritesFindUniqueArgs>(args: SelectSubset<T, favoritesFindUniqueArgs<ExtArgs>>): Prisma__favoritesClient<$Result.GetResult<Prisma.$favoritesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Favorites that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {favoritesFindUniqueOrThrowArgs} args - Arguments to find a Favorites
     * @example
     * // Get one Favorites
     * const favorites = await prisma.favorites.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends favoritesFindUniqueOrThrowArgs>(args: SelectSubset<T, favoritesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__favoritesClient<$Result.GetResult<Prisma.$favoritesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Favorites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {favoritesFindFirstArgs} args - Arguments to find a Favorites
     * @example
     * // Get one Favorites
     * const favorites = await prisma.favorites.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends favoritesFindFirstArgs>(args?: SelectSubset<T, favoritesFindFirstArgs<ExtArgs>>): Prisma__favoritesClient<$Result.GetResult<Prisma.$favoritesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Favorites that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {favoritesFindFirstOrThrowArgs} args - Arguments to find a Favorites
     * @example
     * // Get one Favorites
     * const favorites = await prisma.favorites.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends favoritesFindFirstOrThrowArgs>(args?: SelectSubset<T, favoritesFindFirstOrThrowArgs<ExtArgs>>): Prisma__favoritesClient<$Result.GetResult<Prisma.$favoritesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Favorites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {favoritesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Favorites
     * const favorites = await prisma.favorites.findMany()
     * 
     * // Get first 10 Favorites
     * const favorites = await prisma.favorites.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const favoritesWithIdOnly = await prisma.favorites.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends favoritesFindManyArgs>(args?: SelectSubset<T, favoritesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$favoritesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Favorites.
     * @param {favoritesCreateArgs} args - Arguments to create a Favorites.
     * @example
     * // Create one Favorites
     * const Favorites = await prisma.favorites.create({
     *   data: {
     *     // ... data to create a Favorites
     *   }
     * })
     * 
     */
    create<T extends favoritesCreateArgs>(args: SelectSubset<T, favoritesCreateArgs<ExtArgs>>): Prisma__favoritesClient<$Result.GetResult<Prisma.$favoritesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Favorites.
     * @param {favoritesCreateManyArgs} args - Arguments to create many Favorites.
     * @example
     * // Create many Favorites
     * const favorites = await prisma.favorites.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends favoritesCreateManyArgs>(args?: SelectSubset<T, favoritesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Favorites.
     * @param {favoritesDeleteArgs} args - Arguments to delete one Favorites.
     * @example
     * // Delete one Favorites
     * const Favorites = await prisma.favorites.delete({
     *   where: {
     *     // ... filter to delete one Favorites
     *   }
     * })
     * 
     */
    delete<T extends favoritesDeleteArgs>(args: SelectSubset<T, favoritesDeleteArgs<ExtArgs>>): Prisma__favoritesClient<$Result.GetResult<Prisma.$favoritesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Favorites.
     * @param {favoritesUpdateArgs} args - Arguments to update one Favorites.
     * @example
     * // Update one Favorites
     * const favorites = await prisma.favorites.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends favoritesUpdateArgs>(args: SelectSubset<T, favoritesUpdateArgs<ExtArgs>>): Prisma__favoritesClient<$Result.GetResult<Prisma.$favoritesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Favorites.
     * @param {favoritesDeleteManyArgs} args - Arguments to filter Favorites to delete.
     * @example
     * // Delete a few Favorites
     * const { count } = await prisma.favorites.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends favoritesDeleteManyArgs>(args?: SelectSubset<T, favoritesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Favorites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {favoritesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Favorites
     * const favorites = await prisma.favorites.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends favoritesUpdateManyArgs>(args: SelectSubset<T, favoritesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Favorites.
     * @param {favoritesUpsertArgs} args - Arguments to update or create a Favorites.
     * @example
     * // Update or create a Favorites
     * const favorites = await prisma.favorites.upsert({
     *   create: {
     *     // ... data to create a Favorites
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Favorites we want to update
     *   }
     * })
     */
    upsert<T extends favoritesUpsertArgs>(args: SelectSubset<T, favoritesUpsertArgs<ExtArgs>>): Prisma__favoritesClient<$Result.GetResult<Prisma.$favoritesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Favorites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {favoritesCountArgs} args - Arguments to filter Favorites to count.
     * @example
     * // Count the number of Favorites
     * const count = await prisma.favorites.count({
     *   where: {
     *     // ... the filter for the Favorites we want to count
     *   }
     * })
    **/
    count<T extends favoritesCountArgs>(
      args?: Subset<T, favoritesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FavoritesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Favorites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoritesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FavoritesAggregateArgs>(args: Subset<T, FavoritesAggregateArgs>): Prisma.PrismaPromise<GetFavoritesAggregateType<T>>

    /**
     * Group by Favorites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {favoritesGroupByArgs} args - Group by arguments.
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
      T extends favoritesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: favoritesGroupByArgs['orderBy'] }
        : { orderBy?: favoritesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, favoritesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFavoritesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the favorites model
   */
  readonly fields: favoritesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for favorites.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__favoritesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    films<T extends favorites$filmsArgs<ExtArgs> = {}>(args?: Subset<T, favorites$filmsArgs<ExtArgs>>): Prisma__filmsClient<$Result.GetResult<Prisma.$filmsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    users<T extends favorites$usersArgs<ExtArgs> = {}>(args?: Subset<T, favorites$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the favorites model
   */
  interface favoritesFieldRefs {
    readonly id: FieldRef<"favorites", 'Int'>
    readonly film_id: FieldRef<"favorites", 'Int'>
    readonly user_id: FieldRef<"favorites", 'Int'>
    readonly added_at: FieldRef<"favorites", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * favorites findUnique
   */
  export type favoritesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favorites
     */
    select?: favoritesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the favorites
     */
    omit?: favoritesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favoritesInclude<ExtArgs> | null
    /**
     * Filter, which favorites to fetch.
     */
    where: favoritesWhereUniqueInput
  }

  /**
   * favorites findUniqueOrThrow
   */
  export type favoritesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favorites
     */
    select?: favoritesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the favorites
     */
    omit?: favoritesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favoritesInclude<ExtArgs> | null
    /**
     * Filter, which favorites to fetch.
     */
    where: favoritesWhereUniqueInput
  }

  /**
   * favorites findFirst
   */
  export type favoritesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favorites
     */
    select?: favoritesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the favorites
     */
    omit?: favoritesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favoritesInclude<ExtArgs> | null
    /**
     * Filter, which favorites to fetch.
     */
    where?: favoritesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of favorites to fetch.
     */
    orderBy?: favoritesOrderByWithRelationInput | favoritesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for favorites.
     */
    cursor?: favoritesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` favorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of favorites.
     */
    distinct?: FavoritesScalarFieldEnum | FavoritesScalarFieldEnum[]
  }

  /**
   * favorites findFirstOrThrow
   */
  export type favoritesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favorites
     */
    select?: favoritesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the favorites
     */
    omit?: favoritesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favoritesInclude<ExtArgs> | null
    /**
     * Filter, which favorites to fetch.
     */
    where?: favoritesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of favorites to fetch.
     */
    orderBy?: favoritesOrderByWithRelationInput | favoritesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for favorites.
     */
    cursor?: favoritesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` favorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of favorites.
     */
    distinct?: FavoritesScalarFieldEnum | FavoritesScalarFieldEnum[]
  }

  /**
   * favorites findMany
   */
  export type favoritesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favorites
     */
    select?: favoritesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the favorites
     */
    omit?: favoritesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favoritesInclude<ExtArgs> | null
    /**
     * Filter, which favorites to fetch.
     */
    where?: favoritesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of favorites to fetch.
     */
    orderBy?: favoritesOrderByWithRelationInput | favoritesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing favorites.
     */
    cursor?: favoritesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` favorites.
     */
    skip?: number
    distinct?: FavoritesScalarFieldEnum | FavoritesScalarFieldEnum[]
  }

  /**
   * favorites create
   */
  export type favoritesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favorites
     */
    select?: favoritesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the favorites
     */
    omit?: favoritesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favoritesInclude<ExtArgs> | null
    /**
     * The data needed to create a favorites.
     */
    data?: XOR<favoritesCreateInput, favoritesUncheckedCreateInput>
  }

  /**
   * favorites createMany
   */
  export type favoritesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many favorites.
     */
    data: favoritesCreateManyInput | favoritesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * favorites update
   */
  export type favoritesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favorites
     */
    select?: favoritesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the favorites
     */
    omit?: favoritesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favoritesInclude<ExtArgs> | null
    /**
     * The data needed to update a favorites.
     */
    data: XOR<favoritesUpdateInput, favoritesUncheckedUpdateInput>
    /**
     * Choose, which favorites to update.
     */
    where: favoritesWhereUniqueInput
  }

  /**
   * favorites updateMany
   */
  export type favoritesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update favorites.
     */
    data: XOR<favoritesUpdateManyMutationInput, favoritesUncheckedUpdateManyInput>
    /**
     * Filter which favorites to update
     */
    where?: favoritesWhereInput
    /**
     * Limit how many favorites to update.
     */
    limit?: number
  }

  /**
   * favorites upsert
   */
  export type favoritesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favorites
     */
    select?: favoritesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the favorites
     */
    omit?: favoritesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favoritesInclude<ExtArgs> | null
    /**
     * The filter to search for the favorites to update in case it exists.
     */
    where: favoritesWhereUniqueInput
    /**
     * In case the favorites found by the `where` argument doesn't exist, create a new favorites with this data.
     */
    create: XOR<favoritesCreateInput, favoritesUncheckedCreateInput>
    /**
     * In case the favorites was found with the provided `where` argument, update it with this data.
     */
    update: XOR<favoritesUpdateInput, favoritesUncheckedUpdateInput>
  }

  /**
   * favorites delete
   */
  export type favoritesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favorites
     */
    select?: favoritesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the favorites
     */
    omit?: favoritesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favoritesInclude<ExtArgs> | null
    /**
     * Filter which favorites to delete.
     */
    where: favoritesWhereUniqueInput
  }

  /**
   * favorites deleteMany
   */
  export type favoritesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which favorites to delete
     */
    where?: favoritesWhereInput
    /**
     * Limit how many favorites to delete.
     */
    limit?: number
  }

  /**
   * favorites.films
   */
  export type favorites$filmsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the films
     */
    select?: filmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the films
     */
    omit?: filmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: filmsInclude<ExtArgs> | null
    where?: filmsWhereInput
  }

  /**
   * favorites.users
   */
  export type favorites$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  }

  /**
   * favorites without action
   */
  export type favoritesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favorites
     */
    select?: favoritesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the favorites
     */
    omit?: favoritesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favoritesInclude<ExtArgs> | null
  }


  /**
   * Model feedbacks
   */

  export type AggregateFeedbacks = {
    _count: FeedbacksCountAggregateOutputType | null
    _avg: FeedbacksAvgAggregateOutputType | null
    _sum: FeedbacksSumAggregateOutputType | null
    _min: FeedbacksMinAggregateOutputType | null
    _max: FeedbacksMaxAggregateOutputType | null
  }

  export type FeedbacksAvgAggregateOutputType = {
    id: number | null
    film_id: number | null
    user_id: number | null
    rating: number | null
  }

  export type FeedbacksSumAggregateOutputType = {
    id: number | null
    film_id: number | null
    user_id: number | null
    rating: number | null
  }

  export type FeedbacksMinAggregateOutputType = {
    id: number | null
    film_id: number | null
    user_id: number | null
    comment: string | null
    rating: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type FeedbacksMaxAggregateOutputType = {
    id: number | null
    film_id: number | null
    user_id: number | null
    comment: string | null
    rating: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type FeedbacksCountAggregateOutputType = {
    id: number
    film_id: number
    user_id: number
    comment: number
    rating: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type FeedbacksAvgAggregateInputType = {
    id?: true
    film_id?: true
    user_id?: true
    rating?: true
  }

  export type FeedbacksSumAggregateInputType = {
    id?: true
    film_id?: true
    user_id?: true
    rating?: true
  }

  export type FeedbacksMinAggregateInputType = {
    id?: true
    film_id?: true
    user_id?: true
    comment?: true
    rating?: true
    created_at?: true
    updated_at?: true
  }

  export type FeedbacksMaxAggregateInputType = {
    id?: true
    film_id?: true
    user_id?: true
    comment?: true
    rating?: true
    created_at?: true
    updated_at?: true
  }

  export type FeedbacksCountAggregateInputType = {
    id?: true
    film_id?: true
    user_id?: true
    comment?: true
    rating?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type FeedbacksAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which feedbacks to aggregate.
     */
    where?: feedbacksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of feedbacks to fetch.
     */
    orderBy?: feedbacksOrderByWithRelationInput | feedbacksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: feedbacksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned feedbacks
    **/
    _count?: true | FeedbacksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FeedbacksAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FeedbacksSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FeedbacksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FeedbacksMaxAggregateInputType
  }

  export type GetFeedbacksAggregateType<T extends FeedbacksAggregateArgs> = {
        [P in keyof T & keyof AggregateFeedbacks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeedbacks[P]>
      : GetScalarType<T[P], AggregateFeedbacks[P]>
  }




  export type feedbacksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: feedbacksWhereInput
    orderBy?: feedbacksOrderByWithAggregationInput | feedbacksOrderByWithAggregationInput[]
    by: FeedbacksScalarFieldEnum[] | FeedbacksScalarFieldEnum
    having?: feedbacksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FeedbacksCountAggregateInputType | true
    _avg?: FeedbacksAvgAggregateInputType
    _sum?: FeedbacksSumAggregateInputType
    _min?: FeedbacksMinAggregateInputType
    _max?: FeedbacksMaxAggregateInputType
  }

  export type FeedbacksGroupByOutputType = {
    id: number
    film_id: number | null
    user_id: number | null
    comment: string | null
    rating: number | null
    created_at: Date
    updated_at: Date
    _count: FeedbacksCountAggregateOutputType | null
    _avg: FeedbacksAvgAggregateOutputType | null
    _sum: FeedbacksSumAggregateOutputType | null
    _min: FeedbacksMinAggregateOutputType | null
    _max: FeedbacksMaxAggregateOutputType | null
  }

  type GetFeedbacksGroupByPayload<T extends feedbacksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FeedbacksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FeedbacksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeedbacksGroupByOutputType[P]>
            : GetScalarType<T[P], FeedbacksGroupByOutputType[P]>
        }
      >
    >


  export type feedbacksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    film_id?: boolean
    user_id?: boolean
    comment?: boolean
    rating?: boolean
    created_at?: boolean
    updated_at?: boolean
    films?: boolean | feedbacks$filmsArgs<ExtArgs>
    users?: boolean | feedbacks$usersArgs<ExtArgs>
  }, ExtArgs["result"]["feedbacks"]>



  export type feedbacksSelectScalar = {
    id?: boolean
    film_id?: boolean
    user_id?: boolean
    comment?: boolean
    rating?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type feedbacksOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "film_id" | "user_id" | "comment" | "rating" | "created_at" | "updated_at", ExtArgs["result"]["feedbacks"]>
  export type feedbacksInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    films?: boolean | feedbacks$filmsArgs<ExtArgs>
    users?: boolean | feedbacks$usersArgs<ExtArgs>
  }

  export type $feedbacksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "feedbacks"
    objects: {
      films: Prisma.$filmsPayload<ExtArgs> | null
      users: Prisma.$usersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      film_id: number | null
      user_id: number | null
      comment: string | null
      rating: number | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["feedbacks"]>
    composites: {}
  }

  type feedbacksGetPayload<S extends boolean | null | undefined | feedbacksDefaultArgs> = $Result.GetResult<Prisma.$feedbacksPayload, S>

  type feedbacksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<feedbacksFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FeedbacksCountAggregateInputType | true
    }

  export interface feedbacksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['feedbacks'], meta: { name: 'feedbacks' } }
    /**
     * Find zero or one Feedbacks that matches the filter.
     * @param {feedbacksFindUniqueArgs} args - Arguments to find a Feedbacks
     * @example
     * // Get one Feedbacks
     * const feedbacks = await prisma.feedbacks.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends feedbacksFindUniqueArgs>(args: SelectSubset<T, feedbacksFindUniqueArgs<ExtArgs>>): Prisma__feedbacksClient<$Result.GetResult<Prisma.$feedbacksPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Feedbacks that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {feedbacksFindUniqueOrThrowArgs} args - Arguments to find a Feedbacks
     * @example
     * // Get one Feedbacks
     * const feedbacks = await prisma.feedbacks.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends feedbacksFindUniqueOrThrowArgs>(args: SelectSubset<T, feedbacksFindUniqueOrThrowArgs<ExtArgs>>): Prisma__feedbacksClient<$Result.GetResult<Prisma.$feedbacksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Feedbacks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {feedbacksFindFirstArgs} args - Arguments to find a Feedbacks
     * @example
     * // Get one Feedbacks
     * const feedbacks = await prisma.feedbacks.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends feedbacksFindFirstArgs>(args?: SelectSubset<T, feedbacksFindFirstArgs<ExtArgs>>): Prisma__feedbacksClient<$Result.GetResult<Prisma.$feedbacksPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Feedbacks that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {feedbacksFindFirstOrThrowArgs} args - Arguments to find a Feedbacks
     * @example
     * // Get one Feedbacks
     * const feedbacks = await prisma.feedbacks.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends feedbacksFindFirstOrThrowArgs>(args?: SelectSubset<T, feedbacksFindFirstOrThrowArgs<ExtArgs>>): Prisma__feedbacksClient<$Result.GetResult<Prisma.$feedbacksPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Feedbacks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {feedbacksFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Feedbacks
     * const feedbacks = await prisma.feedbacks.findMany()
     * 
     * // Get first 10 Feedbacks
     * const feedbacks = await prisma.feedbacks.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const feedbacksWithIdOnly = await prisma.feedbacks.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends feedbacksFindManyArgs>(args?: SelectSubset<T, feedbacksFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$feedbacksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Feedbacks.
     * @param {feedbacksCreateArgs} args - Arguments to create a Feedbacks.
     * @example
     * // Create one Feedbacks
     * const Feedbacks = await prisma.feedbacks.create({
     *   data: {
     *     // ... data to create a Feedbacks
     *   }
     * })
     * 
     */
    create<T extends feedbacksCreateArgs>(args: SelectSubset<T, feedbacksCreateArgs<ExtArgs>>): Prisma__feedbacksClient<$Result.GetResult<Prisma.$feedbacksPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Feedbacks.
     * @param {feedbacksCreateManyArgs} args - Arguments to create many Feedbacks.
     * @example
     * // Create many Feedbacks
     * const feedbacks = await prisma.feedbacks.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends feedbacksCreateManyArgs>(args?: SelectSubset<T, feedbacksCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Feedbacks.
     * @param {feedbacksDeleteArgs} args - Arguments to delete one Feedbacks.
     * @example
     * // Delete one Feedbacks
     * const Feedbacks = await prisma.feedbacks.delete({
     *   where: {
     *     // ... filter to delete one Feedbacks
     *   }
     * })
     * 
     */
    delete<T extends feedbacksDeleteArgs>(args: SelectSubset<T, feedbacksDeleteArgs<ExtArgs>>): Prisma__feedbacksClient<$Result.GetResult<Prisma.$feedbacksPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Feedbacks.
     * @param {feedbacksUpdateArgs} args - Arguments to update one Feedbacks.
     * @example
     * // Update one Feedbacks
     * const feedbacks = await prisma.feedbacks.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends feedbacksUpdateArgs>(args: SelectSubset<T, feedbacksUpdateArgs<ExtArgs>>): Prisma__feedbacksClient<$Result.GetResult<Prisma.$feedbacksPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Feedbacks.
     * @param {feedbacksDeleteManyArgs} args - Arguments to filter Feedbacks to delete.
     * @example
     * // Delete a few Feedbacks
     * const { count } = await prisma.feedbacks.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends feedbacksDeleteManyArgs>(args?: SelectSubset<T, feedbacksDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Feedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {feedbacksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Feedbacks
     * const feedbacks = await prisma.feedbacks.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends feedbacksUpdateManyArgs>(args: SelectSubset<T, feedbacksUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Feedbacks.
     * @param {feedbacksUpsertArgs} args - Arguments to update or create a Feedbacks.
     * @example
     * // Update or create a Feedbacks
     * const feedbacks = await prisma.feedbacks.upsert({
     *   create: {
     *     // ... data to create a Feedbacks
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Feedbacks we want to update
     *   }
     * })
     */
    upsert<T extends feedbacksUpsertArgs>(args: SelectSubset<T, feedbacksUpsertArgs<ExtArgs>>): Prisma__feedbacksClient<$Result.GetResult<Prisma.$feedbacksPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Feedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {feedbacksCountArgs} args - Arguments to filter Feedbacks to count.
     * @example
     * // Count the number of Feedbacks
     * const count = await prisma.feedbacks.count({
     *   where: {
     *     // ... the filter for the Feedbacks we want to count
     *   }
     * })
    **/
    count<T extends feedbacksCountArgs>(
      args?: Subset<T, feedbacksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeedbacksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Feedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbacksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FeedbacksAggregateArgs>(args: Subset<T, FeedbacksAggregateArgs>): Prisma.PrismaPromise<GetFeedbacksAggregateType<T>>

    /**
     * Group by Feedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {feedbacksGroupByArgs} args - Group by arguments.
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
      T extends feedbacksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: feedbacksGroupByArgs['orderBy'] }
        : { orderBy?: feedbacksGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, feedbacksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeedbacksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the feedbacks model
   */
  readonly fields: feedbacksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for feedbacks.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__feedbacksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    films<T extends feedbacks$filmsArgs<ExtArgs> = {}>(args?: Subset<T, feedbacks$filmsArgs<ExtArgs>>): Prisma__filmsClient<$Result.GetResult<Prisma.$filmsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    users<T extends feedbacks$usersArgs<ExtArgs> = {}>(args?: Subset<T, feedbacks$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the feedbacks model
   */
  interface feedbacksFieldRefs {
    readonly id: FieldRef<"feedbacks", 'Int'>
    readonly film_id: FieldRef<"feedbacks", 'Int'>
    readonly user_id: FieldRef<"feedbacks", 'Int'>
    readonly comment: FieldRef<"feedbacks", 'String'>
    readonly rating: FieldRef<"feedbacks", 'Int'>
    readonly created_at: FieldRef<"feedbacks", 'DateTime'>
    readonly updated_at: FieldRef<"feedbacks", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * feedbacks findUnique
   */
  export type feedbacksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feedbacks
     */
    select?: feedbacksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feedbacks
     */
    omit?: feedbacksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feedbacksInclude<ExtArgs> | null
    /**
     * Filter, which feedbacks to fetch.
     */
    where: feedbacksWhereUniqueInput
  }

  /**
   * feedbacks findUniqueOrThrow
   */
  export type feedbacksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feedbacks
     */
    select?: feedbacksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feedbacks
     */
    omit?: feedbacksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feedbacksInclude<ExtArgs> | null
    /**
     * Filter, which feedbacks to fetch.
     */
    where: feedbacksWhereUniqueInput
  }

  /**
   * feedbacks findFirst
   */
  export type feedbacksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feedbacks
     */
    select?: feedbacksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feedbacks
     */
    omit?: feedbacksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feedbacksInclude<ExtArgs> | null
    /**
     * Filter, which feedbacks to fetch.
     */
    where?: feedbacksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of feedbacks to fetch.
     */
    orderBy?: feedbacksOrderByWithRelationInput | feedbacksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for feedbacks.
     */
    cursor?: feedbacksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of feedbacks.
     */
    distinct?: FeedbacksScalarFieldEnum | FeedbacksScalarFieldEnum[]
  }

  /**
   * feedbacks findFirstOrThrow
   */
  export type feedbacksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feedbacks
     */
    select?: feedbacksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feedbacks
     */
    omit?: feedbacksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feedbacksInclude<ExtArgs> | null
    /**
     * Filter, which feedbacks to fetch.
     */
    where?: feedbacksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of feedbacks to fetch.
     */
    orderBy?: feedbacksOrderByWithRelationInput | feedbacksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for feedbacks.
     */
    cursor?: feedbacksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of feedbacks.
     */
    distinct?: FeedbacksScalarFieldEnum | FeedbacksScalarFieldEnum[]
  }

  /**
   * feedbacks findMany
   */
  export type feedbacksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feedbacks
     */
    select?: feedbacksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feedbacks
     */
    omit?: feedbacksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feedbacksInclude<ExtArgs> | null
    /**
     * Filter, which feedbacks to fetch.
     */
    where?: feedbacksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of feedbacks to fetch.
     */
    orderBy?: feedbacksOrderByWithRelationInput | feedbacksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing feedbacks.
     */
    cursor?: feedbacksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` feedbacks.
     */
    skip?: number
    distinct?: FeedbacksScalarFieldEnum | FeedbacksScalarFieldEnum[]
  }

  /**
   * feedbacks create
   */
  export type feedbacksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feedbacks
     */
    select?: feedbacksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feedbacks
     */
    omit?: feedbacksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feedbacksInclude<ExtArgs> | null
    /**
     * The data needed to create a feedbacks.
     */
    data?: XOR<feedbacksCreateInput, feedbacksUncheckedCreateInput>
  }

  /**
   * feedbacks createMany
   */
  export type feedbacksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many feedbacks.
     */
    data: feedbacksCreateManyInput | feedbacksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * feedbacks update
   */
  export type feedbacksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feedbacks
     */
    select?: feedbacksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feedbacks
     */
    omit?: feedbacksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feedbacksInclude<ExtArgs> | null
    /**
     * The data needed to update a feedbacks.
     */
    data: XOR<feedbacksUpdateInput, feedbacksUncheckedUpdateInput>
    /**
     * Choose, which feedbacks to update.
     */
    where: feedbacksWhereUniqueInput
  }

  /**
   * feedbacks updateMany
   */
  export type feedbacksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update feedbacks.
     */
    data: XOR<feedbacksUpdateManyMutationInput, feedbacksUncheckedUpdateManyInput>
    /**
     * Filter which feedbacks to update
     */
    where?: feedbacksWhereInput
    /**
     * Limit how many feedbacks to update.
     */
    limit?: number
  }

  /**
   * feedbacks upsert
   */
  export type feedbacksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feedbacks
     */
    select?: feedbacksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feedbacks
     */
    omit?: feedbacksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feedbacksInclude<ExtArgs> | null
    /**
     * The filter to search for the feedbacks to update in case it exists.
     */
    where: feedbacksWhereUniqueInput
    /**
     * In case the feedbacks found by the `where` argument doesn't exist, create a new feedbacks with this data.
     */
    create: XOR<feedbacksCreateInput, feedbacksUncheckedCreateInput>
    /**
     * In case the feedbacks was found with the provided `where` argument, update it with this data.
     */
    update: XOR<feedbacksUpdateInput, feedbacksUncheckedUpdateInput>
  }

  /**
   * feedbacks delete
   */
  export type feedbacksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feedbacks
     */
    select?: feedbacksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feedbacks
     */
    omit?: feedbacksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feedbacksInclude<ExtArgs> | null
    /**
     * Filter which feedbacks to delete.
     */
    where: feedbacksWhereUniqueInput
  }

  /**
   * feedbacks deleteMany
   */
  export type feedbacksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which feedbacks to delete
     */
    where?: feedbacksWhereInput
    /**
     * Limit how many feedbacks to delete.
     */
    limit?: number
  }

  /**
   * feedbacks.films
   */
  export type feedbacks$filmsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the films
     */
    select?: filmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the films
     */
    omit?: filmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: filmsInclude<ExtArgs> | null
    where?: filmsWhereInput
  }

  /**
   * feedbacks.users
   */
  export type feedbacks$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  }

  /**
   * feedbacks without action
   */
  export type feedbacksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feedbacks
     */
    select?: feedbacksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feedbacks
     */
    omit?: feedbacksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feedbacksInclude<ExtArgs> | null
  }


  /**
   * Model film_genres
   */

  export type AggregateFilm_genres = {
    _count: Film_genresCountAggregateOutputType | null
    _avg: Film_genresAvgAggregateOutputType | null
    _sum: Film_genresSumAggregateOutputType | null
    _min: Film_genresMinAggregateOutputType | null
    _max: Film_genresMaxAggregateOutputType | null
  }

  export type Film_genresAvgAggregateOutputType = {
    id: number | null
    genres_id: number | null
    film_id: number | null
  }

  export type Film_genresSumAggregateOutputType = {
    id: number | null
    genres_id: number | null
    film_id: number | null
  }

  export type Film_genresMinAggregateOutputType = {
    id: number | null
    genres_id: number | null
    film_id: number | null
  }

  export type Film_genresMaxAggregateOutputType = {
    id: number | null
    genres_id: number | null
    film_id: number | null
  }

  export type Film_genresCountAggregateOutputType = {
    id: number
    genres_id: number
    film_id: number
    _all: number
  }


  export type Film_genresAvgAggregateInputType = {
    id?: true
    genres_id?: true
    film_id?: true
  }

  export type Film_genresSumAggregateInputType = {
    id?: true
    genres_id?: true
    film_id?: true
  }

  export type Film_genresMinAggregateInputType = {
    id?: true
    genres_id?: true
    film_id?: true
  }

  export type Film_genresMaxAggregateInputType = {
    id?: true
    genres_id?: true
    film_id?: true
  }

  export type Film_genresCountAggregateInputType = {
    id?: true
    genres_id?: true
    film_id?: true
    _all?: true
  }

  export type Film_genresAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which film_genres to aggregate.
     */
    where?: film_genresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of film_genres to fetch.
     */
    orderBy?: film_genresOrderByWithRelationInput | film_genresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: film_genresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` film_genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` film_genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned film_genres
    **/
    _count?: true | Film_genresCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Film_genresAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Film_genresSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Film_genresMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Film_genresMaxAggregateInputType
  }

  export type GetFilm_genresAggregateType<T extends Film_genresAggregateArgs> = {
        [P in keyof T & keyof AggregateFilm_genres]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFilm_genres[P]>
      : GetScalarType<T[P], AggregateFilm_genres[P]>
  }




  export type film_genresGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: film_genresWhereInput
    orderBy?: film_genresOrderByWithAggregationInput | film_genresOrderByWithAggregationInput[]
    by: Film_genresScalarFieldEnum[] | Film_genresScalarFieldEnum
    having?: film_genresScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Film_genresCountAggregateInputType | true
    _avg?: Film_genresAvgAggregateInputType
    _sum?: Film_genresSumAggregateInputType
    _min?: Film_genresMinAggregateInputType
    _max?: Film_genresMaxAggregateInputType
  }

  export type Film_genresGroupByOutputType = {
    id: number
    genres_id: number | null
    film_id: number | null
    _count: Film_genresCountAggregateOutputType | null
    _avg: Film_genresAvgAggregateOutputType | null
    _sum: Film_genresSumAggregateOutputType | null
    _min: Film_genresMinAggregateOutputType | null
    _max: Film_genresMaxAggregateOutputType | null
  }

  type GetFilm_genresGroupByPayload<T extends film_genresGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Film_genresGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Film_genresGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Film_genresGroupByOutputType[P]>
            : GetScalarType<T[P], Film_genresGroupByOutputType[P]>
        }
      >
    >


  export type film_genresSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    genres_id?: boolean
    film_id?: boolean
    genres?: boolean | film_genres$genresArgs<ExtArgs>
    films?: boolean | film_genres$filmsArgs<ExtArgs>
  }, ExtArgs["result"]["film_genres"]>



  export type film_genresSelectScalar = {
    id?: boolean
    genres_id?: boolean
    film_id?: boolean
  }

  export type film_genresOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "genres_id" | "film_id", ExtArgs["result"]["film_genres"]>
  export type film_genresInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    genres?: boolean | film_genres$genresArgs<ExtArgs>
    films?: boolean | film_genres$filmsArgs<ExtArgs>
  }

  export type $film_genresPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "film_genres"
    objects: {
      genres: Prisma.$genresPayload<ExtArgs> | null
      films: Prisma.$filmsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      genres_id: number | null
      film_id: number | null
    }, ExtArgs["result"]["film_genres"]>
    composites: {}
  }

  type film_genresGetPayload<S extends boolean | null | undefined | film_genresDefaultArgs> = $Result.GetResult<Prisma.$film_genresPayload, S>

  type film_genresCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<film_genresFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Film_genresCountAggregateInputType | true
    }

  export interface film_genresDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['film_genres'], meta: { name: 'film_genres' } }
    /**
     * Find zero or one Film_genres that matches the filter.
     * @param {film_genresFindUniqueArgs} args - Arguments to find a Film_genres
     * @example
     * // Get one Film_genres
     * const film_genres = await prisma.film_genres.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends film_genresFindUniqueArgs>(args: SelectSubset<T, film_genresFindUniqueArgs<ExtArgs>>): Prisma__film_genresClient<$Result.GetResult<Prisma.$film_genresPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Film_genres that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {film_genresFindUniqueOrThrowArgs} args - Arguments to find a Film_genres
     * @example
     * // Get one Film_genres
     * const film_genres = await prisma.film_genres.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends film_genresFindUniqueOrThrowArgs>(args: SelectSubset<T, film_genresFindUniqueOrThrowArgs<ExtArgs>>): Prisma__film_genresClient<$Result.GetResult<Prisma.$film_genresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Film_genres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {film_genresFindFirstArgs} args - Arguments to find a Film_genres
     * @example
     * // Get one Film_genres
     * const film_genres = await prisma.film_genres.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends film_genresFindFirstArgs>(args?: SelectSubset<T, film_genresFindFirstArgs<ExtArgs>>): Prisma__film_genresClient<$Result.GetResult<Prisma.$film_genresPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Film_genres that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {film_genresFindFirstOrThrowArgs} args - Arguments to find a Film_genres
     * @example
     * // Get one Film_genres
     * const film_genres = await prisma.film_genres.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends film_genresFindFirstOrThrowArgs>(args?: SelectSubset<T, film_genresFindFirstOrThrowArgs<ExtArgs>>): Prisma__film_genresClient<$Result.GetResult<Prisma.$film_genresPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Film_genres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {film_genresFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Film_genres
     * const film_genres = await prisma.film_genres.findMany()
     * 
     * // Get first 10 Film_genres
     * const film_genres = await prisma.film_genres.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const film_genresWithIdOnly = await prisma.film_genres.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends film_genresFindManyArgs>(args?: SelectSubset<T, film_genresFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$film_genresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Film_genres.
     * @param {film_genresCreateArgs} args - Arguments to create a Film_genres.
     * @example
     * // Create one Film_genres
     * const Film_genres = await prisma.film_genres.create({
     *   data: {
     *     // ... data to create a Film_genres
     *   }
     * })
     * 
     */
    create<T extends film_genresCreateArgs>(args: SelectSubset<T, film_genresCreateArgs<ExtArgs>>): Prisma__film_genresClient<$Result.GetResult<Prisma.$film_genresPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Film_genres.
     * @param {film_genresCreateManyArgs} args - Arguments to create many Film_genres.
     * @example
     * // Create many Film_genres
     * const film_genres = await prisma.film_genres.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends film_genresCreateManyArgs>(args?: SelectSubset<T, film_genresCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Film_genres.
     * @param {film_genresDeleteArgs} args - Arguments to delete one Film_genres.
     * @example
     * // Delete one Film_genres
     * const Film_genres = await prisma.film_genres.delete({
     *   where: {
     *     // ... filter to delete one Film_genres
     *   }
     * })
     * 
     */
    delete<T extends film_genresDeleteArgs>(args: SelectSubset<T, film_genresDeleteArgs<ExtArgs>>): Prisma__film_genresClient<$Result.GetResult<Prisma.$film_genresPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Film_genres.
     * @param {film_genresUpdateArgs} args - Arguments to update one Film_genres.
     * @example
     * // Update one Film_genres
     * const film_genres = await prisma.film_genres.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends film_genresUpdateArgs>(args: SelectSubset<T, film_genresUpdateArgs<ExtArgs>>): Prisma__film_genresClient<$Result.GetResult<Prisma.$film_genresPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Film_genres.
     * @param {film_genresDeleteManyArgs} args - Arguments to filter Film_genres to delete.
     * @example
     * // Delete a few Film_genres
     * const { count } = await prisma.film_genres.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends film_genresDeleteManyArgs>(args?: SelectSubset<T, film_genresDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Film_genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {film_genresUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Film_genres
     * const film_genres = await prisma.film_genres.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends film_genresUpdateManyArgs>(args: SelectSubset<T, film_genresUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Film_genres.
     * @param {film_genresUpsertArgs} args - Arguments to update or create a Film_genres.
     * @example
     * // Update or create a Film_genres
     * const film_genres = await prisma.film_genres.upsert({
     *   create: {
     *     // ... data to create a Film_genres
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Film_genres we want to update
     *   }
     * })
     */
    upsert<T extends film_genresUpsertArgs>(args: SelectSubset<T, film_genresUpsertArgs<ExtArgs>>): Prisma__film_genresClient<$Result.GetResult<Prisma.$film_genresPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Film_genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {film_genresCountArgs} args - Arguments to filter Film_genres to count.
     * @example
     * // Count the number of Film_genres
     * const count = await prisma.film_genres.count({
     *   where: {
     *     // ... the filter for the Film_genres we want to count
     *   }
     * })
    **/
    count<T extends film_genresCountArgs>(
      args?: Subset<T, film_genresCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Film_genresCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Film_genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Film_genresAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Film_genresAggregateArgs>(args: Subset<T, Film_genresAggregateArgs>): Prisma.PrismaPromise<GetFilm_genresAggregateType<T>>

    /**
     * Group by Film_genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {film_genresGroupByArgs} args - Group by arguments.
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
      T extends film_genresGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: film_genresGroupByArgs['orderBy'] }
        : { orderBy?: film_genresGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, film_genresGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFilm_genresGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the film_genres model
   */
  readonly fields: film_genresFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for film_genres.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__film_genresClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    genres<T extends film_genres$genresArgs<ExtArgs> = {}>(args?: Subset<T, film_genres$genresArgs<ExtArgs>>): Prisma__genresClient<$Result.GetResult<Prisma.$genresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    films<T extends film_genres$filmsArgs<ExtArgs> = {}>(args?: Subset<T, film_genres$filmsArgs<ExtArgs>>): Prisma__filmsClient<$Result.GetResult<Prisma.$filmsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the film_genres model
   */
  interface film_genresFieldRefs {
    readonly id: FieldRef<"film_genres", 'Int'>
    readonly genres_id: FieldRef<"film_genres", 'Int'>
    readonly film_id: FieldRef<"film_genres", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * film_genres findUnique
   */
  export type film_genresFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the film_genres
     */
    select?: film_genresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the film_genres
     */
    omit?: film_genresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: film_genresInclude<ExtArgs> | null
    /**
     * Filter, which film_genres to fetch.
     */
    where: film_genresWhereUniqueInput
  }

  /**
   * film_genres findUniqueOrThrow
   */
  export type film_genresFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the film_genres
     */
    select?: film_genresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the film_genres
     */
    omit?: film_genresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: film_genresInclude<ExtArgs> | null
    /**
     * Filter, which film_genres to fetch.
     */
    where: film_genresWhereUniqueInput
  }

  /**
   * film_genres findFirst
   */
  export type film_genresFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the film_genres
     */
    select?: film_genresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the film_genres
     */
    omit?: film_genresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: film_genresInclude<ExtArgs> | null
    /**
     * Filter, which film_genres to fetch.
     */
    where?: film_genresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of film_genres to fetch.
     */
    orderBy?: film_genresOrderByWithRelationInput | film_genresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for film_genres.
     */
    cursor?: film_genresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` film_genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` film_genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of film_genres.
     */
    distinct?: Film_genresScalarFieldEnum | Film_genresScalarFieldEnum[]
  }

  /**
   * film_genres findFirstOrThrow
   */
  export type film_genresFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the film_genres
     */
    select?: film_genresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the film_genres
     */
    omit?: film_genresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: film_genresInclude<ExtArgs> | null
    /**
     * Filter, which film_genres to fetch.
     */
    where?: film_genresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of film_genres to fetch.
     */
    orderBy?: film_genresOrderByWithRelationInput | film_genresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for film_genres.
     */
    cursor?: film_genresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` film_genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` film_genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of film_genres.
     */
    distinct?: Film_genresScalarFieldEnum | Film_genresScalarFieldEnum[]
  }

  /**
   * film_genres findMany
   */
  export type film_genresFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the film_genres
     */
    select?: film_genresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the film_genres
     */
    omit?: film_genresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: film_genresInclude<ExtArgs> | null
    /**
     * Filter, which film_genres to fetch.
     */
    where?: film_genresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of film_genres to fetch.
     */
    orderBy?: film_genresOrderByWithRelationInput | film_genresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing film_genres.
     */
    cursor?: film_genresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` film_genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` film_genres.
     */
    skip?: number
    distinct?: Film_genresScalarFieldEnum | Film_genresScalarFieldEnum[]
  }

  /**
   * film_genres create
   */
  export type film_genresCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the film_genres
     */
    select?: film_genresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the film_genres
     */
    omit?: film_genresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: film_genresInclude<ExtArgs> | null
    /**
     * The data needed to create a film_genres.
     */
    data?: XOR<film_genresCreateInput, film_genresUncheckedCreateInput>
  }

  /**
   * film_genres createMany
   */
  export type film_genresCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many film_genres.
     */
    data: film_genresCreateManyInput | film_genresCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * film_genres update
   */
  export type film_genresUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the film_genres
     */
    select?: film_genresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the film_genres
     */
    omit?: film_genresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: film_genresInclude<ExtArgs> | null
    /**
     * The data needed to update a film_genres.
     */
    data: XOR<film_genresUpdateInput, film_genresUncheckedUpdateInput>
    /**
     * Choose, which film_genres to update.
     */
    where: film_genresWhereUniqueInput
  }

  /**
   * film_genres updateMany
   */
  export type film_genresUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update film_genres.
     */
    data: XOR<film_genresUpdateManyMutationInput, film_genresUncheckedUpdateManyInput>
    /**
     * Filter which film_genres to update
     */
    where?: film_genresWhereInput
    /**
     * Limit how many film_genres to update.
     */
    limit?: number
  }

  /**
   * film_genres upsert
   */
  export type film_genresUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the film_genres
     */
    select?: film_genresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the film_genres
     */
    omit?: film_genresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: film_genresInclude<ExtArgs> | null
    /**
     * The filter to search for the film_genres to update in case it exists.
     */
    where: film_genresWhereUniqueInput
    /**
     * In case the film_genres found by the `where` argument doesn't exist, create a new film_genres with this data.
     */
    create: XOR<film_genresCreateInput, film_genresUncheckedCreateInput>
    /**
     * In case the film_genres was found with the provided `where` argument, update it with this data.
     */
    update: XOR<film_genresUpdateInput, film_genresUncheckedUpdateInput>
  }

  /**
   * film_genres delete
   */
  export type film_genresDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the film_genres
     */
    select?: film_genresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the film_genres
     */
    omit?: film_genresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: film_genresInclude<ExtArgs> | null
    /**
     * Filter which film_genres to delete.
     */
    where: film_genresWhereUniqueInput
  }

  /**
   * film_genres deleteMany
   */
  export type film_genresDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which film_genres to delete
     */
    where?: film_genresWhereInput
    /**
     * Limit how many film_genres to delete.
     */
    limit?: number
  }

  /**
   * film_genres.genres
   */
  export type film_genres$genresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genres
     */
    select?: genresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the genres
     */
    omit?: genresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: genresInclude<ExtArgs> | null
    where?: genresWhereInput
  }

  /**
   * film_genres.films
   */
  export type film_genres$filmsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the films
     */
    select?: filmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the films
     */
    omit?: filmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: filmsInclude<ExtArgs> | null
    where?: filmsWhereInput
  }

  /**
   * film_genres without action
   */
  export type film_genresDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the film_genres
     */
    select?: film_genresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the film_genres
     */
    omit?: film_genresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: film_genresInclude<ExtArgs> | null
  }


  /**
   * Model films
   */

  export type AggregateFilms = {
    _count: FilmsCountAggregateOutputType | null
    _avg: FilmsAvgAggregateOutputType | null
    _sum: FilmsSumAggregateOutputType | null
    _min: FilmsMinAggregateOutputType | null
    _max: FilmsMaxAggregateOutputType | null
  }

  export type FilmsAvgAggregateOutputType = {
    id: number | null
    year: number | null
    view_count: number | null
    average_rating: Decimal | null
  }

  export type FilmsSumAggregateOutputType = {
    id: number | null
    year: number | null
    view_count: number | null
    average_rating: Decimal | null
  }

  export type FilmsMinAggregateOutputType = {
    id: number | null
    title: string | null
    poster_url: string | null
    description: string | null
    year: number | null
    country: string | null
    duration: string | null
    poster_video_url: string | null
    actor: string | null
    is_series: boolean | null
    directeur: string | null
    age_rating: string | null
    created_at: Date | null
    updated_at: Date | null
    view_count: number | null
    average_rating: Decimal | null
  }

  export type FilmsMaxAggregateOutputType = {
    id: number | null
    title: string | null
    poster_url: string | null
    description: string | null
    year: number | null
    country: string | null
    duration: string | null
    poster_video_url: string | null
    actor: string | null
    is_series: boolean | null
    directeur: string | null
    age_rating: string | null
    created_at: Date | null
    updated_at: Date | null
    view_count: number | null
    average_rating: Decimal | null
  }

  export type FilmsCountAggregateOutputType = {
    id: number
    title: number
    poster_url: number
    description: number
    year: number
    country: number
    duration: number
    poster_video_url: number
    actor: number
    is_series: number
    directeur: number
    age_rating: number
    created_at: number
    updated_at: number
    view_count: number
    average_rating: number
    _all: number
  }


  export type FilmsAvgAggregateInputType = {
    id?: true
    year?: true
    view_count?: true
    average_rating?: true
  }

  export type FilmsSumAggregateInputType = {
    id?: true
    year?: true
    view_count?: true
    average_rating?: true
  }

  export type FilmsMinAggregateInputType = {
    id?: true
    title?: true
    poster_url?: true
    description?: true
    year?: true
    country?: true
    duration?: true
    poster_video_url?: true
    actor?: true
    is_series?: true
    directeur?: true
    age_rating?: true
    created_at?: true
    updated_at?: true
    view_count?: true
    average_rating?: true
  }

  export type FilmsMaxAggregateInputType = {
    id?: true
    title?: true
    poster_url?: true
    description?: true
    year?: true
    country?: true
    duration?: true
    poster_video_url?: true
    actor?: true
    is_series?: true
    directeur?: true
    age_rating?: true
    created_at?: true
    updated_at?: true
    view_count?: true
    average_rating?: true
  }

  export type FilmsCountAggregateInputType = {
    id?: true
    title?: true
    poster_url?: true
    description?: true
    year?: true
    country?: true
    duration?: true
    poster_video_url?: true
    actor?: true
    is_series?: true
    directeur?: true
    age_rating?: true
    created_at?: true
    updated_at?: true
    view_count?: true
    average_rating?: true
    _all?: true
  }

  export type FilmsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which films to aggregate.
     */
    where?: filmsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of films to fetch.
     */
    orderBy?: filmsOrderByWithRelationInput | filmsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: filmsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` films from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` films.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned films
    **/
    _count?: true | FilmsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FilmsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FilmsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FilmsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FilmsMaxAggregateInputType
  }

  export type GetFilmsAggregateType<T extends FilmsAggregateArgs> = {
        [P in keyof T & keyof AggregateFilms]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFilms[P]>
      : GetScalarType<T[P], AggregateFilms[P]>
  }




  export type filmsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: filmsWhereInput
    orderBy?: filmsOrderByWithAggregationInput | filmsOrderByWithAggregationInput[]
    by: FilmsScalarFieldEnum[] | FilmsScalarFieldEnum
    having?: filmsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FilmsCountAggregateInputType | true
    _avg?: FilmsAvgAggregateInputType
    _sum?: FilmsSumAggregateInputType
    _min?: FilmsMinAggregateInputType
    _max?: FilmsMaxAggregateInputType
  }

  export type FilmsGroupByOutputType = {
    id: number
    title: string | null
    poster_url: string | null
    description: string | null
    year: number | null
    country: string | null
    duration: string | null
    poster_video_url: string | null
    actor: string | null
    is_series: boolean | null
    directeur: string | null
    age_rating: string | null
    created_at: Date
    updated_at: Date
    view_count: number | null
    average_rating: Decimal | null
    _count: FilmsCountAggregateOutputType | null
    _avg: FilmsAvgAggregateOutputType | null
    _sum: FilmsSumAggregateOutputType | null
    _min: FilmsMinAggregateOutputType | null
    _max: FilmsMaxAggregateOutputType | null
  }

  type GetFilmsGroupByPayload<T extends filmsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FilmsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FilmsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FilmsGroupByOutputType[P]>
            : GetScalarType<T[P], FilmsGroupByOutputType[P]>
        }
      >
    >


  export type filmsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    poster_url?: boolean
    description?: boolean
    year?: boolean
    country?: boolean
    duration?: boolean
    poster_video_url?: boolean
    actor?: boolean
    is_series?: boolean
    directeur?: boolean
    age_rating?: boolean
    created_at?: boolean
    updated_at?: boolean
    view_count?: boolean
    average_rating?: boolean
    episodes?: boolean | films$episodesArgs<ExtArgs>
    favorites?: boolean | films$favoritesArgs<ExtArgs>
    feedbacks?: boolean | films$feedbacksArgs<ExtArgs>
    film_genres?: boolean | films$film_genresArgs<ExtArgs>
    views?: boolean | films$viewsArgs<ExtArgs>
    _count?: boolean | FilmsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["films"]>



  export type filmsSelectScalar = {
    id?: boolean
    title?: boolean
    poster_url?: boolean
    description?: boolean
    year?: boolean
    country?: boolean
    duration?: boolean
    poster_video_url?: boolean
    actor?: boolean
    is_series?: boolean
    directeur?: boolean
    age_rating?: boolean
    created_at?: boolean
    updated_at?: boolean
    view_count?: boolean
    average_rating?: boolean
  }

  export type filmsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "poster_url" | "description" | "year" | "country" | "duration" | "poster_video_url" | "actor" | "is_series" | "directeur" | "age_rating" | "created_at" | "updated_at" | "view_count" | "average_rating", ExtArgs["result"]["films"]>
  export type filmsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    episodes?: boolean | films$episodesArgs<ExtArgs>
    favorites?: boolean | films$favoritesArgs<ExtArgs>
    feedbacks?: boolean | films$feedbacksArgs<ExtArgs>
    film_genres?: boolean | films$film_genresArgs<ExtArgs>
    views?: boolean | films$viewsArgs<ExtArgs>
    _count?: boolean | FilmsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $filmsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "films"
    objects: {
      episodes: Prisma.$episodesPayload<ExtArgs>[]
      favorites: Prisma.$favoritesPayload<ExtArgs>[]
      feedbacks: Prisma.$feedbacksPayload<ExtArgs>[]
      film_genres: Prisma.$film_genresPayload<ExtArgs>[]
      views: Prisma.$viewsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string | null
      poster_url: string | null
      description: string | null
      year: number | null
      country: string | null
      duration: string | null
      poster_video_url: string | null
      actor: string | null
      is_series: boolean | null
      directeur: string | null
      age_rating: string | null
      created_at: Date
      updated_at: Date
      view_count: number | null
      average_rating: Prisma.Decimal | null
    }, ExtArgs["result"]["films"]>
    composites: {}
  }

  type filmsGetPayload<S extends boolean | null | undefined | filmsDefaultArgs> = $Result.GetResult<Prisma.$filmsPayload, S>

  type filmsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<filmsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FilmsCountAggregateInputType | true
    }

  export interface filmsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['films'], meta: { name: 'films' } }
    /**
     * Find zero or one Films that matches the filter.
     * @param {filmsFindUniqueArgs} args - Arguments to find a Films
     * @example
     * // Get one Films
     * const films = await prisma.films.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends filmsFindUniqueArgs>(args: SelectSubset<T, filmsFindUniqueArgs<ExtArgs>>): Prisma__filmsClient<$Result.GetResult<Prisma.$filmsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Films that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {filmsFindUniqueOrThrowArgs} args - Arguments to find a Films
     * @example
     * // Get one Films
     * const films = await prisma.films.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends filmsFindUniqueOrThrowArgs>(args: SelectSubset<T, filmsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__filmsClient<$Result.GetResult<Prisma.$filmsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Films that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {filmsFindFirstArgs} args - Arguments to find a Films
     * @example
     * // Get one Films
     * const films = await prisma.films.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends filmsFindFirstArgs>(args?: SelectSubset<T, filmsFindFirstArgs<ExtArgs>>): Prisma__filmsClient<$Result.GetResult<Prisma.$filmsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Films that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {filmsFindFirstOrThrowArgs} args - Arguments to find a Films
     * @example
     * // Get one Films
     * const films = await prisma.films.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends filmsFindFirstOrThrowArgs>(args?: SelectSubset<T, filmsFindFirstOrThrowArgs<ExtArgs>>): Prisma__filmsClient<$Result.GetResult<Prisma.$filmsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Films that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {filmsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Films
     * const films = await prisma.films.findMany()
     * 
     * // Get first 10 Films
     * const films = await prisma.films.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const filmsWithIdOnly = await prisma.films.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends filmsFindManyArgs>(args?: SelectSubset<T, filmsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$filmsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Films.
     * @param {filmsCreateArgs} args - Arguments to create a Films.
     * @example
     * // Create one Films
     * const Films = await prisma.films.create({
     *   data: {
     *     // ... data to create a Films
     *   }
     * })
     * 
     */
    create<T extends filmsCreateArgs>(args: SelectSubset<T, filmsCreateArgs<ExtArgs>>): Prisma__filmsClient<$Result.GetResult<Prisma.$filmsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Films.
     * @param {filmsCreateManyArgs} args - Arguments to create many Films.
     * @example
     * // Create many Films
     * const films = await prisma.films.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends filmsCreateManyArgs>(args?: SelectSubset<T, filmsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Films.
     * @param {filmsDeleteArgs} args - Arguments to delete one Films.
     * @example
     * // Delete one Films
     * const Films = await prisma.films.delete({
     *   where: {
     *     // ... filter to delete one Films
     *   }
     * })
     * 
     */
    delete<T extends filmsDeleteArgs>(args: SelectSubset<T, filmsDeleteArgs<ExtArgs>>): Prisma__filmsClient<$Result.GetResult<Prisma.$filmsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Films.
     * @param {filmsUpdateArgs} args - Arguments to update one Films.
     * @example
     * // Update one Films
     * const films = await prisma.films.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends filmsUpdateArgs>(args: SelectSubset<T, filmsUpdateArgs<ExtArgs>>): Prisma__filmsClient<$Result.GetResult<Prisma.$filmsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Films.
     * @param {filmsDeleteManyArgs} args - Arguments to filter Films to delete.
     * @example
     * // Delete a few Films
     * const { count } = await prisma.films.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends filmsDeleteManyArgs>(args?: SelectSubset<T, filmsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Films.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {filmsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Films
     * const films = await prisma.films.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends filmsUpdateManyArgs>(args: SelectSubset<T, filmsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Films.
     * @param {filmsUpsertArgs} args - Arguments to update or create a Films.
     * @example
     * // Update or create a Films
     * const films = await prisma.films.upsert({
     *   create: {
     *     // ... data to create a Films
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Films we want to update
     *   }
     * })
     */
    upsert<T extends filmsUpsertArgs>(args: SelectSubset<T, filmsUpsertArgs<ExtArgs>>): Prisma__filmsClient<$Result.GetResult<Prisma.$filmsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Films.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {filmsCountArgs} args - Arguments to filter Films to count.
     * @example
     * // Count the number of Films
     * const count = await prisma.films.count({
     *   where: {
     *     // ... the filter for the Films we want to count
     *   }
     * })
    **/
    count<T extends filmsCountArgs>(
      args?: Subset<T, filmsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FilmsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Films.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilmsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FilmsAggregateArgs>(args: Subset<T, FilmsAggregateArgs>): Prisma.PrismaPromise<GetFilmsAggregateType<T>>

    /**
     * Group by Films.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {filmsGroupByArgs} args - Group by arguments.
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
      T extends filmsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: filmsGroupByArgs['orderBy'] }
        : { orderBy?: filmsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, filmsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFilmsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the films model
   */
  readonly fields: filmsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for films.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__filmsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    episodes<T extends films$episodesArgs<ExtArgs> = {}>(args?: Subset<T, films$episodesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$episodesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    favorites<T extends films$favoritesArgs<ExtArgs> = {}>(args?: Subset<T, films$favoritesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$favoritesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    feedbacks<T extends films$feedbacksArgs<ExtArgs> = {}>(args?: Subset<T, films$feedbacksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$feedbacksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    film_genres<T extends films$film_genresArgs<ExtArgs> = {}>(args?: Subset<T, films$film_genresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$film_genresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    views<T extends films$viewsArgs<ExtArgs> = {}>(args?: Subset<T, films$viewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$viewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the films model
   */
  interface filmsFieldRefs {
    readonly id: FieldRef<"films", 'Int'>
    readonly title: FieldRef<"films", 'String'>
    readonly poster_url: FieldRef<"films", 'String'>
    readonly description: FieldRef<"films", 'String'>
    readonly year: FieldRef<"films", 'Int'>
    readonly country: FieldRef<"films", 'String'>
    readonly duration: FieldRef<"films", 'String'>
    readonly poster_video_url: FieldRef<"films", 'String'>
    readonly actor: FieldRef<"films", 'String'>
    readonly is_series: FieldRef<"films", 'Boolean'>
    readonly directeur: FieldRef<"films", 'String'>
    readonly age_rating: FieldRef<"films", 'String'>
    readonly created_at: FieldRef<"films", 'DateTime'>
    readonly updated_at: FieldRef<"films", 'DateTime'>
    readonly view_count: FieldRef<"films", 'Int'>
    readonly average_rating: FieldRef<"films", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * films findUnique
   */
  export type filmsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the films
     */
    select?: filmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the films
     */
    omit?: filmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: filmsInclude<ExtArgs> | null
    /**
     * Filter, which films to fetch.
     */
    where: filmsWhereUniqueInput
  }

  /**
   * films findUniqueOrThrow
   */
  export type filmsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the films
     */
    select?: filmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the films
     */
    omit?: filmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: filmsInclude<ExtArgs> | null
    /**
     * Filter, which films to fetch.
     */
    where: filmsWhereUniqueInput
  }

  /**
   * films findFirst
   */
  export type filmsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the films
     */
    select?: filmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the films
     */
    omit?: filmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: filmsInclude<ExtArgs> | null
    /**
     * Filter, which films to fetch.
     */
    where?: filmsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of films to fetch.
     */
    orderBy?: filmsOrderByWithRelationInput | filmsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for films.
     */
    cursor?: filmsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` films from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` films.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of films.
     */
    distinct?: FilmsScalarFieldEnum | FilmsScalarFieldEnum[]
  }

  /**
   * films findFirstOrThrow
   */
  export type filmsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the films
     */
    select?: filmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the films
     */
    omit?: filmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: filmsInclude<ExtArgs> | null
    /**
     * Filter, which films to fetch.
     */
    where?: filmsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of films to fetch.
     */
    orderBy?: filmsOrderByWithRelationInput | filmsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for films.
     */
    cursor?: filmsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` films from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` films.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of films.
     */
    distinct?: FilmsScalarFieldEnum | FilmsScalarFieldEnum[]
  }

  /**
   * films findMany
   */
  export type filmsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the films
     */
    select?: filmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the films
     */
    omit?: filmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: filmsInclude<ExtArgs> | null
    /**
     * Filter, which films to fetch.
     */
    where?: filmsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of films to fetch.
     */
    orderBy?: filmsOrderByWithRelationInput | filmsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing films.
     */
    cursor?: filmsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` films from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` films.
     */
    skip?: number
    distinct?: FilmsScalarFieldEnum | FilmsScalarFieldEnum[]
  }

  /**
   * films create
   */
  export type filmsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the films
     */
    select?: filmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the films
     */
    omit?: filmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: filmsInclude<ExtArgs> | null
    /**
     * The data needed to create a films.
     */
    data?: XOR<filmsCreateInput, filmsUncheckedCreateInput>
  }

  /**
   * films createMany
   */
  export type filmsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many films.
     */
    data: filmsCreateManyInput | filmsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * films update
   */
  export type filmsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the films
     */
    select?: filmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the films
     */
    omit?: filmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: filmsInclude<ExtArgs> | null
    /**
     * The data needed to update a films.
     */
    data: XOR<filmsUpdateInput, filmsUncheckedUpdateInput>
    /**
     * Choose, which films to update.
     */
    where: filmsWhereUniqueInput
  }

  /**
   * films updateMany
   */
  export type filmsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update films.
     */
    data: XOR<filmsUpdateManyMutationInput, filmsUncheckedUpdateManyInput>
    /**
     * Filter which films to update
     */
    where?: filmsWhereInput
    /**
     * Limit how many films to update.
     */
    limit?: number
  }

  /**
   * films upsert
   */
  export type filmsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the films
     */
    select?: filmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the films
     */
    omit?: filmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: filmsInclude<ExtArgs> | null
    /**
     * The filter to search for the films to update in case it exists.
     */
    where: filmsWhereUniqueInput
    /**
     * In case the films found by the `where` argument doesn't exist, create a new films with this data.
     */
    create: XOR<filmsCreateInput, filmsUncheckedCreateInput>
    /**
     * In case the films was found with the provided `where` argument, update it with this data.
     */
    update: XOR<filmsUpdateInput, filmsUncheckedUpdateInput>
  }

  /**
   * films delete
   */
  export type filmsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the films
     */
    select?: filmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the films
     */
    omit?: filmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: filmsInclude<ExtArgs> | null
    /**
     * Filter which films to delete.
     */
    where: filmsWhereUniqueInput
  }

  /**
   * films deleteMany
   */
  export type filmsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which films to delete
     */
    where?: filmsWhereInput
    /**
     * Limit how many films to delete.
     */
    limit?: number
  }

  /**
   * films.episodes
   */
  export type films$episodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the episodes
     */
    select?: episodesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the episodes
     */
    omit?: episodesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: episodesInclude<ExtArgs> | null
    where?: episodesWhereInput
    orderBy?: episodesOrderByWithRelationInput | episodesOrderByWithRelationInput[]
    cursor?: episodesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EpisodesScalarFieldEnum | EpisodesScalarFieldEnum[]
  }

  /**
   * films.favorites
   */
  export type films$favoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favorites
     */
    select?: favoritesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the favorites
     */
    omit?: favoritesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favoritesInclude<ExtArgs> | null
    where?: favoritesWhereInput
    orderBy?: favoritesOrderByWithRelationInput | favoritesOrderByWithRelationInput[]
    cursor?: favoritesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoritesScalarFieldEnum | FavoritesScalarFieldEnum[]
  }

  /**
   * films.feedbacks
   */
  export type films$feedbacksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feedbacks
     */
    select?: feedbacksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feedbacks
     */
    omit?: feedbacksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feedbacksInclude<ExtArgs> | null
    where?: feedbacksWhereInput
    orderBy?: feedbacksOrderByWithRelationInput | feedbacksOrderByWithRelationInput[]
    cursor?: feedbacksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FeedbacksScalarFieldEnum | FeedbacksScalarFieldEnum[]
  }

  /**
   * films.film_genres
   */
  export type films$film_genresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the film_genres
     */
    select?: film_genresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the film_genres
     */
    omit?: film_genresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: film_genresInclude<ExtArgs> | null
    where?: film_genresWhereInput
    orderBy?: film_genresOrderByWithRelationInput | film_genresOrderByWithRelationInput[]
    cursor?: film_genresWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Film_genresScalarFieldEnum | Film_genresScalarFieldEnum[]
  }

  /**
   * films.views
   */
  export type films$viewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the views
     */
    select?: viewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the views
     */
    omit?: viewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: viewsInclude<ExtArgs> | null
    where?: viewsWhereInput
    orderBy?: viewsOrderByWithRelationInput | viewsOrderByWithRelationInput[]
    cursor?: viewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ViewsScalarFieldEnum | ViewsScalarFieldEnum[]
  }

  /**
   * films without action
   */
  export type filmsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the films
     */
    select?: filmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the films
     */
    omit?: filmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: filmsInclude<ExtArgs> | null
  }


  /**
   * Model genres
   */

  export type AggregateGenres = {
    _count: GenresCountAggregateOutputType | null
    _avg: GenresAvgAggregateOutputType | null
    _sum: GenresSumAggregateOutputType | null
    _min: GenresMinAggregateOutputType | null
    _max: GenresMaxAggregateOutputType | null
  }

  export type GenresAvgAggregateOutputType = {
    id: number | null
  }

  export type GenresSumAggregateOutputType = {
    id: number | null
  }

  export type GenresMinAggregateOutputType = {
    id: number | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type GenresMaxAggregateOutputType = {
    id: number | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type GenresCountAggregateOutputType = {
    id: number
    name: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type GenresAvgAggregateInputType = {
    id?: true
  }

  export type GenresSumAggregateInputType = {
    id?: true
  }

  export type GenresMinAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
  }

  export type GenresMaxAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
  }

  export type GenresCountAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type GenresAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which genres to aggregate.
     */
    where?: genresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of genres to fetch.
     */
    orderBy?: genresOrderByWithRelationInput | genresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: genresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned genres
    **/
    _count?: true | GenresCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GenresAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GenresSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GenresMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GenresMaxAggregateInputType
  }

  export type GetGenresAggregateType<T extends GenresAggregateArgs> = {
        [P in keyof T & keyof AggregateGenres]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGenres[P]>
      : GetScalarType<T[P], AggregateGenres[P]>
  }




  export type genresGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: genresWhereInput
    orderBy?: genresOrderByWithAggregationInput | genresOrderByWithAggregationInput[]
    by: GenresScalarFieldEnum[] | GenresScalarFieldEnum
    having?: genresScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GenresCountAggregateInputType | true
    _avg?: GenresAvgAggregateInputType
    _sum?: GenresSumAggregateInputType
    _min?: GenresMinAggregateInputType
    _max?: GenresMaxAggregateInputType
  }

  export type GenresGroupByOutputType = {
    id: number
    name: string | null
    created_at: Date
    updated_at: Date
    _count: GenresCountAggregateOutputType | null
    _avg: GenresAvgAggregateOutputType | null
    _sum: GenresSumAggregateOutputType | null
    _min: GenresMinAggregateOutputType | null
    _max: GenresMaxAggregateOutputType | null
  }

  type GetGenresGroupByPayload<T extends genresGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GenresGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GenresGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GenresGroupByOutputType[P]>
            : GetScalarType<T[P], GenresGroupByOutputType[P]>
        }
      >
    >


  export type genresSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
    film_genres?: boolean | genres$film_genresArgs<ExtArgs>
    _count?: boolean | GenresCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["genres"]>



  export type genresSelectScalar = {
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type genresOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "created_at" | "updated_at", ExtArgs["result"]["genres"]>
  export type genresInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    film_genres?: boolean | genres$film_genresArgs<ExtArgs>
    _count?: boolean | GenresCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $genresPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "genres"
    objects: {
      film_genres: Prisma.$film_genresPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["genres"]>
    composites: {}
  }

  type genresGetPayload<S extends boolean | null | undefined | genresDefaultArgs> = $Result.GetResult<Prisma.$genresPayload, S>

  type genresCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<genresFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GenresCountAggregateInputType | true
    }

  export interface genresDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['genres'], meta: { name: 'genres' } }
    /**
     * Find zero or one Genres that matches the filter.
     * @param {genresFindUniqueArgs} args - Arguments to find a Genres
     * @example
     * // Get one Genres
     * const genres = await prisma.genres.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends genresFindUniqueArgs>(args: SelectSubset<T, genresFindUniqueArgs<ExtArgs>>): Prisma__genresClient<$Result.GetResult<Prisma.$genresPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Genres that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {genresFindUniqueOrThrowArgs} args - Arguments to find a Genres
     * @example
     * // Get one Genres
     * const genres = await prisma.genres.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends genresFindUniqueOrThrowArgs>(args: SelectSubset<T, genresFindUniqueOrThrowArgs<ExtArgs>>): Prisma__genresClient<$Result.GetResult<Prisma.$genresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Genres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {genresFindFirstArgs} args - Arguments to find a Genres
     * @example
     * // Get one Genres
     * const genres = await prisma.genres.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends genresFindFirstArgs>(args?: SelectSubset<T, genresFindFirstArgs<ExtArgs>>): Prisma__genresClient<$Result.GetResult<Prisma.$genresPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Genres that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {genresFindFirstOrThrowArgs} args - Arguments to find a Genres
     * @example
     * // Get one Genres
     * const genres = await prisma.genres.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends genresFindFirstOrThrowArgs>(args?: SelectSubset<T, genresFindFirstOrThrowArgs<ExtArgs>>): Prisma__genresClient<$Result.GetResult<Prisma.$genresPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Genres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {genresFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Genres
     * const genres = await prisma.genres.findMany()
     * 
     * // Get first 10 Genres
     * const genres = await prisma.genres.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const genresWithIdOnly = await prisma.genres.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends genresFindManyArgs>(args?: SelectSubset<T, genresFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$genresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Genres.
     * @param {genresCreateArgs} args - Arguments to create a Genres.
     * @example
     * // Create one Genres
     * const Genres = await prisma.genres.create({
     *   data: {
     *     // ... data to create a Genres
     *   }
     * })
     * 
     */
    create<T extends genresCreateArgs>(args: SelectSubset<T, genresCreateArgs<ExtArgs>>): Prisma__genresClient<$Result.GetResult<Prisma.$genresPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Genres.
     * @param {genresCreateManyArgs} args - Arguments to create many Genres.
     * @example
     * // Create many Genres
     * const genres = await prisma.genres.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends genresCreateManyArgs>(args?: SelectSubset<T, genresCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Genres.
     * @param {genresDeleteArgs} args - Arguments to delete one Genres.
     * @example
     * // Delete one Genres
     * const Genres = await prisma.genres.delete({
     *   where: {
     *     // ... filter to delete one Genres
     *   }
     * })
     * 
     */
    delete<T extends genresDeleteArgs>(args: SelectSubset<T, genresDeleteArgs<ExtArgs>>): Prisma__genresClient<$Result.GetResult<Prisma.$genresPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Genres.
     * @param {genresUpdateArgs} args - Arguments to update one Genres.
     * @example
     * // Update one Genres
     * const genres = await prisma.genres.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends genresUpdateArgs>(args: SelectSubset<T, genresUpdateArgs<ExtArgs>>): Prisma__genresClient<$Result.GetResult<Prisma.$genresPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Genres.
     * @param {genresDeleteManyArgs} args - Arguments to filter Genres to delete.
     * @example
     * // Delete a few Genres
     * const { count } = await prisma.genres.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends genresDeleteManyArgs>(args?: SelectSubset<T, genresDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {genresUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Genres
     * const genres = await prisma.genres.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends genresUpdateManyArgs>(args: SelectSubset<T, genresUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Genres.
     * @param {genresUpsertArgs} args - Arguments to update or create a Genres.
     * @example
     * // Update or create a Genres
     * const genres = await prisma.genres.upsert({
     *   create: {
     *     // ... data to create a Genres
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Genres we want to update
     *   }
     * })
     */
    upsert<T extends genresUpsertArgs>(args: SelectSubset<T, genresUpsertArgs<ExtArgs>>): Prisma__genresClient<$Result.GetResult<Prisma.$genresPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {genresCountArgs} args - Arguments to filter Genres to count.
     * @example
     * // Count the number of Genres
     * const count = await prisma.genres.count({
     *   where: {
     *     // ... the filter for the Genres we want to count
     *   }
     * })
    **/
    count<T extends genresCountArgs>(
      args?: Subset<T, genresCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GenresCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenresAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GenresAggregateArgs>(args: Subset<T, GenresAggregateArgs>): Prisma.PrismaPromise<GetGenresAggregateType<T>>

    /**
     * Group by Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {genresGroupByArgs} args - Group by arguments.
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
      T extends genresGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: genresGroupByArgs['orderBy'] }
        : { orderBy?: genresGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, genresGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGenresGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the genres model
   */
  readonly fields: genresFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for genres.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__genresClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    film_genres<T extends genres$film_genresArgs<ExtArgs> = {}>(args?: Subset<T, genres$film_genresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$film_genresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the genres model
   */
  interface genresFieldRefs {
    readonly id: FieldRef<"genres", 'Int'>
    readonly name: FieldRef<"genres", 'String'>
    readonly created_at: FieldRef<"genres", 'DateTime'>
    readonly updated_at: FieldRef<"genres", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * genres findUnique
   */
  export type genresFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genres
     */
    select?: genresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the genres
     */
    omit?: genresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: genresInclude<ExtArgs> | null
    /**
     * Filter, which genres to fetch.
     */
    where: genresWhereUniqueInput
  }

  /**
   * genres findUniqueOrThrow
   */
  export type genresFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genres
     */
    select?: genresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the genres
     */
    omit?: genresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: genresInclude<ExtArgs> | null
    /**
     * Filter, which genres to fetch.
     */
    where: genresWhereUniqueInput
  }

  /**
   * genres findFirst
   */
  export type genresFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genres
     */
    select?: genresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the genres
     */
    omit?: genresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: genresInclude<ExtArgs> | null
    /**
     * Filter, which genres to fetch.
     */
    where?: genresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of genres to fetch.
     */
    orderBy?: genresOrderByWithRelationInput | genresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for genres.
     */
    cursor?: genresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of genres.
     */
    distinct?: GenresScalarFieldEnum | GenresScalarFieldEnum[]
  }

  /**
   * genres findFirstOrThrow
   */
  export type genresFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genres
     */
    select?: genresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the genres
     */
    omit?: genresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: genresInclude<ExtArgs> | null
    /**
     * Filter, which genres to fetch.
     */
    where?: genresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of genres to fetch.
     */
    orderBy?: genresOrderByWithRelationInput | genresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for genres.
     */
    cursor?: genresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of genres.
     */
    distinct?: GenresScalarFieldEnum | GenresScalarFieldEnum[]
  }

  /**
   * genres findMany
   */
  export type genresFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genres
     */
    select?: genresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the genres
     */
    omit?: genresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: genresInclude<ExtArgs> | null
    /**
     * Filter, which genres to fetch.
     */
    where?: genresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of genres to fetch.
     */
    orderBy?: genresOrderByWithRelationInput | genresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing genres.
     */
    cursor?: genresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` genres.
     */
    skip?: number
    distinct?: GenresScalarFieldEnum | GenresScalarFieldEnum[]
  }

  /**
   * genres create
   */
  export type genresCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genres
     */
    select?: genresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the genres
     */
    omit?: genresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: genresInclude<ExtArgs> | null
    /**
     * The data needed to create a genres.
     */
    data?: XOR<genresCreateInput, genresUncheckedCreateInput>
  }

  /**
   * genres createMany
   */
  export type genresCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many genres.
     */
    data: genresCreateManyInput | genresCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * genres update
   */
  export type genresUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genres
     */
    select?: genresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the genres
     */
    omit?: genresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: genresInclude<ExtArgs> | null
    /**
     * The data needed to update a genres.
     */
    data: XOR<genresUpdateInput, genresUncheckedUpdateInput>
    /**
     * Choose, which genres to update.
     */
    where: genresWhereUniqueInput
  }

  /**
   * genres updateMany
   */
  export type genresUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update genres.
     */
    data: XOR<genresUpdateManyMutationInput, genresUncheckedUpdateManyInput>
    /**
     * Filter which genres to update
     */
    where?: genresWhereInput
    /**
     * Limit how many genres to update.
     */
    limit?: number
  }

  /**
   * genres upsert
   */
  export type genresUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genres
     */
    select?: genresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the genres
     */
    omit?: genresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: genresInclude<ExtArgs> | null
    /**
     * The filter to search for the genres to update in case it exists.
     */
    where: genresWhereUniqueInput
    /**
     * In case the genres found by the `where` argument doesn't exist, create a new genres with this data.
     */
    create: XOR<genresCreateInput, genresUncheckedCreateInput>
    /**
     * In case the genres was found with the provided `where` argument, update it with this data.
     */
    update: XOR<genresUpdateInput, genresUncheckedUpdateInput>
  }

  /**
   * genres delete
   */
  export type genresDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genres
     */
    select?: genresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the genres
     */
    omit?: genresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: genresInclude<ExtArgs> | null
    /**
     * Filter which genres to delete.
     */
    where: genresWhereUniqueInput
  }

  /**
   * genres deleteMany
   */
  export type genresDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which genres to delete
     */
    where?: genresWhereInput
    /**
     * Limit how many genres to delete.
     */
    limit?: number
  }

  /**
   * genres.film_genres
   */
  export type genres$film_genresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the film_genres
     */
    select?: film_genresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the film_genres
     */
    omit?: film_genresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: film_genresInclude<ExtArgs> | null
    where?: film_genresWhereInput
    orderBy?: film_genresOrderByWithRelationInput | film_genresOrderByWithRelationInput[]
    cursor?: film_genresWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Film_genresScalarFieldEnum | Film_genresScalarFieldEnum[]
  }

  /**
   * genres without action
   */
  export type genresDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genres
     */
    select?: genresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the genres
     */
    omit?: genresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: genresInclude<ExtArgs> | null
  }


  /**
   * Model invoices
   */

  export type AggregateInvoices = {
    _count: InvoicesCountAggregateOutputType | null
    _avg: InvoicesAvgAggregateOutputType | null
    _sum: InvoicesSumAggregateOutputType | null
    _min: InvoicesMinAggregateOutputType | null
    _max: InvoicesMaxAggregateOutputType | null
  }

  export type InvoicesAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    plan_id: number | null
    total_price: Decimal | null
  }

  export type InvoicesSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    plan_id: number | null
    total_price: Decimal | null
  }

  export type InvoicesMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    plan_id: number | null
    total_price: Decimal | null
    payment_method: string | null
    status: string | null
    start_date: Date | null
    end_date: Date | null
    created_at: Date | null
  }

  export type InvoicesMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    plan_id: number | null
    total_price: Decimal | null
    payment_method: string | null
    status: string | null
    start_date: Date | null
    end_date: Date | null
    created_at: Date | null
  }

  export type InvoicesCountAggregateOutputType = {
    id: number
    user_id: number
    plan_id: number
    total_price: number
    payment_method: number
    status: number
    start_date: number
    end_date: number
    created_at: number
    _all: number
  }


  export type InvoicesAvgAggregateInputType = {
    id?: true
    user_id?: true
    plan_id?: true
    total_price?: true
  }

  export type InvoicesSumAggregateInputType = {
    id?: true
    user_id?: true
    plan_id?: true
    total_price?: true
  }

  export type InvoicesMinAggregateInputType = {
    id?: true
    user_id?: true
    plan_id?: true
    total_price?: true
    payment_method?: true
    status?: true
    start_date?: true
    end_date?: true
    created_at?: true
  }

  export type InvoicesMaxAggregateInputType = {
    id?: true
    user_id?: true
    plan_id?: true
    total_price?: true
    payment_method?: true
    status?: true
    start_date?: true
    end_date?: true
    created_at?: true
  }

  export type InvoicesCountAggregateInputType = {
    id?: true
    user_id?: true
    plan_id?: true
    total_price?: true
    payment_method?: true
    status?: true
    start_date?: true
    end_date?: true
    created_at?: true
    _all?: true
  }

  export type InvoicesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which invoices to aggregate.
     */
    where?: invoicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of invoices to fetch.
     */
    orderBy?: invoicesOrderByWithRelationInput | invoicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: invoicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned invoices
    **/
    _count?: true | InvoicesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InvoicesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InvoicesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvoicesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvoicesMaxAggregateInputType
  }

  export type GetInvoicesAggregateType<T extends InvoicesAggregateArgs> = {
        [P in keyof T & keyof AggregateInvoices]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvoices[P]>
      : GetScalarType<T[P], AggregateInvoices[P]>
  }




  export type invoicesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: invoicesWhereInput
    orderBy?: invoicesOrderByWithAggregationInput | invoicesOrderByWithAggregationInput[]
    by: InvoicesScalarFieldEnum[] | InvoicesScalarFieldEnum
    having?: invoicesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvoicesCountAggregateInputType | true
    _avg?: InvoicesAvgAggregateInputType
    _sum?: InvoicesSumAggregateInputType
    _min?: InvoicesMinAggregateInputType
    _max?: InvoicesMaxAggregateInputType
  }

  export type InvoicesGroupByOutputType = {
    id: number
    user_id: number | null
    plan_id: number | null
    total_price: Decimal | null
    payment_method: string | null
    status: string | null
    start_date: Date | null
    end_date: Date | null
    created_at: Date
    _count: InvoicesCountAggregateOutputType | null
    _avg: InvoicesAvgAggregateOutputType | null
    _sum: InvoicesSumAggregateOutputType | null
    _min: InvoicesMinAggregateOutputType | null
    _max: InvoicesMaxAggregateOutputType | null
  }

  type GetInvoicesGroupByPayload<T extends invoicesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvoicesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvoicesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvoicesGroupByOutputType[P]>
            : GetScalarType<T[P], InvoicesGroupByOutputType[P]>
        }
      >
    >


  export type invoicesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    plan_id?: boolean
    total_price?: boolean
    payment_method?: boolean
    status?: boolean
    start_date?: boolean
    end_date?: boolean
    created_at?: boolean
    users?: boolean | invoices$usersArgs<ExtArgs>
    plans?: boolean | invoices$plansArgs<ExtArgs>
  }, ExtArgs["result"]["invoices"]>



  export type invoicesSelectScalar = {
    id?: boolean
    user_id?: boolean
    plan_id?: boolean
    total_price?: boolean
    payment_method?: boolean
    status?: boolean
    start_date?: boolean
    end_date?: boolean
    created_at?: boolean
  }

  export type invoicesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "plan_id" | "total_price" | "payment_method" | "status" | "start_date" | "end_date" | "created_at", ExtArgs["result"]["invoices"]>
  export type invoicesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | invoices$usersArgs<ExtArgs>
    plans?: boolean | invoices$plansArgs<ExtArgs>
  }

  export type $invoicesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "invoices"
    objects: {
      users: Prisma.$usersPayload<ExtArgs> | null
      plans: Prisma.$plansPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number | null
      plan_id: number | null
      total_price: Prisma.Decimal | null
      payment_method: string | null
      status: string | null
      start_date: Date | null
      end_date: Date | null
      created_at: Date
    }, ExtArgs["result"]["invoices"]>
    composites: {}
  }

  type invoicesGetPayload<S extends boolean | null | undefined | invoicesDefaultArgs> = $Result.GetResult<Prisma.$invoicesPayload, S>

  type invoicesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<invoicesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InvoicesCountAggregateInputType | true
    }

  export interface invoicesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['invoices'], meta: { name: 'invoices' } }
    /**
     * Find zero or one Invoices that matches the filter.
     * @param {invoicesFindUniqueArgs} args - Arguments to find a Invoices
     * @example
     * // Get one Invoices
     * const invoices = await prisma.invoices.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends invoicesFindUniqueArgs>(args: SelectSubset<T, invoicesFindUniqueArgs<ExtArgs>>): Prisma__invoicesClient<$Result.GetResult<Prisma.$invoicesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Invoices that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {invoicesFindUniqueOrThrowArgs} args - Arguments to find a Invoices
     * @example
     * // Get one Invoices
     * const invoices = await prisma.invoices.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends invoicesFindUniqueOrThrowArgs>(args: SelectSubset<T, invoicesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__invoicesClient<$Result.GetResult<Prisma.$invoicesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invoices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoicesFindFirstArgs} args - Arguments to find a Invoices
     * @example
     * // Get one Invoices
     * const invoices = await prisma.invoices.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends invoicesFindFirstArgs>(args?: SelectSubset<T, invoicesFindFirstArgs<ExtArgs>>): Prisma__invoicesClient<$Result.GetResult<Prisma.$invoicesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invoices that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoicesFindFirstOrThrowArgs} args - Arguments to find a Invoices
     * @example
     * // Get one Invoices
     * const invoices = await prisma.invoices.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends invoicesFindFirstOrThrowArgs>(args?: SelectSubset<T, invoicesFindFirstOrThrowArgs<ExtArgs>>): Prisma__invoicesClient<$Result.GetResult<Prisma.$invoicesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Invoices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoicesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Invoices
     * const invoices = await prisma.invoices.findMany()
     * 
     * // Get first 10 Invoices
     * const invoices = await prisma.invoices.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const invoicesWithIdOnly = await prisma.invoices.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends invoicesFindManyArgs>(args?: SelectSubset<T, invoicesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$invoicesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Invoices.
     * @param {invoicesCreateArgs} args - Arguments to create a Invoices.
     * @example
     * // Create one Invoices
     * const Invoices = await prisma.invoices.create({
     *   data: {
     *     // ... data to create a Invoices
     *   }
     * })
     * 
     */
    create<T extends invoicesCreateArgs>(args: SelectSubset<T, invoicesCreateArgs<ExtArgs>>): Prisma__invoicesClient<$Result.GetResult<Prisma.$invoicesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Invoices.
     * @param {invoicesCreateManyArgs} args - Arguments to create many Invoices.
     * @example
     * // Create many Invoices
     * const invoices = await prisma.invoices.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends invoicesCreateManyArgs>(args?: SelectSubset<T, invoicesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Invoices.
     * @param {invoicesDeleteArgs} args - Arguments to delete one Invoices.
     * @example
     * // Delete one Invoices
     * const Invoices = await prisma.invoices.delete({
     *   where: {
     *     // ... filter to delete one Invoices
     *   }
     * })
     * 
     */
    delete<T extends invoicesDeleteArgs>(args: SelectSubset<T, invoicesDeleteArgs<ExtArgs>>): Prisma__invoicesClient<$Result.GetResult<Prisma.$invoicesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Invoices.
     * @param {invoicesUpdateArgs} args - Arguments to update one Invoices.
     * @example
     * // Update one Invoices
     * const invoices = await prisma.invoices.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends invoicesUpdateArgs>(args: SelectSubset<T, invoicesUpdateArgs<ExtArgs>>): Prisma__invoicesClient<$Result.GetResult<Prisma.$invoicesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Invoices.
     * @param {invoicesDeleteManyArgs} args - Arguments to filter Invoices to delete.
     * @example
     * // Delete a few Invoices
     * const { count } = await prisma.invoices.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends invoicesDeleteManyArgs>(args?: SelectSubset<T, invoicesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoicesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Invoices
     * const invoices = await prisma.invoices.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends invoicesUpdateManyArgs>(args: SelectSubset<T, invoicesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Invoices.
     * @param {invoicesUpsertArgs} args - Arguments to update or create a Invoices.
     * @example
     * // Update or create a Invoices
     * const invoices = await prisma.invoices.upsert({
     *   create: {
     *     // ... data to create a Invoices
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Invoices we want to update
     *   }
     * })
     */
    upsert<T extends invoicesUpsertArgs>(args: SelectSubset<T, invoicesUpsertArgs<ExtArgs>>): Prisma__invoicesClient<$Result.GetResult<Prisma.$invoicesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoicesCountArgs} args - Arguments to filter Invoices to count.
     * @example
     * // Count the number of Invoices
     * const count = await prisma.invoices.count({
     *   where: {
     *     // ... the filter for the Invoices we want to count
     *   }
     * })
    **/
    count<T extends invoicesCountArgs>(
      args?: Subset<T, invoicesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvoicesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoicesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InvoicesAggregateArgs>(args: Subset<T, InvoicesAggregateArgs>): Prisma.PrismaPromise<GetInvoicesAggregateType<T>>

    /**
     * Group by Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoicesGroupByArgs} args - Group by arguments.
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
      T extends invoicesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: invoicesGroupByArgs['orderBy'] }
        : { orderBy?: invoicesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, invoicesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvoicesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the invoices model
   */
  readonly fields: invoicesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for invoices.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__invoicesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends invoices$usersArgs<ExtArgs> = {}>(args?: Subset<T, invoices$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    plans<T extends invoices$plansArgs<ExtArgs> = {}>(args?: Subset<T, invoices$plansArgs<ExtArgs>>): Prisma__plansClient<$Result.GetResult<Prisma.$plansPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the invoices model
   */
  interface invoicesFieldRefs {
    readonly id: FieldRef<"invoices", 'Int'>
    readonly user_id: FieldRef<"invoices", 'Int'>
    readonly plan_id: FieldRef<"invoices", 'Int'>
    readonly total_price: FieldRef<"invoices", 'Decimal'>
    readonly payment_method: FieldRef<"invoices", 'String'>
    readonly status: FieldRef<"invoices", 'String'>
    readonly start_date: FieldRef<"invoices", 'DateTime'>
    readonly end_date: FieldRef<"invoices", 'DateTime'>
    readonly created_at: FieldRef<"invoices", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * invoices findUnique
   */
  export type invoicesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoices
     */
    select?: invoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoices
     */
    omit?: invoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoicesInclude<ExtArgs> | null
    /**
     * Filter, which invoices to fetch.
     */
    where: invoicesWhereUniqueInput
  }

  /**
   * invoices findUniqueOrThrow
   */
  export type invoicesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoices
     */
    select?: invoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoices
     */
    omit?: invoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoicesInclude<ExtArgs> | null
    /**
     * Filter, which invoices to fetch.
     */
    where: invoicesWhereUniqueInput
  }

  /**
   * invoices findFirst
   */
  export type invoicesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoices
     */
    select?: invoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoices
     */
    omit?: invoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoicesInclude<ExtArgs> | null
    /**
     * Filter, which invoices to fetch.
     */
    where?: invoicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of invoices to fetch.
     */
    orderBy?: invoicesOrderByWithRelationInput | invoicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for invoices.
     */
    cursor?: invoicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of invoices.
     */
    distinct?: InvoicesScalarFieldEnum | InvoicesScalarFieldEnum[]
  }

  /**
   * invoices findFirstOrThrow
   */
  export type invoicesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoices
     */
    select?: invoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoices
     */
    omit?: invoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoicesInclude<ExtArgs> | null
    /**
     * Filter, which invoices to fetch.
     */
    where?: invoicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of invoices to fetch.
     */
    orderBy?: invoicesOrderByWithRelationInput | invoicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for invoices.
     */
    cursor?: invoicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of invoices.
     */
    distinct?: InvoicesScalarFieldEnum | InvoicesScalarFieldEnum[]
  }

  /**
   * invoices findMany
   */
  export type invoicesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoices
     */
    select?: invoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoices
     */
    omit?: invoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoicesInclude<ExtArgs> | null
    /**
     * Filter, which invoices to fetch.
     */
    where?: invoicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of invoices to fetch.
     */
    orderBy?: invoicesOrderByWithRelationInput | invoicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing invoices.
     */
    cursor?: invoicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` invoices.
     */
    skip?: number
    distinct?: InvoicesScalarFieldEnum | InvoicesScalarFieldEnum[]
  }

  /**
   * invoices create
   */
  export type invoicesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoices
     */
    select?: invoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoices
     */
    omit?: invoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoicesInclude<ExtArgs> | null
    /**
     * The data needed to create a invoices.
     */
    data?: XOR<invoicesCreateInput, invoicesUncheckedCreateInput>
  }

  /**
   * invoices createMany
   */
  export type invoicesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many invoices.
     */
    data: invoicesCreateManyInput | invoicesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * invoices update
   */
  export type invoicesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoices
     */
    select?: invoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoices
     */
    omit?: invoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoicesInclude<ExtArgs> | null
    /**
     * The data needed to update a invoices.
     */
    data: XOR<invoicesUpdateInput, invoicesUncheckedUpdateInput>
    /**
     * Choose, which invoices to update.
     */
    where: invoicesWhereUniqueInput
  }

  /**
   * invoices updateMany
   */
  export type invoicesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update invoices.
     */
    data: XOR<invoicesUpdateManyMutationInput, invoicesUncheckedUpdateManyInput>
    /**
     * Filter which invoices to update
     */
    where?: invoicesWhereInput
    /**
     * Limit how many invoices to update.
     */
    limit?: number
  }

  /**
   * invoices upsert
   */
  export type invoicesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoices
     */
    select?: invoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoices
     */
    omit?: invoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoicesInclude<ExtArgs> | null
    /**
     * The filter to search for the invoices to update in case it exists.
     */
    where: invoicesWhereUniqueInput
    /**
     * In case the invoices found by the `where` argument doesn't exist, create a new invoices with this data.
     */
    create: XOR<invoicesCreateInput, invoicesUncheckedCreateInput>
    /**
     * In case the invoices was found with the provided `where` argument, update it with this data.
     */
    update: XOR<invoicesUpdateInput, invoicesUncheckedUpdateInput>
  }

  /**
   * invoices delete
   */
  export type invoicesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoices
     */
    select?: invoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoices
     */
    omit?: invoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoicesInclude<ExtArgs> | null
    /**
     * Filter which invoices to delete.
     */
    where: invoicesWhereUniqueInput
  }

  /**
   * invoices deleteMany
   */
  export type invoicesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which invoices to delete
     */
    where?: invoicesWhereInput
    /**
     * Limit how many invoices to delete.
     */
    limit?: number
  }

  /**
   * invoices.users
   */
  export type invoices$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  }

  /**
   * invoices.plans
   */
  export type invoices$plansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * invoices without action
   */
  export type invoicesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoices
     */
    select?: invoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoices
     */
    omit?: invoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoicesInclude<ExtArgs> | null
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
    id: number | null
    price: Decimal | null
    duration_days: number | null
  }

  export type PlansSumAggregateOutputType = {
    id: number | null
    price: Decimal | null
    duration_days: number | null
  }

  export type PlansMinAggregateOutputType = {
    id: number | null
    name: string | null
    price: Decimal | null
    duration_days: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PlansMaxAggregateOutputType = {
    id: number | null
    name: string | null
    price: Decimal | null
    duration_days: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PlansCountAggregateOutputType = {
    id: number
    name: number
    price: number
    duration_days: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type PlansAvgAggregateInputType = {
    id?: true
    price?: true
    duration_days?: true
  }

  export type PlansSumAggregateInputType = {
    id?: true
    price?: true
    duration_days?: true
  }

  export type PlansMinAggregateInputType = {
    id?: true
    name?: true
    price?: true
    duration_days?: true
    created_at?: true
    updated_at?: true
  }

  export type PlansMaxAggregateInputType = {
    id?: true
    name?: true
    price?: true
    duration_days?: true
    created_at?: true
    updated_at?: true
  }

  export type PlansCountAggregateInputType = {
    id?: true
    name?: true
    price?: true
    duration_days?: true
    created_at?: true
    updated_at?: true
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
    id: number
    name: string | null
    price: Decimal | null
    duration_days: number | null
    created_at: Date
    updated_at: Date
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
    id?: boolean
    name?: boolean
    price?: boolean
    duration_days?: boolean
    created_at?: boolean
    updated_at?: boolean
    cart?: boolean | plans$cartArgs<ExtArgs>
    invoices?: boolean | plans$invoicesArgs<ExtArgs>
    users?: boolean | plans$usersArgs<ExtArgs>
    _count?: boolean | PlansCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["plans"]>



  export type plansSelectScalar = {
    id?: boolean
    name?: boolean
    price?: boolean
    duration_days?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type plansOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "price" | "duration_days" | "created_at" | "updated_at", ExtArgs["result"]["plans"]>
  export type plansInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cart?: boolean | plans$cartArgs<ExtArgs>
    invoices?: boolean | plans$invoicesArgs<ExtArgs>
    users?: boolean | plans$usersArgs<ExtArgs>
    _count?: boolean | PlansCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $plansPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "plans"
    objects: {
      cart: Prisma.$cartPayload<ExtArgs>[]
      invoices: Prisma.$invoicesPayload<ExtArgs>[]
      users: Prisma.$usersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      price: Prisma.Decimal | null
      duration_days: number | null
      created_at: Date
      updated_at: Date
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
     * // Only select the `id`
     * const plansWithIdOnly = await prisma.plans.findMany({ select: { id: true } })
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
    cart<T extends plans$cartArgs<ExtArgs> = {}>(args?: Subset<T, plans$cartArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    invoices<T extends plans$invoicesArgs<ExtArgs> = {}>(args?: Subset<T, plans$invoicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$invoicesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends plans$usersArgs<ExtArgs> = {}>(args?: Subset<T, plans$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"plans", 'Int'>
    readonly name: FieldRef<"plans", 'String'>
    readonly price: FieldRef<"plans", 'Decimal'>
    readonly duration_days: FieldRef<"plans", 'Int'>
    readonly created_at: FieldRef<"plans", 'DateTime'>
    readonly updated_at: FieldRef<"plans", 'DateTime'>
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
   * plans.cart
   */
  export type plans$cartArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart
     */
    omit?: cartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartInclude<ExtArgs> | null
    where?: cartWhereInput
    orderBy?: cartOrderByWithRelationInput | cartOrderByWithRelationInput[]
    cursor?: cartWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }

  /**
   * plans.invoices
   */
  export type plans$invoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoices
     */
    select?: invoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoices
     */
    omit?: invoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoicesInclude<ExtArgs> | null
    where?: invoicesWhereInput
    orderBy?: invoicesOrderByWithRelationInput | invoicesOrderByWithRelationInput[]
    cursor?: invoicesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvoicesScalarFieldEnum | InvoicesScalarFieldEnum[]
  }

  /**
   * plans.users
   */
  export type plans$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    id: number | null
    plan_id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
    plan_id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    plan_id: number | null
    username: string | null
    password: string | null
    role: string | null
    fullname: string | null
    phonenumber: string | null
    email: string | null
    city: string | null
    gender: string | null
    interest: string | null
    birthday: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    plan_id: number | null
    username: string | null
    password: string | null
    role: string | null
    fullname: string | null
    phonenumber: string | null
    email: string | null
    city: string | null
    gender: string | null
    interest: string | null
    birthday: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    plan_id: number
    username: number
    password: number
    role: number
    fullname: number
    phonenumber: number
    email: number
    city: number
    gender: number
    interest: number
    birthday: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
    plan_id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
    plan_id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    plan_id?: true
    username?: true
    password?: true
    role?: true
    fullname?: true
    phonenumber?: true
    email?: true
    city?: true
    gender?: true
    interest?: true
    birthday?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    plan_id?: true
    username?: true
    password?: true
    role?: true
    fullname?: true
    phonenumber?: true
    email?: true
    city?: true
    gender?: true
    interest?: true
    birthday?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    plan_id?: true
    username?: true
    password?: true
    role?: true
    fullname?: true
    phonenumber?: true
    email?: true
    city?: true
    gender?: true
    interest?: true
    birthday?: true
    created_at?: true
    updated_at?: true
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
    id: number
    plan_id: number | null
    username: string | null
    password: string | null
    role: string | null
    fullname: string | null
    phonenumber: string | null
    email: string | null
    city: string | null
    gender: string | null
    interest: string | null
    birthday: Date | null
    created_at: Date
    updated_at: Date
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
    id?: boolean
    plan_id?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    fullname?: boolean
    phonenumber?: boolean
    email?: boolean
    city?: boolean
    gender?: boolean
    interest?: boolean
    birthday?: boolean
    created_at?: boolean
    updated_at?: boolean
    cart?: boolean | users$cartArgs<ExtArgs>
    favorites?: boolean | users$favoritesArgs<ExtArgs>
    feedbacks?: boolean | users$feedbacksArgs<ExtArgs>
    invoices?: boolean | users$invoicesArgs<ExtArgs>
    plans?: boolean | users$plansArgs<ExtArgs>
    views?: boolean | users$viewsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>



  export type usersSelectScalar = {
    id?: boolean
    plan_id?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    fullname?: boolean
    phonenumber?: boolean
    email?: boolean
    city?: boolean
    gender?: boolean
    interest?: boolean
    birthday?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "plan_id" | "username" | "password" | "role" | "fullname" | "phonenumber" | "email" | "city" | "gender" | "interest" | "birthday" | "created_at" | "updated_at", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cart?: boolean | users$cartArgs<ExtArgs>
    favorites?: boolean | users$favoritesArgs<ExtArgs>
    feedbacks?: boolean | users$feedbacksArgs<ExtArgs>
    invoices?: boolean | users$invoicesArgs<ExtArgs>
    plans?: boolean | users$plansArgs<ExtArgs>
    views?: boolean | users$viewsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      cart: Prisma.$cartPayload<ExtArgs>[]
      favorites: Prisma.$favoritesPayload<ExtArgs>[]
      feedbacks: Prisma.$feedbacksPayload<ExtArgs>[]
      invoices: Prisma.$invoicesPayload<ExtArgs>[]
      plans: Prisma.$plansPayload<ExtArgs> | null
      views: Prisma.$viewsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      plan_id: number | null
      username: string | null
      password: string | null
      role: string | null
      fullname: string | null
      phonenumber: string | null
      email: string | null
      city: string | null
      gender: string | null
      interest: string | null
      birthday: Date | null
      created_at: Date
      updated_at: Date
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
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
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
    cart<T extends users$cartArgs<ExtArgs> = {}>(args?: Subset<T, users$cartArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    favorites<T extends users$favoritesArgs<ExtArgs> = {}>(args?: Subset<T, users$favoritesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$favoritesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    feedbacks<T extends users$feedbacksArgs<ExtArgs> = {}>(args?: Subset<T, users$feedbacksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$feedbacksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    invoices<T extends users$invoicesArgs<ExtArgs> = {}>(args?: Subset<T, users$invoicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$invoicesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    plans<T extends users$plansArgs<ExtArgs> = {}>(args?: Subset<T, users$plansArgs<ExtArgs>>): Prisma__plansClient<$Result.GetResult<Prisma.$plansPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    views<T extends users$viewsArgs<ExtArgs> = {}>(args?: Subset<T, users$viewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$viewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"users", 'Int'>
    readonly plan_id: FieldRef<"users", 'Int'>
    readonly username: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly role: FieldRef<"users", 'String'>
    readonly fullname: FieldRef<"users", 'String'>
    readonly phonenumber: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly city: FieldRef<"users", 'String'>
    readonly gender: FieldRef<"users", 'String'>
    readonly interest: FieldRef<"users", 'String'>
    readonly birthday: FieldRef<"users", 'DateTime'>
    readonly created_at: FieldRef<"users", 'DateTime'>
    readonly updated_at: FieldRef<"users", 'DateTime'>
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
   * users.cart
   */
  export type users$cartArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart
     */
    omit?: cartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartInclude<ExtArgs> | null
    where?: cartWhereInput
    orderBy?: cartOrderByWithRelationInput | cartOrderByWithRelationInput[]
    cursor?: cartWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }

  /**
   * users.favorites
   */
  export type users$favoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favorites
     */
    select?: favoritesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the favorites
     */
    omit?: favoritesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favoritesInclude<ExtArgs> | null
    where?: favoritesWhereInput
    orderBy?: favoritesOrderByWithRelationInput | favoritesOrderByWithRelationInput[]
    cursor?: favoritesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoritesScalarFieldEnum | FavoritesScalarFieldEnum[]
  }

  /**
   * users.feedbacks
   */
  export type users$feedbacksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feedbacks
     */
    select?: feedbacksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feedbacks
     */
    omit?: feedbacksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feedbacksInclude<ExtArgs> | null
    where?: feedbacksWhereInput
    orderBy?: feedbacksOrderByWithRelationInput | feedbacksOrderByWithRelationInput[]
    cursor?: feedbacksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FeedbacksScalarFieldEnum | FeedbacksScalarFieldEnum[]
  }

  /**
   * users.invoices
   */
  export type users$invoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoices
     */
    select?: invoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoices
     */
    omit?: invoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoicesInclude<ExtArgs> | null
    where?: invoicesWhereInput
    orderBy?: invoicesOrderByWithRelationInput | invoicesOrderByWithRelationInput[]
    cursor?: invoicesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvoicesScalarFieldEnum | InvoicesScalarFieldEnum[]
  }

  /**
   * users.plans
   */
  export type users$plansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * users.views
   */
  export type users$viewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the views
     */
    select?: viewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the views
     */
    omit?: viewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: viewsInclude<ExtArgs> | null
    where?: viewsWhereInput
    orderBy?: viewsOrderByWithRelationInput | viewsOrderByWithRelationInput[]
    cursor?: viewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ViewsScalarFieldEnum | ViewsScalarFieldEnum[]
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
   * Model video_files
   */

  export type AggregateVideo_files = {
    _count: Video_filesCountAggregateOutputType | null
    _avg: Video_filesAvgAggregateOutputType | null
    _sum: Video_filesSumAggregateOutputType | null
    _min: Video_filesMinAggregateOutputType | null
    _max: Video_filesMaxAggregateOutputType | null
  }

  export type Video_filesAvgAggregateOutputType = {
    id: number | null
    episode_id: number | null
  }

  export type Video_filesSumAggregateOutputType = {
    id: number | null
    episode_id: number | null
  }

  export type Video_filesMinAggregateOutputType = {
    id: number | null
    episode_id: number | null
    quality: string | null
    file_url: string | null
  }

  export type Video_filesMaxAggregateOutputType = {
    id: number | null
    episode_id: number | null
    quality: string | null
    file_url: string | null
  }

  export type Video_filesCountAggregateOutputType = {
    id: number
    episode_id: number
    quality: number
    file_url: number
    _all: number
  }


  export type Video_filesAvgAggregateInputType = {
    id?: true
    episode_id?: true
  }

  export type Video_filesSumAggregateInputType = {
    id?: true
    episode_id?: true
  }

  export type Video_filesMinAggregateInputType = {
    id?: true
    episode_id?: true
    quality?: true
    file_url?: true
  }

  export type Video_filesMaxAggregateInputType = {
    id?: true
    episode_id?: true
    quality?: true
    file_url?: true
  }

  export type Video_filesCountAggregateInputType = {
    id?: true
    episode_id?: true
    quality?: true
    file_url?: true
    _all?: true
  }

  export type Video_filesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which video_files to aggregate.
     */
    where?: video_filesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of video_files to fetch.
     */
    orderBy?: video_filesOrderByWithRelationInput | video_filesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: video_filesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` video_files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` video_files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned video_files
    **/
    _count?: true | Video_filesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Video_filesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Video_filesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Video_filesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Video_filesMaxAggregateInputType
  }

  export type GetVideo_filesAggregateType<T extends Video_filesAggregateArgs> = {
        [P in keyof T & keyof AggregateVideo_files]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVideo_files[P]>
      : GetScalarType<T[P], AggregateVideo_files[P]>
  }




  export type video_filesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: video_filesWhereInput
    orderBy?: video_filesOrderByWithAggregationInput | video_filesOrderByWithAggregationInput[]
    by: Video_filesScalarFieldEnum[] | Video_filesScalarFieldEnum
    having?: video_filesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Video_filesCountAggregateInputType | true
    _avg?: Video_filesAvgAggregateInputType
    _sum?: Video_filesSumAggregateInputType
    _min?: Video_filesMinAggregateInputType
    _max?: Video_filesMaxAggregateInputType
  }

  export type Video_filesGroupByOutputType = {
    id: number
    episode_id: number | null
    quality: string | null
    file_url: string | null
    _count: Video_filesCountAggregateOutputType | null
    _avg: Video_filesAvgAggregateOutputType | null
    _sum: Video_filesSumAggregateOutputType | null
    _min: Video_filesMinAggregateOutputType | null
    _max: Video_filesMaxAggregateOutputType | null
  }

  type GetVideo_filesGroupByPayload<T extends video_filesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Video_filesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Video_filesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Video_filesGroupByOutputType[P]>
            : GetScalarType<T[P], Video_filesGroupByOutputType[P]>
        }
      >
    >


  export type video_filesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    episode_id?: boolean
    quality?: boolean
    file_url?: boolean
    episodes?: boolean | video_files$episodesArgs<ExtArgs>
  }, ExtArgs["result"]["video_files"]>



  export type video_filesSelectScalar = {
    id?: boolean
    episode_id?: boolean
    quality?: boolean
    file_url?: boolean
  }

  export type video_filesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "episode_id" | "quality" | "file_url", ExtArgs["result"]["video_files"]>
  export type video_filesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    episodes?: boolean | video_files$episodesArgs<ExtArgs>
  }

  export type $video_filesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "video_files"
    objects: {
      episodes: Prisma.$episodesPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      episode_id: number | null
      quality: string | null
      file_url: string | null
    }, ExtArgs["result"]["video_files"]>
    composites: {}
  }

  type video_filesGetPayload<S extends boolean | null | undefined | video_filesDefaultArgs> = $Result.GetResult<Prisma.$video_filesPayload, S>

  type video_filesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<video_filesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Video_filesCountAggregateInputType | true
    }

  export interface video_filesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['video_files'], meta: { name: 'video_files' } }
    /**
     * Find zero or one Video_files that matches the filter.
     * @param {video_filesFindUniqueArgs} args - Arguments to find a Video_files
     * @example
     * // Get one Video_files
     * const video_files = await prisma.video_files.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends video_filesFindUniqueArgs>(args: SelectSubset<T, video_filesFindUniqueArgs<ExtArgs>>): Prisma__video_filesClient<$Result.GetResult<Prisma.$video_filesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Video_files that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {video_filesFindUniqueOrThrowArgs} args - Arguments to find a Video_files
     * @example
     * // Get one Video_files
     * const video_files = await prisma.video_files.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends video_filesFindUniqueOrThrowArgs>(args: SelectSubset<T, video_filesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__video_filesClient<$Result.GetResult<Prisma.$video_filesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Video_files that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {video_filesFindFirstArgs} args - Arguments to find a Video_files
     * @example
     * // Get one Video_files
     * const video_files = await prisma.video_files.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends video_filesFindFirstArgs>(args?: SelectSubset<T, video_filesFindFirstArgs<ExtArgs>>): Prisma__video_filesClient<$Result.GetResult<Prisma.$video_filesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Video_files that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {video_filesFindFirstOrThrowArgs} args - Arguments to find a Video_files
     * @example
     * // Get one Video_files
     * const video_files = await prisma.video_files.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends video_filesFindFirstOrThrowArgs>(args?: SelectSubset<T, video_filesFindFirstOrThrowArgs<ExtArgs>>): Prisma__video_filesClient<$Result.GetResult<Prisma.$video_filesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Video_files that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {video_filesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Video_files
     * const video_files = await prisma.video_files.findMany()
     * 
     * // Get first 10 Video_files
     * const video_files = await prisma.video_files.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const video_filesWithIdOnly = await prisma.video_files.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends video_filesFindManyArgs>(args?: SelectSubset<T, video_filesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$video_filesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Video_files.
     * @param {video_filesCreateArgs} args - Arguments to create a Video_files.
     * @example
     * // Create one Video_files
     * const Video_files = await prisma.video_files.create({
     *   data: {
     *     // ... data to create a Video_files
     *   }
     * })
     * 
     */
    create<T extends video_filesCreateArgs>(args: SelectSubset<T, video_filesCreateArgs<ExtArgs>>): Prisma__video_filesClient<$Result.GetResult<Prisma.$video_filesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Video_files.
     * @param {video_filesCreateManyArgs} args - Arguments to create many Video_files.
     * @example
     * // Create many Video_files
     * const video_files = await prisma.video_files.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends video_filesCreateManyArgs>(args?: SelectSubset<T, video_filesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Video_files.
     * @param {video_filesDeleteArgs} args - Arguments to delete one Video_files.
     * @example
     * // Delete one Video_files
     * const Video_files = await prisma.video_files.delete({
     *   where: {
     *     // ... filter to delete one Video_files
     *   }
     * })
     * 
     */
    delete<T extends video_filesDeleteArgs>(args: SelectSubset<T, video_filesDeleteArgs<ExtArgs>>): Prisma__video_filesClient<$Result.GetResult<Prisma.$video_filesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Video_files.
     * @param {video_filesUpdateArgs} args - Arguments to update one Video_files.
     * @example
     * // Update one Video_files
     * const video_files = await prisma.video_files.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends video_filesUpdateArgs>(args: SelectSubset<T, video_filesUpdateArgs<ExtArgs>>): Prisma__video_filesClient<$Result.GetResult<Prisma.$video_filesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Video_files.
     * @param {video_filesDeleteManyArgs} args - Arguments to filter Video_files to delete.
     * @example
     * // Delete a few Video_files
     * const { count } = await prisma.video_files.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends video_filesDeleteManyArgs>(args?: SelectSubset<T, video_filesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Video_files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {video_filesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Video_files
     * const video_files = await prisma.video_files.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends video_filesUpdateManyArgs>(args: SelectSubset<T, video_filesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Video_files.
     * @param {video_filesUpsertArgs} args - Arguments to update or create a Video_files.
     * @example
     * // Update or create a Video_files
     * const video_files = await prisma.video_files.upsert({
     *   create: {
     *     // ... data to create a Video_files
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Video_files we want to update
     *   }
     * })
     */
    upsert<T extends video_filesUpsertArgs>(args: SelectSubset<T, video_filesUpsertArgs<ExtArgs>>): Prisma__video_filesClient<$Result.GetResult<Prisma.$video_filesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Video_files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {video_filesCountArgs} args - Arguments to filter Video_files to count.
     * @example
     * // Count the number of Video_files
     * const count = await prisma.video_files.count({
     *   where: {
     *     // ... the filter for the Video_files we want to count
     *   }
     * })
    **/
    count<T extends video_filesCountArgs>(
      args?: Subset<T, video_filesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Video_filesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Video_files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Video_filesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Video_filesAggregateArgs>(args: Subset<T, Video_filesAggregateArgs>): Prisma.PrismaPromise<GetVideo_filesAggregateType<T>>

    /**
     * Group by Video_files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {video_filesGroupByArgs} args - Group by arguments.
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
      T extends video_filesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: video_filesGroupByArgs['orderBy'] }
        : { orderBy?: video_filesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, video_filesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVideo_filesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the video_files model
   */
  readonly fields: video_filesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for video_files.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__video_filesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    episodes<T extends video_files$episodesArgs<ExtArgs> = {}>(args?: Subset<T, video_files$episodesArgs<ExtArgs>>): Prisma__episodesClient<$Result.GetResult<Prisma.$episodesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the video_files model
   */
  interface video_filesFieldRefs {
    readonly id: FieldRef<"video_files", 'Int'>
    readonly episode_id: FieldRef<"video_files", 'Int'>
    readonly quality: FieldRef<"video_files", 'String'>
    readonly file_url: FieldRef<"video_files", 'String'>
  }
    

  // Custom InputTypes
  /**
   * video_files findUnique
   */
  export type video_filesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the video_files
     */
    select?: video_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the video_files
     */
    omit?: video_filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: video_filesInclude<ExtArgs> | null
    /**
     * Filter, which video_files to fetch.
     */
    where: video_filesWhereUniqueInput
  }

  /**
   * video_files findUniqueOrThrow
   */
  export type video_filesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the video_files
     */
    select?: video_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the video_files
     */
    omit?: video_filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: video_filesInclude<ExtArgs> | null
    /**
     * Filter, which video_files to fetch.
     */
    where: video_filesWhereUniqueInput
  }

  /**
   * video_files findFirst
   */
  export type video_filesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the video_files
     */
    select?: video_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the video_files
     */
    omit?: video_filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: video_filesInclude<ExtArgs> | null
    /**
     * Filter, which video_files to fetch.
     */
    where?: video_filesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of video_files to fetch.
     */
    orderBy?: video_filesOrderByWithRelationInput | video_filesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for video_files.
     */
    cursor?: video_filesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` video_files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` video_files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of video_files.
     */
    distinct?: Video_filesScalarFieldEnum | Video_filesScalarFieldEnum[]
  }

  /**
   * video_files findFirstOrThrow
   */
  export type video_filesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the video_files
     */
    select?: video_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the video_files
     */
    omit?: video_filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: video_filesInclude<ExtArgs> | null
    /**
     * Filter, which video_files to fetch.
     */
    where?: video_filesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of video_files to fetch.
     */
    orderBy?: video_filesOrderByWithRelationInput | video_filesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for video_files.
     */
    cursor?: video_filesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` video_files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` video_files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of video_files.
     */
    distinct?: Video_filesScalarFieldEnum | Video_filesScalarFieldEnum[]
  }

  /**
   * video_files findMany
   */
  export type video_filesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the video_files
     */
    select?: video_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the video_files
     */
    omit?: video_filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: video_filesInclude<ExtArgs> | null
    /**
     * Filter, which video_files to fetch.
     */
    where?: video_filesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of video_files to fetch.
     */
    orderBy?: video_filesOrderByWithRelationInput | video_filesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing video_files.
     */
    cursor?: video_filesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` video_files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` video_files.
     */
    skip?: number
    distinct?: Video_filesScalarFieldEnum | Video_filesScalarFieldEnum[]
  }

  /**
   * video_files create
   */
  export type video_filesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the video_files
     */
    select?: video_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the video_files
     */
    omit?: video_filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: video_filesInclude<ExtArgs> | null
    /**
     * The data needed to create a video_files.
     */
    data?: XOR<video_filesCreateInput, video_filesUncheckedCreateInput>
  }

  /**
   * video_files createMany
   */
  export type video_filesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many video_files.
     */
    data: video_filesCreateManyInput | video_filesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * video_files update
   */
  export type video_filesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the video_files
     */
    select?: video_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the video_files
     */
    omit?: video_filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: video_filesInclude<ExtArgs> | null
    /**
     * The data needed to update a video_files.
     */
    data: XOR<video_filesUpdateInput, video_filesUncheckedUpdateInput>
    /**
     * Choose, which video_files to update.
     */
    where: video_filesWhereUniqueInput
  }

  /**
   * video_files updateMany
   */
  export type video_filesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update video_files.
     */
    data: XOR<video_filesUpdateManyMutationInput, video_filesUncheckedUpdateManyInput>
    /**
     * Filter which video_files to update
     */
    where?: video_filesWhereInput
    /**
     * Limit how many video_files to update.
     */
    limit?: number
  }

  /**
   * video_files upsert
   */
  export type video_filesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the video_files
     */
    select?: video_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the video_files
     */
    omit?: video_filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: video_filesInclude<ExtArgs> | null
    /**
     * The filter to search for the video_files to update in case it exists.
     */
    where: video_filesWhereUniqueInput
    /**
     * In case the video_files found by the `where` argument doesn't exist, create a new video_files with this data.
     */
    create: XOR<video_filesCreateInput, video_filesUncheckedCreateInput>
    /**
     * In case the video_files was found with the provided `where` argument, update it with this data.
     */
    update: XOR<video_filesUpdateInput, video_filesUncheckedUpdateInput>
  }

  /**
   * video_files delete
   */
  export type video_filesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the video_files
     */
    select?: video_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the video_files
     */
    omit?: video_filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: video_filesInclude<ExtArgs> | null
    /**
     * Filter which video_files to delete.
     */
    where: video_filesWhereUniqueInput
  }

  /**
   * video_files deleteMany
   */
  export type video_filesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which video_files to delete
     */
    where?: video_filesWhereInput
    /**
     * Limit how many video_files to delete.
     */
    limit?: number
  }

  /**
   * video_files.episodes
   */
  export type video_files$episodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the episodes
     */
    select?: episodesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the episodes
     */
    omit?: episodesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: episodesInclude<ExtArgs> | null
    where?: episodesWhereInput
  }

  /**
   * video_files without action
   */
  export type video_filesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the video_files
     */
    select?: video_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the video_files
     */
    omit?: video_filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: video_filesInclude<ExtArgs> | null
  }


  /**
   * Model views
   */

  export type AggregateViews = {
    _count: ViewsCountAggregateOutputType | null
    _avg: ViewsAvgAggregateOutputType | null
    _sum: ViewsSumAggregateOutputType | null
    _min: ViewsMinAggregateOutputType | null
    _max: ViewsMaxAggregateOutputType | null
  }

  export type ViewsAvgAggregateOutputType = {
    id: number | null
    film_id: number | null
    episode_id: number | null
    user_id: number | null
    progress: number | null
  }

  export type ViewsSumAggregateOutputType = {
    id: number | null
    film_id: number | null
    episode_id: number | null
    user_id: number | null
    progress: number | null
  }

  export type ViewsMinAggregateOutputType = {
    id: number | null
    film_id: number | null
    episode_id: number | null
    user_id: number | null
    viewed_at: Date | null
    progress: number | null
  }

  export type ViewsMaxAggregateOutputType = {
    id: number | null
    film_id: number | null
    episode_id: number | null
    user_id: number | null
    viewed_at: Date | null
    progress: number | null
  }

  export type ViewsCountAggregateOutputType = {
    id: number
    film_id: number
    episode_id: number
    user_id: number
    viewed_at: number
    progress: number
    _all: number
  }


  export type ViewsAvgAggregateInputType = {
    id?: true
    film_id?: true
    episode_id?: true
    user_id?: true
    progress?: true
  }

  export type ViewsSumAggregateInputType = {
    id?: true
    film_id?: true
    episode_id?: true
    user_id?: true
    progress?: true
  }

  export type ViewsMinAggregateInputType = {
    id?: true
    film_id?: true
    episode_id?: true
    user_id?: true
    viewed_at?: true
    progress?: true
  }

  export type ViewsMaxAggregateInputType = {
    id?: true
    film_id?: true
    episode_id?: true
    user_id?: true
    viewed_at?: true
    progress?: true
  }

  export type ViewsCountAggregateInputType = {
    id?: true
    film_id?: true
    episode_id?: true
    user_id?: true
    viewed_at?: true
    progress?: true
    _all?: true
  }

  export type ViewsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which views to aggregate.
     */
    where?: viewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of views to fetch.
     */
    orderBy?: viewsOrderByWithRelationInput | viewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: viewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` views from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` views.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned views
    **/
    _count?: true | ViewsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ViewsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ViewsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ViewsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ViewsMaxAggregateInputType
  }

  export type GetViewsAggregateType<T extends ViewsAggregateArgs> = {
        [P in keyof T & keyof AggregateViews]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateViews[P]>
      : GetScalarType<T[P], AggregateViews[P]>
  }




  export type viewsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: viewsWhereInput
    orderBy?: viewsOrderByWithAggregationInput | viewsOrderByWithAggregationInput[]
    by: ViewsScalarFieldEnum[] | ViewsScalarFieldEnum
    having?: viewsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ViewsCountAggregateInputType | true
    _avg?: ViewsAvgAggregateInputType
    _sum?: ViewsSumAggregateInputType
    _min?: ViewsMinAggregateInputType
    _max?: ViewsMaxAggregateInputType
  }

  export type ViewsGroupByOutputType = {
    id: number
    film_id: number | null
    episode_id: number | null
    user_id: number | null
    viewed_at: Date
    progress: number | null
    _count: ViewsCountAggregateOutputType | null
    _avg: ViewsAvgAggregateOutputType | null
    _sum: ViewsSumAggregateOutputType | null
    _min: ViewsMinAggregateOutputType | null
    _max: ViewsMaxAggregateOutputType | null
  }

  type GetViewsGroupByPayload<T extends viewsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ViewsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ViewsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ViewsGroupByOutputType[P]>
            : GetScalarType<T[P], ViewsGroupByOutputType[P]>
        }
      >
    >


  export type viewsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    film_id?: boolean
    episode_id?: boolean
    user_id?: boolean
    viewed_at?: boolean
    progress?: boolean
    films?: boolean | views$filmsArgs<ExtArgs>
    episodes?: boolean | views$episodesArgs<ExtArgs>
    users?: boolean | views$usersArgs<ExtArgs>
  }, ExtArgs["result"]["views"]>



  export type viewsSelectScalar = {
    id?: boolean
    film_id?: boolean
    episode_id?: boolean
    user_id?: boolean
    viewed_at?: boolean
    progress?: boolean
  }

  export type viewsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "film_id" | "episode_id" | "user_id" | "viewed_at" | "progress", ExtArgs["result"]["views"]>
  export type viewsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    films?: boolean | views$filmsArgs<ExtArgs>
    episodes?: boolean | views$episodesArgs<ExtArgs>
    users?: boolean | views$usersArgs<ExtArgs>
  }

  export type $viewsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "views"
    objects: {
      films: Prisma.$filmsPayload<ExtArgs> | null
      episodes: Prisma.$episodesPayload<ExtArgs> | null
      users: Prisma.$usersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      film_id: number | null
      episode_id: number | null
      user_id: number | null
      viewed_at: Date
      progress: number | null
    }, ExtArgs["result"]["views"]>
    composites: {}
  }

  type viewsGetPayload<S extends boolean | null | undefined | viewsDefaultArgs> = $Result.GetResult<Prisma.$viewsPayload, S>

  type viewsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<viewsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ViewsCountAggregateInputType | true
    }

  export interface viewsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['views'], meta: { name: 'views' } }
    /**
     * Find zero or one Views that matches the filter.
     * @param {viewsFindUniqueArgs} args - Arguments to find a Views
     * @example
     * // Get one Views
     * const views = await prisma.views.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends viewsFindUniqueArgs>(args: SelectSubset<T, viewsFindUniqueArgs<ExtArgs>>): Prisma__viewsClient<$Result.GetResult<Prisma.$viewsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Views that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {viewsFindUniqueOrThrowArgs} args - Arguments to find a Views
     * @example
     * // Get one Views
     * const views = await prisma.views.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends viewsFindUniqueOrThrowArgs>(args: SelectSubset<T, viewsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__viewsClient<$Result.GetResult<Prisma.$viewsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Views that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {viewsFindFirstArgs} args - Arguments to find a Views
     * @example
     * // Get one Views
     * const views = await prisma.views.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends viewsFindFirstArgs>(args?: SelectSubset<T, viewsFindFirstArgs<ExtArgs>>): Prisma__viewsClient<$Result.GetResult<Prisma.$viewsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Views that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {viewsFindFirstOrThrowArgs} args - Arguments to find a Views
     * @example
     * // Get one Views
     * const views = await prisma.views.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends viewsFindFirstOrThrowArgs>(args?: SelectSubset<T, viewsFindFirstOrThrowArgs<ExtArgs>>): Prisma__viewsClient<$Result.GetResult<Prisma.$viewsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Views that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {viewsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Views
     * const views = await prisma.views.findMany()
     * 
     * // Get first 10 Views
     * const views = await prisma.views.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const viewsWithIdOnly = await prisma.views.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends viewsFindManyArgs>(args?: SelectSubset<T, viewsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$viewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Views.
     * @param {viewsCreateArgs} args - Arguments to create a Views.
     * @example
     * // Create one Views
     * const Views = await prisma.views.create({
     *   data: {
     *     // ... data to create a Views
     *   }
     * })
     * 
     */
    create<T extends viewsCreateArgs>(args: SelectSubset<T, viewsCreateArgs<ExtArgs>>): Prisma__viewsClient<$Result.GetResult<Prisma.$viewsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Views.
     * @param {viewsCreateManyArgs} args - Arguments to create many Views.
     * @example
     * // Create many Views
     * const views = await prisma.views.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends viewsCreateManyArgs>(args?: SelectSubset<T, viewsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Views.
     * @param {viewsDeleteArgs} args - Arguments to delete one Views.
     * @example
     * // Delete one Views
     * const Views = await prisma.views.delete({
     *   where: {
     *     // ... filter to delete one Views
     *   }
     * })
     * 
     */
    delete<T extends viewsDeleteArgs>(args: SelectSubset<T, viewsDeleteArgs<ExtArgs>>): Prisma__viewsClient<$Result.GetResult<Prisma.$viewsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Views.
     * @param {viewsUpdateArgs} args - Arguments to update one Views.
     * @example
     * // Update one Views
     * const views = await prisma.views.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends viewsUpdateArgs>(args: SelectSubset<T, viewsUpdateArgs<ExtArgs>>): Prisma__viewsClient<$Result.GetResult<Prisma.$viewsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Views.
     * @param {viewsDeleteManyArgs} args - Arguments to filter Views to delete.
     * @example
     * // Delete a few Views
     * const { count } = await prisma.views.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends viewsDeleteManyArgs>(args?: SelectSubset<T, viewsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Views.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {viewsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Views
     * const views = await prisma.views.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends viewsUpdateManyArgs>(args: SelectSubset<T, viewsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Views.
     * @param {viewsUpsertArgs} args - Arguments to update or create a Views.
     * @example
     * // Update or create a Views
     * const views = await prisma.views.upsert({
     *   create: {
     *     // ... data to create a Views
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Views we want to update
     *   }
     * })
     */
    upsert<T extends viewsUpsertArgs>(args: SelectSubset<T, viewsUpsertArgs<ExtArgs>>): Prisma__viewsClient<$Result.GetResult<Prisma.$viewsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Views.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {viewsCountArgs} args - Arguments to filter Views to count.
     * @example
     * // Count the number of Views
     * const count = await prisma.views.count({
     *   where: {
     *     // ... the filter for the Views we want to count
     *   }
     * })
    **/
    count<T extends viewsCountArgs>(
      args?: Subset<T, viewsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ViewsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Views.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ViewsAggregateArgs>(args: Subset<T, ViewsAggregateArgs>): Prisma.PrismaPromise<GetViewsAggregateType<T>>

    /**
     * Group by Views.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {viewsGroupByArgs} args - Group by arguments.
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
      T extends viewsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: viewsGroupByArgs['orderBy'] }
        : { orderBy?: viewsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, viewsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetViewsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the views model
   */
  readonly fields: viewsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for views.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__viewsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    films<T extends views$filmsArgs<ExtArgs> = {}>(args?: Subset<T, views$filmsArgs<ExtArgs>>): Prisma__filmsClient<$Result.GetResult<Prisma.$filmsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    episodes<T extends views$episodesArgs<ExtArgs> = {}>(args?: Subset<T, views$episodesArgs<ExtArgs>>): Prisma__episodesClient<$Result.GetResult<Prisma.$episodesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    users<T extends views$usersArgs<ExtArgs> = {}>(args?: Subset<T, views$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the views model
   */
  interface viewsFieldRefs {
    readonly id: FieldRef<"views", 'Int'>
    readonly film_id: FieldRef<"views", 'Int'>
    readonly episode_id: FieldRef<"views", 'Int'>
    readonly user_id: FieldRef<"views", 'Int'>
    readonly viewed_at: FieldRef<"views", 'DateTime'>
    readonly progress: FieldRef<"views", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * views findUnique
   */
  export type viewsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the views
     */
    select?: viewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the views
     */
    omit?: viewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: viewsInclude<ExtArgs> | null
    /**
     * Filter, which views to fetch.
     */
    where: viewsWhereUniqueInput
  }

  /**
   * views findUniqueOrThrow
   */
  export type viewsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the views
     */
    select?: viewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the views
     */
    omit?: viewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: viewsInclude<ExtArgs> | null
    /**
     * Filter, which views to fetch.
     */
    where: viewsWhereUniqueInput
  }

  /**
   * views findFirst
   */
  export type viewsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the views
     */
    select?: viewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the views
     */
    omit?: viewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: viewsInclude<ExtArgs> | null
    /**
     * Filter, which views to fetch.
     */
    where?: viewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of views to fetch.
     */
    orderBy?: viewsOrderByWithRelationInput | viewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for views.
     */
    cursor?: viewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` views from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` views.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of views.
     */
    distinct?: ViewsScalarFieldEnum | ViewsScalarFieldEnum[]
  }

  /**
   * views findFirstOrThrow
   */
  export type viewsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the views
     */
    select?: viewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the views
     */
    omit?: viewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: viewsInclude<ExtArgs> | null
    /**
     * Filter, which views to fetch.
     */
    where?: viewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of views to fetch.
     */
    orderBy?: viewsOrderByWithRelationInput | viewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for views.
     */
    cursor?: viewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` views from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` views.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of views.
     */
    distinct?: ViewsScalarFieldEnum | ViewsScalarFieldEnum[]
  }

  /**
   * views findMany
   */
  export type viewsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the views
     */
    select?: viewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the views
     */
    omit?: viewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: viewsInclude<ExtArgs> | null
    /**
     * Filter, which views to fetch.
     */
    where?: viewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of views to fetch.
     */
    orderBy?: viewsOrderByWithRelationInput | viewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing views.
     */
    cursor?: viewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` views from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` views.
     */
    skip?: number
    distinct?: ViewsScalarFieldEnum | ViewsScalarFieldEnum[]
  }

  /**
   * views create
   */
  export type viewsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the views
     */
    select?: viewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the views
     */
    omit?: viewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: viewsInclude<ExtArgs> | null
    /**
     * The data needed to create a views.
     */
    data?: XOR<viewsCreateInput, viewsUncheckedCreateInput>
  }

  /**
   * views createMany
   */
  export type viewsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many views.
     */
    data: viewsCreateManyInput | viewsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * views update
   */
  export type viewsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the views
     */
    select?: viewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the views
     */
    omit?: viewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: viewsInclude<ExtArgs> | null
    /**
     * The data needed to update a views.
     */
    data: XOR<viewsUpdateInput, viewsUncheckedUpdateInput>
    /**
     * Choose, which views to update.
     */
    where: viewsWhereUniqueInput
  }

  /**
   * views updateMany
   */
  export type viewsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update views.
     */
    data: XOR<viewsUpdateManyMutationInput, viewsUncheckedUpdateManyInput>
    /**
     * Filter which views to update
     */
    where?: viewsWhereInput
    /**
     * Limit how many views to update.
     */
    limit?: number
  }

  /**
   * views upsert
   */
  export type viewsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the views
     */
    select?: viewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the views
     */
    omit?: viewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: viewsInclude<ExtArgs> | null
    /**
     * The filter to search for the views to update in case it exists.
     */
    where: viewsWhereUniqueInput
    /**
     * In case the views found by the `where` argument doesn't exist, create a new views with this data.
     */
    create: XOR<viewsCreateInput, viewsUncheckedCreateInput>
    /**
     * In case the views was found with the provided `where` argument, update it with this data.
     */
    update: XOR<viewsUpdateInput, viewsUncheckedUpdateInput>
  }

  /**
   * views delete
   */
  export type viewsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the views
     */
    select?: viewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the views
     */
    omit?: viewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: viewsInclude<ExtArgs> | null
    /**
     * Filter which views to delete.
     */
    where: viewsWhereUniqueInput
  }

  /**
   * views deleteMany
   */
  export type viewsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which views to delete
     */
    where?: viewsWhereInput
    /**
     * Limit how many views to delete.
     */
    limit?: number
  }

  /**
   * views.films
   */
  export type views$filmsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the films
     */
    select?: filmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the films
     */
    omit?: filmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: filmsInclude<ExtArgs> | null
    where?: filmsWhereInput
  }

  /**
   * views.episodes
   */
  export type views$episodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the episodes
     */
    select?: episodesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the episodes
     */
    omit?: episodesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: episodesInclude<ExtArgs> | null
    where?: episodesWhereInput
  }

  /**
   * views.users
   */
  export type views$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  }

  /**
   * views without action
   */
  export type viewsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the views
     */
    select?: viewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the views
     */
    omit?: viewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: viewsInclude<ExtArgs> | null
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


  export const CartScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    plan_id: 'plan_id',
    added_at: 'added_at'
  };

  export type CartScalarFieldEnum = (typeof CartScalarFieldEnum)[keyof typeof CartScalarFieldEnum]


  export const EpisodesScalarFieldEnum: {
    id: 'id',
    film_id: 'film_id',
    episode_name: 'episode_name',
    video_url: 'video_url',
    sub_url: 'sub_url',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type EpisodesScalarFieldEnum = (typeof EpisodesScalarFieldEnum)[keyof typeof EpisodesScalarFieldEnum]


  export const FavoritesScalarFieldEnum: {
    id: 'id',
    film_id: 'film_id',
    user_id: 'user_id',
    added_at: 'added_at'
  };

  export type FavoritesScalarFieldEnum = (typeof FavoritesScalarFieldEnum)[keyof typeof FavoritesScalarFieldEnum]


  export const FeedbacksScalarFieldEnum: {
    id: 'id',
    film_id: 'film_id',
    user_id: 'user_id',
    comment: 'comment',
    rating: 'rating',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type FeedbacksScalarFieldEnum = (typeof FeedbacksScalarFieldEnum)[keyof typeof FeedbacksScalarFieldEnum]


  export const Film_genresScalarFieldEnum: {
    id: 'id',
    genres_id: 'genres_id',
    film_id: 'film_id'
  };

  export type Film_genresScalarFieldEnum = (typeof Film_genresScalarFieldEnum)[keyof typeof Film_genresScalarFieldEnum]


  export const FilmsScalarFieldEnum: {
    id: 'id',
    title: 'title',
    poster_url: 'poster_url',
    description: 'description',
    year: 'year',
    country: 'country',
    duration: 'duration',
    poster_video_url: 'poster_video_url',
    actor: 'actor',
    is_series: 'is_series',
    directeur: 'directeur',
    age_rating: 'age_rating',
    created_at: 'created_at',
    updated_at: 'updated_at',
    view_count: 'view_count',
    average_rating: 'average_rating'
  };

  export type FilmsScalarFieldEnum = (typeof FilmsScalarFieldEnum)[keyof typeof FilmsScalarFieldEnum]


  export const GenresScalarFieldEnum: {
    id: 'id',
    name: 'name',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type GenresScalarFieldEnum = (typeof GenresScalarFieldEnum)[keyof typeof GenresScalarFieldEnum]


  export const InvoicesScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    plan_id: 'plan_id',
    total_price: 'total_price',
    payment_method: 'payment_method',
    status: 'status',
    start_date: 'start_date',
    end_date: 'end_date',
    created_at: 'created_at'
  };

  export type InvoicesScalarFieldEnum = (typeof InvoicesScalarFieldEnum)[keyof typeof InvoicesScalarFieldEnum]


  export const PlansScalarFieldEnum: {
    id: 'id',
    name: 'name',
    price: 'price',
    duration_days: 'duration_days',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type PlansScalarFieldEnum = (typeof PlansScalarFieldEnum)[keyof typeof PlansScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    plan_id: 'plan_id',
    username: 'username',
    password: 'password',
    role: 'role',
    fullname: 'fullname',
    phonenumber: 'phonenumber',
    email: 'email',
    city: 'city',
    gender: 'gender',
    interest: 'interest',
    birthday: 'birthday',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const Video_filesScalarFieldEnum: {
    id: 'id',
    episode_id: 'episode_id',
    quality: 'quality',
    file_url: 'file_url'
  };

  export type Video_filesScalarFieldEnum = (typeof Video_filesScalarFieldEnum)[keyof typeof Video_filesScalarFieldEnum]


  export const ViewsScalarFieldEnum: {
    id: 'id',
    film_id: 'film_id',
    episode_id: 'episode_id',
    user_id: 'user_id',
    viewed_at: 'viewed_at',
    progress: 'progress'
  };

  export type ViewsScalarFieldEnum = (typeof ViewsScalarFieldEnum)[keyof typeof ViewsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const episodesOrderByRelevanceFieldEnum: {
    episode_name: 'episode_name',
    video_url: 'video_url',
    sub_url: 'sub_url'
  };

  export type episodesOrderByRelevanceFieldEnum = (typeof episodesOrderByRelevanceFieldEnum)[keyof typeof episodesOrderByRelevanceFieldEnum]


  export const feedbacksOrderByRelevanceFieldEnum: {
    comment: 'comment'
  };

  export type feedbacksOrderByRelevanceFieldEnum = (typeof feedbacksOrderByRelevanceFieldEnum)[keyof typeof feedbacksOrderByRelevanceFieldEnum]


  export const filmsOrderByRelevanceFieldEnum: {
    title: 'title',
    poster_url: 'poster_url',
    description: 'description',
    country: 'country',
    duration: 'duration',
    poster_video_url: 'poster_video_url',
    actor: 'actor',
    directeur: 'directeur',
    age_rating: 'age_rating'
  };

  export type filmsOrderByRelevanceFieldEnum = (typeof filmsOrderByRelevanceFieldEnum)[keyof typeof filmsOrderByRelevanceFieldEnum]


  export const genresOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type genresOrderByRelevanceFieldEnum = (typeof genresOrderByRelevanceFieldEnum)[keyof typeof genresOrderByRelevanceFieldEnum]


  export const invoicesOrderByRelevanceFieldEnum: {
    payment_method: 'payment_method',
    status: 'status'
  };

  export type invoicesOrderByRelevanceFieldEnum = (typeof invoicesOrderByRelevanceFieldEnum)[keyof typeof invoicesOrderByRelevanceFieldEnum]


  export const plansOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type plansOrderByRelevanceFieldEnum = (typeof plansOrderByRelevanceFieldEnum)[keyof typeof plansOrderByRelevanceFieldEnum]


  export const usersOrderByRelevanceFieldEnum: {
    username: 'username',
    password: 'password',
    role: 'role',
    fullname: 'fullname',
    phonenumber: 'phonenumber',
    email: 'email',
    city: 'city',
    gender: 'gender',
    interest: 'interest'
  };

  export type usersOrderByRelevanceFieldEnum = (typeof usersOrderByRelevanceFieldEnum)[keyof typeof usersOrderByRelevanceFieldEnum]


  export const video_filesOrderByRelevanceFieldEnum: {
    quality: 'quality',
    file_url: 'file_url'
  };

  export type video_filesOrderByRelevanceFieldEnum = (typeof video_filesOrderByRelevanceFieldEnum)[keyof typeof video_filesOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type cartWhereInput = {
    AND?: cartWhereInput | cartWhereInput[]
    OR?: cartWhereInput[]
    NOT?: cartWhereInput | cartWhereInput[]
    id?: IntFilter<"cart"> | number
    user_id?: IntNullableFilter<"cart"> | number | null
    plan_id?: IntNullableFilter<"cart"> | number | null
    added_at?: DateTimeFilter<"cart"> | Date | string
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    plans?: XOR<PlansNullableScalarRelationFilter, plansWhereInput> | null
  }

  export type cartOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    plan_id?: SortOrderInput | SortOrder
    added_at?: SortOrder
    users?: usersOrderByWithRelationInput
    plans?: plansOrderByWithRelationInput
  }

  export type cartWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: cartWhereInput | cartWhereInput[]
    OR?: cartWhereInput[]
    NOT?: cartWhereInput | cartWhereInput[]
    user_id?: IntNullableFilter<"cart"> | number | null
    plan_id?: IntNullableFilter<"cart"> | number | null
    added_at?: DateTimeFilter<"cart"> | Date | string
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    plans?: XOR<PlansNullableScalarRelationFilter, plansWhereInput> | null
  }, "id">

  export type cartOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    plan_id?: SortOrderInput | SortOrder
    added_at?: SortOrder
    _count?: cartCountOrderByAggregateInput
    _avg?: cartAvgOrderByAggregateInput
    _max?: cartMaxOrderByAggregateInput
    _min?: cartMinOrderByAggregateInput
    _sum?: cartSumOrderByAggregateInput
  }

  export type cartScalarWhereWithAggregatesInput = {
    AND?: cartScalarWhereWithAggregatesInput | cartScalarWhereWithAggregatesInput[]
    OR?: cartScalarWhereWithAggregatesInput[]
    NOT?: cartScalarWhereWithAggregatesInput | cartScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"cart"> | number
    user_id?: IntNullableWithAggregatesFilter<"cart"> | number | null
    plan_id?: IntNullableWithAggregatesFilter<"cart"> | number | null
    added_at?: DateTimeWithAggregatesFilter<"cart"> | Date | string
  }

  export type episodesWhereInput = {
    AND?: episodesWhereInput | episodesWhereInput[]
    OR?: episodesWhereInput[]
    NOT?: episodesWhereInput | episodesWhereInput[]
    id?: IntFilter<"episodes"> | number
    film_id?: IntNullableFilter<"episodes"> | number | null
    episode_name?: StringNullableFilter<"episodes"> | string | null
    video_url?: StringNullableFilter<"episodes"> | string | null
    sub_url?: StringNullableFilter<"episodes"> | string | null
    created_at?: DateTimeFilter<"episodes"> | Date | string
    updated_at?: DateTimeFilter<"episodes"> | Date | string
    films?: XOR<FilmsNullableScalarRelationFilter, filmsWhereInput> | null
    video_files?: Video_filesListRelationFilter
    views?: ViewsListRelationFilter
  }

  export type episodesOrderByWithRelationInput = {
    id?: SortOrder
    film_id?: SortOrderInput | SortOrder
    episode_name?: SortOrderInput | SortOrder
    video_url?: SortOrderInput | SortOrder
    sub_url?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    films?: filmsOrderByWithRelationInput
    video_files?: video_filesOrderByRelationAggregateInput
    views?: viewsOrderByRelationAggregateInput
    _relevance?: episodesOrderByRelevanceInput
  }

  export type episodesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: episodesWhereInput | episodesWhereInput[]
    OR?: episodesWhereInput[]
    NOT?: episodesWhereInput | episodesWhereInput[]
    film_id?: IntNullableFilter<"episodes"> | number | null
    episode_name?: StringNullableFilter<"episodes"> | string | null
    video_url?: StringNullableFilter<"episodes"> | string | null
    sub_url?: StringNullableFilter<"episodes"> | string | null
    created_at?: DateTimeFilter<"episodes"> | Date | string
    updated_at?: DateTimeFilter<"episodes"> | Date | string
    films?: XOR<FilmsNullableScalarRelationFilter, filmsWhereInput> | null
    video_files?: Video_filesListRelationFilter
    views?: ViewsListRelationFilter
  }, "id">

  export type episodesOrderByWithAggregationInput = {
    id?: SortOrder
    film_id?: SortOrderInput | SortOrder
    episode_name?: SortOrderInput | SortOrder
    video_url?: SortOrderInput | SortOrder
    sub_url?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: episodesCountOrderByAggregateInput
    _avg?: episodesAvgOrderByAggregateInput
    _max?: episodesMaxOrderByAggregateInput
    _min?: episodesMinOrderByAggregateInput
    _sum?: episodesSumOrderByAggregateInput
  }

  export type episodesScalarWhereWithAggregatesInput = {
    AND?: episodesScalarWhereWithAggregatesInput | episodesScalarWhereWithAggregatesInput[]
    OR?: episodesScalarWhereWithAggregatesInput[]
    NOT?: episodesScalarWhereWithAggregatesInput | episodesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"episodes"> | number
    film_id?: IntNullableWithAggregatesFilter<"episodes"> | number | null
    episode_name?: StringNullableWithAggregatesFilter<"episodes"> | string | null
    video_url?: StringNullableWithAggregatesFilter<"episodes"> | string | null
    sub_url?: StringNullableWithAggregatesFilter<"episodes"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"episodes"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"episodes"> | Date | string
  }

  export type favoritesWhereInput = {
    AND?: favoritesWhereInput | favoritesWhereInput[]
    OR?: favoritesWhereInput[]
    NOT?: favoritesWhereInput | favoritesWhereInput[]
    id?: IntFilter<"favorites"> | number
    film_id?: IntNullableFilter<"favorites"> | number | null
    user_id?: IntNullableFilter<"favorites"> | number | null
    added_at?: DateTimeFilter<"favorites"> | Date | string
    films?: XOR<FilmsNullableScalarRelationFilter, filmsWhereInput> | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }

  export type favoritesOrderByWithRelationInput = {
    id?: SortOrder
    film_id?: SortOrderInput | SortOrder
    user_id?: SortOrderInput | SortOrder
    added_at?: SortOrder
    films?: filmsOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
  }

  export type favoritesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    user_id_film_id?: favoritesUser_idFilm_idCompoundUniqueInput
    AND?: favoritesWhereInput | favoritesWhereInput[]
    OR?: favoritesWhereInput[]
    NOT?: favoritesWhereInput | favoritesWhereInput[]
    film_id?: IntNullableFilter<"favorites"> | number | null
    user_id?: IntNullableFilter<"favorites"> | number | null
    added_at?: DateTimeFilter<"favorites"> | Date | string
    films?: XOR<FilmsNullableScalarRelationFilter, filmsWhereInput> | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }, "id" | "user_id_film_id">

  export type favoritesOrderByWithAggregationInput = {
    id?: SortOrder
    film_id?: SortOrderInput | SortOrder
    user_id?: SortOrderInput | SortOrder
    added_at?: SortOrder
    _count?: favoritesCountOrderByAggregateInput
    _avg?: favoritesAvgOrderByAggregateInput
    _max?: favoritesMaxOrderByAggregateInput
    _min?: favoritesMinOrderByAggregateInput
    _sum?: favoritesSumOrderByAggregateInput
  }

  export type favoritesScalarWhereWithAggregatesInput = {
    AND?: favoritesScalarWhereWithAggregatesInput | favoritesScalarWhereWithAggregatesInput[]
    OR?: favoritesScalarWhereWithAggregatesInput[]
    NOT?: favoritesScalarWhereWithAggregatesInput | favoritesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"favorites"> | number
    film_id?: IntNullableWithAggregatesFilter<"favorites"> | number | null
    user_id?: IntNullableWithAggregatesFilter<"favorites"> | number | null
    added_at?: DateTimeWithAggregatesFilter<"favorites"> | Date | string
  }

  export type feedbacksWhereInput = {
    AND?: feedbacksWhereInput | feedbacksWhereInput[]
    OR?: feedbacksWhereInput[]
    NOT?: feedbacksWhereInput | feedbacksWhereInput[]
    id?: IntFilter<"feedbacks"> | number
    film_id?: IntNullableFilter<"feedbacks"> | number | null
    user_id?: IntNullableFilter<"feedbacks"> | number | null
    comment?: StringNullableFilter<"feedbacks"> | string | null
    rating?: IntNullableFilter<"feedbacks"> | number | null
    created_at?: DateTimeFilter<"feedbacks"> | Date | string
    updated_at?: DateTimeFilter<"feedbacks"> | Date | string
    films?: XOR<FilmsNullableScalarRelationFilter, filmsWhereInput> | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }

  export type feedbacksOrderByWithRelationInput = {
    id?: SortOrder
    film_id?: SortOrderInput | SortOrder
    user_id?: SortOrderInput | SortOrder
    comment?: SortOrderInput | SortOrder
    rating?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    films?: filmsOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
    _relevance?: feedbacksOrderByRelevanceInput
  }

  export type feedbacksWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: feedbacksWhereInput | feedbacksWhereInput[]
    OR?: feedbacksWhereInput[]
    NOT?: feedbacksWhereInput | feedbacksWhereInput[]
    film_id?: IntNullableFilter<"feedbacks"> | number | null
    user_id?: IntNullableFilter<"feedbacks"> | number | null
    comment?: StringNullableFilter<"feedbacks"> | string | null
    rating?: IntNullableFilter<"feedbacks"> | number | null
    created_at?: DateTimeFilter<"feedbacks"> | Date | string
    updated_at?: DateTimeFilter<"feedbacks"> | Date | string
    films?: XOR<FilmsNullableScalarRelationFilter, filmsWhereInput> | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }, "id">

  export type feedbacksOrderByWithAggregationInput = {
    id?: SortOrder
    film_id?: SortOrderInput | SortOrder
    user_id?: SortOrderInput | SortOrder
    comment?: SortOrderInput | SortOrder
    rating?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: feedbacksCountOrderByAggregateInput
    _avg?: feedbacksAvgOrderByAggregateInput
    _max?: feedbacksMaxOrderByAggregateInput
    _min?: feedbacksMinOrderByAggregateInput
    _sum?: feedbacksSumOrderByAggregateInput
  }

  export type feedbacksScalarWhereWithAggregatesInput = {
    AND?: feedbacksScalarWhereWithAggregatesInput | feedbacksScalarWhereWithAggregatesInput[]
    OR?: feedbacksScalarWhereWithAggregatesInput[]
    NOT?: feedbacksScalarWhereWithAggregatesInput | feedbacksScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"feedbacks"> | number
    film_id?: IntNullableWithAggregatesFilter<"feedbacks"> | number | null
    user_id?: IntNullableWithAggregatesFilter<"feedbacks"> | number | null
    comment?: StringNullableWithAggregatesFilter<"feedbacks"> | string | null
    rating?: IntNullableWithAggregatesFilter<"feedbacks"> | number | null
    created_at?: DateTimeWithAggregatesFilter<"feedbacks"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"feedbacks"> | Date | string
  }

  export type film_genresWhereInput = {
    AND?: film_genresWhereInput | film_genresWhereInput[]
    OR?: film_genresWhereInput[]
    NOT?: film_genresWhereInput | film_genresWhereInput[]
    id?: IntFilter<"film_genres"> | number
    genres_id?: IntNullableFilter<"film_genres"> | number | null
    film_id?: IntNullableFilter<"film_genres"> | number | null
    genres?: XOR<GenresNullableScalarRelationFilter, genresWhereInput> | null
    films?: XOR<FilmsNullableScalarRelationFilter, filmsWhereInput> | null
  }

  export type film_genresOrderByWithRelationInput = {
    id?: SortOrder
    genres_id?: SortOrderInput | SortOrder
    film_id?: SortOrderInput | SortOrder
    genres?: genresOrderByWithRelationInput
    films?: filmsOrderByWithRelationInput
  }

  export type film_genresWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: film_genresWhereInput | film_genresWhereInput[]
    OR?: film_genresWhereInput[]
    NOT?: film_genresWhereInput | film_genresWhereInput[]
    genres_id?: IntNullableFilter<"film_genres"> | number | null
    film_id?: IntNullableFilter<"film_genres"> | number | null
    genres?: XOR<GenresNullableScalarRelationFilter, genresWhereInput> | null
    films?: XOR<FilmsNullableScalarRelationFilter, filmsWhereInput> | null
  }, "id">

  export type film_genresOrderByWithAggregationInput = {
    id?: SortOrder
    genres_id?: SortOrderInput | SortOrder
    film_id?: SortOrderInput | SortOrder
    _count?: film_genresCountOrderByAggregateInput
    _avg?: film_genresAvgOrderByAggregateInput
    _max?: film_genresMaxOrderByAggregateInput
    _min?: film_genresMinOrderByAggregateInput
    _sum?: film_genresSumOrderByAggregateInput
  }

  export type film_genresScalarWhereWithAggregatesInput = {
    AND?: film_genresScalarWhereWithAggregatesInput | film_genresScalarWhereWithAggregatesInput[]
    OR?: film_genresScalarWhereWithAggregatesInput[]
    NOT?: film_genresScalarWhereWithAggregatesInput | film_genresScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"film_genres"> | number
    genres_id?: IntNullableWithAggregatesFilter<"film_genres"> | number | null
    film_id?: IntNullableWithAggregatesFilter<"film_genres"> | number | null
  }

  export type filmsWhereInput = {
    AND?: filmsWhereInput | filmsWhereInput[]
    OR?: filmsWhereInput[]
    NOT?: filmsWhereInput | filmsWhereInput[]
    id?: IntFilter<"films"> | number
    title?: StringNullableFilter<"films"> | string | null
    poster_url?: StringNullableFilter<"films"> | string | null
    description?: StringNullableFilter<"films"> | string | null
    year?: IntNullableFilter<"films"> | number | null
    country?: StringNullableFilter<"films"> | string | null
    duration?: StringNullableFilter<"films"> | string | null
    poster_video_url?: StringNullableFilter<"films"> | string | null
    actor?: StringNullableFilter<"films"> | string | null
    is_series?: BoolNullableFilter<"films"> | boolean | null
    directeur?: StringNullableFilter<"films"> | string | null
    age_rating?: StringNullableFilter<"films"> | string | null
    created_at?: DateTimeFilter<"films"> | Date | string
    updated_at?: DateTimeFilter<"films"> | Date | string
    view_count?: IntNullableFilter<"films"> | number | null
    average_rating?: DecimalNullableFilter<"films"> | Decimal | DecimalJsLike | number | string | null
    episodes?: EpisodesListRelationFilter
    favorites?: FavoritesListRelationFilter
    feedbacks?: FeedbacksListRelationFilter
    film_genres?: Film_genresListRelationFilter
    views?: ViewsListRelationFilter
  }

  export type filmsOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    poster_url?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    year?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    poster_video_url?: SortOrderInput | SortOrder
    actor?: SortOrderInput | SortOrder
    is_series?: SortOrderInput | SortOrder
    directeur?: SortOrderInput | SortOrder
    age_rating?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    view_count?: SortOrderInput | SortOrder
    average_rating?: SortOrderInput | SortOrder
    episodes?: episodesOrderByRelationAggregateInput
    favorites?: favoritesOrderByRelationAggregateInput
    feedbacks?: feedbacksOrderByRelationAggregateInput
    film_genres?: film_genresOrderByRelationAggregateInput
    views?: viewsOrderByRelationAggregateInput
    _relevance?: filmsOrderByRelevanceInput
  }

  export type filmsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: filmsWhereInput | filmsWhereInput[]
    OR?: filmsWhereInput[]
    NOT?: filmsWhereInput | filmsWhereInput[]
    title?: StringNullableFilter<"films"> | string | null
    poster_url?: StringNullableFilter<"films"> | string | null
    description?: StringNullableFilter<"films"> | string | null
    year?: IntNullableFilter<"films"> | number | null
    country?: StringNullableFilter<"films"> | string | null
    duration?: StringNullableFilter<"films"> | string | null
    poster_video_url?: StringNullableFilter<"films"> | string | null
    actor?: StringNullableFilter<"films"> | string | null
    is_series?: BoolNullableFilter<"films"> | boolean | null
    directeur?: StringNullableFilter<"films"> | string | null
    age_rating?: StringNullableFilter<"films"> | string | null
    created_at?: DateTimeFilter<"films"> | Date | string
    updated_at?: DateTimeFilter<"films"> | Date | string
    view_count?: IntNullableFilter<"films"> | number | null
    average_rating?: DecimalNullableFilter<"films"> | Decimal | DecimalJsLike | number | string | null
    episodes?: EpisodesListRelationFilter
    favorites?: FavoritesListRelationFilter
    feedbacks?: FeedbacksListRelationFilter
    film_genres?: Film_genresListRelationFilter
    views?: ViewsListRelationFilter
  }, "id">

  export type filmsOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    poster_url?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    year?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    poster_video_url?: SortOrderInput | SortOrder
    actor?: SortOrderInput | SortOrder
    is_series?: SortOrderInput | SortOrder
    directeur?: SortOrderInput | SortOrder
    age_rating?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    view_count?: SortOrderInput | SortOrder
    average_rating?: SortOrderInput | SortOrder
    _count?: filmsCountOrderByAggregateInput
    _avg?: filmsAvgOrderByAggregateInput
    _max?: filmsMaxOrderByAggregateInput
    _min?: filmsMinOrderByAggregateInput
    _sum?: filmsSumOrderByAggregateInput
  }

  export type filmsScalarWhereWithAggregatesInput = {
    AND?: filmsScalarWhereWithAggregatesInput | filmsScalarWhereWithAggregatesInput[]
    OR?: filmsScalarWhereWithAggregatesInput[]
    NOT?: filmsScalarWhereWithAggregatesInput | filmsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"films"> | number
    title?: StringNullableWithAggregatesFilter<"films"> | string | null
    poster_url?: StringNullableWithAggregatesFilter<"films"> | string | null
    description?: StringNullableWithAggregatesFilter<"films"> | string | null
    year?: IntNullableWithAggregatesFilter<"films"> | number | null
    country?: StringNullableWithAggregatesFilter<"films"> | string | null
    duration?: StringNullableWithAggregatesFilter<"films"> | string | null
    poster_video_url?: StringNullableWithAggregatesFilter<"films"> | string | null
    actor?: StringNullableWithAggregatesFilter<"films"> | string | null
    is_series?: BoolNullableWithAggregatesFilter<"films"> | boolean | null
    directeur?: StringNullableWithAggregatesFilter<"films"> | string | null
    age_rating?: StringNullableWithAggregatesFilter<"films"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"films"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"films"> | Date | string
    view_count?: IntNullableWithAggregatesFilter<"films"> | number | null
    average_rating?: DecimalNullableWithAggregatesFilter<"films"> | Decimal | DecimalJsLike | number | string | null
  }

  export type genresWhereInput = {
    AND?: genresWhereInput | genresWhereInput[]
    OR?: genresWhereInput[]
    NOT?: genresWhereInput | genresWhereInput[]
    id?: IntFilter<"genres"> | number
    name?: StringNullableFilter<"genres"> | string | null
    created_at?: DateTimeFilter<"genres"> | Date | string
    updated_at?: DateTimeFilter<"genres"> | Date | string
    film_genres?: Film_genresListRelationFilter
  }

  export type genresOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    film_genres?: film_genresOrderByRelationAggregateInput
    _relevance?: genresOrderByRelevanceInput
  }

  export type genresWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: genresWhereInput | genresWhereInput[]
    OR?: genresWhereInput[]
    NOT?: genresWhereInput | genresWhereInput[]
    name?: StringNullableFilter<"genres"> | string | null
    created_at?: DateTimeFilter<"genres"> | Date | string
    updated_at?: DateTimeFilter<"genres"> | Date | string
    film_genres?: Film_genresListRelationFilter
  }, "id">

  export type genresOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: genresCountOrderByAggregateInput
    _avg?: genresAvgOrderByAggregateInput
    _max?: genresMaxOrderByAggregateInput
    _min?: genresMinOrderByAggregateInput
    _sum?: genresSumOrderByAggregateInput
  }

  export type genresScalarWhereWithAggregatesInput = {
    AND?: genresScalarWhereWithAggregatesInput | genresScalarWhereWithAggregatesInput[]
    OR?: genresScalarWhereWithAggregatesInput[]
    NOT?: genresScalarWhereWithAggregatesInput | genresScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"genres"> | number
    name?: StringNullableWithAggregatesFilter<"genres"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"genres"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"genres"> | Date | string
  }

  export type invoicesWhereInput = {
    AND?: invoicesWhereInput | invoicesWhereInput[]
    OR?: invoicesWhereInput[]
    NOT?: invoicesWhereInput | invoicesWhereInput[]
    id?: IntFilter<"invoices"> | number
    user_id?: IntNullableFilter<"invoices"> | number | null
    plan_id?: IntNullableFilter<"invoices"> | number | null
    total_price?: DecimalNullableFilter<"invoices"> | Decimal | DecimalJsLike | number | string | null
    payment_method?: StringNullableFilter<"invoices"> | string | null
    status?: StringNullableFilter<"invoices"> | string | null
    start_date?: DateTimeNullableFilter<"invoices"> | Date | string | null
    end_date?: DateTimeNullableFilter<"invoices"> | Date | string | null
    created_at?: DateTimeFilter<"invoices"> | Date | string
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    plans?: XOR<PlansNullableScalarRelationFilter, plansWhereInput> | null
  }

  export type invoicesOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    plan_id?: SortOrderInput | SortOrder
    total_price?: SortOrderInput | SortOrder
    payment_method?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    start_date?: SortOrderInput | SortOrder
    end_date?: SortOrderInput | SortOrder
    created_at?: SortOrder
    users?: usersOrderByWithRelationInput
    plans?: plansOrderByWithRelationInput
    _relevance?: invoicesOrderByRelevanceInput
  }

  export type invoicesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: invoicesWhereInput | invoicesWhereInput[]
    OR?: invoicesWhereInput[]
    NOT?: invoicesWhereInput | invoicesWhereInput[]
    user_id?: IntNullableFilter<"invoices"> | number | null
    plan_id?: IntNullableFilter<"invoices"> | number | null
    total_price?: DecimalNullableFilter<"invoices"> | Decimal | DecimalJsLike | number | string | null
    payment_method?: StringNullableFilter<"invoices"> | string | null
    status?: StringNullableFilter<"invoices"> | string | null
    start_date?: DateTimeNullableFilter<"invoices"> | Date | string | null
    end_date?: DateTimeNullableFilter<"invoices"> | Date | string | null
    created_at?: DateTimeFilter<"invoices"> | Date | string
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    plans?: XOR<PlansNullableScalarRelationFilter, plansWhereInput> | null
  }, "id">

  export type invoicesOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    plan_id?: SortOrderInput | SortOrder
    total_price?: SortOrderInput | SortOrder
    payment_method?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    start_date?: SortOrderInput | SortOrder
    end_date?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: invoicesCountOrderByAggregateInput
    _avg?: invoicesAvgOrderByAggregateInput
    _max?: invoicesMaxOrderByAggregateInput
    _min?: invoicesMinOrderByAggregateInput
    _sum?: invoicesSumOrderByAggregateInput
  }

  export type invoicesScalarWhereWithAggregatesInput = {
    AND?: invoicesScalarWhereWithAggregatesInput | invoicesScalarWhereWithAggregatesInput[]
    OR?: invoicesScalarWhereWithAggregatesInput[]
    NOT?: invoicesScalarWhereWithAggregatesInput | invoicesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"invoices"> | number
    user_id?: IntNullableWithAggregatesFilter<"invoices"> | number | null
    plan_id?: IntNullableWithAggregatesFilter<"invoices"> | number | null
    total_price?: DecimalNullableWithAggregatesFilter<"invoices"> | Decimal | DecimalJsLike | number | string | null
    payment_method?: StringNullableWithAggregatesFilter<"invoices"> | string | null
    status?: StringNullableWithAggregatesFilter<"invoices"> | string | null
    start_date?: DateTimeNullableWithAggregatesFilter<"invoices"> | Date | string | null
    end_date?: DateTimeNullableWithAggregatesFilter<"invoices"> | Date | string | null
    created_at?: DateTimeWithAggregatesFilter<"invoices"> | Date | string
  }

  export type plansWhereInput = {
    AND?: plansWhereInput | plansWhereInput[]
    OR?: plansWhereInput[]
    NOT?: plansWhereInput | plansWhereInput[]
    id?: IntFilter<"plans"> | number
    name?: StringNullableFilter<"plans"> | string | null
    price?: DecimalNullableFilter<"plans"> | Decimal | DecimalJsLike | number | string | null
    duration_days?: IntNullableFilter<"plans"> | number | null
    created_at?: DateTimeFilter<"plans"> | Date | string
    updated_at?: DateTimeFilter<"plans"> | Date | string
    cart?: CartListRelationFilter
    invoices?: InvoicesListRelationFilter
    users?: UsersListRelationFilter
  }

  export type plansOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    duration_days?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    cart?: cartOrderByRelationAggregateInput
    invoices?: invoicesOrderByRelationAggregateInput
    users?: usersOrderByRelationAggregateInput
    _relevance?: plansOrderByRelevanceInput
  }

  export type plansWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: plansWhereInput | plansWhereInput[]
    OR?: plansWhereInput[]
    NOT?: plansWhereInput | plansWhereInput[]
    name?: StringNullableFilter<"plans"> | string | null
    price?: DecimalNullableFilter<"plans"> | Decimal | DecimalJsLike | number | string | null
    duration_days?: IntNullableFilter<"plans"> | number | null
    created_at?: DateTimeFilter<"plans"> | Date | string
    updated_at?: DateTimeFilter<"plans"> | Date | string
    cart?: CartListRelationFilter
    invoices?: InvoicesListRelationFilter
    users?: UsersListRelationFilter
  }, "id">

  export type plansOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    duration_days?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
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
    id?: IntWithAggregatesFilter<"plans"> | number
    name?: StringNullableWithAggregatesFilter<"plans"> | string | null
    price?: DecimalNullableWithAggregatesFilter<"plans"> | Decimal | DecimalJsLike | number | string | null
    duration_days?: IntNullableWithAggregatesFilter<"plans"> | number | null
    created_at?: DateTimeWithAggregatesFilter<"plans"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"plans"> | Date | string
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    plan_id?: IntNullableFilter<"users"> | number | null
    username?: StringNullableFilter<"users"> | string | null
    password?: StringNullableFilter<"users"> | string | null
    role?: StringNullableFilter<"users"> | string | null
    fullname?: StringNullableFilter<"users"> | string | null
    phonenumber?: StringNullableFilter<"users"> | string | null
    email?: StringNullableFilter<"users"> | string | null
    city?: StringNullableFilter<"users"> | string | null
    gender?: StringNullableFilter<"users"> | string | null
    interest?: StringNullableFilter<"users"> | string | null
    birthday?: DateTimeNullableFilter<"users"> | Date | string | null
    created_at?: DateTimeFilter<"users"> | Date | string
    updated_at?: DateTimeFilter<"users"> | Date | string
    cart?: CartListRelationFilter
    favorites?: FavoritesListRelationFilter
    feedbacks?: FeedbacksListRelationFilter
    invoices?: InvoicesListRelationFilter
    plans?: XOR<PlansNullableScalarRelationFilter, plansWhereInput> | null
    views?: ViewsListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    plan_id?: SortOrderInput | SortOrder
    username?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    fullname?: SortOrderInput | SortOrder
    phonenumber?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    interest?: SortOrderInput | SortOrder
    birthday?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    cart?: cartOrderByRelationAggregateInput
    favorites?: favoritesOrderByRelationAggregateInput
    feedbacks?: feedbacksOrderByRelationAggregateInput
    invoices?: invoicesOrderByRelationAggregateInput
    plans?: plansOrderByWithRelationInput
    views?: viewsOrderByRelationAggregateInput
    _relevance?: usersOrderByRelevanceInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    plan_id?: IntNullableFilter<"users"> | number | null
    username?: StringNullableFilter<"users"> | string | null
    password?: StringNullableFilter<"users"> | string | null
    role?: StringNullableFilter<"users"> | string | null
    fullname?: StringNullableFilter<"users"> | string | null
    phonenumber?: StringNullableFilter<"users"> | string | null
    email?: StringNullableFilter<"users"> | string | null
    city?: StringNullableFilter<"users"> | string | null
    gender?: StringNullableFilter<"users"> | string | null
    interest?: StringNullableFilter<"users"> | string | null
    birthday?: DateTimeNullableFilter<"users"> | Date | string | null
    created_at?: DateTimeFilter<"users"> | Date | string
    updated_at?: DateTimeFilter<"users"> | Date | string
    cart?: CartListRelationFilter
    favorites?: FavoritesListRelationFilter
    feedbacks?: FeedbacksListRelationFilter
    invoices?: InvoicesListRelationFilter
    plans?: XOR<PlansNullableScalarRelationFilter, plansWhereInput> | null
    views?: ViewsListRelationFilter
  }, "id">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    plan_id?: SortOrderInput | SortOrder
    username?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    fullname?: SortOrderInput | SortOrder
    phonenumber?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    interest?: SortOrderInput | SortOrder
    birthday?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
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
    id?: IntWithAggregatesFilter<"users"> | number
    plan_id?: IntNullableWithAggregatesFilter<"users"> | number | null
    username?: StringNullableWithAggregatesFilter<"users"> | string | null
    password?: StringNullableWithAggregatesFilter<"users"> | string | null
    role?: StringNullableWithAggregatesFilter<"users"> | string | null
    fullname?: StringNullableWithAggregatesFilter<"users"> | string | null
    phonenumber?: StringNullableWithAggregatesFilter<"users"> | string | null
    email?: StringNullableWithAggregatesFilter<"users"> | string | null
    city?: StringNullableWithAggregatesFilter<"users"> | string | null
    gender?: StringNullableWithAggregatesFilter<"users"> | string | null
    interest?: StringNullableWithAggregatesFilter<"users"> | string | null
    birthday?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    created_at?: DateTimeWithAggregatesFilter<"users"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"users"> | Date | string
  }

  export type video_filesWhereInput = {
    AND?: video_filesWhereInput | video_filesWhereInput[]
    OR?: video_filesWhereInput[]
    NOT?: video_filesWhereInput | video_filesWhereInput[]
    id?: IntFilter<"video_files"> | number
    episode_id?: IntNullableFilter<"video_files"> | number | null
    quality?: StringNullableFilter<"video_files"> | string | null
    file_url?: StringNullableFilter<"video_files"> | string | null
    episodes?: XOR<EpisodesNullableScalarRelationFilter, episodesWhereInput> | null
  }

  export type video_filesOrderByWithRelationInput = {
    id?: SortOrder
    episode_id?: SortOrderInput | SortOrder
    quality?: SortOrderInput | SortOrder
    file_url?: SortOrderInput | SortOrder
    episodes?: episodesOrderByWithRelationInput
    _relevance?: video_filesOrderByRelevanceInput
  }

  export type video_filesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: video_filesWhereInput | video_filesWhereInput[]
    OR?: video_filesWhereInput[]
    NOT?: video_filesWhereInput | video_filesWhereInput[]
    episode_id?: IntNullableFilter<"video_files"> | number | null
    quality?: StringNullableFilter<"video_files"> | string | null
    file_url?: StringNullableFilter<"video_files"> | string | null
    episodes?: XOR<EpisodesNullableScalarRelationFilter, episodesWhereInput> | null
  }, "id">

  export type video_filesOrderByWithAggregationInput = {
    id?: SortOrder
    episode_id?: SortOrderInput | SortOrder
    quality?: SortOrderInput | SortOrder
    file_url?: SortOrderInput | SortOrder
    _count?: video_filesCountOrderByAggregateInput
    _avg?: video_filesAvgOrderByAggregateInput
    _max?: video_filesMaxOrderByAggregateInput
    _min?: video_filesMinOrderByAggregateInput
    _sum?: video_filesSumOrderByAggregateInput
  }

  export type video_filesScalarWhereWithAggregatesInput = {
    AND?: video_filesScalarWhereWithAggregatesInput | video_filesScalarWhereWithAggregatesInput[]
    OR?: video_filesScalarWhereWithAggregatesInput[]
    NOT?: video_filesScalarWhereWithAggregatesInput | video_filesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"video_files"> | number
    episode_id?: IntNullableWithAggregatesFilter<"video_files"> | number | null
    quality?: StringNullableWithAggregatesFilter<"video_files"> | string | null
    file_url?: StringNullableWithAggregatesFilter<"video_files"> | string | null
  }

  export type viewsWhereInput = {
    AND?: viewsWhereInput | viewsWhereInput[]
    OR?: viewsWhereInput[]
    NOT?: viewsWhereInput | viewsWhereInput[]
    id?: IntFilter<"views"> | number
    film_id?: IntNullableFilter<"views"> | number | null
    episode_id?: IntNullableFilter<"views"> | number | null
    user_id?: IntNullableFilter<"views"> | number | null
    viewed_at?: DateTimeFilter<"views"> | Date | string
    progress?: IntNullableFilter<"views"> | number | null
    films?: XOR<FilmsNullableScalarRelationFilter, filmsWhereInput> | null
    episodes?: XOR<EpisodesNullableScalarRelationFilter, episodesWhereInput> | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }

  export type viewsOrderByWithRelationInput = {
    id?: SortOrder
    film_id?: SortOrderInput | SortOrder
    episode_id?: SortOrderInput | SortOrder
    user_id?: SortOrderInput | SortOrder
    viewed_at?: SortOrder
    progress?: SortOrderInput | SortOrder
    films?: filmsOrderByWithRelationInput
    episodes?: episodesOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
  }

  export type viewsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: viewsWhereInput | viewsWhereInput[]
    OR?: viewsWhereInput[]
    NOT?: viewsWhereInput | viewsWhereInput[]
    film_id?: IntNullableFilter<"views"> | number | null
    episode_id?: IntNullableFilter<"views"> | number | null
    user_id?: IntNullableFilter<"views"> | number | null
    viewed_at?: DateTimeFilter<"views"> | Date | string
    progress?: IntNullableFilter<"views"> | number | null
    films?: XOR<FilmsNullableScalarRelationFilter, filmsWhereInput> | null
    episodes?: XOR<EpisodesNullableScalarRelationFilter, episodesWhereInput> | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }, "id">

  export type viewsOrderByWithAggregationInput = {
    id?: SortOrder
    film_id?: SortOrderInput | SortOrder
    episode_id?: SortOrderInput | SortOrder
    user_id?: SortOrderInput | SortOrder
    viewed_at?: SortOrder
    progress?: SortOrderInput | SortOrder
    _count?: viewsCountOrderByAggregateInput
    _avg?: viewsAvgOrderByAggregateInput
    _max?: viewsMaxOrderByAggregateInput
    _min?: viewsMinOrderByAggregateInput
    _sum?: viewsSumOrderByAggregateInput
  }

  export type viewsScalarWhereWithAggregatesInput = {
    AND?: viewsScalarWhereWithAggregatesInput | viewsScalarWhereWithAggregatesInput[]
    OR?: viewsScalarWhereWithAggregatesInput[]
    NOT?: viewsScalarWhereWithAggregatesInput | viewsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"views"> | number
    film_id?: IntNullableWithAggregatesFilter<"views"> | number | null
    episode_id?: IntNullableWithAggregatesFilter<"views"> | number | null
    user_id?: IntNullableWithAggregatesFilter<"views"> | number | null
    viewed_at?: DateTimeWithAggregatesFilter<"views"> | Date | string
    progress?: IntNullableWithAggregatesFilter<"views"> | number | null
  }

  export type cartCreateInput = {
    added_at?: Date | string
    users?: usersCreateNestedOneWithoutCartInput
    plans?: plansCreateNestedOneWithoutCartInput
  }

  export type cartUncheckedCreateInput = {
    id?: number
    user_id?: number | null
    plan_id?: number | null
    added_at?: Date | string
  }

  export type cartUpdateInput = {
    added_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateOneWithoutCartNestedInput
    plans?: plansUpdateOneWithoutCartNestedInput
  }

  export type cartUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    plan_id?: NullableIntFieldUpdateOperationsInput | number | null
    added_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type cartCreateManyInput = {
    id?: number
    user_id?: number | null
    plan_id?: number | null
    added_at?: Date | string
  }

  export type cartUpdateManyMutationInput = {
    added_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type cartUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    plan_id?: NullableIntFieldUpdateOperationsInput | number | null
    added_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type episodesCreateInput = {
    episode_name?: string | null
    video_url?: string | null
    sub_url?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    films?: filmsCreateNestedOneWithoutEpisodesInput
    video_files?: video_filesCreateNestedManyWithoutEpisodesInput
    views?: viewsCreateNestedManyWithoutEpisodesInput
  }

  export type episodesUncheckedCreateInput = {
    id?: number
    film_id?: number | null
    episode_name?: string | null
    video_url?: string | null
    sub_url?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    video_files?: video_filesUncheckedCreateNestedManyWithoutEpisodesInput
    views?: viewsUncheckedCreateNestedManyWithoutEpisodesInput
  }

  export type episodesUpdateInput = {
    episode_name?: NullableStringFieldUpdateOperationsInput | string | null
    video_url?: NullableStringFieldUpdateOperationsInput | string | null
    sub_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    films?: filmsUpdateOneWithoutEpisodesNestedInput
    video_files?: video_filesUpdateManyWithoutEpisodesNestedInput
    views?: viewsUpdateManyWithoutEpisodesNestedInput
  }

  export type episodesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    film_id?: NullableIntFieldUpdateOperationsInput | number | null
    episode_name?: NullableStringFieldUpdateOperationsInput | string | null
    video_url?: NullableStringFieldUpdateOperationsInput | string | null
    sub_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    video_files?: video_filesUncheckedUpdateManyWithoutEpisodesNestedInput
    views?: viewsUncheckedUpdateManyWithoutEpisodesNestedInput
  }

  export type episodesCreateManyInput = {
    id?: number
    film_id?: number | null
    episode_name?: string | null
    video_url?: string | null
    sub_url?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type episodesUpdateManyMutationInput = {
    episode_name?: NullableStringFieldUpdateOperationsInput | string | null
    video_url?: NullableStringFieldUpdateOperationsInput | string | null
    sub_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type episodesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    film_id?: NullableIntFieldUpdateOperationsInput | number | null
    episode_name?: NullableStringFieldUpdateOperationsInput | string | null
    video_url?: NullableStringFieldUpdateOperationsInput | string | null
    sub_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type favoritesCreateInput = {
    added_at?: Date | string
    films?: filmsCreateNestedOneWithoutFavoritesInput
    users?: usersCreateNestedOneWithoutFavoritesInput
  }

  export type favoritesUncheckedCreateInput = {
    id?: number
    film_id?: number | null
    user_id?: number | null
    added_at?: Date | string
  }

  export type favoritesUpdateInput = {
    added_at?: DateTimeFieldUpdateOperationsInput | Date | string
    films?: filmsUpdateOneWithoutFavoritesNestedInput
    users?: usersUpdateOneWithoutFavoritesNestedInput
  }

  export type favoritesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    film_id?: NullableIntFieldUpdateOperationsInput | number | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    added_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type favoritesCreateManyInput = {
    id?: number
    film_id?: number | null
    user_id?: number | null
    added_at?: Date | string
  }

  export type favoritesUpdateManyMutationInput = {
    added_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type favoritesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    film_id?: NullableIntFieldUpdateOperationsInput | number | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    added_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type feedbacksCreateInput = {
    comment?: string | null
    rating?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    films?: filmsCreateNestedOneWithoutFeedbacksInput
    users?: usersCreateNestedOneWithoutFeedbacksInput
  }

  export type feedbacksUncheckedCreateInput = {
    id?: number
    film_id?: number | null
    user_id?: number | null
    comment?: string | null
    rating?: number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type feedbacksUpdateInput = {
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    films?: filmsUpdateOneWithoutFeedbacksNestedInput
    users?: usersUpdateOneWithoutFeedbacksNestedInput
  }

  export type feedbacksUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    film_id?: NullableIntFieldUpdateOperationsInput | number | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type feedbacksCreateManyInput = {
    id?: number
    film_id?: number | null
    user_id?: number | null
    comment?: string | null
    rating?: number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type feedbacksUpdateManyMutationInput = {
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type feedbacksUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    film_id?: NullableIntFieldUpdateOperationsInput | number | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type film_genresCreateInput = {
    genres?: genresCreateNestedOneWithoutFilm_genresInput
    films?: filmsCreateNestedOneWithoutFilm_genresInput
  }

  export type film_genresUncheckedCreateInput = {
    id?: number
    genres_id?: number | null
    film_id?: number | null
  }

  export type film_genresUpdateInput = {
    genres?: genresUpdateOneWithoutFilm_genresNestedInput
    films?: filmsUpdateOneWithoutFilm_genresNestedInput
  }

  export type film_genresUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    genres_id?: NullableIntFieldUpdateOperationsInput | number | null
    film_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type film_genresCreateManyInput = {
    id?: number
    genres_id?: number | null
    film_id?: number | null
  }

  export type film_genresUpdateManyMutationInput = {

  }

  export type film_genresUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    genres_id?: NullableIntFieldUpdateOperationsInput | number | null
    film_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type filmsCreateInput = {
    title?: string | null
    poster_url?: string | null
    description?: string | null
    year?: number | null
    country?: string | null
    duration?: string | null
    poster_video_url?: string | null
    actor?: string | null
    is_series?: boolean | null
    directeur?: string | null
    age_rating?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    view_count?: number | null
    average_rating?: Decimal | DecimalJsLike | number | string | null
    episodes?: episodesCreateNestedManyWithoutFilmsInput
    favorites?: favoritesCreateNestedManyWithoutFilmsInput
    feedbacks?: feedbacksCreateNestedManyWithoutFilmsInput
    film_genres?: film_genresCreateNestedManyWithoutFilmsInput
    views?: viewsCreateNestedManyWithoutFilmsInput
  }

  export type filmsUncheckedCreateInput = {
    id?: number
    title?: string | null
    poster_url?: string | null
    description?: string | null
    year?: number | null
    country?: string | null
    duration?: string | null
    poster_video_url?: string | null
    actor?: string | null
    is_series?: boolean | null
    directeur?: string | null
    age_rating?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    view_count?: number | null
    average_rating?: Decimal | DecimalJsLike | number | string | null
    episodes?: episodesUncheckedCreateNestedManyWithoutFilmsInput
    favorites?: favoritesUncheckedCreateNestedManyWithoutFilmsInput
    feedbacks?: feedbacksUncheckedCreateNestedManyWithoutFilmsInput
    film_genres?: film_genresUncheckedCreateNestedManyWithoutFilmsInput
    views?: viewsUncheckedCreateNestedManyWithoutFilmsInput
  }

  export type filmsUpdateInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    poster_url?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    poster_video_url?: NullableStringFieldUpdateOperationsInput | string | null
    actor?: NullableStringFieldUpdateOperationsInput | string | null
    is_series?: NullableBoolFieldUpdateOperationsInput | boolean | null
    directeur?: NullableStringFieldUpdateOperationsInput | string | null
    age_rating?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    view_count?: NullableIntFieldUpdateOperationsInput | number | null
    average_rating?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    episodes?: episodesUpdateManyWithoutFilmsNestedInput
    favorites?: favoritesUpdateManyWithoutFilmsNestedInput
    feedbacks?: feedbacksUpdateManyWithoutFilmsNestedInput
    film_genres?: film_genresUpdateManyWithoutFilmsNestedInput
    views?: viewsUpdateManyWithoutFilmsNestedInput
  }

  export type filmsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    poster_url?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    poster_video_url?: NullableStringFieldUpdateOperationsInput | string | null
    actor?: NullableStringFieldUpdateOperationsInput | string | null
    is_series?: NullableBoolFieldUpdateOperationsInput | boolean | null
    directeur?: NullableStringFieldUpdateOperationsInput | string | null
    age_rating?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    view_count?: NullableIntFieldUpdateOperationsInput | number | null
    average_rating?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    episodes?: episodesUncheckedUpdateManyWithoutFilmsNestedInput
    favorites?: favoritesUncheckedUpdateManyWithoutFilmsNestedInput
    feedbacks?: feedbacksUncheckedUpdateManyWithoutFilmsNestedInput
    film_genres?: film_genresUncheckedUpdateManyWithoutFilmsNestedInput
    views?: viewsUncheckedUpdateManyWithoutFilmsNestedInput
  }

  export type filmsCreateManyInput = {
    id?: number
    title?: string | null
    poster_url?: string | null
    description?: string | null
    year?: number | null
    country?: string | null
    duration?: string | null
    poster_video_url?: string | null
    actor?: string | null
    is_series?: boolean | null
    directeur?: string | null
    age_rating?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    view_count?: number | null
    average_rating?: Decimal | DecimalJsLike | number | string | null
  }

  export type filmsUpdateManyMutationInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    poster_url?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    poster_video_url?: NullableStringFieldUpdateOperationsInput | string | null
    actor?: NullableStringFieldUpdateOperationsInput | string | null
    is_series?: NullableBoolFieldUpdateOperationsInput | boolean | null
    directeur?: NullableStringFieldUpdateOperationsInput | string | null
    age_rating?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    view_count?: NullableIntFieldUpdateOperationsInput | number | null
    average_rating?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type filmsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    poster_url?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    poster_video_url?: NullableStringFieldUpdateOperationsInput | string | null
    actor?: NullableStringFieldUpdateOperationsInput | string | null
    is_series?: NullableBoolFieldUpdateOperationsInput | boolean | null
    directeur?: NullableStringFieldUpdateOperationsInput | string | null
    age_rating?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    view_count?: NullableIntFieldUpdateOperationsInput | number | null
    average_rating?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type genresCreateInput = {
    name?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    film_genres?: film_genresCreateNestedManyWithoutGenresInput
  }

  export type genresUncheckedCreateInput = {
    id?: number
    name?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    film_genres?: film_genresUncheckedCreateNestedManyWithoutGenresInput
  }

  export type genresUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    film_genres?: film_genresUpdateManyWithoutGenresNestedInput
  }

  export type genresUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    film_genres?: film_genresUncheckedUpdateManyWithoutGenresNestedInput
  }

  export type genresCreateManyInput = {
    id?: number
    name?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type genresUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type genresUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type invoicesCreateInput = {
    total_price?: Decimal | DecimalJsLike | number | string | null
    payment_method?: string | null
    status?: string | null
    start_date?: Date | string | null
    end_date?: Date | string | null
    created_at?: Date | string
    users?: usersCreateNestedOneWithoutInvoicesInput
    plans?: plansCreateNestedOneWithoutInvoicesInput
  }

  export type invoicesUncheckedCreateInput = {
    id?: number
    user_id?: number | null
    plan_id?: number | null
    total_price?: Decimal | DecimalJsLike | number | string | null
    payment_method?: string | null
    status?: string | null
    start_date?: Date | string | null
    end_date?: Date | string | null
    created_at?: Date | string
  }

  export type invoicesUpdateInput = {
    total_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateOneWithoutInvoicesNestedInput
    plans?: plansUpdateOneWithoutInvoicesNestedInput
  }

  export type invoicesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    plan_id?: NullableIntFieldUpdateOperationsInput | number | null
    total_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type invoicesCreateManyInput = {
    id?: number
    user_id?: number | null
    plan_id?: number | null
    total_price?: Decimal | DecimalJsLike | number | string | null
    payment_method?: string | null
    status?: string | null
    start_date?: Date | string | null
    end_date?: Date | string | null
    created_at?: Date | string
  }

  export type invoicesUpdateManyMutationInput = {
    total_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type invoicesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    plan_id?: NullableIntFieldUpdateOperationsInput | number | null
    total_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type plansCreateInput = {
    name?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
    duration_days?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    cart?: cartCreateNestedManyWithoutPlansInput
    invoices?: invoicesCreateNestedManyWithoutPlansInput
    users?: usersCreateNestedManyWithoutPlansInput
  }

  export type plansUncheckedCreateInput = {
    id?: number
    name?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
    duration_days?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    cart?: cartUncheckedCreateNestedManyWithoutPlansInput
    invoices?: invoicesUncheckedCreateNestedManyWithoutPlansInput
    users?: usersUncheckedCreateNestedManyWithoutPlansInput
  }

  export type plansUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    duration_days?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cart?: cartUpdateManyWithoutPlansNestedInput
    invoices?: invoicesUpdateManyWithoutPlansNestedInput
    users?: usersUpdateManyWithoutPlansNestedInput
  }

  export type plansUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    duration_days?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cart?: cartUncheckedUpdateManyWithoutPlansNestedInput
    invoices?: invoicesUncheckedUpdateManyWithoutPlansNestedInput
    users?: usersUncheckedUpdateManyWithoutPlansNestedInput
  }

  export type plansCreateManyInput = {
    id?: number
    name?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
    duration_days?: number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type plansUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    duration_days?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type plansUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    duration_days?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersCreateInput = {
    username?: string | null
    password?: string | null
    role?: string | null
    fullname?: string | null
    phonenumber?: string | null
    email?: string | null
    city?: string | null
    gender?: string | null
    interest?: string | null
    birthday?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    cart?: cartCreateNestedManyWithoutUsersInput
    favorites?: favoritesCreateNestedManyWithoutUsersInput
    feedbacks?: feedbacksCreateNestedManyWithoutUsersInput
    invoices?: invoicesCreateNestedManyWithoutUsersInput
    plans?: plansCreateNestedOneWithoutUsersInput
    views?: viewsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id?: number
    plan_id?: number | null
    username?: string | null
    password?: string | null
    role?: string | null
    fullname?: string | null
    phonenumber?: string | null
    email?: string | null
    city?: string | null
    gender?: string | null
    interest?: string | null
    birthday?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    cart?: cartUncheckedCreateNestedManyWithoutUsersInput
    favorites?: favoritesUncheckedCreateNestedManyWithoutUsersInput
    feedbacks?: feedbacksUncheckedCreateNestedManyWithoutUsersInput
    invoices?: invoicesUncheckedCreateNestedManyWithoutUsersInput
    views?: viewsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    phonenumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    interest?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cart?: cartUpdateManyWithoutUsersNestedInput
    favorites?: favoritesUpdateManyWithoutUsersNestedInput
    feedbacks?: feedbacksUpdateManyWithoutUsersNestedInput
    invoices?: invoicesUpdateManyWithoutUsersNestedInput
    plans?: plansUpdateOneWithoutUsersNestedInput
    views?: viewsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    plan_id?: NullableIntFieldUpdateOperationsInput | number | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    phonenumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    interest?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cart?: cartUncheckedUpdateManyWithoutUsersNestedInput
    favorites?: favoritesUncheckedUpdateManyWithoutUsersNestedInput
    feedbacks?: feedbacksUncheckedUpdateManyWithoutUsersNestedInput
    invoices?: invoicesUncheckedUpdateManyWithoutUsersNestedInput
    views?: viewsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    id?: number
    plan_id?: number | null
    username?: string | null
    password?: string | null
    role?: string | null
    fullname?: string | null
    phonenumber?: string | null
    email?: string | null
    city?: string | null
    gender?: string | null
    interest?: string | null
    birthday?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type usersUpdateManyMutationInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    phonenumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    interest?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    plan_id?: NullableIntFieldUpdateOperationsInput | number | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    phonenumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    interest?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type video_filesCreateInput = {
    quality?: string | null
    file_url?: string | null
    episodes?: episodesCreateNestedOneWithoutVideo_filesInput
  }

  export type video_filesUncheckedCreateInput = {
    id?: number
    episode_id?: number | null
    quality?: string | null
    file_url?: string | null
  }

  export type video_filesUpdateInput = {
    quality?: NullableStringFieldUpdateOperationsInput | string | null
    file_url?: NullableStringFieldUpdateOperationsInput | string | null
    episodes?: episodesUpdateOneWithoutVideo_filesNestedInput
  }

  export type video_filesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    episode_id?: NullableIntFieldUpdateOperationsInput | number | null
    quality?: NullableStringFieldUpdateOperationsInput | string | null
    file_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type video_filesCreateManyInput = {
    id?: number
    episode_id?: number | null
    quality?: string | null
    file_url?: string | null
  }

  export type video_filesUpdateManyMutationInput = {
    quality?: NullableStringFieldUpdateOperationsInput | string | null
    file_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type video_filesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    episode_id?: NullableIntFieldUpdateOperationsInput | number | null
    quality?: NullableStringFieldUpdateOperationsInput | string | null
    file_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type viewsCreateInput = {
    viewed_at?: Date | string
    progress?: number | null
    films?: filmsCreateNestedOneWithoutViewsInput
    episodes?: episodesCreateNestedOneWithoutViewsInput
    users?: usersCreateNestedOneWithoutViewsInput
  }

  export type viewsUncheckedCreateInput = {
    id?: number
    film_id?: number | null
    episode_id?: number | null
    user_id?: number | null
    viewed_at?: Date | string
    progress?: number | null
  }

  export type viewsUpdateInput = {
    viewed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: NullableIntFieldUpdateOperationsInput | number | null
    films?: filmsUpdateOneWithoutViewsNestedInput
    episodes?: episodesUpdateOneWithoutViewsNestedInput
    users?: usersUpdateOneWithoutViewsNestedInput
  }

  export type viewsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    film_id?: NullableIntFieldUpdateOperationsInput | number | null
    episode_id?: NullableIntFieldUpdateOperationsInput | number | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    viewed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type viewsCreateManyInput = {
    id?: number
    film_id?: number | null
    episode_id?: number | null
    user_id?: number | null
    viewed_at?: Date | string
    progress?: number | null
  }

  export type viewsUpdateManyMutationInput = {
    viewed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type viewsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    film_id?: NullableIntFieldUpdateOperationsInput | number | null
    episode_id?: NullableIntFieldUpdateOperationsInput | number | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    viewed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UsersNullableScalarRelationFilter = {
    is?: usersWhereInput | null
    isNot?: usersWhereInput | null
  }

  export type PlansNullableScalarRelationFilter = {
    is?: plansWhereInput | null
    isNot?: plansWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type cartCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    plan_id?: SortOrder
    added_at?: SortOrder
  }

  export type cartAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    plan_id?: SortOrder
  }

  export type cartMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    plan_id?: SortOrder
    added_at?: SortOrder
  }

  export type cartMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    plan_id?: SortOrder
    added_at?: SortOrder
  }

  export type cartSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    plan_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type FilmsNullableScalarRelationFilter = {
    is?: filmsWhereInput | null
    isNot?: filmsWhereInput | null
  }

  export type Video_filesListRelationFilter = {
    every?: video_filesWhereInput
    some?: video_filesWhereInput
    none?: video_filesWhereInput
  }

  export type ViewsListRelationFilter = {
    every?: viewsWhereInput
    some?: viewsWhereInput
    none?: viewsWhereInput
  }

  export type video_filesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type viewsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type episodesOrderByRelevanceInput = {
    fields: episodesOrderByRelevanceFieldEnum | episodesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type episodesCountOrderByAggregateInput = {
    id?: SortOrder
    film_id?: SortOrder
    episode_name?: SortOrder
    video_url?: SortOrder
    sub_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type episodesAvgOrderByAggregateInput = {
    id?: SortOrder
    film_id?: SortOrder
  }

  export type episodesMaxOrderByAggregateInput = {
    id?: SortOrder
    film_id?: SortOrder
    episode_name?: SortOrder
    video_url?: SortOrder
    sub_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type episodesMinOrderByAggregateInput = {
    id?: SortOrder
    film_id?: SortOrder
    episode_name?: SortOrder
    video_url?: SortOrder
    sub_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type episodesSumOrderByAggregateInput = {
    id?: SortOrder
    film_id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type favoritesUser_idFilm_idCompoundUniqueInput = {
    user_id: number
    film_id: number
  }

  export type favoritesCountOrderByAggregateInput = {
    id?: SortOrder
    film_id?: SortOrder
    user_id?: SortOrder
    added_at?: SortOrder
  }

  export type favoritesAvgOrderByAggregateInput = {
    id?: SortOrder
    film_id?: SortOrder
    user_id?: SortOrder
  }

  export type favoritesMaxOrderByAggregateInput = {
    id?: SortOrder
    film_id?: SortOrder
    user_id?: SortOrder
    added_at?: SortOrder
  }

  export type favoritesMinOrderByAggregateInput = {
    id?: SortOrder
    film_id?: SortOrder
    user_id?: SortOrder
    added_at?: SortOrder
  }

  export type favoritesSumOrderByAggregateInput = {
    id?: SortOrder
    film_id?: SortOrder
    user_id?: SortOrder
  }

  export type feedbacksOrderByRelevanceInput = {
    fields: feedbacksOrderByRelevanceFieldEnum | feedbacksOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type feedbacksCountOrderByAggregateInput = {
    id?: SortOrder
    film_id?: SortOrder
    user_id?: SortOrder
    comment?: SortOrder
    rating?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type feedbacksAvgOrderByAggregateInput = {
    id?: SortOrder
    film_id?: SortOrder
    user_id?: SortOrder
    rating?: SortOrder
  }

  export type feedbacksMaxOrderByAggregateInput = {
    id?: SortOrder
    film_id?: SortOrder
    user_id?: SortOrder
    comment?: SortOrder
    rating?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type feedbacksMinOrderByAggregateInput = {
    id?: SortOrder
    film_id?: SortOrder
    user_id?: SortOrder
    comment?: SortOrder
    rating?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type feedbacksSumOrderByAggregateInput = {
    id?: SortOrder
    film_id?: SortOrder
    user_id?: SortOrder
    rating?: SortOrder
  }

  export type GenresNullableScalarRelationFilter = {
    is?: genresWhereInput | null
    isNot?: genresWhereInput | null
  }

  export type film_genresCountOrderByAggregateInput = {
    id?: SortOrder
    genres_id?: SortOrder
    film_id?: SortOrder
  }

  export type film_genresAvgOrderByAggregateInput = {
    id?: SortOrder
    genres_id?: SortOrder
    film_id?: SortOrder
  }

  export type film_genresMaxOrderByAggregateInput = {
    id?: SortOrder
    genres_id?: SortOrder
    film_id?: SortOrder
  }

  export type film_genresMinOrderByAggregateInput = {
    id?: SortOrder
    genres_id?: SortOrder
    film_id?: SortOrder
  }

  export type film_genresSumOrderByAggregateInput = {
    id?: SortOrder
    genres_id?: SortOrder
    film_id?: SortOrder
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type EpisodesListRelationFilter = {
    every?: episodesWhereInput
    some?: episodesWhereInput
    none?: episodesWhereInput
  }

  export type FavoritesListRelationFilter = {
    every?: favoritesWhereInput
    some?: favoritesWhereInput
    none?: favoritesWhereInput
  }

  export type FeedbacksListRelationFilter = {
    every?: feedbacksWhereInput
    some?: feedbacksWhereInput
    none?: feedbacksWhereInput
  }

  export type Film_genresListRelationFilter = {
    every?: film_genresWhereInput
    some?: film_genresWhereInput
    none?: film_genresWhereInput
  }

  export type episodesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type favoritesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type feedbacksOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type film_genresOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type filmsOrderByRelevanceInput = {
    fields: filmsOrderByRelevanceFieldEnum | filmsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type filmsCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    poster_url?: SortOrder
    description?: SortOrder
    year?: SortOrder
    country?: SortOrder
    duration?: SortOrder
    poster_video_url?: SortOrder
    actor?: SortOrder
    is_series?: SortOrder
    directeur?: SortOrder
    age_rating?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    view_count?: SortOrder
    average_rating?: SortOrder
  }

  export type filmsAvgOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    view_count?: SortOrder
    average_rating?: SortOrder
  }

  export type filmsMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    poster_url?: SortOrder
    description?: SortOrder
    year?: SortOrder
    country?: SortOrder
    duration?: SortOrder
    poster_video_url?: SortOrder
    actor?: SortOrder
    is_series?: SortOrder
    directeur?: SortOrder
    age_rating?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    view_count?: SortOrder
    average_rating?: SortOrder
  }

  export type filmsMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    poster_url?: SortOrder
    description?: SortOrder
    year?: SortOrder
    country?: SortOrder
    duration?: SortOrder
    poster_video_url?: SortOrder
    actor?: SortOrder
    is_series?: SortOrder
    directeur?: SortOrder
    age_rating?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    view_count?: SortOrder
    average_rating?: SortOrder
  }

  export type filmsSumOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    view_count?: SortOrder
    average_rating?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type genresOrderByRelevanceInput = {
    fields: genresOrderByRelevanceFieldEnum | genresOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type genresCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type genresAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type genresMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type genresMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type genresSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type invoicesOrderByRelevanceInput = {
    fields: invoicesOrderByRelevanceFieldEnum | invoicesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type invoicesCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    plan_id?: SortOrder
    total_price?: SortOrder
    payment_method?: SortOrder
    status?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    created_at?: SortOrder
  }

  export type invoicesAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    plan_id?: SortOrder
    total_price?: SortOrder
  }

  export type invoicesMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    plan_id?: SortOrder
    total_price?: SortOrder
    payment_method?: SortOrder
    status?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    created_at?: SortOrder
  }

  export type invoicesMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    plan_id?: SortOrder
    total_price?: SortOrder
    payment_method?: SortOrder
    status?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    created_at?: SortOrder
  }

  export type invoicesSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    plan_id?: SortOrder
    total_price?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type CartListRelationFilter = {
    every?: cartWhereInput
    some?: cartWhereInput
    none?: cartWhereInput
  }

  export type InvoicesListRelationFilter = {
    every?: invoicesWhereInput
    some?: invoicesWhereInput
    none?: invoicesWhereInput
  }

  export type UsersListRelationFilter = {
    every?: usersWhereInput
    some?: usersWhereInput
    none?: usersWhereInput
  }

  export type cartOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type invoicesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type plansOrderByRelevanceInput = {
    fields: plansOrderByRelevanceFieldEnum | plansOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type plansCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    duration_days?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type plansAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    duration_days?: SortOrder
  }

  export type plansMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    duration_days?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type plansMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    duration_days?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type plansSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    duration_days?: SortOrder
  }

  export type usersOrderByRelevanceInput = {
    fields: usersOrderByRelevanceFieldEnum | usersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    plan_id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    fullname?: SortOrder
    phonenumber?: SortOrder
    email?: SortOrder
    city?: SortOrder
    gender?: SortOrder
    interest?: SortOrder
    birthday?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
    plan_id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    plan_id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    fullname?: SortOrder
    phonenumber?: SortOrder
    email?: SortOrder
    city?: SortOrder
    gender?: SortOrder
    interest?: SortOrder
    birthday?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    plan_id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    fullname?: SortOrder
    phonenumber?: SortOrder
    email?: SortOrder
    city?: SortOrder
    gender?: SortOrder
    interest?: SortOrder
    birthday?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
    plan_id?: SortOrder
  }

  export type EpisodesNullableScalarRelationFilter = {
    is?: episodesWhereInput | null
    isNot?: episodesWhereInput | null
  }

  export type video_filesOrderByRelevanceInput = {
    fields: video_filesOrderByRelevanceFieldEnum | video_filesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type video_filesCountOrderByAggregateInput = {
    id?: SortOrder
    episode_id?: SortOrder
    quality?: SortOrder
    file_url?: SortOrder
  }

  export type video_filesAvgOrderByAggregateInput = {
    id?: SortOrder
    episode_id?: SortOrder
  }

  export type video_filesMaxOrderByAggregateInput = {
    id?: SortOrder
    episode_id?: SortOrder
    quality?: SortOrder
    file_url?: SortOrder
  }

  export type video_filesMinOrderByAggregateInput = {
    id?: SortOrder
    episode_id?: SortOrder
    quality?: SortOrder
    file_url?: SortOrder
  }

  export type video_filesSumOrderByAggregateInput = {
    id?: SortOrder
    episode_id?: SortOrder
  }

  export type viewsCountOrderByAggregateInput = {
    id?: SortOrder
    film_id?: SortOrder
    episode_id?: SortOrder
    user_id?: SortOrder
    viewed_at?: SortOrder
    progress?: SortOrder
  }

  export type viewsAvgOrderByAggregateInput = {
    id?: SortOrder
    film_id?: SortOrder
    episode_id?: SortOrder
    user_id?: SortOrder
    progress?: SortOrder
  }

  export type viewsMaxOrderByAggregateInput = {
    id?: SortOrder
    film_id?: SortOrder
    episode_id?: SortOrder
    user_id?: SortOrder
    viewed_at?: SortOrder
    progress?: SortOrder
  }

  export type viewsMinOrderByAggregateInput = {
    id?: SortOrder
    film_id?: SortOrder
    episode_id?: SortOrder
    user_id?: SortOrder
    viewed_at?: SortOrder
    progress?: SortOrder
  }

  export type viewsSumOrderByAggregateInput = {
    id?: SortOrder
    film_id?: SortOrder
    episode_id?: SortOrder
    user_id?: SortOrder
    progress?: SortOrder
  }

  export type usersCreateNestedOneWithoutCartInput = {
    create?: XOR<usersCreateWithoutCartInput, usersUncheckedCreateWithoutCartInput>
    connectOrCreate?: usersCreateOrConnectWithoutCartInput
    connect?: usersWhereUniqueInput
  }

  export type plansCreateNestedOneWithoutCartInput = {
    create?: XOR<plansCreateWithoutCartInput, plansUncheckedCreateWithoutCartInput>
    connectOrCreate?: plansCreateOrConnectWithoutCartInput
    connect?: plansWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type usersUpdateOneWithoutCartNestedInput = {
    create?: XOR<usersCreateWithoutCartInput, usersUncheckedCreateWithoutCartInput>
    connectOrCreate?: usersCreateOrConnectWithoutCartInput
    upsert?: usersUpsertWithoutCartInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutCartInput, usersUpdateWithoutCartInput>, usersUncheckedUpdateWithoutCartInput>
  }

  export type plansUpdateOneWithoutCartNestedInput = {
    create?: XOR<plansCreateWithoutCartInput, plansUncheckedCreateWithoutCartInput>
    connectOrCreate?: plansCreateOrConnectWithoutCartInput
    upsert?: plansUpsertWithoutCartInput
    disconnect?: plansWhereInput | boolean
    delete?: plansWhereInput | boolean
    connect?: plansWhereUniqueInput
    update?: XOR<XOR<plansUpdateToOneWithWhereWithoutCartInput, plansUpdateWithoutCartInput>, plansUncheckedUpdateWithoutCartInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type filmsCreateNestedOneWithoutEpisodesInput = {
    create?: XOR<filmsCreateWithoutEpisodesInput, filmsUncheckedCreateWithoutEpisodesInput>
    connectOrCreate?: filmsCreateOrConnectWithoutEpisodesInput
    connect?: filmsWhereUniqueInput
  }

  export type video_filesCreateNestedManyWithoutEpisodesInput = {
    create?: XOR<video_filesCreateWithoutEpisodesInput, video_filesUncheckedCreateWithoutEpisodesInput> | video_filesCreateWithoutEpisodesInput[] | video_filesUncheckedCreateWithoutEpisodesInput[]
    connectOrCreate?: video_filesCreateOrConnectWithoutEpisodesInput | video_filesCreateOrConnectWithoutEpisodesInput[]
    createMany?: video_filesCreateManyEpisodesInputEnvelope
    connect?: video_filesWhereUniqueInput | video_filesWhereUniqueInput[]
  }

  export type viewsCreateNestedManyWithoutEpisodesInput = {
    create?: XOR<viewsCreateWithoutEpisodesInput, viewsUncheckedCreateWithoutEpisodesInput> | viewsCreateWithoutEpisodesInput[] | viewsUncheckedCreateWithoutEpisodesInput[]
    connectOrCreate?: viewsCreateOrConnectWithoutEpisodesInput | viewsCreateOrConnectWithoutEpisodesInput[]
    createMany?: viewsCreateManyEpisodesInputEnvelope
    connect?: viewsWhereUniqueInput | viewsWhereUniqueInput[]
  }

  export type video_filesUncheckedCreateNestedManyWithoutEpisodesInput = {
    create?: XOR<video_filesCreateWithoutEpisodesInput, video_filesUncheckedCreateWithoutEpisodesInput> | video_filesCreateWithoutEpisodesInput[] | video_filesUncheckedCreateWithoutEpisodesInput[]
    connectOrCreate?: video_filesCreateOrConnectWithoutEpisodesInput | video_filesCreateOrConnectWithoutEpisodesInput[]
    createMany?: video_filesCreateManyEpisodesInputEnvelope
    connect?: video_filesWhereUniqueInput | video_filesWhereUniqueInput[]
  }

  export type viewsUncheckedCreateNestedManyWithoutEpisodesInput = {
    create?: XOR<viewsCreateWithoutEpisodesInput, viewsUncheckedCreateWithoutEpisodesInput> | viewsCreateWithoutEpisodesInput[] | viewsUncheckedCreateWithoutEpisodesInput[]
    connectOrCreate?: viewsCreateOrConnectWithoutEpisodesInput | viewsCreateOrConnectWithoutEpisodesInput[]
    createMany?: viewsCreateManyEpisodesInputEnvelope
    connect?: viewsWhereUniqueInput | viewsWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type filmsUpdateOneWithoutEpisodesNestedInput = {
    create?: XOR<filmsCreateWithoutEpisodesInput, filmsUncheckedCreateWithoutEpisodesInput>
    connectOrCreate?: filmsCreateOrConnectWithoutEpisodesInput
    upsert?: filmsUpsertWithoutEpisodesInput
    disconnect?: filmsWhereInput | boolean
    delete?: filmsWhereInput | boolean
    connect?: filmsWhereUniqueInput
    update?: XOR<XOR<filmsUpdateToOneWithWhereWithoutEpisodesInput, filmsUpdateWithoutEpisodesInput>, filmsUncheckedUpdateWithoutEpisodesInput>
  }

  export type video_filesUpdateManyWithoutEpisodesNestedInput = {
    create?: XOR<video_filesCreateWithoutEpisodesInput, video_filesUncheckedCreateWithoutEpisodesInput> | video_filesCreateWithoutEpisodesInput[] | video_filesUncheckedCreateWithoutEpisodesInput[]
    connectOrCreate?: video_filesCreateOrConnectWithoutEpisodesInput | video_filesCreateOrConnectWithoutEpisodesInput[]
    upsert?: video_filesUpsertWithWhereUniqueWithoutEpisodesInput | video_filesUpsertWithWhereUniqueWithoutEpisodesInput[]
    createMany?: video_filesCreateManyEpisodesInputEnvelope
    set?: video_filesWhereUniqueInput | video_filesWhereUniqueInput[]
    disconnect?: video_filesWhereUniqueInput | video_filesWhereUniqueInput[]
    delete?: video_filesWhereUniqueInput | video_filesWhereUniqueInput[]
    connect?: video_filesWhereUniqueInput | video_filesWhereUniqueInput[]
    update?: video_filesUpdateWithWhereUniqueWithoutEpisodesInput | video_filesUpdateWithWhereUniqueWithoutEpisodesInput[]
    updateMany?: video_filesUpdateManyWithWhereWithoutEpisodesInput | video_filesUpdateManyWithWhereWithoutEpisodesInput[]
    deleteMany?: video_filesScalarWhereInput | video_filesScalarWhereInput[]
  }

  export type viewsUpdateManyWithoutEpisodesNestedInput = {
    create?: XOR<viewsCreateWithoutEpisodesInput, viewsUncheckedCreateWithoutEpisodesInput> | viewsCreateWithoutEpisodesInput[] | viewsUncheckedCreateWithoutEpisodesInput[]
    connectOrCreate?: viewsCreateOrConnectWithoutEpisodesInput | viewsCreateOrConnectWithoutEpisodesInput[]
    upsert?: viewsUpsertWithWhereUniqueWithoutEpisodesInput | viewsUpsertWithWhereUniqueWithoutEpisodesInput[]
    createMany?: viewsCreateManyEpisodesInputEnvelope
    set?: viewsWhereUniqueInput | viewsWhereUniqueInput[]
    disconnect?: viewsWhereUniqueInput | viewsWhereUniqueInput[]
    delete?: viewsWhereUniqueInput | viewsWhereUniqueInput[]
    connect?: viewsWhereUniqueInput | viewsWhereUniqueInput[]
    update?: viewsUpdateWithWhereUniqueWithoutEpisodesInput | viewsUpdateWithWhereUniqueWithoutEpisodesInput[]
    updateMany?: viewsUpdateManyWithWhereWithoutEpisodesInput | viewsUpdateManyWithWhereWithoutEpisodesInput[]
    deleteMany?: viewsScalarWhereInput | viewsScalarWhereInput[]
  }

  export type video_filesUncheckedUpdateManyWithoutEpisodesNestedInput = {
    create?: XOR<video_filesCreateWithoutEpisodesInput, video_filesUncheckedCreateWithoutEpisodesInput> | video_filesCreateWithoutEpisodesInput[] | video_filesUncheckedCreateWithoutEpisodesInput[]
    connectOrCreate?: video_filesCreateOrConnectWithoutEpisodesInput | video_filesCreateOrConnectWithoutEpisodesInput[]
    upsert?: video_filesUpsertWithWhereUniqueWithoutEpisodesInput | video_filesUpsertWithWhereUniqueWithoutEpisodesInput[]
    createMany?: video_filesCreateManyEpisodesInputEnvelope
    set?: video_filesWhereUniqueInput | video_filesWhereUniqueInput[]
    disconnect?: video_filesWhereUniqueInput | video_filesWhereUniqueInput[]
    delete?: video_filesWhereUniqueInput | video_filesWhereUniqueInput[]
    connect?: video_filesWhereUniqueInput | video_filesWhereUniqueInput[]
    update?: video_filesUpdateWithWhereUniqueWithoutEpisodesInput | video_filesUpdateWithWhereUniqueWithoutEpisodesInput[]
    updateMany?: video_filesUpdateManyWithWhereWithoutEpisodesInput | video_filesUpdateManyWithWhereWithoutEpisodesInput[]
    deleteMany?: video_filesScalarWhereInput | video_filesScalarWhereInput[]
  }

  export type viewsUncheckedUpdateManyWithoutEpisodesNestedInput = {
    create?: XOR<viewsCreateWithoutEpisodesInput, viewsUncheckedCreateWithoutEpisodesInput> | viewsCreateWithoutEpisodesInput[] | viewsUncheckedCreateWithoutEpisodesInput[]
    connectOrCreate?: viewsCreateOrConnectWithoutEpisodesInput | viewsCreateOrConnectWithoutEpisodesInput[]
    upsert?: viewsUpsertWithWhereUniqueWithoutEpisodesInput | viewsUpsertWithWhereUniqueWithoutEpisodesInput[]
    createMany?: viewsCreateManyEpisodesInputEnvelope
    set?: viewsWhereUniqueInput | viewsWhereUniqueInput[]
    disconnect?: viewsWhereUniqueInput | viewsWhereUniqueInput[]
    delete?: viewsWhereUniqueInput | viewsWhereUniqueInput[]
    connect?: viewsWhereUniqueInput | viewsWhereUniqueInput[]
    update?: viewsUpdateWithWhereUniqueWithoutEpisodesInput | viewsUpdateWithWhereUniqueWithoutEpisodesInput[]
    updateMany?: viewsUpdateManyWithWhereWithoutEpisodesInput | viewsUpdateManyWithWhereWithoutEpisodesInput[]
    deleteMany?: viewsScalarWhereInput | viewsScalarWhereInput[]
  }

  export type filmsCreateNestedOneWithoutFavoritesInput = {
    create?: XOR<filmsCreateWithoutFavoritesInput, filmsUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: filmsCreateOrConnectWithoutFavoritesInput
    connect?: filmsWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutFavoritesInput = {
    create?: XOR<usersCreateWithoutFavoritesInput, usersUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: usersCreateOrConnectWithoutFavoritesInput
    connect?: usersWhereUniqueInput
  }

  export type filmsUpdateOneWithoutFavoritesNestedInput = {
    create?: XOR<filmsCreateWithoutFavoritesInput, filmsUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: filmsCreateOrConnectWithoutFavoritesInput
    upsert?: filmsUpsertWithoutFavoritesInput
    disconnect?: filmsWhereInput | boolean
    delete?: filmsWhereInput | boolean
    connect?: filmsWhereUniqueInput
    update?: XOR<XOR<filmsUpdateToOneWithWhereWithoutFavoritesInput, filmsUpdateWithoutFavoritesInput>, filmsUncheckedUpdateWithoutFavoritesInput>
  }

  export type usersUpdateOneWithoutFavoritesNestedInput = {
    create?: XOR<usersCreateWithoutFavoritesInput, usersUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: usersCreateOrConnectWithoutFavoritesInput
    upsert?: usersUpsertWithoutFavoritesInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutFavoritesInput, usersUpdateWithoutFavoritesInput>, usersUncheckedUpdateWithoutFavoritesInput>
  }

  export type filmsCreateNestedOneWithoutFeedbacksInput = {
    create?: XOR<filmsCreateWithoutFeedbacksInput, filmsUncheckedCreateWithoutFeedbacksInput>
    connectOrCreate?: filmsCreateOrConnectWithoutFeedbacksInput
    connect?: filmsWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutFeedbacksInput = {
    create?: XOR<usersCreateWithoutFeedbacksInput, usersUncheckedCreateWithoutFeedbacksInput>
    connectOrCreate?: usersCreateOrConnectWithoutFeedbacksInput
    connect?: usersWhereUniqueInput
  }

  export type filmsUpdateOneWithoutFeedbacksNestedInput = {
    create?: XOR<filmsCreateWithoutFeedbacksInput, filmsUncheckedCreateWithoutFeedbacksInput>
    connectOrCreate?: filmsCreateOrConnectWithoutFeedbacksInput
    upsert?: filmsUpsertWithoutFeedbacksInput
    disconnect?: filmsWhereInput | boolean
    delete?: filmsWhereInput | boolean
    connect?: filmsWhereUniqueInput
    update?: XOR<XOR<filmsUpdateToOneWithWhereWithoutFeedbacksInput, filmsUpdateWithoutFeedbacksInput>, filmsUncheckedUpdateWithoutFeedbacksInput>
  }

  export type usersUpdateOneWithoutFeedbacksNestedInput = {
    create?: XOR<usersCreateWithoutFeedbacksInput, usersUncheckedCreateWithoutFeedbacksInput>
    connectOrCreate?: usersCreateOrConnectWithoutFeedbacksInput
    upsert?: usersUpsertWithoutFeedbacksInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutFeedbacksInput, usersUpdateWithoutFeedbacksInput>, usersUncheckedUpdateWithoutFeedbacksInput>
  }

  export type genresCreateNestedOneWithoutFilm_genresInput = {
    create?: XOR<genresCreateWithoutFilm_genresInput, genresUncheckedCreateWithoutFilm_genresInput>
    connectOrCreate?: genresCreateOrConnectWithoutFilm_genresInput
    connect?: genresWhereUniqueInput
  }

  export type filmsCreateNestedOneWithoutFilm_genresInput = {
    create?: XOR<filmsCreateWithoutFilm_genresInput, filmsUncheckedCreateWithoutFilm_genresInput>
    connectOrCreate?: filmsCreateOrConnectWithoutFilm_genresInput
    connect?: filmsWhereUniqueInput
  }

  export type genresUpdateOneWithoutFilm_genresNestedInput = {
    create?: XOR<genresCreateWithoutFilm_genresInput, genresUncheckedCreateWithoutFilm_genresInput>
    connectOrCreate?: genresCreateOrConnectWithoutFilm_genresInput
    upsert?: genresUpsertWithoutFilm_genresInput
    disconnect?: genresWhereInput | boolean
    delete?: genresWhereInput | boolean
    connect?: genresWhereUniqueInput
    update?: XOR<XOR<genresUpdateToOneWithWhereWithoutFilm_genresInput, genresUpdateWithoutFilm_genresInput>, genresUncheckedUpdateWithoutFilm_genresInput>
  }

  export type filmsUpdateOneWithoutFilm_genresNestedInput = {
    create?: XOR<filmsCreateWithoutFilm_genresInput, filmsUncheckedCreateWithoutFilm_genresInput>
    connectOrCreate?: filmsCreateOrConnectWithoutFilm_genresInput
    upsert?: filmsUpsertWithoutFilm_genresInput
    disconnect?: filmsWhereInput | boolean
    delete?: filmsWhereInput | boolean
    connect?: filmsWhereUniqueInput
    update?: XOR<XOR<filmsUpdateToOneWithWhereWithoutFilm_genresInput, filmsUpdateWithoutFilm_genresInput>, filmsUncheckedUpdateWithoutFilm_genresInput>
  }

  export type episodesCreateNestedManyWithoutFilmsInput = {
    create?: XOR<episodesCreateWithoutFilmsInput, episodesUncheckedCreateWithoutFilmsInput> | episodesCreateWithoutFilmsInput[] | episodesUncheckedCreateWithoutFilmsInput[]
    connectOrCreate?: episodesCreateOrConnectWithoutFilmsInput | episodesCreateOrConnectWithoutFilmsInput[]
    createMany?: episodesCreateManyFilmsInputEnvelope
    connect?: episodesWhereUniqueInput | episodesWhereUniqueInput[]
  }

  export type favoritesCreateNestedManyWithoutFilmsInput = {
    create?: XOR<favoritesCreateWithoutFilmsInput, favoritesUncheckedCreateWithoutFilmsInput> | favoritesCreateWithoutFilmsInput[] | favoritesUncheckedCreateWithoutFilmsInput[]
    connectOrCreate?: favoritesCreateOrConnectWithoutFilmsInput | favoritesCreateOrConnectWithoutFilmsInput[]
    createMany?: favoritesCreateManyFilmsInputEnvelope
    connect?: favoritesWhereUniqueInput | favoritesWhereUniqueInput[]
  }

  export type feedbacksCreateNestedManyWithoutFilmsInput = {
    create?: XOR<feedbacksCreateWithoutFilmsInput, feedbacksUncheckedCreateWithoutFilmsInput> | feedbacksCreateWithoutFilmsInput[] | feedbacksUncheckedCreateWithoutFilmsInput[]
    connectOrCreate?: feedbacksCreateOrConnectWithoutFilmsInput | feedbacksCreateOrConnectWithoutFilmsInput[]
    createMany?: feedbacksCreateManyFilmsInputEnvelope
    connect?: feedbacksWhereUniqueInput | feedbacksWhereUniqueInput[]
  }

  export type film_genresCreateNestedManyWithoutFilmsInput = {
    create?: XOR<film_genresCreateWithoutFilmsInput, film_genresUncheckedCreateWithoutFilmsInput> | film_genresCreateWithoutFilmsInput[] | film_genresUncheckedCreateWithoutFilmsInput[]
    connectOrCreate?: film_genresCreateOrConnectWithoutFilmsInput | film_genresCreateOrConnectWithoutFilmsInput[]
    createMany?: film_genresCreateManyFilmsInputEnvelope
    connect?: film_genresWhereUniqueInput | film_genresWhereUniqueInput[]
  }

  export type viewsCreateNestedManyWithoutFilmsInput = {
    create?: XOR<viewsCreateWithoutFilmsInput, viewsUncheckedCreateWithoutFilmsInput> | viewsCreateWithoutFilmsInput[] | viewsUncheckedCreateWithoutFilmsInput[]
    connectOrCreate?: viewsCreateOrConnectWithoutFilmsInput | viewsCreateOrConnectWithoutFilmsInput[]
    createMany?: viewsCreateManyFilmsInputEnvelope
    connect?: viewsWhereUniqueInput | viewsWhereUniqueInput[]
  }

  export type episodesUncheckedCreateNestedManyWithoutFilmsInput = {
    create?: XOR<episodesCreateWithoutFilmsInput, episodesUncheckedCreateWithoutFilmsInput> | episodesCreateWithoutFilmsInput[] | episodesUncheckedCreateWithoutFilmsInput[]
    connectOrCreate?: episodesCreateOrConnectWithoutFilmsInput | episodesCreateOrConnectWithoutFilmsInput[]
    createMany?: episodesCreateManyFilmsInputEnvelope
    connect?: episodesWhereUniqueInput | episodesWhereUniqueInput[]
  }

  export type favoritesUncheckedCreateNestedManyWithoutFilmsInput = {
    create?: XOR<favoritesCreateWithoutFilmsInput, favoritesUncheckedCreateWithoutFilmsInput> | favoritesCreateWithoutFilmsInput[] | favoritesUncheckedCreateWithoutFilmsInput[]
    connectOrCreate?: favoritesCreateOrConnectWithoutFilmsInput | favoritesCreateOrConnectWithoutFilmsInput[]
    createMany?: favoritesCreateManyFilmsInputEnvelope
    connect?: favoritesWhereUniqueInput | favoritesWhereUniqueInput[]
  }

  export type feedbacksUncheckedCreateNestedManyWithoutFilmsInput = {
    create?: XOR<feedbacksCreateWithoutFilmsInput, feedbacksUncheckedCreateWithoutFilmsInput> | feedbacksCreateWithoutFilmsInput[] | feedbacksUncheckedCreateWithoutFilmsInput[]
    connectOrCreate?: feedbacksCreateOrConnectWithoutFilmsInput | feedbacksCreateOrConnectWithoutFilmsInput[]
    createMany?: feedbacksCreateManyFilmsInputEnvelope
    connect?: feedbacksWhereUniqueInput | feedbacksWhereUniqueInput[]
  }

  export type film_genresUncheckedCreateNestedManyWithoutFilmsInput = {
    create?: XOR<film_genresCreateWithoutFilmsInput, film_genresUncheckedCreateWithoutFilmsInput> | film_genresCreateWithoutFilmsInput[] | film_genresUncheckedCreateWithoutFilmsInput[]
    connectOrCreate?: film_genresCreateOrConnectWithoutFilmsInput | film_genresCreateOrConnectWithoutFilmsInput[]
    createMany?: film_genresCreateManyFilmsInputEnvelope
    connect?: film_genresWhereUniqueInput | film_genresWhereUniqueInput[]
  }

  export type viewsUncheckedCreateNestedManyWithoutFilmsInput = {
    create?: XOR<viewsCreateWithoutFilmsInput, viewsUncheckedCreateWithoutFilmsInput> | viewsCreateWithoutFilmsInput[] | viewsUncheckedCreateWithoutFilmsInput[]
    connectOrCreate?: viewsCreateOrConnectWithoutFilmsInput | viewsCreateOrConnectWithoutFilmsInput[]
    createMany?: viewsCreateManyFilmsInputEnvelope
    connect?: viewsWhereUniqueInput | viewsWhereUniqueInput[]
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type episodesUpdateManyWithoutFilmsNestedInput = {
    create?: XOR<episodesCreateWithoutFilmsInput, episodesUncheckedCreateWithoutFilmsInput> | episodesCreateWithoutFilmsInput[] | episodesUncheckedCreateWithoutFilmsInput[]
    connectOrCreate?: episodesCreateOrConnectWithoutFilmsInput | episodesCreateOrConnectWithoutFilmsInput[]
    upsert?: episodesUpsertWithWhereUniqueWithoutFilmsInput | episodesUpsertWithWhereUniqueWithoutFilmsInput[]
    createMany?: episodesCreateManyFilmsInputEnvelope
    set?: episodesWhereUniqueInput | episodesWhereUniqueInput[]
    disconnect?: episodesWhereUniqueInput | episodesWhereUniqueInput[]
    delete?: episodesWhereUniqueInput | episodesWhereUniqueInput[]
    connect?: episodesWhereUniqueInput | episodesWhereUniqueInput[]
    update?: episodesUpdateWithWhereUniqueWithoutFilmsInput | episodesUpdateWithWhereUniqueWithoutFilmsInput[]
    updateMany?: episodesUpdateManyWithWhereWithoutFilmsInput | episodesUpdateManyWithWhereWithoutFilmsInput[]
    deleteMany?: episodesScalarWhereInput | episodesScalarWhereInput[]
  }

  export type favoritesUpdateManyWithoutFilmsNestedInput = {
    create?: XOR<favoritesCreateWithoutFilmsInput, favoritesUncheckedCreateWithoutFilmsInput> | favoritesCreateWithoutFilmsInput[] | favoritesUncheckedCreateWithoutFilmsInput[]
    connectOrCreate?: favoritesCreateOrConnectWithoutFilmsInput | favoritesCreateOrConnectWithoutFilmsInput[]
    upsert?: favoritesUpsertWithWhereUniqueWithoutFilmsInput | favoritesUpsertWithWhereUniqueWithoutFilmsInput[]
    createMany?: favoritesCreateManyFilmsInputEnvelope
    set?: favoritesWhereUniqueInput | favoritesWhereUniqueInput[]
    disconnect?: favoritesWhereUniqueInput | favoritesWhereUniqueInput[]
    delete?: favoritesWhereUniqueInput | favoritesWhereUniqueInput[]
    connect?: favoritesWhereUniqueInput | favoritesWhereUniqueInput[]
    update?: favoritesUpdateWithWhereUniqueWithoutFilmsInput | favoritesUpdateWithWhereUniqueWithoutFilmsInput[]
    updateMany?: favoritesUpdateManyWithWhereWithoutFilmsInput | favoritesUpdateManyWithWhereWithoutFilmsInput[]
    deleteMany?: favoritesScalarWhereInput | favoritesScalarWhereInput[]
  }

  export type feedbacksUpdateManyWithoutFilmsNestedInput = {
    create?: XOR<feedbacksCreateWithoutFilmsInput, feedbacksUncheckedCreateWithoutFilmsInput> | feedbacksCreateWithoutFilmsInput[] | feedbacksUncheckedCreateWithoutFilmsInput[]
    connectOrCreate?: feedbacksCreateOrConnectWithoutFilmsInput | feedbacksCreateOrConnectWithoutFilmsInput[]
    upsert?: feedbacksUpsertWithWhereUniqueWithoutFilmsInput | feedbacksUpsertWithWhereUniqueWithoutFilmsInput[]
    createMany?: feedbacksCreateManyFilmsInputEnvelope
    set?: feedbacksWhereUniqueInput | feedbacksWhereUniqueInput[]
    disconnect?: feedbacksWhereUniqueInput | feedbacksWhereUniqueInput[]
    delete?: feedbacksWhereUniqueInput | feedbacksWhereUniqueInput[]
    connect?: feedbacksWhereUniqueInput | feedbacksWhereUniqueInput[]
    update?: feedbacksUpdateWithWhereUniqueWithoutFilmsInput | feedbacksUpdateWithWhereUniqueWithoutFilmsInput[]
    updateMany?: feedbacksUpdateManyWithWhereWithoutFilmsInput | feedbacksUpdateManyWithWhereWithoutFilmsInput[]
    deleteMany?: feedbacksScalarWhereInput | feedbacksScalarWhereInput[]
  }

  export type film_genresUpdateManyWithoutFilmsNestedInput = {
    create?: XOR<film_genresCreateWithoutFilmsInput, film_genresUncheckedCreateWithoutFilmsInput> | film_genresCreateWithoutFilmsInput[] | film_genresUncheckedCreateWithoutFilmsInput[]
    connectOrCreate?: film_genresCreateOrConnectWithoutFilmsInput | film_genresCreateOrConnectWithoutFilmsInput[]
    upsert?: film_genresUpsertWithWhereUniqueWithoutFilmsInput | film_genresUpsertWithWhereUniqueWithoutFilmsInput[]
    createMany?: film_genresCreateManyFilmsInputEnvelope
    set?: film_genresWhereUniqueInput | film_genresWhereUniqueInput[]
    disconnect?: film_genresWhereUniqueInput | film_genresWhereUniqueInput[]
    delete?: film_genresWhereUniqueInput | film_genresWhereUniqueInput[]
    connect?: film_genresWhereUniqueInput | film_genresWhereUniqueInput[]
    update?: film_genresUpdateWithWhereUniqueWithoutFilmsInput | film_genresUpdateWithWhereUniqueWithoutFilmsInput[]
    updateMany?: film_genresUpdateManyWithWhereWithoutFilmsInput | film_genresUpdateManyWithWhereWithoutFilmsInput[]
    deleteMany?: film_genresScalarWhereInput | film_genresScalarWhereInput[]
  }

  export type viewsUpdateManyWithoutFilmsNestedInput = {
    create?: XOR<viewsCreateWithoutFilmsInput, viewsUncheckedCreateWithoutFilmsInput> | viewsCreateWithoutFilmsInput[] | viewsUncheckedCreateWithoutFilmsInput[]
    connectOrCreate?: viewsCreateOrConnectWithoutFilmsInput | viewsCreateOrConnectWithoutFilmsInput[]
    upsert?: viewsUpsertWithWhereUniqueWithoutFilmsInput | viewsUpsertWithWhereUniqueWithoutFilmsInput[]
    createMany?: viewsCreateManyFilmsInputEnvelope
    set?: viewsWhereUniqueInput | viewsWhereUniqueInput[]
    disconnect?: viewsWhereUniqueInput | viewsWhereUniqueInput[]
    delete?: viewsWhereUniqueInput | viewsWhereUniqueInput[]
    connect?: viewsWhereUniqueInput | viewsWhereUniqueInput[]
    update?: viewsUpdateWithWhereUniqueWithoutFilmsInput | viewsUpdateWithWhereUniqueWithoutFilmsInput[]
    updateMany?: viewsUpdateManyWithWhereWithoutFilmsInput | viewsUpdateManyWithWhereWithoutFilmsInput[]
    deleteMany?: viewsScalarWhereInput | viewsScalarWhereInput[]
  }

  export type episodesUncheckedUpdateManyWithoutFilmsNestedInput = {
    create?: XOR<episodesCreateWithoutFilmsInput, episodesUncheckedCreateWithoutFilmsInput> | episodesCreateWithoutFilmsInput[] | episodesUncheckedCreateWithoutFilmsInput[]
    connectOrCreate?: episodesCreateOrConnectWithoutFilmsInput | episodesCreateOrConnectWithoutFilmsInput[]
    upsert?: episodesUpsertWithWhereUniqueWithoutFilmsInput | episodesUpsertWithWhereUniqueWithoutFilmsInput[]
    createMany?: episodesCreateManyFilmsInputEnvelope
    set?: episodesWhereUniqueInput | episodesWhereUniqueInput[]
    disconnect?: episodesWhereUniqueInput | episodesWhereUniqueInput[]
    delete?: episodesWhereUniqueInput | episodesWhereUniqueInput[]
    connect?: episodesWhereUniqueInput | episodesWhereUniqueInput[]
    update?: episodesUpdateWithWhereUniqueWithoutFilmsInput | episodesUpdateWithWhereUniqueWithoutFilmsInput[]
    updateMany?: episodesUpdateManyWithWhereWithoutFilmsInput | episodesUpdateManyWithWhereWithoutFilmsInput[]
    deleteMany?: episodesScalarWhereInput | episodesScalarWhereInput[]
  }

  export type favoritesUncheckedUpdateManyWithoutFilmsNestedInput = {
    create?: XOR<favoritesCreateWithoutFilmsInput, favoritesUncheckedCreateWithoutFilmsInput> | favoritesCreateWithoutFilmsInput[] | favoritesUncheckedCreateWithoutFilmsInput[]
    connectOrCreate?: favoritesCreateOrConnectWithoutFilmsInput | favoritesCreateOrConnectWithoutFilmsInput[]
    upsert?: favoritesUpsertWithWhereUniqueWithoutFilmsInput | favoritesUpsertWithWhereUniqueWithoutFilmsInput[]
    createMany?: favoritesCreateManyFilmsInputEnvelope
    set?: favoritesWhereUniqueInput | favoritesWhereUniqueInput[]
    disconnect?: favoritesWhereUniqueInput | favoritesWhereUniqueInput[]
    delete?: favoritesWhereUniqueInput | favoritesWhereUniqueInput[]
    connect?: favoritesWhereUniqueInput | favoritesWhereUniqueInput[]
    update?: favoritesUpdateWithWhereUniqueWithoutFilmsInput | favoritesUpdateWithWhereUniqueWithoutFilmsInput[]
    updateMany?: favoritesUpdateManyWithWhereWithoutFilmsInput | favoritesUpdateManyWithWhereWithoutFilmsInput[]
    deleteMany?: favoritesScalarWhereInput | favoritesScalarWhereInput[]
  }

  export type feedbacksUncheckedUpdateManyWithoutFilmsNestedInput = {
    create?: XOR<feedbacksCreateWithoutFilmsInput, feedbacksUncheckedCreateWithoutFilmsInput> | feedbacksCreateWithoutFilmsInput[] | feedbacksUncheckedCreateWithoutFilmsInput[]
    connectOrCreate?: feedbacksCreateOrConnectWithoutFilmsInput | feedbacksCreateOrConnectWithoutFilmsInput[]
    upsert?: feedbacksUpsertWithWhereUniqueWithoutFilmsInput | feedbacksUpsertWithWhereUniqueWithoutFilmsInput[]
    createMany?: feedbacksCreateManyFilmsInputEnvelope
    set?: feedbacksWhereUniqueInput | feedbacksWhereUniqueInput[]
    disconnect?: feedbacksWhereUniqueInput | feedbacksWhereUniqueInput[]
    delete?: feedbacksWhereUniqueInput | feedbacksWhereUniqueInput[]
    connect?: feedbacksWhereUniqueInput | feedbacksWhereUniqueInput[]
    update?: feedbacksUpdateWithWhereUniqueWithoutFilmsInput | feedbacksUpdateWithWhereUniqueWithoutFilmsInput[]
    updateMany?: feedbacksUpdateManyWithWhereWithoutFilmsInput | feedbacksUpdateManyWithWhereWithoutFilmsInput[]
    deleteMany?: feedbacksScalarWhereInput | feedbacksScalarWhereInput[]
  }

  export type film_genresUncheckedUpdateManyWithoutFilmsNestedInput = {
    create?: XOR<film_genresCreateWithoutFilmsInput, film_genresUncheckedCreateWithoutFilmsInput> | film_genresCreateWithoutFilmsInput[] | film_genresUncheckedCreateWithoutFilmsInput[]
    connectOrCreate?: film_genresCreateOrConnectWithoutFilmsInput | film_genresCreateOrConnectWithoutFilmsInput[]
    upsert?: film_genresUpsertWithWhereUniqueWithoutFilmsInput | film_genresUpsertWithWhereUniqueWithoutFilmsInput[]
    createMany?: film_genresCreateManyFilmsInputEnvelope
    set?: film_genresWhereUniqueInput | film_genresWhereUniqueInput[]
    disconnect?: film_genresWhereUniqueInput | film_genresWhereUniqueInput[]
    delete?: film_genresWhereUniqueInput | film_genresWhereUniqueInput[]
    connect?: film_genresWhereUniqueInput | film_genresWhereUniqueInput[]
    update?: film_genresUpdateWithWhereUniqueWithoutFilmsInput | film_genresUpdateWithWhereUniqueWithoutFilmsInput[]
    updateMany?: film_genresUpdateManyWithWhereWithoutFilmsInput | film_genresUpdateManyWithWhereWithoutFilmsInput[]
    deleteMany?: film_genresScalarWhereInput | film_genresScalarWhereInput[]
  }

  export type viewsUncheckedUpdateManyWithoutFilmsNestedInput = {
    create?: XOR<viewsCreateWithoutFilmsInput, viewsUncheckedCreateWithoutFilmsInput> | viewsCreateWithoutFilmsInput[] | viewsUncheckedCreateWithoutFilmsInput[]
    connectOrCreate?: viewsCreateOrConnectWithoutFilmsInput | viewsCreateOrConnectWithoutFilmsInput[]
    upsert?: viewsUpsertWithWhereUniqueWithoutFilmsInput | viewsUpsertWithWhereUniqueWithoutFilmsInput[]
    createMany?: viewsCreateManyFilmsInputEnvelope
    set?: viewsWhereUniqueInput | viewsWhereUniqueInput[]
    disconnect?: viewsWhereUniqueInput | viewsWhereUniqueInput[]
    delete?: viewsWhereUniqueInput | viewsWhereUniqueInput[]
    connect?: viewsWhereUniqueInput | viewsWhereUniqueInput[]
    update?: viewsUpdateWithWhereUniqueWithoutFilmsInput | viewsUpdateWithWhereUniqueWithoutFilmsInput[]
    updateMany?: viewsUpdateManyWithWhereWithoutFilmsInput | viewsUpdateManyWithWhereWithoutFilmsInput[]
    deleteMany?: viewsScalarWhereInput | viewsScalarWhereInput[]
  }

  export type film_genresCreateNestedManyWithoutGenresInput = {
    create?: XOR<film_genresCreateWithoutGenresInput, film_genresUncheckedCreateWithoutGenresInput> | film_genresCreateWithoutGenresInput[] | film_genresUncheckedCreateWithoutGenresInput[]
    connectOrCreate?: film_genresCreateOrConnectWithoutGenresInput | film_genresCreateOrConnectWithoutGenresInput[]
    createMany?: film_genresCreateManyGenresInputEnvelope
    connect?: film_genresWhereUniqueInput | film_genresWhereUniqueInput[]
  }

  export type film_genresUncheckedCreateNestedManyWithoutGenresInput = {
    create?: XOR<film_genresCreateWithoutGenresInput, film_genresUncheckedCreateWithoutGenresInput> | film_genresCreateWithoutGenresInput[] | film_genresUncheckedCreateWithoutGenresInput[]
    connectOrCreate?: film_genresCreateOrConnectWithoutGenresInput | film_genresCreateOrConnectWithoutGenresInput[]
    createMany?: film_genresCreateManyGenresInputEnvelope
    connect?: film_genresWhereUniqueInput | film_genresWhereUniqueInput[]
  }

  export type film_genresUpdateManyWithoutGenresNestedInput = {
    create?: XOR<film_genresCreateWithoutGenresInput, film_genresUncheckedCreateWithoutGenresInput> | film_genresCreateWithoutGenresInput[] | film_genresUncheckedCreateWithoutGenresInput[]
    connectOrCreate?: film_genresCreateOrConnectWithoutGenresInput | film_genresCreateOrConnectWithoutGenresInput[]
    upsert?: film_genresUpsertWithWhereUniqueWithoutGenresInput | film_genresUpsertWithWhereUniqueWithoutGenresInput[]
    createMany?: film_genresCreateManyGenresInputEnvelope
    set?: film_genresWhereUniqueInput | film_genresWhereUniqueInput[]
    disconnect?: film_genresWhereUniqueInput | film_genresWhereUniqueInput[]
    delete?: film_genresWhereUniqueInput | film_genresWhereUniqueInput[]
    connect?: film_genresWhereUniqueInput | film_genresWhereUniqueInput[]
    update?: film_genresUpdateWithWhereUniqueWithoutGenresInput | film_genresUpdateWithWhereUniqueWithoutGenresInput[]
    updateMany?: film_genresUpdateManyWithWhereWithoutGenresInput | film_genresUpdateManyWithWhereWithoutGenresInput[]
    deleteMany?: film_genresScalarWhereInput | film_genresScalarWhereInput[]
  }

  export type film_genresUncheckedUpdateManyWithoutGenresNestedInput = {
    create?: XOR<film_genresCreateWithoutGenresInput, film_genresUncheckedCreateWithoutGenresInput> | film_genresCreateWithoutGenresInput[] | film_genresUncheckedCreateWithoutGenresInput[]
    connectOrCreate?: film_genresCreateOrConnectWithoutGenresInput | film_genresCreateOrConnectWithoutGenresInput[]
    upsert?: film_genresUpsertWithWhereUniqueWithoutGenresInput | film_genresUpsertWithWhereUniqueWithoutGenresInput[]
    createMany?: film_genresCreateManyGenresInputEnvelope
    set?: film_genresWhereUniqueInput | film_genresWhereUniqueInput[]
    disconnect?: film_genresWhereUniqueInput | film_genresWhereUniqueInput[]
    delete?: film_genresWhereUniqueInput | film_genresWhereUniqueInput[]
    connect?: film_genresWhereUniqueInput | film_genresWhereUniqueInput[]
    update?: film_genresUpdateWithWhereUniqueWithoutGenresInput | film_genresUpdateWithWhereUniqueWithoutGenresInput[]
    updateMany?: film_genresUpdateManyWithWhereWithoutGenresInput | film_genresUpdateManyWithWhereWithoutGenresInput[]
    deleteMany?: film_genresScalarWhereInput | film_genresScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutInvoicesInput = {
    create?: XOR<usersCreateWithoutInvoicesInput, usersUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: usersCreateOrConnectWithoutInvoicesInput
    connect?: usersWhereUniqueInput
  }

  export type plansCreateNestedOneWithoutInvoicesInput = {
    create?: XOR<plansCreateWithoutInvoicesInput, plansUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: plansCreateOrConnectWithoutInvoicesInput
    connect?: plansWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type usersUpdateOneWithoutInvoicesNestedInput = {
    create?: XOR<usersCreateWithoutInvoicesInput, usersUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: usersCreateOrConnectWithoutInvoicesInput
    upsert?: usersUpsertWithoutInvoicesInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutInvoicesInput, usersUpdateWithoutInvoicesInput>, usersUncheckedUpdateWithoutInvoicesInput>
  }

  export type plansUpdateOneWithoutInvoicesNestedInput = {
    create?: XOR<plansCreateWithoutInvoicesInput, plansUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: plansCreateOrConnectWithoutInvoicesInput
    upsert?: plansUpsertWithoutInvoicesInput
    disconnect?: plansWhereInput | boolean
    delete?: plansWhereInput | boolean
    connect?: plansWhereUniqueInput
    update?: XOR<XOR<plansUpdateToOneWithWhereWithoutInvoicesInput, plansUpdateWithoutInvoicesInput>, plansUncheckedUpdateWithoutInvoicesInput>
  }

  export type cartCreateNestedManyWithoutPlansInput = {
    create?: XOR<cartCreateWithoutPlansInput, cartUncheckedCreateWithoutPlansInput> | cartCreateWithoutPlansInput[] | cartUncheckedCreateWithoutPlansInput[]
    connectOrCreate?: cartCreateOrConnectWithoutPlansInput | cartCreateOrConnectWithoutPlansInput[]
    createMany?: cartCreateManyPlansInputEnvelope
    connect?: cartWhereUniqueInput | cartWhereUniqueInput[]
  }

  export type invoicesCreateNestedManyWithoutPlansInput = {
    create?: XOR<invoicesCreateWithoutPlansInput, invoicesUncheckedCreateWithoutPlansInput> | invoicesCreateWithoutPlansInput[] | invoicesUncheckedCreateWithoutPlansInput[]
    connectOrCreate?: invoicesCreateOrConnectWithoutPlansInput | invoicesCreateOrConnectWithoutPlansInput[]
    createMany?: invoicesCreateManyPlansInputEnvelope
    connect?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
  }

  export type usersCreateNestedManyWithoutPlansInput = {
    create?: XOR<usersCreateWithoutPlansInput, usersUncheckedCreateWithoutPlansInput> | usersCreateWithoutPlansInput[] | usersUncheckedCreateWithoutPlansInput[]
    connectOrCreate?: usersCreateOrConnectWithoutPlansInput | usersCreateOrConnectWithoutPlansInput[]
    createMany?: usersCreateManyPlansInputEnvelope
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type cartUncheckedCreateNestedManyWithoutPlansInput = {
    create?: XOR<cartCreateWithoutPlansInput, cartUncheckedCreateWithoutPlansInput> | cartCreateWithoutPlansInput[] | cartUncheckedCreateWithoutPlansInput[]
    connectOrCreate?: cartCreateOrConnectWithoutPlansInput | cartCreateOrConnectWithoutPlansInput[]
    createMany?: cartCreateManyPlansInputEnvelope
    connect?: cartWhereUniqueInput | cartWhereUniqueInput[]
  }

  export type invoicesUncheckedCreateNestedManyWithoutPlansInput = {
    create?: XOR<invoicesCreateWithoutPlansInput, invoicesUncheckedCreateWithoutPlansInput> | invoicesCreateWithoutPlansInput[] | invoicesUncheckedCreateWithoutPlansInput[]
    connectOrCreate?: invoicesCreateOrConnectWithoutPlansInput | invoicesCreateOrConnectWithoutPlansInput[]
    createMany?: invoicesCreateManyPlansInputEnvelope
    connect?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
  }

  export type usersUncheckedCreateNestedManyWithoutPlansInput = {
    create?: XOR<usersCreateWithoutPlansInput, usersUncheckedCreateWithoutPlansInput> | usersCreateWithoutPlansInput[] | usersUncheckedCreateWithoutPlansInput[]
    connectOrCreate?: usersCreateOrConnectWithoutPlansInput | usersCreateOrConnectWithoutPlansInput[]
    createMany?: usersCreateManyPlansInputEnvelope
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type cartUpdateManyWithoutPlansNestedInput = {
    create?: XOR<cartCreateWithoutPlansInput, cartUncheckedCreateWithoutPlansInput> | cartCreateWithoutPlansInput[] | cartUncheckedCreateWithoutPlansInput[]
    connectOrCreate?: cartCreateOrConnectWithoutPlansInput | cartCreateOrConnectWithoutPlansInput[]
    upsert?: cartUpsertWithWhereUniqueWithoutPlansInput | cartUpsertWithWhereUniqueWithoutPlansInput[]
    createMany?: cartCreateManyPlansInputEnvelope
    set?: cartWhereUniqueInput | cartWhereUniqueInput[]
    disconnect?: cartWhereUniqueInput | cartWhereUniqueInput[]
    delete?: cartWhereUniqueInput | cartWhereUniqueInput[]
    connect?: cartWhereUniqueInput | cartWhereUniqueInput[]
    update?: cartUpdateWithWhereUniqueWithoutPlansInput | cartUpdateWithWhereUniqueWithoutPlansInput[]
    updateMany?: cartUpdateManyWithWhereWithoutPlansInput | cartUpdateManyWithWhereWithoutPlansInput[]
    deleteMany?: cartScalarWhereInput | cartScalarWhereInput[]
  }

  export type invoicesUpdateManyWithoutPlansNestedInput = {
    create?: XOR<invoicesCreateWithoutPlansInput, invoicesUncheckedCreateWithoutPlansInput> | invoicesCreateWithoutPlansInput[] | invoicesUncheckedCreateWithoutPlansInput[]
    connectOrCreate?: invoicesCreateOrConnectWithoutPlansInput | invoicesCreateOrConnectWithoutPlansInput[]
    upsert?: invoicesUpsertWithWhereUniqueWithoutPlansInput | invoicesUpsertWithWhereUniqueWithoutPlansInput[]
    createMany?: invoicesCreateManyPlansInputEnvelope
    set?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
    disconnect?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
    delete?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
    connect?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
    update?: invoicesUpdateWithWhereUniqueWithoutPlansInput | invoicesUpdateWithWhereUniqueWithoutPlansInput[]
    updateMany?: invoicesUpdateManyWithWhereWithoutPlansInput | invoicesUpdateManyWithWhereWithoutPlansInput[]
    deleteMany?: invoicesScalarWhereInput | invoicesScalarWhereInput[]
  }

  export type usersUpdateManyWithoutPlansNestedInput = {
    create?: XOR<usersCreateWithoutPlansInput, usersUncheckedCreateWithoutPlansInput> | usersCreateWithoutPlansInput[] | usersUncheckedCreateWithoutPlansInput[]
    connectOrCreate?: usersCreateOrConnectWithoutPlansInput | usersCreateOrConnectWithoutPlansInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutPlansInput | usersUpsertWithWhereUniqueWithoutPlansInput[]
    createMany?: usersCreateManyPlansInputEnvelope
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutPlansInput | usersUpdateWithWhereUniqueWithoutPlansInput[]
    updateMany?: usersUpdateManyWithWhereWithoutPlansInput | usersUpdateManyWithWhereWithoutPlansInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type cartUncheckedUpdateManyWithoutPlansNestedInput = {
    create?: XOR<cartCreateWithoutPlansInput, cartUncheckedCreateWithoutPlansInput> | cartCreateWithoutPlansInput[] | cartUncheckedCreateWithoutPlansInput[]
    connectOrCreate?: cartCreateOrConnectWithoutPlansInput | cartCreateOrConnectWithoutPlansInput[]
    upsert?: cartUpsertWithWhereUniqueWithoutPlansInput | cartUpsertWithWhereUniqueWithoutPlansInput[]
    createMany?: cartCreateManyPlansInputEnvelope
    set?: cartWhereUniqueInput | cartWhereUniqueInput[]
    disconnect?: cartWhereUniqueInput | cartWhereUniqueInput[]
    delete?: cartWhereUniqueInput | cartWhereUniqueInput[]
    connect?: cartWhereUniqueInput | cartWhereUniqueInput[]
    update?: cartUpdateWithWhereUniqueWithoutPlansInput | cartUpdateWithWhereUniqueWithoutPlansInput[]
    updateMany?: cartUpdateManyWithWhereWithoutPlansInput | cartUpdateManyWithWhereWithoutPlansInput[]
    deleteMany?: cartScalarWhereInput | cartScalarWhereInput[]
  }

  export type invoicesUncheckedUpdateManyWithoutPlansNestedInput = {
    create?: XOR<invoicesCreateWithoutPlansInput, invoicesUncheckedCreateWithoutPlansInput> | invoicesCreateWithoutPlansInput[] | invoicesUncheckedCreateWithoutPlansInput[]
    connectOrCreate?: invoicesCreateOrConnectWithoutPlansInput | invoicesCreateOrConnectWithoutPlansInput[]
    upsert?: invoicesUpsertWithWhereUniqueWithoutPlansInput | invoicesUpsertWithWhereUniqueWithoutPlansInput[]
    createMany?: invoicesCreateManyPlansInputEnvelope
    set?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
    disconnect?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
    delete?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
    connect?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
    update?: invoicesUpdateWithWhereUniqueWithoutPlansInput | invoicesUpdateWithWhereUniqueWithoutPlansInput[]
    updateMany?: invoicesUpdateManyWithWhereWithoutPlansInput | invoicesUpdateManyWithWhereWithoutPlansInput[]
    deleteMany?: invoicesScalarWhereInput | invoicesScalarWhereInput[]
  }

  export type usersUncheckedUpdateManyWithoutPlansNestedInput = {
    create?: XOR<usersCreateWithoutPlansInput, usersUncheckedCreateWithoutPlansInput> | usersCreateWithoutPlansInput[] | usersUncheckedCreateWithoutPlansInput[]
    connectOrCreate?: usersCreateOrConnectWithoutPlansInput | usersCreateOrConnectWithoutPlansInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutPlansInput | usersUpsertWithWhereUniqueWithoutPlansInput[]
    createMany?: usersCreateManyPlansInputEnvelope
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutPlansInput | usersUpdateWithWhereUniqueWithoutPlansInput[]
    updateMany?: usersUpdateManyWithWhereWithoutPlansInput | usersUpdateManyWithWhereWithoutPlansInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type cartCreateNestedManyWithoutUsersInput = {
    create?: XOR<cartCreateWithoutUsersInput, cartUncheckedCreateWithoutUsersInput> | cartCreateWithoutUsersInput[] | cartUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: cartCreateOrConnectWithoutUsersInput | cartCreateOrConnectWithoutUsersInput[]
    createMany?: cartCreateManyUsersInputEnvelope
    connect?: cartWhereUniqueInput | cartWhereUniqueInput[]
  }

  export type favoritesCreateNestedManyWithoutUsersInput = {
    create?: XOR<favoritesCreateWithoutUsersInput, favoritesUncheckedCreateWithoutUsersInput> | favoritesCreateWithoutUsersInput[] | favoritesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: favoritesCreateOrConnectWithoutUsersInput | favoritesCreateOrConnectWithoutUsersInput[]
    createMany?: favoritesCreateManyUsersInputEnvelope
    connect?: favoritesWhereUniqueInput | favoritesWhereUniqueInput[]
  }

  export type feedbacksCreateNestedManyWithoutUsersInput = {
    create?: XOR<feedbacksCreateWithoutUsersInput, feedbacksUncheckedCreateWithoutUsersInput> | feedbacksCreateWithoutUsersInput[] | feedbacksUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: feedbacksCreateOrConnectWithoutUsersInput | feedbacksCreateOrConnectWithoutUsersInput[]
    createMany?: feedbacksCreateManyUsersInputEnvelope
    connect?: feedbacksWhereUniqueInput | feedbacksWhereUniqueInput[]
  }

  export type invoicesCreateNestedManyWithoutUsersInput = {
    create?: XOR<invoicesCreateWithoutUsersInput, invoicesUncheckedCreateWithoutUsersInput> | invoicesCreateWithoutUsersInput[] | invoicesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: invoicesCreateOrConnectWithoutUsersInput | invoicesCreateOrConnectWithoutUsersInput[]
    createMany?: invoicesCreateManyUsersInputEnvelope
    connect?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
  }

  export type plansCreateNestedOneWithoutUsersInput = {
    create?: XOR<plansCreateWithoutUsersInput, plansUncheckedCreateWithoutUsersInput>
    connectOrCreate?: plansCreateOrConnectWithoutUsersInput
    connect?: plansWhereUniqueInput
  }

  export type viewsCreateNestedManyWithoutUsersInput = {
    create?: XOR<viewsCreateWithoutUsersInput, viewsUncheckedCreateWithoutUsersInput> | viewsCreateWithoutUsersInput[] | viewsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: viewsCreateOrConnectWithoutUsersInput | viewsCreateOrConnectWithoutUsersInput[]
    createMany?: viewsCreateManyUsersInputEnvelope
    connect?: viewsWhereUniqueInput | viewsWhereUniqueInput[]
  }

  export type cartUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<cartCreateWithoutUsersInput, cartUncheckedCreateWithoutUsersInput> | cartCreateWithoutUsersInput[] | cartUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: cartCreateOrConnectWithoutUsersInput | cartCreateOrConnectWithoutUsersInput[]
    createMany?: cartCreateManyUsersInputEnvelope
    connect?: cartWhereUniqueInput | cartWhereUniqueInput[]
  }

  export type favoritesUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<favoritesCreateWithoutUsersInput, favoritesUncheckedCreateWithoutUsersInput> | favoritesCreateWithoutUsersInput[] | favoritesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: favoritesCreateOrConnectWithoutUsersInput | favoritesCreateOrConnectWithoutUsersInput[]
    createMany?: favoritesCreateManyUsersInputEnvelope
    connect?: favoritesWhereUniqueInput | favoritesWhereUniqueInput[]
  }

  export type feedbacksUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<feedbacksCreateWithoutUsersInput, feedbacksUncheckedCreateWithoutUsersInput> | feedbacksCreateWithoutUsersInput[] | feedbacksUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: feedbacksCreateOrConnectWithoutUsersInput | feedbacksCreateOrConnectWithoutUsersInput[]
    createMany?: feedbacksCreateManyUsersInputEnvelope
    connect?: feedbacksWhereUniqueInput | feedbacksWhereUniqueInput[]
  }

  export type invoicesUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<invoicesCreateWithoutUsersInput, invoicesUncheckedCreateWithoutUsersInput> | invoicesCreateWithoutUsersInput[] | invoicesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: invoicesCreateOrConnectWithoutUsersInput | invoicesCreateOrConnectWithoutUsersInput[]
    createMany?: invoicesCreateManyUsersInputEnvelope
    connect?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
  }

  export type viewsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<viewsCreateWithoutUsersInput, viewsUncheckedCreateWithoutUsersInput> | viewsCreateWithoutUsersInput[] | viewsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: viewsCreateOrConnectWithoutUsersInput | viewsCreateOrConnectWithoutUsersInput[]
    createMany?: viewsCreateManyUsersInputEnvelope
    connect?: viewsWhereUniqueInput | viewsWhereUniqueInput[]
  }

  export type cartUpdateManyWithoutUsersNestedInput = {
    create?: XOR<cartCreateWithoutUsersInput, cartUncheckedCreateWithoutUsersInput> | cartCreateWithoutUsersInput[] | cartUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: cartCreateOrConnectWithoutUsersInput | cartCreateOrConnectWithoutUsersInput[]
    upsert?: cartUpsertWithWhereUniqueWithoutUsersInput | cartUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: cartCreateManyUsersInputEnvelope
    set?: cartWhereUniqueInput | cartWhereUniqueInput[]
    disconnect?: cartWhereUniqueInput | cartWhereUniqueInput[]
    delete?: cartWhereUniqueInput | cartWhereUniqueInput[]
    connect?: cartWhereUniqueInput | cartWhereUniqueInput[]
    update?: cartUpdateWithWhereUniqueWithoutUsersInput | cartUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: cartUpdateManyWithWhereWithoutUsersInput | cartUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: cartScalarWhereInput | cartScalarWhereInput[]
  }

  export type favoritesUpdateManyWithoutUsersNestedInput = {
    create?: XOR<favoritesCreateWithoutUsersInput, favoritesUncheckedCreateWithoutUsersInput> | favoritesCreateWithoutUsersInput[] | favoritesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: favoritesCreateOrConnectWithoutUsersInput | favoritesCreateOrConnectWithoutUsersInput[]
    upsert?: favoritesUpsertWithWhereUniqueWithoutUsersInput | favoritesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: favoritesCreateManyUsersInputEnvelope
    set?: favoritesWhereUniqueInput | favoritesWhereUniqueInput[]
    disconnect?: favoritesWhereUniqueInput | favoritesWhereUniqueInput[]
    delete?: favoritesWhereUniqueInput | favoritesWhereUniqueInput[]
    connect?: favoritesWhereUniqueInput | favoritesWhereUniqueInput[]
    update?: favoritesUpdateWithWhereUniqueWithoutUsersInput | favoritesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: favoritesUpdateManyWithWhereWithoutUsersInput | favoritesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: favoritesScalarWhereInput | favoritesScalarWhereInput[]
  }

  export type feedbacksUpdateManyWithoutUsersNestedInput = {
    create?: XOR<feedbacksCreateWithoutUsersInput, feedbacksUncheckedCreateWithoutUsersInput> | feedbacksCreateWithoutUsersInput[] | feedbacksUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: feedbacksCreateOrConnectWithoutUsersInput | feedbacksCreateOrConnectWithoutUsersInput[]
    upsert?: feedbacksUpsertWithWhereUniqueWithoutUsersInput | feedbacksUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: feedbacksCreateManyUsersInputEnvelope
    set?: feedbacksWhereUniqueInput | feedbacksWhereUniqueInput[]
    disconnect?: feedbacksWhereUniqueInput | feedbacksWhereUniqueInput[]
    delete?: feedbacksWhereUniqueInput | feedbacksWhereUniqueInput[]
    connect?: feedbacksWhereUniqueInput | feedbacksWhereUniqueInput[]
    update?: feedbacksUpdateWithWhereUniqueWithoutUsersInput | feedbacksUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: feedbacksUpdateManyWithWhereWithoutUsersInput | feedbacksUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: feedbacksScalarWhereInput | feedbacksScalarWhereInput[]
  }

  export type invoicesUpdateManyWithoutUsersNestedInput = {
    create?: XOR<invoicesCreateWithoutUsersInput, invoicesUncheckedCreateWithoutUsersInput> | invoicesCreateWithoutUsersInput[] | invoicesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: invoicesCreateOrConnectWithoutUsersInput | invoicesCreateOrConnectWithoutUsersInput[]
    upsert?: invoicesUpsertWithWhereUniqueWithoutUsersInput | invoicesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: invoicesCreateManyUsersInputEnvelope
    set?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
    disconnect?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
    delete?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
    connect?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
    update?: invoicesUpdateWithWhereUniqueWithoutUsersInput | invoicesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: invoicesUpdateManyWithWhereWithoutUsersInput | invoicesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: invoicesScalarWhereInput | invoicesScalarWhereInput[]
  }

  export type plansUpdateOneWithoutUsersNestedInput = {
    create?: XOR<plansCreateWithoutUsersInput, plansUncheckedCreateWithoutUsersInput>
    connectOrCreate?: plansCreateOrConnectWithoutUsersInput
    upsert?: plansUpsertWithoutUsersInput
    disconnect?: plansWhereInput | boolean
    delete?: plansWhereInput | boolean
    connect?: plansWhereUniqueInput
    update?: XOR<XOR<plansUpdateToOneWithWhereWithoutUsersInput, plansUpdateWithoutUsersInput>, plansUncheckedUpdateWithoutUsersInput>
  }

  export type viewsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<viewsCreateWithoutUsersInput, viewsUncheckedCreateWithoutUsersInput> | viewsCreateWithoutUsersInput[] | viewsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: viewsCreateOrConnectWithoutUsersInput | viewsCreateOrConnectWithoutUsersInput[]
    upsert?: viewsUpsertWithWhereUniqueWithoutUsersInput | viewsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: viewsCreateManyUsersInputEnvelope
    set?: viewsWhereUniqueInput | viewsWhereUniqueInput[]
    disconnect?: viewsWhereUniqueInput | viewsWhereUniqueInput[]
    delete?: viewsWhereUniqueInput | viewsWhereUniqueInput[]
    connect?: viewsWhereUniqueInput | viewsWhereUniqueInput[]
    update?: viewsUpdateWithWhereUniqueWithoutUsersInput | viewsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: viewsUpdateManyWithWhereWithoutUsersInput | viewsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: viewsScalarWhereInput | viewsScalarWhereInput[]
  }

  export type cartUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<cartCreateWithoutUsersInput, cartUncheckedCreateWithoutUsersInput> | cartCreateWithoutUsersInput[] | cartUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: cartCreateOrConnectWithoutUsersInput | cartCreateOrConnectWithoutUsersInput[]
    upsert?: cartUpsertWithWhereUniqueWithoutUsersInput | cartUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: cartCreateManyUsersInputEnvelope
    set?: cartWhereUniqueInput | cartWhereUniqueInput[]
    disconnect?: cartWhereUniqueInput | cartWhereUniqueInput[]
    delete?: cartWhereUniqueInput | cartWhereUniqueInput[]
    connect?: cartWhereUniqueInput | cartWhereUniqueInput[]
    update?: cartUpdateWithWhereUniqueWithoutUsersInput | cartUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: cartUpdateManyWithWhereWithoutUsersInput | cartUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: cartScalarWhereInput | cartScalarWhereInput[]
  }

  export type favoritesUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<favoritesCreateWithoutUsersInput, favoritesUncheckedCreateWithoutUsersInput> | favoritesCreateWithoutUsersInput[] | favoritesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: favoritesCreateOrConnectWithoutUsersInput | favoritesCreateOrConnectWithoutUsersInput[]
    upsert?: favoritesUpsertWithWhereUniqueWithoutUsersInput | favoritesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: favoritesCreateManyUsersInputEnvelope
    set?: favoritesWhereUniqueInput | favoritesWhereUniqueInput[]
    disconnect?: favoritesWhereUniqueInput | favoritesWhereUniqueInput[]
    delete?: favoritesWhereUniqueInput | favoritesWhereUniqueInput[]
    connect?: favoritesWhereUniqueInput | favoritesWhereUniqueInput[]
    update?: favoritesUpdateWithWhereUniqueWithoutUsersInput | favoritesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: favoritesUpdateManyWithWhereWithoutUsersInput | favoritesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: favoritesScalarWhereInput | favoritesScalarWhereInput[]
  }

  export type feedbacksUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<feedbacksCreateWithoutUsersInput, feedbacksUncheckedCreateWithoutUsersInput> | feedbacksCreateWithoutUsersInput[] | feedbacksUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: feedbacksCreateOrConnectWithoutUsersInput | feedbacksCreateOrConnectWithoutUsersInput[]
    upsert?: feedbacksUpsertWithWhereUniqueWithoutUsersInput | feedbacksUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: feedbacksCreateManyUsersInputEnvelope
    set?: feedbacksWhereUniqueInput | feedbacksWhereUniqueInput[]
    disconnect?: feedbacksWhereUniqueInput | feedbacksWhereUniqueInput[]
    delete?: feedbacksWhereUniqueInput | feedbacksWhereUniqueInput[]
    connect?: feedbacksWhereUniqueInput | feedbacksWhereUniqueInput[]
    update?: feedbacksUpdateWithWhereUniqueWithoutUsersInput | feedbacksUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: feedbacksUpdateManyWithWhereWithoutUsersInput | feedbacksUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: feedbacksScalarWhereInput | feedbacksScalarWhereInput[]
  }

  export type invoicesUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<invoicesCreateWithoutUsersInput, invoicesUncheckedCreateWithoutUsersInput> | invoicesCreateWithoutUsersInput[] | invoicesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: invoicesCreateOrConnectWithoutUsersInput | invoicesCreateOrConnectWithoutUsersInput[]
    upsert?: invoicesUpsertWithWhereUniqueWithoutUsersInput | invoicesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: invoicesCreateManyUsersInputEnvelope
    set?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
    disconnect?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
    delete?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
    connect?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
    update?: invoicesUpdateWithWhereUniqueWithoutUsersInput | invoicesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: invoicesUpdateManyWithWhereWithoutUsersInput | invoicesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: invoicesScalarWhereInput | invoicesScalarWhereInput[]
  }

  export type viewsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<viewsCreateWithoutUsersInput, viewsUncheckedCreateWithoutUsersInput> | viewsCreateWithoutUsersInput[] | viewsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: viewsCreateOrConnectWithoutUsersInput | viewsCreateOrConnectWithoutUsersInput[]
    upsert?: viewsUpsertWithWhereUniqueWithoutUsersInput | viewsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: viewsCreateManyUsersInputEnvelope
    set?: viewsWhereUniqueInput | viewsWhereUniqueInput[]
    disconnect?: viewsWhereUniqueInput | viewsWhereUniqueInput[]
    delete?: viewsWhereUniqueInput | viewsWhereUniqueInput[]
    connect?: viewsWhereUniqueInput | viewsWhereUniqueInput[]
    update?: viewsUpdateWithWhereUniqueWithoutUsersInput | viewsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: viewsUpdateManyWithWhereWithoutUsersInput | viewsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: viewsScalarWhereInput | viewsScalarWhereInput[]
  }

  export type episodesCreateNestedOneWithoutVideo_filesInput = {
    create?: XOR<episodesCreateWithoutVideo_filesInput, episodesUncheckedCreateWithoutVideo_filesInput>
    connectOrCreate?: episodesCreateOrConnectWithoutVideo_filesInput
    connect?: episodesWhereUniqueInput
  }

  export type episodesUpdateOneWithoutVideo_filesNestedInput = {
    create?: XOR<episodesCreateWithoutVideo_filesInput, episodesUncheckedCreateWithoutVideo_filesInput>
    connectOrCreate?: episodesCreateOrConnectWithoutVideo_filesInput
    upsert?: episodesUpsertWithoutVideo_filesInput
    disconnect?: episodesWhereInput | boolean
    delete?: episodesWhereInput | boolean
    connect?: episodesWhereUniqueInput
    update?: XOR<XOR<episodesUpdateToOneWithWhereWithoutVideo_filesInput, episodesUpdateWithoutVideo_filesInput>, episodesUncheckedUpdateWithoutVideo_filesInput>
  }

  export type filmsCreateNestedOneWithoutViewsInput = {
    create?: XOR<filmsCreateWithoutViewsInput, filmsUncheckedCreateWithoutViewsInput>
    connectOrCreate?: filmsCreateOrConnectWithoutViewsInput
    connect?: filmsWhereUniqueInput
  }

  export type episodesCreateNestedOneWithoutViewsInput = {
    create?: XOR<episodesCreateWithoutViewsInput, episodesUncheckedCreateWithoutViewsInput>
    connectOrCreate?: episodesCreateOrConnectWithoutViewsInput
    connect?: episodesWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutViewsInput = {
    create?: XOR<usersCreateWithoutViewsInput, usersUncheckedCreateWithoutViewsInput>
    connectOrCreate?: usersCreateOrConnectWithoutViewsInput
    connect?: usersWhereUniqueInput
  }

  export type filmsUpdateOneWithoutViewsNestedInput = {
    create?: XOR<filmsCreateWithoutViewsInput, filmsUncheckedCreateWithoutViewsInput>
    connectOrCreate?: filmsCreateOrConnectWithoutViewsInput
    upsert?: filmsUpsertWithoutViewsInput
    disconnect?: filmsWhereInput | boolean
    delete?: filmsWhereInput | boolean
    connect?: filmsWhereUniqueInput
    update?: XOR<XOR<filmsUpdateToOneWithWhereWithoutViewsInput, filmsUpdateWithoutViewsInput>, filmsUncheckedUpdateWithoutViewsInput>
  }

  export type episodesUpdateOneWithoutViewsNestedInput = {
    create?: XOR<episodesCreateWithoutViewsInput, episodesUncheckedCreateWithoutViewsInput>
    connectOrCreate?: episodesCreateOrConnectWithoutViewsInput
    upsert?: episodesUpsertWithoutViewsInput
    disconnect?: episodesWhereInput | boolean
    delete?: episodesWhereInput | boolean
    connect?: episodesWhereUniqueInput
    update?: XOR<XOR<episodesUpdateToOneWithWhereWithoutViewsInput, episodesUpdateWithoutViewsInput>, episodesUncheckedUpdateWithoutViewsInput>
  }

  export type usersUpdateOneWithoutViewsNestedInput = {
    create?: XOR<usersCreateWithoutViewsInput, usersUncheckedCreateWithoutViewsInput>
    connectOrCreate?: usersCreateOrConnectWithoutViewsInput
    upsert?: usersUpsertWithoutViewsInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutViewsInput, usersUpdateWithoutViewsInput>, usersUncheckedUpdateWithoutViewsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type usersCreateWithoutCartInput = {
    username?: string | null
    password?: string | null
    role?: string | null
    fullname?: string | null
    phonenumber?: string | null
    email?: string | null
    city?: string | null
    gender?: string | null
    interest?: string | null
    birthday?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    favorites?: favoritesCreateNestedManyWithoutUsersInput
    feedbacks?: feedbacksCreateNestedManyWithoutUsersInput
    invoices?: invoicesCreateNestedManyWithoutUsersInput
    plans?: plansCreateNestedOneWithoutUsersInput
    views?: viewsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutCartInput = {
    id?: number
    plan_id?: number | null
    username?: string | null
    password?: string | null
    role?: string | null
    fullname?: string | null
    phonenumber?: string | null
    email?: string | null
    city?: string | null
    gender?: string | null
    interest?: string | null
    birthday?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    favorites?: favoritesUncheckedCreateNestedManyWithoutUsersInput
    feedbacks?: feedbacksUncheckedCreateNestedManyWithoutUsersInput
    invoices?: invoicesUncheckedCreateNestedManyWithoutUsersInput
    views?: viewsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutCartInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutCartInput, usersUncheckedCreateWithoutCartInput>
  }

  export type plansCreateWithoutCartInput = {
    name?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
    duration_days?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    invoices?: invoicesCreateNestedManyWithoutPlansInput
    users?: usersCreateNestedManyWithoutPlansInput
  }

  export type plansUncheckedCreateWithoutCartInput = {
    id?: number
    name?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
    duration_days?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    invoices?: invoicesUncheckedCreateNestedManyWithoutPlansInput
    users?: usersUncheckedCreateNestedManyWithoutPlansInput
  }

  export type plansCreateOrConnectWithoutCartInput = {
    where: plansWhereUniqueInput
    create: XOR<plansCreateWithoutCartInput, plansUncheckedCreateWithoutCartInput>
  }

  export type usersUpsertWithoutCartInput = {
    update: XOR<usersUpdateWithoutCartInput, usersUncheckedUpdateWithoutCartInput>
    create: XOR<usersCreateWithoutCartInput, usersUncheckedCreateWithoutCartInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutCartInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutCartInput, usersUncheckedUpdateWithoutCartInput>
  }

  export type usersUpdateWithoutCartInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    phonenumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    interest?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    favorites?: favoritesUpdateManyWithoutUsersNestedInput
    feedbacks?: feedbacksUpdateManyWithoutUsersNestedInput
    invoices?: invoicesUpdateManyWithoutUsersNestedInput
    plans?: plansUpdateOneWithoutUsersNestedInput
    views?: viewsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutCartInput = {
    id?: IntFieldUpdateOperationsInput | number
    plan_id?: NullableIntFieldUpdateOperationsInput | number | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    phonenumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    interest?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    favorites?: favoritesUncheckedUpdateManyWithoutUsersNestedInput
    feedbacks?: feedbacksUncheckedUpdateManyWithoutUsersNestedInput
    invoices?: invoicesUncheckedUpdateManyWithoutUsersNestedInput
    views?: viewsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type plansUpsertWithoutCartInput = {
    update: XOR<plansUpdateWithoutCartInput, plansUncheckedUpdateWithoutCartInput>
    create: XOR<plansCreateWithoutCartInput, plansUncheckedCreateWithoutCartInput>
    where?: plansWhereInput
  }

  export type plansUpdateToOneWithWhereWithoutCartInput = {
    where?: plansWhereInput
    data: XOR<plansUpdateWithoutCartInput, plansUncheckedUpdateWithoutCartInput>
  }

  export type plansUpdateWithoutCartInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    duration_days?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    invoices?: invoicesUpdateManyWithoutPlansNestedInput
    users?: usersUpdateManyWithoutPlansNestedInput
  }

  export type plansUncheckedUpdateWithoutCartInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    duration_days?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    invoices?: invoicesUncheckedUpdateManyWithoutPlansNestedInput
    users?: usersUncheckedUpdateManyWithoutPlansNestedInput
  }

  export type filmsCreateWithoutEpisodesInput = {
    title?: string | null
    poster_url?: string | null
    description?: string | null
    year?: number | null
    country?: string | null
    duration?: string | null
    poster_video_url?: string | null
    actor?: string | null
    is_series?: boolean | null
    directeur?: string | null
    age_rating?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    view_count?: number | null
    average_rating?: Decimal | DecimalJsLike | number | string | null
    favorites?: favoritesCreateNestedManyWithoutFilmsInput
    feedbacks?: feedbacksCreateNestedManyWithoutFilmsInput
    film_genres?: film_genresCreateNestedManyWithoutFilmsInput
    views?: viewsCreateNestedManyWithoutFilmsInput
  }

  export type filmsUncheckedCreateWithoutEpisodesInput = {
    id?: number
    title?: string | null
    poster_url?: string | null
    description?: string | null
    year?: number | null
    country?: string | null
    duration?: string | null
    poster_video_url?: string | null
    actor?: string | null
    is_series?: boolean | null
    directeur?: string | null
    age_rating?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    view_count?: number | null
    average_rating?: Decimal | DecimalJsLike | number | string | null
    favorites?: favoritesUncheckedCreateNestedManyWithoutFilmsInput
    feedbacks?: feedbacksUncheckedCreateNestedManyWithoutFilmsInput
    film_genres?: film_genresUncheckedCreateNestedManyWithoutFilmsInput
    views?: viewsUncheckedCreateNestedManyWithoutFilmsInput
  }

  export type filmsCreateOrConnectWithoutEpisodesInput = {
    where: filmsWhereUniqueInput
    create: XOR<filmsCreateWithoutEpisodesInput, filmsUncheckedCreateWithoutEpisodesInput>
  }

  export type video_filesCreateWithoutEpisodesInput = {
    quality?: string | null
    file_url?: string | null
  }

  export type video_filesUncheckedCreateWithoutEpisodesInput = {
    id?: number
    quality?: string | null
    file_url?: string | null
  }

  export type video_filesCreateOrConnectWithoutEpisodesInput = {
    where: video_filesWhereUniqueInput
    create: XOR<video_filesCreateWithoutEpisodesInput, video_filesUncheckedCreateWithoutEpisodesInput>
  }

  export type video_filesCreateManyEpisodesInputEnvelope = {
    data: video_filesCreateManyEpisodesInput | video_filesCreateManyEpisodesInput[]
    skipDuplicates?: boolean
  }

  export type viewsCreateWithoutEpisodesInput = {
    viewed_at?: Date | string
    progress?: number | null
    films?: filmsCreateNestedOneWithoutViewsInput
    users?: usersCreateNestedOneWithoutViewsInput
  }

  export type viewsUncheckedCreateWithoutEpisodesInput = {
    id?: number
    film_id?: number | null
    user_id?: number | null
    viewed_at?: Date | string
    progress?: number | null
  }

  export type viewsCreateOrConnectWithoutEpisodesInput = {
    where: viewsWhereUniqueInput
    create: XOR<viewsCreateWithoutEpisodesInput, viewsUncheckedCreateWithoutEpisodesInput>
  }

  export type viewsCreateManyEpisodesInputEnvelope = {
    data: viewsCreateManyEpisodesInput | viewsCreateManyEpisodesInput[]
    skipDuplicates?: boolean
  }

  export type filmsUpsertWithoutEpisodesInput = {
    update: XOR<filmsUpdateWithoutEpisodesInput, filmsUncheckedUpdateWithoutEpisodesInput>
    create: XOR<filmsCreateWithoutEpisodesInput, filmsUncheckedCreateWithoutEpisodesInput>
    where?: filmsWhereInput
  }

  export type filmsUpdateToOneWithWhereWithoutEpisodesInput = {
    where?: filmsWhereInput
    data: XOR<filmsUpdateWithoutEpisodesInput, filmsUncheckedUpdateWithoutEpisodesInput>
  }

  export type filmsUpdateWithoutEpisodesInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    poster_url?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    poster_video_url?: NullableStringFieldUpdateOperationsInput | string | null
    actor?: NullableStringFieldUpdateOperationsInput | string | null
    is_series?: NullableBoolFieldUpdateOperationsInput | boolean | null
    directeur?: NullableStringFieldUpdateOperationsInput | string | null
    age_rating?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    view_count?: NullableIntFieldUpdateOperationsInput | number | null
    average_rating?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    favorites?: favoritesUpdateManyWithoutFilmsNestedInput
    feedbacks?: feedbacksUpdateManyWithoutFilmsNestedInput
    film_genres?: film_genresUpdateManyWithoutFilmsNestedInput
    views?: viewsUpdateManyWithoutFilmsNestedInput
  }

  export type filmsUncheckedUpdateWithoutEpisodesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    poster_url?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    poster_video_url?: NullableStringFieldUpdateOperationsInput | string | null
    actor?: NullableStringFieldUpdateOperationsInput | string | null
    is_series?: NullableBoolFieldUpdateOperationsInput | boolean | null
    directeur?: NullableStringFieldUpdateOperationsInput | string | null
    age_rating?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    view_count?: NullableIntFieldUpdateOperationsInput | number | null
    average_rating?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    favorites?: favoritesUncheckedUpdateManyWithoutFilmsNestedInput
    feedbacks?: feedbacksUncheckedUpdateManyWithoutFilmsNestedInput
    film_genres?: film_genresUncheckedUpdateManyWithoutFilmsNestedInput
    views?: viewsUncheckedUpdateManyWithoutFilmsNestedInput
  }

  export type video_filesUpsertWithWhereUniqueWithoutEpisodesInput = {
    where: video_filesWhereUniqueInput
    update: XOR<video_filesUpdateWithoutEpisodesInput, video_filesUncheckedUpdateWithoutEpisodesInput>
    create: XOR<video_filesCreateWithoutEpisodesInput, video_filesUncheckedCreateWithoutEpisodesInput>
  }

  export type video_filesUpdateWithWhereUniqueWithoutEpisodesInput = {
    where: video_filesWhereUniqueInput
    data: XOR<video_filesUpdateWithoutEpisodesInput, video_filesUncheckedUpdateWithoutEpisodesInput>
  }

  export type video_filesUpdateManyWithWhereWithoutEpisodesInput = {
    where: video_filesScalarWhereInput
    data: XOR<video_filesUpdateManyMutationInput, video_filesUncheckedUpdateManyWithoutEpisodesInput>
  }

  export type video_filesScalarWhereInput = {
    AND?: video_filesScalarWhereInput | video_filesScalarWhereInput[]
    OR?: video_filesScalarWhereInput[]
    NOT?: video_filesScalarWhereInput | video_filesScalarWhereInput[]
    id?: IntFilter<"video_files"> | number
    episode_id?: IntNullableFilter<"video_files"> | number | null
    quality?: StringNullableFilter<"video_files"> | string | null
    file_url?: StringNullableFilter<"video_files"> | string | null
  }

  export type viewsUpsertWithWhereUniqueWithoutEpisodesInput = {
    where: viewsWhereUniqueInput
    update: XOR<viewsUpdateWithoutEpisodesInput, viewsUncheckedUpdateWithoutEpisodesInput>
    create: XOR<viewsCreateWithoutEpisodesInput, viewsUncheckedCreateWithoutEpisodesInput>
  }

  export type viewsUpdateWithWhereUniqueWithoutEpisodesInput = {
    where: viewsWhereUniqueInput
    data: XOR<viewsUpdateWithoutEpisodesInput, viewsUncheckedUpdateWithoutEpisodesInput>
  }

  export type viewsUpdateManyWithWhereWithoutEpisodesInput = {
    where: viewsScalarWhereInput
    data: XOR<viewsUpdateManyMutationInput, viewsUncheckedUpdateManyWithoutEpisodesInput>
  }

  export type viewsScalarWhereInput = {
    AND?: viewsScalarWhereInput | viewsScalarWhereInput[]
    OR?: viewsScalarWhereInput[]
    NOT?: viewsScalarWhereInput | viewsScalarWhereInput[]
    id?: IntFilter<"views"> | number
    film_id?: IntNullableFilter<"views"> | number | null
    episode_id?: IntNullableFilter<"views"> | number | null
    user_id?: IntNullableFilter<"views"> | number | null
    viewed_at?: DateTimeFilter<"views"> | Date | string
    progress?: IntNullableFilter<"views"> | number | null
  }

  export type filmsCreateWithoutFavoritesInput = {
    title?: string | null
    poster_url?: string | null
    description?: string | null
    year?: number | null
    country?: string | null
    duration?: string | null
    poster_video_url?: string | null
    actor?: string | null
    is_series?: boolean | null
    directeur?: string | null
    age_rating?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    view_count?: number | null
    average_rating?: Decimal | DecimalJsLike | number | string | null
    episodes?: episodesCreateNestedManyWithoutFilmsInput
    feedbacks?: feedbacksCreateNestedManyWithoutFilmsInput
    film_genres?: film_genresCreateNestedManyWithoutFilmsInput
    views?: viewsCreateNestedManyWithoutFilmsInput
  }

  export type filmsUncheckedCreateWithoutFavoritesInput = {
    id?: number
    title?: string | null
    poster_url?: string | null
    description?: string | null
    year?: number | null
    country?: string | null
    duration?: string | null
    poster_video_url?: string | null
    actor?: string | null
    is_series?: boolean | null
    directeur?: string | null
    age_rating?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    view_count?: number | null
    average_rating?: Decimal | DecimalJsLike | number | string | null
    episodes?: episodesUncheckedCreateNestedManyWithoutFilmsInput
    feedbacks?: feedbacksUncheckedCreateNestedManyWithoutFilmsInput
    film_genres?: film_genresUncheckedCreateNestedManyWithoutFilmsInput
    views?: viewsUncheckedCreateNestedManyWithoutFilmsInput
  }

  export type filmsCreateOrConnectWithoutFavoritesInput = {
    where: filmsWhereUniqueInput
    create: XOR<filmsCreateWithoutFavoritesInput, filmsUncheckedCreateWithoutFavoritesInput>
  }

  export type usersCreateWithoutFavoritesInput = {
    username?: string | null
    password?: string | null
    role?: string | null
    fullname?: string | null
    phonenumber?: string | null
    email?: string | null
    city?: string | null
    gender?: string | null
    interest?: string | null
    birthday?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    cart?: cartCreateNestedManyWithoutUsersInput
    feedbacks?: feedbacksCreateNestedManyWithoutUsersInput
    invoices?: invoicesCreateNestedManyWithoutUsersInput
    plans?: plansCreateNestedOneWithoutUsersInput
    views?: viewsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutFavoritesInput = {
    id?: number
    plan_id?: number | null
    username?: string | null
    password?: string | null
    role?: string | null
    fullname?: string | null
    phonenumber?: string | null
    email?: string | null
    city?: string | null
    gender?: string | null
    interest?: string | null
    birthday?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    cart?: cartUncheckedCreateNestedManyWithoutUsersInput
    feedbacks?: feedbacksUncheckedCreateNestedManyWithoutUsersInput
    invoices?: invoicesUncheckedCreateNestedManyWithoutUsersInput
    views?: viewsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutFavoritesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutFavoritesInput, usersUncheckedCreateWithoutFavoritesInput>
  }

  export type filmsUpsertWithoutFavoritesInput = {
    update: XOR<filmsUpdateWithoutFavoritesInput, filmsUncheckedUpdateWithoutFavoritesInput>
    create: XOR<filmsCreateWithoutFavoritesInput, filmsUncheckedCreateWithoutFavoritesInput>
    where?: filmsWhereInput
  }

  export type filmsUpdateToOneWithWhereWithoutFavoritesInput = {
    where?: filmsWhereInput
    data: XOR<filmsUpdateWithoutFavoritesInput, filmsUncheckedUpdateWithoutFavoritesInput>
  }

  export type filmsUpdateWithoutFavoritesInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    poster_url?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    poster_video_url?: NullableStringFieldUpdateOperationsInput | string | null
    actor?: NullableStringFieldUpdateOperationsInput | string | null
    is_series?: NullableBoolFieldUpdateOperationsInput | boolean | null
    directeur?: NullableStringFieldUpdateOperationsInput | string | null
    age_rating?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    view_count?: NullableIntFieldUpdateOperationsInput | number | null
    average_rating?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    episodes?: episodesUpdateManyWithoutFilmsNestedInput
    feedbacks?: feedbacksUpdateManyWithoutFilmsNestedInput
    film_genres?: film_genresUpdateManyWithoutFilmsNestedInput
    views?: viewsUpdateManyWithoutFilmsNestedInput
  }

  export type filmsUncheckedUpdateWithoutFavoritesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    poster_url?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    poster_video_url?: NullableStringFieldUpdateOperationsInput | string | null
    actor?: NullableStringFieldUpdateOperationsInput | string | null
    is_series?: NullableBoolFieldUpdateOperationsInput | boolean | null
    directeur?: NullableStringFieldUpdateOperationsInput | string | null
    age_rating?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    view_count?: NullableIntFieldUpdateOperationsInput | number | null
    average_rating?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    episodes?: episodesUncheckedUpdateManyWithoutFilmsNestedInput
    feedbacks?: feedbacksUncheckedUpdateManyWithoutFilmsNestedInput
    film_genres?: film_genresUncheckedUpdateManyWithoutFilmsNestedInput
    views?: viewsUncheckedUpdateManyWithoutFilmsNestedInput
  }

  export type usersUpsertWithoutFavoritesInput = {
    update: XOR<usersUpdateWithoutFavoritesInput, usersUncheckedUpdateWithoutFavoritesInput>
    create: XOR<usersCreateWithoutFavoritesInput, usersUncheckedCreateWithoutFavoritesInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutFavoritesInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutFavoritesInput, usersUncheckedUpdateWithoutFavoritesInput>
  }

  export type usersUpdateWithoutFavoritesInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    phonenumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    interest?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cart?: cartUpdateManyWithoutUsersNestedInput
    feedbacks?: feedbacksUpdateManyWithoutUsersNestedInput
    invoices?: invoicesUpdateManyWithoutUsersNestedInput
    plans?: plansUpdateOneWithoutUsersNestedInput
    views?: viewsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutFavoritesInput = {
    id?: IntFieldUpdateOperationsInput | number
    plan_id?: NullableIntFieldUpdateOperationsInput | number | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    phonenumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    interest?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cart?: cartUncheckedUpdateManyWithoutUsersNestedInput
    feedbacks?: feedbacksUncheckedUpdateManyWithoutUsersNestedInput
    invoices?: invoicesUncheckedUpdateManyWithoutUsersNestedInput
    views?: viewsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type filmsCreateWithoutFeedbacksInput = {
    title?: string | null
    poster_url?: string | null
    description?: string | null
    year?: number | null
    country?: string | null
    duration?: string | null
    poster_video_url?: string | null
    actor?: string | null
    is_series?: boolean | null
    directeur?: string | null
    age_rating?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    view_count?: number | null
    average_rating?: Decimal | DecimalJsLike | number | string | null
    episodes?: episodesCreateNestedManyWithoutFilmsInput
    favorites?: favoritesCreateNestedManyWithoutFilmsInput
    film_genres?: film_genresCreateNestedManyWithoutFilmsInput
    views?: viewsCreateNestedManyWithoutFilmsInput
  }

  export type filmsUncheckedCreateWithoutFeedbacksInput = {
    id?: number
    title?: string | null
    poster_url?: string | null
    description?: string | null
    year?: number | null
    country?: string | null
    duration?: string | null
    poster_video_url?: string | null
    actor?: string | null
    is_series?: boolean | null
    directeur?: string | null
    age_rating?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    view_count?: number | null
    average_rating?: Decimal | DecimalJsLike | number | string | null
    episodes?: episodesUncheckedCreateNestedManyWithoutFilmsInput
    favorites?: favoritesUncheckedCreateNestedManyWithoutFilmsInput
    film_genres?: film_genresUncheckedCreateNestedManyWithoutFilmsInput
    views?: viewsUncheckedCreateNestedManyWithoutFilmsInput
  }

  export type filmsCreateOrConnectWithoutFeedbacksInput = {
    where: filmsWhereUniqueInput
    create: XOR<filmsCreateWithoutFeedbacksInput, filmsUncheckedCreateWithoutFeedbacksInput>
  }

  export type usersCreateWithoutFeedbacksInput = {
    username?: string | null
    password?: string | null
    role?: string | null
    fullname?: string | null
    phonenumber?: string | null
    email?: string | null
    city?: string | null
    gender?: string | null
    interest?: string | null
    birthday?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    cart?: cartCreateNestedManyWithoutUsersInput
    favorites?: favoritesCreateNestedManyWithoutUsersInput
    invoices?: invoicesCreateNestedManyWithoutUsersInput
    plans?: plansCreateNestedOneWithoutUsersInput
    views?: viewsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutFeedbacksInput = {
    id?: number
    plan_id?: number | null
    username?: string | null
    password?: string | null
    role?: string | null
    fullname?: string | null
    phonenumber?: string | null
    email?: string | null
    city?: string | null
    gender?: string | null
    interest?: string | null
    birthday?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    cart?: cartUncheckedCreateNestedManyWithoutUsersInput
    favorites?: favoritesUncheckedCreateNestedManyWithoutUsersInput
    invoices?: invoicesUncheckedCreateNestedManyWithoutUsersInput
    views?: viewsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutFeedbacksInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutFeedbacksInput, usersUncheckedCreateWithoutFeedbacksInput>
  }

  export type filmsUpsertWithoutFeedbacksInput = {
    update: XOR<filmsUpdateWithoutFeedbacksInput, filmsUncheckedUpdateWithoutFeedbacksInput>
    create: XOR<filmsCreateWithoutFeedbacksInput, filmsUncheckedCreateWithoutFeedbacksInput>
    where?: filmsWhereInput
  }

  export type filmsUpdateToOneWithWhereWithoutFeedbacksInput = {
    where?: filmsWhereInput
    data: XOR<filmsUpdateWithoutFeedbacksInput, filmsUncheckedUpdateWithoutFeedbacksInput>
  }

  export type filmsUpdateWithoutFeedbacksInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    poster_url?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    poster_video_url?: NullableStringFieldUpdateOperationsInput | string | null
    actor?: NullableStringFieldUpdateOperationsInput | string | null
    is_series?: NullableBoolFieldUpdateOperationsInput | boolean | null
    directeur?: NullableStringFieldUpdateOperationsInput | string | null
    age_rating?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    view_count?: NullableIntFieldUpdateOperationsInput | number | null
    average_rating?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    episodes?: episodesUpdateManyWithoutFilmsNestedInput
    favorites?: favoritesUpdateManyWithoutFilmsNestedInput
    film_genres?: film_genresUpdateManyWithoutFilmsNestedInput
    views?: viewsUpdateManyWithoutFilmsNestedInput
  }

  export type filmsUncheckedUpdateWithoutFeedbacksInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    poster_url?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    poster_video_url?: NullableStringFieldUpdateOperationsInput | string | null
    actor?: NullableStringFieldUpdateOperationsInput | string | null
    is_series?: NullableBoolFieldUpdateOperationsInput | boolean | null
    directeur?: NullableStringFieldUpdateOperationsInput | string | null
    age_rating?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    view_count?: NullableIntFieldUpdateOperationsInput | number | null
    average_rating?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    episodes?: episodesUncheckedUpdateManyWithoutFilmsNestedInput
    favorites?: favoritesUncheckedUpdateManyWithoutFilmsNestedInput
    film_genres?: film_genresUncheckedUpdateManyWithoutFilmsNestedInput
    views?: viewsUncheckedUpdateManyWithoutFilmsNestedInput
  }

  export type usersUpsertWithoutFeedbacksInput = {
    update: XOR<usersUpdateWithoutFeedbacksInput, usersUncheckedUpdateWithoutFeedbacksInput>
    create: XOR<usersCreateWithoutFeedbacksInput, usersUncheckedCreateWithoutFeedbacksInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutFeedbacksInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutFeedbacksInput, usersUncheckedUpdateWithoutFeedbacksInput>
  }

  export type usersUpdateWithoutFeedbacksInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    phonenumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    interest?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cart?: cartUpdateManyWithoutUsersNestedInput
    favorites?: favoritesUpdateManyWithoutUsersNestedInput
    invoices?: invoicesUpdateManyWithoutUsersNestedInput
    plans?: plansUpdateOneWithoutUsersNestedInput
    views?: viewsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutFeedbacksInput = {
    id?: IntFieldUpdateOperationsInput | number
    plan_id?: NullableIntFieldUpdateOperationsInput | number | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    phonenumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    interest?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cart?: cartUncheckedUpdateManyWithoutUsersNestedInput
    favorites?: favoritesUncheckedUpdateManyWithoutUsersNestedInput
    invoices?: invoicesUncheckedUpdateManyWithoutUsersNestedInput
    views?: viewsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type genresCreateWithoutFilm_genresInput = {
    name?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type genresUncheckedCreateWithoutFilm_genresInput = {
    id?: number
    name?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type genresCreateOrConnectWithoutFilm_genresInput = {
    where: genresWhereUniqueInput
    create: XOR<genresCreateWithoutFilm_genresInput, genresUncheckedCreateWithoutFilm_genresInput>
  }

  export type filmsCreateWithoutFilm_genresInput = {
    title?: string | null
    poster_url?: string | null
    description?: string | null
    year?: number | null
    country?: string | null
    duration?: string | null
    poster_video_url?: string | null
    actor?: string | null
    is_series?: boolean | null
    directeur?: string | null
    age_rating?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    view_count?: number | null
    average_rating?: Decimal | DecimalJsLike | number | string | null
    episodes?: episodesCreateNestedManyWithoutFilmsInput
    favorites?: favoritesCreateNestedManyWithoutFilmsInput
    feedbacks?: feedbacksCreateNestedManyWithoutFilmsInput
    views?: viewsCreateNestedManyWithoutFilmsInput
  }

  export type filmsUncheckedCreateWithoutFilm_genresInput = {
    id?: number
    title?: string | null
    poster_url?: string | null
    description?: string | null
    year?: number | null
    country?: string | null
    duration?: string | null
    poster_video_url?: string | null
    actor?: string | null
    is_series?: boolean | null
    directeur?: string | null
    age_rating?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    view_count?: number | null
    average_rating?: Decimal | DecimalJsLike | number | string | null
    episodes?: episodesUncheckedCreateNestedManyWithoutFilmsInput
    favorites?: favoritesUncheckedCreateNestedManyWithoutFilmsInput
    feedbacks?: feedbacksUncheckedCreateNestedManyWithoutFilmsInput
    views?: viewsUncheckedCreateNestedManyWithoutFilmsInput
  }

  export type filmsCreateOrConnectWithoutFilm_genresInput = {
    where: filmsWhereUniqueInput
    create: XOR<filmsCreateWithoutFilm_genresInput, filmsUncheckedCreateWithoutFilm_genresInput>
  }

  export type genresUpsertWithoutFilm_genresInput = {
    update: XOR<genresUpdateWithoutFilm_genresInput, genresUncheckedUpdateWithoutFilm_genresInput>
    create: XOR<genresCreateWithoutFilm_genresInput, genresUncheckedCreateWithoutFilm_genresInput>
    where?: genresWhereInput
  }

  export type genresUpdateToOneWithWhereWithoutFilm_genresInput = {
    where?: genresWhereInput
    data: XOR<genresUpdateWithoutFilm_genresInput, genresUncheckedUpdateWithoutFilm_genresInput>
  }

  export type genresUpdateWithoutFilm_genresInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type genresUncheckedUpdateWithoutFilm_genresInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type filmsUpsertWithoutFilm_genresInput = {
    update: XOR<filmsUpdateWithoutFilm_genresInput, filmsUncheckedUpdateWithoutFilm_genresInput>
    create: XOR<filmsCreateWithoutFilm_genresInput, filmsUncheckedCreateWithoutFilm_genresInput>
    where?: filmsWhereInput
  }

  export type filmsUpdateToOneWithWhereWithoutFilm_genresInput = {
    where?: filmsWhereInput
    data: XOR<filmsUpdateWithoutFilm_genresInput, filmsUncheckedUpdateWithoutFilm_genresInput>
  }

  export type filmsUpdateWithoutFilm_genresInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    poster_url?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    poster_video_url?: NullableStringFieldUpdateOperationsInput | string | null
    actor?: NullableStringFieldUpdateOperationsInput | string | null
    is_series?: NullableBoolFieldUpdateOperationsInput | boolean | null
    directeur?: NullableStringFieldUpdateOperationsInput | string | null
    age_rating?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    view_count?: NullableIntFieldUpdateOperationsInput | number | null
    average_rating?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    episodes?: episodesUpdateManyWithoutFilmsNestedInput
    favorites?: favoritesUpdateManyWithoutFilmsNestedInput
    feedbacks?: feedbacksUpdateManyWithoutFilmsNestedInput
    views?: viewsUpdateManyWithoutFilmsNestedInput
  }

  export type filmsUncheckedUpdateWithoutFilm_genresInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    poster_url?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    poster_video_url?: NullableStringFieldUpdateOperationsInput | string | null
    actor?: NullableStringFieldUpdateOperationsInput | string | null
    is_series?: NullableBoolFieldUpdateOperationsInput | boolean | null
    directeur?: NullableStringFieldUpdateOperationsInput | string | null
    age_rating?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    view_count?: NullableIntFieldUpdateOperationsInput | number | null
    average_rating?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    episodes?: episodesUncheckedUpdateManyWithoutFilmsNestedInput
    favorites?: favoritesUncheckedUpdateManyWithoutFilmsNestedInput
    feedbacks?: feedbacksUncheckedUpdateManyWithoutFilmsNestedInput
    views?: viewsUncheckedUpdateManyWithoutFilmsNestedInput
  }

  export type episodesCreateWithoutFilmsInput = {
    episode_name?: string | null
    video_url?: string | null
    sub_url?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    video_files?: video_filesCreateNestedManyWithoutEpisodesInput
    views?: viewsCreateNestedManyWithoutEpisodesInput
  }

  export type episodesUncheckedCreateWithoutFilmsInput = {
    id?: number
    episode_name?: string | null
    video_url?: string | null
    sub_url?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    video_files?: video_filesUncheckedCreateNestedManyWithoutEpisodesInput
    views?: viewsUncheckedCreateNestedManyWithoutEpisodesInput
  }

  export type episodesCreateOrConnectWithoutFilmsInput = {
    where: episodesWhereUniqueInput
    create: XOR<episodesCreateWithoutFilmsInput, episodesUncheckedCreateWithoutFilmsInput>
  }

  export type episodesCreateManyFilmsInputEnvelope = {
    data: episodesCreateManyFilmsInput | episodesCreateManyFilmsInput[]
    skipDuplicates?: boolean
  }

  export type favoritesCreateWithoutFilmsInput = {
    added_at?: Date | string
    users?: usersCreateNestedOneWithoutFavoritesInput
  }

  export type favoritesUncheckedCreateWithoutFilmsInput = {
    id?: number
    user_id?: number | null
    added_at?: Date | string
  }

  export type favoritesCreateOrConnectWithoutFilmsInput = {
    where: favoritesWhereUniqueInput
    create: XOR<favoritesCreateWithoutFilmsInput, favoritesUncheckedCreateWithoutFilmsInput>
  }

  export type favoritesCreateManyFilmsInputEnvelope = {
    data: favoritesCreateManyFilmsInput | favoritesCreateManyFilmsInput[]
    skipDuplicates?: boolean
  }

  export type feedbacksCreateWithoutFilmsInput = {
    comment?: string | null
    rating?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    users?: usersCreateNestedOneWithoutFeedbacksInput
  }

  export type feedbacksUncheckedCreateWithoutFilmsInput = {
    id?: number
    user_id?: number | null
    comment?: string | null
    rating?: number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type feedbacksCreateOrConnectWithoutFilmsInput = {
    where: feedbacksWhereUniqueInput
    create: XOR<feedbacksCreateWithoutFilmsInput, feedbacksUncheckedCreateWithoutFilmsInput>
  }

  export type feedbacksCreateManyFilmsInputEnvelope = {
    data: feedbacksCreateManyFilmsInput | feedbacksCreateManyFilmsInput[]
    skipDuplicates?: boolean
  }

  export type film_genresCreateWithoutFilmsInput = {
    genres?: genresCreateNestedOneWithoutFilm_genresInput
  }

  export type film_genresUncheckedCreateWithoutFilmsInput = {
    id?: number
    genres_id?: number | null
  }

  export type film_genresCreateOrConnectWithoutFilmsInput = {
    where: film_genresWhereUniqueInput
    create: XOR<film_genresCreateWithoutFilmsInput, film_genresUncheckedCreateWithoutFilmsInput>
  }

  export type film_genresCreateManyFilmsInputEnvelope = {
    data: film_genresCreateManyFilmsInput | film_genresCreateManyFilmsInput[]
    skipDuplicates?: boolean
  }

  export type viewsCreateWithoutFilmsInput = {
    viewed_at?: Date | string
    progress?: number | null
    episodes?: episodesCreateNestedOneWithoutViewsInput
    users?: usersCreateNestedOneWithoutViewsInput
  }

  export type viewsUncheckedCreateWithoutFilmsInput = {
    id?: number
    episode_id?: number | null
    user_id?: number | null
    viewed_at?: Date | string
    progress?: number | null
  }

  export type viewsCreateOrConnectWithoutFilmsInput = {
    where: viewsWhereUniqueInput
    create: XOR<viewsCreateWithoutFilmsInput, viewsUncheckedCreateWithoutFilmsInput>
  }

  export type viewsCreateManyFilmsInputEnvelope = {
    data: viewsCreateManyFilmsInput | viewsCreateManyFilmsInput[]
    skipDuplicates?: boolean
  }

  export type episodesUpsertWithWhereUniqueWithoutFilmsInput = {
    where: episodesWhereUniqueInput
    update: XOR<episodesUpdateWithoutFilmsInput, episodesUncheckedUpdateWithoutFilmsInput>
    create: XOR<episodesCreateWithoutFilmsInput, episodesUncheckedCreateWithoutFilmsInput>
  }

  export type episodesUpdateWithWhereUniqueWithoutFilmsInput = {
    where: episodesWhereUniqueInput
    data: XOR<episodesUpdateWithoutFilmsInput, episodesUncheckedUpdateWithoutFilmsInput>
  }

  export type episodesUpdateManyWithWhereWithoutFilmsInput = {
    where: episodesScalarWhereInput
    data: XOR<episodesUpdateManyMutationInput, episodesUncheckedUpdateManyWithoutFilmsInput>
  }

  export type episodesScalarWhereInput = {
    AND?: episodesScalarWhereInput | episodesScalarWhereInput[]
    OR?: episodesScalarWhereInput[]
    NOT?: episodesScalarWhereInput | episodesScalarWhereInput[]
    id?: IntFilter<"episodes"> | number
    film_id?: IntNullableFilter<"episodes"> | number | null
    episode_name?: StringNullableFilter<"episodes"> | string | null
    video_url?: StringNullableFilter<"episodes"> | string | null
    sub_url?: StringNullableFilter<"episodes"> | string | null
    created_at?: DateTimeFilter<"episodes"> | Date | string
    updated_at?: DateTimeFilter<"episodes"> | Date | string
  }

  export type favoritesUpsertWithWhereUniqueWithoutFilmsInput = {
    where: favoritesWhereUniqueInput
    update: XOR<favoritesUpdateWithoutFilmsInput, favoritesUncheckedUpdateWithoutFilmsInput>
    create: XOR<favoritesCreateWithoutFilmsInput, favoritesUncheckedCreateWithoutFilmsInput>
  }

  export type favoritesUpdateWithWhereUniqueWithoutFilmsInput = {
    where: favoritesWhereUniqueInput
    data: XOR<favoritesUpdateWithoutFilmsInput, favoritesUncheckedUpdateWithoutFilmsInput>
  }

  export type favoritesUpdateManyWithWhereWithoutFilmsInput = {
    where: favoritesScalarWhereInput
    data: XOR<favoritesUpdateManyMutationInput, favoritesUncheckedUpdateManyWithoutFilmsInput>
  }

  export type favoritesScalarWhereInput = {
    AND?: favoritesScalarWhereInput | favoritesScalarWhereInput[]
    OR?: favoritesScalarWhereInput[]
    NOT?: favoritesScalarWhereInput | favoritesScalarWhereInput[]
    id?: IntFilter<"favorites"> | number
    film_id?: IntNullableFilter<"favorites"> | number | null
    user_id?: IntNullableFilter<"favorites"> | number | null
    added_at?: DateTimeFilter<"favorites"> | Date | string
  }

  export type feedbacksUpsertWithWhereUniqueWithoutFilmsInput = {
    where: feedbacksWhereUniqueInput
    update: XOR<feedbacksUpdateWithoutFilmsInput, feedbacksUncheckedUpdateWithoutFilmsInput>
    create: XOR<feedbacksCreateWithoutFilmsInput, feedbacksUncheckedCreateWithoutFilmsInput>
  }

  export type feedbacksUpdateWithWhereUniqueWithoutFilmsInput = {
    where: feedbacksWhereUniqueInput
    data: XOR<feedbacksUpdateWithoutFilmsInput, feedbacksUncheckedUpdateWithoutFilmsInput>
  }

  export type feedbacksUpdateManyWithWhereWithoutFilmsInput = {
    where: feedbacksScalarWhereInput
    data: XOR<feedbacksUpdateManyMutationInput, feedbacksUncheckedUpdateManyWithoutFilmsInput>
  }

  export type feedbacksScalarWhereInput = {
    AND?: feedbacksScalarWhereInput | feedbacksScalarWhereInput[]
    OR?: feedbacksScalarWhereInput[]
    NOT?: feedbacksScalarWhereInput | feedbacksScalarWhereInput[]
    id?: IntFilter<"feedbacks"> | number
    film_id?: IntNullableFilter<"feedbacks"> | number | null
    user_id?: IntNullableFilter<"feedbacks"> | number | null
    comment?: StringNullableFilter<"feedbacks"> | string | null
    rating?: IntNullableFilter<"feedbacks"> | number | null
    created_at?: DateTimeFilter<"feedbacks"> | Date | string
    updated_at?: DateTimeFilter<"feedbacks"> | Date | string
  }

  export type film_genresUpsertWithWhereUniqueWithoutFilmsInput = {
    where: film_genresWhereUniqueInput
    update: XOR<film_genresUpdateWithoutFilmsInput, film_genresUncheckedUpdateWithoutFilmsInput>
    create: XOR<film_genresCreateWithoutFilmsInput, film_genresUncheckedCreateWithoutFilmsInput>
  }

  export type film_genresUpdateWithWhereUniqueWithoutFilmsInput = {
    where: film_genresWhereUniqueInput
    data: XOR<film_genresUpdateWithoutFilmsInput, film_genresUncheckedUpdateWithoutFilmsInput>
  }

  export type film_genresUpdateManyWithWhereWithoutFilmsInput = {
    where: film_genresScalarWhereInput
    data: XOR<film_genresUpdateManyMutationInput, film_genresUncheckedUpdateManyWithoutFilmsInput>
  }

  export type film_genresScalarWhereInput = {
    AND?: film_genresScalarWhereInput | film_genresScalarWhereInput[]
    OR?: film_genresScalarWhereInput[]
    NOT?: film_genresScalarWhereInput | film_genresScalarWhereInput[]
    id?: IntFilter<"film_genres"> | number
    genres_id?: IntNullableFilter<"film_genres"> | number | null
    film_id?: IntNullableFilter<"film_genres"> | number | null
  }

  export type viewsUpsertWithWhereUniqueWithoutFilmsInput = {
    where: viewsWhereUniqueInput
    update: XOR<viewsUpdateWithoutFilmsInput, viewsUncheckedUpdateWithoutFilmsInput>
    create: XOR<viewsCreateWithoutFilmsInput, viewsUncheckedCreateWithoutFilmsInput>
  }

  export type viewsUpdateWithWhereUniqueWithoutFilmsInput = {
    where: viewsWhereUniqueInput
    data: XOR<viewsUpdateWithoutFilmsInput, viewsUncheckedUpdateWithoutFilmsInput>
  }

  export type viewsUpdateManyWithWhereWithoutFilmsInput = {
    where: viewsScalarWhereInput
    data: XOR<viewsUpdateManyMutationInput, viewsUncheckedUpdateManyWithoutFilmsInput>
  }

  export type film_genresCreateWithoutGenresInput = {
    films?: filmsCreateNestedOneWithoutFilm_genresInput
  }

  export type film_genresUncheckedCreateWithoutGenresInput = {
    id?: number
    film_id?: number | null
  }

  export type film_genresCreateOrConnectWithoutGenresInput = {
    where: film_genresWhereUniqueInput
    create: XOR<film_genresCreateWithoutGenresInput, film_genresUncheckedCreateWithoutGenresInput>
  }

  export type film_genresCreateManyGenresInputEnvelope = {
    data: film_genresCreateManyGenresInput | film_genresCreateManyGenresInput[]
    skipDuplicates?: boolean
  }

  export type film_genresUpsertWithWhereUniqueWithoutGenresInput = {
    where: film_genresWhereUniqueInput
    update: XOR<film_genresUpdateWithoutGenresInput, film_genresUncheckedUpdateWithoutGenresInput>
    create: XOR<film_genresCreateWithoutGenresInput, film_genresUncheckedCreateWithoutGenresInput>
  }

  export type film_genresUpdateWithWhereUniqueWithoutGenresInput = {
    where: film_genresWhereUniqueInput
    data: XOR<film_genresUpdateWithoutGenresInput, film_genresUncheckedUpdateWithoutGenresInput>
  }

  export type film_genresUpdateManyWithWhereWithoutGenresInput = {
    where: film_genresScalarWhereInput
    data: XOR<film_genresUpdateManyMutationInput, film_genresUncheckedUpdateManyWithoutGenresInput>
  }

  export type usersCreateWithoutInvoicesInput = {
    username?: string | null
    password?: string | null
    role?: string | null
    fullname?: string | null
    phonenumber?: string | null
    email?: string | null
    city?: string | null
    gender?: string | null
    interest?: string | null
    birthday?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    cart?: cartCreateNestedManyWithoutUsersInput
    favorites?: favoritesCreateNestedManyWithoutUsersInput
    feedbacks?: feedbacksCreateNestedManyWithoutUsersInput
    plans?: plansCreateNestedOneWithoutUsersInput
    views?: viewsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutInvoicesInput = {
    id?: number
    plan_id?: number | null
    username?: string | null
    password?: string | null
    role?: string | null
    fullname?: string | null
    phonenumber?: string | null
    email?: string | null
    city?: string | null
    gender?: string | null
    interest?: string | null
    birthday?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    cart?: cartUncheckedCreateNestedManyWithoutUsersInput
    favorites?: favoritesUncheckedCreateNestedManyWithoutUsersInput
    feedbacks?: feedbacksUncheckedCreateNestedManyWithoutUsersInput
    views?: viewsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutInvoicesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutInvoicesInput, usersUncheckedCreateWithoutInvoicesInput>
  }

  export type plansCreateWithoutInvoicesInput = {
    name?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
    duration_days?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    cart?: cartCreateNestedManyWithoutPlansInput
    users?: usersCreateNestedManyWithoutPlansInput
  }

  export type plansUncheckedCreateWithoutInvoicesInput = {
    id?: number
    name?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
    duration_days?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    cart?: cartUncheckedCreateNestedManyWithoutPlansInput
    users?: usersUncheckedCreateNestedManyWithoutPlansInput
  }

  export type plansCreateOrConnectWithoutInvoicesInput = {
    where: plansWhereUniqueInput
    create: XOR<plansCreateWithoutInvoicesInput, plansUncheckedCreateWithoutInvoicesInput>
  }

  export type usersUpsertWithoutInvoicesInput = {
    update: XOR<usersUpdateWithoutInvoicesInput, usersUncheckedUpdateWithoutInvoicesInput>
    create: XOR<usersCreateWithoutInvoicesInput, usersUncheckedCreateWithoutInvoicesInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutInvoicesInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutInvoicesInput, usersUncheckedUpdateWithoutInvoicesInput>
  }

  export type usersUpdateWithoutInvoicesInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    phonenumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    interest?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cart?: cartUpdateManyWithoutUsersNestedInput
    favorites?: favoritesUpdateManyWithoutUsersNestedInput
    feedbacks?: feedbacksUpdateManyWithoutUsersNestedInput
    plans?: plansUpdateOneWithoutUsersNestedInput
    views?: viewsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutInvoicesInput = {
    id?: IntFieldUpdateOperationsInput | number
    plan_id?: NullableIntFieldUpdateOperationsInput | number | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    phonenumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    interest?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cart?: cartUncheckedUpdateManyWithoutUsersNestedInput
    favorites?: favoritesUncheckedUpdateManyWithoutUsersNestedInput
    feedbacks?: feedbacksUncheckedUpdateManyWithoutUsersNestedInput
    views?: viewsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type plansUpsertWithoutInvoicesInput = {
    update: XOR<plansUpdateWithoutInvoicesInput, plansUncheckedUpdateWithoutInvoicesInput>
    create: XOR<plansCreateWithoutInvoicesInput, plansUncheckedCreateWithoutInvoicesInput>
    where?: plansWhereInput
  }

  export type plansUpdateToOneWithWhereWithoutInvoicesInput = {
    where?: plansWhereInput
    data: XOR<plansUpdateWithoutInvoicesInput, plansUncheckedUpdateWithoutInvoicesInput>
  }

  export type plansUpdateWithoutInvoicesInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    duration_days?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cart?: cartUpdateManyWithoutPlansNestedInput
    users?: usersUpdateManyWithoutPlansNestedInput
  }

  export type plansUncheckedUpdateWithoutInvoicesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    duration_days?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cart?: cartUncheckedUpdateManyWithoutPlansNestedInput
    users?: usersUncheckedUpdateManyWithoutPlansNestedInput
  }

  export type cartCreateWithoutPlansInput = {
    added_at?: Date | string
    users?: usersCreateNestedOneWithoutCartInput
  }

  export type cartUncheckedCreateWithoutPlansInput = {
    id?: number
    user_id?: number | null
    added_at?: Date | string
  }

  export type cartCreateOrConnectWithoutPlansInput = {
    where: cartWhereUniqueInput
    create: XOR<cartCreateWithoutPlansInput, cartUncheckedCreateWithoutPlansInput>
  }

  export type cartCreateManyPlansInputEnvelope = {
    data: cartCreateManyPlansInput | cartCreateManyPlansInput[]
    skipDuplicates?: boolean
  }

  export type invoicesCreateWithoutPlansInput = {
    total_price?: Decimal | DecimalJsLike | number | string | null
    payment_method?: string | null
    status?: string | null
    start_date?: Date | string | null
    end_date?: Date | string | null
    created_at?: Date | string
    users?: usersCreateNestedOneWithoutInvoicesInput
  }

  export type invoicesUncheckedCreateWithoutPlansInput = {
    id?: number
    user_id?: number | null
    total_price?: Decimal | DecimalJsLike | number | string | null
    payment_method?: string | null
    status?: string | null
    start_date?: Date | string | null
    end_date?: Date | string | null
    created_at?: Date | string
  }

  export type invoicesCreateOrConnectWithoutPlansInput = {
    where: invoicesWhereUniqueInput
    create: XOR<invoicesCreateWithoutPlansInput, invoicesUncheckedCreateWithoutPlansInput>
  }

  export type invoicesCreateManyPlansInputEnvelope = {
    data: invoicesCreateManyPlansInput | invoicesCreateManyPlansInput[]
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutPlansInput = {
    username?: string | null
    password?: string | null
    role?: string | null
    fullname?: string | null
    phonenumber?: string | null
    email?: string | null
    city?: string | null
    gender?: string | null
    interest?: string | null
    birthday?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    cart?: cartCreateNestedManyWithoutUsersInput
    favorites?: favoritesCreateNestedManyWithoutUsersInput
    feedbacks?: feedbacksCreateNestedManyWithoutUsersInput
    invoices?: invoicesCreateNestedManyWithoutUsersInput
    views?: viewsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutPlansInput = {
    id?: number
    username?: string | null
    password?: string | null
    role?: string | null
    fullname?: string | null
    phonenumber?: string | null
    email?: string | null
    city?: string | null
    gender?: string | null
    interest?: string | null
    birthday?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    cart?: cartUncheckedCreateNestedManyWithoutUsersInput
    favorites?: favoritesUncheckedCreateNestedManyWithoutUsersInput
    feedbacks?: feedbacksUncheckedCreateNestedManyWithoutUsersInput
    invoices?: invoicesUncheckedCreateNestedManyWithoutUsersInput
    views?: viewsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutPlansInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutPlansInput, usersUncheckedCreateWithoutPlansInput>
  }

  export type usersCreateManyPlansInputEnvelope = {
    data: usersCreateManyPlansInput | usersCreateManyPlansInput[]
    skipDuplicates?: boolean
  }

  export type cartUpsertWithWhereUniqueWithoutPlansInput = {
    where: cartWhereUniqueInput
    update: XOR<cartUpdateWithoutPlansInput, cartUncheckedUpdateWithoutPlansInput>
    create: XOR<cartCreateWithoutPlansInput, cartUncheckedCreateWithoutPlansInput>
  }

  export type cartUpdateWithWhereUniqueWithoutPlansInput = {
    where: cartWhereUniqueInput
    data: XOR<cartUpdateWithoutPlansInput, cartUncheckedUpdateWithoutPlansInput>
  }

  export type cartUpdateManyWithWhereWithoutPlansInput = {
    where: cartScalarWhereInput
    data: XOR<cartUpdateManyMutationInput, cartUncheckedUpdateManyWithoutPlansInput>
  }

  export type cartScalarWhereInput = {
    AND?: cartScalarWhereInput | cartScalarWhereInput[]
    OR?: cartScalarWhereInput[]
    NOT?: cartScalarWhereInput | cartScalarWhereInput[]
    id?: IntFilter<"cart"> | number
    user_id?: IntNullableFilter<"cart"> | number | null
    plan_id?: IntNullableFilter<"cart"> | number | null
    added_at?: DateTimeFilter<"cart"> | Date | string
  }

  export type invoicesUpsertWithWhereUniqueWithoutPlansInput = {
    where: invoicesWhereUniqueInput
    update: XOR<invoicesUpdateWithoutPlansInput, invoicesUncheckedUpdateWithoutPlansInput>
    create: XOR<invoicesCreateWithoutPlansInput, invoicesUncheckedCreateWithoutPlansInput>
  }

  export type invoicesUpdateWithWhereUniqueWithoutPlansInput = {
    where: invoicesWhereUniqueInput
    data: XOR<invoicesUpdateWithoutPlansInput, invoicesUncheckedUpdateWithoutPlansInput>
  }

  export type invoicesUpdateManyWithWhereWithoutPlansInput = {
    where: invoicesScalarWhereInput
    data: XOR<invoicesUpdateManyMutationInput, invoicesUncheckedUpdateManyWithoutPlansInput>
  }

  export type invoicesScalarWhereInput = {
    AND?: invoicesScalarWhereInput | invoicesScalarWhereInput[]
    OR?: invoicesScalarWhereInput[]
    NOT?: invoicesScalarWhereInput | invoicesScalarWhereInput[]
    id?: IntFilter<"invoices"> | number
    user_id?: IntNullableFilter<"invoices"> | number | null
    plan_id?: IntNullableFilter<"invoices"> | number | null
    total_price?: DecimalNullableFilter<"invoices"> | Decimal | DecimalJsLike | number | string | null
    payment_method?: StringNullableFilter<"invoices"> | string | null
    status?: StringNullableFilter<"invoices"> | string | null
    start_date?: DateTimeNullableFilter<"invoices"> | Date | string | null
    end_date?: DateTimeNullableFilter<"invoices"> | Date | string | null
    created_at?: DateTimeFilter<"invoices"> | Date | string
  }

  export type usersUpsertWithWhereUniqueWithoutPlansInput = {
    where: usersWhereUniqueInput
    update: XOR<usersUpdateWithoutPlansInput, usersUncheckedUpdateWithoutPlansInput>
    create: XOR<usersCreateWithoutPlansInput, usersUncheckedCreateWithoutPlansInput>
  }

  export type usersUpdateWithWhereUniqueWithoutPlansInput = {
    where: usersWhereUniqueInput
    data: XOR<usersUpdateWithoutPlansInput, usersUncheckedUpdateWithoutPlansInput>
  }

  export type usersUpdateManyWithWhereWithoutPlansInput = {
    where: usersScalarWhereInput
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyWithoutPlansInput>
  }

  export type usersScalarWhereInput = {
    AND?: usersScalarWhereInput | usersScalarWhereInput[]
    OR?: usersScalarWhereInput[]
    NOT?: usersScalarWhereInput | usersScalarWhereInput[]
    id?: IntFilter<"users"> | number
    plan_id?: IntNullableFilter<"users"> | number | null
    username?: StringNullableFilter<"users"> | string | null
    password?: StringNullableFilter<"users"> | string | null
    role?: StringNullableFilter<"users"> | string | null
    fullname?: StringNullableFilter<"users"> | string | null
    phonenumber?: StringNullableFilter<"users"> | string | null
    email?: StringNullableFilter<"users"> | string | null
    city?: StringNullableFilter<"users"> | string | null
    gender?: StringNullableFilter<"users"> | string | null
    interest?: StringNullableFilter<"users"> | string | null
    birthday?: DateTimeNullableFilter<"users"> | Date | string | null
    created_at?: DateTimeFilter<"users"> | Date | string
    updated_at?: DateTimeFilter<"users"> | Date | string
  }

  export type cartCreateWithoutUsersInput = {
    added_at?: Date | string
    plans?: plansCreateNestedOneWithoutCartInput
  }

  export type cartUncheckedCreateWithoutUsersInput = {
    id?: number
    plan_id?: number | null
    added_at?: Date | string
  }

  export type cartCreateOrConnectWithoutUsersInput = {
    where: cartWhereUniqueInput
    create: XOR<cartCreateWithoutUsersInput, cartUncheckedCreateWithoutUsersInput>
  }

  export type cartCreateManyUsersInputEnvelope = {
    data: cartCreateManyUsersInput | cartCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type favoritesCreateWithoutUsersInput = {
    added_at?: Date | string
    films?: filmsCreateNestedOneWithoutFavoritesInput
  }

  export type favoritesUncheckedCreateWithoutUsersInput = {
    id?: number
    film_id?: number | null
    added_at?: Date | string
  }

  export type favoritesCreateOrConnectWithoutUsersInput = {
    where: favoritesWhereUniqueInput
    create: XOR<favoritesCreateWithoutUsersInput, favoritesUncheckedCreateWithoutUsersInput>
  }

  export type favoritesCreateManyUsersInputEnvelope = {
    data: favoritesCreateManyUsersInput | favoritesCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type feedbacksCreateWithoutUsersInput = {
    comment?: string | null
    rating?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    films?: filmsCreateNestedOneWithoutFeedbacksInput
  }

  export type feedbacksUncheckedCreateWithoutUsersInput = {
    id?: number
    film_id?: number | null
    comment?: string | null
    rating?: number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type feedbacksCreateOrConnectWithoutUsersInput = {
    where: feedbacksWhereUniqueInput
    create: XOR<feedbacksCreateWithoutUsersInput, feedbacksUncheckedCreateWithoutUsersInput>
  }

  export type feedbacksCreateManyUsersInputEnvelope = {
    data: feedbacksCreateManyUsersInput | feedbacksCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type invoicesCreateWithoutUsersInput = {
    total_price?: Decimal | DecimalJsLike | number | string | null
    payment_method?: string | null
    status?: string | null
    start_date?: Date | string | null
    end_date?: Date | string | null
    created_at?: Date | string
    plans?: plansCreateNestedOneWithoutInvoicesInput
  }

  export type invoicesUncheckedCreateWithoutUsersInput = {
    id?: number
    plan_id?: number | null
    total_price?: Decimal | DecimalJsLike | number | string | null
    payment_method?: string | null
    status?: string | null
    start_date?: Date | string | null
    end_date?: Date | string | null
    created_at?: Date | string
  }

  export type invoicesCreateOrConnectWithoutUsersInput = {
    where: invoicesWhereUniqueInput
    create: XOR<invoicesCreateWithoutUsersInput, invoicesUncheckedCreateWithoutUsersInput>
  }

  export type invoicesCreateManyUsersInputEnvelope = {
    data: invoicesCreateManyUsersInput | invoicesCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type plansCreateWithoutUsersInput = {
    name?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
    duration_days?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    cart?: cartCreateNestedManyWithoutPlansInput
    invoices?: invoicesCreateNestedManyWithoutPlansInput
  }

  export type plansUncheckedCreateWithoutUsersInput = {
    id?: number
    name?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
    duration_days?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    cart?: cartUncheckedCreateNestedManyWithoutPlansInput
    invoices?: invoicesUncheckedCreateNestedManyWithoutPlansInput
  }

  export type plansCreateOrConnectWithoutUsersInput = {
    where: plansWhereUniqueInput
    create: XOR<plansCreateWithoutUsersInput, plansUncheckedCreateWithoutUsersInput>
  }

  export type viewsCreateWithoutUsersInput = {
    viewed_at?: Date | string
    progress?: number | null
    films?: filmsCreateNestedOneWithoutViewsInput
    episodes?: episodesCreateNestedOneWithoutViewsInput
  }

  export type viewsUncheckedCreateWithoutUsersInput = {
    id?: number
    film_id?: number | null
    episode_id?: number | null
    viewed_at?: Date | string
    progress?: number | null
  }

  export type viewsCreateOrConnectWithoutUsersInput = {
    where: viewsWhereUniqueInput
    create: XOR<viewsCreateWithoutUsersInput, viewsUncheckedCreateWithoutUsersInput>
  }

  export type viewsCreateManyUsersInputEnvelope = {
    data: viewsCreateManyUsersInput | viewsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type cartUpsertWithWhereUniqueWithoutUsersInput = {
    where: cartWhereUniqueInput
    update: XOR<cartUpdateWithoutUsersInput, cartUncheckedUpdateWithoutUsersInput>
    create: XOR<cartCreateWithoutUsersInput, cartUncheckedCreateWithoutUsersInput>
  }

  export type cartUpdateWithWhereUniqueWithoutUsersInput = {
    where: cartWhereUniqueInput
    data: XOR<cartUpdateWithoutUsersInput, cartUncheckedUpdateWithoutUsersInput>
  }

  export type cartUpdateManyWithWhereWithoutUsersInput = {
    where: cartScalarWhereInput
    data: XOR<cartUpdateManyMutationInput, cartUncheckedUpdateManyWithoutUsersInput>
  }

  export type favoritesUpsertWithWhereUniqueWithoutUsersInput = {
    where: favoritesWhereUniqueInput
    update: XOR<favoritesUpdateWithoutUsersInput, favoritesUncheckedUpdateWithoutUsersInput>
    create: XOR<favoritesCreateWithoutUsersInput, favoritesUncheckedCreateWithoutUsersInput>
  }

  export type favoritesUpdateWithWhereUniqueWithoutUsersInput = {
    where: favoritesWhereUniqueInput
    data: XOR<favoritesUpdateWithoutUsersInput, favoritesUncheckedUpdateWithoutUsersInput>
  }

  export type favoritesUpdateManyWithWhereWithoutUsersInput = {
    where: favoritesScalarWhereInput
    data: XOR<favoritesUpdateManyMutationInput, favoritesUncheckedUpdateManyWithoutUsersInput>
  }

  export type feedbacksUpsertWithWhereUniqueWithoutUsersInput = {
    where: feedbacksWhereUniqueInput
    update: XOR<feedbacksUpdateWithoutUsersInput, feedbacksUncheckedUpdateWithoutUsersInput>
    create: XOR<feedbacksCreateWithoutUsersInput, feedbacksUncheckedCreateWithoutUsersInput>
  }

  export type feedbacksUpdateWithWhereUniqueWithoutUsersInput = {
    where: feedbacksWhereUniqueInput
    data: XOR<feedbacksUpdateWithoutUsersInput, feedbacksUncheckedUpdateWithoutUsersInput>
  }

  export type feedbacksUpdateManyWithWhereWithoutUsersInput = {
    where: feedbacksScalarWhereInput
    data: XOR<feedbacksUpdateManyMutationInput, feedbacksUncheckedUpdateManyWithoutUsersInput>
  }

  export type invoicesUpsertWithWhereUniqueWithoutUsersInput = {
    where: invoicesWhereUniqueInput
    update: XOR<invoicesUpdateWithoutUsersInput, invoicesUncheckedUpdateWithoutUsersInput>
    create: XOR<invoicesCreateWithoutUsersInput, invoicesUncheckedCreateWithoutUsersInput>
  }

  export type invoicesUpdateWithWhereUniqueWithoutUsersInput = {
    where: invoicesWhereUniqueInput
    data: XOR<invoicesUpdateWithoutUsersInput, invoicesUncheckedUpdateWithoutUsersInput>
  }

  export type invoicesUpdateManyWithWhereWithoutUsersInput = {
    where: invoicesScalarWhereInput
    data: XOR<invoicesUpdateManyMutationInput, invoicesUncheckedUpdateManyWithoutUsersInput>
  }

  export type plansUpsertWithoutUsersInput = {
    update: XOR<plansUpdateWithoutUsersInput, plansUncheckedUpdateWithoutUsersInput>
    create: XOR<plansCreateWithoutUsersInput, plansUncheckedCreateWithoutUsersInput>
    where?: plansWhereInput
  }

  export type plansUpdateToOneWithWhereWithoutUsersInput = {
    where?: plansWhereInput
    data: XOR<plansUpdateWithoutUsersInput, plansUncheckedUpdateWithoutUsersInput>
  }

  export type plansUpdateWithoutUsersInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    duration_days?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cart?: cartUpdateManyWithoutPlansNestedInput
    invoices?: invoicesUpdateManyWithoutPlansNestedInput
  }

  export type plansUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    duration_days?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cart?: cartUncheckedUpdateManyWithoutPlansNestedInput
    invoices?: invoicesUncheckedUpdateManyWithoutPlansNestedInput
  }

  export type viewsUpsertWithWhereUniqueWithoutUsersInput = {
    where: viewsWhereUniqueInput
    update: XOR<viewsUpdateWithoutUsersInput, viewsUncheckedUpdateWithoutUsersInput>
    create: XOR<viewsCreateWithoutUsersInput, viewsUncheckedCreateWithoutUsersInput>
  }

  export type viewsUpdateWithWhereUniqueWithoutUsersInput = {
    where: viewsWhereUniqueInput
    data: XOR<viewsUpdateWithoutUsersInput, viewsUncheckedUpdateWithoutUsersInput>
  }

  export type viewsUpdateManyWithWhereWithoutUsersInput = {
    where: viewsScalarWhereInput
    data: XOR<viewsUpdateManyMutationInput, viewsUncheckedUpdateManyWithoutUsersInput>
  }

  export type episodesCreateWithoutVideo_filesInput = {
    episode_name?: string | null
    video_url?: string | null
    sub_url?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    films?: filmsCreateNestedOneWithoutEpisodesInput
    views?: viewsCreateNestedManyWithoutEpisodesInput
  }

  export type episodesUncheckedCreateWithoutVideo_filesInput = {
    id?: number
    film_id?: number | null
    episode_name?: string | null
    video_url?: string | null
    sub_url?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    views?: viewsUncheckedCreateNestedManyWithoutEpisodesInput
  }

  export type episodesCreateOrConnectWithoutVideo_filesInput = {
    where: episodesWhereUniqueInput
    create: XOR<episodesCreateWithoutVideo_filesInput, episodesUncheckedCreateWithoutVideo_filesInput>
  }

  export type episodesUpsertWithoutVideo_filesInput = {
    update: XOR<episodesUpdateWithoutVideo_filesInput, episodesUncheckedUpdateWithoutVideo_filesInput>
    create: XOR<episodesCreateWithoutVideo_filesInput, episodesUncheckedCreateWithoutVideo_filesInput>
    where?: episodesWhereInput
  }

  export type episodesUpdateToOneWithWhereWithoutVideo_filesInput = {
    where?: episodesWhereInput
    data: XOR<episodesUpdateWithoutVideo_filesInput, episodesUncheckedUpdateWithoutVideo_filesInput>
  }

  export type episodesUpdateWithoutVideo_filesInput = {
    episode_name?: NullableStringFieldUpdateOperationsInput | string | null
    video_url?: NullableStringFieldUpdateOperationsInput | string | null
    sub_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    films?: filmsUpdateOneWithoutEpisodesNestedInput
    views?: viewsUpdateManyWithoutEpisodesNestedInput
  }

  export type episodesUncheckedUpdateWithoutVideo_filesInput = {
    id?: IntFieldUpdateOperationsInput | number
    film_id?: NullableIntFieldUpdateOperationsInput | number | null
    episode_name?: NullableStringFieldUpdateOperationsInput | string | null
    video_url?: NullableStringFieldUpdateOperationsInput | string | null
    sub_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    views?: viewsUncheckedUpdateManyWithoutEpisodesNestedInput
  }

  export type filmsCreateWithoutViewsInput = {
    title?: string | null
    poster_url?: string | null
    description?: string | null
    year?: number | null
    country?: string | null
    duration?: string | null
    poster_video_url?: string | null
    actor?: string | null
    is_series?: boolean | null
    directeur?: string | null
    age_rating?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    view_count?: number | null
    average_rating?: Decimal | DecimalJsLike | number | string | null
    episodes?: episodesCreateNestedManyWithoutFilmsInput
    favorites?: favoritesCreateNestedManyWithoutFilmsInput
    feedbacks?: feedbacksCreateNestedManyWithoutFilmsInput
    film_genres?: film_genresCreateNestedManyWithoutFilmsInput
  }

  export type filmsUncheckedCreateWithoutViewsInput = {
    id?: number
    title?: string | null
    poster_url?: string | null
    description?: string | null
    year?: number | null
    country?: string | null
    duration?: string | null
    poster_video_url?: string | null
    actor?: string | null
    is_series?: boolean | null
    directeur?: string | null
    age_rating?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    view_count?: number | null
    average_rating?: Decimal | DecimalJsLike | number | string | null
    episodes?: episodesUncheckedCreateNestedManyWithoutFilmsInput
    favorites?: favoritesUncheckedCreateNestedManyWithoutFilmsInput
    feedbacks?: feedbacksUncheckedCreateNestedManyWithoutFilmsInput
    film_genres?: film_genresUncheckedCreateNestedManyWithoutFilmsInput
  }

  export type filmsCreateOrConnectWithoutViewsInput = {
    where: filmsWhereUniqueInput
    create: XOR<filmsCreateWithoutViewsInput, filmsUncheckedCreateWithoutViewsInput>
  }

  export type episodesCreateWithoutViewsInput = {
    episode_name?: string | null
    video_url?: string | null
    sub_url?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    films?: filmsCreateNestedOneWithoutEpisodesInput
    video_files?: video_filesCreateNestedManyWithoutEpisodesInput
  }

  export type episodesUncheckedCreateWithoutViewsInput = {
    id?: number
    film_id?: number | null
    episode_name?: string | null
    video_url?: string | null
    sub_url?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    video_files?: video_filesUncheckedCreateNestedManyWithoutEpisodesInput
  }

  export type episodesCreateOrConnectWithoutViewsInput = {
    where: episodesWhereUniqueInput
    create: XOR<episodesCreateWithoutViewsInput, episodesUncheckedCreateWithoutViewsInput>
  }

  export type usersCreateWithoutViewsInput = {
    username?: string | null
    password?: string | null
    role?: string | null
    fullname?: string | null
    phonenumber?: string | null
    email?: string | null
    city?: string | null
    gender?: string | null
    interest?: string | null
    birthday?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    cart?: cartCreateNestedManyWithoutUsersInput
    favorites?: favoritesCreateNestedManyWithoutUsersInput
    feedbacks?: feedbacksCreateNestedManyWithoutUsersInput
    invoices?: invoicesCreateNestedManyWithoutUsersInput
    plans?: plansCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutViewsInput = {
    id?: number
    plan_id?: number | null
    username?: string | null
    password?: string | null
    role?: string | null
    fullname?: string | null
    phonenumber?: string | null
    email?: string | null
    city?: string | null
    gender?: string | null
    interest?: string | null
    birthday?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    cart?: cartUncheckedCreateNestedManyWithoutUsersInput
    favorites?: favoritesUncheckedCreateNestedManyWithoutUsersInput
    feedbacks?: feedbacksUncheckedCreateNestedManyWithoutUsersInput
    invoices?: invoicesUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutViewsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutViewsInput, usersUncheckedCreateWithoutViewsInput>
  }

  export type filmsUpsertWithoutViewsInput = {
    update: XOR<filmsUpdateWithoutViewsInput, filmsUncheckedUpdateWithoutViewsInput>
    create: XOR<filmsCreateWithoutViewsInput, filmsUncheckedCreateWithoutViewsInput>
    where?: filmsWhereInput
  }

  export type filmsUpdateToOneWithWhereWithoutViewsInput = {
    where?: filmsWhereInput
    data: XOR<filmsUpdateWithoutViewsInput, filmsUncheckedUpdateWithoutViewsInput>
  }

  export type filmsUpdateWithoutViewsInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    poster_url?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    poster_video_url?: NullableStringFieldUpdateOperationsInput | string | null
    actor?: NullableStringFieldUpdateOperationsInput | string | null
    is_series?: NullableBoolFieldUpdateOperationsInput | boolean | null
    directeur?: NullableStringFieldUpdateOperationsInput | string | null
    age_rating?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    view_count?: NullableIntFieldUpdateOperationsInput | number | null
    average_rating?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    episodes?: episodesUpdateManyWithoutFilmsNestedInput
    favorites?: favoritesUpdateManyWithoutFilmsNestedInput
    feedbacks?: feedbacksUpdateManyWithoutFilmsNestedInput
    film_genres?: film_genresUpdateManyWithoutFilmsNestedInput
  }

  export type filmsUncheckedUpdateWithoutViewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    poster_url?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    poster_video_url?: NullableStringFieldUpdateOperationsInput | string | null
    actor?: NullableStringFieldUpdateOperationsInput | string | null
    is_series?: NullableBoolFieldUpdateOperationsInput | boolean | null
    directeur?: NullableStringFieldUpdateOperationsInput | string | null
    age_rating?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    view_count?: NullableIntFieldUpdateOperationsInput | number | null
    average_rating?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    episodes?: episodesUncheckedUpdateManyWithoutFilmsNestedInput
    favorites?: favoritesUncheckedUpdateManyWithoutFilmsNestedInput
    feedbacks?: feedbacksUncheckedUpdateManyWithoutFilmsNestedInput
    film_genres?: film_genresUncheckedUpdateManyWithoutFilmsNestedInput
  }

  export type episodesUpsertWithoutViewsInput = {
    update: XOR<episodesUpdateWithoutViewsInput, episodesUncheckedUpdateWithoutViewsInput>
    create: XOR<episodesCreateWithoutViewsInput, episodesUncheckedCreateWithoutViewsInput>
    where?: episodesWhereInput
  }

  export type episodesUpdateToOneWithWhereWithoutViewsInput = {
    where?: episodesWhereInput
    data: XOR<episodesUpdateWithoutViewsInput, episodesUncheckedUpdateWithoutViewsInput>
  }

  export type episodesUpdateWithoutViewsInput = {
    episode_name?: NullableStringFieldUpdateOperationsInput | string | null
    video_url?: NullableStringFieldUpdateOperationsInput | string | null
    sub_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    films?: filmsUpdateOneWithoutEpisodesNestedInput
    video_files?: video_filesUpdateManyWithoutEpisodesNestedInput
  }

  export type episodesUncheckedUpdateWithoutViewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    film_id?: NullableIntFieldUpdateOperationsInput | number | null
    episode_name?: NullableStringFieldUpdateOperationsInput | string | null
    video_url?: NullableStringFieldUpdateOperationsInput | string | null
    sub_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    video_files?: video_filesUncheckedUpdateManyWithoutEpisodesNestedInput
  }

  export type usersUpsertWithoutViewsInput = {
    update: XOR<usersUpdateWithoutViewsInput, usersUncheckedUpdateWithoutViewsInput>
    create: XOR<usersCreateWithoutViewsInput, usersUncheckedCreateWithoutViewsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutViewsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutViewsInput, usersUncheckedUpdateWithoutViewsInput>
  }

  export type usersUpdateWithoutViewsInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    phonenumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    interest?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cart?: cartUpdateManyWithoutUsersNestedInput
    favorites?: favoritesUpdateManyWithoutUsersNestedInput
    feedbacks?: feedbacksUpdateManyWithoutUsersNestedInput
    invoices?: invoicesUpdateManyWithoutUsersNestedInput
    plans?: plansUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutViewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    plan_id?: NullableIntFieldUpdateOperationsInput | number | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    phonenumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    interest?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cart?: cartUncheckedUpdateManyWithoutUsersNestedInput
    favorites?: favoritesUncheckedUpdateManyWithoutUsersNestedInput
    feedbacks?: feedbacksUncheckedUpdateManyWithoutUsersNestedInput
    invoices?: invoicesUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type video_filesCreateManyEpisodesInput = {
    id?: number
    quality?: string | null
    file_url?: string | null
  }

  export type viewsCreateManyEpisodesInput = {
    id?: number
    film_id?: number | null
    user_id?: number | null
    viewed_at?: Date | string
    progress?: number | null
  }

  export type video_filesUpdateWithoutEpisodesInput = {
    quality?: NullableStringFieldUpdateOperationsInput | string | null
    file_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type video_filesUncheckedUpdateWithoutEpisodesInput = {
    id?: IntFieldUpdateOperationsInput | number
    quality?: NullableStringFieldUpdateOperationsInput | string | null
    file_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type video_filesUncheckedUpdateManyWithoutEpisodesInput = {
    id?: IntFieldUpdateOperationsInput | number
    quality?: NullableStringFieldUpdateOperationsInput | string | null
    file_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type viewsUpdateWithoutEpisodesInput = {
    viewed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: NullableIntFieldUpdateOperationsInput | number | null
    films?: filmsUpdateOneWithoutViewsNestedInput
    users?: usersUpdateOneWithoutViewsNestedInput
  }

  export type viewsUncheckedUpdateWithoutEpisodesInput = {
    id?: IntFieldUpdateOperationsInput | number
    film_id?: NullableIntFieldUpdateOperationsInput | number | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    viewed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type viewsUncheckedUpdateManyWithoutEpisodesInput = {
    id?: IntFieldUpdateOperationsInput | number
    film_id?: NullableIntFieldUpdateOperationsInput | number | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    viewed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type episodesCreateManyFilmsInput = {
    id?: number
    episode_name?: string | null
    video_url?: string | null
    sub_url?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type favoritesCreateManyFilmsInput = {
    id?: number
    user_id?: number | null
    added_at?: Date | string
  }

  export type feedbacksCreateManyFilmsInput = {
    id?: number
    user_id?: number | null
    comment?: string | null
    rating?: number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type film_genresCreateManyFilmsInput = {
    id?: number
    genres_id?: number | null
  }

  export type viewsCreateManyFilmsInput = {
    id?: number
    episode_id?: number | null
    user_id?: number | null
    viewed_at?: Date | string
    progress?: number | null
  }

  export type episodesUpdateWithoutFilmsInput = {
    episode_name?: NullableStringFieldUpdateOperationsInput | string | null
    video_url?: NullableStringFieldUpdateOperationsInput | string | null
    sub_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    video_files?: video_filesUpdateManyWithoutEpisodesNestedInput
    views?: viewsUpdateManyWithoutEpisodesNestedInput
  }

  export type episodesUncheckedUpdateWithoutFilmsInput = {
    id?: IntFieldUpdateOperationsInput | number
    episode_name?: NullableStringFieldUpdateOperationsInput | string | null
    video_url?: NullableStringFieldUpdateOperationsInput | string | null
    sub_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    video_files?: video_filesUncheckedUpdateManyWithoutEpisodesNestedInput
    views?: viewsUncheckedUpdateManyWithoutEpisodesNestedInput
  }

  export type episodesUncheckedUpdateManyWithoutFilmsInput = {
    id?: IntFieldUpdateOperationsInput | number
    episode_name?: NullableStringFieldUpdateOperationsInput | string | null
    video_url?: NullableStringFieldUpdateOperationsInput | string | null
    sub_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type favoritesUpdateWithoutFilmsInput = {
    added_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateOneWithoutFavoritesNestedInput
  }

  export type favoritesUncheckedUpdateWithoutFilmsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    added_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type favoritesUncheckedUpdateManyWithoutFilmsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    added_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type feedbacksUpdateWithoutFilmsInput = {
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateOneWithoutFeedbacksNestedInput
  }

  export type feedbacksUncheckedUpdateWithoutFilmsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type feedbacksUncheckedUpdateManyWithoutFilmsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type film_genresUpdateWithoutFilmsInput = {
    genres?: genresUpdateOneWithoutFilm_genresNestedInput
  }

  export type film_genresUncheckedUpdateWithoutFilmsInput = {
    id?: IntFieldUpdateOperationsInput | number
    genres_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type film_genresUncheckedUpdateManyWithoutFilmsInput = {
    id?: IntFieldUpdateOperationsInput | number
    genres_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type viewsUpdateWithoutFilmsInput = {
    viewed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: NullableIntFieldUpdateOperationsInput | number | null
    episodes?: episodesUpdateOneWithoutViewsNestedInput
    users?: usersUpdateOneWithoutViewsNestedInput
  }

  export type viewsUncheckedUpdateWithoutFilmsInput = {
    id?: IntFieldUpdateOperationsInput | number
    episode_id?: NullableIntFieldUpdateOperationsInput | number | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    viewed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type viewsUncheckedUpdateManyWithoutFilmsInput = {
    id?: IntFieldUpdateOperationsInput | number
    episode_id?: NullableIntFieldUpdateOperationsInput | number | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    viewed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type film_genresCreateManyGenresInput = {
    id?: number
    film_id?: number | null
  }

  export type film_genresUpdateWithoutGenresInput = {
    films?: filmsUpdateOneWithoutFilm_genresNestedInput
  }

  export type film_genresUncheckedUpdateWithoutGenresInput = {
    id?: IntFieldUpdateOperationsInput | number
    film_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type film_genresUncheckedUpdateManyWithoutGenresInput = {
    id?: IntFieldUpdateOperationsInput | number
    film_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type cartCreateManyPlansInput = {
    id?: number
    user_id?: number | null
    added_at?: Date | string
  }

  export type invoicesCreateManyPlansInput = {
    id?: number
    user_id?: number | null
    total_price?: Decimal | DecimalJsLike | number | string | null
    payment_method?: string | null
    status?: string | null
    start_date?: Date | string | null
    end_date?: Date | string | null
    created_at?: Date | string
  }

  export type usersCreateManyPlansInput = {
    id?: number
    username?: string | null
    password?: string | null
    role?: string | null
    fullname?: string | null
    phonenumber?: string | null
    email?: string | null
    city?: string | null
    gender?: string | null
    interest?: string | null
    birthday?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type cartUpdateWithoutPlansInput = {
    added_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateOneWithoutCartNestedInput
  }

  export type cartUncheckedUpdateWithoutPlansInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    added_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type cartUncheckedUpdateManyWithoutPlansInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    added_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type invoicesUpdateWithoutPlansInput = {
    total_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateOneWithoutInvoicesNestedInput
  }

  export type invoicesUncheckedUpdateWithoutPlansInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    total_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type invoicesUncheckedUpdateManyWithoutPlansInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    total_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersUpdateWithoutPlansInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    phonenumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    interest?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cart?: cartUpdateManyWithoutUsersNestedInput
    favorites?: favoritesUpdateManyWithoutUsersNestedInput
    feedbacks?: feedbacksUpdateManyWithoutUsersNestedInput
    invoices?: invoicesUpdateManyWithoutUsersNestedInput
    views?: viewsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutPlansInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    phonenumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    interest?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cart?: cartUncheckedUpdateManyWithoutUsersNestedInput
    favorites?: favoritesUncheckedUpdateManyWithoutUsersNestedInput
    feedbacks?: feedbacksUncheckedUpdateManyWithoutUsersNestedInput
    invoices?: invoicesUncheckedUpdateManyWithoutUsersNestedInput
    views?: viewsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateManyWithoutPlansInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    phonenumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    interest?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type cartCreateManyUsersInput = {
    id?: number
    plan_id?: number | null
    added_at?: Date | string
  }

  export type favoritesCreateManyUsersInput = {
    id?: number
    film_id?: number | null
    added_at?: Date | string
  }

  export type feedbacksCreateManyUsersInput = {
    id?: number
    film_id?: number | null
    comment?: string | null
    rating?: number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type invoicesCreateManyUsersInput = {
    id?: number
    plan_id?: number | null
    total_price?: Decimal | DecimalJsLike | number | string | null
    payment_method?: string | null
    status?: string | null
    start_date?: Date | string | null
    end_date?: Date | string | null
    created_at?: Date | string
  }

  export type viewsCreateManyUsersInput = {
    id?: number
    film_id?: number | null
    episode_id?: number | null
    viewed_at?: Date | string
    progress?: number | null
  }

  export type cartUpdateWithoutUsersInput = {
    added_at?: DateTimeFieldUpdateOperationsInput | Date | string
    plans?: plansUpdateOneWithoutCartNestedInput
  }

  export type cartUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    plan_id?: NullableIntFieldUpdateOperationsInput | number | null
    added_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type cartUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    plan_id?: NullableIntFieldUpdateOperationsInput | number | null
    added_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type favoritesUpdateWithoutUsersInput = {
    added_at?: DateTimeFieldUpdateOperationsInput | Date | string
    films?: filmsUpdateOneWithoutFavoritesNestedInput
  }

  export type favoritesUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    film_id?: NullableIntFieldUpdateOperationsInput | number | null
    added_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type favoritesUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    film_id?: NullableIntFieldUpdateOperationsInput | number | null
    added_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type feedbacksUpdateWithoutUsersInput = {
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    films?: filmsUpdateOneWithoutFeedbacksNestedInput
  }

  export type feedbacksUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    film_id?: NullableIntFieldUpdateOperationsInput | number | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type feedbacksUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    film_id?: NullableIntFieldUpdateOperationsInput | number | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type invoicesUpdateWithoutUsersInput = {
    total_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    plans?: plansUpdateOneWithoutInvoicesNestedInput
  }

  export type invoicesUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    plan_id?: NullableIntFieldUpdateOperationsInput | number | null
    total_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type invoicesUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    plan_id?: NullableIntFieldUpdateOperationsInput | number | null
    total_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type viewsUpdateWithoutUsersInput = {
    viewed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: NullableIntFieldUpdateOperationsInput | number | null
    films?: filmsUpdateOneWithoutViewsNestedInput
    episodes?: episodesUpdateOneWithoutViewsNestedInput
  }

  export type viewsUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    film_id?: NullableIntFieldUpdateOperationsInput | number | null
    episode_id?: NullableIntFieldUpdateOperationsInput | number | null
    viewed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type viewsUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    film_id?: NullableIntFieldUpdateOperationsInput | number | null
    episode_id?: NullableIntFieldUpdateOperationsInput | number | null
    viewed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: NullableIntFieldUpdateOperationsInput | number | null
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
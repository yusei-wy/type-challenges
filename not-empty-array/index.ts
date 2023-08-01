import { Expect, Equal } from '@type-challenges/utils';

// type NotEmptyArray<T> = T[] & { 0: T };
type NotEmptyArray<T> = [T, ...T[]];

type Spreaded = NotEmptyArray<string>;

const array: NotEmptyArray<number> = [1, 2];
const copied: NotEmptyArray<number> = [...array];
const appended1: NotEmptyArray<number> = [...array, 3];
const appended2: NotEmptyArray<number> = [3, ...array];


type caces = [
  Expect<Equal<NotEmptyArray<string>, Spreaded>>,
  Expect<Equal<NotEmptyArray<number>, typeof array>>,
  Expect<Equal<NotEmptyArray<number>, typeof copied>>,
  Expect<Equal<NotEmptyArray<number>, typeof appended1>>,
  Expect<Equal<NotEmptyArray<number>, typeof appended2>>,
]

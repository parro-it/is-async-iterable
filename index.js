/**
 * Return true if the argument is async iterable
 * @param  {any}  val value to check
 * @return {Boolean}     true if the value is async iterable
 */
export default function isAsyncIterable(val) {
  const isIterable = typeof val[Symbol.iterator] === "function";
  const isAsync = typeof val[Symbol.asyncIterator] === "function";
  // ? console.log({ val, isIterable, isAsync, s: Symbol.asyncIterator });
  return isAsync || isIterable;
}

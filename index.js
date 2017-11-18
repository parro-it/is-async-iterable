/**
 * Return true if the argument is async iterable
 * @param  {any}  val value to check
 * @return {Boolean}     true if the value is async iterable
 */
export default function isAsyncIterable(val) {
  if (val === null || val === undefined) {
    return false;
  }
  const isIterable = typeof val[Symbol.iterator] === "function";
  const isAsync = typeof val[Symbol.asyncIterator] === "function";

  return isAsync || isIterable;
}

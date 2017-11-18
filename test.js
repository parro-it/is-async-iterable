import test from "tape-async";
import isAsyncIterable from ".";

test("exports a function", async t => {
  t.is(typeof isAsyncIterable, "function");
});

test("return false for non async iterables", async t => {
  t.false(isAsyncIterable(0));
});

test("return true for async iterables", async t => {
  t.true(isAsyncIterable((async function*() {})()));
});

test("return true for iterables - array", async t => {
  t.true(isAsyncIterable([]));
});

test("return true for iterables - string", async t => {
  t.true(isAsyncIterable(""));
});

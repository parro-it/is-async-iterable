import test from "tape-async";
import isAsyncIterable from ".";

test("exports a function", t => {
  t.is(typeof isAsyncIterable, "function");
});

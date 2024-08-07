import test from "node:test"
import * as assert from "assert/strict"
import {id} from "../testing_file/id.mjs"

test("return id",()=>
  {
    assert.equal(id(3),3);
  })
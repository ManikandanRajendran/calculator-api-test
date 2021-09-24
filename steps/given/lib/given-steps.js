import {utils} from 'ya-done-api';
const addContext = require('mochawesome/addContext');
import expect from 'expect';
import {requestForCaculator, postOnCalculator} from "../../../api-calls/calculator";

export default function () {
  return (
    this

      .given('set up the test environment details for execution', async function(){
          this.ctx.baseURL = "http://miscellaneous.yospace.com:8080/yospace";
      }
      )
      .given(
        'trigger POST on calculator endpoint for the operator $operator with the operands $operands',
        async function(operator, operands) {
          this.ctx.operator = operator;
          this.ctx.operands = operands;           
          const request = await requestForCaculator.call(this);
          this.ctx.responseOfPostCalculator = await postOnCalculator.call(this, request);
          // console.log(this.ctx.responseOfPostCalculator);
        }
      )
  );
}

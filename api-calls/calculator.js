
import { expect, util } from "chai";
import { utils } from "ya-done-api";

const basicRequest = {
    "operator":"",
    "operands":[]
}

async function requestForCaculator(){
    const finalRequest = {...basicRequest};
    finalRequest.operator = this.ctx.operator;
    let operands1 = this.ctx.operands.split(",");
    finalRequest.operands = [];
    for(let i=0;i<operands1.length;i++)
    {
        finalRequest.operands.push(operands1[i]);
    }
    return finalRequest;
}

async function postOnCalculator(request){
    const path =`${this.ctx.baseURL}/calculator` ;
    const header = {"Content-Type": "application/json"};
    const response = await utils.POST(header, path, JSON.stringify(request));
    return response;
}

async function validateTheResponse(result)
{
    let response = this.ctx.responseOfPostCalculator.data;
    expect(parseFloat(response.result).toFixed(2)).to.be.equal(parseFloat(result).toFixed(2));
}


export{requestForCaculator, postOnCalculator, validateTheResponse}
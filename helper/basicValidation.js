import { assert, expect } from 'chai';

async function basicValidations(expectedStatusCode, expectedStatusText, response)
{
    try{
        expect(response.status).to.be.eql(expectedStatusCode);
        expect(response.statusText).to.be.eql(expectedStatusText);
        expect(response.data).to.not.be.empty;
    }
    catch(error){
        assert.ok(false, error);
    }
    
}


export{basicValidations}
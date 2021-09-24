import {validateTheResponse} from "../../../api-calls/calculator";


export default function () {
  return (
    this
      .then('the result should be return with expected value $result',async function(result) {
          await validateTheResponse.call(this, result);
        }
      )
  );
}

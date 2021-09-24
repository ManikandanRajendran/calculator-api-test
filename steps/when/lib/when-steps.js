import {basicValidations} from "../../../helper/basicValidation";


export default function () {
  return (
    this
      .when('validating the response',async function() {
          await basicValidations.call(this, 200, "", this.ctx.responseOfPostCalculator);
        }
      )
  );
}

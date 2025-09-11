import { useFormik } from "formik";
import React, { useEffect } from "react";
import * as Yup from "yup";
let std = {
  firstname: "rohot",
  lastname: "reddy",
  gender: "male",
  age: "30",
};
function StudentForm() {
  let sform = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      gender: "",
      age: "",
    },
    validationSchema: Yup.object({
      firstname: Yup.string().required("Orey Chusko, firstname kavali").min(3),
      age: Yup.number().test({
        name: "ageLimit",
        test: function (v, ctx) {
          console.log("ctx:::", ctx);
          if (!ctx.parent.gender) {
            return this.createError({
              message: "Mundu Gender Fill Cheyy",
            });
          }
          if (ctx.parent.gender === "male") {
            if (v >= 25) {
              return true;
            } else {
              return this.createError({
                message: "Mogollu 25 tharvatha pelli chesukovali",
              });
            }
          }
          if (ctx.parent.gender === "female") {
            if (v >= 20) {
              return true;
            } else {
              return false;
            }
          }
          if (ctx.parent.gender === "others") {
            return true;
          }
        },
        message: "Age thakkuva ipoindi, poi aduko",
      }),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  useEffect(() => {
    sform.setValues(std);
  }, []);
  return (
    <div className="border border-2 border-primary m-2 p-2">
      <h2>StudentForm</h2>
      <form onSubmit={sform.handleSubmit} novalidate>
        {/* <input type="text" {...sform.getFieldProps("firstname")} />
        <div>
          {sform.touched.firstname && sform.errors && sform.errors.firstname}
        </div> */}
        <label for="validationCustom03" class="form-label">
          First Name
        </label>
        <input
          type="text"
          class={
            sform.touched.firstname && sform.errors && sform.errors.firstname
              ? "form-control is-invalid"
              : "form-control"
          }
          id="validationCustom03"
          {...sform.getFieldProps("firstname")}
        />
        <div class="invalid-feedback">
          {sform.touched.firstname && sform.errors && sform.errors.firstname}
        </div>
        <br />
        <input
          type="radio"
          {...sform.getFieldProps("gender")}
          value="male"
          checked={sform.values.gender == "male"}
        />
        :Male
        <input
          type="radio"
          {...sform.getFieldProps("gender")}
          value="female"
          checked={sform.values.gender == "female"}
        />
        :Female
        <input
          type="radio"
          {...sform.getFieldProps("gender")}
          value="others"
          checked={sform.values.gender == "others"}
        />
        :Others
        <br />
        <input type="text" {...sform.getFieldProps("lastname")} />
        <br />
        <input type="text" {...sform.getFieldProps("age")} />
        <div>{sform.touched.age && sform.errors && sform.errors.age}</div>
        <br />
        <button>Save</button>
        <button
          onClick={() => {
            sform.resetForm();
          }}
        >
          Reset
        </button>
      </form>
    </div>
  );
}

export default StudentForm;

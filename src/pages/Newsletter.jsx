import { Form, redirect, useNavigation } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const newsletterUrl = "https://www.course-api.com/cocktails-newsletter";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log("request",request);
console.log("formdata",formData);
console.log("data",data);
  // handling error by ourselves using try catch
  // so avoid user to redirecting to single page error or global page error
  try {
    const response = await axios.post(newsletterUrl, data); // sends the data to the newsletterUrl link
    // console.log(response);
    toast.success(response.data.msg); // toast notification
    return redirect("/"); // redirects to home page
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    // console.log(error);
    return error;
  }
};
const Newsletter = () => {
  // changing the submit button according to  navigation's state
  const navigation = useNavigation();
  // console.log(navigation);
  const isSubmitting = navigation.state === "submitting";

  return (
    <Form className="form" method="post">
      <h4 style={{ textAlign: "center", marginBottom: "2rem" }}>
        our newsletter
      </h4>
      {/* name */}
      <div className="from-row">
        <label htmlFor="name" className="form-label">
          name
        </label>
        <input type="text" className="form-input" name="name" id="name" />
      </div>
      {/* lastName */}
      <div className="from-row">
        <label htmlFor="lastName" className="form-label">
          last name
        </label>
        <input
          type="text"
          className="form-input"
          name="lastName"
          id="lastName"
        />
      </div>
      {/* email */}
      <div className="from-row">
        <label htmlFor="email" className="form-label">
          email
        </label>
        <input
          type="text"
          className="form-input"
          name="email"
          id="email"
          defaultValue="test@test.com"
        />
      </div>
      <button
        className="btn btn-block"
        style={{ marginTop: "0.5rem" }}
        disabled={isSubmitting}
      >
        {isSubmitting ? "submitting" : "submit"}
      </button>
    </Form>
  );
};

export default Newsletter;

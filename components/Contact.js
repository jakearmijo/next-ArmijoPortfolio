import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { init, sendForm } from "emailjs-com";
init(process.env.USER);

export default function Contact() {
  const { register, handleSubmit, watch, errors, reset } = useForm();
  let message = watch("Message") || "";
  const messageCharsLeft = 1500 - message.length;
  const onSubmit = (data) => {
    console.log(data);
    sendForm("default_service", "template_tqx66ko", "#contact-form").then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
    reset();
  };
  return (
    <>
      <script
        src="https://www.google.com/recaptcha/api.js"
        async
        defer
      ></script>
      <div
        id="projectsTitle"
        data-aos="fade-up"
        className="aos-init aos-animate"
      >
        <h1>Contact</h1>
      </div>
      <div>
        <Form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            {errors.user_name && errors.user_name.type === "required" && (
              <div role="alert">
                Name is required
                <br />
              </div>
            )}
            <Form.Control
              name="user_name"
              placeholder="Firstname & Surname"
              required="required"
              aria-invalid={errors.user_name ? "true" : "false"}
              ref={register({ required: true })}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              placeholder="name@example.com"
              required="required"
              ref={register}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Message"
              name="Message"
              rows={5}
              required="required"
              ref={register}
              maxLength="1500"
            />
            <p className="message-chars-left">{messageCharsLeft}</p>
          </Form.Group>
          <div className="btn-box">
            <Button variant="primary" type="submit" className="btn btn-submit">
              Submit
            </Button>
            <div
              className="g-recaptcha"
              data-sitekey="6LcSEn8jAAAAAMEMWqmqyJP9Rd7XU81X-1Dvh17w"
            ></div>
          </div>
        </Form>
      </div>
    </>
  );
}

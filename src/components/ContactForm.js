import { Form, Button, Row, Col } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function ContactForm({ onSubmit }) {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      agree: false,
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "Name must be at least 3 characters")
        .required("Name is required"),

      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),

      phone: Yup.string()
        .matches(/^[0-9]{9,11}$/, "Phone must be 9-11 digits")
        .required("Phone is required"),

      message: Yup.string()
        .min(10, "Message must be at least 10 characters")
        .required("Message is required"),

      agree: Yup.boolean()
        .oneOf([true], "You must accept the terms"),
    }),

    onSubmit,
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      {/* NAME */}
      <Row className="mb-3">
        <Col>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={formik.touched.name && !!formik.errors.name}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.name}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>

      {/* EMAIL */}
      <Row className="mb-3">
        <Col>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={formik.touched.email && !!formik.errors.email}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.email}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>

      {/* PHONE */}
      <Row className="mb-3">
        <Col>
          <Form.Group>
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="text"
              name="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={formik.touched.phone && !!formik.errors.phone}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.phone}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>

      {/* MESSAGE */}
      <Row className="mb-3">
        <Col>
          <Form.Group>
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              name="message"
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={formik.touched.message && !!formik.errors.message}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.message}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>

      {/* AGREE */}
      <Row className="mb-3">
        <Col>
          <Form.Check
            type="checkbox"
            name="agree"
            label="I agree to the Terms & Conditions"
            checked={formik.values.agree}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isInvalid={formik.touched.agree && !!formik.errors.agree}
            feedback={formik.errors.agree}
            feedbackType="invalid"
          />
        </Col>
      </Row>

      <Button
        variant="primary"
        type="submit"
        disabled={!(formik.isValid && formik.dirty)}
      >
        Send Message
      </Button>
    </Form>
  );
}
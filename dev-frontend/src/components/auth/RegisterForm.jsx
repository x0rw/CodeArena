'use client';
import * as Form from '@radix-ui/react-form';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function RegisterForm() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-7">
          <h2 className="mb-4 text-center">Registration Form</h2>
          <Form.Root
            className="border p-4 rounded-3 shadow"
            onSubmit={(event) => {
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              console.log(Object.fromEntries(formData));
            }}
          >
            <Form.Field name="email" className="mb-3">
              <Form.Label className="form-label">Email</Form.Label>
              <Form.Control asChild>
                <input
                  type="email"
                  className="form-control"
                  required
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                />
              </Form.Control>
              <Form.Message className="text-danger" match="valueMissing">
                Please enter your email
              </Form.Message>
              <Form.Message className="text-danger" match="typeMismatch">
                Please provide a valid email
              </Form.Message>
            </Form.Field>

            <Form.Field name="password" className="mb-4">
              <Form.Label className="form-label">Password</Form.Label>
              <Form.Control asChild>
                <input
                  type="password"
                  className="form-control"
                  required
                  minLength={8}
                />
              </Form.Control>
              <Form.Message className="text-danger" match="valueMissing">
                Please enter a password
              </Form.Message>
              <Form.Message className="text-danger" match="tooShort">
                Password must be at least 8 characters
              </Form.Message>
            </Form.Field>

            <Form.Submit asChild>
              <button
                type="submit"
                className="btn btn-primary w-100"
              >
                Register
              </button>
            </Form.Submit>
          </Form.Root>
        </div>
      </div>
    </div>
  );
}

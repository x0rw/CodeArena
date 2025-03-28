import React from 'react';
import * as Tooltip from '@radix-ui/react-tooltip';

export default function Login() {
  return (
    <div className="container d-flex align-items-center justify-content-center vh-100">
      <div className="row w-100">
        <div className="col-md-6 col-lg-4 mx-auto">
          <div className="card shadow-sm">
            <div className="card-body">
              <h3 className="card-title mb-4 text-center">Login</h3>
              <form>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="name@example.com"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                  />
                </div>
                <Tooltip.Provider>
                  <Tooltip.Root>
                    <Tooltip.Trigger asChild>
                      <button type="submit" className="btn btn-primary w-100">
                        Log In
                      </button>
                    </Tooltip.Trigger>
                    <Tooltip.Portal>
                      <Tooltip.Content
                        className="bg-dark text-white p-2 rounded"
                        side="top"
                        align="center"
                      >
                        Click to log in
                        <Tooltip.Arrow className="fill-dark" />
                      </Tooltip.Content>
                    </Tooltip.Portal>
                  </Tooltip.Root>
                </Tooltip.Provider>
              </form>
              <div className="mt-3 text-center">
                <a href="#" className="text-decoration-none">
                  Forgot password?
                </a>
              </div>
            </div>
          </div>
          <div className="mt-3 text-center">
            <small>
              Don’t have an account?{' '}
              <a href="#" className="text-decoration-none">
                Sign up
              </a>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}


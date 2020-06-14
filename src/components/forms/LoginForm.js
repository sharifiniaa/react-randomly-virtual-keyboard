import React from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const LoginForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <React.Fragment>
      <Form form={form} className="login-form" size="large" onFinish={onFinish}>
        <Form.Item
          className="login-form__input"
          rules={[
            {
              required: true,
              message: "Please enter your Username!",
            },
          ]}
          name="username"
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
            name="username"
          />
        </Form.Item>
        <Form.Item
          rules={[
            {
              required: true,
              message: "Please enter your Password!",
            },
          ]}
          name="password"
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
            name="password"
          />
        </Form.Item>
        <Form.Item
          rules={[
            {
              required: true,
              message: "Please enter Captcha",
            },
          ]}
          name="captcha"
        >
          <Input prefix="" name="captcha" placeholder="captcha" />
        </Form.Item>
        <Form.Item>
          <a href="/">Forgot password</a>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            block
            htmlType="submit"
            className="login-form__button"
          >
            Log in
          </Button>
          <div className="refer-signup mt-3 text-center">
            Don't have account? <a href="/">Sign up!</a>
          </div>
        </Form.Item>
      </Form>
    </React.Fragment>
  );
};

export default LoginForm;

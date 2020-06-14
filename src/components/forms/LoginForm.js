import React, { useState, useEffect, useRef } from "react";
import { Form, Input, Button } from "antd";
import VirtualKeyboard from "../../components/keyboard";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    captcha: "",
  });
  const [focusInput, setFocusInput] = useState("username");
  const keyboard = useRef();
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);
  };

  const formValueChange = (event) => {
    const input = event.target;
    const inputName = input.name;
    const inputValue = input.value;

    setFormData((prevState) => ({
      ...prevState,
      [inputName]: inputValue,
    }));
  };

  useEffect(() => {
    const { username, password, captcha } = formData;
    form.setFieldsValue({
      username,
      password,
      captcha,
    });
  }, [formData, form]);

  const handleChangeKeyboard = (value) => {
    if (value === "{backspace}") {
      let newValue = formData[focusInput].substring(
        0,
        formData[focusInput].length - 1
      );
      setFormData((prevState) => ({
        ...prevState,
        [focusInput]: newValue,
      }));
      return;
    }
    setFormData((prevState) => ({
      ...prevState,
      [focusInput]: prevState[focusInput] + value,
    }));
  };

  const handleInputName = (event) => {
    const inputName = event.target.name;
    setFocusInput(inputName);
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
            onFocus={handleInputName}
            value={formData.username}
            onChange={formValueChange}
          />
        </Form.Item>
        <Form.Item
          rules={[
            {
              required: true,
              message: "Please enter your Password!",
            },
          ]}
          type="password"
          onChange={formValueChange}
          value={formData.password}
          onFocus={handleInputName}
          placeholder="Password"
          name="password"
        >
          <Input.Password
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
          <Input
            prefix=""
            onChange={formValueChange}
            value={formData.captcha}
            onFocus={handleInputName}
            name="captcha"
            placeholder="captcha"
          />
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
        <div ref={keyboard}>
          <VirtualKeyboard handleChangeKeyboard={handleChangeKeyboard} />
        </div>
      </Form>
    </React.Fragment>
  );
};

export default LoginForm;

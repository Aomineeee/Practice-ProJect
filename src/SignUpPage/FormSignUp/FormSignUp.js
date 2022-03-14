import React from "react";
import { Form, Input, Button, message } from "antd";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SET_USER_INFOR } from "../../redux/constants/user";
import { userService } from "../../Services/userService";

export default function FormSignUp() {
  let history = useHistory();
  let dispatch = useDispatch();
  const onFinish = (values) => {
    handleSignUp(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const handleSignUp = (values) => {
    userService
      .dangKy(values)
      .then((res) => {
        console.log(res);
        dispatch({
          type: SET_USER_INFOR,
          payload: res.data.content,
        });
        history.push("/signin");
      })
      .catch((err) => {
        message.error(err.message);
      });
  };
  return (
    <div>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 24 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Tài Khoản"
          name="taiKhoan"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Mật Khẩu"
          name="matKhau"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Họ Tên"
          name="hoTen"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Số Điện Thoại"
          name="soDt"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 24 }}>
          <Button
            className="bg-red-600 text-white border-none"
            htmlType="submit"
          >
            Đăng Ký
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

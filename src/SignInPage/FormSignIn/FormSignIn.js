import React from "react";
import { Form, Input, Button, message } from "antd";
import { useHistory } from "react-router-dom";
import { localService } from "../../Services/localService";
import { useDispatch } from "react-redux";
import { SET_USER_INFOR } from "../../redux/constants/user";
import { userService } from "../../Services/userService";
export default function FormSignIn() {
  let history = useHistory();
  let dispatch = useDispatch();
  const onFinish = (values) => {
    handleSignIn(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const handleSignIn = (values) => {
    userService
      .dangNhap(values)
      .then((res) => {
        dispatch({
          type: SET_USER_INFOR,
          payload: res.data.content,
        });
        localService.setUserInfor(res.data.content);
        history.push("/");
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
        wrapperCol={{ span: 16 }}
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

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Đăng Nhập
          </Button>
        </Form.Item>
      </Form>
      );
    </div>
  );
}

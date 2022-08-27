import React from 'react';
import { Button, Checkbox, Form, Input, Menu, Layout } from 'antd';
import { CalendarOutlined, UserOutlined, HomeOutlined } from '@ant-design/icons';
import './Login.css'
const { Sider, Footer } = Layout;

const LogIn = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <Layout>
        <Sider>
          <h1 className='company'>Mente Sã</h1>
          <Menu
            theme='dark'
            mode='inline'
            defaultSelectedKeys={['0']}
            items={[HomeOutlined, UserOutlined, CalendarOutlined].map(
              (icon, index) => ({
                key: String(index + 1),
                icon: React.createElement(icon),
                label: index === 0 ? 'Dashboard' : index === 1 ? 'Pacientes' : 'Sessões',
              }),
            )}
          />
        </Sider>
        <Layout>
          <Form
            name="basic"
            labelCol={{
              span: 6,
            }}
            wrapperCol={{
              span: 12,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              wrapperCol={{
                offset: 6,
                span: 12,
              }}
            >
              <h1 className='login-title'>Bem vindo ao sistema</h1>
              <div className='login-subtitle'>Por favor entre com a sua conta</div>
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: 'Insira seu melhor email!',
                },
              ]}
            >
              <Input className='input' />
            </Form.Item>

            <Form.Item
              label="Senha"
              name="senha"
              rules={[
                {
                  required: true,
                  message: 'Insira sua senha!',
                },
              ]}
            >
              <Input.Password className='input' />
            </Form.Item>

            <Form.Item
              name="remember"
              wrapperCol={{
                offset: 6,
                span: 12,
              }}
            >
              <Checkbox>Lembrar usuário</Checkbox>
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 6,
                span: 12,
              }}
            >
              <div className='login-subtitle'>Criar conta</div>
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 6,
                span: 12,
              }}
            >
              <Button type="primary" htmlType="submit">
                Login
              </Button>
            </Form.Item>
          </Form>
          <Footer
            style={{
              textAlign: 'center',
            }}
          >
            Mente Sã ©2020 Created by Dev4Tech
          </Footer>
        </Layout>
      </Layout>
    </>
  );
};

export default LogIn;
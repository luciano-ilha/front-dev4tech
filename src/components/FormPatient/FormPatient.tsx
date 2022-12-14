import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import SideMenu from '../SideMenu/SideMenu';
import type { DatePickerProps } from 'antd';
import { Button, DatePicker, Form, Input, message, Layout, InputNumber } from 'antd';
import { useMutation } from '@tanstack/react-query';
import { fetchRegisterPatient } from 'src/services/Patient/service';
import { Welcome } from './FormPatientStyles';

const FormPatient: React.FC = () => {
  const navigate = useNavigate();
  const { Footer } = Layout;
  const [patientName, setPatientName] = useState('');
  const [patientEmail, setPatientEmail] = useState('');
  const [patientDocument, setPatientDocument] = useState('');
  const [patientGender, setPatientGender] = useState('');
  const [patientBirthDate, setPatientBirthDate] = useState('');
  const [patientPhone, setPatientPhone] = useState(0);

  const onFinish = (values: any) => {
    setPatientName(values.name);
    setPatientEmail(values.email);
    setPatientDocument(values.document);
    setPatientGender(values.gender);
    setPatientPhone(values.phone);

    if (
      patientName &&
      patientEmail &&
      patientDocument &&
      patientGender &&
      patientBirthDate &&
      patientPhone
    ) { 
      mutateRegisterPatient();
    }
  };

  const { mutate: mutateRegisterPatient } = useMutation(
    () =>
      fetchRegisterPatient({
        addressId: 1,
        name: patientName && patientName,
        email: patientEmail && patientEmail,
        document: patientDocument && patientDocument,
        gender: patientGender && patientGender,
        birthDate: patientBirthDate && patientBirthDate,
        phone: patientPhone && patientPhone
      }),
    {
      onSuccess: () => {
        message.success('Paciente registrado com Sucesso')
        navigate('/patients')
      },
      onError: (e: any) => {
        const errorMessage = e.response.data.message
        message.error(`Error ao registrar paciente - ${errorMessage}`)
      }
    },
  );

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const onChange: DatePickerProps['onChange'] = (_date, dateString) => {
    setPatientBirthDate(dateString);
  };

  return (
    <>
      <Layout>
        <SideMenu />
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
              <Welcome>Cadastro do Paciente</Welcome>
            </Form.Item>

            <Form.Item
              label="Nome"
              name="name"
              rules={[
                {
                  required: true,
                  message: 'Nome do paciente',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: 'Email do paciente',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Documento"
              name="document"
              rules={[
                {
                  required: true,
                  message: 'Documento do paciente',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="G??nero"
              name="gender"
              rules={[
                {
                  required: true,
                  message: 'G??nero do paciente',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Data de nascimento"
              name="birthDate"
              rules={[
                {
                  required: true,
                  message: 'Data de nascimento do paciente',
                },
              ]}
            >
              <DatePicker onChange={onChange}/>
            </Form.Item>


            <Form.Item
              label="Telefone"
              name="phone"
              rules={[
                {
                  required: true,
                  message: 'Telefone do paciente',
                },
              ]}
            >
              <InputNumber style={{ width: 170 }} />
            </Form.Item>
            
            <Form.Item
              wrapperCol={{
                offset: 6,
                span: 12,
              }}
            >
              <Button
                type="default"
                href='/patients'
                style={{
                  marginRight: 30,
                }}
              >
                Cancelar
              </Button>

              <Button type="primary" htmlType="submit">
                Salvar
              </Button>
            </Form.Item>
          </Form>
          <Footer
            style={{
              textAlign: 'center',
            }}
          >
            Mente S?? ??2020 Created by Dev4Tech
          </Footer>
        </Layout>
      </Layout>
    </>
  );
};

export default FormPatient;
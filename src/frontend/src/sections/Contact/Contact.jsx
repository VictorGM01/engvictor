import { Form, Input } from 'antd';
import Link from '../../components/common/Link/Link';
import Button from '../../components/common/Button/Button';
import styles from './Contact.module.scss';
import emailjs from '@emailjs/browser';
import { useForm } from 'antd/es/form/Form';


export default function Contact() {
  const serviceID = import.meta.env.VITE_SERVICE_ID;
  const templateID = import.meta.env.VITE_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_PUBLIC_KEY;

  const [form] = useForm();

  const onFinish = (values) => {
    emailjs.send(serviceID, templateID, values, publicKey)
      .then((result) => {
        console.log(result.text);
        form.resetFields();
        alert('Obrigado pelo contato! Recebi sua mensagem e retornarei em breve.');
        scrollTo(0, 0);
      }, (error) => {
        console.log(error.text);
        alert('Houve um erro ao enviar a mensagem. Por favor, tente novamente mais tarde.');
      });
  };

  return (
    <section className={styles.contact} id="contact">
      <Link nome='Entre em contato' />
      <span>
        Se desejar <strong>tirar dúvidas, pedir um orçamento ou marcar uma reunião</strong> sobre algum serviço, <strong>basta preencher formulário abaixo!</strong>
      </span>
      <Form
        name="basic"
        initialValues={{ remember: true }}
        autoComplete="off"
        layout='vertical'
        style={{ padding: '0 6rem' }}
        onFinish={onFinish}
        form={form}
      >
        <Form.Item>
          <div className={styles.contact__formRow}>
            <Form.Item
              label="Nome"
              name="nome"
              rules={[{ required: true, message: 'Por favor, digite o seu nome. Isso agiliza nosso contato :)' }]}
            >
              <Input placeholder="Digite seu nome" />
            </Form.Item>

            <Form.Item
              label="E-mail"
              name="email"
              rules={[{
                required: true,
                message: 'Por favor, digite o seu e-mail. Isso agiliza nosso contato :)'
              },
              {
                type: 'email',
                message: 'Por favor, digite um e-mail válido. Isso agiliza nosso contato :)'
              }
              ]}
            >
              <Input placeholder='Digite seu e-mail' />
            </Form.Item>

            <Form.Item
              label="Assunto"
              name="assunto"
            >
              <Input placeholder='Qual assunto do contato?' />
            </Form.Item>
          </div>
        </Form.Item>
        <Form.Item
          label="Mensagem"
          name="mensagem"
        >
          <Input.TextArea placeholder='Se desejar, conte um pouco mais sobre o que precisa...' />
        </Form.Item>

        <Form.Item className={styles.contact__button}>
          <Button nome='Entrar em contato' button type='submit' />
        </Form.Item>
      </Form>
    </section>
  );
}
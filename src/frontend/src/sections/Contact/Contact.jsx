import { Form, Input } from 'antd';
import Link from '../../components/common/Link/Link';
import Button from '../../components/common/Button/Button';
import styles from './Contact.module.scss';


export default function Contact() {
  return (
    <section className={styles.contact} id="contact">
      <Link nome='Entre em contato' />
      <span>
        Se desejar <strong>tirar dúvidas, pedir um orçamento ou marcar uma reunião</strong> sobre algum serviço, <strong>basta entrar em contato comigo</strong> por meio do fórmulario abaixo!
      </span>
      <Form
        name="basic"
        initialValues={{ remember: true }}
        autoComplete="off"
        layout='vertical'
      >
        <Form.Item
          label="Nome"
          name="nome"
          rules={[{ required: true, message: 'Por favor, digite o seu nome. Isso agiliza nosso contato :)' }]}
        >
          <Input placeholder="Digite seu nome"/>
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
          <Input placeholder='Digite seu e-mail'/>
        </Form.Item>

        <Form.Item
          label="Assunto"
          name="assunto"
        >
          <Input placeholder='Qual assunto do contato?'/>
        </Form.Item>

        <Form.Item
          label="Mensagem"
          name="mensagem"
        >
          <Input.TextArea placeholder='Se desejar, conte um pouco mais sobre o que precisa...'/>
        </Form.Item>

        <Form.Item className={styles.contact__button}>
          <Button nome='Entrar em contato' link='#' />
        </Form.Item>
      </Form>
    </section>
  );
}
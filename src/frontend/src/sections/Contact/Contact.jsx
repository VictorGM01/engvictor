import { Form, Input } from "antd";
import Link from "../../components/common/Link/Link";
import Button from "../../components/common/Button/Button";
import styles from "./Contact.module.scss";
import emailjs from "@emailjs/browser";
import { useForm } from "antd/es/form/Form";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation(); // Hook para utilizar as traduções
  const serviceID = import.meta.env.VITE_SERVICE_ID;
  const templateID = import.meta.env.VITE_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_PUBLIC_KEY;

  const [form] = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onFinish = (values) => {
    setIsSubmitting(true);
    emailjs.send(serviceID, templateID, values, publicKey).then(
      (result) => {
        console.log(result.text);
        form.resetFields();
        alert(t("contato.form.sucesso")); // Mensagem de sucesso traduzida
        scrollTo(0, 0);
        setIsSubmitting(false);
      },
      (error) => {
        console.log(error.text);
        alert(t("contato.form.erro")); // Mensagem de erro traduzida
        setIsSubmitting(false);
      }
    );
  };

  return (
    <section className={styles.contact} id="contact">
      <Link nome={t("contato.titulo")} />
      <span dangerouslySetInnerHTML={{ __html: t("contato.descricao") }}></span>
      <Form
        name="basic"
        initialValues={{ remember: true }}
        autoComplete="off"
        layout="vertical"
        onFinish={onFinish}
        form={form}
        className={styles.contact__form}
      >
        <Form.Item>
          <div className={styles.contact__formRow}>
            <Form.Item
              label={t("contato.form.nome")}
              name="nome"
              rules={[
                { required: true, message: t("contato.form.nomeMensagem") },
              ]}
            >
              <Input placeholder={t("contato.form.nomePlaceholder")} />
            </Form.Item>

            <Form.Item
              label={t("contato.form.email")}
              name="email"
              rules={[
                { required: true, message: t("contato.form.emailMensagem") },
                {
                  type: "email",
                  message: t("contato.form.emailMensagemInvalido"),
                },
              ]}
            >
              <Input placeholder={t("contato.form.emailPlaceholder")} />
            </Form.Item>

            <Form.Item label={t("contato.form.assunto")} name="assunto">
              <Input placeholder={t("contato.form.assuntoPlaceholder")} />
            </Form.Item>
          </div>
        </Form.Item>
        <Form.Item label={t("contato.form.mensagem")} name="mensagem">
          <Input.TextArea placeholder={t("contato.form.mensagemPlaceholder")} />
        </Form.Item>

        <Form.Item className={styles.contact__button}>
          {isSubmitting ? (
            <Button
              type="button"
              disabled
              nome={t("contato.form.enviando")}
              button
            />
          ) : (
            <Button type="submit" nome={t("contato.form.enviar")} button />
          )}
        </Form.Item>
      </Form>
    </section>
  );
}

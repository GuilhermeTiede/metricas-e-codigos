import { useState } from "react";
import { notification } from "antd";
import i18n from "../../translation";

interface IValues {
  name: string;
  email: string;
  message: string;
}

const initialValues: IValues = {
  name: "",
  email: "",
  message: "",
};

export const useForm = (validate: { (values: IValues): IValues }) => {
  const [formState, setFormState] = useState<{
    values: IValues;
    errors: IValues;
  }>({
    values: { ...initialValues },
    errors: { ...initialValues },
  });

  const handleSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    const values = formState.values;
    const errors = validate(values);
    setFormState((prevState) => ({ ...prevState, errors }));

    if (!Object.values(errors).every((e) => e === "")) {
      notification["error"]({
        message: i18n.t("Atenção"),
        description: i18n.t("Por favor, preencha os campos obrigatórios."),
      });
      return;
    }

    const phone = "554899743441"; // número destino
    const messageTemplate = `Olá, meu nome é ${values.name}. Email: ${values.email}. Mensagem: ${values.message}`;
    const encoded = encodeURIComponent(messageTemplate);
    const waUrl = `https://wa.me/${phone}?text=${encoded}`;

    // Feedback visual rápido antes do redirect
    notification["success"]({
      message: i18n.t("Redirecting"),
      description: i18n.t("Opening WhatsApp..."),
    });

    // Reset local
    (event.target as HTMLFormElement).reset();
    setFormState(() => ({
      values: { ...initialValues },
      errors: { ...initialValues },
    }));

    // Redireciona
    window.open(waUrl, "_blank");
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    event.persist();
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      values: {
        ...prevState.values,
        [name]: value,
      },
      errors: {
        ...prevState.errors,
        [name]: "",
      },
    }));
  };

  return {
    handleChange,
    handleSubmit,
    values: formState.values,
    errors: formState.errors,
  };
};

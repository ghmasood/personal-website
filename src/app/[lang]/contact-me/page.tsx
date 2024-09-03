'use client';

import { useState } from 'react';

import ContactMeForm from 'components/Pages/contactMe/form';
import FormCode from 'components/Pages/contactMe/formCode';

export type formDataType = {
  name: string;
  email: string;
  message: string;
};

function ContactMe() {
  //STATES
  const [formData, setFormData] = useState<formDataType>({
    name: '',
    email: '',
    message: '',
  });

  return (
    <>
      <ContactMeForm formData={formData} setFormData={setFormData} />
      <FormCode formData={formData} />
    </>
  );
}

export default ContactMe;

'use client';

import { useState } from 'react';

import { useGetDictionaryClient } from 'context/dictionaryProvider';

import ContactMeForm from 'components/pages/contactMe/components/form';
import FormCode from 'components/pages/contactMe/components/formCode';

export type formDataType = {
  name: string;
  email: string;
  message: string;
};

function ContactMe() {
  //DICTIONARY
  const dict = useGetDictionaryClient();

  //STATES
  const [formData, setFormData] = useState<formDataType>({
    name: '',
    email: '',
    message: '',
  });

  return (
    <>
      <ContactMeForm locale={dict.contactPage} formData={formData} setFormData={setFormData} />
      <FormCode formData={formData} />
    </>
  );
}

export default ContactMe;

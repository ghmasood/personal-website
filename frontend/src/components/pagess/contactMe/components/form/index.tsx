import { Button } from '@nextui-org/button';
import { Input, Textarea } from '@nextui-org/input';

import { formDataType } from 'app/[lang]/contact-me/page';
import type { DictT } from 'locale/dictionaries';

type formDataProps = {
  formData: formDataType;
  setFormData: React.Dispatch<React.SetStateAction<formDataType>>;
  locale: DictT['contactPage'];
};
function ContactMeForm({ formData, setFormData, locale }: formDataProps) {
  return (
    <div className='flex w-full flex-col items-center justify-center gap-5 border-line xl:w-[40%] xl:border-e'>
      <form className='flex w-[70%] flex-col gap-3'>
        <Input
          classNames={{
            label: '!text-tSecondary !font-[450]',
            input: '!text-[#465E77]',
            inputWrapper:
              'bg-surfaceSecondary border border-line hover:!bg-surfacePrimary group-data-[focus=true]:!bg-surfacePrimary  group-data-[focus=true]:!shadow group-data-[focus=true]:!shadow-surfacePrimary',
          }}
          radius='sm'
          label={locale.name}
          labelPlacement='outside'
          placeholder=' '
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <Input
          classNames={{
            label: '!text-tSecondary !font-[450]',
            input: '!text-[#465E77]',
            inputWrapper:
              'bg-surfaceSecondary border border-line hover:!bg-surfacePrimary group-data-[focus=true]:!bg-surfacePrimary  group-data-[focus=true]:!shadow group-data-[focus=true]:!shadow-surfacePrimary',
          }}
          radius='sm'
          label={locale.email}
          type='email'
          labelPlacement='outside'
          placeholder=' '
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <Textarea
          minRows={12}
          classNames={{
            label: '!text-tSecondary !font-[450]',
            input: '!text-[#465E77]',
            inputWrapper:
              'bg-surfaceSecondary border border-line hover:!bg-surfacePrimary group-data-[focus=true]:!bg-surfacePrimary  group-data-[focus=true]:!shadow group-data-[focus=true]:!shadow-surfacePrimary',
          }}
          radius='sm'
          label={locale.message}
          labelPlacement='outside'
          placeholder=' '
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
        <Button className='mt-2 bg-accent-blue text-tPrimary' radius='sm'>
          {locale.submit}
        </Button>
      </form>
    </div>
  );
}

export default ContactMeForm;

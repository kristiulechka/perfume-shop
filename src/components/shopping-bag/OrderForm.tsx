import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Form, FormRow, FieldWrapper, Label, Input, ErrorText } from './OrderForm.styles';

const orderSchema = z.object({
  firstName: z.string().min(2, 'Required'),
  lastName: z.string().min(2, 'Required'),
  email: z.string().email('Invalid email'),
  phone: z.string().min(7, 'Required'),
  address: z.string().min(5, 'Required'),
  city: z.string().min(2, 'Required'),
  postalCode: z.string().min(3, 'Required'),
  country: z.string().min(2, 'Required'),
});

export type OrderFormData = z.infer<typeof orderSchema>;

interface OrderFormProps {
  onSubmit: (data: OrderFormData) => void;
  formId: string;
}

export const OrderForm = ({ onSubmit, formId }: OrderFormProps) => {
  const { register, handleSubmit, formState: { errors } } = useForm<OrderFormData>({
    resolver: zodResolver(orderSchema),
  });

  return (
    <Form id={formId} onSubmit={handleSubmit(onSubmit)}>
      <FormRow>
        <FieldWrapper>
          <Label>First name</Label>
          <Input {...register('firstName')} placeholder="Jane" hasError={!!errors.firstName} />
          {errors.firstName && <ErrorText>{errors.firstName.message}</ErrorText>}
        </FieldWrapper>
        <FieldWrapper>
          <Label>Last name</Label>
          <Input {...register('lastName')} placeholder="Doe" hasError={!!errors.lastName} />
          {errors.lastName && <ErrorText>{errors.lastName.message}</ErrorText>}
        </FieldWrapper>
      </FormRow>

      <FieldWrapper>
        <Label>Email</Label>
        <Input {...register('email')} placeholder="jane@example.com" hasError={!!errors.email} />
        {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
      </FieldWrapper>

      <FieldWrapper>
        <Label>Phone</Label>
        <Input {...register('phone')} placeholder="+1 234 567 8900" hasError={!!errors.phone} />
        {errors.phone && <ErrorText>{errors.phone.message}</ErrorText>}
      </FieldWrapper>

      <FieldWrapper>
        <Label>Address</Label>
        <Input {...register('address')} placeholder="123 Main Street" hasError={!!errors.address} />
        {errors.address && <ErrorText>{errors.address.message}</ErrorText>}
      </FieldWrapper>

      <FormRow>
        <FieldWrapper>
          <Label>City</Label>
          <Input {...register('city')} placeholder="New York" hasError={!!errors.city} />
          {errors.city && <ErrorText>{errors.city.message}</ErrorText>}
        </FieldWrapper>
        <FieldWrapper>
          <Label>Postal code</Label>
          <Input {...register('postalCode')} placeholder="10001" hasError={!!errors.postalCode} />
          {errors.postalCode && <ErrorText>{errors.postalCode.message}</ErrorText>}
        </FieldWrapper>
      </FormRow>

      <FieldWrapper>
        <Label>Country</Label>
        <Input {...register('country')} placeholder="United States" hasError={!!errors.country} />
        {errors.country && <ErrorText>{errors.country.message}</ErrorText>}
      </FieldWrapper>
    </Form>
  );
};

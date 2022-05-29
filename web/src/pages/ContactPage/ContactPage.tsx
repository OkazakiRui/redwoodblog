import { MetaTags } from '@redwoodjs/web'
import {
  FieldError,
  Form,
  TextField,
  TextAreaField,
  Submit,
  SubmitHandler,
  Label,
} from '@redwoodjs/forms'

type FormValues = {
  name: string
  email: string
  message: string
}

const ContactPage = () => {
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data)
  }

  return (
    <>
      <MetaTags title="Contact" description="Contact page" />

      <Form onSubmit={onSubmit}>
        <Label name="name" errorClassName="rw_error">
          Name
        </Label>
        <TextField
          name="name"
          validation={{ required: true }}
          errorClassName="rw_error"
        />
        <FieldError name="name" className="rw_error" />

        <Label name="email" errorClassName="rw_error">
          Email
        </Label>
        <TextField
          name="email"
          validation={{ required: true }}
          errorClassName="rw_error"
        />
        <FieldError name="email" className="rw_error" />

        <Label name="message" errorClassName="rw_error">
          Message
        </Label>
        <TextAreaField
          name="message"
          validation={{ required: true }}
          errorClassName="rw_error"
        />
        <FieldError name="message" className="rw_error" />

        <Submit>Save</Submit>
      </Form>
    </>
  )
}

export default ContactPage

import { MetaTags, useMutation } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'
import {
  FieldError,
  Form,
  TextField,
  TextAreaField,
  Submit,
  SubmitHandler,
  Label,
} from '@redwoodjs/forms'
import {
  CreateContactMutation,
  CreateContactMutationVariables,
} from 'types/graphql'

const CREATE_CONTACT = gql`
  mutation CreateContactMutation($input: CreateContactInput!) {
    createContact(input: $input) {
      id
    }
  }
`

type FormValues = {
  name: string
  email: string
  message: string
}

const ContactPage = () => {
  const [create, { loading, error }] = useMutation<
    CreateContactMutation,
    CreateContactMutationVariables
  >(CREATE_CONTACT, {
    onCompleted: () => {
      toast.success('Thank you for your submission!')
    },
  })

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    create({ variables: { input: data } })
  }

  return (
    <>
      <MetaTags title="Contact" description="Contact page" />

      <Toaster />
      {/* config={{ mode: 'onBlur' }} → リアルタイムでエラー表示 */}
      <Form onSubmit={onSubmit} config={{ mode: 'onBlur' }}>
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
          validation={{
            required: true,
          }}
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

        <Submit disabled={loading}>Save</Submit>
      </Form>
    </>
  )
}

export default ContactPage

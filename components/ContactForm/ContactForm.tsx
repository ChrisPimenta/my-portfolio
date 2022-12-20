import styled from '@emotion/styled';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

type Inputs = {
    name: string
    email: string
    message: string
}


const ContactForm = () => {
    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .required('First Name is required'),
        email: Yup.string()
            .required('Email is required')
            .email('Email is invalid'),
        message: Yup.string()
            .max(500, 'Message cannot exceed 500')
            .required('Message is required')
    });

    const formValidationOptions = { resolver: yupResolver(validationSchema) };

    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>(formValidationOptions);

    const onSubmit = async (data: any) => {
        console.log(data);
        // const url = process.env.CONTACT_US_SEND_EMAIL === undefined ? '' : process.env.CONTACT_US_SEND_EMAIL;
        // const response = await fetch(url, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/x-www-form-urlencoded'
        //     },
        //     body: JSON.stringify(data)
        // })
    };

    // action={process.env.CONTACT_US_SEND_EMAIL} method="POST"
    // { required: true, maxLength: 50 }
    // { required: true, maxLength: 500 }

    const Form = styled.form`
        display: flex;
        flex-direction: column;
    `;

    console.log(errors.name?.message);

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="name">Name</label>
            <input {...register("name")} />
            <div className="invalid-feedback">{errors.name?.message}</div>
            <label htmlFor="name">Email</label>
            <input {...register("email")} />
            <div className="invalid-feedback">{errors.email?.message}</div>
            <label htmlFor="message">Leave a message</label>
            <textarea rows={5} {...register("message")} />
            <div className="invalid-feedback">{errors.message?.message}</div>
            <button type='submit'>Submit</button>
        </Form>
    )
}

export default ContactForm;

// Ideas:
// Contact Form
//  Google places API pin. - Where i live, roughly
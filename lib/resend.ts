"use server";

import {Resend} from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: { name: string; email: string; subject: string; message: string }) => {
    await resend.emails.send({
  to: "freddyantoniomachado@gmail.com",
  from: 'onboarding@resend.dev',
  subject: "Solicitud de servicio: "+formData.subject,
  html:`<p>Nombre: ${formData.name}</p>
        <p>Email: ${formData.email}</p>
        <p>Asunto: ${formData.subject}</p>
        <p>Mensaje: ${formData.message}</p>`
}).then(data => {
    return data.error
}).catch(error => {
    console.error(error);
})
}
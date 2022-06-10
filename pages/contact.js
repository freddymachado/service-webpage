import Layout from '../components/Layout'
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("mpzbnwbr");
  if (state.succeeded) {
      return <p>Muchas gracias, estaremos en contacto contigo tan pronto como sea posible.</p>;
  }
  return (
    <><form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="email">Correo electrónico</label>
        <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" placeholder="Correo electrónico"/>
          <small id="emailHelp" className="form-text text-muted">No compartiremos este correo con nadie.</small>
        </div>
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors} />
      <div className="form-group">
        <textarea
          id="message" placeholder="Mensaje"
          name="message" className="form-control" rows="3" />
        <ValidationError
          prefix="Message"
          field="message" 
          errors={state.errors} />
      </div>
      <button type="submit" className="btn btn-primary mb-2" disabled={state.submitting}>Enviar</button>
    </form></>
  );
}
const Contact = () => (
    <Layout footer={false}>
      <h1>Contacto</h1>
    <ContactForm />
    </Layout>

) 

export default Contact;
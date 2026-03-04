import ContactForm from "./ContactForm";
import '../css/ContactContainer.css';
export default function ContactContainer() {
  const handleSubmit = (values, { resetForm }) => {
    
    
    const existingMessages =
      JSON.parse(localStorage.getItem("contactMessages")) || [];

    
    const updatedMessages = [...existingMessages, values];

    
    localStorage.setItem(
      "contactMessages",
      JSON.stringify(updatedMessages)
    );

    alert("Message saved locally!");
    resetForm();
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <ContactForm onSubmit={handleSubmit} />
    </div>
  );
}
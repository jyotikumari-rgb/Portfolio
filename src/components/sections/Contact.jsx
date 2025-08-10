
import React, { useRef, useState } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import EarthCanvas from "../canvas/Earth";

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  z-index: 1;
  align-items: center;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 0px 0px 80px 0px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: rgba(17, 25, 40, 0.83);
  border: 1px solid rgba(255, 255, 255, 0.125);
  padding: 32px;
  border-radius: 12px;
  box-shadow: rgba(23, 92, 230, 0.1) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`;

const ContactTitle = styled.div`
  font-size: 28px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary + 50};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary + 50};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactButton = styled.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: hsla(271, 100%, 50%, 1);
  background: linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: -moz-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: -webkit-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.02);
  }
`;

const ErrorMessage = styled.div`
  color: #ff3333;
  font-size: 14px;
  margin-top: -8px;
`;

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    subject: "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.from_name.trim()) newErrors.from_name = "Name is required";
    if (!formData.from_email.trim()) {
      newErrors.from_email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.from_email)) {
      newErrors.from_email = "Please enter a valid email";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    if (!formRef.current) {
      console.error("Form reference is not available");
      return;
    }

    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_va4n5cg",
        "template_fasg60b",
        formRef.current,
        {
          publicKey: "xmLcpJiKCPWqsUD7S",
        }
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          alert("Message Sent Successfully!");
          setFormData({
            from_name: "",
            from_email: "",
            subject: "",
            message: ""
          });
          setErrors({});
        },
        (error) => {
          console.error("Email sending failed:", error);
          alert("Failed to send the message. Please try again later.");
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <Container>
      <Wrapper>
        <EarthCanvas />
        <Title>Contact</Title>
        <Desc>
          Feel free to reach out to me for any questions or opportunities!
        </Desc>
        <ContactForm ref={formRef} onSubmit={handleSubmit}>
          <ContactTitle>Email Me 🚀</ContactTitle>
          
          <ContactInput 
            placeholder="Your Name" 
            name="from_name" 
            value={formData.from_name}
            onChange={handleChange}
          />
          {errors.from_name && <ErrorMessage>{errors.from_name}</ErrorMessage>}
          
          <ContactInput 
            placeholder="Your Email" 
            name="from_email" 
            value={formData.from_email}
            onChange={handleChange}
          />
          {errors.from_email && <ErrorMessage>{errors.from_email}</ErrorMessage>}
          
          <ContactInput 
            placeholder="Subject" 
            name="subject" 
            value={formData.subject}
            onChange={handleChange}
          />
          {errors.subject && <ErrorMessage>{errors.subject}</ErrorMessage>}
          
          <ContactInputMessage 
            placeholder="Message" 
            name="message" 
            rows={4} 
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && <ErrorMessage>{errors.message}</ErrorMessage>}
          
          <ContactButton 
            type="submit" 
            value={isSubmitting ? "Sending..." : "Send"} 
            disabled={isSubmitting}
          />
        </ContactForm>
      </Wrapper>
    </Container>
  );
};

export default Contact;
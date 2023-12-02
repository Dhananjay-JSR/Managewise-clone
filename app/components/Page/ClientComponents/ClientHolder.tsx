import Accordion from "./Modules/Accordion";

export default function ClientComponnet() {
  return (
    <>
      <Accordion
        headline="What is Manage Wise and what does it offer?"
        subline="Manage Wise is a comprehensive management platform designed to streamline your business operations, enhance productivity, and drive success. It offers a range of features including task management, scheduling, communication tools, analytics, and more."
      />

      <Accordion
        headline="Is Manage Wise suitable for small businesses and larger enterprises alike?"
        subline="Yes, Manage Wise is designed to cater to the needs of both small businesses and larger enterprises. Its scalable features and customizable options make it versatile for various business sizes."
      />

      <Accordion
        headline="Can I access Manage Wise from different devices and platforms?"
        subline="Yes, Manage Wise offers cross-platform compatibility, allowing you to access and use the platform seamlessly on desktops, web browsers, and mobile devices."
      />

      <Accordion
        headline="What kind of support options do you offer to users?"
        subline="We provide responsive customer support via chat and email to assist you with any inquiries, issues, or guidance you may need while using Manage Wise."
      />

      <Accordion
        headline="How secure is the data stored within Manage Wise?"
        subline="Your data's security is a top priority. Manage Wise employs robust data encryption and follows industry best practices to ensure your sensitive information is safe and protected."
      />
    </>
  );
}

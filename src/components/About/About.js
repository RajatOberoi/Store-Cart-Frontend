import './About.scss';

const About = () => {
  return (
    <div className="about-container">
      <h2>About Us</h2>
      <p>Welcome to our e-commerce store! We offer a wide range of products from various categories.</p>
      <p>Our website is built using React, a popular JavaScript library that allows us to create highly dynamic and interactive user interfaces which adapts to your device and preferences. We also use SCSS to style our components and make them visually appealing and consistent. With Redux Toolkit, a powerful and efficient tool we can manage the state of our application in a centralized and efficient way, ensuring that all components are always up to date and synchronized.</p>
      <p>At the heart of our website is Strapi, a flexible and scalable CMS that allows us to manage our content and products with ease. With Strapi, we can quickly add new products, update existing ones, and manage our inventory, all from a single, user-friendly interface.</p>
      <p>To ensure the security and reliability of our payments, we use Stripe, a trusted and secure payment processing platform. With Stripe, our customers can easily make payments using their credit or debit cards, and we can rest assured that all transactions are handled securely and efficiently.</p>
      <p>Thank you for choosing our e-commerce store, and we look forward to serving you soon!</p>
    </div>
  );
};

export default About
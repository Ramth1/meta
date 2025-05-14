// data/services.ts
export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  detailedDescription: string;
}

export const services: Service[] = [
  {
    id: 1,
    title: "Custom Software Development",
    description: "Build scalable enterprise solutions...",
    detailedDescription: "We specialize in creating tailored software solutions using modern tech stacks including Node.js, Python, and .NET. Our agile development process ensures timely delivery while maintaining the highest quality standards. From concept to deployment, we handle every aspect of software creation.",
    icon: "💻"
  },
  {
    id: 2,
    title: "Cloud Solutions",
    description: "AWS, Azure, and GCP implementations...",
    detailedDescription: "Our cloud experts provide end-to-end solutions including infrastructure setup, migration services, and ongoing maintenance. We implement CI/CD pipelines, containerization with Docker/Kubernetes, and infrastructure-as-code using Terraform.",
    icon: "☁️"
  },
  {
    id: 3,
    title: "Mobile Development",
    description: "Cross-platform mobile apps...",
    detailedDescription: "We create performant mobile applications using React Native and Flutter. Our apps feature offline capabilities, push notifications, and seamless third-party API integrations. We follow Material Design and Human Interface guidelines for platform-specific experiences.",
    icon: "📱"
  },
  {
    id: 4,
    title: "DevOps & Automation",
    description: "CI/CD pipelines and infrastructure management...",
    detailedDescription: "Implement DevOps best practices with automated testing, continuous integration, and deployment pipelines. We configure monitoring solutions with Prometheus/Grafana and set up logging with ELK stack.",
    icon: "🔄"
  },
  {
    id: 5,
    title: "AI/ML Solutions",
    description: "Machine learning model development...",
    detailedDescription: "From predictive analytics to computer vision solutions, we develop and deploy machine learning models using TensorFlow and PyTorch. We handle data preprocessing, model training, and deployment on cloud platforms.",
    icon: "🤖"
  },
  {
    id: 6,
    title: "QA & Testing",
    description: "Comprehensive quality assurance...",
    detailedDescription: "We provide automated testing solutions using Selenium and Cypress, performance testing with JMeter, and security testing with OWASP tools. Our testing frameworks ensure 98%+ test coverage.",
    icon: "✅"
  }
];
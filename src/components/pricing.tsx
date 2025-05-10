import { CheckCircle, Workflow, MonitorSmartphone } from 'lucide-react';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import AOS from 'aos';

const pricingData = {
  automation: [
    {
      tier: 'Starter',
      price: '$199',
      description: 'Basic automation setup with 1-2 integrations',
      features: ['Zapier or N8N', 'Basic triggers', '1 automation workflow'],
    },
    {
      tier: 'Growth',
      price: '$299',
      description: 'Multi-step workflows with conditional logic',
      features: ['Zapier or N8N', '3-5 workflows', 'Email/CRM integration', '', 'Self-hosted N8N (including free-tier hosting) support at additioal $100'],
    },
    {
      tier: 'Custom Journey',
      price: 'From $599',
      description: 'Full automation for a business process (e.g., customer journey)',
      features: ['Self-hosted n8n support', 'Cloud optimization', 'Tailored automation stack'],
    },
  ],
  web: [
    {
      tier: 'Landing Page/ Business Site',
      price: '$199',
      description: 'One-page conversion-focused landing site',
      features: ['Responsive design',  'Call-to-action forms', 'One year hosting', 'SSL', 'Conversion optimized', 'Automation ready'],
    },
    {
      tier: 'Redesign/Upgrade',
      price: '$299',
      description: 'Improve or refresh existing website',
      features: ['UX improvements', 'Speed optimization', 'SEO setup'],
    },
    {
      tier: 'Custom Business App',
      price: 'From $999',
      description: 'Custom business site with up to 7 pages',
      features: ['Custom sections', '3rd party integrations', 'High-grade Security', 'Database integration', 'Branding elements'],
    },
  ],
};

const PricingTable = ({ title, subtitle, subtitle2, plans, Icon }: { title: string; subtitle: string; subtitle2: string; plans: typeof pricingData.automation; Icon: React.ComponentType<React.SVGProps<SVGSVGElement>> }) => (
  <section className="py-12 px-4 md:px-16 bg-white text-gray-800">
    <div className="flex items-center justify-center gap-3 mb-2">
      <Icon className="w-15 h-15 text-blue-600" />
      <h1 className="!text-3xl md:!text-4xl lg:!text-5xl font-bold text-center">{title}</h1>
    </div>
    <p className="text-center text-gray-500 mb-10 !text-xl quoted-text italic tracking-wider">{subtitle}</p>
    <p className="text-center text-gray-500 mb-10 text-sm">{subtitle2}</p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {plans.map((plan) => (
        <div
          key={plan.tier}
          className="border rounded-3xl shadow-md p-6 flex flex-col hover:shadow-lg transition"
          data-aos="fade-up"
        >
          <h3 className="text-xl font-semibold mb-2">{plan.tier}</h3>
          <p className="text-2xl font-bold text-primary mb-2">{plan.price}</p>
          <p className="mb-4 text-sm text-gray-600">{plan.description}</p>
          <ul className="space-y-2 mb-4">
            {plan.features.map((feature, index) => (
              <li key={index} className="flex items-center text-sm">
                <CheckCircle className="text-green-500 w-4 h-4 mr-2" /> {feature}
              </li>
            ))}
          </ul>
          <div className="mt-auto">
            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-xl hover:bg-blue-700 transition">
              Choose Plan
            </button>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default function PricingSection() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section>
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-16">What We Offer</h1>
          <PricingTable
            title="Automation Services"
            subtitle="Time is your most valuable asset. Free it up and focus on growing your business, instead of getting stuck running it."
            subtitle2="Our process includes the use of N8N for affordability and
                  advanced workflows or Zapier for simplicity
                  Depending on your needs, we can use either of these tools to
                  create a custom solution for you."
            plans={pricingData.automation}
            Icon={Workflow}
          />
          <PricingTable
            title="Web Services"
            subtitle="Your website isn&apos;t just design. It&apos;s your handshake, your pitch, your reputation. Like they say, first impressions matter."
            subtitle2="We build both WordPress and custom websites depending on your
                  needs. Using React Next.js and Tailwind CSS we build fast,
                  responsive, and user-centered websites deployed with
                  high-grade security standards and Global CDN reach."
            plans={pricingData.web}
            Icon={MonitorSmartphone}
          />
        </div>
      </div>
    </section>
  );
}

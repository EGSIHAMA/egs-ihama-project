'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter for redirection

interface FormData {
  name: string;
  email: string;
  website: string;
  tools: string[];
  otherTools: string;
  task: string;
  priority: string;
  budget: string;
  call: string;
}

const initialState: FormData = {
  name: '',
  email: '',
  website: '',
  tools: [],
  otherTools: '',
  task: '',
  priority: '',
  budget: '',
  call: '',
};

const toolsOptions = [
  'Gmail', 'Google Sheets', 'Notion', 'Airtable', 'Calendly',
  'Stripe', 'Paystack', 'WhatsApp', 'Trello', 'Shopify',
];

export default function AuditForm() {
  const [formData, setFormData] = useState<FormData>(initialState);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter(); // Initialize useRouter for redirection

  const validateField = (field: keyof FormData, value: string) => {
    if (field === 'name' && (!value || value.length < 2 || value.length > 30)) {
      return 'Name must be between 2 and 30 characters.';
    }
    if (field === 'email' && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      return 'Please enter a valid email address.';
    }
    if (field === 'budget' && !value) {
      return 'Budget is required.';
    }
    if (field === 'call' && !value) {
      return 'This field is required.';
    }
    return '';
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    Object.keys(formData).forEach((key) => {
      const field = key as keyof FormData;
      const value = formData[field];
      const error = typeof value === 'string' ? validateField(field, value) : '';
      if (error) newErrors[field] = error;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    const error = validateField(field, value);
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const toggleTool = (tool: string) => {
    setFormData((prev) => ({
      ...prev,
      tools: prev.tools.includes(tool)
        ? prev.tools.filter((t) => t !== tool)
        : [...prev.tools, tool],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      const res = await fetch('/api/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Submission failed');
      setFormData(initialState);

      // Redirect to the Thank You page
      router.push('/thankYou');
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto p-4 bg-white rounded-lg shadow">
      {/* Name Field */}
      <div className="relative">
        <label className="block font-medium">What is your name?</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => handleChange('name', e.target.value)}
          className={`w-full border p-2 rounded ${errors.name ? 'border-red-500' : ''}`}
        />
        {errors.name && (
          <div className="absolute top-full left-0 mt-1 bg-red-500 text-white text-sm rounded px-2 py-1">
            {errors.name}
          </div>
        )}
      </div>

      {/* Email Field */}
      <div className="relative">
        <label className="block font-medium">What is your email?</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => handleChange('email', e.target.value)}
          className={`w-full border p-2 rounded ${errors.email ? 'border-red-500' : ''}`}
        />
        {errors.email && (
          <div className="absolute top-full left-0 mt-1 bg-red-500 text-white text-sm rounded px-2 py-1">
            {errors.email}
          </div>
        )}
      </div>

      {/* Website Field */}
      <div>
        <label className="block font-medium">Website or Instagram/business link</label>
        <input
          type="url"
          value={formData.website}
          onChange={(e) => handleChange('website', e.target.value)}
          className="w-full border p-2 rounded"
        />
      </div>

      {/* Tools Field */}
      <div>
        <label className="block font-medium mb-1">Which tools do you use daily?</label>
        <div className="flex flex-wrap gap-2">
          {toolsOptions.map((tool) => (
            <button
              key={tool}
              type="button"
              onClick={() => toggleTool(tool)}
              className={`px-3 py-1 border rounded-full ${
                formData.tools.includes(tool) ? 'bg-blue-500 text-white' : 'bg-gray-100'
              }`}
            >
              {tool}
            </button>
          ))}
        </div>
        <input
          type="text"
          placeholder="Others"
          value={formData.otherTools}
          onChange={(e) => handleChange('otherTools', e.target.value)}
          className="mt-2 w-full border p-2 rounded"
        />
      </div>

      {/* Repetitive Task Field */}
      <div>
        <label className="block font-medium">Describe one repetitive task</label>
        <textarea
          value={formData.task}
          onChange={(e) => handleChange('task', e.target.value)}
          className="w-full border p-2 rounded"
        />
      </div>

      {/* Automation Goal Field */}
      <div>
        <label className="block font-medium">What do you want to automate?</label>
        <textarea
          value={formData.priority}
          onChange={(e) => handleChange('priority', e.target.value)}
          className="w-full border p-2 rounded"
        />
      </div>

      {/* Budget Field */}
      <div className="relative">
        <label className="block font-medium">Monthly budget for tools</label>
        <select
          value={formData.budget}
          onChange={(e) => handleChange('budget', e.target.value)}
          className={`w-full border p-2 rounded ${errors.budget ? 'border-red-500' : ''}`}
        >
          <option value="">Select budget</option>
          <option>USD0 - Only free tools</option>
          <option>USD10 to 30</option>
          <option>USD50 to 100</option>
          <option>USD100+</option>
        </select>
        {errors.budget && (
          <div className="absolute top-full left-0 mt-1 bg-red-500 text-white text-sm rounded px-2 py-1">
            {errors.budget}
          </div>
        )}
      </div>

      {/* Call Preference Field */}
      <div className="relative">
        <label className="block font-medium">Would you like a 15-minute call?</label>
        <select
          value={formData.call}
          onChange={(e) => handleChange('call', e.target.value)}
          className={`w-full border p-2 rounded ${errors.call ? 'border-red-500' : ''}`}
        >
          <option value="">Select option</option>
          <option>Yes</option>
          <option>No</option>
        </select>
        {errors.call && (
          <div className="absolute top-full left-0 mt-1 bg-red-500 text-white text-sm rounded px-2 py-1">
            {errors.call}
          </div>
        )}
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
}
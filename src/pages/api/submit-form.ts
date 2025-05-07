// pages/api/submit-form.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import Airtable from 'airtable';

const base = new Airtable({ apiKey: process.env.AIRTABLE_TOKEN }).base(process.env.AIRTABLE_BASE_ID!);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST allowed' });
  }

  try {
    const {
      name,
      email,
      website,
      tools,
      otherTools,
      task,
      priority,
      budget,
      call,
    } = req.body;

    // ✅ Ensure tools is an array
    const parsedTools = Array.isArray(tools)
      ? tools
      : typeof tools === 'string'
        ? tools.split(',').map((tool: string) => tool.trim())
        : [];

    await base(process.env.AIRTABLE_TABLE_NAME!).create([
      {
        fields: {
          name,
          email,
          website,
          tools: parsedTools,
          otherTools,
          task,
          priority,
          budget, // Airtable single-select accepts plain string
          call,   // Airtable single-select accepts plain string
        },
      },
    ]);

    return res.status(200).json({ message: 'Success' });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Airtable error:', error.message);
    } else {
      console.error('Airtable error:', error);
    }
    return res.status(500).json({ message: 'Failed to submit' });
  }
}

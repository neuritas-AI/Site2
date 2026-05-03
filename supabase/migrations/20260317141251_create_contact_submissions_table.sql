/*
  # Create contact submissions table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key) - Unique identifier for each submission
      - `volledige_naam` (text) - Full name of the contact person
      - `emailadres` (text) - Email address
      - `bedrijfsnaam` (text) - Company name
      - `bericht` (text) - Message content
      - `created_at` (timestamptz) - Timestamp when the submission was created

  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policy for anonymous users to insert their contact form submissions
    - Add policy for authenticated users to view all submissions (admin access)

  3. Important Notes
    - The table allows anonymous submissions since this is a public contact form
    - Only INSERT operations are allowed for anonymous users
    - Authenticated users can view submissions for administrative purposes
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  volledige_naam text NOT NULL,
  emailadres text NOT NULL,
  bedrijfsnaam text NOT NULL,
  bericht text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous users to submit contact forms"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to view submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://tvrwvxhrgxxyumcimdoz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR2cnd2eGhyZ3h4eXVtY2ltZG96Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk1NTkyNjgsImV4cCI6MjAyNTEzNTI2OH0.IhdGs0oa6XTge0GH8jDDV57Zy8u7AKYcKqj4uLmFpws";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

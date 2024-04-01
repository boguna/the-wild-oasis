import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hjyyeostrlepgveuvhkp.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhqeXllb3N0cmxlcGd2ZXV2aGtwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE3MjQ5NTQsImV4cCI6MjAyNzMwMDk1NH0.ZsK939NSj-StGKIVD5DN1-qfwfCqFVAy6ehHP6yHWMU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

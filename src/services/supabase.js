import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://ngdtuuwukvliasmpvrty.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5nZHR1dXd1a3ZsaWFzbXB2cnR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTkyMjAxOTMsImV4cCI6MjAzNDc5NjE5M30.Dxw5zQie17fyiRdz4ktUjuNzgpOHUXzzujVQPEIkPug";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

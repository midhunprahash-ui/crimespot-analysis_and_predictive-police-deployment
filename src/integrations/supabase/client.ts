// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://muxkshbufybbtysewtqg.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im11eGtzaGJ1ZnliYnR5c2V3dHFnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMwNjA2MDAsImV4cCI6MjA1ODYzNjYwMH0.m4xbuIQDz83-dc68vM71fXds-iL0Zz6jlWU36YLV3dQ";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
import { supabase } from '../library/supabase'

export async function getEducation() {
  const { data, error } = await supabase
    .from('education')
    .select('*')
    .eq('is_published', true)
    .order('display_order', { ascending: true })

  if (error) {
    throw error
  }

  return data
}
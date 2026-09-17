import { supabase } from '../library/supabase'

export async function getExperiences() {
  console.log('🔵 getExperiences() dipanggil')

  const { data, error } = await supabase
    .from('experiences')
    .select('*')
    .eq('is_published', true)
    .order('display_order', { ascending: true })

  if (error) {
    console.error('🔴 getExperiences() error:', error)
    throw error
  }

  console.log('🟢 getExperiences() berhasil')
  console.log('💼 Experiences data:', data)

  return data
}
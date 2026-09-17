import { supabase } from '../library/supabase'

export async function getCertifications() {
  console.log('🔵 getCertifications() dipanggil')

  const { data, error } = await supabase
    .from('certifications')
    .select('*')
    .eq('is_published', true)
    .order('display_order', { ascending: true })

  if (error) {
    console.error('🔴 getCertifications() error:', error)
    throw error
  }

  console.log('🟢 getCertifications() berhasil')
  console.log('📜 Certifications data:', data)

  return data
}
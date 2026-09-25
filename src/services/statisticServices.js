import { supabase } from '../library/supabase'

export async function getProjectCount() {
    const { count, error } = await supabase
        .from('projects')
        .select('*', {
            count: 'exact',
            head: true,
        })
        .eq('is_published', true)

    if (error) {
        throw error
    }

    return count ?? 0
}

export async function getExperienceCount() {
    const { count, error } = await supabase
        .from('experiences')
        .select('*', {
            count: 'exact',
            head: true,
        })

    if (error) {
        throw error
    }

    return count ?? 0
}

export async function getCertificationCount() {
    const { count, error } = await supabase
        .from('certifications')
        .select('*', {
            count: 'exact',
            head: true,
        })

    if (error) {
        throw error
    }

    return count ?? 0
}

export async function getYearsExperience() {
    const { data, error } = await supabase
        .from('experiences')
        .select('start_date, end_date')
        .order('start_date', {
            ascending: true,
        })

    if (error) {
        throw error
    }

    if (!data || data.length === 0) {
        return 0
    }

    const earliestStart = new Date(data[0].start_date)
    const today = new Date()

    const diffInMilliseconds =
        today.getTime() - earliestStart.getTime()

    const diffInYears =
        diffInMilliseconds /
        (1000 * 60 * 60 * 24 * 365.25)

    return Math.floor(diffInYears)
}
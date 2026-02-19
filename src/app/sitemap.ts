import { MetadataRoute } from 'next'
import { getDisplayData } from '@/services/dataService'
import { EXPERIENCE_SUBSECTION, PROJECT_SUBSECTION, SKILL_SUBSECTION } from '@/constants/subsections'

// Required for static export
export const dynamic = 'force-static'

// Define your base URL - update this to your actual domain
const BASE_URL = 'https://shacklebolt13.github.io'

export default function sitemap(): MetadataRoute.Sitemap {
    const sitemapEntries: MetadataRoute.Sitemap = []
    const displayData = getDisplayData()

    // Add static routes
    sitemapEntries.push(
        {
            url: BASE_URL,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${BASE_URL}/showcase/`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/experience/`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${BASE_URL}/project/`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${BASE_URL}/skill/`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        }
    )

    // Add experience pages
    const experiences = displayData.get(EXPERIENCE_SUBSECTION) || []
    experiences.forEach((experience) => {
        sitemapEntries.push({
            url: `${BASE_URL}/experience/${experience.id}/`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.7,
        })
    })

    // Add project pages
    const projects = displayData.get(PROJECT_SUBSECTION) || []
    projects.forEach((project) => {
        sitemapEntries.push({
            url: `${BASE_URL}/project/${project.id}/`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.7,
        })
    })

    // Add skill pages
    const skills = displayData.get(SKILL_SUBSECTION) || []
    skills.forEach((skill) => {
        sitemapEntries.push({
            url: `${BASE_URL}/skill/${skill.id}/`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.6,
        })
    })

    return sitemapEntries
}

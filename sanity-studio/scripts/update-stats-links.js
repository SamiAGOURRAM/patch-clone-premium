import { getCliClient } from 'sanity/cli'

const client = getCliClient()

async function updateStats() {
  const updates = [
    { id: 'stat-1', link: '/#testimonials' },
    { id: 'stat-2', link: '/univers' },
    { id: 'stat-3', link: '/reseau' },
    { id: 'stat-4', link: '/ame' }
  ]

  for (const update of updates) {
    try {
      await client.patch(update.id).set({ link: update.link }).commit()
      console.log(`Updated ${update.id} with link: ${update.link}`)
    } catch (err) {
      console.error(`Failed to update ${update.id}:`, err.message)
    }
  }

  console.log('Done!')
}

updateStats()

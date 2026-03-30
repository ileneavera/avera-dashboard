/**
 * Prospect filtering and sorting logic extracted from the main dashboard.
 * These are the core functions that power the prospect tracker.
 */

export function filterProspects(prospects, { sectorFilter, statusFilter, nycOnly, search }) {
  return prospects.filter(p => {
    if (sectorFilter && p.sector !== sectorFilter) return false;
    if (statusFilter && p.status !== statusFilter) return false;
    if (nycOnly && !p.nycBased) return false;
    if (search) {
      const q = search.toLowerCase();
      return p.company.toLowerCase().includes(q) ||
        p.subsector.toLowerCase().includes(q) ||
        p.sector.toLowerCase().includes(q) ||
        p.leadContact.toLowerCase().includes(q);
    }
    return true;
  });
}

export function sortByStatus(prospects) {
  const priority = { 'Followed Up': 0, 'In Talks': 1, 'Researching': 2, 'Closed': 3 };
  return [...prospects].sort((a, b) => (priority[a.status] ?? 99) - (priority[b.status] ?? 99));
}

export function getProspectStats(prospects) {
  return {
    total: prospects.length,
    followedUp: prospects.filter(p => p.status === 'Followed Up').length,
    inTalks: prospects.filter(p => p.status === 'In Talks').length,
    closed: prospects.filter(p => p.status === 'Closed').length,
  };
}

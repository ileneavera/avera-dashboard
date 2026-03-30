import { describe, it, expect } from 'vitest';
import { filterProspects, sortByStatus, getProspectStats } from './prospects.js';

// Sample prospects that mimic your real data
const SAMPLE_PROSPECTS = [
  { company: 'Tebra', sector: 'Healthtech', subsector: 'Practice management', status: 'Researching', nycBased: false, leadContact: 'Management team' },
  { company: 'Sixfold AI', sector: 'SaaS', subsector: 'Insurtech', status: 'Followed Up', nycBased: true, leadContact: 'Alex Schmelkin' },
  { company: 'Benepass', sector: 'SaaS', subsector: 'Benefits administration', status: 'Followed Up', nycBased: true, leadContact: 'Jaclyn Chen' },
  { company: 'Harvey', sector: 'SaaS', subsector: 'AI for legal', status: 'In Talks', nycBased: false, leadContact: 'Winston Weinberg' },
  { company: 'Darrow', sector: 'Healthtech-adjacent', subsector: 'AI legal intelligence', status: 'Closed', nycBased: true, leadContact: 'Evyatar Ben Artzi' },
];

describe('filterProspects', () => {

  // TEST 1: Search finds companies by name
  it('finds a company when you search by name', () => {
    const results = filterProspects(SAMPLE_PROSPECTS, { search: 'tebra' });
    expect(results).toHaveLength(1);
    expect(results[0].company).toBe('Tebra');
  });

  // TEST 2: Filter by sector shows only that sector
  it('filters to only Healthtech companies', () => {
    const results = filterProspects(SAMPLE_PROSPECTS, { sectorFilter: 'Healthtech' });
    expect(results.every(p => p.sector === 'Healthtech')).toBe(true);
    expect(results).toHaveLength(1);
  });

  // TEST 3: NYC filter works
  it('shows only NYC-based prospects when toggled', () => {
    const results = filterProspects(SAMPLE_PROSPECTS, { nycOnly: true });
    expect(results.every(p => p.nycBased)).toBe(true);
    expect(results).toHaveLength(3);
  });

  // TEST 4: Search works on lead contact name
  it('finds prospects by lead contact name', () => {
    const results = filterProspects(SAMPLE_PROSPECTS, { search: 'jaclyn' });
    expect(results).toHaveLength(1);
    expect(results[0].company).toBe('Benepass');
  });

  // TEST 5: Empty filters return all prospects
  it('returns all prospects when no filters are applied', () => {
    const results = filterProspects(SAMPLE_PROSPECTS, {});
    expect(results).toHaveLength(5);
  });

});

describe('sortByStatus', () => {

  // TEST 6: Followed Up prospects appear first, then In Talks, then Researching, then Closed
  it('sorts prospects by pipeline priority', () => {
    const sorted = sortByStatus(SAMPLE_PROSPECTS);
    expect(sorted[0].status).toBe('Followed Up');
    expect(sorted[sorted.length - 1].status).toBe('Closed');
  });

});

describe('getProspectStats', () => {

  // TEST 7: Stats correctly count each status
  it('counts prospects by status', () => {
    const stats = getProspectStats(SAMPLE_PROSPECTS);
    expect(stats.total).toBe(5);
    expect(stats.followedUp).toBe(2);
    expect(stats.inTalks).toBe(1);
    expect(stats.closed).toBe(1);
  });

});

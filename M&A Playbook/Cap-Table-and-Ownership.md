# Cap Table & Ownership
### Avera M&A Playbook

Understanding who owns what, who has rights over what, and who gets paid what — and how to work through the math. Critical for any sell-side engagement.

*Last updated: March 2026*

---

## What a Cap Table Is

A capitalization table (cap table) is a ledger of everyone who owns equity in a company — and what kind. It shows:
- Who holds shares (or rights to shares)
- How many shares of each class
- What they paid (or the strike price for options)
- Their ownership percentage, both **as-issued** and **fully diluted**

**As-issued** = only currently outstanding shares
**Fully diluted** = all shares + all options, warrants, and convertibles *as if* they had been exercised or converted

In M&A, **always work on a fully diluted basis.** The deal distributes proceeds based on what everyone will own at close, not what they own today.

---

## Equity Types — The Building Blocks

### Common Stock
- Held by founders and employees
- **Last in line** to receive proceeds in a sale
- Votes on major corporate matters (typically 1 vote per share)
- No special rights or preferences

### Preferred Stock
- Held by investors (VCs, angel investors)
- Each financing round creates a new series: Series A, Series B, Series C, etc.
- Has **special rights** over common: liquidation preferences, voting protections, information rights
- Most recent round is typically most senior (gets paid first) — though this is negotiated

### Stock Options
- Right to *buy* common stock at a set price (the **strike price** or exercise price) in the future
- Strike price is set at fair market value on the grant date (409A valuation)
- Subject to a **vesting schedule** — typically 4 years with a 1-year cliff
- In an acquisition: vested options pay out (deal price minus strike price, if positive); unvested options may accelerate, be assumed by acquirer, or be cancelled

### Warrants
- Similar to options but typically issued to investors, lenders, or strategic partners
- Often issued alongside convertible notes or as compensation to advisors

### SAFEs (Simple Agreement for Future Equity)
- Common for pre-seed/seed investments
- Not actual equity — a contractual right to receive equity at the *next* priced round
- Convert to preferred stock (usually at a discount or with a valuation cap)
- **Critical in M&A:** SAFEs may convert to common or preferred at acquisition — check the terms; some SAFE holders get their money back + a premium, some participate in proceeds

### Convertible Notes
- Debt instrument that converts to equity at the next round (or at acquisition)
- Has interest rate, maturity date, and conversion terms
- In a sale: usually converts to preferred at the cap or discount, or the holder can choose repayment of principal + interest

### RSUs (Restricted Stock Units)
- Common at later-stage and public companies
- A promise to issue shares upon vesting (vs. options, which require a purchase)
- In acquisitions, typically treated like vested equity — converted to cash or acquirer stock

---

## Rights That Matter in M&A

### 1. Blocking Rights (Protective Provisions)

Protective provisions are veto rights held by preferred shareholders — they must approve certain company actions. Specified in the Certificate of Incorporation.

**Common actions requiring preferred shareholder approval:**
- Selling the company or substantially all its assets ← most critical in M&A
- Merging with another company
- Liquidating or dissolving the company
- Issuing new shares or creating a new equity class senior to existing preferred
- Amending the charter or bylaws in ways that affect preferred rights
- Taking on debt above a threshold (e.g., $500K)
- Paying dividends
- Increasing or decreasing the board size beyond agreed parameters

**Who triggers these rights:**
- Usually: majority of all preferred voting together as a single class
- Sometimes: each series has separate veto rights (Series A AND Series B must both approve)
- The latter is more powerful and more common in later-stage companies with multiple rounds

**What this means in a deal:**
If investors don't like the deal terms — price too low, bad structure, bad buyer — they can block it. Understanding who holds blocking rights and whether they're likely to support a deal is essential before you ever approach a buyer.

### 2. Information Rights

Contractual rights to receive company financial information. Specified in the Investor Rights Agreement (IRA).

**Typical structure:**
- **Major investors** (usually defined as investing $500K–$1M+): quarterly unaudited financials, annual audited financials, annual budget/operating plan, cap table
- **Minor investors:** annual financials only (or sometimes nothing beyond legal minimums)
- **Board members:** effectively all information by virtue of their role

**Why this matters in M&A:**
- Information rights holders will learn about a sale — they'll see the data room materials, term sheet, and deal structure
- They may share information in their networks (competitors, other founders)
- Managing confidentiality means knowing who has information rights and communicating carefully with them

### 3. Approval Rights

Two categories: **board approval** and **shareholder approval**.

**Board approval required for:**
- Entering into material contracts
- Significant capital expenditures
- Hiring/firing senior executives
- Granting stock options above a certain pool threshold
- Approving the annual budget
- Most operational decisions

**Shareholder approval required for (typically):**
- Sale of the company
- Major asset sales
- Merger or reorganization
- Amendments to the charter affecting stockholder rights
- Issuing equity above a certain threshold

**Deal approval in practice:**
A sale almost always requires:
1. Board approval (majority of directors)
2. Stockholder approval (majority of shares, usually preferred + common voting together, or sometimes just preferred)

The board and the major investors are often the same people — but not always. Know the structure.

### 4. Drag-Along Rights

If a majority of shareholders (threshold defined in the charter) approve a sale, they can **drag along** the minority shareholders — forcing them to approve and sell too.

This prevents a small number of holdouts from blocking a deal that most shareholders support.

**Typical trigger:** Majority of preferred (or sometimes board + majority of preferred + majority of common all separately approving)

**Why it matters:** A company without drag-along rights has a much harder time completing an acquisition if any shareholder decides to be difficult.

### 5. Tag-Along / Co-Sale Rights

If a major shareholder (usually a founder) sells their personal shares to a buyer, other shareholders have the right to sell their shares too, on the same terms.

Primarily relevant in secondary transactions (founder liquidity). In a full company acquisition, all shareholders sell together so tag-along is less relevant — but it can complicate founder secondary transactions before a full sale.

### 6. Pro-Rata / Preemptive Rights

Right to participate in future financing rounds to maintain ownership percentage. Relevant for investors preserving their stake through dilution. Not directly relevant in M&A, but affects the cap table going into a deal.

### 7. Right of First Refusal (ROFR)

If a shareholder wants to sell their shares, the company and/or other investors have the right to buy those shares first at the same price.

**In M&A context:** Some charters give investors a ROFR on the company itself — they can match an acquisition offer and buy the company themselves. Rare, but worth checking.

---

## The Preference Stack — Who Gets Paid, and When

The preference stack is the **most important concept to understand in any sale.** Ownership percentage alone is meaningless without knowing who stands where in the waterfall.

### Liquidation Preferences

When a company is sold, preferred shareholders typically get paid **before** common shareholders. The liquidation preference specifies how much they get first.

**1x non-participating (most common, most founder-friendly):**
- Investor gets back 1x their investment *or* converts to common — whichever is worth more
- They choose one or the other; they can't take both
- At high valuations, they almost always convert (common is worth more)
- At low/moderate valuations, they take the preference

**Participating preferred (investor-friendly):**
- Investor gets back their preference *and then* participates in remaining proceeds as common
- Double-dipping. Often called "double-dip preferred."
- Can result in founders/employees getting almost nothing even in a seemingly decent outcome

**Capped participating preferred (middle ground):**
- Investor participates, but only up to a cap (e.g., 2x or 3x their investment total)
- More common in recent years as a compromise

**Liquidation preference multiples:**
- 1x = investor gets back their investment (standard today)
- 2x or 3x = investor gets back 2x or 3x invested before common sees anything (common in downturns or distressed rounds)

**Seniority:**
- Most recent round is typically most senior (gets paid first)
- Series C > Series B > Series A > common
- But some deals are structured "pari passu" (all preferred treated equally) — check the charter

---

## Working Through the Math — Examples

### Setup
Let's use a company with three stakeholder groups:

| Shareholder | Shares | Type | Amount Invested | Preference |
|---|---|---|---|---|
| Series B investors | 3M | Preferred B | $10M | 1x non-participating |
| Series A investors | 2M | Preferred A | $5M | 1x non-participating |
| Founders + employees | 5M | Common | — | None |
| **Total** | **10M** | | **$15M raised** | |

---

### Scenario 1: Company sells for $20M

**Step 1: Check each preferred class — preference or convert?**

Series B (senior; gets paid first):
- Option A — Take preference: $10M
- Option B — Convert to common: $20M × (3M / 10M) = **$6M**
- **Decision: Take preference ($10M)**

Series A (next in line):
- Remaining after Series B: $20M − $10M = **$10M**
- Option A — Take preference: $5M
- Option B — Convert: share remaining $10M with Series A's 2M shares + 5M common = 7M shares → $10M × (2M / 7M) = **$2.86M**
- **Decision: Take preference ($5M)**

Common (founders + employees):
- Remaining: $20M − $10M − $5M = **$5M**
- Per share: $5M / 5M = **$1.00/share**

**Result at $20M:**
| | Gets | Multiple on Investment |
|---|---|---|
| Series B | $10M | 1.0x |
| Series A | $5M | 1.0x |
| Common | $5M | — |

*Investors made their money back. Common got $1/share.*

---

### Scenario 2: Company sells for $50M

Series B:
- Option A: $10M preference
- Option B: $50M × (3M / 10M) = **$15M** → **Convert**

Series A:
- Option A: $5M preference
- Option B: $50M × (2M / 10M) = **$10M** → **Convert**

Both series convert. Everyone participates pro-rata.

| | Shares | Gets | Multiple |
|---|---|---|---|
| Series B | 3M (30%) | $50M × 30% = **$15M** | 1.5x |
| Series A | 2M (20%) | $50M × 20% = **$10M** | 2.0x |
| Common | 5M (50%) | $50M × 50% = **$25M** | — |

*Good outcome for everyone. Common gets half the deal.*

---

### Scenario 3: Same $20M sale, but preferred is PARTICIPATING

Series B:
- Takes $10M preference *first*
- Then participates in remaining $10M pro-rata: $10M × (3M / 10M) = **$3M more**
- Total: **$13M**

Series A:
- Takes $5M preference
- Then participates in remaining $5M: $5M × (2M / 10M) = **$1M more**
- Total: **$6M**

Common:
- Remaining: $20M − $13M − $6M = **$1M** — for 50% of the company
- Per share: $0.20

**Result — participating preferred vs. non-participating at $20M:**
| | Non-Participating | Participating |
|---|---|---|
| Series B | $10M | $13M (+$3M) |
| Series A | $5M | $6M (+$1M) |
| Common | $5M | $1M (−$4M) |

**This is why participating preferred is so damaging to founders and employees.** At a "decent" $20M exit, common shareholders go from getting $5M to getting $1M.

---

### The Break-Even Point — When Preferred Converts

For 1x non-participating preferred, the crossover point (where converting to common equals the preference) is:

> **Break-even deal value = Liquidation preference ÷ ownership %**

Example (Series B, $10M invested, 30% ownership):
> Break-even = $10M ÷ 30% = **$33.3M**

- Below $33.3M: Series B takes preference ($10M)
- Above $33.3M: Series B converts to common (worth more)

**Practical use:** Before entering a deal, calculate each investor's break-even. This tells you:
1. Which investors will be happy vs. indifferent at various price points
2. Where the "cliff" is for common shareholders
3. What minimum price gets everyone aligned

---

### The Preference Overhang

Total liquidation preferences = **$15M** (Series A + Series B in our example)

- At any deal value **below $15M**: preferred gets paid in full, common gets nothing
- At $16M: common gets $1M for 50% ownership
- At $33.3M: Series B breaks even on conversion; below this, they take preference

**This is the preference overhang** — the amount that must be "cleared" before common shareholders see a dollar. In distressed or moderate outcomes, it can leave founders and employees with very little despite a headline number that sounds okay.

---

## What to Ask About Any Cap Table

When assessing a client's cap table before a sale, work through these questions:

### Structure
- [ ] What is the fully diluted share count? (All classes, all options, all warrants, all convertibles)
- [ ] What are the liquidation preference amounts by series? (1x? More? Participating or non-participating?)
- [ ] Which series is most senior?
- [ ] Is there a preference overhang that exceeds likely deal values?
- [ ] Are there any SAFEs or convertible notes outstanding, and how do they convert at acquisition?

### Approval
- [ ] What does a sale require — board approval? Stockholder vote?
- [ ] What percentage of preferred shareholders must approve?
- [ ] Does each series have independent veto rights, or do they vote together?
- [ ] Are there any unusual protective provisions that could block a deal?
- [ ] Does the company have drag-along rights? What threshold triggers them?

### Alignment
- [ ] At the expected deal price, what does each shareholder class receive?
- [ ] Are there investors with high preferences who would only get their money back — and might resist for strategic reasons?
- [ ] Are there common shareholders (founders, early employees) who would receive very little and might be demotivated or resistant?
- [ ] Are all investors currently on the same board/communication terms, or are there any adversarial relationships?

### Housekeeping
- [ ] Is the cap table clean? (No missing signatures on option grants, no uncaptured SAFEs, no cap table platform vs. legal documents discrepancy)
- [ ] Have all equity grants been properly approved by the board?
- [ ] Are all option exercises properly documented?
- [ ] Is there any option pool overhang — options authorized but not yet granted?

---

## How the Preference Stack Affects Deal Dynamics

### Investor behavior at different price points

**At a deal value just above the preference overhang:**
- Investors get their money back. Not excited, but not blocking.
- Founders may get very little. Could create friction if founders need to cooperate post-close.

**At a deal value well below the preference overhang:**
- Investors take a loss. They will likely push hard to maximize value or block a deal entirely.
- Common gets nothing.
- These deals often require investor consent through a "pay-to-play" or other restructuring.

**At a deal value well above the break-even:**
- Preferred converts to common. Everyone is pro-rata. Everyone is aligned.
- Easiest deal dynamics.

### Escrow impact on the waterfall
If 10% of deal value goes into escrow, and the deal is right at the preference threshold:
- Investors may claim full preference against the non-escrowed proceeds
- Common may end up with nothing until escrow releases 12–18 months later
- This needs to be modeled explicitly — the "effective" price to common shareholders at close may be much lower than the headline

### Founder considerations
A founder who built a company for 7 years and is walking away with $2M (after preferences eat through most of a $25M exit) is a very different negotiating partner than one walking away with $12M.

**High preference overhang situations:**
- Founder motivation to push for maximum price is high (they need a bigger number to see real money)
- Founder may actually prefer a longer process / more buyers to push the number up
- Alternatively: founder may be burned out and willing to accept terms that help them move on even if the financial outcome is modest

Understanding where the founder stands in the waterfall helps you understand their psychology.

---

## Quick Reference: Key Terms

| Term | Plain English |
|---|---|
| Liquidation preference | Investor gets this amount back before common gets anything |
| 1x non-participating | Get back investment OR convert to common — not both |
| Participating preferred | Get back investment AND participate in remaining proceeds |
| Fully diluted | All shares including unexercised options and unconverted instruments |
| Preference overhang | Total liquidation preferences — the amount that must be cleared before common gets paid |
| Break-even | Deal size at which a preferred shareholder is indifferent between preference and conversion |
| Drag-along | Majority can force minority to approve a sale |
| Tag-along | Shareholders can join a founder's sale of personal shares on same terms |
| Protective provisions | Actions that require preferred shareholder approval (veto rights) |
| Anti-dilution | Protects investors from down rounds; adjusts their conversion price downward |
| Pari passu | All preferred treated equally; no seniority between series |
| Waterfall | The sequence of who gets paid, and how much, from deal proceeds |

---

## Lessons Learned — Add Over Time

- **March 2026:** Always model the waterfall before the first buyer call. Knowing whether common will see meaningful proceeds shapes everything — founder motivation, minimum acceptable price, investor alignment, and how aggressive to be in negotiations.

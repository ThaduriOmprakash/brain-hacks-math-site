export const categories = [
  {
    slug: 'multiplication',
    title: 'Multiplication Mastery',
    tagline: 'Two-digit products in your head, no carrying columns.',
    icon: '×',
    tricks: [
      {
        slug: 'multiply-by-11',
        title: 'Multiply any 2-digit number by 11',
        summary: 'Split the digits, drop their sum in the middle.',
        steps: [
          'Take the two digits of your number apart, say a and b.',
          'Add them together: a + b.',
          'Slide that sum between the original digits.',
          'If the sum is 10 or more, carry the 1 into the first digit.',
        ],
        example: {
          problem: '11 × 47',
          working: '4 and 7 → 4+7 = 11 → carry 1 into the 4 → 5, 1, 7',
          answer: '517',
        },
      },
      {
        slug: 'cross-multiplication',
        title: 'Cross multiplication for 2-digit × 2-digit',
        summary: 'One diagonal pattern replaces the whole long-multiplication grid.',
        steps: [
          'Multiply the units digits — this gives your last digit (carry any overflow).',
          'Cross-multiply and add: (first × units) + (units × first) of the other number.',
          'Multiply the tens digits for the leading part.',
          'Stack the three results with the right carries.',
        ],
        example: {
          problem: '23 × 42',
          working: 'units: 3×2=6 · cross: 2×2 + 3×4 = 16 · tens: 2×4=8 → 8, 16, 6 → carry',
          answer: '966',
        },
      },
      {
        slug: 'multiply-by-5-25-50-125',
        title: 'Multiply by 5, 25, 50 and 125 instantly',
        summary: 'Trade an ugly multiplier for a friendly power of 10.',
        steps: [
          'Notice 5 = 10/2, 25 = 100/4, 50 = 100/2, 125 = 1000/8.',
          'Multiply by the round number instead (×10, ×100, ×1000).',
          'Then divide by 2, 4 or 8 — all easy halvings.',
        ],
        example: {
          problem: '48 × 25',
          working: '48 × 100 = 4800, then ÷4',
          answer: '1200',
        },
      },
    ],
  },
  {
    slug: 'squares-cubes',
    title: 'Squares & Cubes',
    tagline: 'Skip the calculator on perfect squares and cubes.',
    icon: '²',
    tricks: [
      {
        slug: 'square-ending-in-5',
        title: 'Square any number ending in 5',
        summary: 'The last two digits are always 25 — the rest is one multiplication.',
        steps: [
          'Drop the 5, keep the leading digit(s) as n.',
          'Multiply n by (n + 1).',
          'Write that result, then tack 25 on the end.',
        ],
        example: {
          problem: '65²',
          working: 'n = 6 → 6 × 7 = 42 → append 25',
          answer: '4225',
        },
      },
      {
        slug: 'square-near-round-number',
        title: 'Square numbers near a round number',
        summary: 'Use (a+b)(a−b) = a² − b² in reverse to dodge big multiplications.',
        steps: [
          'Pick a nearby round number as your anchor.',
          'Find the difference between your number and the anchor.',
          "Square the anchor (easy, it's round) and adjust by twice the difference.",
        ],
        example: {
          problem: '98²',
          working: 'anchor 100 → 100² = 10000, difference −2 → 10000 − 2×100×2 + 2²',
          answer: '9604',
        },
      },
    ],
  },
  {
    slug: 'fast-arithmetic',
    title: 'Fast Arithmetic',
    tagline: 'Everyday addition, subtraction and percentages, sped up.',
    icon: '+',
    tricks: [
      {
        slug: 'compensation-addition',
        title: 'Add awkward numbers by rounding first',
        summary: 'Round one number up, then pay back the difference.',
        steps: [
          'Round the messier number to the nearest 10 or 100.',
          'Add the rounded, friendly number.',
          'Subtract back the amount you added extra.',
        ],
        example: {
          problem: '256 + 98',
          working: '256 + 100 = 356, then −2',
          answer: '354',
        },
      },
      {
        slug: 'quick-percentages',
        title: 'Estimate percentages by chaining 10%s',
        summary: 'Every percentage is a combination of easy 10% and 1% chunks.',
        steps: [
          'Find 10% by moving the decimal point one place.',
          'Halve it for 5%, or divide by 10 again for 1%.',
          'Add the chunks you need together.',
        ],
        example: {
          problem: '17% of 250',
          working: '10% = 25, 5% = 12.5, 2% = 5 → 25+12.5+5',
          answer: '42.5',
        },
      },
    ],
  },
  {
    slug: 'exam-maths',
    title: 'Exam Maths',
    tagline: 'Shortcuts built for the clock ticking down in an exam hall.',
    icon: '✓',
    tricks: [
      {
        slug: 'divisibility-shortcuts',
        title: 'Spot divisibility without dividing',
        summary: 'Quick checks for 3, 4, 6, 8, 9 and 11 save a full division.',
        steps: [
          'Digit sum divisible by 3 → number is divisible by 3 (by 9 if the sum is too).',
          'Last two digits divisible by 4 → whole number is divisible by 4.',
          'Alternating digit sum divisible by 11 → number is divisible by 11.',
        ],
        example: {
          problem: 'Is 3168 divisible by 4?',
          working: 'last two digits: 68 → 68 ÷ 4 = 17, whole number',
          answer: 'Yes',
        },
      },
      {
        slug: 'unit-digit-of-powers',
        title: 'Find the last digit of a huge power',
        summary: "Unit digits repeat in short cycles — you don't need the full number.",
        steps: [
          'Find the unit digit of the base.',
          'List its power cycle (most repeat every 2 or 4 steps).',
          'Use the exponent mod the cycle length to pick the right digit.',
        ],
        example: {
          problem: 'Last digit of 7²³',
          working: 'cycle of 7: 7,9,3,1 (length 4) → 23 mod 4 = 3 → third digit',
          answer: '3',
        },
      },
    ],
  },
]

export const allTricks = categories.flatMap((cat) =>
  cat.tricks.map((t) => ({ ...t, categorySlug: cat.slug, categoryTitle: cat.title }))
)

export function findTrick(categorySlug, trickSlug) {
  const cat = categories.find((c) => c.slug === categorySlug)
  return cat?.tricks.find((t) => t.slug === trickSlug)
}

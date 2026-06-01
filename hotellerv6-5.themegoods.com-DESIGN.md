# Design System Inspired by Hoteller Island & Beach Hotel

## 1. Visual Theme & Atmosphere

The Hoteller Island design system evokes serene coastal luxury through a sophisticated blend of oceanic tranquility and refined hospitality elegance. This system emphasizes openness, calm, and escape—capturing the essence of a premium beach resort experience. The aesthetic celebrates clean lines, generous whitespace, and the interplay between soft aquatic tones and deep, grounded neutrals. Typography is contemplative and spacious, creating a sense of unhurried sophistication. The overall mood is aspirational yet approachable, inviting guests into a world of relaxation and personalized service.

**Key Characteristics**
- Serene and contemplative color palette dominated by aquatic and neutral tones
- Generous whitespace and breathing room throughout layouts
- Elegant serif and sans-serif typography hierarchy
- Soft, muted accent colors suggesting tropical sunsets and ocean hues
- Approachable luxury aesthetic emphasizing comfort and escape
- Circular design elements reflecting natural forms and infinity
- High contrast between light backgrounds and dark, readable text
- Emphasis on photography and visual storytelling over decorative elements

## 2. Color Palette & Roles

### Primary
- **Ocean Teal** (`#AADDDD`): Primary accent for interactive elements, highlights, and focal points; represents the serene water central to the brand
- **Deep Navy** (`#020101`): Primary text color for headings and important content; conveys sophistication and trust

### Accent Colors
- **Sage Green** (`#CEF093`): Secondary accent for highlights and supplementary CTAs; suggests natural, organic hospitality
- **Purple Accent** (`#7F54B3`): Tertiary accent for special offers and premium features
- **Lime Green** (`#7AD03A`): Alternative accent for success states and positive actions
- **Sky Blue** (`#2EA2CC`): Complementary accent for informational elements and secondary interactions

### Interactive
- **Danger Red** (`#FA4612`): Error states, alerts, and destructive actions
- **Warning Gold** (`#FFBA00`): Warning states and cautionary messages
- **Crimson** (`#AA0000`): High-priority error states and critical alerts

### Neutral Scale
- **Charcoal** (`#222222`): Primary text and dark UI elements; used extensively for body copy
- **Mid-Gray** (`#686868`): Secondary text and disabled states
- **Light Gray** (`#777777`): Tertiary text and subtle UI elements
- **Pale Gray** (`#979797`): Borders and very subtle dividers
- **Nearly Black** (`#101010`): Darkest neutral for maximum contrast
- **Soft Gray** (`#DDDDDD`): Light borders and subtle backgrounds

### Surface & Borders
- **White** (`#FFFFFF`): Primary surface color for cards, containers, and backgrounds
- **Black** (`#000000`): Maximum contrast text, borders, and strong UI elements
- **Light Divider** (`#DDDDDD`): Subtle borders and section dividers

## 3. Typography Rules

### Font Family
- **Display & Headings**: Reforma1969, Georgia, serif
- **Body & UI**: Inter, Segoe UI, system-ui, sans-serif
- **Fallback Stack**: Georgia, "Times New Roman", serif for traditional elements; system-ui, -apple-system, sans-serif for modern UI

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|-----------------|-------|
| Display / Hero | Reforma1969 | 65px | 400 | 65px | 0px | Large, contemplative hero text; used sparingly for maximum impact |
| Heading 1 | Reforma1969 | 65px | 400 | 65px | 0px | Page titles and major section headers |
| Heading 2 | Reforma1969 | 20px | 400 | 20px | 0px | Subsection headers and prominent calls-to-action |
| Heading 3 | Reforma1969 | 26px | 400 | 36.4px | 0px | Secondary subsection headers and card titles |
| Heading 6 / Caption | Reforma1969 | 16px | 400 | 20px | 0px | Small headings and descriptive labels |
| Body / Paragraph | Inter | 16px | 400 | 27.2px | 0px | Standard body text and content blocks |
| Button / UI Text | Arial | 13.33px | 400 | normal | 0px | Interactive labels and compact text |
| Link | Inter | 16px | 400 | 27.2px | 0px | Hyperlinked text within content |

### Principles
- **Elegance through restraint**: Prefer larger sizes with ample line height over multiple font weights
- **Serif for contemplation**: Reforma1969 used exclusively for headings to evoke timelessness and luxury
- **Sans-serif for clarity**: Inter used for body and functional UI to ensure readability and modernity
- **Vertical rhythm**: Maintain consistent line-height multiples to create visual harmony
- **Generous line height**: 1.7x font size baseline ensures comfort and luxury feeling
- **Minimal weight variation**: Rely on size and font family changes rather than weight shifts for hierarchy

## 4. Component Stylings

### Buttons

**Primary Button**
- Background: `#AADDDD`
- Text Color: `#020101`
- Font Size: `16px`
- Font Weight: `600`
- Font Family: `Inter`
- Padding: `16px 32px`
- Border Radius: `4px`
- Border: `2px solid #AADDDD`
- Box Shadow: `none`
- Hover State: Background `#8BC5C5`, Text `#020101`
- Active State: Background `#6FA8A8`, Border `2px solid #6FA8A8`

**Secondary Button**
- Background: `#FFFFFF`
- Text Color: `#222222`
- Font Size: `16px`
- Font Weight: `600`
- Font Family: `Inter`
- Padding: `16px 32px`
- Border Radius: `4px`
- Border: `2px solid #DDDDDD`
- Box Shadow: `none`
- Hover State: Background `#F5F5F5`, Border `2px solid #222222`
- Active State: Background `#EEEEEE`, Text `#020101`

**Ghost Button**
- Background: `transparent`
- Text Color: `#222222`
- Font Size: `16px`
- Font Weight: `600`
- Font Family: `Inter`
- Padding: `12px 24px`
- Border Radius: `4px`
- Border: `2px solid #222222`
- Box Shadow: `none`
- Hover State: Background `#F0F0F0`, Text `#020101`
- Active State: Background `#E5E5E5`

**Icon Button (Circular)**
- Background: `#FFFFFF`
- Text Color: `#000000`
- Font Size: `20px`
- Font Weight: `400`
- Font Family: `Arial`
- Width: `44px`
- Height: `44px`
- Padding: `1px 6px`
- Border Radius: `50%`
- Border: `none`
- Box Shadow: `none`
- Hover State: Background `#AADDDD`, Text `#020101`
- Active State: Background `#8BC5C5`

**Icon Button (Square)**
- Background: `transparent`
- Text Color: `#000000`
- Font Size: `20px`
- Font Weight: `400`
- Font Family: `Arial`
- Width: `40px`
- Height: `40px`
- Padding: `0px`
- Border Radius: `0px`
- Border: `none`
- Box Shadow: `none`
- Hover State: Text Color `#AADDDD`, Background `transparent`
- Active State: Text Color `#8BC5C5`

### Cards & Containers

**Standard Card**
- Background: `#FFFFFF`
- Border: `1px solid #DDDDDD`
- Border Radius: `4px`
- Padding: `24px`
- Box Shadow: `0px 2px 8px rgba(0, 0, 0, 0.08)`
- Hover State: Box Shadow `0px 4px 16px rgba(0, 0, 0, 0.12)`

**Featured Card (Hero)**
- Background: Linear gradient or full-bleed image with overlay
- Overlay: `rgba(0, 0, 0, 0.2)`
- Text Color: `#FFFFFF`
- Padding: `60px 80px`
- Border Radius: `0px`
- Border: `none`

**Content Section**
- Background: `#FFFFFF`
- Padding: `60px 80px`
- Max Width: `1440px`
- Margin: `0 auto`
- Border: `none`

### Inputs & Forms

**Text Input**
- Background: `#FFFFFF`
- Text Color: `#222222`
- Border: `1px solid #DDDDDD`
- Border Radius: `4px`
- Padding: `12px 16px`
- Font Size: `16px`
- Font Family: `Inter`
- Placeholder Color: `#979797`
- Focus State: Border `2px solid #AADDDD`, Box Shadow `0px 0px 0px 3px rgba(170, 221, 221, 0.1)`
- Error State: Border `2px solid #FA4612`, Background `#FFFAF9`

**Textarea**
- Background: `#FFFFFF`
- Text Color: `#222222`
- Border: `1px solid #DDDDDD`
- Border Radius: `4px`
- Padding: `16px`
- Font Size: `16px`
- Font Family: `Inter`
- Line Height: `27.2px`
- Min Height: `120px`
- Focus State: Border `2px solid #AADDDD`, Box Shadow `0px 0px 0px 3px rgba(170, 221, 221, 0.1)`

**Select Dropdown**
- Background: `#FFFFFF`
- Text Color: `#222222`
- Border: `1px solid #DDDDDD`
- Border Radius: `4px`
- Padding: `12px 16px`
- Font Size: `16px`
- Font Family: `Inter`
- Arrow Color: `#686868`
- Focus State: Border `2px solid #AADDDD`

**Checkbox & Radio**
- Background: `#FFFFFF`
- Border: `2px solid #DDDDDD`
- Border Radius: `2px` (checkbox), `50%` (radio)
- Size: `18px`
- Checked State: Background `#AADDDD`, Border `2px solid #AADDDD`
- Checked Indicator Color: `#FFFFFF`

### Navigation

**Header Navigation**
- Background: `#FFFFFF`
- Text Color: `#222222`
- Font Size: `16px`
- Font Family: `Inter`
- Height: `80px`
- Padding: `20px 40px`
- Border Bottom: `1px solid #DDDDDD`
- Link Hover: Color `#AADDDD`
- Active Link: Color `#AADDDD`, Border Bottom `2px solid #AADDDD`

**Mobile Menu (Hamburger)**
- Background: `#FFFFFF`
- Icon Color: `#222222`
- Icon Size: `24px`
- Hover State: Color `#AADDDD`

**Breadcrumb**
- Text Color: `#686868`
- Font Size: `14px`
- Font Family: `Inter`
- Separator: `/`
- Current Page Color: `#222222`
- Link Hover: Color `#AADDDD`

**Sidebar Navigation**
- Background: `#F9F9F9`
- Border Right: `1px solid #DDDDDD`
- Item Padding: `16px 20px`
- Item Font Size: `15px`
- Active Item Background: `#AADDDD`
- Active Item Text: `#020101`
- Hover Item Background: `#F0F0F0`

### Badges & Labels

**Primary Badge**
- Background: `#AADDDD`
- Text Color: `#020101`
- Font Size: `12px`
- Font Weight: `600`
- Font Family: `Inter`
- Padding: `4px 12px`
- Border Radius: `16px`
- Border: `none`

**Success Badge**
- Background: `#7AD03A`
- Text Color: `#FFFFFF`
- Font Size: `12px`
- Font Weight: `600`
- Padding: `4px 12px`
- Border Radius: `16px`

**Error Badge**
- Background: `#FA4612`
- Text Color: `#FFFFFF`
- Font Size: `12px`
- Font Weight: `600`
- Padding: `4px 12px`
- Border Radius: `16px`

**Warning Badge**
- Background: `#FFBA00`
- Text Color: `#020101`
- Font Size: `12px`
- Font Weight: `600`
- Padding: `4px 12px`
- Border Radius: `16px`

## 5. Layout Principles

### Spacing System

**Base Unit**: `4px`

**Spacing Scale**:
- `4px`: Micro-spacing within components (button text padding, icon margins)
- `8px`: Small spacing (icon spacing, compact padding)
- `12px`: Compact spacing (form field margins, small button padding)
- `16px`: Standard padding (card content, input padding)
- `20px`: Section spacing (gap between related elements)
- `24px`: Medium spacing (card padding, section gaps)
- `32px`: Large spacing (subsection separation)
- `40px`: Extra-large spacing (section margins)
- `48px`: Major section separation
- `60px`: Large content section padding
- `80px`: Extra-large content section padding
- `92px`: Maximum padding for hero sections
- `100px`: Full-width section padding

**Usage Context**:
- Micro-level spacing (`4px–12px`): Buttons, form inputs, icon margins
- Component-level spacing (`16px–24px`): Card padding, small section gaps
- Section-level spacing (`32px–60px`): Between major content blocks
- Page-level spacing (`80px–100px`): Hero sections, full-width layouts

### Grid & Container

- **Max Width**: `1440px`
- **Gutter**: `40px` between columns
- **Column Strategy**: 12-column responsive grid
- **Container Padding**: `40px` on large screens, `24px` on medium, `16px` on mobile
- **Breakpoint Columns**:
  - Desktop (1440px+): 12 columns
  - Tablet (768px–1023px): 8 columns
  - Mobile (< 768px): 4 columns

### Whitespace Philosophy

Whitespace is not empty space but an active design element. The system celebrates generous margins and padding to create breathing room, emphasizing luxury and contemplation. Sections are separated by substantial vertical spacing (`60px–100px`) rather than visual dividers. Content blocks maintain ample internal padding (`24px–60px`) to prevent cramping. This approach reinforces the serene, unhurried brand personality and improves content comprehension and visual hierarchy.

### Border Radius Scale

- `0px`: Sharp corners for structural elements (containers, cards with emphasis)
- `2px`: Subtle rounding for form inputs and checkboxes
- `4px`: Standard rounding for buttons, cards, and standard components
- `8px`: Moderate rounding for larger modals and overlays
- `16px`: Generous rounding for badges and small accent elements
- `50%`: Full circularity for icon buttons and avatars

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Base (L0) | No shadow, flat surface | Backgrounds, base containers, body content |
| Raised (L1) | `0px 2px 8px rgba(0, 0, 0, 0.08)` | Standard cards, buttons at rest, form elements |
| Floating (L2) | `0px 4px 16px rgba(0, 0, 0, 0.12)` | Cards on hover, floating action buttons, popovers |
| Modal (L3) | `0px 8px 32px rgba(0, 0, 0, 0.16)` | Modals, dropdowns, elevated overlays |
| Maximum (L4) | `0px 12px 48px rgba(0, 0, 0, 0.2)` | Full-screen overlays, top-level modals |

**Shadow Philosophy**: Shadows are minimal and subtle, reinforcing the calm, refined aesthetic. Elevation is achieved primarily through spacing and color contrast rather than dramatic depth. Shadows use low opacity and soft blur to suggest gentle floating rather than heavy lifting. This maintains the serene, luxury feel while preserving clear visual hierarchy and interaction feedback.

## 7. Do's and Don'ts

### Do

- **Use generous whitespace**: Allocate at least `60px` between major sections to maintain breathing room and luxury feeling
- **Prioritize readability**: Maintain minimum `16px` font size for body text and `27.2px` line height for comfort
- **Employ the color hierarchy**: Use Ocean Teal (`#AADDDD`) for primary CTAs, reserving Sage Green and accents for secondary interactions
- **Layer with subtle shadows**: Apply gentle L1 shadows (`0px 2px 8px rgba(0, 0, 0, 0.08)`) to cards and interactive elements for depth without heaviness
- **Center on large screens**: Use the `1440px` max width with centered containers to leverage horizontal whitespace on desktop
- **Maintain serif-sans contrast**: Deploy Reforma1969 for headings and Inter for body/UI to create clear visual separation
- **Use Ocean Teal strategically**: Reserve this primary accent for high-priority CTAs and hover states to maximize impact
- **Test on mobile first**: Verify that content remains readable and accessible when stacked vertically

### Don't

- **Don't overcrowd**: Avoid padding less than `24px` in card interiors or sectioning content too densely
- **Don't mix too many colors**: Limit accent color usage to Teal, Sage Green, and one additional complementary color per page
- **Don't use dark text on colored backgrounds**: Maintain the high contrast pairing of `#020101` on Teal and `#FFFFFF` on dark neutrals
- **Don't apply heavy shadows**: Avoid shadows beyond L2 level (`0px 4px 16px`) unless creating a modal overlay
- **Don't change border radius inconsistently**: Stick to the defined scale (`0px`, `2px`, `4px`, `16px`, `50%`) for visual cohesion
- **Don't reduce line height below 1.6x**: Cramped line heights compromise the luxury, readable aesthetic
- **Don't use rounded corners on hero/full-bleed sections**: Reserve rounding for contained components; let hero sections breathe with sharp edges
- **Don't display more than three accent colors on a single page**: Limit vibrancy to Teal, Sage, and one warning/error state for clarity

## 8. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | < 768px | Single column, `16px` padding, `32px` section spacing, stacked navigation, `14px` body font |
| Tablet | 768px–1023px | 8-column grid, `24px` padding, `48px` section spacing, hamburger menu, `15px` body font |
| Desktop | 1024px–1439px | 12-column grid, `40px` padding, `60px` section spacing, full navigation, `16px` body font |
| Large Desktop | 1440px+ | 12-column grid, `1440px` max width centered, `80px` outer padding, full navigation |

### Touch Targets

- **Minimum Size**: `44px × 44px` for all interactive elements (buttons, links, icon buttons)
- **Safe Spacing**: Minimum `12px` gap between adjacent touch targets
- **Primary Button**: `48px` height on mobile, `40px` on desktop
- **Navigation Items**: `48px` minimum height for menu items
- **Checkbox/Radio**: `18px` size with `20px` click target area including padding

### Collapsing Strategy

- **Hero Text**: Reduce h1 from `65px` to `40px` on tablet, `32px` on mobile
- **Heading Sizes**: Scale all headings down by 20% at tablet, 35% on mobile (h2: `20px` → `16px` → `13px`)
- **Padding Reduction**: Halve section padding on mobile: `80px` → `40px` → `16px`
- **Grid Columns**: Reflow from 12 to 8 columns at tablet; stack to 1 column on mobile
- **Navigation**: Replace horizontal menu with hamburger drawer on tablets and mobile
- **Card Layout**: Display single-column card stacks on mobile; 2-column on tablet; 3–4 columns on desktop
- **Font Sizing**: Reduce body font from `16px` to `15px` on tablet, `14px` on mobile to fit narrower containers
- **Spacing Scale**: Compress vertical spacing proportionally: use `40px` instead of `60px` on tablet, `24px` on mobile

## 9. Agent Prompt Guide

### Quick Color Reference

- **Primary CTA**: Ocean Teal (`#AADDDD`) — all primary calls-to-action, hover states, active interactive elements
- **Background**: White (`#FFFFFF`) — cards, containers, main content areas
- **Heading Text**: Deep Navy (`#020101`) or Charcoal (`#222222`) — all typographic hierarchy
- **Body Text**: Charcoal (`#222222`) — long-form content and standard body copy
- **Error State**: Danger Red (`#FA4612`) — validation errors and critical alerts
- **Warning State**: Warning Gold (`#FFBA00`) — cautionary messages and non-critical issues
- **Secondary Accent**: Sage Green (`#CEF093`) — secondary buttons, highlights, supplementary actions
- **Border/Divider**: Light Gray (`#DDDDDD`) — subtle lines separating sections
- **Disabled/Placeholder**: Mid Gray (`#686868`) — disabled form fields, secondary text

### Iteration Guide

1. **Always start with Ocean Teal** (`#AADDDD`) for primary interactive elements and CTAs; it is the system's signature color and most-used accent.

2. **Maintain generous spacing** between major sections (`60px–100px`), components (`24px`), and within components (`16px`); whitespace is a design feature, not wasted space.

3. **Use Reforma1969 serif exclusively for headings** (h1–h6); never apply it to body text or UI labels. Pair with Inter sans-serif for body and functional elements.

4. **Apply subtle, consistent shadows**: L1 (`0px 2px 8px rgba(0, 0, 0, 0.08)`) for standard components, L2 (`0px 4px 16px rgba(0, 0, 0, 0.12)`) only on hover/interactive states. Avoid heavy shadows.

5. **Enforce high contrast** with text color `#222222` or `#020101` on light backgrounds; use `#FFFFFF` text only on dark (`#020101`) or strongly colored (`#AADDDD`) backgrounds.

6. **Scale typography responsively**: Reduce h1 by 20% on tablet (`52px`), 35% on mobile (`42px`); reduce body font from `16px` → `15px` → `14px` across breakpoints.

7. **Stick to the border radius scale** (`0px`, `2px`, `4px`, `16px`, `50%`); circular buttons are `50%`; standard UI is `4px`; form inputs are `4px` with `2px` borders.

8. **Limit the color palette per page**: Use Ocean Teal + one secondary accent + neutral greys + one status color (error/warning). Avoid color chaos.

9. **Mobile-first collapsing**: Stack to single column, reduce padding by 50%, simplify navigation to hamburger menu, collapse hero text to readable sizes (`32px` h1 max on mobile).

10. **Honor the 1440px container max width** on large screens with equal padding on both sides; use the full grid system with `40px` gutters for multi-column layouts; ensure sections center visually.
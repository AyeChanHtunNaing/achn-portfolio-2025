export const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'resume', label: 'Resume' },
  { id: 'projects', label: 'Projects' },
  { id: 'awards', label: 'Awards' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'contact', label: 'Contact' },
] as const;

export type HomeSectionId = (typeof NAV_ITEMS)[number]['id'];

export const getSectionRoute = (sectionId: HomeSectionId) => {
  if (sectionId === 'projects') {
    return '/projects';
  }

  return `/#${sectionId}`;
};

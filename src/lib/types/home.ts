import z from 'zod';

export const PageNavSpec = z.enum(['home', 'diceBag']);
export type PageNav = z.infer<typeof PageNavSpec>;
export const PageNavTitles: Record<PageNav, string> = {
  home: 'Home',
  diceBag: 'Dice Bag',
};

import en, { type Dict } from './en';
import fr from './fr';
import nl from './nl';
import type { Locale } from '../content';

export const dicts: Record<Locale, Dict> = { en, fr, nl };
export type { Dict };

import * as z from 'zod';

export const ColorSchemeSpec = z.enum(['blue', 'red']);
export type ColorScheme = z.infer<typeof ColorSchemeSpec>;
export const ColorSchemeTitles: Record<ColorScheme, string> = {
    blue: 'Blue',
    red: 'Red'
};

export const CampaignPreferencesSpec = z.object({
    colorScheme: ColorSchemeSpec,
});
export type CampaignPreferences = z.infer<typeof CampaignPreferencesSpec>;

export const CampaignSpec = z.object({
    name: z.string(),
    path: z.string(),
    description: z.string(),
    preferences: CampaignPreferencesSpec,
});
export type Campaign = z.infer<typeof CampaignSpec>;

export const CampaignsByNameSpec = z.record(z.string(), CampaignSpec);
export type CampaignsByName = z.infer<typeof CampaignsByNameSpec>;

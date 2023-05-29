import { FeatureFlags } from "@/feature-flags";

export const warningPrompt = (key: string) =>
  `Feature flag "${key}" not found. Please add it to feature-flags.tsx if you want to use it.`;

export const updateFeatureFlags = (
  featureFlags: FeatureFlags[],
  key: string,
  enabled: boolean
) => {
  return featureFlags.map((ff) => (ff.key === key ? { ...ff, enabled } : ff));
};

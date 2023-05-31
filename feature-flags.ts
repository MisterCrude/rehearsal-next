export interface FeatureFlags {
  key: string;
  enabled: boolean;
  title?: string;
  description?: string;
}

/**
 * Represents a feature flag in the app.
 * @typedef {Object} FeatureFlag
 * @property {string} key - The unique identifier for the feature flag.
 * @property {boolean} value - The current/initial state of the feature flag in the app.
 * @property {string=} description - Optional description of the feature flag.
 * @property {string=} title - Optional title of the feature flag. If not passed, key will be used.
 */

/**
 * An object representing a feature flag in the app.
 * @type {FeatureFlag}
 */
const featureFlags: FeatureFlags[] = [
  {
    key: "rooms",
    enabled: true,
    title: "Rooms",
    description: "Rooms collapsible list below each card in home page listing",
  },
];

export default featureFlags;

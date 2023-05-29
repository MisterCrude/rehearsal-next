import { useEffect, useState } from "react";

import defaultFeatureFlags, { FeatureFlags } from "@/feature-flags";
import { getItem, setItem } from "@/services/local-storage";

import { updateFeatureFlags, warningPrompt } from "./utils";

const useFeatureFlags = () => {
  const [featureFlags, setFeatureFlags] = useState<FeatureFlags[]>([]);

  const toggleFeatureFlag = (key: string, enabled: boolean) => {
    const ff = featureFlags.find((ff) => key === ff.key);

    // Feature flag not found
    if (!ff) {
      console.warn(warningPrompt(key));
      return;
    }

    // Add new value
    setItem<FeatureFlags[]>(
      "featureFlags",
      updateFeatureFlags(featureFlags, key, enabled)
    );
  };

  const isFeatureEnabled = (key: string) => {
    return Boolean(featureFlags.find((ff) => key === ff.key)?.enabled);
  };

  useEffect(() => {
    const storedFeatureFlags = getItem<FeatureFlags[]>("featureFlags");

    setFeatureFlags(storedFeatureFlags || defaultFeatureFlags);
  }, []);

  return { toggleFeatureFlag, featureFlags, isFeatureEnabled };
};

export default useFeatureFlags;

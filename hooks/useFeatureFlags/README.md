### How to use

```tsx
  const { isFeatureEnabled, toggleFeatureFlag } = useFeatureFlags();

//...

return <>
    //...
    <button
        onClick={() => {
            toggleFeatureFlag("rooms", true);
        }}
    >
    //...
    {isFeatureEnabled("rooms") && (
        // Some feature
    )}
    //...
</>
```

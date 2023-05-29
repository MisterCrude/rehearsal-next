const AnalyticsScript = () => (
  <script
    async
    data-id={process.env.CLICKY_DATA_ID}
    src="//static.getclicky.com/js"
  />
);

export default AnalyticsScript;

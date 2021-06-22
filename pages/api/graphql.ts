import proxy from "@/modules/api/proxy";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default proxy({
  target: process.env.NEXT_PUBLIC_API_URL,
  changeOrigin: true,
  pathRewrite: { "^/api": "" },
  logLevel: "silent",
});

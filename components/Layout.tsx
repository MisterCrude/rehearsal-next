import { useGetContentPayload } from "@/api/content-payload";
import { BRAND_NAME } from "@/constants";
import { richTextToComponents } from "@/utils/mappers/richTextToComponents";
import Box from "@mui/material/Box";
import { PropsWithChildren } from "react";
import Cookiebar from "./Cookiebar";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

export default function Layout({ children }: PropsWithChildren) {
  const cookieContent = useGetContentPayload("cookie-content");

  return (
    <Box sx={{ minHeight: "100vh", flexDirection: "column", display: "flex" }}>
      <Header />
      <Main>{children}</Main>
      <Footer title={BRAND_NAME} />
      {cookieContent.isSuccess && (
        <Cookiebar message={richTextToComponents(cookieContent.data.content)} />
      )}
    </Box>
  );
}

import { BRAND_NAME } from "@/constants";
import { useGetContentPayload } from "@/resources/rest/content-payload";
import { richTextToComponents } from "@/utils/mappers/richTextToComponents";
import Box from "@mui/material/Box";
import { PropsWithChildren } from "react";
import Cookiebar from "../components/Cookiebar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";

export default function Primary({ children }: PropsWithChildren) {
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

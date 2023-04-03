import {
  documentToReactComponents,
  Options,
} from "@contentful/rich-text-react-renderer";
import { Document, INLINES } from "@contentful/rich-text-types";
import Link from "@mui/material/Link";
import { EntryFields } from "contentful";

export const richTextToComponents = (richText: EntryFields.RichText): any => {
  const optinos: Options = {
    renderNode: {
      [INLINES.HYPERLINK]: (node, children) => (
        <Link href={node.data.uri} color="inherit" target="_blank">
          {children}
        </Link>
      ),
    },
  };

  return documentToReactComponents(richText as Document, optinos);
};

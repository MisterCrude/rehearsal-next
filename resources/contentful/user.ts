import { UserDto } from "@/resources/dto/user";

import { managementApiClient } from "./apiClient";

export const createUser = async (email: string) => {
  const createdUser = await managementApiClient.entry.create(
    {
      spaceId: process.env.CONTENTFUL_SPACE_ID || "",
      environmentId: process.env.CONTENTFUL_ENVIRONMENT_ID || "",
      contentTypeId: "user",
    },
    {
      fields: {
        email: {
          [process.env.CONTENTFUL_DEFAULT_LOCALE || ""]: email,
        },
      },
    }
  );

  return {
    id: createdUser.sys.id,
    email,
  };
};

export const getOrCreateUser = async (email: string) => {
  const user = await managementApiClient.entry.getMany({
    "fields.email[match]": email,
  });

  if (user.total > 0) {
    return {
      id: user.items[0].sys.id,
      email,
    };
  }

  if (user.total > 0) {
    throw new Error(`More than 1 user created using  "${email}" email address`);
  }

  return createUser(email);
};

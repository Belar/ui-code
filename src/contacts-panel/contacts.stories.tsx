import { Story } from "@storybook/react";
import React from "react";

import { SearchList, Props as searchListProps } from "./SearchList";

export default {
  title: "Contacts/Search",
  component: SearchList,
  parameters: {
    docs: {
      description: {
        component:
          'Based on "New Message" from day #1235 of [uidesigndaily.com](https://www.uidesigndaily.com/posts/figma-new-message-pop-up-modal-day-1235). Photos: [Allef Vinicius](https://unsplash.com/photos/c9jTFfa7Njg), [Min Ann](https://www.pexels.com/photo/woman-in-v-neck-trumpet-sleeved-dress-1115697/), [Jackson David](https://www.pexels.com/photo/man-wearing-crew-neck-shirt-3147528/)',
      },
    },
    backgrounds: {
      default: "fadedBlue",
      values: [{ name: "fadedBlue", value: "#F4F6FA" }],
    },
  },
};

const Template: Story<searchListProps> = (args) => <SearchList {...args} />;

export const search = Template.bind({});
search.args = {
  title: "New message",
  list: {
    title: "Recent conversation",
    items: [
      {
        imageUrl: "post_author.jpg",
        label: "David Jacobsen",
        sublabel: "@davj",
      },
      {
        imageUrl: "person-2.jpg",
        label: "Daniel Doe",
        sublabel: "@dand",
      },
      {
        imageUrl: "person-3.jpg",
        label: "Jenna Lou",
        sublabel: "@JLou",
      },
    ],
  },
};

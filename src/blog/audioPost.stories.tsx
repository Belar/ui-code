import { Story } from "@storybook/react";
import React from "react";

import { AudioPost, Props as audioPostProps } from "./AudioPost";

export default {
  title: "Blog/Audio Post",
  component: AudioPost,
  parameters: {
    docs: {
      description: {
        component:
          'Based on "Blog Components" from day #1148 of [uidesigndaily.com](https://www.uidesigndaily.com/posts/figma-blog-components-article-card-day-1148)',
      },
    },
    backgrounds: {
      default: "sky",
      values: [
        { name: "sky", value: "linear-gradient(45deg, #DFEAF4, #FFFFFF)" },
      ],
    },
  },
  argTypes: {
    textColor: { control: "color" },
  },
};

const Template: Story<audioPostProps> = (args) => <AudioPost {...args} />;

export const idle = Template.bind({});
idle.args = {
  category: "Containers",
  heading: "Recap: Kubernetes",
  postedTime: "2h ago",
};

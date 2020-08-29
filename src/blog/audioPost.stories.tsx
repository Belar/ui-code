import { Story } from "@storybook/react";
import React from "react";

import { AudioPost, Props as audioPostProps } from "./AudioPost";

export default {
  title: "Blog/Audio Post",
  component: AudioPost,
  parameters: {
    backgrounds: {
      default: "sky",
      values: [
        { name: "sky", value: "linear-gradient(45deg, #DFEAF4, #FFFFFF)" },
      ],
    },
  },
};

const Template: Story<audioPostProps> = (args) => <AudioPost {...args} />;

export const idle = Template.bind({});
idle.args = {
  category: "Containers",
  heading: "Recap: Kubernetes",
  postedTime: "2h ago",
};

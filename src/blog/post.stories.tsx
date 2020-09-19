import { Story } from "@storybook/react";
import React from "react";

import { Post, Props as postProps } from "./Post";

export default {
  title: "Blog/Post",
  component: Post,
  parameters: {
    docs: {
      description: {
        component:
          'Based on "Blog Components" from day #1148 of [uidesigndaily.com](https://www.uidesigndaily.com/posts/figma-blog-components-article-card-day-1148). Photo by [Allef Vinicius](https://unsplash.com/@seteph) on [Unsplash](https://unsplash.com/photos/c9jTFfa7Njg)',
      },
    },
    backgrounds: {
      default: "sky",
      values: [
        { name: "sky", value: "linear-gradient(45deg, #DFEAF4, #FFFFFF)" },
      ],
    },
  },
};

const Template: Story<postProps> = (args) => <Post {...args} />;

export const plain = Template.bind({});
plain.args = {
  heading: "The 8 Pillars of Application Performance",
  readTime: "12 min read",
};

export const metadata = Template.bind({});
metadata.args = {
  category: "Solutions Architecture",
  heading: "Token-based Authentication with JMeter",
  imageUrl: "post_author.jpg",
  author: "Jessie Holmes",
  postedTime: "29 Jul 2010",
  primaryActionLabel: "Start reading",
};

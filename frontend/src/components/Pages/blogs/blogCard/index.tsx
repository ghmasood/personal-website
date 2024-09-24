import React from 'react';

import clsx from 'clsx';

import type { blogListItem } from 'types/strapi-backend';

interface IBlogCardProps {
  className?: string;
  data: blogListItem;
}

function BlogCard({ className = '' }: IBlogCardProps) {
  return <div className={clsx([className])}>BlogCard</div>;
}

export default BlogCard;

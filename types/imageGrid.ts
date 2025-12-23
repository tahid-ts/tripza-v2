export interface ImageGridItem {
  id: string;
  src: string;
  alt?: string;
  colSpan?: number;
  rowSpan?: number;
  colStart?: number;
  rowStart?: number;
}

export interface ImageGridProps {
  items: ImageGridItem[];
}

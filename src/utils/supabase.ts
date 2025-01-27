export interface DirectoryItem {
  id: string;
  title: string;
  description: string;
  content: string;
  tags: string[];
  lang: string;
  created_at: string;
  updated_at: string;
}

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  content: string;
  published_date: string;
  lang: string;
  tags: string[];
  created_at: string;
  updated_at: string;
}